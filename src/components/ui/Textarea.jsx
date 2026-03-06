import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

/**
 * Textarea — Design PRD §5.6
 *
 * @example
 * <Textarea rows={5} placeholder="Your message" />
 * <Textarea error="Message is required" />
 */
const Textarea = forwardRef(function Textarea({ error, className, rows = 4, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(
        'w-full px-3 py-2.5 border rounded-md text-sm text-slate-800 bg-white',
        'placeholder:text-slate-400 resize-y',
        'transition-colors duration-150',
        'focus:outline-none focus:ring-2 focus:ring-pro-blue focus:border-pro-blue',
        'disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed',
        error
          ? 'border-red-400 focus:ring-red-400 focus:border-red-400'
          : 'border-slate-300',
        className,
      )}
      aria-invalid={!!error}
      {...props}
    />
  )
})

Textarea.displayName = 'Textarea'
export { Textarea }
export default Textarea
