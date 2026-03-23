import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ExternalLink, AlertCircle, CheckCircle2, ChevronRight, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, scaleIn, viewport } from '@/lib/animations'
import PageBanner from '@/components/layout/PageBanner'
import Container from '@/components/layout/Container'
import { SectionHeader } from '@/components/common'
import { Button, Badge, Card, CardBody } from '@/components/ui'
import {
  selectFormLinks,
  selectRegistrationOpen,
} from '@/features/registration/registrationSlice'

const BREADCRUMBS = [{ label: 'Registration' }]

/** Registration categories — PRD §8.3 / Design PRD §6.4 */
const CATEGORIES = [
  {
    key: 'faculty',
    label: 'Faculty / Professionals',
    emoji: '🎓',
    subLabel: 'For faculty members, researchers & working professionals',
    path: '/registration/faculty',
    color: 'border-pro-blue',
    badgeColor: 'pro-blue',
  },
  {
    key: 'itmStudents',
    label: 'ITM Students',
    emoji: '📚',
    subLabel: 'For students currently enrolled at ITM College, GIDA, Gorakhpur',
    path: '/registration/itm-students',
    color: 'border-teal',
    badgeColor: 'teal',
  },
  {
    key: 'external',
    label: 'External Candidates',
    emoji: '🌐',
    subLabel: 'For students and candidates from other institutions',
    path: '/registration/external',
    color: 'border-slate-300',
    badgeColor: 'slate',
  },
]

const INSTRUCTIONS = [
  'Select your registration category below.',
  'Click the Register button to open the Google Form.',
  'Fill in all required details accurately.',
  'Submit the form — a confirmation email will be sent.',
  'Keep the confirmation for your records on conference day.',
]

/**
 * Registration — Hub Page
 * PRD §8.3 / Design PRD §6.4
 */
function Registration() {
  const formLinks = useSelector(selectFormLinks)
  const isOpen    = useSelector(selectRegistrationOpen)

  return (
    <main>
      <PageBanner
        title="Registration"
        description="Register for CIST 2026 — select your participant category to access the form."
        breadcrumbs={BREADCRUMBS}
      />

      <section className="section-padding">
        <Container variant="narrow">

          {/* ── Registration status banner ── */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="mb-8">
            {isOpen ? (
              <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-lg p-4">
                <CheckCircle2 size={18} className="text-green-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-green-800">Registrations are Open</p>
                  <p className="text-xs text-green-700 mt-0.5">
                    Fill the appropriate form before the deadline. Registration closes on the date published in Important Dates.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4">
                <AlertCircle size={18} className="text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-amber-800">Registrations are Closed</p>
                  <p className="text-xs text-amber-700 mt-0.5">
                    The registration window has ended. Please contact the organizers for further assistance.
                  </p>
                </div>
              </div>
            )}
          </motion.div>

          {/* ── How to Register ── */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-7 bg-teal rounded-full" />
              <h2 className="text-lg font-semibold text-navy">How to Register</h2>
            </div>

            <ol className="space-y-3">
              {INSTRUCTIONS.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-pro-blue/10 text-pro-blue text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-slate-600 leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* ── Category Cards ── */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
            <SectionHeader
              title="Select Your Category"
              subtitle="Choose the category that best describes your participant profile."
              className="mb-5"
            />
          </motion.div>

          <motion.div
            className="space-y-4 mb-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {CATEGORIES.map((cat) => {
              const formUrl = formLinks?.[cat.key]
              return (
                <motion.div key={cat.key} variants={scaleIn}>
                  <Card className={`border-l-4 ${cat.color} cursor-pointer`}>
                    <CardBody className="p-5">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        {/* Icon + Labels */}
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <span className="text-2xl shrink-0">{cat.emoji}</span>
                          <div>
                            <p className="font-semibold text-navy text-sm">{cat.label}</p>
                            <p className="text-xs text-slate-500 mt-0.5 leading-snug">{cat.subLabel}</p>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2 shrink-0">
                          {/* Details link */}
                          <Button as={Link} to={cat.path} variant="ghost" size="sm">
                            Details
                            <ChevronRight size={14} />
                          </Button>

                          {/* Register CTA */}
                          {formUrl ? (
                            <Button
                              as="a"
                              href={formUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              variant="primary"
                              size="sm"
                              disabled={!isOpen}
                            >
                              Register
                              <ExternalLink size={12} />
                            </Button>
                          ) : (
                            <Button as={Link} to={cat.path} variant="primary" size="sm" disabled={!isOpen}>
                              Register
                              <ChevronRight size={14} />
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          {/* ── Fee notice ── */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-md p-4">
            <Info size={16} className="text-blue-500 mt-0.5 shrink-0" />
            <p className="text-xs text-blue-700 leading-relaxed">
              Registration fees vary by category and registration period (Early Bird / Regular / On Spot).
              {' '}
              <Link to="/registration-fee" className="font-medium underline hover:text-blue-900">
                View fee structure →
              </Link>
            </p>
          </motion.div>

        </Container>
      </section>
    </main>
  )
}

export default Registration
