import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, fadeLeft, fadeRight, stagger, scaleIn, viewport } from '@/lib/animations'
import PageBanner from '@/components/layout/PageBanner'
import Container from '@/components/layout/Container'
import { SectionHeader } from '@/components/common'
import { Button } from '@/components/ui'
import {
  FileText, Cpu, HardHat, TrendingUp, FlaskConical,
  ChevronDown, ChevronUp, AlertCircle, Calendar, Send,
  CheckCircle2, BookOpen
} from 'lucide-react'
import { Link } from 'react-router-dom'

const BREADCRUMBS = [{ label: 'Call for Paper' }]

// ── Track Data ────────────────────────────────────────────────────────────────
const TRACKS = [
  {
    id: 1,
    label: 'Track 1',
    title: 'Computing, AI & Emerging Technologies',
    color: { bg: 'bg-pro-blue/10', text: 'text-pro-blue', border: 'border-pro-blue/30', badge: 'bg-pro-blue text-white', bar: 'bg-pro-blue' },
    icon: <Cpu size={22} />,
    topics: [
      'Integrating IoT, Edge Computing, Data Analytics & Energy Efficiency for Computing',
      'Sustainable Smart Systems',
      'Artificial Intelligence and Machine Learning',
      'Edge Computing',
      'Cyber Security and Privacy',
      'Blockchain Technology',
      'Quantum Computing',
      'Augmented Reality (AR) and Virtual Reality (VR)',
      'Internet of Things (IoT)',
      'Emerging Communication Technologies',
      'Data Science and Big Data Analytics',
      'Natural Language Processing (NLP) and Conversational AI',
      'Soft Computing',
      'Nano Computing',
      'Data Mining',
      'Grid Computing',
      'Green Computing',
      'DBMS',
    ],
  },
  {
    id: 2,
    label: 'Track 2',
    title: 'Engineering, Design & Applied Sciences',
    color: { bg: 'bg-teal/10', text: 'text-teal', border: 'border-teal/30', badge: 'bg-teal text-white', bar: 'bg-teal' },
    icon: <HardHat size={22} />,
    topics: [
      'Sustainable Development in Design and Construction',
      'Soil Structure Interaction',
      'Structural Health Monitoring',
      'Road Safety',
      'Highway Material',
      'Machine Design',
      'Thermal Engineering',
      'Optical Networks',
      'Quantum Science',
      'UWB',
      'Ultrasonic Communications',
      'Embedded Systems',
      'Energy Conversion',
      'Micro–Nano Engineering',
      'Remote Sensing',
      'Smart Materials',
      'MEMS Fabrication',
      'Green Building',
    ],
  },
  {
    id: 3,
    label: 'Track 3',
    title: 'Business Transformation & Digital Economy',
    color: { bg: 'bg-amber-500/10', text: 'text-amber-700', border: 'border-amber-300', badge: 'bg-amber-500 text-white', bar: 'bg-amber-500' },
    icon: <TrendingUp size={22} />,
    topics: [
      'Business Transformation & Digital Economy',
      'Diversity and Inclusion',
      'Ethical Issues in Accounting',
      'Green Bonds – Sustainable Financial Practices',
      'Artificial Intelligence in Accounting and Auditing',
      'Employee Engagement & Appraisal System',
    ],
  },
  {
    id: 4,
    label: 'Track 4',
    title: 'Pharmacy & Drug Sciences',
    color: { bg: 'bg-rose-500/10', text: 'text-rose-600', border: 'border-rose-300', badge: 'bg-rose-500 text-white', bar: 'bg-rose-500' },
    icon: <FlaskConical size={22} />,
    topics: [
      'Recent Trends in Pharmacy Practices & Drug Development',
      'Current and Future Prospects of Pharmacy Drug Discovery and Delivery Approaches',
      'Emerging Challenges & Strategies in Pharmaceutical Sciences',
      'International Conference on Pharmaceutical',
      'International Conference on Natural & Novel Pharmaceutical Research',
      'Recent Advances in Future Pharmacy & Pharmacy Innovations',
      'Progress in Drug Research, Drug Delivery, and Drug Development',
      'Challenges, Drug Development, and Opportunities in Pharmaceutical Sciences',
      'Advances in Pharmaceutical Sciences and Drug Delivery Systems',
    ],
  },
]

// ── Submission Guidelines ─────────────────────────────────────────────────────
const GUIDELINES = [
  { num: '01', text: 'Papers must be original and not previously published or under review elsewhere.' },
  { num: '02', text: 'Manuscript format must strictly follow IEEE guidelines (double column).' },
  { num: '03', text: 'All submissions undergo a double-blind peer-review process.' },
  { num: '04', text: 'Accepted papers will be published in Conference Proceedings or Scopus-indexed Journals.' },
  { num: '05', text: 'Acceptance is based on quality, relevance, and originality.' },
  { num: '06', text: 'Abstract-only submissions are accepted if publication is not required.' },
]

// ── Track Card (collapsible) ──────────────────────────────────────────────────
function TrackCard({ track }) {
  const [open, setOpen] = useState(false)
  const c = track.color
  const visible = open ? track.topics : track.topics.slice(0, 5)

  return (
    <div className={`bg-white rounded-2xl border ${c.border} overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300`}>
      {/* Header */}
      <div className={`${c.bg} px-6 py-5 flex items-start gap-4`}>
        <div className={`w-11 h-11 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center ${c.text} shrink-0`}>
          {track.icon}
        </div>
        <div className="flex-1 min-w-0">
          <span className={`inline-block text-[10px] font-bold uppercase tracking-widest ${c.text} mb-1`}>
            {track.label}
          </span>
          <h3 className="text-base font-bold text-navy leading-snug">{track.title}</h3>
        </div>
        <span className={`shrink-0 mt-1 text-[10px] font-semibold px-2 py-0.5 rounded-full ${c.badge}`}>
          {track.topics.length} Topics
        </span>
      </div>

      {/* Topics */}
      <div className="px-6 pt-4 pb-2">
        <ul className="space-y-2">
          {visible.map((topic, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${c.bar} shrink-0`} />
              {topic}
            </li>
          ))}
        </ul>

        {track.topics.length > 5 && (
          <button
            onClick={() => setOpen(!open)}
            className={`mt-3 mb-2 flex items-center gap-1 text-xs font-semibold ${c.text} hover:opacity-80 transition-opacity`}
          >
            {open ? <><ChevronUp size={14} /> Show Less</> : <><ChevronDown size={14} /> +{track.topics.length - 5} More Topics</>}
          </button>
        )}
      </div>
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────
function CallForPaper() {
  return (
    <main>
      <PageBanner
        title="Call for Papers"
        description="Submit your original research to CIST 2026 — Advancing Research, Bridging Knowledge."
        breadcrumbs={BREADCRUMBS}
      />

      <section className="section-padding">
        <Container>

          {/* ── Overview ── */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="max-w-3xl mb-14">
            <SectionHeader
              title="Invitation to Submit"
              subtitle="CIST 2026 invites original research contributions across four multidisciplinary tracks."
              align="left"
              className="mb-6"
            />
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
              <p>
                All accepted full-length papers will be published after the peer-review process (as per conference
                and journal policy) in <strong className="text-navy">Conference Proceedings</strong> or{' '}
                <strong className="text-navy">Scopus-indexed Journals</strong>. The manuscript format should
                strictly follow <strong className="text-navy">IEEE guidelines (double column)</strong>.
              </p>
              <p>
                Authors are invited to submit their original research papers, which should not have been previously
                published or be under review elsewhere. All submissions will undergo a{' '}
                <strong className="text-navy">double-blind review process</strong>. Acceptance will be based on
                quality, relevance, and originality.{' '}
                <span className="italic text-slate-500">
                  Abstract-only submissions are also accepted if publication is not required.
                </span>
              </p>
            </div>

            {/* Highlight pills */}
            <div className="flex flex-wrap gap-2 mt-6">
              {['Double-Blind Review', 'IEEE Format', 'Scopus-Indexed Journals', 'Abstract Accepted'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-pro-blue/8 text-pro-blue text-xs font-semibold rounded-full border border-pro-blue/20">
                  ✓ {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── Tracks Heading ── */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-teal rounded-full" />
            <h2 className="text-2xl font-bold text-navy">Conference Tracks &amp; Topics</h2>
          </motion.div>

          {/* ── 4 Track Cards — 2-col grid ── */}
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
            {TRACKS.map((track) => (
              <motion.div key={track.id} variants={scaleIn}>
                <TrackCard track={track} />
              </motion.div>
            ))}
          </motion.div>

          {/* ── Submission Guidelines + CTA ── */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

            {/* Guidelines — 3 cols */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport} className="lg:col-span-3 space-y-6">
              <h2 className="text-2xl font-bold text-navy flex items-center gap-2">
                <BookOpen size={22} className="text-teal" />
                Submission Guidelines
              </h2>
              <div className="space-y-3">
                {GUIDELINES.map((g) => (
                  <div key={g.num} className="flex gap-4 items-start p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:border-teal/40 transition-colors">
                    <span className="shrink-0 w-8 h-8 rounded-lg bg-navy text-white text-xs font-black flex items-center justify-center">
                      {g.num}
                    </span>
                    <p className="text-sm text-slate-600 leading-relaxed">{g.text}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button as={Link} to="/paper-submission" variant="primary" size="lg">
                  <Send size={17} />
                  Submit Paper Now
                </Button>
                <Button as="a" href="/brochure" variant="outline" size="lg">
                  <FileText size={17} />
                  View Brochure
                </Button>
              </div>
            </motion.div>

            {/* Sidebar — 2 cols */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewport} className="lg:col-span-2 space-y-4">

              {/* Publication highlight */}
              <div className="bg-navy text-white rounded-2xl p-6">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-teal" />
                  Publication Highlights
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-300">
                  {[
                    'Scopus-indexed Journal papers',
                    'Conference Proceedings publication',
                    'IEEE double-column format',
                    'Double-blind peer review',
                    'Abstract-only submission option',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deadlines */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                  <Calendar size={18} className="text-teal" />
                  Key Deadlines
                </h3>
                <div className="space-y-3">
                  {[
                    { label: 'Full Paper Submission', date: 'Check Important Dates', status: 'open' },
                    { label: 'Acceptance Notification', date: 'Check Important Dates', status: 'upcoming' },
                    { label: 'Camera Ready Paper', date: 'Check Important Dates', status: 'upcoming' },
                    { label: 'Conference Dates', date: '23–25 April, 2026', status: 'event' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start justify-between gap-2 p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">{item.label}</p>
                        <p className="text-xs font-semibold text-navy">{item.date}</p>
                      </div>
                      <span className={`shrink-0 mt-0.5 text-[9px] font-bold uppercase px-2 py-0.5 rounded-full ${
                        item.status === 'open'     ? 'bg-green-100 text-green-700' :
                        item.status === 'event'    ? 'bg-pro-blue/10 text-pro-blue' :
                        'bg-slate-100 text-slate-400'
                      }`}>
                        {item.status === 'open' ? 'Open' : item.status === 'event' ? 'Event' : 'TBA'}
                      </span>
                    </div>
                  ))}
                </div>
                <Link to="/important-dates" className="mt-4 flex items-center gap-1 text-xs font-semibold text-pro-blue hover:underline">
                  View all important dates →
                </Link>
              </div>

              {/* Warning */}
              <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <AlertCircle size={17} className="text-amber-500 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-800 leading-relaxed">
                  Late submissions will not be entertained. Ensure all co-authors are registered before the camera-ready deadline.
                </p>
              </div>
            </motion.div>
          </div>

        </Container>
      </section>
    </main>
  )
}

export default CallForPaper
