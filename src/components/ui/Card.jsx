import { cn } from '@/lib/utils'

/**
 * Card — Dark AI SaaS theme
 * Deep dark card bg, neon teal border glow on hover, smooth transitions.
 */
function Card({ flat = false, className, children, ...props }) {
  return (
    <div
      className={cn('rounded-lg transition-all duration-200', className)}
      style={{
        background: '#0F172A',
        border: flat ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,245,212,0.1)',
        boxShadow: flat ? 'none' : '0 4px 20px rgba(0,0,0,0.4)',
      }}
      onMouseEnter={e => {
        if (!flat) {
          e.currentTarget.style.borderColor = 'rgba(0,245,212,0.35)'
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.5), 0 0 18px rgba(0,245,212,0.12)'
          e.currentTarget.style.transform = 'translateY(-2px)'
        }
      }}
      onMouseLeave={e => {
        if (!flat) {
          e.currentTarget.style.borderColor = 'rgba(0,245,212,0.1)'
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)'
          e.currentTarget.style.transform = 'translateY(0)'
        }
      }}
      {...props}
    >
      {children}
    </div>
  )
}

function CardHeader({ className, children, ...props }) {
  return (
    <div
      className={cn('px-5 pt-5 pb-3', className)}
      style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      {...props}
    >
      {children}
    </div>
  )
}

function CardBody({ className, children, ...props }) {
  return (
    <div className={cn('px-5 py-4', className)} {...props}>
      {children}
    </div>
  )
}

function CardFooter({ className, children, ...props }) {
  return (
    <div
      className={cn('px-5 pb-5 pt-3 flex items-center gap-3', className)}
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      {...props}
    >
      {children}
    </div>
  )
}

export { Card, CardHeader, CardBody, CardFooter }
export default Card
