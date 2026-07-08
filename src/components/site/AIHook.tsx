import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function AIHook() {
  const { t } = useI18n();
  return (
    <section className="relative text-ink py-28 lg:py-36 overflow-hidden" style={{ backgroundColor: "#E9E5DA" }}>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink/70 mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          {t("ai.badge")}
        </div>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
          {t("ai.title.1")} <span className="italic text-gold text-[#2463eb]">{t("ai.title.highlight")}</span> {t("ai.title.2")}
        </h2>
        <p className="mt-7 text-lg text-ink/70 leading-relaxed max-w-2xl mx-auto">
          {t("ai.body")}
        </p>
        <a
                href="#"
                className="group relative mt-10 inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-gold px-7 py-4 text-sm font-medium text-ink shadow-gold hover:shadow-elegant transition-all"
              >
   
          <span className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.45)_50%,transparent_70%)] bg-[length:200%_100%] bg-[position:200%_0] transition-[background-position] duration-1000 ease-out group-hover:bg-[position:-200%_0]" />
          <span className="relative">{t("ai.cta")}</span>
          <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
        </a>
        <p className="mt-6 text-xs text-ink/50 uppercase tracking-wider">
          {t("ai.note")}
        </p>
      </motion.div>
    </section>
  );
}
