import PageBanner from '@/components/layout/PageBanner'
import Container from '@/components/layout/Container'
import { SectionHeader } from '@/components/common'
import CommitteeGrid from '@/components/common/CommitteeGrid'
import { SOCIAL_MEDIA_MEMBERS } from '@/data/committees'

const BREADCRUMBS = [
  { label: 'Committee', path: '/committee/convener' },
  { label: 'Media Handling Committee' },
]

function SocialMediaCommittee() {
  return (
    <main>
      <PageBanner
        title="Media Handling Committee"
        description="The team managing digital outreach and social media communications for CIST 2026."
        breadcrumbs={BREADCRUMBS}
      />

      <section className="section-padding">
        <Container>
          <SectionHeader
            title="Social Media Team"
            subtitle="Managing digital presence and outreach across all social media platforms."
            className="mb-8"
          />

          <CommitteeGrid
            members={SOCIAL_MEDIA_MEMBERS}
            columns="3"
            cardSize="md"
          />
        </Container>
      </section>
    </main>
  )
}

export default SocialMediaCommittee
