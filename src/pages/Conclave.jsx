import PageBanner from '@/components/layout/PageBanner'
import Container from '@/components/layout/Container'
import { SectionHeader } from '@/components/common'
import { Badge, Card, CardBody, Button } from '@/components/ui'
import { Mic2, MessageSquare, Briefcase, TrendingUp, Calendar, MapPin, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, fadeRight, stagger, scaleIn, viewport } from '@/lib/animations'

const BREADCRUMBS = [{ label: 'Conclave' }]

const KEY_TRACKS = [
  { title: "Future of Work",  icon: <Briefcase />,     desc: "Adapting engineering curriculum to meet evolving industry standards." },
  { title: "R&D Ecosystem",   icon: <TrendingUp />,    desc: "Establishing collaborative research centers and joint patenting strategies." },
  { title: "Tech Transfer",   icon: <MessageSquare />, desc: "Best practices for moving Innovations from labs to the commercial market." },
  { title: "Placement Trends",icon: <Users />,         desc: "Understanding the hiring landscape for 2026 and beyond." },
]

const PANELISTS = [
  { name: "Mr. Rajat Varma", role: "VP Tech, Google India",   img: "https://i.pravatar.cc/150?u=1" },
  { name: "Dr. Lelia Chen",  role: "Dean, R&D Institue",      img: "https://i.pravatar.cc/150?u=2" },
  { name: "Mr. Aditya Roy",  role: "CTO, TechSource",         img: "https://i.pravatar.cc/150?u=3" },
]

/**
 * Conclave — Special session / conclave event page
 */
function Conclave() {
  return (
    <main>
      <PageBanner
        title="Industry-Academia Conclave"
        description="Bridging gap through dialogue, Innovations, and partnership."
        breadcrumbs={BREADCRUMBS}
      />

      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">

              {/* Introduction */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
                <Badge variant="warning" className="mb-4">Special Plenary Session</Badge>
                <SectionHeader
                  title="Strategic Synergies"
                  subtitle="A dedicated session for industry leaders and academic pioneers."
                  align="left"
                  className="mb-8"
                />
                <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
                  <p>
                    The <strong>Industry-Academia Conclave</strong> at CIST 2026 is designed to foster a collaborative ecosystem where theoretical research meets practical industrial application. The conclave serves as a platform for discussing human capital requirements, R&D partnerships, and technology transfer.
                  </p>
                  <p>
                    Join us for an enlightening afternoon of panel discussions, fire-side chats, and networking sessions featuring top executives from the technology sector and eminent professors from leading research institutions.
                  </p>
                </div>
              </motion.div>

              {/* Discussion Tracks */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-navy flex items-center gap-2">
                  <Mic2 size={24} className="text-pro-blue" />
                  Key Tracks
                </h3>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                >
                  {KEY_TRACKS.map((item, i) => (
                    <motion.div key={i} variants={scaleIn} className="flex gap-4 p-5 bg-white border border-slate-100 rounded-xl hover:shadow-md transition-all">
                      <div className="shrink-0 p-3 bg-slate-50 rounded-lg h-fit text-pro-blue">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-navy mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Speaker Preview */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-lg font-bold text-navy mb-6">Confirmed Panelists</h3>
                <div className="flex flex-wrap gap-8">
                  {PANELISTS.map((p, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <img src={p.img} alt={p.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                      <div>
                        <p className="text-sm font-bold text-navy leading-none">{p.name}</p>
                        <p className="text-[10px] text-slate-500 mt-1">{p.role}</p>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-10 h-10 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 group-hover:border-pro-blue group-hover:text-pro-blue">
                      +5
                    </div>
                    <span className="text-xs text-slate-400 font-medium">more leaders...</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar info */}
            <motion.aside variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewport} className="space-y-6">
              <div className="bg-navy p-8 rounded-3xl text-white shadow-xl shadow-navy/20">
                <h3 className="text-xl font-bold text-teal mb-6">Conclave Info</h3>
                <div className="space-y-5">
                  <div className="flex gap-3">
                    <Calendar size={18} className="text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Date & Time</p>
                      <p className="text-sm font-bold">Nov 22 • 02:00 PM</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <MapPin size={18} className="text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Venue</p>
                      <p className="text-sm font-bold">Executive Board Room</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Users size={18} className="text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Attendees</p>
                      <p className="text-sm font-bold">Open to All Registrants</p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" fullWidth className="mt-8 border-white/20 text-white hover:bg-white hover:text-navy">
                  View Agenda
                </Button>
              </div>

              <Card className="border-pro-blue/10 bg-pro-blue/5">
                <CardBody className="p-6">
                  <h4 className="font-bold text-navy mb-2 flex items-center gap-2">
                    <TrendingUp size={16} className="text-pro-blue" />
                    Why Attend?
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The conclave is an ideal hub for start-ups looking for academic mentorship and for students seeking internship prospects in emerging tech areas.
                  </p>
                </CardBody>
              </Card>
            </motion.aside>
          </div>
        </Container>
      </section>
    </main>
  )
}

export default Conclave
