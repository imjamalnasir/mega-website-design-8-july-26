import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Compass,
  CheckCircle2,
  Sparkles,
  Target,
  Handshake,
  Award,
  Search,
  PenTool,
  Rocket,
  Repeat,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { I18nProvider } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MEGA — AI-Led Growth & CX Transformation in Saudi Arabia" },
      {
        name: "description",
        content:
          "MEGA is Saudi Arabia's specialist authority in customer experience, AI-led growth, and executive capability. Exclusive Gulf (ex-UAE) ICXI partner and official Kotler Business School partner in KSA.",
      },
      { property: "og:title", content: "About MEGA — AI-Led Growth & CX in Saudi Arabia" },
      {
        property: "og:description",
        content:
          "Purpose, partnerships, methodology and leadership behind Saudi Arabia's premier AI-led growth and customer experience transformation partner.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About MEGA" },
      {
        name: "twitter:description",
        content:
          "Strategy, customer experience, and AI execution for Saudi Arabia's Vision 2030 organizations.",
      },
    ],
  }),
  component: AboutPage,
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

function AboutPage() {
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
                About MEGA
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.02] text-balance">
                Building the Future of{" "}
                <span className="italic text-[#2463eb]">Customer Experience</span> & AI-Led
                Growth in Saudi Arabia
              </h1>
              <p className="mt-8 text-base md:text-lg text-ivory/75 leading-relaxed max-w-3xl">
                MEGA partners with ambitious organizations to transform strategy into measurable
                business outcomes through customer experience excellence, AI integration,
                executive capability building, and globally recognized frameworks.
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
                  href="#approach"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-4 text-sm font-medium text-ink transition-all shadow-[0_0_0_1px_rgba(208,200,178,0.5)]"
                  style={{ backgroundColor: "#D0C8B2" }}
                >
                  <Compass className="relative h-4 w-4" />
                  <span className="relative">Explore Our Services</span>
                  <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. WHO WE ARE */}
        <section className="relative py-28 lg:py-36" style={{ backgroundColor: "#E9E5DA" }}>
          <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
            <motion.div {...fadeUp} className="lg:col-span-5">
              <div className="text-ink">
                <Kicker>Who We Are</Kicker>
                <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-balance">
                  A Saudi-focused strategy and{" "}
                  <span className="italic text-[#2463eb]">capability</span> partner.
                </h2>
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="lg:col-span-7 space-y-6 text-ink/75 text-lg leading-relaxed">
              <p>
                MEGA is a Saudi-focused strategic consulting and capability-building firm
                specializing in Customer Experience, Artificial Intelligence, Marketing Strategy,
                and Executive Education.
              </p>
              <p>
                Rather than delivering reports, we partner with organizations to implement
                transformation programs that create measurable improvements in customer value,
                operational efficiency, and sustainable growth.
              </p>
              <p>
                Our work combines international best practices with deep regional understanding to
                help organizations succeed in the evolving Saudi economy.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3. OUR PURPOSE */}
        <section className="relative py-28 lg:py-36 overflow-hidden bg-ink text-ivory grain">
          <div className="pointer-events-none absolute inset-0 bg-grid-emerald opacity-20 animate-grid-move" />
          <div className="pointer-events-none absolute top-10 -right-20 h-[400px] w-[400px] rounded-full bg-gold/10 blur-3xl animate-float-slow" />
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <Kicker>Our Purpose</Kicker>
            <motion.h2
              {...fadeUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance"
            >
              Equipping Saudi organizations to compete in a{" "}
              <span className="italic text-gold">future shaped by AI</span>.
            </motion.h2>
            <motion.p
              {...fadeUp}
              className="mt-8 text-lg text-ivory/70 leading-relaxed max-w-3xl mx-auto"
            >
              We believe every organization should be equipped to compete in a future shaped by
              AI, exceptional customer experiences, and continuous innovation. Our mission is to
              help Saudi organizations build these capabilities from within—creating lasting
              competitive advantage that supports Vision 2030 and long-term economic growth.
            </motion.p>
          </div>
        </section>

        {/* 4. WHAT MAKES MEGA DIFFERENT */}
        <section className="relative py-28 lg:py-36" style={{ backgroundColor: "#E9E5DA" }}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl mb-16 text-ink">
              <Kicker>Why MEGA</Kicker>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                Why organizations{" "}
                <span className="italic text-[#2463eb]">choose MEGA</span>.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  icon: Target,
                  title: "Strategy That Gets Implemented",
                  body:
                    "We focus on execution—not presentations—ensuring every engagement delivers measurable business impact.",
                },
                {
                  icon: Sparkles,
                  title: "AI Embedded Into Every Solution",
                  body:
                    "Artificial Intelligence isn't a standalone service. It enhances every strategy, customer journey, marketing initiative, and operational transformation we deliver.",
                },
                {
                  icon: Handshake,
                  title: "Exclusive Global Partnerships",
                  body:
                    "Exclusive Gulf (ex-UAE) ICXI Partner and official Kotler Business School Partner in Saudi Arabia—globally respected methodologies with local relevance.",
                },
                {
                  icon: Award,
                  title: "Built Around Outcomes",
                  body:
                    "Every engagement is measured through tangible improvements in satisfaction, growth, efficiency, capability, and organizational performance.",
                },
              ].map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group border border-ink/10 bg-ivory/40 p-10 hover:-translate-y-1 hover:border-gold/40 transition-all duration-500"
                >
                  <div className="h-12 w-12 rounded-full bg-gold/15 flex items-center justify-center mb-6 group-hover:bg-gold/25 transition-colors">
                    <p.icon className="h-5 w-5 text-gold" strokeWidth={2} />
                  </div>
                  <h3 className="font-display text-2xl text-ink mb-4 leading-snug">{p.title}</h3>
                  <p className="text-ink/70 leading-relaxed">{p.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. PARTNERSHIPS */}
        <section className="relative py-28 lg:py-36 overflow-hidden bg-emerald-deep text-ivory grain">
          <div className="pointer-events-none absolute top-10 right-10 h-[360px] w-[360px] rounded-full bg-gold/15 blur-3xl animate-float-slow" />
          <div className="pointer-events-none absolute bottom-0 -left-20 h-[420px] w-[420px] rounded-full bg-emerald-mid/40 blur-3xl animate-float-slower" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="max-w-3xl mb-16">
              <Kicker>Strategic Partnerships</Kicker>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                Global expertise.{" "}
                <span className="italic text-gold">Local impact.</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {[
                {
                  tag: "ICXI — Gulf (ex-UAE) Exclusive Partner",
                  title: "Internationally recognized Customer Experience certification.",
                  body:
                    "As the exclusive Gulf (ex-UAE) partner of ICXI, MEGA delivers globally recognized CX certifications, maturity frameworks, and transformation methodologies that develop internal organizational capability.",
                },
                {
                  tag: "Kotler Business School — KSA Official Partner",
                  title: "World-class marketing strategy and executive education.",
                  body:
                    "As the official Kotler Business School partner in Saudi Arabia, MEGA brings globally respected marketing strategy and executive education programs to leaders shaping the Kingdom's future.",
                },
              ].map((c, i) => (
                <motion.div
                  key={c.tag}
                  initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden border border-ivory/15 bg-ivory/[0.03] backdrop-blur-sm p-10 lg:p-12 hover:-translate-y-1 hover:border-gold/40 hover:bg-ivory/[0.06] transition-all duration-500"
                >
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-6">
                    {c.tag}
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl leading-snug mb-6 text-balance">
                    {c.title}
                  </h3>
                  <p className="text-ivory/70 leading-relaxed">{c.body}</p>
                </motion.div>
              ))}
            </div>
            <motion.p
              {...fadeUp}
              className="mt-12 text-ivory/70 text-lg max-w-3xl leading-relaxed"
            >
              Together, these partnerships enable Saudi organizations to access world-class
              expertise without compromising regional relevance.
            </motion.p>
          </div>
        </section>

        {/* 6. APPROACH */}
        <section
          id="approach"
          className="relative py-28 lg:py-36"
          style={{ backgroundColor: "#E9E5DA" }}
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl mb-16 text-ink">
              <Kicker>Our Approach</Kicker>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                How we deliver{" "}
                <span className="italic text-[#2463eb]">transformation</span>.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: Search,
                  step: "01",
                  title: "Discover",
                  body:
                    "Understand business objectives, customer expectations, operational challenges, and organizational maturity.",
                },
                {
                  icon: PenTool,
                  step: "02",
                  title: "Design",
                  body:
                    "Create integrated strategies combining customer experience, AI, marketing, and capability development.",
                },
                {
                  icon: Rocket,
                  step: "03",
                  title: "Deliver",
                  body:
                    "Implement practical initiatives with measurable milestones and executive alignment.",
                },
                {
                  icon: Repeat,
                  step: "04",
                  title: "Sustain",
                  body:
                    "Develop internal capability through training, governance, and continuous improvement.",
                },
              ].map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative border border-ink/10 bg-ivory/40 p-8 hover:-translate-y-1 hover:border-gold/40 transition-all duration-500"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-11 w-11 rounded-full bg-gold/15 flex items-center justify-center">
                      <s.icon className="h-5 w-5 text-gold" strokeWidth={2} />
                    </div>
                    <span className="font-display text-2xl text-ink/25">{s.step}</span>
                  </div>
                  <h3 className="font-display text-2xl text-ink mb-3">{s.title}</h3>
                  <p className="text-ink/70 leading-relaxed text-sm">{s.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. IMPACT */}
        <section className="relative py-28 lg:py-36 overflow-hidden bg-ink text-ivory grain">
          <div className="pointer-events-none absolute top-10 -left-20 h-[360px] w-[360px] rounded-full bg-emerald-mid/20 blur-3xl animate-float-slow" />
          <div className="pointer-events-none absolute bottom-0 -right-20 h-[400px] w-[400px] rounded-full bg-gold/10 blur-3xl animate-float-slower" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="max-w-3xl mb-16">
              <Kicker>Our Impact</Kicker>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                Creating measurable{" "}
                <span className="italic text-gold">business results</span>.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                "Improved customer satisfaction",
                "Accelerated digital transformation",
                "AI-enabled operational efficiency",
                "Executive capability development",
                "Marketing performance optimization",
                "CX maturity advancement",
                "Vision 2030 alignment initiatives",
              ].map((m, i) => (
                <motion.div
                  key={m}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  className="group border border-ivory/15 bg-ivory/[0.03] p-8 hover:bg-ivory/[0.06] hover:border-gold/30 transition-all"
                >
                  <CheckCircle2 className="h-5 w-5 text-gold mb-5" />
                  <div className="font-display text-xl leading-snug">{m}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. LEADERSHIP */}
        <section className="relative py-28 lg:py-36" style={{ backgroundColor: "#E9E5DA" }}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl mb-16 text-ink">
              <Kicker>Leadership</Kicker>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                Global expertise with{" "}
                <span className="italic text-[#2463eb]">regional insight</span>.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Executive Leadership",
                  role: "Managing Partner",
                  focus: "Strategy • CX Transformation • Vision 2030",
                },
                {
                  name: "AI & Growth",
                  role: "Head of AI Practice",
                  focus: "Applied AI • Marketing Systems • Data",
                },
                {
                  name: "Customer Experience",
                  role: "ICXI Lead Assessor — Gulf",
                  focus: "CX Maturity • Certification • Journey Design",
                },
              ].map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="group border border-ink/10 bg-ivory/50 hover:-translate-y-1 hover:border-gold/40 transition-all duration-500 overflow-hidden"
                >
                  <div className="aspect-[4/5] bg-gradient-to-br from-emerald-deep via-ink to-emerald-deep relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-emerald opacity-20" />
                    <div className="absolute bottom-6 left-6 text-ivory/50 text-xs uppercase tracking-[0.25em]">
                      Portrait
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-2xl text-ink">{p.name}</h3>
                    <div className="text-sm text-gold mt-1 uppercase tracking-wider">
                      {p.role}
                    </div>
                    <p className="text-ink/65 text-sm mt-4 leading-relaxed">{p.focus}</p>
                    <a
                      href="#"
                      className="mt-6 inline-flex items-center gap-2 text-sm text-ink/70 hover:text-gold transition-colors"
                    >
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. VALUES */}
        <section className="relative py-28 lg:py-36 overflow-hidden bg-emerald-deep text-ivory grain">
          <div className="pointer-events-none absolute top-0 left-1/3 h-[360px] w-[360px] rounded-full bg-emerald-mid/30 blur-3xl animate-float-slow" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="max-w-3xl mb-16">
              <Kicker>Our Values</Kicker>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                The principles behind{" "}
                <span className="italic text-gold">every engagement</span>.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { t: "Strategic Thinking", b: "Every recommendation connects to measurable business outcomes." },
                { t: "Customer-Centricity", b: "Every decision begins with understanding the customer." },
                { t: "Innovation", b: "AI and emerging technologies create sustainable competitive advantage." },
                { t: "Partnership", b: "We work alongside our clients—not simply for them." },
                { t: "Excellence", b: "Global standards delivered with local understanding." },
              ].map((v, i) => (
                <motion.div
                  key={v.t}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="border border-ivory/15 bg-ivory/[0.03] p-6 hover:bg-ivory/[0.06] hover:border-gold/30 transition-all"
                >
                  <div className="h-1 w-8 bg-gold mb-5" />
                  <h3 className="font-display text-xl mb-3 leading-snug">{v.t}</h3>
                  <p className="text-sm text-ivory/65 leading-relaxed">{v.b}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. VISION 2030 */}
        <section className="relative py-28 lg:py-36" style={{ backgroundColor: "#E9E5DA" }}>
          <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-12 items-center">
            <motion.div {...fadeUp} className="lg:col-span-6 text-ink">
              <Kicker>Vision 2030 Alignment</Kicker>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-balance">
                Supporting Saudi Arabia's{" "}
                <span className="italic text-[#2463eb]">transformation journey</span>.
              </h2>
            </motion.div>
            <motion.div {...fadeUp} className="lg:col-span-6">
              <p className="text-lg text-ink/75 leading-relaxed">
                Our work directly supports organizations advancing the Kingdom's Vision 2030
                priorities through customer-centric transformation, digital innovation, AI
                adoption, leadership capability development, and sustainable organizational
                growth.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Customer-centric transformation",
                  "Digital innovation & AI adoption",
                  "Leadership capability development",
                  "Sustainable organizational growth",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-3 text-ink/80">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* 11. THOUGHT LEADERSHIP */}
        <section className="relative py-28 lg:py-36 overflow-hidden bg-ink text-ivory grain">
          <div className="pointer-events-none absolute inset-0 bg-grid-emerald opacity-20 animate-grid-move" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="flex flex-wrap items-end justify-between gap-8 mb-14">
              <div className="max-w-2xl">
                <Kicker>Thought Leadership</Kicker>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                  Ideas that shape{" "}
                  <span className="italic text-gold">better organizations</span>.
                </h2>
              </div>
              <a
                href="#"
                className="group inline-flex items-center gap-2 text-sm text-gold hover:text-gold/80"
              >
                Explore Insights{" "}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { tag: "CX Strategy", title: "Designing CX maturity for enterprise scale.", read: "8 min read" },
                { tag: "AI in Growth", title: "Embedding AI in marketing operating models.", read: "6 min read" },
                { tag: "Executive Education", title: "Building leadership capability for Vision 2030.", read: "5 min read" },
              ].map((it, i) => (
                <motion.a
                  key={it.title}
                  href="#"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  className="group relative border border-ivory/15 bg-ivory/[0.03] p-8 min-h-[260px] flex flex-col justify-between hover:-translate-y-1 hover:border-gold/40 hover:bg-ivory/[0.06] transition-all"
                >
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold">{it.tag}</div>
                  <h3 className="font-display text-2xl leading-tight my-8 text-balance">
                    {it.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-ivory/55">
                    <span>{it.read}</span>
                    <ArrowUpRight className="h-4 w-4 text-gold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* 12. FINAL CTA */}
        <section id="final-cta" className="relative bg-ink py-28 lg:py-36 overflow-hidden">
          <div className="pointer-events-none absolute top-10 -left-20 h-[360px] w-[360px] rounded-full bg-emerald-mid/10 blur-3xl animate-float-slow" />
          <div className="pointer-events-none absolute bottom-0 -right-20 h-[400px] w-[400px] rounded-full bg-gold/10 blur-3xl animate-float-slower" />
          <div className="relative mx-auto max-w-5xl px-6">
            <div className="relative overflow-hidden rounded-0xl bg-gradient-hero p-12 lg:p-20 text-ivory shadow-elegant grain">
              <div className="pointer-events-none absolute inset-0 bg-grid-emerald opacity-30 animate-grid-move" />
              <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl animate-float-slow" />
              <div className="relative max-w-3xl">
                <Kicker>Let's Talk</Kicker>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                  Let's build your{" "}
                  <span className="italic text-gold">next stage of growth</span>.
                </h2>
                <p className="mt-7 text-lg text-ivory/75 leading-relaxed max-w-2xl">
                  Whether you're beginning your transformation journey or accelerating an existing
                  initiative, MEGA provides the expertise, partnerships, and practical execution
                  needed to deliver measurable impact.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-gold px-7 py-4 text-sm font-medium text-ink shadow-gold hover:shadow-elegant transition-all"
                  >
                    <Calendar className="relative h-4 w-4" />
                    <span>Book Your Strategy Conversation</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium text-ink transition-all"
                    style={{ backgroundColor: "#D0C8B2" }}
                  >
                    <span>Request a Proposal</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </I18nProvider>
  );
}
