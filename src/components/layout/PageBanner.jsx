import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import Container from '@/components/layout/Container'
import { cn } from '@/lib/utils'

/**
 * PageBanner — Title + Breadcrumb below header
 * Dark AI SaaS theme — neon teal breadcrumb + deep dark background
 */
function PageBanner({ title, description, breadcrumbs = [], className }) {
  return (
    <section
      className={cn('relative overflow-hidden', className)}
      style={{
        background: 'linear-gradient(135deg, #050B12 0%, #0B1623 60%, #0F172A 100%)',
        borderBottom: '1px solid rgba(0, 245, 212, 0.12)',
      }}
      aria-label="Page header"
    >
      {/* Subtle neon ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,245,212,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="py-8 md:py-12">

          {/* Breadcrumb */}
          {breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center flex-wrap gap-1 text-xs" style={{ color: '#6B7280' }}>
                {/* Home */}
                <li>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-1 transition-colors duration-200"
                    style={{ color: '#6B7280' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#00F5D4')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
                    aria-label="Home"
                  >
                    <Home size={12} aria-hidden="true" />
                    <span className="sr-only">Home</span>
                  </Link>
                </li>

                {breadcrumbs.map((crumb, idx) => {
                  const isLast = idx === breadcrumbs.length - 1
                  return (
                    <li key={crumb.label} className="flex items-center gap-1">
                      <ChevronRight size={12} aria-hidden="true" style={{ color: '#374151' }} />
                      {isLast || !crumb.path ? (
                        <span
                          className="font-medium"
                          style={{ color: '#00F5D4' }}
                          aria-current={isLast ? 'page' : undefined}
                        >
                          {crumb.label}
                        </span>
                      ) : (
                        <Link
                          to={crumb.path}
                          className="transition-colors duration-200"
                          style={{ color: '#9CA3AF' }}
                          onMouseEnter={e => (e.currentTarget.style.color = '#00F5D4')}
                          onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}
                        >
                          {crumb.label}
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ol>
            </nav>
          )}

          {/* Teal accent line */}
          <div
            className="h-0.5 w-10 rounded-full mb-4"
            style={{ background: 'linear-gradient(90deg, #00F5D4, #00E6FF)' }}
            aria-hidden="true"
          />

          {/* Title */}
          <h1
            className="text-h1-mobile md:text-h1-desktop font-bold tracking-tight leading-tight"
            style={{ color: '#FFFFFF' }}
          >
            {title}
          </h1>

          {/* Optional description */}
          {description && (
            <p
              className="mt-3 text-sm md:text-base max-w-2xl leading-relaxed"
              style={{ color: '#9CA3AF' }}
            >
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}

export { PageBanner }
export default PageBanner
