import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

type Dict = Record<string, string | string[] | Record<string, string>[]>;

const en: Dict = {
  // Top bar
  "top.location": "Riyadh · Saudi Arabia",
  "top.icxi": "ICXI Gulf Partner",
  "top.kotler": "Kotler KSA Partner",
  "top.vision": "Vision 2030",
  "top.lang": "العربية",

  // Nav
  "nav.tagline": "Strategy · CX · AI",
  "nav.capabilities": "Capabilities",
  "nav.partnerships": "Partnerships",
  "nav.impact": "About Us",
  "nav.insights": "Insights",
  "nav.cta": "Strategy Sync",

  // Hero
  "hero.badge": "Specialist Authority · Riyadh",
  "hero.title.1": "Saudi Arabia's specialist authority in",
  "hero.title.highlight": "AI-led growth",
  "hero.title.2": "& customer experience.",
  "hero.subtitle.1": "The exclusive Gulf",
  "hero.subtitle.2": "partner of",
  "hero.subtitle.icxi": "ICXI",
  "hero.subtitle.3": "and the official",
  "hero.subtitle.kotler": "Kotler Business School",
  "hero.subtitle.4": "partner in KSA — helping organizations transform strategy into measurable growth.",
  "hero.cta.primary": "Book a 15-Min Strategy Sync",
  "hero.cta.secondary": "Explore Our Capabilities",
  "hero.trusted": "Trusted by government entities, national champions & growth-stage enterprises",
  "hero.badge.icxi.sub": "Exclusive Gulf Partner",
  "hero.badge.kotler.sub": "KSA Partner",
  "hero.badge.vision.sub": "Aligned engagements",
  "hero.scroll": "Scroll",

  // Authority
  "auth.kicker": "Authority Snapshot",
  "auth.title.1": "Built for decision-makers who need",
  "auth.title.highlight": "outcomes",
  "auth.title.2": "not presentations.",
  "auth.body.1": "MEGA operates at the intersection of",
  "auth.body.strategy": "strategy",
  "auth.body.2": ",",
  "auth.body.cx": "customer experience",
  "auth.body.3": ", and",
  "auth.body.ai": "AI execution",
  "auth.body.4": ". We don't deliver reports — we deliver transformation programs tied to revenue, efficiency, and national priorities.",
  "auth.point.1": "Exclusive ICXI certification authority in the Gulf (ex-UAE)",
  "auth.point.2": "Exclusive Kotler Business School partner in Saudi Arabia",
  "auth.point.3": "AI-embedded consulting across all service lines",

  // AI Hook
  "ai.badge": "MEGA AI · Interactive",
  "ai.title.1": "Where does your customer experience",
  "ai.title.highlight": "maturity",
  "ai.title.2": "stand?",
  "ai.body": "Use MEGA AI to assess your organization's CX maturity in under 3 minutes — and receive a strategic roadmap aligned with Saudi market benchmarks.",
  "ai.cta": "Start CX Maturity Assessment",
  "ai.note": "Instant insights · No generic outputs · Built for Saudi organizations",

  // Capabilities
  "cap.kicker": "Capabilities",
  "cap.title.1": "Five specialized capabilities.",
  "cap.title.highlight": "One integrated",
  "cap.title.2": "growth engine.",
  "cap.outcome": "Outcome",
  "cap.explore.title": "Explore all services",
  "cap.explore.cta": "See full capability map",
  "cap.1.title": "Customer Experience Transformation",
  "cap.1.body": "Design and operationalize end-to-end customer journeys aligned with Vision 2030 expectations.",
  "cap.1.outcome": "Increased retention, satisfaction, and lifetime value",
  "cap.2.title": "AI-Embedded Strategy",
  "cap.2.body": "Integrate AI into decision-making, operations, and customer engagement — not as a tool, but as a capability.",
  "cap.2.outcome": "Scalable efficiency and competitive advantage",
  "cap.3.title": "Marketing & Growth Strategy",
  "cap.3.body": "Data-driven growth frameworks rooted in Kotler principles and localized for Saudi markets.",
  "cap.3.outcome": "Measurable pipeline and market share expansion",
  "cap.4.title": "Capability Building & Certification",
  "cap.4.body": "Develop internal CX leaders through globally recognized ICXI certification programs.",
  "cap.4.outcome": "Sustainable, in-house transformation capability",
  "cap.5.title": "Executive Education (Kotler)",
  "cap.5.body": "Equip leadership teams with modern marketing and strategy frameworks.",
  "cap.5.outcome": "Faster, more aligned executive decision-making",

  // Partnerships
  "part.kicker": "Strategic Partnerships",
  "part.title.1": "Exclusive partnerships that",
  "part.title.highlight": "define",
  "part.title.2": "our authority.",
  "part.icxi.tag": "ICXI · Exclusive Gulf (ex-UAE) Partner",
  "part.icxi.title": "International Customer Experience Institute",
  "part.icxi.body": "As the exclusive ICXI partner in the Gulf (ex-UAE), MEGA delivers globally recognized CX certifications and frameworks tailored to regional transformation priorities.",
  "part.icxi.s1.v": "Gulf-wide",
  "part.icxi.s1.l": "Certification Authority",
  "part.icxi.s2.v": "ex-UAE",
  "part.icxi.s2.l": "Exclusive Territory",
  "part.kotler.tag": "Kotler Business School · KSA Partner",
  "part.kotler.title": "The discipline of modern marketing",
  "part.kotler.body": "As the official Kotler Business School partner in KSA, MEGA brings world-class marketing strategy education to Saudi executives.",
  "part.kotler.s1.v": "KSA",
  "part.kotler.s1.l": "Official Partner",
  "part.kotler.s2.v": "Executive",
  "part.kotler.s2.l": "Programs & Certification",

  // Impact
  "impact.kicker": "Case Impact",
  "impact.title.1": "Transformation,",
  "impact.title.highlight": "measured",
  "impact.title.2": ".",
  "impact.viewCases": "View case studies",
  "impact.1.sector": "Public Sector Entity",
  "impact.1.title": "Redesigned citizen experience across 12 touchpoints",
  "impact.1.m1.l": "Satisfaction scores",
  "impact.1.m2.l": "Service delivery time",
  "impact.2.sector": "Enterprise Organization",
  "impact.2.title": "Implemented AI-driven CX optimization",
  "impact.2.m1.l": "Conversion rates",
  "impact.2.m2.l": "Customer insights accuracy",

  // Insights
  "ins.kicker": "Insights",
  "ins.title.1": "Insights for Saudi's",
  "ins.title.highlight": "next phase",
  "ins.title.2": "of growth.",
  "ins.exploreAll": "Explore all insights",
  "ins.1.tag": "Vision 2030",
  "ins.1.title": "CX benchmarks reshaping Saudi government services",
  "ins.1.read": "8 min read",
  "ins.2.tag": "AI · Public Sector",
  "ins.2.title": "How AI is rewriting the operating model of citizen services",
  "ins.2.read": "12 min read",
  "ins.3.tag": "Framework",
  "ins.3.title": "The MEGA Customer Experience Maturity Model",
  "ins.3.read": "10 min read",

  // CTA
  "cta.kicker": "Final Step",
  "cta.title.1": "Start with a",
  "cta.title.highlight": "strategic conversation",
  "cta.title.2": ".",
  "cta.body": "In 15 minutes, we'll identify where your organization stands — and where it can go next.",
  "cta.book": "Book Your Strategy Sync",

  // Footer
  "foot.about": "Saudi Arabia's specialist authority in AI-led growth and customer experience. Exclusive partner of ICXI and Kotler Business School.",
  "foot.address": "Riyadh, Kingdom of Saudi Arabia",
  "foot.col.cap": "Capabilities",
  "foot.col.auth": "Authority",
  "foot.cap.1": "CX Transformation",
  "foot.cap.2": "AI-Embedded Strategy",
  "foot.cap.3": "Marketing & Growth",
  "foot.cap.4": "ICXI Certification",
  "foot.cap.5": "Kotler Programs",
  "foot.auth.1": "About MEGA",
  "foot.auth.2": "ICXI Partnership",
  "foot.auth.3": "Kotler Partnership",
  "foot.auth.4": "Vision 2030",
  "foot.auth.5": "Insights",
  "foot.news.title": "Insight Newsletter",
  "foot.news.body": "Quarterly briefings on Saudi CX, AI, and growth — written for executives.",
  "foot.news.placeholder": "executive@company.sa",
  "foot.assistant": "Open MEGA AI Assistant",
  "foot.rights": "All rights reserved.",
  "foot.privacy": "Privacy",
  "foot.terms": "Terms",
  "foot.cookies": "Cookies",

  // Quote
  "quote.text": "The strength of the Saudis is like that of the Tuwaiq mountain, unbreakable, unless this mountain is leveled and equaled to the ground.",
  "quote.attribution.title": "Crown Prince",
  "quote.attribution.name": "Mohammed bin Salman",
};

const ar: Dict = {
  // Top bar
  "top.location": "الرياض · المملكة العربية السعودية",
  "top.icxi": "شريك ICXI لمنطقة الخليج",
  "top.kotler": "شريك كوتلر في المملكة",
  "top.vision": "رؤية 2030",
  "top.lang": "English",

  // Nav
  "nav.tagline": "استراتيجية · تجربة عملاء · ذكاء اصطناعي",
  "nav.capabilities": "قدراتنا",
  "nav.partnerships": "الشراكات",
  "nav.impact": "من نحن",
  "nav.insights": "رؤى",
  "nav.cta": "جلسة استراتيجية",

  // Hero
  "hero.badge": "مرجع متخصص · الرياض",
  "hero.title.1": "المرجع المتخصص في المملكة العربية السعودية في",
  "hero.title.highlight": "النمو المعزز بالذكاء الاصطناعي",
  "hero.title.2": "وتجربة العملاء.",
  "hero.subtitle.1": "الشريك الحصري في الخليج",
  "hero.subtitle.2": "لمؤسسة",
  "hero.subtitle.icxi": "ICXI",
  "hero.subtitle.3": "والشريك الرسمي لـ",
  "hero.subtitle.kotler": "كلية كوتلر لإدارة الأعمال",
  "hero.subtitle.4": "في المملكة — نساعد المؤسسات على تحويل الاستراتيجية إلى نمو قابل للقياس.",
  "hero.cta.primary": "احجز جلسة استراتيجية لمدة 15 دقيقة",
  "hero.cta.secondary": "استكشف قدراتنا",
  "hero.trusted": "موثوق به من قبل الجهات الحكومية والشركات الوطنية الرائدة ومؤسسات النمو",
  "hero.badge.icxi.sub": "الشريك الحصري للخليج",
  "hero.badge.kotler.sub": "شريك المملكة",
  "hero.badge.vision.sub": "مشاريع متوافقة",
  "hero.scroll": "تمرير",

  // Authority
  "auth.kicker": "لمحة عن المرجعية",
  "auth.title.1": "مصمم لصناع القرار الذين يحتاجون إلى",
  "auth.title.highlight": "نتائج",
  "auth.title.2": "لا عروض تقديمية.",
  "auth.body.1": "تعمل MEGA عند تقاطع",
  "auth.body.strategy": "الاستراتيجية",
  "auth.body.2": "،",
  "auth.body.cx": "تجربة العملاء",
  "auth.body.3": "، و",
  "auth.body.ai": "تطبيق الذكاء الاصطناعي",
  "auth.body.4": ". نحن لا نقدم تقارير — نقدم برامج تحول مرتبطة بالإيرادات والكفاءة والأولويات الوطنية.",
  "auth.point.1": "الجهة الحصرية لاعتمادات ICXI في الخليج (باستثناء الإمارات)",
  "auth.point.2": "الشريك الحصري لكلية كوتلر لإدارة الأعمال في المملكة",
  "auth.point.3": "استشارات معززة بالذكاء الاصطناعي عبر جميع خطوط الخدمة",

  // AI Hook
  "ai.badge": "MEGA AI · تفاعلي",
  "ai.title.1": "أين يقف",
  "ai.title.highlight": "نضج",
  "ai.title.2": "تجربة العملاء في مؤسستك؟",
  "ai.body": "استخدم MEGA AI لتقييم نضج تجربة العملاء في مؤسستك في أقل من 3 دقائق — واحصل على خارطة طريق استراتيجية متوافقة مع معايير السوق السعودي.",
  "ai.cta": "ابدأ تقييم نضج تجربة العملاء",
  "ai.note": "رؤى فورية · بدون مخرجات عامة · مصمم للمؤسسات السعودية",

  // Capabilities
  "cap.kicker": "القدرات",
  "cap.title.1": "خمس قدرات متخصصة.",
  "cap.title.highlight": "محرك نمو",
  "cap.title.2": "متكامل واحد.",
  "cap.outcome": "النتيجة",
  "cap.explore.title": "استكشف كل الخدمات",
  "cap.explore.cta": "عرض خريطة القدرات الكاملة",
  "cap.1.title": "تحويل تجربة العملاء",
  "cap.1.body": "تصميم وتفعيل رحلات العملاء الشاملة بما يتوافق مع تطلعات رؤية 2030.",
  "cap.1.outcome": "زيادة الاحتفاظ والرضا والقيمة الدائمة",
  "cap.2.title": "استراتيجية معززة بالذكاء الاصطناعي",
  "cap.2.body": "دمج الذكاء الاصطناعي في اتخاذ القرار والعمليات وتفاعل العملاء — كقدرة وليس مجرد أداة.",
  "cap.2.outcome": "كفاءة قابلة للتوسع وميزة تنافسية",
  "cap.3.title": "استراتيجية التسويق والنمو",
  "cap.3.body": "أطر نمو قائمة على البيانات ومستوحاة من مبادئ كوتلر ومحلية للسوق السعودي.",
  "cap.3.outcome": "توسيع قابل للقياس في خط الأنابيب وحصة السوق",
  "cap.4.title": "بناء القدرات والاعتماد",
  "cap.4.body": "تطوير قادة تجربة العملاء داخلياً عبر برامج اعتماد ICXI المعترف بها عالمياً.",
  "cap.4.outcome": "قدرة تحول داخلية مستدامة",
  "cap.5.title": "التعليم التنفيذي (كوتلر)",
  "cap.5.body": "تزويد فرق القيادة بأطر تسويق واستراتيجية حديثة.",
  "cap.5.outcome": "قرارات تنفيذية أسرع وأكثر توافقاً",

  // Partnerships
  "part.kicker": "شراكات استراتيجية",
  "part.title.1": "شراكات حصرية",
  "part.title.highlight": "تحدد",
  "part.title.2": "مرجعيتنا.",
  "part.icxi.tag": "ICXI · الشريك الحصري للخليج (باستثناء الإمارات)",
  "part.icxi.title": "المعهد الدولي لتجربة العملاء",
  "part.icxi.body": "بصفتنا الشريك الحصري لـ ICXI في الخليج (باستثناء الإمارات)، تقدم MEGA اعتمادات وأطر تجربة عملاء معترف بها عالمياً ومصممة لأولويات التحول الإقليمية.",
  "part.icxi.s1.v": "الخليج",
  "part.icxi.s1.l": "جهة الاعتماد",
  "part.icxi.s2.v": "ما عدا الإمارات",
  "part.icxi.s2.l": "نطاق حصري",
  "part.kotler.tag": "كلية كوتلر · شريك المملكة",
  "part.kotler.title": "علم التسويق الحديث",
  "part.kotler.body": "بصفتنا الشريك الرسمي لكلية كوتلر لإدارة الأعمال في المملكة، تقدم MEGA تعليم استراتيجية تسويق على مستوى عالمي للقيادات السعودية.",
  "part.kotler.s1.v": "المملكة",
  "part.kotler.s1.l": "شريك رسمي",
  "part.kotler.s2.v": "تنفيذي",
  "part.kotler.s2.l": "برامج واعتمادات",

  // Impact
  "impact.kicker": "أثر الحالات",
  "impact.title.1": "التحول،",
  "impact.title.highlight": "بأرقام قابلة للقياس",
  "impact.title.2": ".",
  "impact.viewCases": "عرض دراسات الحالة",
  "impact.1.sector": "جهة في القطاع العام",
  "impact.1.title": "إعادة تصميم تجربة المواطن عبر 12 نقطة تواصل",
  "impact.1.m1.l": "مؤشرات الرضا",
  "impact.1.m2.l": "زمن تقديم الخدمة",
  "impact.2.sector": "مؤسسة عملاقة",
  "impact.2.title": "تطبيق تحسين تجربة العملاء بالذكاء الاصطناعي",
  "impact.2.m1.l": "معدلات التحويل",
  "impact.2.m2.l": "دقة رؤى العملاء",

  // Insights
  "ins.kicker": "رؤى",
  "ins.title.1": "رؤى للمرحلة",
  "ins.title.highlight": "القادمة",
  "ins.title.2": "من نمو المملكة.",
  "ins.exploreAll": "استكشف كل الرؤى",
  "ins.1.tag": "رؤية 2030",
  "ins.1.title": "معايير تجربة العملاء التي تعيد تشكيل الخدمات الحكومية السعودية",
  "ins.1.read": "قراءة 8 دقائق",
  "ins.2.tag": "ذكاء اصطناعي · القطاع العام",
  "ins.2.title": "كيف يعيد الذكاء الاصطناعي صياغة نموذج تشغيل خدمات المواطنين",
  "ins.2.read": "قراءة 12 دقيقة",
  "ins.3.tag": "إطار عمل",
  "ins.3.title": "نموذج MEGA لنضج تجربة العملاء",
  "ins.3.read": "قراءة 10 دقائق",

  // CTA
  "cta.kicker": "الخطوة الأخيرة",
  "cta.title.1": "ابدأ بـ",
  "cta.title.highlight": "محادثة استراتيجية",
  "cta.title.2": ".",
  "cta.body": "في 15 دقيقة، سنحدد أين تقف مؤسستك — وإلى أين يمكنها الوصول.",
  "cta.book": "احجز جلستك الاستراتيجية",

  // Footer
  "foot.about": "المرجع المتخصص في المملكة العربية السعودية للنمو المعزز بالذكاء الاصطناعي وتجربة العملاء. الشريك الحصري لـ ICXI وكلية كوتلر لإدارة الأعمال.",
  "foot.address": "الرياض، المملكة العربية السعودية",
  "foot.col.cap": "القدرات",
  "foot.col.auth": "المرجعية",
  "foot.cap.1": "تحويل تجربة العملاء",
  "foot.cap.2": "استراتيجية معززة بالذكاء الاصطناعي",
  "foot.cap.3": "التسويق والنمو",
  "foot.cap.4": "اعتماد ICXI",
  "foot.cap.5": "برامج كوتلر",
  "foot.auth.1": "عن MEGA",
  "foot.auth.2": "شراكة ICXI",
  "foot.auth.3": "شراكة كوتلر",
  "foot.auth.4": "رؤية 2030",
  "foot.auth.5": "رؤى",
  "foot.news.title": "نشرة الرؤى",
  "foot.news.body": "نشرات ربع سنوية حول تجربة العملاء والذكاء الاصطناعي والنمو في المملكة — مكتوبة للقيادات.",
  "foot.news.placeholder": "executive@company.sa",
  "foot.assistant": "افتح مساعد MEGA AI",
  "foot.rights": "جميع الحقوق محفوظة.",
  "foot.privacy": "الخصوصية",
  "foot.terms": "الشروط",
  "foot.cookies": "ملفات الارتباط",

  // Quote
  "quote.text": "The strength of the Saudis is like that of the Tuwaiq mountain, unbreakable, unless this mountain is leveled and equaled to the ground.",
  "quote.attribution.title": "ولي العهد",
  "quote.attribution.name": "محمد بن سلمان",
};

const dictionaries: Record<Lang, Dict> = { en, ar };

type I18nCtx = {
  lang: Lang;
  dir: "ltr" | "rtl";
  t: (key: string) => string;
  setLang: (l: Lang) => void;
  toggle: () => void;
};

const Ctx = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = (localStorage.getItem("lang") as Lang | null) ?? "en";
    setLangState(saved);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    if (typeof localStorage !== "undefined") localStorage.setItem("lang", lang);
  }, [lang]);

  const value = useMemo<I18nCtx>(
    () => ({
      lang,
      dir: lang === "ar" ? "rtl" : "ltr",
      t: (key: string) => {
        const v = dictionaries[lang][key];
        if (typeof v === "string") return v;
        const fallback = dictionaries.en[key];
        return typeof fallback === "string" ? fallback : key;
      },
      setLang: (l: Lang) => setLangState(l),
      toggle: () => setLangState((p) => (p === "en" ? "ar" : "en")),
    }),
    [lang],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
