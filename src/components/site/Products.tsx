import { Droplets, Flame, Layers, Sun, Thermometer } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import residentialImg from "@/assets/residential.jpg";
import industrialImg from "@/assets/industrial.jpg";
import commercialImg from "@/assets/commercial.jpg";

const products = [
  {
    icon: Droplets,
    title: "Solar Water Heater",
    description: "Efficient evacuated tube collector water heaters for homes, hostels and hospitals.",
    img: residentialImg,
    variants: [
      "ETC Tank GI/MS — 100 L to 750 L",
      "SS Tank — 100 L to 750 L",
    ],
  },
  {
    icon: Layers,
    title: "Evacuated Tube Collector",
    description: "High-absorption vacuum tubes that deliver hot water even on cloudy Pune days.",
    img: commercialImg,
    variants: ["ETC collector tubes in standard and high-efficiency coatings"],
  },
  {
    icon: Sun,
    title: "Solar Panel",
    description: "Tier-1 PV modules engineered for maximum generation per square foot of roof.",
    img: industrialImg,
    variants: [
      "Monocrystalline (Mono) half cut",
      "Bifacial (glass to glass)",
    ],
  },
  {
    icon: Thermometer,
    title: "Flat Plate Tube Collector",
    description: "Durable flat-plate absorbers for high-pressure plumbing and commercial hot water.",
    img: commercialImg,
    variants: ["Copper/aluminium absorber plates with toughened glass glazing"],
  },
  {
    icon: Flame,
    title: "FPC Solar Water Heater",
    description: "Flat-plate collector based systems built for pressurised and non-pressurised needs.",
    img: residentialImg,
    variants: [
      "Pressurised Tank — 100 L to 5000 L",
      "Non-Pressurised Tank — 100 L to 2000 L",
    ],
  },
];

export function Products() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <SectionHeading
        eyebrow="Products"
        title="Solar components, ready for every project"
        subtitle="From water heating to high-efficiency PV panels — source quality solar products directly through Novatussolar."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <article className="glass-card lift-hover group h-full overflow-hidden rounded-[2rem]">
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="grid size-11 place-items-center rounded-2xl bg-secondary text-primary">
                  <p.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <ul className="mt-5 space-y-2 border-t border-border pt-5">
                  {p.variants.map((variant) => (
                    <li key={variant} className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 block size-1.5 rounded-full bg-primary" />
                      <span className="text-foreground/90">{variant}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
