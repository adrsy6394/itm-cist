import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, viewport } from '@/lib/animations'
import PageBanner from '@/components/layout/PageBanner'
import Container from '@/components/layout/Container'
import { Button } from '@/components/ui'
import { LINKS } from '@/config/siteConfig'

/**
 * Shared RegSubPage — used by Faculty, ITM Students, External sub-routes
 * PRD §8.3 / Design PRD §6.4: Instructions + Google Form embed
 *
 * Props:
 *   title       — page banner title
 *   description — banner subtitle
 *   breadcrumbs — [{label, path?}]
 *   formKey     — key into LINKS: 'registrationFormFaculty' | 'registrationFormITM' | 'registrationFormExternal'
 *   instructions — string[] for the info box
 */
function RegSubPage({ title, description, breadcrumbs, formKey, instructions = [] }) {
  const formUrl = LINKS[formKey] || ''

  return (
    <main>
      <PageBanner
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
      />

      <section className="section-padding">
        <Container variant="narrow">

          {/* ── Info box ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-8"
          >
            <h2 className="text-sm font-semibold text-blue-900 mb-3">Before you register</h2>
            <ul className="space-y-2">
              {instructions.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-blue-800 leading-relaxed">
                  <span className="mt-0.5 text-blue-500">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Google Form embed (if URL is set) OR placeholder ── */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
            {formUrl ? (
              <>
                <div className="w-full rounded-lg border border-slate-200 overflow-hidden shadow-card mb-4">
                  <iframe
                    src={formUrl}
                    title={`Registration form — ${title}`}
                    className="w-full h-[700px]"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    loading="lazy"
                  >
                    Loading Google Form…
                  </iframe>
                </div>
                <p className="text-xs text-slate-400 text-center mb-4">
                  Can't see the form?{' '}
                  <a
                    href={formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pro-blue underline hover:text-navy"
                  >
                    Open in new tab ↗
                  </a>
                </p>
              </>
            ) : (
              /* Placeholder when form URL not yet configured */
              <div className="w-full rounded-lg border-2 border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center py-16 mb-6">
                <span className="text-3xl mb-3">📋</span>
                <p className="text-sm font-medium text-slate-600 mb-1">Registration form coming soon</p>
                <p className="text-xs text-slate-400">
                  The Google Form link will be added shortly. Please check back later.
                </p>
              </div>
            )}
          </motion.div>

          {/* ── Fallback open-in-new-tab CTA ── */}
          {formUrl && (
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="text-center">
              <Button
                as="a"
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Open Registration Form
                <ExternalLink size={16} />
              </Button>
              <p className="text-xs text-slate-400 mt-2">
                Opens in a new tab. Data is submitted securely via Google Forms.
              </p>
            </motion.div>
          )}

        </Container>
      </section>
    </main>
  )
}

export default RegSubPage
