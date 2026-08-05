import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/site/ContactForm";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Free Site Visit | Novatussolar" },
      {
        name: "description",
        content:
          "Book a free solar site inspection in Pune. Call +91 20 1234 5678 or send us your roof details for a same-week visit.",
      },
      { property: "og:title", content: "Contact & Free Site Visit | Novatussolar" },
      {
        property: "og:description",
        content: "Book a free solar site inspection anywhere in Pune.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pt-40 pb-16 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-semibold text-balance sm:text-5xl">
            Book your free solar site visit
          </h1>
          <p className="mt-4 text-muted-foreground">
            Share a few details and a Novatussolar advisor will call you within 24 hours with a
            preliminary system size and savings estimate.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
            <li>Baner Road, Pune, Maharashtra 411045</li>
            <li>+91 20 1234 5678 · hello@novatussolar.com</li>
            <li>Mon–Sat, 9:30 AM – 7:00 PM</li>
          </ul>
        </div>
        <ContactForm />
      </section>
      <CtaSection />
    </>
  );
}