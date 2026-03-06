import PageBanner from '@/components/layout/PageBanner'
import Container from '@/components/layout/Container'
import { SectionHeader } from '@/components/common'
import CommitteeGrid from '@/components/common/CommitteeGrid'
import { ADVISORY_MEMBERS } from '@/data/committees'

const BREADCRUMBS = [
  { label: 'Committee', path: '/committee/convener' },
  { label: 'Advisory Committee' },
]

function AdvisoryCommittee() {
  return (
    <main>
      <PageBanner
        title="Advisory Committee"
        description="Distinguished experts and advisors who guide the vision and direction of CIST 2025."
        breadcrumbs={BREADCRUMBS}
      />

      <section className="section-padding">
        <Container>
          <SectionHeader
            title="Advisory Board"
            subtitle="Eminent academicians and researchers providing strategic guidance for the conference."
            className="mb-8"
          />

          <CommitteeGrid
            members={ADVISORY_MEMBERS}
            columns="4"
          />
        </Container>
      </section>
    </main>
  )
}

export default AdvisoryCommittee
