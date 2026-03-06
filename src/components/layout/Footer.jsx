import { Link } from 'react-router-dom'
import Container from './Container'
import { SITE_META } from '@/config/siteConfig'
import { PRIMARY_NAV } from '@/config/siteConfig'
import { Mail, Phone, MapPin } from 'lucide-react'

/**
 * Footer — Dark AI SaaS theme
 * Deep dark background, neon teal accents, neon-glow hover on links
 */
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      style={{
        background: '#050B12',
        borderTop: '1px solid rgba(0, 245, 212, 0.1)',
      }}
    >
      {/* Main Footer Content */}
      <div className="py-10 md:py-14">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* ── Column 1: Conference Info ── */}
            <div>
              <h3 className="font-semibold text-base mb-3" style={{ color: '#FFFFFF' }}>
                {SITE_META.conferenceShortName}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B7280' }}>
                {SITE_META.conferenceFullName}
              </p>
              <div className="space-y-2 text-sm" style={{ color: '#6B7280' }}>
                {SITE_META.organizedBy && (
                  <p>
                    <span className="font-medium" style={{ color: '#9CA3AF' }}>Organized by:</span>{' '}
                    {SITE_META.organizedBy}
                  </p>
                )}
                {SITE_META.supportedBy && (
                  <p>
                    <span className="font-medium" style={{ color: '#9CA3AF' }}>Supported by:</span>{' '}
                    {SITE_META.supportedBy}
                  </p>
                )}
              </div>
            </div>

            {/* ── Column 2: Quick Links ── */}
            <div>
              <h3 className="font-semibold text-base mb-3" style={{ color: '#FFFFFF' }}>
                Quick Links
              </h3>
              <ul className="space-y-2">
                {PRIMARY_NAV.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm transition-all duration-200"
                      style={{ color: '#6B7280' }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = '#00F5D4'
                        e.currentTarget.style.textShadow = '0 0 8px rgba(0,245,212,0.4)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = '#6B7280'
                        e.currentTarget.style.textShadow = 'none'
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Column 3: Contact Info ── */}
            <div>
              <h3 className="font-semibold text-base mb-3" style={{ color: '#FFFFFF' }}>
                Contact
              </h3>
              <ul className="space-y-3 text-sm" style={{ color: '#6B7280' }}>
                {SITE_META.venue && (
                  <li className="flex items-start gap-2">
                    <MapPin size={15} className="shrink-0 mt-0.5" style={{ color: '#00F5D4' }} aria-hidden="true" />
                    <span>{SITE_META.venue}</span>
                  </li>
                )}
                {SITE_META.email && (
                  <li className="flex items-center gap-2">
                    <Mail size={15} className="shrink-0" style={{ color: '#00F5D4' }} aria-hidden="true" />
                    <a
                      href={`mailto:${SITE_META.email}`}
                      className="transition-all duration-200 hover:underline"
                      style={{ color: '#6B7280' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#00F5D4')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
                    >
                      {SITE_META.email}
                    </a>
                  </li>
                )}
                {SITE_META.phone && (
                  <li className="flex items-center gap-2">
                    <Phone size={15} className="shrink-0" style={{ color: '#00F5D4' }} aria-hidden="true" />
                    <a
                      href={`tel:${SITE_META.phone}`}
                      className="transition-all duration-200 hover:underline"
                      style={{ color: '#6B7280' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#00F5D4')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
                    >
                      {SITE_META.phone}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* ── Copyright Bar ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }} className="py-4">
        <Container>
          <p className="text-center text-xs" style={{ color: '#4a5465ff' }}>
            &copy; {currentYear} {SITE_META.conferenceShortName} — {SITE_META.organizedBy}.
            All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
