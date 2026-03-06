import { cn } from '@/lib/utils'

/**
 * Container — responsive content wrapper
 *
 * Design PRD §4.2:
 *   Max-width: 1280px | px-4 mobile → px-6 tablet → px-8 desktop
 *
 * Variants:
 *   default — max-w-screen-xl (1280px)  — standard pages
 *   narrow  — max-w-3xl (768px)         — articles, login forms
 *   wide    — max-w-screen-2xl (1536px) — admin dashboard
 *
 * @example
 * <Container>...</Container>
 * <Container variant="narrow">...</Container>
 */
function Container({ variant = 'default', className, children, ...props }) {
  return (
    <div
      className={cn(
        'w-full mx-auto px-4 md:px-6 lg:px-8',
        variant === 'default' && 'max-w-screen-xl',
        variant === 'narrow'  && 'max-w-3xl',
        variant === 'wide'    && 'max-w-screen-2xl',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Container }
export default Container
