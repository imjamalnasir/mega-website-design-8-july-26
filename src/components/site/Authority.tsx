import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useRef, type MouseEvent } from "react";

function AuthorityPoint({ text, index }: { text: string; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex gap-4 group"
    >
      <div className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
        <CheckCircle2 className="h-4 w-4 text-gold" strokeWidth={2} />
      </div>
      <span className="text-ivory/80 leading-relaxed group-hover:text-ivory transition-colors">{text}</span>
    </motion.li>
  );
}

export function Authority() {
  const { t } = useI18n();
  const points = [t("auth.point.1"), t("auth.point.2"), t("auth.point.3")];
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden bg-ink text-ivory hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink to-ink/95" />
      <div className="pointer-events-none absolute inset-0 bg-grid-emerald opacity-20 animate-grid-move" />
      <div className="pointer-events-none absolute -top-32 -left-20 h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-[460px] w-[460px] rounded-full bg-emerald-mid/20 blur-3xl animate-float-slower" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6"
        >
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ivory/85 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            {t("auth.kicker")}
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-balance text-ivory">
            {t("auth.title.1")} <span className="italic text-blue-400">{t("auth.title.highlight")}</span> {t("auth.title.2")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 lg:pt-4"
        >
          <p className="text-lg text-ivory/60 leading-relaxed">
            {t("auth.body.1")} <span className="text-ivory font-medium">{t("auth.body.strategy")}</span>{t("auth.body.2")} <span className="text-ivory font-medium">{t("auth.body.cx")}</span>{t("auth.body.3")} <span className="text-ivory font-medium">{t("auth.body.ai")}</span>{t("auth.body.4")}
          </p>
          <ul className="mt-10 space-y-5">
            {points.map((p, i) => (
              <AuthorityPoint key={i} text={p} index={i} />
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
