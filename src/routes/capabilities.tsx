import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Users,
  Brain,
  TrendingUp,
  Award,
  GraduationCap,
  Search,
  PenTool,
  Rocket,
  Repeat,
  CheckCircle2,
  Sparkles,
  Building2,
  Landmark,
  Stethoscope,
  Radio,
  Zap,
  ShoppingBag,
  Hotel,
  BookOpen,
  Factory,
  Briefcase,
  LineChart,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { I18nProvider } from "@/lib/i18n";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Capabilities — MEGA | AI, CX, Marketing & Executive Education" },
      {
        name: "description",
        content:
          "MEGA integrates Customer Experience, AI, Marketing Strategy, Capability Building and Executive Education into one transformation ecosystem for Saudi organizations.",
      },
      { property: "og:title", content: "MEGA Capabilities — Integrated Transformation" },
      {
        property: "og:description",
        content:
          "Five specialized capabilities. One transformation partner. AI-embedded strategy, CX, marketing, ICXI certification, and executive education.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "MEGA Capabilities" },
      {
        name: "twitter:description",
        content:
          "Integrated capabilities that turn strategy into measurable growth across Saudi Arabia.",
      },
    ],
  }),
  component: CapabilitiesPage,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] mb-6">
      <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
      {children}
    </div>
  );
}

type Capability = {
  n: string;
  id: string;
  icon: typeof Users;
  title: string;
  lede: string;
  body: string;
  deliverables: string[];
  outcomes: string[];
  cta: string;
};

const capabilities: Capability[] = [
  {
    n: "01",
    id: "cx",
    icon: Users,
    title: "Customer Experience Transformation",
    lede: "CX as business strategy—not customer service.",
    body:
      "We help organizations design, optimize, and operationalize customer experiences that increase satisfaction, loyalty, efficiency, and long-term value. From journey mapping to enterprise-wide CX governance, we enable organizations to become genuinely customer-centric.",
    deliverables: [
      "CX Strategy",
      "Customer Journey Mapping",
      "Voice of Customer Programs",
      "CX Governance",
      "Service Design",
      "Employee Experience Alignment",
      "CX Measurement Frameworks",
      "Experience Transformation Roadmaps",
    ],
    outcomes: [
      "Higher Customer Satisfaction",
      "Increased Retention",
      "Better Operational Efficiency",
      "Improved Brand Loyalty",
    ],
    cta: "Explore Customer Experience",
  },
  {
    n: "02",
    id: "ai",
    icon: Brain,
    title: "AI-Embedded Strategy",
    lede: "AI should strengthen decision-making—not replace it.",
    body:
      "MEGA helps organizations integrate AI into strategy, operations, customer engagement, and leadership decision-making through practical implementation rather than experimentation.",
    deliverables: [
      "AI Strategy",
      "AI Readiness Assessment",
      "AI Opportunity Mapping",
      "Process Automation",
      "Intelligent Customer Engagement",
      "AI Governance",
      "Executive AI Advisory",
      "Responsible AI Frameworks",
    ],
    outcomes: [
      "Faster Decision-Making",
      "Increased Productivity",
      "Lower Operating Costs",
      "Competitive Advantage",
    ],
    cta: "Explore AI Strategy",
  },
  {
    n: "03",
    id: "marketing",
    icon: TrendingUp,
    title: "Marketing & Growth Strategy",
    lede: "Marketing connected directly to business growth.",
    body:
      "Powered by Kotler Business School methodologies, our marketing strategies help organizations build stronger brands, accelerate growth, and compete more effectively within evolving Saudi markets.",
    deliverables: [
      "Growth Strategy",
      "Market Positioning",
      "Go-to-Market Strategy",
      "Customer Segmentation",
      "Brand Strategy",
      "Strategic Marketing Planning",
      "Performance Marketing Frameworks",
    ],
    outcomes: [
      "Revenue Growth",
      "Stronger Market Position",
      "Better Customer Acquisition",
      "Sustainable Competitive Advantage",
    ],
    cta: "Explore Marketing Strategy",
  },
  {
    n: "04",
    id: "icxi",
    icon: Award,
    title: "Capability Building & ICXI Certification",
    lede: "Transformation becomes sustainable when expertise is built internally.",
    body:
      "As the exclusive Gulf (ex-UAE) partner of ICXI, MEGA develops customer experience leaders through internationally recognized certifications and capability frameworks.",
    deliverables: [
      "ICXI Certifications",
      "CX Leadership Development",
      "Organizational Capability Programs",
      "Internal Academy Design",
      "Professional Development",
      "Learning Pathways",
    ],
    outcomes: [
      "Stronger Internal Teams",
      "Sustainable Transformation",
      "Certified CX Professionals",
      "Organizational Capability Growth",
    ],
    cta: "Explore ICXI Programs",
  },
  {
    n: "05",
    id: "education",
    icon: GraduationCap,
    title: "Executive Education",
    lede: "Leadership development, designed strategically.",
    body:
      "Through our partnership with Kotler Business School, MEGA equips executives with modern frameworks in strategy, marketing, innovation, and leadership—designed for decision-makers leading transformation across Saudi Arabia.",
    deliverables: [
      "Executive Education",
      "Leadership Development",
      "Strategy Programs",
      "Marketing Excellence",
      "Innovation Workshops",
      "Executive Masterclasses",
    ],
    outcomes: [
      "Better Executive Decisions",
      "Faster Organizational Alignment",
      "Leadership Capability",
      "Future-Ready Organizations",
    ],
    cta: "Explore Executive Education",
  },
];

const industries = [
  { icon: Landmark, name: "Government & Public Sector" },
  { icon: Building2, name: "Financial Services" },
  { icon: Stethoscope, name: "Healthcare" },
  { icon: Radio, name: "Telecommunications" },
  { icon: Zap, name: "Energy & Utilities" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: Hotel, name: "Hospitality & Tourism" },
  { icon: BookOpen, name: "Education" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Briefcase, name: "Large Enterprises" },
  { icon: LineChart, name: "Growth Companies" },
];

const whyMega = [
  "Exclusive ICXI Gulf Partner",
  "Official Kotler Business School Partner",
  "AI Embedded Across Every Capability",
  "Saudi Market Expertise",
  "Vision 2030 Alignment",
  "Implementation-Focused Consulting",
  "Outcome-Based Engagements",
  "Long-Term Partnership Model",
];

const kpis = [
  "Customer Satisfaction",
  "Operational Efficiency",
  "Revenue Growth",
  "AI Adoption",
  "CX Maturity",
  "Employee Capability",
  "Leadership Readiness",
  "Digital Transformation",
  "Brand Growth",
];

const approachSteps = [
  {
    icon: Search,
    title: "Discover",
    body: "Understand business objectives, customer expectations, and organizational maturity.",
  },
  {
    icon: PenTool,
    title: "Design",
    body: "Develop integrated strategies aligned with measurable outcomes.",
  },
  {
    icon: Rocket,
    title: "Deliver",
    body: "Implement initiatives with executive governance and practical execution.",
  },
  {
    icon: Repeat,
    title: "Sustain",
    body: "Build internal capability, governance, and continuous improvement.",
  },
];

function CapabilitiesPage() {
  return (
    <I18nProvider>
      <main className="min-h-screen">
        <Nav />

        {/* 1. HERO */}
        <section
          className="relative overflow-hidden text-ivory grain"
          style={{ backgroundColor: "#04294C" }}
        >
          <div className="pointer-events-none absolute inset-0 bg-grid-emerald opacity-20 animate-grid-move" />
          <div className="pointer-events-none absolute -top-32 -right-24 h-[460px] w-[460px] rounded-full bg-gold/15 blur-3xl animate-float-slow" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full bg-emerald-mid/25 blur-3xl animate-float-slower" />

          <div className="relative mx-auto max-w-7xl px-6 pt-44 pb-24 lg:pt-52 lg:pb-32">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ivory/85 mb-8">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                Capabilities
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.02] text-balance">
                Integrated Capabilities That Turn Strategy Into{" "}
                <span className="italic text-[#2463eb]">Measurable Growth</span>
              </h1>
              <p className="mt-8 text-base md:text-lg text-ivory/75 leading-relaxed max-w-3xl">
                MEGA combines Customer Experience, Artificial Intelligence, Marketing Strategy,
                Executive Education, and Capability Development into one transformation
                ecosystem—helping Saudi organizations accelerate growth, improve performance, and
                build lasting competitive advantage.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#final-cta"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-gold px-7 py-4 text-sm font-medium text-ink shadow-gold hover:shadow-elegant transition-all"
                >
                  <Calendar className="relative h-4 w-4" />
                  <span className="relative">Book a Strategy Conversation</span>
                  <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="/#impact"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-4 text-sm font-medium text-ink transition-all shadow-[0_0_0_1px_rgba(208,200,178,0.5)]"
                  style={{ backgroundColor: "#D0C8B2" }}
                >
                  <Sparkles className="relative h-4 w-4" />
                  <span className="relative">View Case Studies</span>
                  <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. OVERVIEW */}
        <section className="relative py-28 lg:py-36" style={{ backgroundColor: "#E9E5DA" }}>
          <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
            <motion.div {...fadeUp} className="lg:col-span-5 text-ink">
              <Kicker>The Philosophy</Kicker>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-balance">
                Five specialized capabilities.{" "}
                <span className="italic text-[#2463eb]">One transformation partner.</span>
              </h2>
            </motion.div>
            <motion.div
              {...fadeUp}
              className="lg:col-span-7 space-y-6 text-ink/75 text-lg leading-relaxed"
            >
              <p>Real transformation doesn't happen through disconnected initiatives.</p>
              <p>
                MEGA brings together customer experience, AI, marketing strategy, leadership
                capability, and executive education into one integrated consulting approach that
                aligns strategy, people, technology, and execution.
              </p>
              <p>
                Every capability strengthens the others—creating sustainable business impact rather
                than isolated improvements.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3-7. CAPABILITY SECTIONS */}
        <section className="relative bg-ink text-ivory">
          {capabilities.map((c, i) => {
            const Icon = c.icon;
            const isDark = i % 2 === 0;
            return (
              <div
                key={c.id}
                id={c.id}
                className={`relative overflow-hidden py-24 lg:py-32 ${
                  isDark ? "bg-ink text-ivory" : "text-ink"
                }`}
                style={!isDark ? { backgroundColor: "#F2EFE6" } : undefined}
              >
                {isDark && (
                  <>
                    <div className="pointer-events-none absolute inset-0 bg-grid-emerald opacity-10" />
                    <div className="pointer-events-none absolute -top-24 right-0 h-[380px] w-[380px] rounded-full bg-gold/10 blur-3xl" />
                  </>
                )}
                <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
                  <motion.div {...fadeUp} className="lg:col-span-5">
                    <div
                      className={`inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] mb-6 ${
                        isDark ? "text-ivory/70" : "text-ink/60"
                      }`}
                    >
                      <span className="font-display text-2xl text-gold">{c.n}</span>
                      Capability
                    </div>
                    <div
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-xl mb-6 ${
                        isDark ? "bg-ivory/[0.06] border border-ivory/10" : "bg-ink/5 border border-ink/10"
                      }`}
                    >
                      <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] text-balance mb-5">
                      {c.title}
                    </h2>
                    <p
                      className={`text-lg italic ${
                        isDark ? "text-ivory/70" : "text-ink/70"
                      }`}
                    >
                      {c.lede}
                    </p>
                    <p
                      className={`mt-6 leading-relaxed ${
                        isDark ? "text-ivory/70" : "text-ink/70"
                      }`}
                    >
                      {c.body}
                    </p>
                    <a
                      href="#final-cta"
                      className="mt-8 inline-flex items-center gap-2 text-sm text-gold hover:gap-3 transition-all"
                    >
                      {c.cta} <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </motion.div>

                  <motion.div {...fadeUp} className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
                    <div
                      className={`rounded-2xl p-7 ${
                        isDark
                          ? "bg-ivory/[0.04] border border-ivory/10"
                          : "bg-white border border-ink/10"
                      }`}
                    >
                      <div
                        className={`text-[10px] uppercase tracking-[0.2em] mb-4 ${
                          isDark ? "text-emerald-mid" : "text-[#2463eb]"
                        }`}
                      >
                        What We Deliver
                      </div>
                      <ul className="space-y-2.5">
                        {c.deliverables.map((d) => (
                          <li
                            key={d}
                            className={`flex items-start gap-2 text-sm ${
                              isDark ? "text-ivory/85" : "text-ink/80"
                            }`}
                          >
                            <span className="mt-1.5 h-1 w-1 rounded-full bg-gold shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div
                      className={`rounded-2xl p-7 ${
                        isDark
                          ? "bg-gradient-to-br from-emerald-deep to-ink border border-gold/20"
                          : "bg-[#04294C] text-ivory border border-gold/20"
                      }`}
                    >
                      <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-4">
                        Business Outcomes
                      </div>
                      <ul className="space-y-3">
                        {c.outcomes.map((o) => (
                          <li key={o} className="flex items-start gap-2.5 text-sm text-ivory/90">
                            <CheckCircle2 className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </section>

        {/* 8. HOW CAPABILITIES WORK TOGETHER */}
        <section
          className="relative py-28 lg:py-36 overflow-hidden bg-ink text-ivory grain"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid-emerald opacity-20 animate-grid-move" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gold/10 blur-3xl animate-pulse-glow" />

          <div className="relative mx-auto max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Kicker>The Ecosystem</Kicker>
              <motion.h2
                {...fadeUp}
                className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance"
              >
                Transformation happens when{" "}
                <span className="italic text-gold">capabilities work together</span>.
              </motion.h2>
              <motion.p {...fadeUp} className="mt-6 text-lg text-ivory/70 leading-relaxed">
                Rather than delivering isolated consulting projects, MEGA integrates every
                capability into one strategic transformation journey—ensuring improvements are
                aligned across people, processes, technology, and customer outcomes.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Business Strategy",
                "Customer Experience",
                "AI Integration",
                "Marketing Growth",
                "Leadership Capability",
                "Continuous Improvement",
              ].map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative rounded-2xl border border-ivory/10 bg-ivory/[0.03] p-6 hover:border-gold/40 hover:bg-ivory/[0.06] transition-all"
                >
                  <div className="font-display text-2xl text-gold/60 mb-3">
                    0{i + 1}
                  </div>
                  <div className="font-display text-xl text-ivory">{step}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. WHO WE WORK WITH */}
        <section className="relative py-28 lg:py-36" style={{ backgroundColor: "#E9E5DA" }}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl mb-14 text-ink">
              <Kicker>Who We Work With</Kicker>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                Supporting organizations across{" "}
                <span className="italic text-[#2463eb]">Saudi Arabia</span>.
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {industries.map((ind, i) => {
                const Icon = ind.icon;
                return (
                  <motion.div
                    key={ind.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.04 }}
                    className="group rounded-2xl bg-white border border-ink/10 p-6 hover:border-gold/40 hover:-translate-y-1 transition-all"
                  >
                    <Icon
                      className="h-6 w-6 text-[#2463eb] mb-4 group-hover:text-gold transition-colors"
                      strokeWidth={1.5}
                    />
                    <div className="text-sm font-medium text-ink">{ind.name}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 10. APPROACH */}
        <section
          className="relative py-28 lg:py-36 overflow-hidden bg-ink text-ivory grain"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid-emerald opacity-15" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="max-w-3xl mb-16">
              <Kicker>Our Approach</Kicker>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                A practical framework for{" "}
                <span className="italic text-gold">sustainable transformation</span>.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {approachSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="relative rounded-2xl border border-ivory/10 bg-ivory/[0.03] p-7 hover:border-gold/40 transition-all"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-display text-3xl text-ivory/30">0{i + 1}</span>
                      <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-2xl mb-3 text-ivory">{step.title}</h3>
                    <p className="text-sm text-ivory/65 leading-relaxed">{step.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 11. WHY MEGA */}
        <section className="relative py-28 lg:py-36" style={{ backgroundColor: "#F2EFE6" }}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl mb-14 text-ink">
              <Kicker>Why MEGA</Kicker>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                Why leading organizations{" "}
                <span className="italic text-[#2463eb]">choose MEGA</span>.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {whyMega.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group rounded-2xl bg-white border border-ink/10 p-6 hover:border-gold/40 hover:shadow-soft transition-all"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#2463eb] mb-4 group-hover:text-gold transition-colors" />
                  <div className="text-sm font-medium text-ink leading-snug">{item}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. BUSINESS IMPACT */}
        <section
          className="relative py-28 lg:py-36 overflow-hidden text-ivory grain"
          style={{ backgroundColor: "#04294C" }}
        >
          <div className="pointer-events-none absolute inset-0 bg-grid-emerald opacity-20 animate-grid-move" />
          <div className="pointer-events-none absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl animate-float-slow" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="max-w-3xl mb-16">
              <Kicker>Business Impact</Kicker>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                Designed to deliver{" "}
                <span className="italic text-gold">measurable business results</span>.
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {kpis.map((kpi, i) => (
                <motion.div
                  key={kpi}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="rounded-2xl border border-ivory/10 bg-ivory/[0.04] p-6 hover:border-gold/40 transition-all"
                >
                  <div className="font-display text-xs text-gold uppercase tracking-[0.2em] mb-3">
                    KPI 0{i + 1}
                  </div>
                  <div className="font-display text-lg text-ivory leading-tight">{kpi}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 13. INSIGHTS */}
        <section className="relative py-28 lg:py-36" style={{ backgroundColor: "#E9E5DA" }}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-12 gap-12 mb-14">
              <div className="lg:col-span-6 text-ink">
                <Kicker>Insights</Kicker>
                <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-balance">
                  Ideas that drive{" "}
                  <span className="italic text-[#2463eb]">better transformation</span>.
                </h2>
              </div>
              <div className="lg:col-span-6 flex lg:items-end lg:justify-end">
                <a
                  href="/#insights"
                  className="inline-flex items-center gap-2 text-sm text-[#2463eb] hover:gap-3 transition-all"
                >
                  Explore Insights <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "CX Strategy",
                "AI Adoption",
                "Marketing Leadership",
                "Vision 2030",
                "Executive Education",
                "Research",
                "Whitepapers",
                "Industry Reports",
              ].map((topic) => (
                <div
                  key={topic}
                  className="rounded-2xl bg-white border border-ink/10 p-6 hover:border-gold/40 hover:-translate-y-1 transition-all"
                >
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#2463eb] mb-2">
                    Topic
                  </div>
                  <div className="font-display text-lg text-ink">{topic}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 14. FINAL CTA */}
        <section
          id="final-cta"
          className="relative py-28 lg:py-36 overflow-hidden bg-ink text-ivory grain"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid-emerald opacity-20 animate-grid-move" />
          <div className="pointer-events-none absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-gold/15 blur-3xl animate-float-slow" />
          <div className="pointer-events-none absolute -bottom-32 -right-24 h-[420px] w-[420px] rounded-full bg-emerald-mid/25 blur-3xl animate-float-slower" />

          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <Kicker>Let's Talk</Kicker>
            <motion.h2
              {...fadeUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance"
            >
              Let's build your{" "}
              <span className="italic text-gold">transformation roadmap</span>.
            </motion.h2>
            <motion.p
              {...fadeUp}
              className="mt-8 text-lg text-ivory/70 leading-relaxed max-w-3xl mx-auto"
            >
              Whether you're redesigning customer experiences, embedding AI, accelerating growth,
              or developing leadership capability, MEGA provides the expertise, global
              partnerships, and execution needed to achieve measurable results.
            </motion.p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/#contact"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-gold px-7 py-4 text-sm font-medium text-ink shadow-gold hover:shadow-elegant transition-all"
              >
                <Calendar className="relative h-4 w-4" />
                <span className="relative">Book Your Strategy Conversation</span>
                <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/#contact"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-4 text-sm font-medium text-ink transition-all shadow-[0_0_0_1px_rgba(208,200,178,0.5)]"
                style={{ backgroundColor: "#D0C8B2" }}
              >
                <span className="relative">Request a Proposal</span>
                <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </I18nProvider>
  );
}
