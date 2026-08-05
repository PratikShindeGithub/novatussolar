import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { WhyUs } from "@/components/site/WhyUs";
import { Solutions } from "@/components/site/Solutions";
import { Products } from "@/components/site/Products";
import { SavingsCalculator } from "@/components/site/SavingsCalculator";
import { Journey } from "@/components/site/Journey";
import { Industries } from "@/components/site/Industries";
import { Projects } from "@/components/site/Projects";
import { LiveDashboard } from "@/components/site/LiveDashboard";
import { SubsidyGuide } from "@/components/site/SubsidyGuide";
import { EmiCalculator } from "@/components/site/EmiCalculator";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Novatussolar | Rooftop & Industrial Solar Energy" },
      {
        name: "description",
        content:
          "Cut electricity bills by up to 90% with Novatussolar — rooftop, commercial and industrial solar plants with subsidy support and 25-year warranty.",
      },
      { property: "og:title", content: "Novatussolar | Rooftop & Industrial Solar Energy" },
      {
        property: "og:description",
        content: "Cut electricity bills by up to 90% with Novatussolar — rooftop, commercial and industrial solar plants with subsidy support and 25-year warranty.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyUs />
      <Solutions />
      <Products />
      <SavingsCalculator />
      <Journey />
      <Industries />
      <Projects />
      <LiveDashboard />
      <SubsidyGuide />
      <EmiCalculator />
      <Testimonials />
      <Faq />
      <CtaSection />
    </>
  );
}
