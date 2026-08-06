import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeading } from "./Reveal";

const steps = [
  {
    q: "Eligibility",
    a: "Any residential consumer in Maharashtra with a sanctioned MSEDCL connection, clear roof ownership and 100+ sq.ft of shadow-free roof per kW qualifies under PM Surya Ghar.",
  },
  {
    q: "Required Documents",
    a: "Aadhaar, latest electricity bill, property tax receipt or society NOC, cancelled cheque and a passport photo. We compile and upload everything for you.",
  },
  {
    q: "Application Process",
    a: "Portal registration, feasibility approval, installation by a registered vendor, net-meter application, inspection, then subsidy credited to your bank account.",
  },
  {
    q: "Timeline",
    a: "Feasibility in 5-7 days, installation in 7-10 days, net metering in 15-20 days and subsidy disbursal typically within 30 days of commissioning.",
  },
  {
    q: "Estimated Subsidy",
    a: "Rs 30,000 for 1 kW, Rs 60,000 for 2 kW and Rs 78,000 for 3 kW and above for residential rooftops. Housing societies get Rs 18,000 per kW for common facilities.",
  },
];

export function SubsidyGuide() {
  const [kw, setKw] = useState(3);
  const [owns, setOwns] = useState(true);
  const subsidy = !owns ? 0 : kw <= 1 ? 30000 : kw === 2 ? 60000 : 78000;

  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Government Subsidy"
            title="PM Surya Ghar, Handled End to End"
            subtitle="We register, file and follow up so your subsidy lands without a single portal visit."
          />
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="mt-8 space-y-3">
              {steps.map((s) => (
                <AccordionItem
                  key={s.q}
                  value={s.q}
                  className="glass-card rounded-2xl border px-5 last:border-b"
                >
                  <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                    {s.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {s.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="glass-card sticky top-28 rounded-[2rem] p-8">
            <h3 className="text-xl font-semibold">Subsidy Eligibility Checker</h3>
            <p className="mt-2 text-sm text-muted-foreground">Two questions, instant estimate.</p>

            <fieldset className="mt-6">
              <legend className="text-sm font-semibold">System size you need</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {[1, 2, 3, 5, 10].map((v) => (
                  <button
                    key={v}
                    type="button"
                    aria-pressed={kw === v}
                    onClick={() => setKw(v)}
                    className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                      kw === v
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card hover:bg-secondary"
                    }`}
                  >
                    {v} kW
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-6">
              <legend className="text-sm font-semibold">Do you own the roof?</legend>
              <div className="mt-3 flex gap-2">
                {[true, false].map((v) => (
                  <button
                    key={String(v)}
                    type="button"
                    aria-pressed={owns === v}
                    onClick={() => setOwns(v)}
                    className={`rounded-full border px-5 py-2 text-sm transition-colors ${
                      owns === v
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card hover:bg-secondary"
                    }`}
                  >
                    {v ? "Yes" : "No"}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-8 rounded-3xl bg-primary p-6 text-primary-foreground">
              <p className="text-sm opacity-80">Estimated central subsidy</p>
              <p className="mt-1 font-display text-4xl font-semibold">
                ₹{subsidy.toLocaleString("en-IN")}
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm opacity-90">
                <CheckCircle2 className="size-4" />
                {owns
                  ? "You are eligible under PM Surya Ghar."
                  : "Roof ownership or a society NOC is required."}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}