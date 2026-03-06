import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react'
import Container from './Container'
import { PRIMARY_NAV, NAV_LINKS, SITE_META } from '@/config/siteConfig'
import { cn } from '@/lib/utils'

/**
 * Header — Sticky site header
 * Design PRD §5.1 (Header), §5.2 (Navigation Menu)
 *
 * Mobile:  Hamburger → full-width slide-in drawer
 * Desktop: Horizontal nav links + Register Now CTA
 */
function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  // Close drawer when route changes
  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location.pathname])

  const toggleDropdown = (label) =>
    setOpenDropdown((prev) => (prev === label ? null : label))

  return (
    <>
      {/* ── Sticky Header Bar ─────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 bg-navy shadow-header"
        role="banner"
      >
        <Container>
          <div className="flex items-center justify-between h-16">

            {/* ── Logo + Conference Name ── */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group"
              aria-label={`${SITE_META.conferenceShortName} - Go to homepage`}
            >
              {/* Official ITM Logo */}
              <div
                className="w-20 h-20 flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                <img 
                  src="/image copy 2.png" 
                  alt="ITM University Logo" 
                  className="w-12 h-12 object-contain rounded-full"
                />
              </div>
              {/* <div>
                <span className="block text-white font-bold text-sm leading-tight">
                  {SITE_META.conferenceShortName}
                </span>
                <span className="block text-slate-400 text-xs leading-tight hidden sm:block">
                  {SITE_META.organizedBy}
                </span>
              </div> */}
            </Link>

            {/* ── Desktop/Tablet Navigation ── */}
            <nav
              className="hidden md:flex items-center gap-0.5 lg:gap-1"
              aria-label="Main navigation"
            >
              {(() => {
                // Split links into featured and 'more' to prevent overflow
                const featuredPaths = ['/', '/about', '/committee', '/feedback', '/registration', '/call-for-paper', '/schedule', '/contact']
                const featuredLinks = NAV_LINKS.filter(l => featuredPaths.includes(l.path))
                const moreLinks = NAV_LINKS.filter(l => !featuredPaths.includes(l.path))

                return (
                  <>
                    {featuredLinks.map((item) => (
                      <div key={item.path} className="relative group">
                        {item.children ? (
                          <>
                            <button
                              type="button"
                              className="flex items-center gap-1 px-2 lg:px-3 py-2 text-[13px] lg:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-150"
                            >
                              {item.label}
                              <ChevronDown size={12} className="transition-transform duration-200 group-hover:rotate-180" />
                            </button>
                            <div className="absolute top-full left-0 pt-2 w-56 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                              <div className="rounded-lg shadow-xl py-2 overflow-hidden" style={{ background: '#0F172A', border: '1px solid rgba(0,245,212,0.15)' }}>
                                {item.children.map((child) => (
                                  <NavLink
                                    key={child.path}
                                    to={child.path}
                                    className={({ isActive }) =>
                                      cn(
                                        'block px-4 py-2 text-sm transition-all duration-200',
                                        isActive ? 'font-medium' : 'hover:bg-white/5'
                                      )
                                    }
                                    style={({ isActive }) => ({ color: isActive ? '#00F5D4' : '#9CA3AF' })}
                                  >
                                    {child.label}
                                  </NavLink>
                                ))}
                              </div>
                            </div>
                          </>
                        ) : (
                          <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                              cn(
                                'px-2 lg:px-3 py-2 text-[13px] lg:text-sm font-medium rounded-md transition-all duration-200 block whitespace-nowrap',
                                isActive ? 'text-neonTeal bg-neonTeal/10 font-semibold' : 'text-slate-300 hover:text-neonTeal hover:bg-white/5'
                              )
                            }
                          >
                            {item.label}
                          </NavLink>
                        )}
                      </div>
                    ))}

                    {/* 'More' Dropdown for standalone pages */}
                    {moreLinks.length > 0 && (
                      <div className="relative group">
                        <button
                          type="button"
                          className="flex items-center gap-1 px-2 lg:px-3 py-2 text-[13px] lg:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-150"
                        >
                          More
                          <ChevronDown size={12} className="transition-transform duration-200 group-hover:rotate-180" />
                        </button>
                        <div className="absolute top-full right-0 pt-2 w-64 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                          <div className="rounded-lg shadow-xl py-2 overflow-hidden max-h-[70vh] overflow-y-auto" style={{ background: '#0F172A', border: '1px solid rgba(0,245,212,0.15)' }}>
                            {moreLinks.map((item) => (
                              <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                  cn(
                                    'block px-4 py-2.5 text-sm transition-all duration-200',
                                    isActive ? 'font-medium' : 'hover:bg-white/5'
                                  )
                                }
                                style={({ isActive }) => ({ color: isActive ? '#00F5D4' : '#9CA3AF' })}
                              >
                                {item.label}
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )
              })()}
            </nav>

            {/* ── Desktop CTA + Mobile Hamburger ── */}
            <div className="flex items-center gap-3">
              {/* Register Now CTA (tablet/desktop) */}
              <Link
                to="/registration"
                className="hidden xl:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg
                           transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #00F5D4 0%, #00C2AA 100%)',
                  color: '#0B1623',
                  boxShadow: '0 0 12px rgba(73, 91, 88, 0.5)',
                }}
              >
                Register Now
              </Link>

              {/* Hamburger (mobile) */}
              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                className="md:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* ── Mobile Drawer Overlay ─────────────────────────────────────────── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ── Mobile Drawer ──────────────────────────────────────────────────── */}
      <div
        id="mobile-menu"
        className={cn(
          'fixed top-16 left-0 right-0 bottom-0 z-40 bg-navy border-t border-slate-700',
          'md:hidden overflow-y-auto transition-transform duration-200',
          mobileOpen ? 'translate-y-0' : '-translate-y-full pointer-events-none'
        )}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal="true"
      >
        <nav className="py-4">
          {NAV_LINKS.map((item) => (
            <div key={item.path}>
              {item.children ? (
                <>
                  {/* Dropdown group toggle */}
                  <button
                    type="button"
                    onClick={() => toggleDropdown(item.label)}
                    className="w-full flex items-center justify-between px-6 py-3 text-sm font-medium
                               text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-left"
                    aria-expanded={openDropdown === item.label}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={15}
                      className={cn(
                        'transition-transform duration-150',
                        openDropdown === item.label && 'rotate-180'
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="bg-slate-800/50">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          onClick={() => setMobileOpen(false)}
                          className={({ isActive }) =>
                            cn(
                              'block pl-10 pr-6 py-2.5 text-sm transition-colors',
                              isActive
                                ? 'text-[#14B8A8] font-medium'
                                : 'text-slate-400 hover:text-white'
                            )
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                  <NavLink
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'block px-6 py-3 text-sm font-medium transition-all duration-200',
                        isActive
                          ? 'font-semibold'
                          : 'text-slate-300 hover:bg-white/5'
                      )
                    }
                    style={({ isActive }) => ({ color: isActive ? '#00F5D4' : undefined })}
                  >
                    {item.label}
                  </NavLink>
              )}
            </div>
          ))}

          {/* Register CTA inside drawer on mobile */}
          <div className="px-6 pt-3 pb-5 border-t mt-2" style={{ borderColor: 'rgba(0,245,212,0.1)' }}>
            <Link
              to="/registration"
              onClick={() => setMobileOpen(false)}
              className="dark-btn-primary dark-btn-md w-full justify-center"
            >
              Register Now
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header
