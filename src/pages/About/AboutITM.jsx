import PageBanner from "@/components/layout/PageBanner";
import Container from "@/components/layout/Container";
import { SectionHeader } from "@/components/common";
import { Landmark, GraduationCap, Globe, Award } from "lucide-react";
import { motion } from 'framer-motion';
import { fadeUp, fadeRight, stagger, scaleIn, viewport } from '@/lib/animations';

const BREADCRUMBS = [
  { label: "About", path: "/about/conference" },
  { label: "About ITM" },
];

/**
 * AboutITM — ITM University overview
 */
function AboutITM() {
  return (
    <main>
      <PageBanner
        title="About ITM College"
        description="Host Institution — A center of academic brilliance in Central India."
        breadcrumbs={BREADCRUMBS}
      />

      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Introduction */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="shrink-0">
                  <div className="w-24 h-24 bg-white border-2 border-slate-100 rounded-2xl shadow-sm p-3 flex items-center justify-center">
                    <img
                      src="/image copy 2.png"
                      alt="ITM University Logo"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600">
                  <SectionHeader
                    title="About The Institute"
                    subtitle="Establishing New Benchmarks in Higher Education."
                    align="left"
                    className="mb-4"
                  />
                  <p>
                    The Institute of Technology & Management, GIDA, Gorakhpur,
                    established in year 2001, approved by AICTE, New Delhi &
                    Pharmacy Council of India, New Delhi affiliated to Dr. A. P.
                    J. Abdul Kalam Technical University, Lucknow & Board of
                    Technical Education, U.P., offers B. Tech (NBA Accredited
                    Department of Computer Science & Engineering), MBA, D.
                    Pharma, B. Pharma, M. Pharma, Diploma in Engineering, BBA,
                    BCA, BA LLB, B. Voc. BFSI (Banking Finance Services &
                    Insurance) courses
                  </p>
                </div>
              </motion.div>

              {/* Highlights */}
              <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
                {[
                  {
                    icon: <Globe className="text-teal" />,
                    title: "Global Recognition",
                    desc: "Collaborations with top international universities for student and faculty exchange programs.",
                  },
                  {
                    icon: <Award className="text-teal" />,
                    title: "Top Rankings",
                    desc: "Consistently ranked among top universities by NIRF and other major ranking agencies.",
                  },
                  {
                    icon: <GraduationCap className="text-teal" />,
                    title: "Research Driven",
                    desc: "Home to multiple centers of excellence and high-impact research laboratories.",
                  },
                  {
                    icon: <Landmark className="text-teal" />,
                    title: "Legacy",
                    desc: "Over 25 years of educational excellence, producing thousands of successful professionals.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:border-teal/30 hover:bg-slate-50 transition-all duration-300"
                  >
                    <div className="shrink-0 p-2 bg-teal/10 rounded-lg h-fit">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-navy mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Campus Life */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="space-y-4">
                <h3 className="text-xl font-bold text-navy">
                  Campus & Infrastructure
                </h3>
                <p className="text-slate-600">
                  The campus is architecturally designed to provide an inspiring
                  atmosphere. It includes smart classrooms, high-speed Wi-Fi,
                  modern laboratories, a central library with over 100,000
                  volumes, and extensive sports facilities.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-64">
                  <img
                    src="/itm-hero.jpg"
                    alt="Campus Building"
                    className="rounded-lg object-cover bg-white p-4 w-full h-full border border-slate-100"
                  />
                  <img
                    src="/image.png"
                    alt="Library"
                    className="rounded-lg object-cover bg-white p-4 w-full h-full border border-slate-100"
                  />
                  <img
                    src="/image copy.png"
                    alt="Lab"
                    className="rounded-lg object-cover bg-white p-4 w-full h-full border border-slate-100 col-span-2 md:col-span-1"
                  />
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.aside variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewport} className="space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-navy mb-4">Quick Contact</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <span className="block text-slate-400 font-medium uppercase text-[10px]">
                      Location
                    </span>
                    <span className="text-slate-700">
                      AL-1,Sector-7, GIDA, Gorakhpur (U.P.) - 273029
                    </span>
                  </li>
                  <li>
                    <span className="block text-slate-400 font-medium uppercase text-[10px]">
                      Website
                    </span>
                    <a
                      href="https://itmgkp.edu.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pro-blue hover:underline"
                    >
                      www.itmgkp.edu.in
                    </a>
                  </li>
                  <li>
                    <span className="block text-slate-400 font-medium uppercase text-[10px]">
                      Distance
                    </span>
                    <span className="text-slate-700">
                      13.2km from Gorakhpur Railway Station
                    </span>
                  </li>
                </ul>
              </div>

              {/* <div className="bg-pro-blue text-white rounded-xl p-6 text-center">
                <GraduationCap size={40} className="mx-auto mb-3 opacity-50" />
                <h3 className="font-bold mb-2">Visit ITM</h3>
                <p className="text-sm text-pro-blue-foreground/80 mb-4">
                  Are you visiting for the conference? Check our transit guide.
                </p>
                <button className="bg-white text-pro-blue px-4 py-2 rounded-lg text-sm font-bold w-full hover:bg-slate-50 transition-colors">
                  Transit Guide
                </button>
              </div> */}
            </motion.aside>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default AboutITM;
