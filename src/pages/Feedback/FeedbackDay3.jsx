import PageBanner from '@/components/layout/PageBanner'
import Container from '@/components/layout/Container'
import { Card, CardBody } from '@/components/ui/Card'
import { feedbackLinks } from '@/config/feedbackData'

const BREADCRUMBS = [
  { label: 'Feedback', path: '/feedback/day1' },
  { label: 'Day 3' },
]

/**
 * FeedbackDay3 — Day 3 Feedback
 */
function FeedbackDay3() {
  const day3Links = feedbackLinks.filter(item => item.day === 3)

  return (
    <main>
      <PageBanner
        title="Day 3 Feedback"
        description="Share your experience and feedback for Day 3 of CIST 2026."
        breadcrumbs={BREADCRUMBS}
      />

      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {day3Links.map((item, index) => (
              <Card key={`${item.id}-${index}`} className="flex flex-col h-full">
                <CardBody className="flex flex-col justify-between h-full space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block px-2 py-1 bg-teal-500/10 text-teal-400 text-xs font-semibold rounded-md border border-teal-500/20">
                        S.No {item.id}
                      </span>
                      <span className="inline-block px-2 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-md border border-blue-500/20">
                        {item.track}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-100 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-slate-400 line-clamp-3">
                      <span className="font-semibold text-slate-300">Topic:</span> {item.topic}
                    </p>
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white font-medium rounded-md transition-colors duration-200 shadow-[0_0_15px_rgba(0,245,212,0.3)] hover:shadow-[0_0_25px_rgba(0,245,212,0.5)]"
                  >
                    Submit Feedback
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}

export default FeedbackDay3
