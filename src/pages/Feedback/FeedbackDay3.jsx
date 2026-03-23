import PageBanner from '@/components/layout/PageBanner'
import Container from '@/components/layout/Container'

const BREADCRUMBS = [
  { label: 'Feedback', path: '/feedback/day1' },
  { label: 'Day 3' },
]

/**
 * FeedbackDay3 — Day 3 Feedback
 */
function FeedbackDay3() {
  return (
    <main>
      <PageBanner
        title="Day 3 Feedback"
        description="Share your experience and feedback for Day 3 of CIST 2026."
        breadcrumbs={BREADCRUMBS}
      />

      <section className="section-padding">
        <Container variant="narrow">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-8">
            <div className="h-4 w-48 bg-blue-200 rounded mb-2" />
            <div className="space-y-1.5">
              <div className="h-3 w-full bg-blue-100 rounded" />
              <div className="h-3 w-4/6 bg-blue-100 rounded" />
            </div>
          </div>

          <div className="w-full h-[600px] bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center">
            <p className="text-slate-400 text-sm">Day 3 Feedback Google Form will appear here</p>
          </div>
        </Container>
      </section>
    </main>
  )
}

export default FeedbackDay3
