import { cn } from '@/lib/utils'
import { PersonCard } from '@/components/common'
import { EmptyState } from '@/components/common'
import { Spinner } from '@/components/ui'
import { motion } from 'framer-motion'
import { stagger, scaleIn, viewport } from '@/lib/animations'

/**
 * CommitteeGrid — Shared responsive grid for committee and speaker listings
 *
 * Design PRD §6.3:
 *   Grid:  1 col (mobile) → 2 col (tablet) → 3 col (laptop) → 4 col (desktop)
 *   Cards: circular photo, bold name, designation, affiliation
 *
 * Props:
 *   members  — array of { id, name, designation, role, affiliation, imageSrc }
 *   loading  — shows spinner skeleton while data loads
 *   error    — shows error state if applicable
 *   columns  — '3' | '4' (default: '4')
 *   cardSize — 'sm' | 'md' (default: 'md', 'sm' for compact grids)
 *
 * @example
 * <CommitteeGrid members={advisoryMembers} columns="4" />
 */
function CommitteeGrid({
  members = [],
  loading = false,
  error = null,
  columns = '4',
  cardSize = 'md',
  className,
}) {
  /* ── Loading state ── */
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4">
        <Spinner size="md" />
        <p className="text-sm text-slate-500">Loading members…</p>
      </div>
    )
  }

  /* ── Error state ── */
  if (error) {
    return (
      <EmptyState
        title="Could not load members"
        description={error}
        icon="⚠️"
      />
    )
  }

  /* ── Empty state ── */
  if (!members.length) {
    return (
      <EmptyState
        title="Coming soon"
        description="Committee member details will be published shortly."
      />
    )
  }

  /* ── Grid column classes ── */
  const colClass = {
    '3': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    '4': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  }[columns] ?? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'

  /* ── Card size modifier — convenors use a slightly larger card ── */
  const cardClass = cardSize === 'sm'
    ? 'p-4'
    : 'p-5 md:p-6'

  return (
    <motion.ul
      role="list"
      className={cn('grid gap-4 md:gap-5', colClass, className)}
      aria-label="Committee members"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {members.map((member) => (
        <motion.li key={member.id} variants={scaleIn}>
          <PersonCard
            name={member.name}
            designation={member.designation}
            role={member.role}
            affiliation={member.affiliation}
            imageSrc={member.imageSrc}
            className={cardClass}
          />
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default CommitteeGrid
