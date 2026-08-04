import { createFileRoute } from "@tanstack/react-router";
import { SavingsCalculator } from "@/components/site/SavingsCalculator";
import { EmiCalculator } from "@/components/site/EmiCalculator";
import { LiveDashboard } from "@/components/site/LiveDashboard";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/calculator")({
  head: () => ({
    meta: [
      { title: "Solar Savings Calculator | SolarMax Pune" },
      { name: "description", content: "Estimate system size, savings, payback, EMI and CO2 reduction instantly." },
      { property: "og:title", content: "Solar Savings Calculator | SolarMax Pune" },
      { property: "og:description", content: "Estimate system size, savings, payback, EMI and CO2 reduction instantly." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-40 pb-6 text-center">
        <h1 className="text-4xl font-semibold text-balance sm:text-6xl">Solar Savings Calculator</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Estimate system size, savings, payback, EMI and CO2 reduction instantly.</p>
      </section>
      <SavingsCalculator />
      <EmiCalculator />
      <LiveDashboard />
      <CtaSection />
    </>
  );
}
