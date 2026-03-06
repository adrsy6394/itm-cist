import PageBanner from '@/components/layout/PageBanner'
import Container from '@/components/layout/Container'
import { SectionHeader } from '@/components/common'
import { Button } from '@/components/ui'
import { ExternalLink, CheckCircle, AlertTriangle, FileUp, ShieldCheck } from 'lucide-react'
import { LINKS } from '@/config/siteConfig'
import { motion } from 'framer-motion'
import { fadeUp, stagger, scaleIn, viewport } from '@/lib/animations'

const BREADCRUMBS = [{ label: 'Online Paper Submission' }]

/**
 * PaperSubmission — PRD §4.1
 * Redirects authors to submission portal (Google Form or external link)
 */
function PaperSubmission() {
  const submissionUrl = LINKS.paperSubmissionUrl || '#'

  return (
    <main>
      <PageBanner
        title="Online Paper Submission"
        description="Submit your research paper for consideration at CIST 2026."
        breadcrumbs={BREADCRUMBS}
      />

      <section className="section-padding">
        <Container variant="narrow">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="text-center mb-12">
            <SectionHeader 
              title="Ready to Submit?" 
              subtitle="Secure and streamlined submission process for your research."
            />
          </motion.div>

          {/* Process Steps */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
             {[
               { icon: <FileUp />, title: "Prepare PDF", desc: "Follow the IEEE template guidelines." },
               { icon: <ShieldCheck />, title: "Plagiarism Check", desc: "Ensure similarity index is below 15%." },
               { icon: <ExternalLink />, title: "Submit Online", desc: "Use our portal to upload your work." }
             ].map((step, i) => (
               <motion.div key={i} variants={scaleIn} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 text-teal">
                    {step.icon}
                  </div>
                  <h4 className="font-bold text-navy mb-1">{step.title}</h4>
                  <p className="text-xs text-slate-500">{step.desc}</p>
               </motion.div>
             ))}
          </motion.div>

          {/* Submission CTA card */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="bg-white border-2 border-slate-100 rounded-3xl shadow-xl overflow-hidden">
             <div className="bg-navy p-6 text-center text-white">
                <h3 className="text-xl font-bold">Official Submission Portal</h3>
                <p className="text-slate-400 text-sm mt-1">CIST 2026 — Editorial Management System</p>
             </div>
             
             <div className="p-8 md:p-12 text-center space-y-8">
                <div className="space-y-4">
                  <p className="text-slate-600 leading-relaxed italic">
                    "By clicking the button below, you will be redirected to our Google Form based submission system. Please ensure you are logged into your Google account to upload the PDF file."
                  </p>
                  
                  <div className="flex flex-col items-center gap-2">
                     <Button 
                       as="a" 
                       href={submissionUrl} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       variant="primary" 
                       size="lg"
                       className="px-10 h-14 text-base"
                     >
                       Click Here to Submit
                       <ExternalLink size={20} />
                     </Button>
                     {submissionUrl === '#' && (
                       <p className="text-[10px] text-red-500 font-bold uppercase tracking-tighter">
                         Submission link not yet configured — coming soon
                       </p>
                     )}
                  </div>
                </div>

                {/* Important reminders */}
                <div className="pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                   <div className="flex gap-3">
                      <CheckCircle size={18} className="text-green-500 shrink-0" />
                      <div>
                        <h5 className="text-sm font-bold text-navy">Blind Review</h5>
                        <p className="text-xs text-slate-500">Omit author names in the initial PDF submission.</p>
                      </div>
                   </div>
                   <div className="flex gap-3">
                      <CheckCircle size={18} className="text-green-500 shrink-0" />
                      <div>
                        <h5 className="text-sm font-bold text-navy">Single Document</h5>
                        <p className="text-xs text-slate-500">Combine all content into a single PDF file.</p>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl flex gap-3">
             <AlertTriangle size={24} className="text-amber-500 shrink-0" />
             <p className="text-xs text-amber-800 leading-relaxed">
               <strong>Important:</strong> Do not submit the same paper multiple times. If you need to make corrections, please contact the technical committee with your submission ID.
             </p>
          </motion.div>
        </Container>
      </section>
    </main>
  )
}

export default PaperSubmission
