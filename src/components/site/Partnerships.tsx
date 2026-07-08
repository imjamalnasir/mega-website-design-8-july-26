import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useRef, type MouseEvent } from "react";

function PartnerCard({
  tag, title, body, stats, from = "left",
}: { tag: string; title: string; body: string; stats: { v: string; l: string }[]; from?: "left" | "right" }) {
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
      initial={{ opacity: 0, x: from === "left" ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-ivory/10 bg-ivory/[0.03] backdrop-blur-sm p-10 lg:p-12 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:bg-ivory/[0.06]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(212,175,55,0.18), transparent 60%)",
        }}
      />
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-gold/0 via-emerald-mid/0 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative text-[10px] uppercase tracking-[0.25em] mb-8 text-gold">
        {tag}
      </div>
      <h3 className="relative font-display text-3xl lg:text-4xl leading-tight mb-6 text-balance text-ivory">{title}</h3>
      <p className="relative leading-relaxed mb-10 text-ivory/70">{body}</p>
      <div className="relative grid grid-cols-2 gap-6 pt-8 border-t border-ivory/10">
        {stats.map((s) => (
          <div key={s.l}>
            <div className="font-display text-3xl mb-1 text-gold">{s.v}</div>
            <div className="text-xs uppercase tracking-wider text-ivory/55">{s.l}</div>
          </div>
        ))}
      </div>
      <ArrowUpRight className="absolute top-10 right-10 h-5 w-5 text-gold opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300" />
    </motion.div>
  );
}

export function Partnerships() {
  const { t } = useI18n();
  return (
    <section id="partnerships" className="relative py-28 lg:py-36 overflow-hidden bg-ink text-ivory hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink to-ink/95" />
      <div className="pointer-events-none absolute inset-0 bg-grid-emerald opacity-20 animate-grid-move" />
      <div className="pointer-events-none absolute top-1/4 -right-24 h-[440px] w-[440px] rounded-full bg-gold/10 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-emerald-mid/20 blur-3xl animate-drift" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-20"
        >
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ivory/85 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            {t("part.kicker")}
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance text-ivory">
            {t("part.title.1")} <span className="italic text-blue-400">{t("part.title.highlight")}</span> {t("part.title.2")}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <PartnerCard
            from="left"
            tag={t("part.icxi.tag")}
            title={t("part.icxi.title")}
            body={t("part.icxi.body")}
            stats={[
              { v: t("part.icxi.s1.v"), l: t("part.icxi.s1.l") },
              { v: t("part.icxi.s2.v"), l: t("part.icxi.s2.l") },
            ]}
          />
          <PartnerCard
            from="right"
            tag={t("part.kotler.tag")}
            title={t("part.kotler.title")}
            body={t("part.kotler.body")}
            stats={[
              { v: t("part.kotler.s1.v"), l: t("part.kotler.s1.l") },
              { v: t("part.kotler.s2.v"), l: t("part.kotler.s2.l") },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
