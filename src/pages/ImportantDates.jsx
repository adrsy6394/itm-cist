import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CalendarDays, AlertCircle, CheckCircle2, Timer, RefreshCw } from 'lucide-react'
import PageBanner from '@/components/layout/PageBanner'
import Container from '@/components/layout/Container'
import { SectionHeader } from '@/components/common'
import { Spinner } from '@/components/ui'
import { LINKS } from '@/config/siteConfig'
import useFetchSheet from '@/hooks/useFetchSheet'
import { mapImportantDates } from '@/lib/sheetMappers'
import { IMPORTANT_DATES, REGISTRATION_FEE } from '@/data/importantDates'
import { Button } from '@/components/ui'

const BREADCRUMBS = [{ label: 'Important Dates' }]

const STATUS_CONFIG = {
  upcoming: {
    icon: <Timer size={14} className="text-teal" />,
    badge: 'bg-teal/10 text-teal border border-teal/30',
    bar: 'border-l-teal',
    label: 'Upcoming',
  },
  today: {
    icon: <AlertCircle size={14} className="text-amber-500" />,
    badge: 'bg-amber-50 text-amber-700 border border-amber-300',
    bar: 'border-l-amber-400',
    label: 'Today',
  },
  expired: {
    icon: <CheckCircle2 size={14} className="text-slate-400" />,
    badge: 'bg-slate-100 text-slate-400 border border-slate-200',
    bar: 'border-l-slate-200',
    label: 'Closed',
  },
}

/**
 * ImportantDates — integrated with useFetchSheet
 *
 * Data priority:
 *   1. Google Sheet URL (from Redux sheetLinks.importantDates)
 *   2. Static fallback from data/importantDates.js
 */
function ImportantDates() {
  const dispatch = useDispatch()
  const sheetUrl = LINKS.importantDatesSheetUrl

  const { data: sheetDates, loading, error, refresh } = useFetchSheet(sheetUrl, {
    mapper: mapImportantDates,
    enabled: !!sheetUrl,
  })

  // Push to Redux when live data arrives (scheduleSlice)
  useEffect(() => {
    if (sheetDates.length > 0) {
      // No-op: static site uses IMPORTANT_DATES as fallback
    }
  }, [sheetDates])

  // Resolve data source: sheet data -> static fallback
  const dates = (sheetUrl && sheetDates.length > 0)
    ? sheetDates
    : IMPORTANT_DATES

  return (
    <main>
      <PageBanner
        title="Important Dates"
        description="Key deadlines and milestones for CIST 2026 — mark your calendar."
        breadcrumbs={BREADCRUMBS}
      />

      <section className="section-padding">
        <Container>

          {/* ── Section 1: Date milestones ── */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="flex items-start justify-between mb-6 gap-4">
            <SectionHeader
              title="Key Deadlines"
              subtitle="All deadlines are in IST. Submissions after deadline will not be accepted."
            />
            {sheetUrl && (
              <Button
                variant="ghost"
                size="sm"
                onClick={refresh}
                disabled={loading}
                className="shrink-0 mt-1"
                title="Refresh from Google Sheet"
              >
                <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
                {loading ? 'Refreshing…' : 'Refresh'}
              </Button>
            )}
          </motion.div>

          {/* Sheet URL notice */}
          {!sheetUrl && (
            <div className="flex items-start gap-2.5 bg-blue-50 border border-blue-200 rounded-md p-3 mb-5 text-xs text-blue-700">
              <AlertCircle size={13} className="shrink-0 mt-0.5 text-blue-400" />
              Showing placeholder data. Set VITE_IMPORTANT_DATES_SHEET_URL in your .env file.
            </div>
          )}

          {/* Fetch error banner */}
          {error && sheetUrl && (
            <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 rounded-md p-3 mb-5 text-xs text-red-700">
              <AlertCircle size={13} className="shrink-0 mt-0.5 text-red-400" />
              Could not load sheet data: {error}. Showing static fallback.
            </div>
          )}

          {/* Dates deadline notice */}
          <div className="flex items-start gap-2.5 bg-amber-50 border border-amber-200 rounded-md p-3.5 mb-8 text-xs text-amber-800">
            <AlertCircle size={14} className="shrink-0 mt-0.5 text-amber-500" />
            <p>Dates are subject to change. Follow official announcements for any updates.</p>
          </div>

          {/* ── Loading skeleton ── */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-14">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex items-center gap-4 bg-white border border-slate-200 border-l-4 border-l-slate-100 rounded-md px-4 py-4 shadow-sm animate-pulse">
                  <div className="w-7 h-7 rounded-full bg-slate-100" />
                  <div className="flex-1">
                    <div className="h-3 w-48 bg-slate-200 rounded mb-2" />
                    <div className="h-2.5 w-32 bg-slate-100 rounded" />
                  </div>
                  <div className="h-5 w-16 bg-slate-100 rounded-full" />
                </div>
              ))}
            </div>
          )}

          {/* ── Date rows — 2-col grid on tablet+ ── */}
          {!loading && (
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-14" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
              {dates.map((item, idx) => {
                const cfg = STATUS_CONFIG[item.status] ?? STATUS_CONFIG.upcoming
                return (
                  <motion.div
                    variants={fadeUp}
                    key={item.id}
                    className={[
                      'flex items-center gap-4 bg-white border border-slate-200 border-l-4',
                      cfg.bar,
                      'rounded-md px-4 py-4 shadow-sm',
                    ].join(' ')}
                  >
                    <span className="shrink-0 w-7 h-7 rounded-full bg-slate-100 text-slate-500 text-xs font-semibold flex items-center justify-center">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-navy leading-snug">{item.label}</p>
                      <p className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                        <CalendarDays size={11} />
                        {item.date}
                      </p>
                    </div>
                    <span className={`shrink-0 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${cfg.badge}`}>
                      {cfg.icon}
                      {cfg.label}
                    </span>
                  </motion.div>
                )
              })}
            </motion.div>
          )}

          {/* ── Divider ── */}
          <hr className="border-slate-200 mb-12" />

          {/* ── Section 2: Registration Fee Table ── */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <SectionHeader
            title="Registration Fee"
            subtitle="All fees are in Indian Rupees (INR) and inclusive of taxes."
            className="mb-6"
          />
          </motion.div>

          <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-card mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b-2 border-slate-200">
                  <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide min-w-[220px]">Category</th>
                  <th scope="col" className="px-4 py-3 text-center text-xs font-semibold text-teal uppercase tracking-wide">Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {REGISTRATION_FEE.map((row) => (
                  <tr key={row.id} className="bg-white hover:bg-slate-50/60 transition-colors">
                    <td className="px-4 py-3.5 text-sm font-medium text-navy">{row.category}</td>
                    <td className="px-4 py-3.5 text-sm text-center font-semibold text-teal">{row.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-400">
            * Fee includes conference kit, lunch, and refreshments.{' '}
            <Link to="/registration" className="text-pro-blue underline hover:text-navy">Register here →</Link>
          </p>

        </Container>
      </section>
    </main>
  )
}

export default ImportantDates
