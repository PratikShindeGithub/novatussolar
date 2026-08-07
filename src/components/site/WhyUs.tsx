import {
  Award,
  BadgeCheck,
  Cpu,
  Gauge,
  HandCoins,
  Headphones,
  ShieldCheck,
  Timer,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const items = [
  { icon: Award, title: "Certified Engineers", text: "In-house MNRE-trained design & install team." },
  { icon: BadgeCheck, title: "MNRE Standards", text: "Every plant built to national safety codes." },
  { icon: Cpu, title: "Premium Panels", text: "Tier-1 mono PERC & TOPCon modules only." },
  { icon: ShieldCheck, title: "25-Year Warranty", text: "Performance warranty on generation." },
  { icon: HandCoins, title: "Subsidy Support", text: "End-to-end PM Surya Ghar paperwork." },
  { icon: Timer, title: "Fast Installation", text: "Residential plants live in 7–10 days." },
  { icon: Gauge, title: "Remote Monitoring", text: "App-based generation & fault alerts." },
  { icon: Headphones, title: "Dedicated Support", text: "Named engineer for your plant, always." },
];

export function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <SectionHeading
        eyebrow="Why Novatussolar"
        title="Engineering That Outlives the Warranty"
        subtitle="Solar is a 25-year asset. We build it like one — with the right components, the right slope and the right service."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05}>
            <article className="glass-card lift-hover group h-full rounded-3xl p-6">
              <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary transition-transform duration-300 group-hover:rotate-6">
                <item.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}