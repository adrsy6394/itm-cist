import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, fadeLeft, fadeRight, viewport } from '@/lib/animations'
import PageBanner from '@/components/layout/PageBanner'
import Container from '@/components/layout/Container'
import { Button } from '@/components/ui'
import { SITE_META } from '@/config/siteConfig'

const BREADCRUMBS = [{ label: 'Contact Us' }]

const CONTACT_INFO = [
  {
    id: 'email',
    icon: <Mail size={18} className="text-teal" />,
    label: 'Email',
    value: SITE_META.email,
    href: `mailto:${SITE_META.email}`,
  },
  {
    id: 'phone',
    icon: <Phone size={18} className="text-teal" />,
    label: 'Phone',
    value: SITE_META.phone || '+91 — to be announced',
    href: SITE_META.phone ? `tel:${SITE_META.phone}` : null,
  },
  {
    id: 'venue',
    icon: <MapPin size={18} className="text-teal" />,
    label: 'Venue',
    value: SITE_META.venue,
    href: null,
  },
  {
    id: 'date',
    icon: <Clock size={18} className="text-teal" />,
    label: 'Conference Date',
    value: SITE_META.date || 'Date to be announced',
    href: null,
  },
]

/**
 * Contact — Design PRD §6.7
 *
 * Layout (mobile-first):
 *   Mobile:  stacked — contact persons on top, sidebar below
 *   Desktop: 3-col contact persons + 2-col sidebar (contact info + map)
 */
function Contact() {
  return (
    <main>
      <PageBanner
        title="Contact Us"
        description="Reach out to the CIST 2026 organizing committee for any queries."
        breadcrumbs={BREADCRUMBS}
      />

      <section className="section-padding">
        <Container>

          {/* ── Desktop: 3+2 col grid / Mobile: stacked ── */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* ═════════════════════ LEFT: Contact Persons (3/5) ═════════════════════ */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport} className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-7 bg-teal rounded-full" />
                <h2 className="text-xl font-semibold text-navy">Contact Persons</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: 'Mr. Abhishek Yadav', phone: '9532043310' },
                  { name: 'Mr. Abhraneel Sengupta', phone: '8299637860' },
                ].map((person, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-navy font-semibold text-lg mb-2">{person.name}</h3>
                    <div className="flex items-center gap-2 text-teal">
                      <Phone size={16} />
                      <a href={`tel:${person.phone}`} className="text-slate-600 hover:text-pro-blue font-medium transition-colors">
                        +91 {person.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ═════════════════════ RIGHT: Sidebar (2/5) ═════════════════════ */}
            <motion.aside variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewport} className="lg:col-span-2 space-y-6">

              {/* Contact info card */}
              <div className="bg-white border border-slate-200 rounded-xl shadow-card p-6">
                <h2 className="text-base font-semibold text-navy mb-5">
                  Contact Information
                </h2>
                <ul className="space-y-4">
                  {CONTACT_INFO.map((item) => (
                    <li key={item.id} className="flex items-start gap-3">
                      <span className="shrink-0 mt-0.5 w-8 h-8 rounded-md bg-teal/10 flex items-center justify-center">
                        {item.icon}
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm text-navy hover:text-pro-blue transition-colors mt-0.5 break-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-navy mt-0.5 leading-snug">{item.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map embed */}
              <div className="w-full h-64 bg-slate-100 rounded-xl border border-slate-200 overflow-hidden group relative">
                <iframe
                  title="ITM GIDA Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.4862211933085!2d83.33153577536967!3d26.744855476747206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991448b26099df3%3A0x1b72e50588a4c87c!2sInstitute%20of%20Technology%20%26%20Management!5e0!3m2!1sen!2sin!4v1711186000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-2 right-2">
                  <a 
                    href="https://shorturl.at/jV3hJ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/90 backdrop-blur-sm text-[10px] font-medium text-navy px-2 py-1.5 rounded shadow-sm hover:bg-white transition-colors flex items-center gap-1.5 border border-slate-200"
                  >
                    <MapPin size={12} className="text-teal" />
                    Open in Google Maps
                  </a>
                </div>
              </div>

            </motion.aside>
          </div>

        </Container>
      </section>
    </main>
  )
}

export default Contact
