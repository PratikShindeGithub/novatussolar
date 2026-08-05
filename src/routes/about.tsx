import { createFileRoute } from "@tanstack/react-router";
import { WhyUs } from "@/components/site/WhyUs";
import { Journey } from "@/components/site/Journey";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Novatussolar | Novatussolar" },
      { name: "description", content: "Our story, engineering standards and Pune-first solar mission." },
      { property: "og:title", content: "About Novatussolar | Novatussolar" },
      { property: "og:description", content: "Our story, engineering standards and Pune-first solar mission." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-40 pb-6 text-center">
        <h1 className="text-4xl font-semibold text-balance sm:text-6xl">About Novatussolar</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Our story, engineering standards and Pune-first solar mission.</p>
      </section>
      <WhyUs />
      <Journey />
      <Testimonials />
      <CtaSection />
    </>
  );
}
