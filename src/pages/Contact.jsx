import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react'
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

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }

/**
 * Contact — Design PRD §6.7
 *
 * Layout (mobile-first):
 *   Mobile:  stacked — form on top, contact info below
 *   Desktop: 3-col form + 2-col sidebar (contact info + map placeholder)
 */
function Contact() {
  const [form, setForm]       = useState(INITIAL_FORM)
  const [errors, setErrors]   = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim())    errs.name    = 'Name is required'
    if (!form.email.trim())   errs.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email'
    if (!form.subject.trim()) errs.subject = 'Subject is required'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((errs) => ({ ...errs, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    // Construct mailto: string (no backend)
    const subject = encodeURIComponent(`[CIST 2025] ${form.subject}`)
    const body    = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:${SITE_META.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <main>
      <PageBanner
        title="Contact Us"
        description="Reach out to the CIST 2025 organizing committee for any queries."
        breadcrumbs={BREADCRUMBS}
      />

      <section className="section-padding">
        <Container>

          {/* ── Desktop: 3+2 col grid / Mobile: stacked ── */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* ═════════════════════ LEFT: Contact Form (3/5) ═════════════════════ */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport} className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-7 bg-teal rounded-full" />
                <h2 className="text-xl font-semibold text-navy">Send Us a Message</h2>
              </div>

              {submitted ? (
                /* Success state */
                <div className="flex flex-col items-center text-center py-14 gap-3">
                  <CheckCircle2 size={40} className="text-green-500" />
                  <h3 className="text-base font-semibold text-navy">Message sent!</h3>
                  <p className="text-sm text-slate-500 max-w-xs">
                    Your default email client has been opened with the message pre-filled.
                    We'll respond within 1–2 business days.
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => { setForm(INITIAL_FORM); setSubmitted(false) }}
                    className="mt-2"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Full Name <span className="text-red-500" aria-hidden>*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Dr. Anita Sharma"
                      className={[
                        'w-full rounded-md border px-3.5 py-2.5 text-sm text-slate-800',
                        'placeholder-slate-400 bg-white outline-none',
                        'transition-colors duration-150',
                        'focus:ring-2 focus:ring-pro-blue/30 focus:border-pro-blue',
                        errors.name
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-slate-300',
                      ].join(' ')}
                    />
                    {errors.name && (
                      <p className="flex items-center gap-1 mt-1 text-xs text-red-600">
                        <AlertCircle size={11} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Email Address <span className="text-red-500" aria-hidden>*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="anita@example.edu"
                      className={[
                        'w-full rounded-md border px-3.5 py-2.5 text-sm text-slate-800',
                        'placeholder-slate-400 bg-white outline-none',
                        'transition-colors duration-150',
                        'focus:ring-2 focus:ring-pro-blue/30 focus:border-pro-blue',
                        errors.email
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-slate-300',
                      ].join(' ')}
                    />
                    {errors.email && (
                      <p className="flex items-center gap-1 mt-1 text-xs text-red-600">
                        <AlertCircle size={11} /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Subject <span className="text-red-500" aria-hidden>*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Query about paper submission"
                      className={[
                        'w-full rounded-md border px-3.5 py-2.5 text-sm text-slate-800',
                        'placeholder-slate-400 bg-white outline-none',
                        'transition-colors duration-150',
                        'focus:ring-2 focus:ring-pro-blue/30 focus:border-pro-blue',
                        errors.subject
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-slate-300',
                      ].join(' ')}
                    />
                    {errors.subject && (
                      <p className="flex items-center gap-1 mt-1 text-xs text-red-600">
                        <AlertCircle size={11} /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Message <span className="text-red-500" aria-hidden>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Write your query here…"
                      className={[
                        'w-full rounded-md border px-3.5 py-2.5 text-sm text-slate-800',
                        'placeholder-slate-400 bg-white outline-none resize-y',
                        'transition-colors duration-150',
                        'focus:ring-2 focus:ring-pro-blue/30 focus:border-pro-blue',
                        errors.message
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-slate-300',
                      ].join(' ')}
                    />
                    {errors.message && (
                      <p className="flex items-center gap-1 mt-1 text-xs text-red-600">
                        <AlertCircle size={11} /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    className="mt-1"
                  >
                    Send Message
                    <Send size={15} />
                  </Button>

                  <p className="text-xs text-slate-400 text-center">
                    This will open your default email client to send the message.
                  </p>
                </form>
              )}
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

              {/* Map placeholder */}
              <div className="w-full h-48 bg-slate-100 rounded-xl border border-slate-200 overflow-hidden flex flex-col items-center justify-center gap-2 text-slate-400">
                <MapPin size={28} className="text-slate-300" />
                <p className="text-xs font-medium">Map — ITM College, GIDA, Gorakhpur</p>
                

                <p className="text-[10px]">Embed Google Map here</p>
              </div>

            </motion.aside>
          </div>

        </Container>
      </section>
    </main>
  )
}

export default Contact
