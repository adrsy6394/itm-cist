import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Mic, AlertCircle, RefreshCw } from 'lucide-react'
import { motion } from 'framer-motion'
import PageBanner from '@/components/layout/PageBanner'
import Container from '@/components/layout/Container'
import { SectionHeader, PersonCard } from '@/components/common'
import CommitteeGrid from '@/components/common/CommitteeGrid'
import { Badge, Button } from '@/components/ui'
import {
  selectSpeakers,
  selectSpeakersLoading,
  setSpeakers,
} from '@/features/speakers/speakerSlice'
import useFetchSheet from '@/hooks/useFetchSheet'
import { mapSpeakers } from '@/lib/sheetMappers'
import { KEYNOTE_SPEAKERS, INVITED_SPEAKERS } from '@/data/speakers'
import { fadeUp, fadeIn, stagger, scaleIn, viewport } from '@/lib/animations'

const BREADCRUMBS = [{ label: 'List of Speakers' }]

const SPEAKERS_SHEET_URL = import.meta.env.VITE_SPEAKERS_SHEET_URL || ''

function Speakers() {
  const dispatch      = useDispatch()
  const storeSpeakers = useSelector(selectSpeakers)

  const { data: sheetSpeakers, loading, error, refresh } = useFetchSheet(SPEAKERS_SHEET_URL, {
    mapper:  mapSpeakers,
    enabled: !!SPEAKERS_SHEET_URL,
  })

  useEffect(() => {
    if (sheetSpeakers.length) dispatch(setSpeakers(sheetSpeakers))
  }, [sheetSpeakers, dispatch])

  const allSpeakers = SPEAKERS_SHEET_URL && sheetSpeakers.length
    ? sheetSpeakers
    : storeSpeakers.length
      ? storeSpeakers
      : [...KEYNOTE_SPEAKERS, ...INVITED_SPEAKERS]

  const keynotes = allSpeakers.filter((s) => s.role?.toLowerCase().includes('keynote'))
  const invited  = allSpeakers.filter((s) => !s.role?.toLowerCase().includes('keynote'))

  return (
    <main>
      <PageBanner
        title="List of Speakers"
        description="Keynote and invited speakers presenting at CIST 2026."
        breadcrumbs={BREADCRUMBS}
      />

      {/* ── No URL / Error notices ── */}
      {!SPEAKERS_SHEET_URL && (
        <div className="bg-blue-50 border-b border-blue-100">
          <Container>
            <div className="flex items-start gap-2 py-2.5 text-xs text-blue-700">
              <AlertCircle size={13} className="shrink-0 mt-0.5 text-blue-400" />
              Showing placeholder data. Set <code className="bg-blue-100 px-1 rounded">VITE_SPEAKERS_SHEET_URL</code> in .env to load live speaker data.
            </div>
          </Container>
        </div>
      )}
      {error && SPEAKERS_SHEET_URL && (
        <div className="bg-red-50 border-b border-red-100">
          <Container>
            <div className="flex items-start gap-2 py-2.5 text-xs text-red-700">
              <AlertCircle size={13} className="shrink-0 mt-0.5 text-red-400" />
              Could not load speakers sheet: {error}. Showing fallback data.
            </div>
          </Container>
        </div>
      )}

      {/* ══ KEYNOTE SPEAKERS ══ */}
      <section aria-label="Keynote Speakers" className="section-padding">
        <Container>
          <div className="flex items-start justify-between mb-8 gap-4 flex-wrap">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
              <SectionHeader
                title="Keynote Speakers"
                subtitle="Distinguished speakers leading the plenary sessions at CIST 2026."
              />
            </motion.div>
            {SPEAKERS_SHEET_URL && (
              <Button
                variant="ghost"
                size="sm"
                onClick={refresh}
                disabled={loading}
                className="shrink-0 mt-1"
                title="Refresh from Google Sheet"
              >
                <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
                {loading ? 'Loading…' : 'Refresh'}
              </Button>
            )}
          </div>

          {/* Loading skeleton */}
          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col items-center animate-pulse">
                  <div className="w-24 h-24 rounded-full bg-slate-100 mb-4" />
                  <div className="h-4 w-36 bg-slate-200 rounded mb-2" />
                  <div className="h-3 w-24 bg-slate-100 rounded" />
                </div>
              ))}
            </div>
          )}

          {/* Keynote cards */}
          {!loading && keynotes.length > 0 && (
            <motion.ul
              role="list"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {keynotes.map((speaker) => (
                <motion.li key={speaker.id} variants={scaleIn}>
                  <article className="bg-white border border-slate-200 rounded-lg shadow-card hover:shadow-card-hover transition-shadow duration-200 p-6 flex flex-col items-center text-center h-full">
                    <div className="mb-4">
                      {speaker.imageSrc ? (
                        <img
                          src={speaker.imageSrc}
                          alt={`Photo of ${speaker.name}`}
                          className="w-28 h-28 rounded-full object-cover border-2 border-slate-100"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-28 h-28 rounded-full bg-slate-50 border-2 border-slate-200 flex items-center justify-center">
                          <Mic size={36} className="text-slate-300" />
                        </div>
                      )}
                    </div>
                    {speaker.role && (
                      <Badge variant="info" className="mb-2 text-xs">{speaker.role}</Badge>
                    )}
                    <h3 className="font-semibold text-navy text-base leading-snug mb-1">{speaker.name}</h3>
                    {speaker.designation && (
                      <p className="text-pro-blue text-xs font-medium mb-0.5">{speaker.designation}</p>
                    )}
                    {speaker.affiliation && (
                      <p className="text-slate-500 text-xs mb-3 leading-snug">{speaker.affiliation}</p>
                    )}
                    {speaker.topic && (
                      <div className="mt-auto pt-3 border-t border-slate-100 w-full">
                        <p className="text-xs text-slate-400 italic leading-relaxed">
                          &ldquo;{speaker.topic}&rdquo;
                        </p>
                      </div>
                    )}
                  </article>
                </motion.li>
              ))}
            </motion.ul>
          )}

          {!loading && !keynotes.length && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="text-center py-12 text-slate-400 text-sm"
            >
              Keynote speaker details will be announced shortly.
            </motion.div>
          )}
        </Container>
      </section>

      {/* ══ INVITED SPEAKERS ══ */}
      <section aria-label="Invited Speakers" className="section-padding bg-slate-50 border-t border-slate-100">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
            <SectionHeader
              title="Invited Speakers"
              subtitle="Expert speakers contributing invited talks across conference tracks."
              className="mb-8"
            />
          </motion.div>
          <CommitteeGrid members={invited} loading={loading} error={null} columns="4" />
        </Container>
      </section>
    </main>
  )
}

export default Speakers
