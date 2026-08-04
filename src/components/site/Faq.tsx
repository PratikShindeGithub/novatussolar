import { useState } from "react";
import { Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "./Reveal";

const faqs = [
  {
    q: "How much roof area do I need for solar?",
    a: "Roughly 80-100 sq.ft of shadow-free roof per kW. A typical 3 kW home system needs about 300 sq.ft.",
  },
  {
    q: "How much can I save on my electricity bill?",
    a: "Most Pune households with net metering cut 80-90% of their bill. Commercial users on higher tariffs often save more.",
  },
  {
    q: "What is net metering and who approves it?",
    a: "MSEDCL installs a bi-directional meter so exported units offset imported units. We file the application on your behalf.",
  },
  {
    q: "What maintenance does a solar plant need?",
    a: "Cleaning every 15-30 days in dusty seasons plus an annual electrical check. Our AMC covers both with thermography.",
  },
  {
    q: "Does solar work during Pune monsoon?",
    a: "Yes, at reduced output. Our sizing assumes 4.2 peak sun hours annually averaged, so monsoon dips are already factored in.",
  },
  {
    q: "What warranty do I get?",
    a: "25-year module performance warranty, 10-year product warranty and 5-10 years on inverters depending on brand.",
  },
];

export function Faq() {
  const [query, setQuery] = useState("");
  const filtered = faqs.filter((f) =>
    (f.q + f.a).toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <section className="mx-auto max-w-3xl px-5 py-24">
      <SectionHeading eyebrow="FAQ" title="Answers before you ask" />
      <div className="relative mt-10">
        <Search className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
        <label className="sr-only" htmlFor="faq-search">
          Search FAQs
        </label>
        <Input
          id="faq-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search questions…"
          className="h-12 rounded-full bg-card pl-11"
        />
      </div>

      <Accordion type="single" collapsible className="mt-8 space-y-3">
        {filtered.map((f) => (
          <AccordionItem
            key={f.q}
            value={f.q}
            className="glass-card rounded-2xl border px-5 last:border-b"
          >
            <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {filtered.length === 0 ? (
        <p className="mt-6 text-center text-sm text-muted-foreground">
          No matches. Call us on +91 20 1234 5678 and we'll answer directly.
        </p>
      ) : null}
    </section>
  );
}