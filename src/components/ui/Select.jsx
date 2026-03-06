import { forwardRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Select — native styled select (Design PRD §5.6)
 *
 * @example
 * <Select>
 *   <option value="">Choose category…</option>
 *   <option value="faculty">Faculty</option>
 * </Select>
 */
const Select = forwardRef(function Select({ error, className, children, ...props }, ref) {
  return (
    <div className="relative">
      <select
        ref={ref}
        className={cn(
          'w-full appearance-none px-3 py-2.5 pr-9 border rounded-md',
          'text-sm text-slate-800 bg-white',
          'transition-colors duration-150',
          'focus:outline-none focus:ring-2 focus:ring-pro-blue focus:border-pro-blue',
          'disabled:bg-slate-50 disabled:cursor-not-allowed',
          error
            ? 'border-red-400 focus:ring-red-400 focus:border-red-400'
            : 'border-slate-300',
          className,
        )}
        aria-invalid={!!error}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        size={16}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
        aria-hidden="true"
      />
    </div>
  )
})

Select.displayName = 'Select'
export { Select }
export default Select
