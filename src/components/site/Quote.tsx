import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import quoteBgAsset from "@/assets/quote-bg.png.asset.json";
import { useI18n } from "@/lib/i18n";

export function Quote() {
  const { t, lang } = useI18n();
  return (
    <section className="relative bg-ink text-ivory py-28 lg:py-36 overflow-hidden hidden">
      <img
        src={quoteBgAsset.url}
        alt="Leadership vision with Tuwaiq mountain backdrop"
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-50 animate-ken-burns hidden"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/40" />
      <div className="pointer-events-none absolute inset-0 bg-grid-emerald opacity-20 animate-grid-move" />
      <div className="pointer-events-none absolute -top-32 -left-20 h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-[460px] w-[460px] rounded-full bg-emerald-mid/20 blur-3xl animate-float-slower" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-6xl px-6 text-center"
      >
        <blockquote className="font-display text-3xl md:text-4xl lg:text-4xl leading-[1.2] text-balance text-ivory/95">
          {lang === "ar" ? (
            <>
              &ldquo; قوة السعوديين كجبل <br />
              <span className="text-blue-400 ">طويق، لا تنكسر.</span> &rdquo;
            </>
          ) : (
            <>
              &ldquo; The strength of the&nbsp;Saudis is like that of the <br />
              Tuwaiq mountain, <span className="text-blue-400 ">unbreakable.</span> &rdquo;
            </>
          )}
        </blockquote>
        <div className="mt-10 flex flex-col items-center gap-2">
          <div className="h-px w-16 bg-gold/40" />
          <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-gold">
            {t("quote.attribution.title")}
          </p>
          <p className="text-base font-display text-ivory/90">{t("quote.attribution.name")}</p>
        </div>

        <div className="mt-20 hairline pt-8">
          <div className="text-[11px] uppercase tracking-[0.25em] text-ivory/50 mb-5">{t("hero.trusted")}</div>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            <Badge label="ICXI" sub={t("hero.badge.icxi.sub")} />
            <Badge label="Kotler" sub={t("hero.badge.kotler.sub")} />
            <Badge label="Vision 2030" sub={t("hero.badge.vision.sub")} icon />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Badge({ label, sub, icon }: { label: string; sub: string; icon?: boolean }) {
  return (
    <div className="flex items-center gap-3 group cursor-default">
      <div className="h-10 w-10 rounded-full border border-ivory/20 flex items-center justify-center bg-ivory/5 transition-all duration-300 group-hover:border-gold/60 group-hover:bg-gold/10 group-hover:scale-110">
        {icon ? (
          <Sparkles className="h-4 w-4 text-gold" />
        ) : (
          <span className="font-display text-sm text-gold">{label[0]}</span>
        )}
      </div>
      <div className="leading-tight">
        <div className="text-sm text-ivory text-left">{label}</div>
        <div className="text-[10px] uppercase tracking-wider text-ivory/50">{sub}</div>
      </div>
    </div>
  );
}
