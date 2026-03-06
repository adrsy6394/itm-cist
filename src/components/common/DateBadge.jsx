import { Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * DateBadge — Important date row with status indicator
 *
 * Design PRD §6.6:
 *   - Upcoming = teal
 *   - Expired = grey
 *   - Today = amber
 *
 * @example
 * <DateBadge
 *   label="Paper Submission Deadline"
 *   date="15 March 2025"
 *   status="upcoming"
 * />
 */
const statusStyles = {
  upcoming: {
    row:    'border-l-4 border-teal',
    badge:  'bg-teal text-white',
    label:  'Upcoming',
    text:   'text-slate-700',
  },
  expired: {
    row:    'border-l-4 border-slate-200',
    badge:  'bg-slate-100 text-slate-500',
    label:  'Closed',
    text:   'text-slate-400',
  },
  today: {
    row:    'border-l-4 border-amber-400',
    badge:  'bg-amber-100 text-amber-800',
    label:  'Today',
    text:   'text-slate-700 font-medium',
  },
}

function DateBadge({ label, date, status = 'upcoming', className }) {
  const s = statusStyles[status] ?? statusStyles.upcoming

  return (
    <div
      className={cn(
        'flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4',
        'bg-white rounded-md px-4 py-3.5',
        'border border-slate-200',
        s.row,
        className,
      )}
    >
      {/* Date left with icon */}
      <div className="flex items-center gap-2 sm:w-36 shrink-0">
        <Calendar size={14} className="text-slate-400 shrink-0" aria-hidden="true" />
        <span className={cn('text-sm font-medium font-mono', s.text)}>{date}</span>
      </div>

      {/* Label grows */}
      <p className={cn('flex-1 text-sm', s.text)}>{label}</p>

      {/* Status badge */}
      <span
        className={cn('self-start sm:self-center text-xs font-medium px-2.5 py-0.5 rounded-full', s.badge)}
        aria-label={`Status: ${s.label}`}
      >
        {s.label}
      </span>
    </div>
  )
}

export { DateBadge }
export default DateBadge
