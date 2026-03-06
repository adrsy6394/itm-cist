import PageBanner from '@/components/layout/PageBanner'
import Container from '@/components/layout/Container'
import { SectionHeader } from '@/components/common'
import { Badge, Button } from '@/components/ui'
import { Trophy, Calendar, MapPin, Users, Download, AlertCircle, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, fadeRight, stagger, scaleIn, viewport } from '@/lib/animations'

const BREADCRUMBS = [{ label: 'AISSDT-2025' }]

const EVENTS = [
  { title: "Paper Presentation", icon: <Download size={20} />, desc: "Present your technical research or case studies to a panel of expert judges." },
  { title: "Model Exhibition",   icon: <Trophy size={20} />,   desc: "Display working prototypes or innovative projects and win exciting prizes." },
  { title: "Tech Workshops",     icon: <Users size={20} />,    desc: "Learn from industry experts in hands-on sessions on emerging technologies." },
  { title: "Hackathon",          icon: <Info size={20} />,     desc: "Solve real-world problems in an intense 24-hour coding competition." },
]

const SCHEDULE_INFO = [
  { icon: <Calendar size={18} />, label: "Event Date",      val: "Nov 21, 2025" },
  { icon: <MapPin size={18} />,   label: "Venue",           val: "Main Auditorium, ITM" },
  { icon: <Users size={18} />,    label: "Eligibility",     val: "UG/PG Code Students" },
  { icon: <AlertCircle size={18} />, label: "Reg. Deadline", val: "Oct 30, 2025" },
]

/**
 * AISSDT — AISSDT-2025 Event Page
 */
function AISSDT() {
  return (
    <main>
      <PageBanner
        title="AISSDT-2025"
        description="All India Students Symposium on Developing Technologies — 2025."
        breadcrumbs={BREADCRUMBS}
      />

      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">

              {/* Introduction */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
                <Badge variant="teal" className="mb-4">Special Student Event</Badge>
                <SectionHeader
                  title="Developing Technologies for a Resilient Tomorrow"
                  subtitle="Empowering the next generation of engineers and scientists."
                  align="left"
                  className="mb-8"
                />
                <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
                  <p>
                    The <strong>All India Students Symposium on Developing Technologies (AISSDT-2025)</strong> is a national-level event held concurrently with CIST. It aims to provide undergraduate and postgraduate students with a platform to showcase their innovative projects and research work.
                  </p>
                  <p>
                    AISSDT features a series of competitions, including paper presentations, model exhibitions, and technical workshops, designed to challenge students' creativity and technical prowess.
                  </p>
                </div>
              </motion.div>

              {/* Event Cards */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                {EVENTS.map((event, i) => (
                  <motion.div key={i} variants={scaleIn} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-lg bg-pro-blue/5 text-pro-blue flex items-center justify-center mb-4">
                      {event.icon}
                    </div>
                    <h4 className="font-bold text-navy mb-2">{event.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{event.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Rewards */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="bg-gradient-to-br from-navy to-pro-blue rounded-3xl p-8 md:p-10 text-white flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="shrink-0 p-4 bg-white/10 rounded-full border border-white/20">
                  <Trophy size={60} className="text-teal" />
                </div>
                <div className="text-center md:text-left space-y-2">
                  <h3 className="text-2xl font-bold">Total Prizes Worth ₹2,00,000+</h3>
                  <p className="text-pro-blue-foreground/80">
                    Top performers across all categories will receive cash awards, excellence certificates, and mentorship opportunities with industry partners.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Sidebar info */}
            <motion.aside variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewport} className="space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="font-bold text-navy mb-6 text-lg">Event Schedule</h3>
                <div className="space-y-6">
                  {SCHEDULE_INFO.map((info, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="shrink-0 p-2 bg-white rounded-lg border border-slate-200 h-fit text-teal">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{info.label}</p>
                        <p className="text-sm font-bold text-navy">{info.val}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <Button variant="primary" fullWidth className="h-12 shadow-lg shadow-pro-blue/20">
                    Join Symposium
                  </Button>
                  <p className="text-[10px] text-center text-slate-500 mt-2 italic">Limited slots available for exhibitors.</p>
                </div>
              </div>

              <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100 flex gap-3">
                <AlertCircle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-900 leading-relaxed">
                  Participants must present their valid institutional ID card at the registration desk on the event day.
                </p>
              </div>
            </motion.aside>
          </div>
        </Container>
      </section>
    </main>
  )
}

export default AISSDT
