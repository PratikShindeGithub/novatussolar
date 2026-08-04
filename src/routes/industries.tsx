import { createFileRoute } from "@tanstack/react-router";
import { Industries } from "@/components/site/Industries";
import { Projects } from "@/components/site/Projects";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | SolarMax Pune" },
      { name: "description", content: "Factories, schools, hospitals, hotels, IT parks and societies across Pune." },
      { property: "og:title", content: "Industries We Serve | SolarMax Pune" },
      { property: "og:description", content: "Factories, schools, hospitals, hotels, IT parks and societies across Pune." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-40 pb-6 text-center">
        <h1 className="text-4xl font-semibold text-balance sm:text-6xl">Industries We Serve</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Factories, schools, hospitals, hotels, IT parks and societies across Pune.</p>
      </section>
      <Industries />
      <Projects />
      <CtaSection />
    </>
  );
}
