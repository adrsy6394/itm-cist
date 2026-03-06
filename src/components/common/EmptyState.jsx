import { Inbox } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * EmptyState — "no data" / "coming soon" placeholder
 *
 * @example
 * <EmptyState
 *   title="No speakers announced yet"
 *   description="Check back soon — speaker list will be published shortly."
 * />
 */
function EmptyState({ icon, title = 'Nothing here yet', description, action, className, ...props }) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center py-12 px-6',
        className,
      )}
      {...props}
    >
      <div
        className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mb-4"
        aria-hidden="true"
      >
        {icon ?? <Inbox size={28} className="text-slate-400" />}
      </div>
      <h3 className="text-base font-semibold text-slate-700 mb-1">{title}</h3>
      {description && (
        <p className="text-sm text-slate-500 max-w-sm leading-relaxed">{description}</p>
      )}
      {action && <div className="mt-5">{action}</div>}
    </div>
  )
}

export { EmptyState }
export default EmptyState
