import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Menu, X, Zap } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

/**
 * DarkNavbar — Dark AI SaaS Design System
 *
 * Frosted glass dark navbar with neon teal active/hover states.
 * Pass `links` array: [{ label, to }]
 *
 * @example
 * <DarkNavbar
 *   brand="CIST 2026"
 *   links={[
 *     { label: 'Home', to: '/' },
 *     { label: 'Call for Papers', to: '/call-for-papers' },
 *   ]}
 * />
 */

function DarkNavbar({ brand = 'AI SaaS', links = [], actions = null, className }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className={cn('dark-navbar', className)} aria-label="Primary navigation">
      <div className="site-container">
        <div className="flex items-center justify-between h-16">

          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-lg tracking-tight"
            style={{ color: 'var(--ds-text-primary)' }}
          >
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'var(--ds-gradient-btn)' }}
            >
              <Zap size={16} style={{ color: '#0B1623' }} />
            </span>
            <span>
              {brand.split(' ').map((word, i) =>
                i === 0
                  ? <span key={i}>{word}&nbsp;</span>
                  : <span key={i} className="neon-text">{word}</span>
              )}
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-6 list-none">
            {links.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={cn(
                    'dark-nav-link',
                    pathname === to && 'active',
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions slot */}
          <div className="hidden md:flex items-center gap-3">
            {actions}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg transition-colors duration-200"
            style={{ color: 'var(--ds-text-body)' }}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            className="md:hidden pb-4 border-t"
            style={{ borderColor: 'var(--ds-border-sec)' }}
          >
            <ul className="flex flex-col gap-1 pt-3 list-none">
              {links.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'dark-nav-link block px-3 py-2.5 rounded-lg transition-colors duration-200',
                      pathname === to
                        ? 'active'
                        : 'hover:bg-white/5',
                    )}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              {actions && <li className="pt-2">{actions}</li>}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export { DarkNavbar }
export default DarkNavbar
