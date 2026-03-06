import { cn } from '@/lib/utils'

/**
 * Badge — Design PRD §6.6 (Important Dates) / §5 (Highlights)
 *
 * Variants: upcoming | expired | today | info | highlight | teal
 *
 * @example
 * <Badge variant="upcoming">Upcoming</Badge>
 * <Badge variant="expired">Closed</Badge>
 */
const variantMap = {
  upcoming:  'bg-teal text-white',
  expired:   'bg-slate-100 text-slate-500',
  today:     'bg-amber-100 text-amber-800',
  info:      'bg-blue-50 text-blue-700 border border-blue-100',
  highlight: 'bg-pro-blue text-white',
  teal:      'bg-teal text-white',
  success:   'bg-green-100 text-green-700',
  warning:   'bg-amber-100 text-amber-700',
  danger:    'bg-red-100 text-red-700',
}

function Badge({ variant = 'info', className, children, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium',
        variantMap[variant] ?? variantMap.info,
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export { Badge }
export default Badge
