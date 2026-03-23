import PageBanner from '@/components/layout/PageBanner'
import Container from '@/components/layout/Container'
import { SectionHeader } from '@/components/common'
import { Badge, Card, CardBody, Button } from '@/components/ui'
import { FileText, ExternalLink, Book, History } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, scaleIn, viewport } from '@/lib/animations'

const BREADCRUMBS = [{ label: 'Proceedings' }]

/**
 * Proceedings — PRD §4.1
 * Lists past and current conference proceedings / published papers.
 */
function Proceedings() {
  const archives = [
    {
      year: "2024",
      title: "Proceedings of the 3rd CIST: Future of Connected Systems",
      publisher: "Springer - LNCS (Vol 1420)",
      papers: "45 Papers",
      status: "Published",
      link: "#"
    },
    {
      year: "2023",
      title: "Proceedings of the 2nd CIST: Sustainable Intelligence",
      publisher: "IEEE Xplore",
      papers: "38 Papers",
      status: "Digital Library",
      link: "#"
    },
    {
      year: "2022",
      title: "Proceedings of the 1st CIST: Innovations Frontiers",
      publisher: "Elsevier Procedia",
      papers: "32 Papers",
      status: "Archived",
      link: "#"
    }
  ]

  return (
    <main>
      <PageBanner
        title="Conference Proceedings"
        description="The record of scholarship and Innovations from the CIST series."
        breadcrumbs={BREADCRUMBS}
      />

      <section className="section-padding">
        <Container>
          <div className="max-w-4xl">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
              <SectionHeader
                title="Publication Archive"
                subtitle="CIST maintains a rigorous standard for peer-reviewed publications."
                align="left"
                className="mb-10"
              />
            </motion.div>

            <div className="space-y-8">

              {/* Active / Current Year Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <History size={20} className="text-teal" />
                  <h3 className="font-bold text-navy uppercase tracking-widest text-sm">CIST 2026 Status</h3>
                </div>
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="bg-white border-2 border-pro-blue/20 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-20 h-24 bg-pro-blue/10 rounded-lg flex items-center justify-center border border-pro-blue/20 shrink-0">
                    <Book size={40} className="text-pro-blue" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-xl font-bold text-navy mb-2">2026 Proceedings Preparation</h4>
                    <p className="text-sm text-slate-500 mb-4">
                      Submissions for CIST 2026 are currently being reviewed. Successful papers will be eligible for publication in the upcoming volume of the conference series.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      <Badge variant="info">In Review Process</Badge>
                      <Badge variant="outline">Scopus Mapping Pending</Badge>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Past Archives */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <FileText size={20} className="text-slate-400" />
                  <h3 className="font-bold text-slate-400 uppercase tracking-widest text-sm">Historical Archives</h3>
                </div>

                <motion.div className="space-y-4" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
                  {archives.map((item, i) => (
                    <motion.div key={i} variants={scaleIn}>
                      <Card className="border-slate-100 hover:border-slate-200 transition-all">
                        <CardBody className="p-0">
                          <div className="flex flex-col md:flex-row">
                            {/* Year block */}
                            <div className="bg-slate-50 md:w-32 flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-slate-100 shrink-0">
                              <span className="text-3xl font-black text-navy">{item.year}</span>
                              <Badge variant="secondary" className="mt-2">{item.status}</Badge>
                            </div>

                            {/* Content block */}
                            <div className="p-6 flex-1 flex flex-col md:flex-row gap-6 items-start md:items-center">
                              <div className="flex-1">
                                <h5 className="font-bold text-navy text-lg leading-snug mb-2">{item.title}</h5>
                                <p className="text-sm text-slate-500">{item.publisher} • {item.papers}</p>
                              </div>
                              <Button variant="ghost" size="sm" className="shrink-0 text-pro-blue hover:text-navy">
                                View Online
                                <ExternalLink size={16} />
                              </Button>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

            </div>

            {/* Publication FAQ */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Publication FAQ</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Common queries regarding the publication process and indexing of conference papers.
                  </p>
                </div>
                <div className="space-y-4">
                  <details className="group border-b border-white/10 pb-4 cursor-pointer">
                    <summary className="font-bold text-sm flex justify-between items-center group-open:text-teal">
                      Will the papers be Scopus indexed?
                      <span className="group-open:rotate-180 transition-transform">↓</span>
                    </summary>
                    <p className="text-xs text-slate-400 mt-2">Yes, for the last three years our proceedings have been indexed in Scopus. We are maintaining the same track for 2026.</p>
                  </details>
                  <details className="group border-b border-white/10 pb-4 cursor-pointer">
                    <summary className="font-bold text-sm flex justify-between items-center group-open:text-teal">
                      How long is the publication cycle?
                      <span className="group-open:rotate-180 transition-transform">↓</span>
                    </summary>
                    <p className="text-xs text-slate-400 mt-2">Typically, the digital proceedings are available 3-4 months after the physical conference.</p>
                  </details>
                </div>
              </div>
              {/* Decor */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-teal/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  )
}

export default Proceedings
