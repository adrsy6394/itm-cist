import PageBanner from '@/components/layout/PageBanner'
import Container from '@/components/layout/Container'
import { SectionHeader } from '@/components/common'
import CommitteeGrid from '@/components/common/CommitteeGrid'
import { REGISTRATION_MEMBERS } from '@/data/committees'

const BREADCRUMBS = [
  { label: 'Committee', path: '/committee/convener' },
  { label: 'Registration Committee' },
]

function RegistrationCommittee() {
  return (
    <main>
      <PageBanner
        title="Registration Committee"
        description="The team managing registrations and participant onboarding for CIST 2026."
        breadcrumbs={BREADCRUMBS}
      />

      <section className="section-padding">
        <Container>
          <SectionHeader
            title="Registration Team"
            subtitle="Handling all participant registrations and related coordination for the conference."
            className="mb-8"
          />

          <CommitteeGrid
            members={REGISTRATION_MEMBERS}
            columns="4"
          />
        </Container>
      </section>
    </main>
  )
}

export default RegistrationCommittee
