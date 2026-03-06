/**
 * src/lib/sheetMappers.js
 *
 * Domain-specific row mappers for each Google Sheet data source.
 *
 * Each mapper takes the `rows` array from fetchSheet() (array of objects keyed
 * by normalised column names) and returns clean, typed domain objects.
 *
 * Normalised key format: lowercase, spaces → underscores.
 * e.g. "Event Name" → "event_name",  "Date" → "date", "Status" → "status"
 *
 * If your sheet uses different column names, update the key lookups below.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/* ── helpers ─────────────────────────────────────────────────────────────────── */

let _uid = 0
const uid = () => `row_${++_uid}`

const get = (row, ...keys) => {
  for (const k of keys) if (row[k] !== undefined && row[k] !== '') return String(row[k]).trim()
  return ''
}

/* ─── Important Dates mapper ──────────────────────────────────────────────────

  Expected columns (case-insensitive):
    Event / Event Name / Label    — milestone name
    Date / Deadline               — date string
    Status                        — "upcoming" | "today" | "expired" (optional; defaults to "upcoming")

 ───────────────────────────────────────────────────────────────────────────── */
export function mapImportantDates(rows) {
  return rows.map((row) => {
    const label  = get(row, 'event', 'event_name', 'label', 'milestone', 'name')
    const date   = get(row, 'date', 'deadline', 'due_date', 'due')
    const status = get(row, 'status', 'state') || 'upcoming'
    if (!label && !date) return null   // skip fully empty rows

    return {
      id:     uid(),
      label:  label || '—',
      date:   date  || 'To be announced',
      status: ['upcoming', 'today', 'expired'].includes(status.toLowerCase())
                ? status.toLowerCase()
                : 'upcoming',
    }
  }).filter(Boolean)
}

/* ─── Schedule mapper ─────────────────────────────────────────────────────────

  Expected columns (case-insensitive):
    Day          — "1" | "2" | "3"
    Time / Start — start time string (e.g. "09:00 AM")
    End / End Time — end time (optional)
    Title / Session / Event
    Speaker / Presenter
    Venue / Room / Hall
    Type         — "session" | "keynote" | "break" | "ceremony" (optional; inferred if blank)

 ───────────────────────────────────────────────────────────────────────────── */
export function mapSchedule(rows) {
  return rows.map((row) => {
    const day      = get(row, 'day', 'day_no', 'day_number')
    const time     = get(row, 'time', 'start', 'start_time', 'from')
    const endTime  = get(row, 'end', 'end_time', 'to', 'until')
    const title    = get(row, 'title', 'session', 'event', 'session_title', 'event_title')
    const speaker  = get(row, 'speaker', 'presenter', 'speakers')
    const venue    = get(row, 'venue', 'room', 'hall', 'location')
    const rawType  = get(row, 'type', 'session_type', 'category')
    if (!title && !time) return null

    // Infer type from title keywords if column missing
    let type = rawType.toLowerCase()
    if (!type) {
      const t = title.toLowerCase()
      if (t.includes('keynote'))                      type = 'keynote'
      else if (t.includes('break') || t.includes('lunch') || t.includes('tea')) type = 'break'
      else if (t.includes('inaugu') || t.includes('valedic') || t.includes('ceremony')) type = 'ceremony'
      else                                             type = 'session'
    }

    return { id: uid(), day: day || '1', time, endTime, title, speaker, venue, type }
  }).filter(Boolean)
}

/* ─── Speakers mapper ─────────────────────────────────────────────────────────

  Expected columns (case-insensitive):
    Name / Speaker Name
    Designation / Title / Dept
    Affiliation / Institution / Organisation / College
    Role         — "Keynote Speaker" | "Invited Speaker" (optional)
    Topic / Talk / Talk Title (optional)
    Image / Photo / Image URL / Photo URL (optional)

 ───────────────────────────────────────────────────────────────────────────── */
export function mapSpeakers(rows) {
  return rows.map((row) => {
    const name        = get(row, 'name', 'speaker_name', 'speaker')
    const designation = get(row, 'designation', 'title', 'dept', 'position')
    const affiliation = get(row, 'affiliation', 'institution', 'organisation', 'organization', 'college', 'university')
    const role        = get(row, 'role', 'type', 'category') || 'Invited Speaker'
    const topic       = get(row, 'topic', 'talk', 'talk_title', 'paper_title')
    const imageSrc    = get(row, 'image', 'photo', 'image_url', 'photo_url', 'picture')
    if (!name) return null

    return { id: uid(), name, designation, affiliation, role, topic, imageSrc: imageSrc || null }
  }).filter(Boolean)
}

/* ─── Generic pass-through mapper ─────────────────────────────────────────────
  Returns rows as-is — useful when you just want raw sheet data.
 ───────────────────────────────────────────────────────────────────────────── */
export function mapRaw(rows) {
  return rows.map((row) => ({ id: uid(), ...row }))
}
