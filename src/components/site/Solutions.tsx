import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Battery, Building2, Droplets, Factory, Home, Sun } from "lucide-react";
import commercialImg from "@/assets/commercial.jpg";
import industrialImg from "@/assets/industrial.jpg";
import residentialImg from "@/assets/residential.jpg";
import { Reveal, SectionHeading } from "./Reveal";

const solutions = [
  {
    icon: Home,
    title: "Residential Rooftop",
    text: "1–10 kW on-grid systems for bungalows and row houses, subsidy included.",
    img: residentialImg,
  },
  {
    icon: Building2,
    title: "Commercial Rooftop",
    text: "Offices, hotels and hospitals cutting peak tariff costs by up to 70%.",
    img: commercialImg,
  },
  {
    icon: Factory,
    title: "Industrial Plant",
    text: "100 kW–5 MW captive plants with HT net metering and load studies.",
    img: industrialImg,
  },
  {
    icon: Sun,
    title: "Ground Mounted",
    text: "Farm and open-land arrays with galvanised structures and tracking options.",
    img: industrialImg,
  },
  {
    icon: Droplets,
    title: "Solar Water Pumps",
    text: "PM-KUSUM compliant 3 HP–15 HP pump sets for farms across Pune district.",
    img: residentialImg,
  },
  {
    icon: Battery,
    title: "Hybrid & Off-grid",
    text: "Lithium storage backed systems that keep running through outages.",
    img: commercialImg,
  },
];

export function Solutions() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <SectionHeading
        eyebrow="Solar Solutions"
        title="One partner for every kind of solar plant"
        subtitle="Rooftop, ground mount, hybrid or pump — designed around your load profile, roof area and budget."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <article className="glass-card lift-hover group h-full overflow-hidden rounded-[2rem]">
              <div className="overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="grid size-11 place-items-center rounded-2xl bg-secondary text-primary">
                  <s.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                >
                  Learn more
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}