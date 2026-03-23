import PageBanner from '@/components/layout/PageBanner'
import Container from '@/components/layout/Container'
import { SectionHeader } from '@/components/common'
import CommitteeGrid from '@/components/common/CommitteeGrid'
import { TECHNICAL_MEMBERS } from '@/data/committees'

const BREADCRUMBS = [
  { label: 'Committee', path: '/committee/convener' },
  { label: 'Technical Committee' },
]

function TechnicalCommittee() {
  return (
    <main>
      <PageBanner
        title="Technical Committee"
        description="Expert reviewers and technical chairs responsible for the scientific quality of CIST 2026."
        breadcrumbs={BREADCRUMBS}
      />

      <section className="section-padding">
        <Container>
          <SectionHeader
            title="Technical Programme Committee"
            subtitle="Peer reviewers and track chairs ensuring rigorous double-blind paper evaluation."
            className="mb-8"
          />

          <CommitteeGrid
            members={TECHNICAL_MEMBERS}
            columns="4"
          />
        </Container>
      </section>
    </main>
  )
}

export default TechnicalCommittee
