import { useState, useMemo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Clock, AlertCircle, RefreshCw } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, viewport } from '@/lib/animations'
import PageBanner from '@/components/layout/PageBanner'
import Container from '@/components/layout/Container'
import { SectionHeader } from '@/components/common'
import { Button } from '@/components/ui'
import {
  setSchedule,
  selectSessions,
  selectScheduleLoading,
  selectScheduleError,
} from '@/features/schedule/scheduleSlice'
import { LINKS } from '@/config/siteConfig'
import useFetchSheet from '@/hooks/useFetchSheet'
import { mapSchedule } from '@/lib/sheetMappers'
import { SCHEDULE_SESSIONS, SCHEDULE_DAYS } from '@/data/schedule'

const BREADCRUMBS = [{ label: 'Schedule' }]

const TYPE_STYLE = {
  keynote:  { bar: 'border-l-pro-blue', badge: 'bg-pro-blue/10 text-pro-blue',  label: 'Keynote' },
  session:  { bar: 'border-l-teal',     badge: 'bg-teal/10 text-teal',          label: 'Technical' },
  break:    { bar: 'border-l-slate-200',badge: 'bg-slate-100 text-slate-400',   label: 'Break' },
  ceremony: { bar: 'border-l-amber-400',badge: 'bg-amber-50 text-amber-700',    label: 'Ceremony' },
}

/**
 * Schedule — integrated with useFetchSheet
 *
 * Data priority order:
 *   1. Google Sheet URL (from Redux sheetLinks.schedule)
 *   2. Redux store sessions (set by admin / direct dispatch)
 *   3. Static fallback from data/schedule.js
 */
function Schedule() {
  const dispatch = useDispatch()
  const storeSessions = useSelector(selectSessions)
  const sheetUrl = LINKS.scheduleSheetUrl

  const { data: sheetSessions, loading: sheetLoading, error: sheetError, refresh } =
    useFetchSheet(sheetUrl, {
      mapper: mapSchedule,
      enabled: !!sheetUrl,
    })

  // Sync with store when data arrives
  useEffect(() => {
    if (sheetSessions.length > 0) {
      dispatch(setSchedule(sheetSessions))
    }
  }, [sheetSessions, dispatch])

  // Resolve data source: sheet → redux store → static fallback
  const isLive = sheetUrl && sheetSessions.length > 0
  const sessions = isLive
    ? sheetSessions
    : storeSessions.length
      ? storeSessions
      : SCHEDULE_SESSIONS

  const loading = sheetLoading
  const error   = sheetError

  // Derive unique days from sessions for the day tabs
  const days = useMemo(() => {
    const seen = new Set()
    const result = []
    sessions.forEach((s) => {
      if (!seen.has(s.day)) {
        seen.add(s.day)
        result.push({ id: s.day, label: `Day ${s.day}` })
      }
    })
    return result.length ? result : SCHEDULE_DAYS
  }, [sessions])

  const [activeDay, setActiveDay] = useState(days[0]?.id ?? '1')

  const daySessions = useMemo(
    () => sessions.filter((s) => s.day === activeDay),
    [sessions, activeDay],
  )

  return (
    <main>
      <PageBanner
        title="Conference Schedule"
        description="Full programme for all sessions across CIST 2025 conference days."
        breadcrumbs={BREADCRUMBS}
      />

      <section className="section-padding">
        <Container>

          {/* ── Header row ── */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="flex items-start justify-between mb-6 gap-4 flex-wrap">
            <SectionHeader
              title="Programme Schedule"
              subtitle="All times are in IST (Indian Standard Time)."
            />
            {sheetUrl && (
              <Button
                variant="ghost"
                size="sm"
                onClick={refresh}
                disabled={loading}
                className="shrink-0 mt-1"
                title="Reload from Google Sheet"
              >
                <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
                {loading ? 'Loading…' : 'Refresh'}
              </Button>
            )}
          </motion.div>

          {/* No URL notice */}
          {!sheetUrl && (
            <div className="flex items-start gap-2.5 bg-blue-50 border border-blue-200 rounded-md p-3 mb-5 text-xs text-blue-700">
              <AlertCircle size={13} className="shrink-0 mt-0.5 text-blue-400" />
              Showing placeholder data. Set VITE_SCHEDULE_SHEET_URL in your .env file.
            </div>
          )}

          {/* Error notice */}
          {error && sheetUrl && (
            <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 rounded-md p-3 mb-5 text-xs text-red-700">
              <AlertCircle size={13} className="shrink-0 mt-0.5 text-red-400" />
              Could not load schedule: {error}. Showing fallback data.
            </div>
          )}

          {/* ── Day Tabs ── */}
          <div role="tablist" aria-label="Conference days" className="flex gap-2 mb-6 border-b border-slate-200">
            {days.map((day) => (
              <button
                key={day.id}
                role="tab"
                aria-selected={activeDay === day.id}
                onClick={() => setActiveDay(day.id)}
                className={[
                  'px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors duration-150',
                  activeDay === day.id
                    ? 'border-pro-blue text-pro-blue'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300',
                ].join(' ')}
              >
                {day.label}
              </button>
            ))}
          </div>

          {/* ── Loading skeleton ── */}
          {loading && (
            <div className="space-y-2.5">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3 bg-white border border-slate-200 border-l-4 border-l-slate-100 rounded-md px-4 py-3.5 animate-pulse">
                  <div className="w-16 h-3 bg-slate-200 rounded" />
                  <div className="flex-1 h-3 bg-slate-100 rounded" />
                  <div className="w-20 h-3 bg-slate-100 rounded" />
                </div>
              ))}
            </div>
          )}

          {/* ── No sessions ── */}
          {!loading && !daySessions.length && (
            <div className="text-center py-16 text-slate-400">
              <p className="text-sm">Schedule for this day will be published shortly.</p>
            </div>
          )}

          {/* ── Desktop Table ── */}
          {!loading && daySessions.length > 0 && (
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
              <div role="tabpanel" className="hidden md:block w-full overflow-x-auto rounded-lg border border-slate-200 shadow-card">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b-2 border-slate-200">
                      {['Time', 'Session / Event', 'Speaker / Presenter', 'Venue'].map((h) => (
                        <th key={h} scope="col" className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {daySessions.map((session) => {
                      const style   = TYPE_STYLE[session.type] ?? TYPE_STYLE.session
                      const isBreak = session.type === 'break'
                      return (
                        <tr key={session.id} className={`border-l-4 transition-colors ${style.bar} ${isBreak ? 'bg-slate-50' : 'bg-white hover:bg-slate-50/60'}`}>
                          <td className="px-4 py-3 text-xs text-slate-500 whitespace-nowrap font-mono">
                            <div>{session.time}</div>
                            {session.endTime && <div className="text-slate-400">{session.endTime}</div>}
                          </td>
                          <td className="px-4 py-3">
                            <span className={`inline-block text-[10px] font-semibold rounded-full px-1.5 py-0.5 mb-1 ${style.badge}`}>
                              {style.label}
                            </span>
                            <p className={`text-sm font-medium leading-snug ${isBreak ? 'text-slate-400' : 'text-navy'}`}>
                              {session.title}
                            </p>
                          </td>
                          <td className="px-4 py-3 text-xs text-slate-600">{session.speaker || '—'}</td>
                          <td className="px-4 py-3 text-xs text-slate-500">{session.venue || '—'}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>

              {/* ── Mobile Cards ── */}
              <div role="tabpanel" className="md:hidden space-y-3">
                {daySessions.map((session) => {
                  const style   = TYPE_STYLE[session.type] ?? TYPE_STYLE.session
                  const isBreak = session.type === 'break'
                  return (
                    <div key={session.id} className={`bg-white border border-slate-200 rounded-md border-l-4 px-4 py-3.5 ${style.bar} ${isBreak ? 'opacity-70' : ''}`}>
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <Clock size={12} className="text-slate-400" />
                        <span className="text-xs font-mono text-slate-500">
                          {session.time}{session.endTime && ` – ${session.endTime}`}
                        </span>
                        <span className={`ml-auto text-[10px] font-semibold rounded-full px-1.5 py-0.5 ${style.badge}`}>
                          {style.label}
                        </span>
                      </div>
                      <p className={`text-sm font-semibold leading-snug ${isBreak ? 'text-slate-400' : 'text-navy'}`}>
                        {session.title}
                      </p>
                      {session.speaker && <p className="text-xs text-slate-500 mt-1">{session.speaker}</p>}
                      {session.venue && <p className="text-xs text-slate-400 mt-0.5">📍 {session.venue}</p>}
                    </div>
                  )
                })}
              </div>
            </motion.div>
          )}

          {/* ── Legend ── */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="mt-6 flex flex-wrap gap-3 text-xs text-slate-500">
            <span className="font-medium">Legend:</span>
            {Object.entries(TYPE_STYLE).map(([type, style]) => (
              <span key={type} className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 ${style.badge}`}>
                {style.label}
              </span>
            ))}
          </motion.div>

        </Container>
      </section>
    </main>
  )
}

export default Schedule
