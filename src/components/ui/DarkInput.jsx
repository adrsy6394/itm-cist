import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

/**
 * DarkInput — Dark AI SaaS Design System
 *
 * Dark themed text input with neon teal focus ring, error state support.
 *
 * @example
 * <DarkInput placeholder="Enter your email" />
 * <DarkInput error="Email is required" value={email} onChange={e => setEmail(e.target.value)} />
 */
const DarkInput = forwardRef(function DarkInput(
  { error, className, type = 'text', ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        'dark-input',
        error && 'dark-input-error',
        className,
      )}
      aria-invalid={!!error}
      {...props}
    />
  )
})

DarkInput.displayName = 'DarkInput'
export { DarkInput }
export default DarkInput
