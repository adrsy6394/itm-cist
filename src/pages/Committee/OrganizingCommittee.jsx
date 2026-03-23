import PageBanner from '@/components/layout/PageBanner'
import Container from '@/components/layout/Container'
import { SectionHeader } from '@/components/common'
import CommitteeGrid from '@/components/common/CommitteeGrid'
import { ORGANIZING_MEMBERS } from '@/data/committees'

const BREADCRUMBS = [
  { label: 'Committee', path: '/committee/convener' },
  { label: 'Organizing Committee' },
]

function OrganizingCommittee() {
  return (
    <main>
      <PageBanner
        title="Organizing Committee"
        description="The dedicated team responsible for planning and executing CIST 2026."
        breadcrumbs={BREADCRUMBS}
      />

      <section className="section-padding">
        <Container>
          <SectionHeader
            title="Organizing Team"
            subtitle="Faculty members coordinating all aspects of the conference across departments."
            className="mb-8"
          />

          <CommitteeGrid
            members={ORGANIZING_MEMBERS}
            columns="4"
          />
        </Container>
      </section>
    </main>
  )
}

export default OrganizingCommittee
