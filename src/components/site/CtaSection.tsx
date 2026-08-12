import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { SolarButton } from "./SolarButton";
import { Reveal } from "./Reveal";

export function CtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-5">
      <Reveal>
        <div className="gradient-hero relative overflow-hidden rounded-[2.5rem] px-8 py-20 text-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,214,102,0.35),transparent_50%)]" />
          <h2 className="relative text-3xl font-semibold text-balance text-white sm:text-5xl">
            Start Saving on Electricity Today
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/85">
            Free site visit, transparent proposal and complete subsidy support anywhere in Pune.
          </p>
          <div className="relative mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <SolarButton size="lg">
                Book Free Site Visit
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </SolarButton>
            </Link>
            <Link to="/calculator">
              <SolarButton size="lg" variant="ghostLight">
                Get Free Quote
              </SolarButton>
            </Link>
            <a href="tel:+912012345678">
              <SolarButton size="lg" variant="ghostLight">
                <Phone className="size-4" /> Call Now
              </SolarButton>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}