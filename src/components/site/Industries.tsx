import {
  Building,
  Factory,
  GraduationCap,
  Hotel,
  Laptop,
  Stethoscope,
  Tractor,
  UtensilsCrossed,
  Warehouse,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const industries = [
  { icon: Factory, name: "Factories", detail: "1.2 MW captive plant, Chakan MIDC" },
  { icon: GraduationCap, name: "Schools", detail: "180 kW rooftop, Kothrud campus" },
  { icon: Stethoscope, name: "Hospitals", detail: "250 kW hybrid with backup, Hadapsar" },
  { icon: Hotel, name: "Hotels", detail: "120 kW + solar water heating, Koregaon Park" },
  { icon: UtensilsCrossed, name: "Restaurants", detail: "40 kW rooftop, Baner" },
  { icon: Laptop, name: "IT Companies", detail: "600 kW carport + rooftop, Hinjawadi" },
  { icon: Warehouse, name: "Warehouses", detail: "900 kW metal-roof array, Talegaon" },
  { icon: Tractor, name: "Farm Houses", detail: "15 HP solar pump, Mulshi" },
  { icon: Building, name: "Housing Societies", detail: "310 kW common-area solar, Wakad" },
];

export function Industries() {
  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Industries Served"
          title="Trusted Across Pune's Toughest Energy Loads"
          subtitle="Hover a sector to see a recent Novatussolar installation."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.04}>
              <article className="glass-card lift-hover group relative h-36 overflow-hidden rounded-3xl p-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-2xl bg-card text-primary">
                    <ind.icon className="size-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{ind.name}</h3>
                </div>
                <p className="mt-4 translate-y-3 text-sm text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {ind.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}