import { createFileRoute } from "@tanstack/react-router";
import { SubsidyGuide } from "@/components/site/SubsidyGuide";
import { Faq } from "@/components/site/Faq";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/subsidy")({
  head: () => ({
    meta: [
      { title: "Government Solar Subsidy | Novatussolar" },
      { name: "description", content: "PM Surya Ghar eligibility, documents, timeline and estimated subsidy." },
      { property: "og:title", content: "Government Solar Subsidy | Novatussolar" },
      { property: "og:description", content: "PM Surya Ghar eligibility, documents, timeline and estimated subsidy." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-40 pb-6 text-center">
        <h1 className="text-4xl font-semibold text-balance sm:text-6xl">Government Solar Subsidy</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">PM Surya Ghar eligibility, documents, timeline and estimated subsidy.</p>
      </section>
      <SubsidyGuide />
      <Faq />
      <CtaSection />
    </>
  );
}
