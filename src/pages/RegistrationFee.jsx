import PageBanner from '@/components/layout/PageBanner'
import Container from '@/components/layout/Container'
import { SectionHeader } from '@/components/common'
import { REGISTRATION_FEE } from '@/data/importantDates'
import { CreditCard, Info, CheckCircle2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp, fadeRight, viewport } from '@/lib/animations'

const BREADCRUMBS = [
  { label: 'Registration', path: '/registration' },
  { label: 'Fee Structure' }
]

/**
 * RegistrationFee — PRD §5.3 / Design PRD §5.5
 * Full breakdown of cost per category
 */
function RegistrationFee() {
  return (
    <main>
      <PageBanner
        title="Registration Fee Structure"
        description="Comprehensive fee breakdown for all delegate categories."
        breadcrumbs={BREADCRUMBS}
      />

      <section className="section-padding">
        <Container>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Table Area */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="lg:col-span-2">
              <SectionHeader 
                title="Detailed Fee Table" 
                subtitle="All fees are inclusive of GST and university charges."
                align="left"
                className="mb-8"
              />

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xl mb-6">
                <table className="w-full text-sm border-collapse text-left">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="p-4 font-bold border-b border-white/10 first:rounded-tl-2xl">Category</th>
                      <th className="p-4 font-bold border-b border-white/10 text-center">Early Bird</th>
                      <th className="p-4 font-bold border-b border-white/10 text-center">Regular</th>
                      <th className="p-4 font-bold border-b border-white/10 text-center last:rounded-tr-2xl">On Spot</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {REGISTRATION_FEE.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-navy">{row.category}</td>
                        <td className="p-4 text-center font-bold text-teal">{row.earlyBird}</td>
                        <td className="p-4 text-center font-bold text-pro-blue">{row.regular}</td>
                        <td className="p-4 text-center text-slate-400">{row.onSpot}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
                 <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-teal" />
                    <h4 className="font-bold text-navy">What's Included?</h4>
                 </div>
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                    {[
                      "Conference Kit & Proceedings",
                      "Access to all Plenary Sessions",
                      "Morning & Evening High Tea",
                      "Networking Lunches",
                      "Digital Certificate of Participation",
                      "Campus Tour & Lab Visits"
                    ].map((item, i) => (
                      <li key={i} className="text-xs text-slate-500 flex items-center gap-2">
                         <span className="w-1 h-1 bg-slate-300 rounded-full" />
                         {item}
                      </li>
                    ))}
                 </ul>
              </div>
            </motion.div>

            {/* Sidebar / CTA */}
            <motion.aside variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewport} className="space-y-6">
              <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm text-center">
                 <div className="w-16 h-16 bg-pro-blue/10 text-pro-blue rounded-full flex items-center justify-center mx-auto mb-6">
                    <CreditCard size={32} />
                 </div>
                 <h3 className="text-xl font-bold text-navy mb-2">Ready to Pay?</h3>
                 <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                   After selecting your category, proceed to the registration hub to fill your details and submit.
                 </p>
                 <Button as={Link} to="/registration" variant="primary" fullWidth size="lg">
                    Go to Registration
                 </Button>
              </div>

              <div className="p-6 border border-amber-100 bg-amber-50 rounded-2xl flex gap-3">
                 <AlertCircle size={24} className="text-amber-500 shrink-0 mt-1" />
                 <div>
                    <h4 className="font-bold text-navy text-sm uppercase mb-1">Refund Policy</h4>
                    <p className="text-[10px] text-amber-800 leading-relaxed italic">
                      Registration fee is non-refundable once paid. However, substitutions can be made under special circumstances with prior approval.
                    </p>
                 </div>
              </div>
            </motion.aside>
          </div>

        </Container>
      </section>
    </main>
  )
}

export default RegistrationFee
