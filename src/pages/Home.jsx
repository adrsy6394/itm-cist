import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  CalendarDays,
  MapPin,
  ArrowRight,
  BookOpen,
  Users,
  FileText,
  Mic,
  Clock,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { SITE_META, HERO, SECTIONS } from "@/config/siteConfig";
import Container from "@/components/layout/Container";
import { SectionHeader, PersonCard, DateBadge } from "@/components/common";
import { Button, Badge, Card, CardBody } from "@/components/ui";
import { fadeUp, fadeIn, fadeLeft, fadeRight, stagger, scaleIn, viewport } from "@/lib/animations";

/* ─── Static preview data ─── */
const PREVIEW_DATES = [
  { id: 1, label: "Submission Deadline", date: "12 April 2026", status: "upcoming" },
  { id: 2, label: "Acceptance Notification",    date: "18 April 2026", status: "upcoming" },
  { id: 3, label: "Registration",          date: "24 – 28 April 2026", status: "upcoming" },
];

const ABOUT_HIGHLIGHTS = [
  {
    id: "scope",
    icon: <BookOpen size={22} style={{ color: '#00F5D4' }} />,
    title: "Research Topics",
    description:
      "Covering a broad spectrum of Innovations in science, technology, and interdisciplinary research.",
  },
  {
    id: "committee",
    icon: <Users size={22} style={{ color: '#00F5D4' }} />,
    title: "Expert Committee",
    description:
      "Led by an international advisory board comprising leading academics and researchers.",
  },
  {
    id: "papers",
    icon: <FileText size={22} style={{ color: '#00F5D4' }} />,
    title: "Peer-Reviewed Papers",
    description:
      "All submitted papers undergo rigorous double-blind peer review for quality assurance.",
  },
  {
    id: "speakers",
    icon: <Mic size={22} style={{ color: '#00F5D4' }} />,
    title: "Keynote Speakers",
    description:
      "Distinguished keynote sessions by celebrated researchers and industry leaders.",
  },
];

/* ─── Infinite Character Typing Animation Component ─── */
function TypingText({ text, charDelay = 55, pauseMs = 1500, deleteDelay = 25 }) {
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState('typing'); // 'typing' | 'pausing' | 'deleting'

  useEffect(() => {
    let timeout;
    if (phase === 'typing') {
      if (displayed.length < text.length) {
        timeout = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), charDelay);
      } else {
        timeout = setTimeout(() => setPhase('deleting'), pauseMs);
      }
    } else if (phase === 'deleting') {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(d => d.slice(0, -1)), deleteDelay);
      } else {
        timeout = setTimeout(() => setPhase('typing'), 400);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, text, charDelay, pauseMs, deleteDelay]);

  return (
    /* Outer span is invisible full text — reserves fixed height always */
    <span style={{ position: 'relative', display: 'block' }}>
      {/* Invisible placeholder — holds the full height */}
      <span style={{ visibility: 'hidden', userSelect: 'none' }} aria-hidden="true">
        {text}
      </span>
      {/* Visible typed text — overlaid on top */}
      <span style={{ position: 'absolute', top: 0, left: 0, whiteSpace: 'pre-wrap' }}>
        {displayed}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'inline-block', color: '#00F5D4', fontWeight: 900, marginLeft: '1px' }}
        >
          |
        </motion.span>
      </span>
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════════ */
/*  Home Page — Dark AI SaaS Theme                                */
/* ═══════════════════════════════════════════════════════════════ */
function Home() {
  return (
    <main style={{ background: 'transparent' }}>

      {/* ══════════════════════════════════════════════════════════
          1. HERO SECTION
      ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Conference Welcome Hero"
        className="relative overflow-hidden"
        style={{ minHeight: 520 }}
      >
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src="/itm-hero.jpg"
            alt=""
            className="w-full h-full object-cover scale-105"
            style={{ filter: 'brightness(0.5) blur(1px)' }}
            aria-hidden="true"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 8, ease: 'easeOut' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 70% 50% at 20% 50%, rgba(0,245,212,0.08) 0%, transparent 60%)',
            }}
            aria-hidden="true"
          />
        </div>

        <Container className="relative z-10">
          <div className="py-16 md:py-24 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">
              {/* Left — main hero text */}
              <motion.div
                className="lg:col-span-3 text-center lg:text-left"
                variants={stagger}
                initial="hidden"
                animate="visible"
              >
                {/* Organizer badge */}
                <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-6"
                  style={{
                    background: 'rgba(8, 11, 11, 1.5)',
                    border: '1px solid rgba(0,245,212,2.5)',
                    color: '#00F5D4',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ background: '#0cefb6ff' }} />
                  {SITE_META.organizedBy} &amp; {SITE_META.supportedBy}
                </motion.div>

                <motion.p
                  variants={fadeUp}
                  className="font-extrabold text-sm md:text-base tracking-[0.2em] uppercase mb-4"
                  style={{ color: '#00F5D4',background: 'rgba(8, 11, 11, 1.5)',border: '1px solid rgba(0,245,212,2.5)',backdropFilter: 'blur(8px)',width: 'fit-content',padding: '0.5rem 1rem',borderRadius: '1rem' }}
                >
                  {SITE_META.conferenceShortName}
                </motion.p>

                <motion.h1
                  variants={fadeUp}
                  className="text-3xl sm:text-4xl lg:text-6xl font-black leading-[1.1] mb-6 tracking-tight"
                  style={{ color: '#FFFFFF' }}
                >
                  <TypingText text={HERO.title} charDelay={55} />
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="text-base md:text-xl font-medium leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
                  style={{ color: '#9CA3AF' }}
                >
                  {HERO.tagline}
                </motion.p>

                {/* Date + Venue info pills */}
                <motion.div variants={fadeUp} className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
                  <div
                    className="inline-flex items-center gap-2 text-sm font-bold rounded-xl px-4 py-2.5"
                    style={{
                      background: 'rgba(15,23,42,0.8)',
                      border: '1px solid rgba(0,245,212,0.2)',
                      color: '#D1D5DB',
                      backdropFilter: 'blur(2px)',
                    }}
                  >
                    <CalendarDays size={16} style={{ color: '#00F5D4' }} />
                    {SITE_META.date || "April 2026"}
                  </div>
                  <div
                    className="inline-flex items-center gap-2 text-sm font-bold rounded-xl px-4 py-2.5"
                    style={{
                      background: 'rgba(15,23,42,0.8)',
                      border: '1px solid rgba(0,245,212,0.2)',
                      color: '#D1D5DB',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <MapPin size={16} style={{ color: '#00F5D4' }} />
                    {SITE_META.venue}
                  </div>
                </motion.div>

                {/* CTA buttons */}
                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <Link
                    to="/registration"
                    className="inline-flex items-center justify-center gap-2 px-8 h-12 text-base font-bold rounded-lg transition-all duration-200 w-full sm:w-auto"
                    style={{
                      background: 'linear-gradient(135deg, #00F5D4 0%, #00C2AA 100%)',
                      color: '#050B12',
                      boxShadow: '0 0 20px rgba(0,245,212,0.5)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.boxShadow = '0 0 30px rgba(0,245,212,0.7)'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(0,245,212,0.5)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    {HERO.ctaLabel}
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    to="/call-for-paper"
                    className="inline-flex items-center justify-center gap-2 px-8 h-12 text-base font-bold rounded-lg transition-all duration-200 w-full sm:w-auto"
                    style={{
                      background: 'transparent',
                      border: '1px solid #00F5D4',
                      color: '#00F5D4',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(0,245,212,0.08)'
                      e.currentTarget.style.boxShadow = '0 0 15px rgba(0,245,212,0.3)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    Call for Paper
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right — stat cards */}
              <motion.div
                className="hidden lg:grid lg:col-span-2 grid-cols-2 gap-4"
                variants={stagger}
                initial="hidden"
                animate="visible"
              >
                {[
                  { label: "Research Tracks",  value: "08+", accent: '#00F5D4' },
                  { label: "Keynote Speakers", value: "10+", accent: '#00E6FF' },
                  { label: "Expected Papers",  value: "200+", accent: '#00E6FF' },
                  { label: "Institutions",     value: "50+", accent: '#00F5D4' },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={scaleIn}
                    className="rounded-2xl p-6 text-center transition-all duration-300"
                    style={{
                      background: 'rgba(15,23,42,0.7)',
                      border: '1px solid rgba(0,245,212,0.12)',
                      backdropFilter: 'blur(8px)',
                    }}
                    whileHover={{
                      borderColor: 'rgba(0,245,212,0.35)',
                      y: -4,
                      boxShadow: '0 0 20px rgba(0,245,212,0.1)',
                    }}
                    role="status"
                    aria-label={`${stat.value} ${stat.label}`}
                  >
                    <div className="text-3xl font-black mb-1" style={{ color: stat.accent }}>{stat.value}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#6B7280' }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2. ABOUT PREVIEW
      ══════════════════════════════════════════════════════════ */}
      {SECTIONS.showAboutPreview && (
        <section aria-label="About Conference" className="section-padding">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 rounded-full" style={{ background: 'linear-gradient(180deg, #00F5D4, #00E6FF)' }} />
                  <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#0d0b0bff' }}>
                    About the Conference
                  </h2>
                </div>
                <p className="text-base leading-relaxed mb-5" style={{ color: '#9CA3AF' }}>
                  The "Conference on Innovations in Science and Technology" will
                  serve as a dynamic platform where pioneering ideas converge to
                  shape the future of scientific advancement. With a focus on
                  fostering collaboration and showcasing breakthroughs, this
                  event will bring together leading researchers, scholars, and
                  industry experts from all over India.
                </p>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#9CA3AF' }}>
                  The conference provides a platform for presenting
                  high-quality, original research across diverse fields of
                  science and technology, fostering collaboration and knowledge
                  exchange.
                </p>
                <Link
                  to="/about/conference"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200"
                  style={{
                    background: 'transparent',
                    border: '1px solid #00F5D4',
                    color: '#00F5D4',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(0,245,212,0.08)'
                    e.currentTarget.style.boxShadow = '0 0 12px rgba(0,245,212,0.3)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  Read More
                  <ChevronRight size={15} />
                </Link>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                {ABOUT_HIGHLIGHTS.map((item) => (
                  <motion.div key={item.id} variants={scaleIn}>
                    <Card className="p-4">
                      <CardBody className="p-0">
                        <div
                          className="w-10 h-10 rounded-md flex items-center justify-center mb-3"
                          style={{ background: 'rgba(0,245,212,0.1)' }}
                        >
                          {item.icon}
                        </div>
                        <h3 className="text-sm font-semibold mb-1.5" style={{ color: '#FFFFFF' }}>{item.title}</h3>
                        <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{item.description}</p>
                      </CardBody>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </Container>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════
          3. IMPORTANT DATES PREVIEW
      ══════════════════════════════════════════════════════════ */}
      {SECTIONS.showDatesPreview && (
        <section
          aria-label="Important Dates Preview"
          className="section-padding"
          style={{ background: 'rgba(11,22,35,0.5)', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
        >
          <Container>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
              <SectionHeader
                title="Important Dates"
                subtitle="Mark your calendar — key deadlines for CIST 2026"
              />
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {PREVIEW_DATES.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  className="flex items-center gap-4 rounded-md px-4 py-3.5 transition-all duration-200"
                  style={{
                    background: '#0F172A',
                    borderLeft: '3px solid #00F5D4',
                    border: '1px solid rgba(0,245,212,0.1)',
                    borderLeftColor: '#00F5D4',
                  }}
                >
                  <div className="shrink-0">
                    <Clock size={16} style={{ color: '#00F5D4' }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate" style={{ color: '#FFFFFF' }}>{item.label}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#6B7280' }}>{item.date}</p>
                  </div>
                  <Badge variant="upcoming" className="shrink-0">
                    {item.status === "upcoming"
                      ? "Upcoming"
                      : item.status === "expired"
                        ? "Closed"
                        : "Today"}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-6 text-center">
              <Link
                to="/important-dates"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200"
                style={{ color: '#9CA3AF' }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#00F5D4'
                  e.currentTarget.style.background = 'rgba(0,245,212,0.05)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#9CA3AF'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                View All Dates
                <ChevronRight size={15} />
              </Link>
            </div>
          </Container>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════
          4. SPEAKERS PREVIEW
      ══════════════════════════════════════════════════════════ */}
      {SECTIONS.showSpeakers && (
        <section aria-label="Speakers Preview" className="section-padding">
          <Container>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
              <SectionHeader
                title="Keynote Speakers"
                subtitle="Distinguished speakers leading the sessions at CIST 2026"
                className="text-black"
              />
            </motion.div>

            {/* Placeholder cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="rounded-lg p-6 flex flex-col items-center text-center transition-all duration-200"
                  style={{
                    background: '#0F172A',
                    border: '1px solid rgba(0,245,212,0.1)',
                  }}
                  whileHover={{
                    borderColor: 'rgba(0,245,212,0.35)',
                    y: -3,
                    boxShadow: '0 0 18px rgba(0,245,212,0.1)',
                  }}
                >
                  <div
                    className="w-24 h-24 rounded-full mb-4 flex items-center justify-center"
                    style={{ background: 'rgba(0,245,212,0.06)', border: '2px solid rgba(0,245,212,0.15)' }}
                  >
                    <Mic size={24} style={{ color: 'rgba(0,245,212,0.4)' }} />
                  </div>
                  <div className="h-4 w-36 rounded mb-1.5 animate-pulse" style={{ background: 'rgba(255,255,255,0.07)' }} />
                  <div className="h-3 w-28 rounded mb-1 animate-pulse" style={{ background: 'rgba(255,255,255,0.04)' }} />
                  <div className="h-3 w-32 rounded animate-pulse" style={{ background: 'rgba(255,255,255,0.04)' }} />
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-6 text-center">
              <Link
                to="/speakers"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200"
                style={{ color: '#9CA3AF' }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#00F5D4'
                  e.currentTarget.style.background = 'rgba(0,245,212,0.05)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#9CA3AF'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                View All Speakers
                <ChevronRight size={15} />
              </Link>
            </div>
          </Container>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════
          5. REGISTRATION CTA
      ══════════════════════════════════════════════════════════ */}
      {SECTIONS.showRegistrationCta && (
        <section
          aria-label="Registration"
          className="section-padding"
          style={{
            background: 'linear-gradient(180deg, #0B1623 0%, #050B12 100%)',
            borderTop: '1px solid rgba(0,245,212,0.08)',
          }}
        >
          <Container>
            <motion.div
              className="text-center mb-10"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium mb-4"
                style={{
                  background: 'rgba(0,245,212,0.08)',
                  border: '1px solid rgba(0,245,212,0.25)',
                  color: '#00F5D4',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#00F5D4' }} />
                Registrations Open
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#ffffffff' }}>
                Register for CIST 2026
              </h2>
              <p className="text-base max-w-2xl mx-auto leading-relaxed" style={{ color: '#9CA3AF' }}>
                Join researchers, scholars, and industry professionals from
                across India. Select your registration category below.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {[
                { label: "Faculty / Professionals", desc: "For faculty members and working professionals.", path: "/registration/faculty",      icon: "🎓" },
                { label: "ITM Students",             desc: "For students enrolled at ITM University.",     path: "/registration/itm-students", icon: "📚" },
                { label: "External Candidates",      desc: "For candidates from other institutions.",      path: "/registration/external",     icon: "🌐" },
              ].map((cat) => (
                <motion.div key={cat.path} variants={scaleIn}>
                  <Link
                    to={cat.path}
                    className="group rounded-xl p-5 text-center transition-all duration-200 block"
                    style={{
                      background: 'rgba(15,23,42,0.7)',
                      border: '1px solid rgba(0,245,212,0.1)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(0,245,212,0.4)'
                      e.currentTarget.style.background = 'rgba(15,23,42,0.9)'
                      e.currentTarget.style.transform = 'translateY(-3px)'
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(0,245,212,0.1)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(0,245,212,0.1)'
                      e.currentTarget.style.background = 'rgba(15,23,42,0.7)'
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <div className="text-3xl mb-3">{cat.icon}</div>
                    <h3 className="text-sm font-semibold mb-1.5" style={{ color: '#FFFFFF' }}>{cat.label}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{cat.desc}</p>
                    <div className="mt-3 text-xs font-medium transition-all" style={{ color: '#00F5D4' }}>Register →</div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="text-center"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <Link
                to="/registration"
                className="inline-flex items-center justify-center gap-2 px-10 py-3.5 text-base font-bold rounded-lg transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #00F5D4 0%, #00C2AA 100%)',
                  color: '#050B12',
                  boxShadow: '0 0 20px rgba(0,245,212,0.5)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0,245,212,0.7)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0,245,212,0.5)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                View Registration Details
                <ArrowRight size={16} />
              </Link>
              <p className="text-xs mt-3" style={{ color: '#4B5563' }}>
                Registration via Google Form. Confirmation sent by email.
              </p>
            </motion.div>
          </Container>
        </section>
      )}
    </main>
  );
}

export default Home;
