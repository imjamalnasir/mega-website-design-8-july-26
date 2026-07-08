import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function CTA() {
  const { t } = useI18n();
  return (
    <section id="contact" className="relative bg-ink py-28 lg:py-36 overflow-hidden">
      <div className="pointer-events-none absolute top-10 -left-20 h-[360px] w-[360px] rounded-full bg-emerald-mid/8 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute bottom-0 -right-20 h-[400px] w-[400px] rounded-full bg-gold/10 blur-3xl animate-float-slower" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-0xl bg-gradient-hero p-12 lg:p-20 text-ivory shadow-elegant grain"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid-emerald opacity-30 animate-grid-move" />
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl animate-float-slow" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-emerald-mid/30 blur-3xl animate-float-slower" />
          <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full border border-gold/15 animate-spin-slow" />
          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ivory/85 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              {t("cta.kicker")}
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              {t("cta.title.1")} <span className="italic text-gold text-[#2463eb]">{t("cta.title.highlight")}{t("cta.title.2")}</span>
            </h2>
            <p className="mt-7 text-lg text-ivory/75 leading-relaxed max-w-2xl">
              {t("cta.body")}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-gold px-7 py-4 text-sm font-medium text-ink shadow-gold hover:shadow-elegant transition-all"
              >
                <span className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.45)_50%,transparent_70%)] bg-[length:200%_100%] bg-[position:200%_0] transition-[background-position] duration-1000 ease-out group-hover:bg-[position:-200%_0]" />
                <Calendar className="relative h-4 w-4" />
                <span className="relative">{t("cta.book")}</span>
                <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
