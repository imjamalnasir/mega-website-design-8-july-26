import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Impact() {
  const { t } = useI18n();
  const cases = [
    {
      sector: t("impact.1.sector"),
      title: t("impact.1.title"),
      metrics: [
        { v: "+32%", l: t("impact.1.m1.l") },
        { v: "−18%", l: t("impact.1.m2.l") },
      ],
    },
    {
      sector: t("impact.2.sector"),
      title: t("impact.2.title"),
      metrics: [
        { v: "+25%", l: t("impact.2.m1.l") },
        { v: "+40%", l: t("impact.2.m2.l") },
      ],
    },
  ];
  return (
    <section id="impact" className="bg-emerald-deep text-ivory py-28 lg:py-36 grain relative overflow-hidden">
      <div className="pointer-events-none absolute top-10 right-10 h-[360px] w-[360px] rounded-full bg-gold/15 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute bottom-0 -left-20 h-[420px] w-[420px] rounded-full bg-emerald-mid/40 blur-3xl animate-float-slower" />
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ivory/85 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              {t("impact.kicker")}
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              {t("impact.title.1")} <span className="italic text-gold text-[#2463eb]">{t("impact.title.highlight")}{t("impact.title.2")}</span>
            </h2>
          </motion.div>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="group inline-flex items-center gap-2 text-sm text-ivory/80 hover:text-ivory"
          >
            {t("impact.viewCases")} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.sector}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group border border-ivory/15 bg-ivory/[0.03] backdrop-blur-sm p-10 hover:bg-ivory/[0.06] hover:border-gold/30 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-5">{c.sector}</div>
              <h3 className="font-display text-2xl lg:text-3xl leading-snug mb-10 text-balance">{c.title}</h3>
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-ivory/15">
                {c.metrics.map((m) => (
                  <div key={m.l}>
                    <div className="font-display text-4xl lg:text-5xl text-gold mb-2 transition-transform duration-500 group-hover:scale-110 origin-left">{m.v}</div>
                    <div className="text-xs uppercase tracking-wider text-ivory/60">{m.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
