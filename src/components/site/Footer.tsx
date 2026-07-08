import { MessageSquare, Mail, MapPin, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import megaLogo from "@/assets/mega-logo.png";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-ivory/10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-5">
              <img src={megaLogo} alt="MEGA logo" className="h-10 w-auto" />
            </div>
            <p className="text-sm text-ivory/60 leading-relaxed max-w-sm">
              {t("foot.about")}
            </p>
            <div className="mt-8 space-y-3 text-sm text-ivory/70">
              <div className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold" /> {t("foot.address")}</div>
              <div className="flex items-start gap-3"><Mail className="h-4 w-4 mt-0.5 text-gold" /> hello@mega.sa</div>
            </div>
          </div>

          <FooterCol
            title={t("foot.col.cap")}
            items={[t("foot.cap.1"), t("foot.cap.2"), t("foot.cap.3"), t("foot.cap.4"), t("foot.cap.5")]}
          />
          <FooterCol
            title={t("foot.col.auth")}
            items={[t("foot.auth.1"), t("foot.auth.2"), t("foot.auth.3"), t("foot.auth.4"), t("foot.auth.5")]}
          />

          <div className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.25em] text-gold mb-5">{t("foot.news.title")}</div>
            <p className="text-sm text-ivory/60 mb-5 leading-relaxed">{t("foot.news.body")}</p>
            <form className="flex rounded-full border border-ivory/20 overflow-hidden bg-ivory/5 backdrop-blur-sm focus-within:border-gold/50 transition-colors">
              <input type="email" placeholder={t("foot.news.placeholder")} className="flex-1 bg-transparent px-5 py-3 text-sm placeholder:text-ivory/40 focus:outline-none" />
              <button className="pl-4 pr-[26px] bg-gold text-ink hover:bg-gold/90 transition-colors" aria-label="Subscribe"><ArrowRight className="h-4 w-4 rtl:rotate-180" /></button>
            </form>
            <button className="mt-5 inline-flex items-center gap-2 text-xs text-ivory/60 hover:text-gold transition-colors">
              <MessageSquare className="h-3.5 w-3.5" /> {t("foot.assistant")}
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-ivory/45">
          <div>© {new Date().getFullYear()} MEGA. {t("foot.rights")}</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ivory">{t("foot.privacy")}</a>
            <a href="#" className="hover:text-ivory">{t("foot.terms")}</a>
            <a href="#" className="hover:text-ivory">{t("foot.cookies")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="lg:col-span-2">
      <div className="text-[11px] uppercase tracking-[0.25em] text-gold mb-5">{title}</div>
      <ul className="space-y-3 text-sm text-ivory/70">
        {items.map((it) => (
          <li key={it}><a href="#" className="hover:text-ivory transition-colors">{it}</a></li>
        ))}
      </ul>
    </div>
  );
}
