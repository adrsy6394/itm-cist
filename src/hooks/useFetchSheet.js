/**
 * src/hooks/useFetchSheet.js
 *
 * Universal React hook for fetching and mapping Google Sheets data.
 *
 * Features:
 *   ✓ Supports both CSV and gviz/tq JSON formats (auto-detected from URL)
 *   ✓ AbortController — cancels in-flight requests on unmount / URL change
 *   ✓ Retry logic — retries up to `retries` times with exponential back-off
 *   ✓ Caching — results cached in module-level Map keyed by URL
 *   ✓ Loading, error, data states
 *   ✓ enabled flag — skip fetching when URL is empty / feature disabled
 *   ✓ refresh() — manually re-fetch (bypasses cache)
 *
 * Usage:
 *   const { data, loading, error, refresh } = useFetchSheet(url, {
 *     mapper: mapSchedule,
 *     enabled: !!url,
 *   })
 *
 * @param {string|undefined}  url     — Published Google Sheets URL
 * @param {object}            options
 * @param {Function}          options.mapper   — Row mapper fn from sheetMappers.js
 * @param {boolean}           options.enabled  — Set to false to skip fetching (default: true)
 * @param {number}            options.retries  — Max retry attempts on failure (default: 2)
 * @param {number}            options.cache    — Cache TTL in ms; 0 = no cache (default: 5min)
 */

import { useState, useEffect, useRef, useCallback } from 'react'
import { fetchSheet } from '@/lib/fetchSheet'
import { mapRaw } from '@/lib/sheetMappers'

/* ── Module-level result cache ──────────────────────────────────────────────── */
// Map<url, { data: any[], ts: number }>
const CACHE = new Map()
const DEFAULT_TTL = 5 * 60 * 1000   // 5 minutes

function isCacheValid(url, ttl) {
  if (!ttl || !CACHE.has(url)) return false
  const { ts } = CACHE.get(url)
  return Date.now() - ts < ttl
}

/* ── Hook ───────────────────────────────────────────────────────────────────── */
function useFetchSheet(url, options = {}) {
  const {
    mapper  = mapRaw,
    enabled = true,
    retries = 2,
    cache   = DEFAULT_TTL,
  } = options

  const [data,    setData]    = useState([])
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState(null)

  // Track if this is a manual refresh (bypass cache)
  const refreshCount = useRef(0)

  /* ── fetch logic ── */
  const load = useCallback(
    async (signal, forceRefresh = false) => {
      if (!url || !enabled) return

      // Serve from cache if valid and not a manual refresh
      if (!forceRefresh && isCacheValid(url, cache)) {
        const { data: cached } = CACHE.get(url)
        setData(cached)
        setError(null)
        return
      }

      setLoading(true)
      setError(null)

      let attempt = 0
      let lastErr = null

      while (attempt <= retries) {
        try {
          const { rows } = await fetchSheet(url, { signal })
          const mapped   = mapper(rows)

          // Store in cache
          if (cache > 0) CACHE.set(url, { data: mapped, ts: Date.now() })

          if (!signal.aborted) {
            setData(mapped)
            setError(null)
            setLoading(false)
          }
          return

        } catch (err) {
          if (err.name === 'AbortError') return    // unmounted — silently exit
          lastErr = err
          attempt++

          if (attempt <= retries) {
            // Exponential back-off: 500 ms, 1 000 ms, 2 000 ms …
            await new Promise((r) => setTimeout(r, 500 * Math.pow(2, attempt - 1)))
          }
        }
      }

      // All retries exhausted
      if (!signal?.aborted) {
        setError(lastErr?.message ?? 'Failed to load data from Google Sheets')
        setLoading(false)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [url, enabled, mapper, retries, cache, refreshCount.current],
  )

  /* ── Effect — runs on mount and when url/enabled changes ── */
  useEffect(() => {
    const controller = new AbortController()
    load(controller.signal)
    return () => controller.abort()
  }, [load])

  /* ── Manual refresh — busts cache ── */
  const refresh = useCallback(() => {
    if (url) CACHE.delete(url)
    refreshCount.current += 1

    const controller = new AbortController()
    load(controller.signal, true)
    // Note: can't abort this one on unmount easily without restructuring,
    // but it's a manual user action so acceptable.
  }, [url, load])

  return { data, loading, error, refresh }
}

export default useFetchSheet
