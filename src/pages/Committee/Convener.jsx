import PageBanner from '@/components/layout/PageBanner'
import Container from '@/components/layout/Container'
import { SectionHeader } from '@/components/common'
import CommitteeGrid from '@/components/common/CommitteeGrid'
import { CONVENER_MEMBERS } from '@/data/committees'

const BREADCRUMBS = [
  { label: 'Committee', path: '/committee/convener' },
  { label: 'Convener' },
]

function Convener() {
  return (
    <main>
      <PageBanner
        title="Convener"
        description="The conference convener leading CIST 2026."
        breadcrumbs={BREADCRUMBS}
      />

      <section className="section-padding">
        <Container>
          <SectionHeader
            title="Convener"
            subtitle="Conference Convener for CIST 2026."
            className="mb-8"
          />

          <CommitteeGrid
            members={CONVENER_MEMBERS}
            columns="3"
            cardSize="md"
          />
        </Container>
      </section>
    </main>
  )
}

export default Convener
