import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

/**
 * Button — Design PRD §5.6 / §8
 *
 * Variants: primary | outline | teal | ghost | danger
 * Sizes:    sm | md (default) | lg
 *
 * Polymorphic: pass `as={Link}` to render as a React Router Link
 * while keeping all button styling intact.
 *
 * @example
 * <Button variant="primary" size="lg">Register Now</Button>
 * <Button as={Link} to="/about" variant="outline">Read More</Button>
 * <Button variant="teal" loading>Submitting…</Button>
 */

const variantMap = {
  primary: 'bg-pro-blue text-white hover:bg-navy focus-visible:ring-pro-blue',
  outline: 'border border-pro-blue text-pro-blue hover:bg-pro-blue hover:text-white focus-visible:ring-pro-blue',
  teal:    'bg-teal text-white hover:bg-teal-dark focus-visible:ring-teal',
  ghost:   'text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-slate-400',
  danger:  'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
}

const sizeMap = {
  sm: 'px-3 py-1.5 text-xs gap-1.5',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-7 py-3 text-base gap-2',
}

const Button = forwardRef(function Button(
  {
    as: Component = 'button',
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    loading = false,
    disabled = false,
    className,
    children,
    ...props
  },
  ref,
) {
  // When rendered as a router Link, disabled should be handled via aria-disabled
  const isNativeButton = Component === 'button'

  return (
    <Component
      ref={ref}
      {...(isNativeButton ? { disabled: disabled || loading } : {})}
      {...(!isNativeButton && (disabled || loading) ? { 'aria-disabled': true, tabIndex: -1 } : {})}
      className={cn(
        // Base
        'inline-flex items-center justify-center font-medium rounded-md',
        'transition-colors duration-150',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'select-none',
        isNativeButton && 'disabled:opacity-50 disabled:pointer-events-none',
        // Variant + Size
        variantMap[variant],
        sizeMap[size],
        // Full width (mobile-first utility)
        fullWidth && 'w-full',
        // Touch target ≥ 44px height on mobile (Design PRD §7)
        size === 'sm' && 'min-h-[36px] md:min-h-0',
        size === 'md' && 'min-h-[44px] md:min-h-0',
        size === 'lg' && 'min-h-[48px] md:min-h-0',
        className,
      )}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4 shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
        </svg>
      )}
      {children}
    </Component>
  )
})

Button.displayName = 'Button'
export { Button }
export default Button
