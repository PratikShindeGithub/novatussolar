import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, SunMedium } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { SolarButton } from "./SolarButton";

const groups = [
  {
    title: "Quick Links",
    items: [
      { label: "About Us", to: "/about" },
      { label: "Projects", to: "/projects" },
      { label: "Blog", to: "/blog" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Residential Rooftop", to: "/solutions" },
      { label: "Commercial Solar", to: "/solutions" },
      { label: "Industrial Plants", to: "/solutions" },
      { label: "Solar AMC & Cleaning", to: "/solutions" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Savings Calculator", to: "/calculator" },
      { label: "Government Subsidy", to: "/subsidy" },
      { label: "Industries Served", to: "/industries" },
      { label: "Free Site Inspection", to: "/contact" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-10 place-items-center rounded-2xl bg-primary text-primary-foreground">
              <SunMedium className="size-5" />
            </span>
            <span className="font-display text-lg font-semibold">Novatussolar</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Powering Pune with smart solar energy — MNRE-standard rooftop, commercial and industrial
            solar plants with 25-year performance warranty.
          </p>
          <form
            className="mt-6 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Subscribed! Solar tips are on the way.");
              (e.currentTarget as HTMLFormElement).reset();
            }}
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <Input
              id="newsletter-email"
              name="email"
              type="email"
              required
              placeholder="you@email.com"
              className="h-11 rounded-full bg-card"
            />
            <SolarButton type="submit" magnetic={false}>
              Join
            </SolarButton>
          </form>
        </div>

        {groups.map((g) => (
          <div key={g.title}>
            <h3 className="text-sm font-semibold tracking-widest uppercase">{g.title}</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {g.items.map((i) => (
                <li key={i.label}>
                  <Link to={i.to} className="transition-colors hover:text-foreground">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 border-t border-border px-5 py-10 lg:grid-cols-2">
        <div className="space-y-3 text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            <MapPin className="size-4 text-primary" /> Baner Road, Pune, Maharashtra 411045
          </p>
          <p className="flex items-center gap-2">
            <Phone className="size-4 text-primary" />
            <a href="tel:+912012345678" className="hover:text-foreground">
              +91 20 1234 5678
            </a>
          </p>
          <p className="flex items-center gap-2">
            <Mail className="size-4 text-primary" />
            <a href="mailto:hello@novatussolar.com" className="hover:text-foreground">
              hello@novatussolar.com
            </a>
          </p>
          <div className="flex gap-3 pt-2">
            {[Linkedin, Instagram, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social profile"
                className="grid size-10 place-items-center rounded-full border border-border bg-card transition-colors hover:bg-secondary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-border">
          <iframe
            title="Novatussolar office location map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=73.74%2C18.48%2C73.98%2C18.63&layer=mapnik"
            className="h-56 w-full"
            loading="lazy"
          />
        </div>
      </div>
      <p className="border-t border-border px-5 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Novatussolar. All rights reserved.
      </p>
    </footer>
  );
}