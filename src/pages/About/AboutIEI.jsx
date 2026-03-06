import PageBanner from '@/components/layout/PageBanner'
import Container from '@/components/layout/Container'
import { SectionHeader } from '@/components/common'
import { Award, ShieldCheck, TrendingUp, Users, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, fadeRight, stagger, scaleIn, viewport } from '@/lib/animations'

const BREADCRUMBS = [
  { label: 'About', path: '/about/conference' },
  { label: 'About IEI' },
]

function AboutIEI() {
  return (
    <main>
      <PageBanner
        title="About IEI"
        description="The Institution of Engineers (India) — Technical Partner."
        breadcrumbs={BREADCRUMBS}
      />

      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">

              {/* Introduction */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="prose prose-slate max-w-none text-slate-600 space-y-4">
                <SectionHeader
                  title="Institution of Engineers (India)"
                  subtitle="A century of service to the engineering profession."
                  align="left"
                  className="mb-6"
                />
                <p>
                  The Institution of Engineers (India) is the largest multidisciplinary professional body that encompasses 15 engineering disciplines and has 0.8 million members. Established in 1920, it has served the engineering fraternity for over a century and is recognized as a Scientific and Research Organization by the Government of India
                </p>
                <p>
                  It provides technical, professional, and support services to the government, industries, academia, and the Engineering fraternity.
                </p>
                <p>
                  The Institution of Engineers (India) is the first professional body to represent India in several International Bodies, such as the World Mining Congress (WMC), the World Federation of Engineering Organizations (WFEO), the Commonwealth Engineers' Council (CEC), the Federation International du Baton (fib), and the Federation of Engineering Institutions of South and Central Asia (FEISCA). It also has bilateral agreements with a number of professional societies across the globe.
                </p>
              </motion.div>

              {/* Service Pillars */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                {[
                  {
                    icon: <ShieldCheck className="text-pro-blue" />,
                    title: "Professional Standards",
                    desc: "Setting high ethical and technical standards for the engineering community."
                  },
                  {
                    icon: <Award className="text-pro-blue" />,
                    title: "Recognition",
                    desc: "Rendering professional services through its Chartered Engineer certification."
                  },
                  {
                    icon: <TrendingUp className="text-pro-blue" />,
                    title: "Advancement",
                    desc: "Disseminating latest technical information through journals and conventions."
                  },
                  {
                    icon: <Users className="text-pro-blue" />,
                    title: "Community",
                    desc: "Providing a platform for interaction through 125+ centers across India."
                  }
                ].map((pill, i) => (
                  <motion.div key={i} variants={scaleIn} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-pro-blue/10 rounded-full flex items-center justify-center mb-4">
                      {pill.icon}
                    </div>
                    <h4 className="font-bold text-navy mb-2">{pill.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{pill.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Local Centre Info */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="bg-slate-50 border border-slate-200 rounded-xl p-8">
                <div className="flex flex-wrap gap-4">
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-500">Founded 1990</span>
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-500">1000+ Members</span>
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-500">Active Technical Tracks</span>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.aside variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewport} className="space-y-6">
              {/* Official Seal / Logo Space */}
              <div className="aspect-square bg-white border border-slate-200 rounded-xl flex flex-col items-center justify-center p-8 text-center">
                <div className="w-32 h-32 bg-slate-100 rounded-full mb-4 flex items-center justify-center border-4 border-slate-50">
                  <Globe size={64} className="text-pro-blue" />
                </div>
                <h4 className="font-bold text-navy text-sm">IEI Official Body</h4>
                <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest">Kolkata Head Office</p>
              </div>

              {/* Links */}
              <div className="space-y-3">
                <h4 className="font-bold text-navy px-1">Resources</h4>
                <a href="#" className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-lg group hover:border-pro-blue transition-all">
                  <span className="text-sm text-slate-600 group-hover:text-navy">Membership Guide</span>
                  <TrendingUp size={16} className="text-slate-300 group-hover:text-pro-blue" />
                </a>
                <a href="#" className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-lg group hover:border-pro-blue transition-all">
                  <span className="text-sm text-slate-600 group-hover:text-navy">Technical Journals</span>
                  <TrendingUp size={16} className="text-slate-300 group-hover:text-pro-blue" />
                </a>
              </div>
            </motion.aside>
          </div>
        </Container>
      </section>
    </main>
  )
}

export default AboutIEI
