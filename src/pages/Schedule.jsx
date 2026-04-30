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

  return (
    <main>
      <PageBanner
        title="Conference Schedule"
        description="Full programme for all sessions across CIST 2026 conference days."
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


          {/* Error notice */}
          {error && sheetUrl && (
            <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 rounded-md p-3 mb-5 text-xs text-red-700">
              <AlertCircle size={13} className="shrink-0 mt-0.5 text-red-400" />
              Could not load schedule: {error}. Showing fallback data.
            </div>
          )}

          {/* ── PDF Schedule Embed ── */}
          <motion.div 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="visible" 
            viewport={viewport}
            className="w-full rounded-xl overflow-hidden border border-slate-200 shadow-xl bg-white"
          >
            <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-navy flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pro-blue animate-pulse" />
                Official Programme Schedule (PDF)
              </h3>
              <a 
                href="/Schedule for CIST 26 (Final-30.04.2026).pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-medium text-pro-blue hover:underline flex items-center gap-1"
              >
                Open in new tab ↗
              </a>
            </div>
            <iframe
              src="/Schedule for CIST 26 (Final-30.04.2026).pdf#toolbar=0"
              title="CIST 2026 Schedule"
              className="w-full h-[800px] md:h-[1000px]"
              frameBorder="0"
            />
          </motion.div>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-500">
              Can't see the PDF? 
              <a 
                href="/Schedule for CIST 26 (Final-30.04.2026).pdf" 
                download 
                className="ml-1 text-pro-blue font-medium hover:underline"
              >
                Download the schedule instead
              </a>
            </p>
          </div>

        </Container>
      </section>
    </main>
  )
}

export default Schedule
