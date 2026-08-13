import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { WhyUs } from "@/components/site/WhyUs";
import { Journey } from "@/components/site/Journey";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Novatussolar" },
      { name: "description", content: "Our story, engineering standards, vision, mission and Pune office address." },
      { property: "og:title", content: "About Us | Novatussolar" },
      { property: "og:description", content: "Our story, engineering standards, vision, mission and Pune office address." },
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

      <section id="vision-mission" className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="glass-card rounded-3xl p-8">
            <h2 className="text-3xl font-semibold">Our Vision</h2>
            <p className="mt-4 text-muted-foreground">
              To make clean, reliable solar power the default choice for every home, farm and business in Pune and across Maharashtra — so energy independence becomes the norm, not the exception.
            </p>
          </article>
          <article className="glass-card rounded-3xl p-8">
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <p className="mt-4 text-muted-foreground">
              Design and install grid-tied, off-grid and hybrid solar plants that last 25 years, backed by honest engineering, transparent pricing, subsidy support and lifetime service.
            </p>
          </article>
        </div>
      </section>

      <section id="office-address" className="mx-auto max-w-7xl px-5 py-24">
        <div className="glass-card rounded-3xl p-8 sm:p-12">
          <h2 className="text-center text-3xl font-semibold">Office Address</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div className="space-y-4">
              <p className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="mt-0.5 size-5 text-primary" />
                <span>
                  <strong className="block text-foreground">Novatussolar</strong>
                  Baner Road, Pune, Maharashtra 411045
                </span>
              </p>
              <p className="flex items-center gap-3 text-muted-foreground">
                <Phone className="size-5 text-primary" />
                <a href="tel:+912012345678" className="hover:text-foreground">
                  +91 20 1234 5678
                </a>
              </p>
              <p className="flex items-center gap-3 text-muted-foreground">
                <Mail className="size-5 text-primary" />
                <a href="mailto:hello@novatussolar.com" className="hover:text-foreground">
                  hello@novatussolar.com
                </a>
              </p>
              <p className="flex items-center gap-3 text-muted-foreground">
                <Clock className="size-5 text-primary" />
                <span>Mon – Sat, 9:30 AM – 6:30 PM</span>
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Novatussolar office location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=73.74%2C18.48%2C73.98%2C18.63&layer=mapnik"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <CtaSection />
    </>
  );
}
