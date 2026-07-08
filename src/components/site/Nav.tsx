import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Languages } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import megaLogo from "@/assets/mega-logo.png";

export function Nav() {
  const { t, toggle, lang } = useI18n();
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="border-b border-foreground/10 bg-emerald-deep/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-2.5 flex items-center justify-between text-xs text-ivory/85">
          <span className="tracking-wide">{t("top.location")}</span>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <span>{t("top.icxi")}</span>
              <span className="opacity-40">|</span>
              <span>{t("top.kotler")}</span>
              <span className="opacity-40">|</span>
              <span>{t("top.vision")}</span>
              <span className="opacity-40">|</span>
            </div>
            <button
              type="button"
              onClick={toggle}
              aria-label="Change language"
              className="inline-flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <Languages className="h-3.5 w-3.5" />
              <span>{t("top.lang")}</span>
            </button>
          </div>
        </div>
      </div>
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" aria-label="MEGA home">
          <img src={megaLogo} alt="MEGA logo" className="h-10 w-auto" />
        </Link>
        <div className="hidden lg:flex items-center gap-3 text-sm">
          <Link to="/capabilities" className="inline-flex items-center gap-2 rounded-full bg-ivory/[0.06] border border-ivory/10 px-5 py-2 text-ivory/70 hover:text-ivory hover:bg-ink/50 hover:border-gold/30 transition-all">{t("nav.capabilities")}</Link>
          <a href="#partnerships" className="inline-flex items-center gap-2 rounded-full bg-ivory/[0.06] border border-ivory/10 px-5 py-2 text-ivory/70 hover:text-ivory hover:bg-ink/50 hover:border-gold/30 transition-all">{t("nav.partnerships")}</a>
          <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-ivory/[0.06] border border-ivory/10 px-5 py-2 text-ivory/70 hover:text-ivory hover:bg-ink/50 hover:border-gold/30 transition-all">About Us</Link>
          <a href="#insights" className="inline-flex items-center gap-2 rounded-full bg-ivory/[0.06] border border-ivory/10 px-5 py-2 text-ivory/70 hover:text-ivory hover:bg-ink/50 hover:border-gold/30 transition-all">{t("nav.insights")}</a>
    
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#D1CBBA] px-5 py-2.5 text-sm text-ink hover:bg-[#C5BFAD] transition-all shadow-soft"
          >
            {t("nav.cta")}
            <ArrowUpRight className={`h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${lang === "ar" ? "rotate-[-90deg]" : ""}`} />
          </a>
        </div>
      </nav>
    </header>
  );
}
