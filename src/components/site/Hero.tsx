import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar, Compass } from "lucide-react";
import heroAsset from "@/assets/hero-bg-elements-v1.png";
import heroArAsset from "@/assets/hero-bg-elements-v2.png";
const heroImg = heroAsset;
const heroArImg = heroArAsset;
import heroBgElementsAsset from "@/assets/hero-bg-elements.png.asset.json";
import { useI18n } from "@/lib/i18n";


export function Hero() {
  const { t, lang } = useI18n();
  const isAr = lang === "ar";
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "25%"]);
  const blobY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-40%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0.2]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden text-ivory grain" style={{ backgroundColor: "#04294C" }}>
      <div
        className="pointer-events-none absolute inset-0 bg-no-repeat bg-right-bottom"
        style={{ backgroundImage: `url(${isAr ? heroArImg : heroImg})`, backgroundSize: "contain" }}
      />





      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto max-w-7xl px-6 pt-44 pb-24 lg:pt-52 lg:pb-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="max-w-4xl "
        >
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ivory/85 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            {t("hero.badge")}
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.02] text-balance">
            {t("hero.title.1")} <span className="italic text-gold text-[#2463eb]">{t("hero.title.highlight")}</span>{" "}
            {t("hero.title.2")}
          </h1>

          <p className="mt-8 text-base md:text-lg text-ivory/75 leading-relaxed">
            {t("hero.subtitle.1")} {t("hero.subtitle.2")}{" "}
            <span className="text-ivory">{t("hero.subtitle.icxi")}</span> {t("hero.subtitle.3")}{" "}
            <span className="text-ivory">{t("hero.subtitle.kotler")}</span> {t("hero.subtitle.4")}
          </p>


          <div className="mt-10 pb-[50px] flex flex-row flex-wrap items-center justify-start gap-4">
              <a
                href="#"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-gold px-7 py-4 text-sm font-medium text-ink shadow-gold hover:shadow-elegant transition-all"
              >
                <span className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.45)_50%,transparent_70%)] bg-[length:200%_100%] bg-[position:200%_0] transition-[background-position] duration-1000 ease-out group-hover:bg-[position:-200%_0]" />
                <Calendar className="relative h-4 w-4" />
                <span className="relative">{t("cta.book")}</span>
                <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
              </a>

            <a
              href="#capabilities"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-4 text-sm font-medium text-ink shadow-[0_0_0_1px_rgba(208,200,178,0.5),0_20px_40px_-20px_rgba(208,200,178,0.45)] hover:shadow-[0_30px_60px_-20px_rgba(208,200,178,0.4)] transition-all"
              style={{ backgroundColor: "#D0C8B2" }}
            >
              <span className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.45)_50%,transparent_70%)] bg-[length:200%_100%] bg-[position:200%_0] transition-[background-position] duration-1000 ease-out group-hover:bg-[position:-200%_0]" />
              <Compass className="relative h-4 w-4" />
              <span className="relative">{t("hero.cta.secondary")}</span>
              <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
