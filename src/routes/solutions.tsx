import { createFileRoute } from "@tanstack/react-router";
import { Solutions } from "@/components/site/Solutions";
import { WhyUs } from "@/components/site/WhyUs";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solar Solutions | Novatussolar" },
      { name: "description", content: "Residential, commercial, industrial, hybrid and pump solar systems." },
      { property: "og:title", content: "Solar Solutions | Novatussolar" },
      { property: "og:description", content: "Residential, commercial, industrial, hybrid and pump solar systems." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-40 pb-6 text-center">
        <h1 className="text-4xl font-semibold text-balance sm:text-6xl">Solar Solutions</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Residential, commercial, industrial, hybrid and pump solar systems.</p>
      </section>
      <Solutions />
      <WhyUs />
      <CtaSection />
    </>
  );
}
