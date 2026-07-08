import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Quote } from "@/components/site/Quote";
import { Authority } from "@/components/site/Authority";
import { AIHook } from "@/components/site/AIHook";
import { Capabilities } from "@/components/site/Capabilities";
import { Partnerships } from "@/components/site/Partnerships";
import { Impact } from "@/components/site/Impact";
import { Insights } from "@/components/site/Insights";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { I18nProvider } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MEGA — Saudi Arabia's Specialist Authority in AI-Led Growth & CX" },
      { name: "description", content: "Exclusive Gulf (ex-UAE) partner of ICXI and official Kotler Business School partner in KSA. Strategy, customer experience, and AI execution for Vision 2030 organizations." },
      { property: "og:title", content: "MEGA — AI-Led Growth & Customer Experience, Saudi Arabia" },
      { property: "og:description", content: "Transformation programs tied to revenue, efficiency, and national priorities." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <main className="min-h-screen">
        <Nav />
        <Hero />
        <Authority />
        <AIHook />
        <Capabilities />
        <Partnerships />
        <Quote />
        <Impact />
        <Insights />
        <CTA />
        <Footer />
      </main>
    </I18nProvider>
  );
}
