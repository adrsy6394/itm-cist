import PageBanner from '@/components/layout/PageBanner'
import Container from '@/components/layout/Container'
import { SectionHeader } from '@/components/common'
import CommitteeGrid from '@/components/common/CommitteeGrid'
import { HOSPITALITY_MEMBERS } from '@/data/committees'

const BREADCRUMBS = [
  { label: 'Committee', path: '/committee/convener' },
  { label: 'Hospitality Committee' },
]

function HospitalityCommittee() {
  return (
    <main>
      <PageBanner
        title="Hospitality Committee"
        description="Ensuring a warm and welcoming experience for all delegates and participants of CIST 2026."
        breadcrumbs={BREADCRUMBS}
      />

      <section className="section-padding">
        <Container>
          <SectionHeader
            title="Hospitality Team"
            subtitle="Dedicated to providing an exceptional experience for all conference attendees."
            className="mb-8"
          />

          <CommitteeGrid
            members={HOSPITALITY_MEMBERS}
            columns="3"
          />
        </Container>
      </section>
    </main>
  )
}

export default HospitalityCommittee
