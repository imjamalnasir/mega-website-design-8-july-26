import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useRef, type MouseEvent } from "react";

function InsightCard({
  tag, title, read, index,
}: { tag: string; title: string; read: string; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.a
      ref={ref}
      onMouseMove={handleMove}
      href="#"
      initial={{ opacity: 0, x: index === 0 ? -50 : index === 2 ? 50 : 0, y: index === 1 ? 30 : 0 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden border border-ink/10 p-8 lg:p-10 min-h-[280px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:border-gold/40"
      style={{ backgroundColor: "#E9E5DA" }}

    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(212,175,55,0.18), transparent 60%)",
        }}
      />
      <div className="pointer-events-none absolute -inset-px bg-gradient-to-br from-gold/0 via-emerald-mid/0 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative text-[10px] uppercase tracking-[0.25em] text-gold">{tag}</div>
      <h3 className="relative font-display text-2xl leading-tight my-8 text-balance text-ink group-hover:text-ink transition-colors">
        {title}
      </h3>
      <div className="relative flex items-center justify-between text-xs text-ink/55">
        <span>{read}</span>
        <ArrowUpRight className="h-4 w-4 text-gold -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
      </div>

    </motion.a>
  );
}

export function Insights() {
  const { t } = useI18n();
  const insights = [
    { tag: t("ins.1.tag"), title: t("ins.1.title"), read: t("ins.1.read") },
    { tag: t("ins.2.tag"), title: t("ins.2.title"), read: t("ins.2.read") },
    { tag: t("ins.3.tag"), title: t("ins.3.title"), read: t("ins.3.read") },
  ];
  return (
    <section id="insights" className="relative py-28 lg:py-36 overflow-hidden text-ink" style={{ backgroundColor: "#E9E5DA" }}>




      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink/85 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              {t("ins.kicker")}
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance text-ink">
              {t("ins.title.1")} <span className="italic text-blue-400">{t("ins.title.highlight")}</span> {t("ins.title.2")}
            </h2>

          </motion.div>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="group inline-flex items-center gap-2 text-sm text-gold hover:text-gold/80"
          >
            {t("ins.exploreAll")} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {insights.map((it, i) => (
            <InsightCard
              key={it.title}
              tag={it.tag}
              title={it.title}
              read={it.read}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
