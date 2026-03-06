import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

/**
 * Input — Design PRD §5.6
 *
 * Styled text input with error state support.
 * @example
 * <Input placeholder="Your name" />
 * <Input error="Name is required" value={name} onChange={e => setName(e.target.value)} />
 */
const Input = forwardRef(function Input({ error, className, type = 'text', ...props }, ref) {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        'w-full px-3 py-2.5 border rounded-md text-sm text-slate-800 bg-white',
        'placeholder:text-slate-400',
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

Input.displayName = 'Input'
export { Input }
export default Input
