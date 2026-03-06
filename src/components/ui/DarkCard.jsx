import { cn } from '@/lib/utils'

/**
 * DarkCard — Dark AI SaaS Design System
 *
 * Composed of DarkCard / DarkCardHeader / DarkCardBody / DarkCardFooter.
 * Neon teal glow on hover, 200ms transition, dark card background.
 *
 * @example
 * <DarkCard>
 *   <DarkCardHeader>
 *     <h3 className="text-white">Feature Title</h3>
 *   </DarkCardHeader>
 *   <DarkCardBody>Content here</DarkCardBody>
 *   <DarkCardFooter>
 *     <DarkButton>CTA</DarkButton>
 *   </DarkCardFooter>
 * </DarkCard>
 */

function DarkCard({ flat = false, className, children, ...props }) {
  return (
    <div
      className={cn(flat ? 'dark-card-flat' : 'dark-card', className)}
      {...props}
    >
      {children}
    </div>
  )
}

function DarkCardHeader({ className, children, ...props }) {
  return (
    <div className={cn('dark-card-header', className)} {...props}>
      {children}
    </div>
  )
}

function DarkCardBody({ className, children, ...props }) {
  return (
    <div className={cn('dark-card-body', className)} {...props}>
      {children}
    </div>
  )
}

function DarkCardFooter({ className, children, ...props }) {
  return (
    <div className={cn('dark-card-footer', className)} {...props}>
      {children}
    </div>
  )
}

export { DarkCard, DarkCardHeader, DarkCardBody, DarkCardFooter }
export default DarkCard
