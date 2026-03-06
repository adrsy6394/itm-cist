import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { fadeUp, viewport } from '@/lib/animations'

/**
 * SectionHeader — Dark AI SaaS section title
 * Neon teal gradient accent line + white title + muted subtitle
 * Built-in scroll-triggered fade-up animation via framer-motion.
 */
function SectionHeader({ title, subtitle, centered = false, className, ...props }) {
  return (
    <motion.div
      className={cn('mb-8 md:mb-10', centered && 'text-center', className)}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      {...props}
    >
      {/* Neon teal gradient accent line */}
      <div
        className={cn('h-0.5 w-10 rounded-full mb-4', centered && 'mx-auto')}
        style={{ background: 'linear-gradient(90deg, #00F5D4, #00E6FF)' }}
        aria-hidden="true"
      />

      <h2
        className="text-h2-mobile md:text-h2-desktop font-semibold tracking-tight"
        style={{ color: '#000000' }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="mt-2 text-sm md:text-base max-w-2xl leading-relaxed"
          style={{ color: '#9CA3AF' }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export { SectionHeader }
export default SectionHeader
