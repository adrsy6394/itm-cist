import { cn } from '@/lib/utils'

/**
 * InfoCard — Icon + title + body
 *
 * Used in Home page highlight sections, About pages, Call For Paper highlights.
 * Design PRD §6.1 (Home) / §11 (Engagement Strategy)
 *
 * @example
 * import { BookOpen } from 'lucide-react'
 * <InfoCard icon={<BookOpen size={24} />} title="Research Tracks" description="Explore 8 interdisciplinary tracks." />
 */
function InfoCard({ icon, title, description, className, ...props }) {
  return (
    <div
      className={cn(
        'bg-white border border-slate-200 rounded-lg shadow-card',
        'transition-shadow duration-200 hover:shadow-card-hover',
        'p-5 flex flex-col gap-3',
        className,
      )}
      {...props}
    >
      {/* Icon container */}
      {icon && (
        <div
          className="w-10 h-10 rounded-md bg-slate-50 border border-slate-100 flex items-center justify-center text-pro-blue shrink-0"
          aria-hidden="true"
        >
          {icon}
        </div>
      )}

      {/* Content */}
      <div>
        {title && (
          <h3 className="text-sm font-semibold text-navy mb-1 leading-snug">{title}</h3>
        )}
        {description && (
          <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  )
}

export { InfoCard }
export default InfoCard
