import { useState } from "react";
import { MapPin } from "lucide-react";
import commercialImg from "@/assets/commercial.jpg";
import industrialImg from "@/assets/industrial.jpg";
import residentialImg from "@/assets/residential.jpg";
import { Reveal, SectionHeading } from "./Reveal";

type Category = "Residential" | "Commercial" | "Industrial";

const projects: {
  title: string;
  cat: Category;
  capacity: string;
  location: string;
  img: string;
  tall?: boolean;
}[] = [
  { title: "Sunview Bungalow", cat: "Residential", capacity: "8 kW", location: "Baner", img: residentialImg, tall: true },
  { title: "Sahyadri Tech Park", cat: "Commercial", capacity: "610 kW", location: "Hinjawadi", img: commercialImg },
  { title: "Talegaon Logistics Hub", cat: "Industrial", capacity: "1.2 MW", location: "Talegaon", img: industrialImg },
  { title: "Green Meadows Society", cat: "Residential", capacity: "310 kW", location: "Wakad", img: residentialImg },
  { title: "City Care Hospital", cat: "Commercial", capacity: "250 kW", location: "Hadapsar", img: commercialImg, tall: true },
  { title: "Chakan Auto Components", cat: "Industrial", capacity: "2.4 MW", location: "Chakan MIDC", img: industrialImg },
];

export function Projects() {
  const [filter, setFilter] = useState<Category | "All">("All");
  const visible = projects.filter((p) => filter === "All" || p.cat === filter);

  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <SectionHeading
        eyebrow="Project Portfolio"
        title="50 MW+ commissioned across Pune district"
        subtitle="Drone-surveyed installations, delivered on schedule and generating since day one."
      />

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {(["All", "Residential", "Commercial", "Industrial"] as const).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
              filter === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card hover:bg-secondary"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
        {visible.map((p, i) => (
          <Reveal key={p.title + i} delay={i * 0.05} className="break-inside-avoid">
            <article className="group relative overflow-hidden rounded-[2rem] border border-border">
              <img
                src={p.img}
                alt={`${p.title} solar installation in ${p.location}`}
                loading="lazy"
                width={1024}
                height={768}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  p.tall ? "h-[26rem]" : "h-64"
                }`}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <span className="rounded-full bg-solar px-3 py-1 text-xs font-semibold text-solar-foreground">
                  {p.cat}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-1 flex items-center gap-2 text-sm text-white/80">
                  <MapPin className="size-4" /> {p.location} · {p.capacity}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}