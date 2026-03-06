import { Download, FileText } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, viewport } from '@/lib/animations'
import PageBanner from '@/components/layout/PageBanner'
import { Button } from '@/components/ui'

const BREADCRUMBS = [{ label: 'Brochure' }]
const BROCHURE_PATH = '/brochure.pdf'

function Brochure() {
  return (
    <main>
      <PageBanner
        title="Conference Brochure"
        description="Comprehensive guide to CIST 2026 tracks, speakers, and schedule."
        breadcrumbs={BREADCRUMBS}
      />

      {/* ── Top bar: filename + download ── */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="flex items-center justify-between px-6 py-3 bg-slate-50 border-b border-slate-200">
        <div className="flex items-center gap-2.5">
          <FileText size={16} className="text-pro-blue" />
          <span className="text-sm font-medium text-navy">CIST 2026 — Official Brochure.pdf</span>
        </div>
        <Button
          as="a"
          href={BROCHURE_PATH}
          download="CIST-2026-Brochure.pdf"
          variant="primary"
          size="sm"
        >
          <Download size={15} />
          Download
        </Button>
      </motion.div>

      {/* ── Full-width PDF embed ── */}
      <object
        data={BROCHURE_PATH}
        type="application/pdf"
        style={{ width: '100%', height: 'calc(100vh - 220px)', minHeight: '600px', display: 'block' }}
      >
        {/* Fallback */}
        <div className="flex flex-col items-center justify-center gap-4 py-24 text-slate-400">
          <FileText size={56} className="opacity-20" />
          <p className="text-sm font-medium text-slate-500">Browser PDF preview support nahi karta.</p>
          <Button
            as="a"
            href={BROCHURE_PATH}
            download="CIST-2026-Brochure.pdf"
            variant="primary"
            size="sm"
          >
            <Download size={15} />
            Download PDF
          </Button>
        </div>
      </object>
    </main>
  )
}

export default Brochure
