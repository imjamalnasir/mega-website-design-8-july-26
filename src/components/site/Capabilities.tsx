import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Cpu, TrendingUp, Award, GraduationCap } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useRef, type MouseEvent } from "react";

function PillarCard({
  n,
  Icon,
  title,
  body,
  outcome,
  outcomeLabel,
  index,
}: {
  n: string;
  Icon: typeof Compass;
  title: string;
  body: string;
  outcome: string;
  outcomeLabel: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-ivory/10 bg-ivory/[0.03] backdrop-blur-sm p-8 lg:p-10 min-h-[340px] flex flex-col transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:bg-ivory/[0.06]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(212,175,55,0.18), transparent 60%)",
        }}
      />
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-gold/0 via-emerald-mid/0 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex items-start justify-between mb-8">
        <span className="font-display text-3xl text-ivory/30 transition-all duration-500 group-hover:text-gold group-hover:scale-110">
          {n}
        </span>
        <Icon
          className="h-5 w-5 text-ivory/70 transition-all duration-500 group-hover:text-gold group-hover:rotate-12 group-hover:scale-125"
          strokeWidth={1.5}
        />
      </div>
      <h3 className="relative font-display text-2xl leading-tight mb-4 text-ivory">{title}</h3>
      <p className="relative text-sm text-ivory/60 leading-relaxed mb-6">{body}</p>
      <div className="relative mt-auto pt-5 border-t border-ivory/10">
        <div className="text-[10px] uppercase tracking-wider text-emerald-mid mb-1">{outcomeLabel}</div>
        <div className="text-sm text-ivory/90">{outcome}</div>
      </div>
      
    </motion.div>
  );
}

function ExplorePod() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="hidden lg:flex relative overflow-hidden rounded-2xl p-10 items-end text-ivory bg-gradient-to-br from-emerald-deep via-emerald-deep to-ink border border-gold/20 hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 group"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(212,175,55,0.18), transparent 60%)",
        }}
      />
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-gold/0 via-emerald-mid/0 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="pointer-events-none absolute -top-20 -right-20 h-[260px] w-[260px] rounded-full bg-gold/20 blur-3xl group-hover:bg-gold/30 transition-colors duration-500" />
      <div className="relative">
        <div className="font-display text-2xl leading-tight mb-3">{t("cap.explore.title")}</div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm text-gold hover:gap-3 transition-all"
        >
          {t("cap.explore.cta")} <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}

export function Capabilities() {
  const { t } = useI18n();
  const pillars = [
    { n: "01", icon: Compass, title: t("cap.1.title"), body: t("cap.1.body"), outcome: t("cap.1.outcome") },
    { n: "02", icon: Cpu, title: t("cap.2.title"), body: t("cap.2.body"), outcome: t("cap.2.outcome") },
    { n: "03", icon: TrendingUp, title: t("cap.3.title"), body: t("cap.3.body"), outcome: t("cap.3.outcome") },
    { n: "04", icon: Award, title: t("cap.4.title"), body: t("cap.4.body"), outcome: t("cap.4.outcome") },
    { n: "05", icon: GraduationCap, title: t("cap.5.title"), body: t("cap.5.body"), outcome: t("cap.5.outcome") },
  ];
  return (
    <section id="capabilities" className="relative bg-ink text-ivory py-28 lg:py-36 overflow-hidden hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink to-ink/95" />
      <div className="pointer-events-none absolute inset-0 bg-grid-emerald opacity-20 animate-grid-move" />
      <div className="pointer-events-none absolute -top-32 -left-20 h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-[460px] w-[460px] rounded-full bg-emerald-mid/20 blur-3xl animate-float-slower" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ivory/85 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              {t("cap.kicker")}
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance text-ivory">
              {t("cap.title.1")}{" "}
              <span className="italic text-blue-400">{t("cap.title.highlight")}</span>{" "}
              {t("cap.title.2")}
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <PillarCard
              key={p.n}
              n={p.n}
              Icon={p.icon}
              title={p.title}
              body={p.body}
              outcome={p.outcome}
              outcomeLabel={t("cap.outcome")}
              index={i}
            />
          ))}
          <ExplorePod />

        </div>
      </div>
    </section>
  );
}
