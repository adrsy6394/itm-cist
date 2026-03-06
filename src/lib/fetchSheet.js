/**
 * src/lib/fetchSheet.js
 *
 * Low-level Google Sheets fetch utilities.
 *
 * Google Sheets publish formats:
 *
 *   CSV  — https://docs.google.com/spreadsheets/d/{ID}/export?format=csv&gid={GID}
 *   JSON — https://docs.google.com/spreadsheets/d/{ID}/gviz/tq?tqx=out:json&sheet={SHEET_NAME}
 *
 * Both are accessible via plain fetch() with no API key required
 * as long as the sheet is published to the web (File → Share → Publish to web).
 *
 * CORS: Google Sheets CSV/JSON exports include CORS headers for public sheets.
 */

/* ─── Format detection ──────────────────────────────────────────────────────── */

/**
 * Detect whether a given URL points to a Google Sheets JSON export
 * (gviz/tq endpoint) or a plain CSV export.
 */
export function detectFormat(url = '') {
  if (!url) return null
  if (url.includes('gviz/tq') || url.includes('tqx=out:json')) return 'json'
  if (url.includes('format=csv') || url.endsWith('.csv')) return 'csv'
  // Default assumption for unrecognised URLs
  return 'csv'
}

/* ─── CSV parser ────────────────────────────────────────────────────────────── */

/**
 * Lightweight, dependency-free CSV parser.
 * Handles:
 *   - Quoted fields (including quoted commas and embedded newlines)
 *   - Skipping empty rows
 *   - Trimming leading/trailing whitespace from fields
 *
 * Returns an array of objects keyed by the first-row headers (lower-cased,
 * spaces replaced with underscores).
 *
 * @param {string} text — raw CSV string
 * @returns {{ headers: string[], rows: Record<string, string>[] }}
 */
export function parseCSV(text) {
  if (!text || !text.trim()) return { headers: [], rows: [] }

  // Split into lines, handling \r\n and \n
  const raw = text.replace(/\r\n?/g, '\n')
  const lines = splitCSVLines(raw)
  if (!lines.length) return { headers: [], rows: [] }

  const headers = parseCSVRow(lines[0]).map(normaliseKey)
  const rows    = []

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVRow(lines[i])
    if (values.every((v) => !v.trim())) continue   // skip blank rows
    const row = {}
    headers.forEach((h, idx) => { row[h] = (values[idx] ?? '').trim() })
    rows.push(row)
  }

  return { headers, rows }
}

/** Split CSV text into logical lines, respecting quoted newlines */
function splitCSVLines(text) {
  const lines = []
  let current = ''
  let inQuotes = false
  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
    if (ch === '"') { inQuotes = !inQuotes }
    if (ch === '\n' && !inQuotes) { lines.push(current); current = ''; continue }
    current += ch
  }
  if (current) lines.push(current)
  return lines
}

/** Parse one CSV row, handling quoted fields */
function parseCSVRow(line) {
  const fields = []
  let current = ''
  let inQuotes = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') { current += '"'; i++; continue }
      inQuotes = !inQuotes
    } else if (ch === ',' && !inQuotes) {
      fields.push(current); current = ''; continue
    } else {
      current += ch
    }
  }
  fields.push(current)
  return fields
}

/** Normalise a CSV header to a safe JS key: lowercase, spaces → underscores */
function normaliseKey(str) {
  return str.trim().toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '')
}

/* ─── Google Sheets gviz/tq JSON parser ─────────────────────────────────────── */

/**
 * Parse the gviz/tq JSON response.
 *
 * Google wraps the response in a JSONP-like string:
 *   google.visualization.Query.setResponse({...})
 * so we need to strip that prefix/suffix before JSON.parse.
 *
 * Returns the same shape as parseCSV: { headers, rows }
 */
export function parseGvizJSON(rawText) {
  // Strip JSONP wrapper: /*O_o*/\ngoogle.visualization.Query.setResponse({...});
  const stripped = rawText
    .replace(/^.*?\(/, '')   // remove up to first (
    .replace(/\);?\s*$/, '') // remove trailing );
  const data = JSON.parse(stripped)

  const cols = data.table?.cols ?? []
  const rowsRaw = data.table?.rows ?? []

  const headers = cols.map((c) => normaliseKey(c.label || c.id))

  const rows = rowsRaw
    .map((row) => {
      const obj = {}
      cols.forEach((col, i) => {
        const key = headers[i]
        const cell = row.c?.[i]
        obj[key] = cell?.f ?? cell?.v ?? ''  // prefer formatted value, then raw
      })
      return obj
    })
    .filter((obj) => Object.values(obj).some((v) => String(v).trim()))

  return { headers, rows }
}

/* ─── Core fetch function ───────────────────────────────────────────────────── */

/**
 * Fetch a published Google Sheet and return parsed rows.
 *
 * @param {string} url — published CSV or gviz/tq URL
 * @param {{ signal?: AbortSignal }} options
 * @returns {Promise<{ headers: string[], rows: Record<string, string>[] }>}
 * @throws {Error} on network failure or bad HTTP status
 */
export async function fetchSheet(url, { signal } = {}) {
  if (!url || !url.trim()) {
    throw new Error('Sheet URL is not configured. Add it via the Admin Panel.')
  }

  const response = await fetch(url, { signal })

  if (!response.ok) {
    throw new Error(`Failed to fetch sheet (HTTP ${response.status}). Check that the sheet is published to the web.`)
  }

  const format = detectFormat(url)
  const text   = await response.text()

  if (format === 'json') {
    return parseGvizJSON(text)
  }
  return parseCSV(text)
}
