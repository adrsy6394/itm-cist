import PageBanner from "@/components/layout/PageBanner";
import Container from "@/components/layout/Container";
import { SectionHeader } from "@/components/common";
import { Card, CardBody } from "@/components/ui";
import { BookOpen, Target, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, stagger, scaleIn, viewport } from "@/lib/animations";

const BREADCRUMBS = [
  { label: "About", path: "/about/conference" },
  { label: "Conference" },
];

function AboutConference() {
  return (
    <main>
      <PageBanner
        title="About the Conference"
        description="Innovations in Science & Technology — CIST 2026."
        breadcrumbs={BREADCRUMBS}
      />

      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Introduction */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
                <SectionHeader
                  title="CIST 2026 Overview"
                  subtitle="A premier platform for researchers, academics, and industry professionals."
                  align="left"
                  className="mb-6"
                />
                <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
                  <p>
                    The{" "}
                    <strong>
                      Conference on Innovations in Science &amp; Technology (CIST
                      2026)
                    </strong>{" "}
                    will serve as a dynamic platform where pioneering ideas
                    converge to shape the future of scientific advancement. With
                    a focus on fostering collaboration and showcasing
                    breakthroughs, this event will bring together leading
                    researchers, scholars, and industry experts from all over
                    India. The overarching theme revolves around harnessing
                    Innovations to address pressing challenges across various
                    domains, from healthcare and biotechnology to artificial
                    intelligence and renewable energy.
                  </p>
                  <p>
                    Attendees can expect a rich tapestry of discussions,
                    presentations, and workshops exploring cutting-edge
                    research, emerging technologies, and their real-world
                    applications. Through interdisciplinary exchanges and
                    networking opportunities, participants gain insights into
                    the latest trends, forge valuable partnerships, and inspire
                    novel solutions to complex problems.
                  </p>
                </div>
              </motion.div>

              {/* Objectives Grid */}
              <div>
                <motion.h3
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  className="text-xl font-bold text-navy mb-6 flex items-center gap-2"
                >
                  <Target className="text-teal" size={24} />
                  Conference Objectives
                </motion.h3>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                >
                  {[
                    {
                      icon: <BookOpen size={20} />,
                      title: "Knowledge Exchange",
                      desc: "Provide a forum for the exchange of ideas and research findings among global experts.",
                    },
                    {
                      icon: <Users size={20} />,
                      title: "Networking",
                      desc: "Facilitate networking opportunities between academia and industry for future collaborations.",
                    },
                    {
                      icon: <Target size={20} />,
                      title: "Innovations Tracking",
                      desc: "Identify and discuss emerging technologies and their impact on society.",
                    },
                    {
                      icon: <Award size={20} />,
                      title: "Quality Research",
                      desc: "Promote and reward high-quality research through rigorous peer review and publication.",
                    },
                  ].map((obj, i) => (
                    <motion.div key={i} variants={scaleIn}>
                      <Card className="border-slate-100 shadow-sm">
                        <CardBody className="p-5">
                          <div className="w-10 h-10 rounded-lg bg-teal/10 text-teal flex items-center justify-center mb-4">
                            {obj.icon}
                          </div>
                          <h4 className="font-bold text-navy mb-2">
                            {obj.title}
                          </h4>
                          <p className="text-sm text-slate-500 leading-relaxed">
                            {obj.desc}
                          </p>
                        </CardBody>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Scope */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="bg-slate-50 border border-slate-200 rounded-xl p-8"
              >
                <h3 className="text-xl font-bold text-navy mb-4">
                  Conference Scope
                </h3>
                <p className="text-slate-600 mb-6">
                  CIST 2026 covers a broad range of topics including but not
                  limited to:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  {[
                    "Artificial Intelligence & Machine Learning",
                    "Sustainable Energy Systems",
                    "Advanced Materials Science",
                    "Data Science & Cybersecurity",
                    "Precision Agriculture Technologies",
                    "Biomedical Engineering & Informatics",
                    "Smart Cities & Infrastructure",
                    "Cloud Computing & Edge Tech",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-slate-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.aside
              className="space-y-8"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {/* Quick Info */}
              <div className="bg-navy text-white rounded-xl p-6 shadow-xl">
                <h3 className="text-lg font-bold mb-4 border-b border-white/10 pb-2 text-teal">
                  Conference At A Glance
                </h3>
                <ul className="space-y-4">
                  {[
                    { label: "Edition", val: "4th Annual" },
                    { label: "Format", val: "Hybrid (Physical & Virtual)" },
                    { label: "Location", val: "Institute of Technology, Management, GIDA, Gorakhpur" },
                    { label: "Publication", val: "Scopus Indexed Proceedings" },
                    { label: "Expected Attendees", val: "500+" },
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex flex-col border-b border-white/5 pb-2 last:border-0 last:pb-0"
                    >
                      <span className="text-xs text-slate-400 uppercase tracking-wider">
                        {item.label}
                      </span>
                      <span className="font-medium">{item.val}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Past Success */}
              <div className="border border-slate-200 rounded-xl p-6 space-y-4">
                <h3 className="font-bold text-navy">Legacy of Excellence</h3>
                <p className="text-sm text-slate-500">
                  Entering its 4th year, CIST has established itself as a
                  cornerstone in the regional academic calendar, consistently
                  delivering high-impact research papers.
                </p>
                <img
                  src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&w=400&q=80"
                  alt="Conference hall"
                  className="rounded-lg w-full h-40 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.aside>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default AboutConference;
