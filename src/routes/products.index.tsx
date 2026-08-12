import { createFileRoute } from "@tanstack/react-router";
import { Products } from "@/components/site/Products";
import { WhyUs } from "@/components/site/WhyUs";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Solar Products | Novatussolar" },
      { name: "description", content: "Buy solar water heaters, evacuated tube collectors, solar panels, flat plate collectors and FPC water heaters from Novatussolar." },
      { property: "og:title", content: "Solar Products | Novatussolar" },
      { property: "og:description", content: "Buy solar water heaters, evacuated tube collectors, solar panels, flat plate collectors and FPC water heaters from Novatussolar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-40 pb-6 text-center">
        <h1 className="text-4xl font-semibold text-balance sm:text-6xl">All Products</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Quality solar water heaters, collectors and panels for residential, commercial and industrial installations across Pune.
        </p>
      </section>
      <Products />
      <WhyUs />
      <CtaSection />
    </>
  );
}
