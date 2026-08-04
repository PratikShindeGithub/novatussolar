import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "@/components/site/Projects";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Solar Project Portfolio | SolarMax Pune" },
      { name: "description", content: "50 MW+ of commissioned rooftop and ground-mount solar across Pune." },
      { property: "og:title", content: "Solar Project Portfolio | SolarMax Pune" },
      { property: "og:description", content: "50 MW+ of commissioned rooftop and ground-mount solar across Pune." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-40 pb-6 text-center">
        <h1 className="text-4xl font-semibold text-balance sm:text-6xl">Solar Project Portfolio</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">50 MW+ of commissioned rooftop and ground-mount solar across Pune.</p>
      </section>
      <Projects />
      <Testimonials />
      <CtaSection />
    </>
  );
}
