import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

/**
 * DarkButton — Dark AI SaaS Design System
 *
 * Variants: primary | outline | ghost | cyan | disabled
 * Sizes:    sm | md (default) | lg
 *
 * Polymorphic: pass `as={Link}` for React Router Link rendering.
 *
 * @example
 * <DarkButton variant="primary" size="lg">Get Started</DarkButton>
 * <DarkButton variant="outline">Learn More</DarkButton>
 * <DarkButton variant="cyan" size="sm">Try Now</DarkButton>
 */

const variantMap = {
  primary:  'dark-btn-primary',
  outline:  'dark-btn-outline',
  ghost:    'dark-btn-ghost',
  cyan:     'dark-btn-cyan',
  disabled: 'dark-btn-disabled',
}

const sizeMap = {
  sm: 'dark-btn-sm',
  md: 'dark-btn-md',
  lg: 'dark-btn-lg',
}

const DarkButton = forwardRef(function DarkButton(
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
  const isNativeButton = Component === 'button'
  const isDisabled = disabled || loading || variant === 'disabled'

  return (
    <Component
      ref={ref}
      {...(isNativeButton ? { disabled: isDisabled } : {})}
      {...(!isNativeButton && isDisabled ? { 'aria-disabled': true, tabIndex: -1 } : {})}
      className={cn(
        sizeMap[size],
        variantMap[variant],
        fullWidth && 'w-full',
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

DarkButton.displayName = 'DarkButton'
export { DarkButton }
export default DarkButton
