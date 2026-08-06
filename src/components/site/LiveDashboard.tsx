import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { CloudSun, IndianRupee, Leaf, Sun, TreePine, Zap } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Reveal, SectionHeading } from "./Reveal";

export function LiveDashboard() {
  const [output, setOutput] = useState(38.4);

  useEffect(() => {
    const id = setInterval(() => {
      setOutput((o) => Math.min(52, Math.max(24, o + (Math.random() - 0.5) * 3)));
    }, 2000);
    return () => clearInterval(id);
  }, []);

  const tiles = [
    { icon: Sun, label: "Today's Generation", value: "268 kWh" },
    { icon: Zap, label: "Current Output", value: `${output.toFixed(1)} kW` },
    { icon: TreePine, label: "Trees Saved", value: "1,284" },
    { icon: Leaf, label: "CO₂ Avoided", value: "62.4 t" },
    { icon: IndianRupee, label: "Money Saved", value: "₹4.9 L" },
    { icon: CloudSun, label: "Pune Weather", value: "31°C · Clear" },
  ];

  const panels = [
    { label: "Healthy Panels", value: 86, tone: "bg-leaf" },
    { label: "Dirty / Low Yield", value: 9, tone: "bg-solar" },
    { label: "Maintenance Required", value: 5, tone: "bg-destructive" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <SectionHeading
        eyebrow="Live Energy Dashboard"
        title="Watch your Plant Work, in Real Time"
        subtitle="Every Novatussolar plant ships with monitoring — generation, health and predictive maintenance in one view."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <div className="glass-card h-full rounded-[2rem] p-8">
            <div className="grid gap-4 sm:grid-cols-3">
              {tiles.map((t) => (
                <div key={t.label} className="rounded-2xl bg-secondary/70 p-4">
                  <t.icon className="size-5 text-primary" />
                  <p className="mt-3 font-display text-2xl font-semibold">{t.value}</p>
                  <p className="text-xs text-muted-foreground">{t.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-secondary/50 p-6">
              <h3 className="text-sm font-semibold tracking-widest uppercase">
                Animated Energy Flow
              </h3>
              <svg viewBox="0 0 600 120" className="mt-4 w-full" role="img" aria-label="Energy flow from solar array to inverter, home and grid">
                <path
                  d="M60 60 H200 M260 60 H380 M440 60 H540"
                  className="energy-flow"
                  stroke="var(--solar)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
                {[
                  { x: 30, label: "Array" },
                  { x: 230, label: "Inverter" },
                  { x: 410, label: "Home" },
                  { x: 560, label: "Grid" },
                ].map((n) => (
                  <g key={n.label}>
                    <circle cx={n.x} cy={60} r={26} fill="var(--primary)" opacity={0.12} />
                    <circle cx={n.x} cy={60} r={16} fill="var(--primary)" />
                    <text
                      x={n.x}
                      y={104}
                      textAnchor="middle"
                      fontSize="12"
                      fill="var(--muted-foreground)"
                    >
                      {n.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="glass-card h-full rounded-[2rem] p-8">
            <h3 className="text-lg font-semibold">Solar Plant Health Monitor</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Predictive maintenance across 480 modules
            </p>

            <div className="mt-6 flex justify-center">
              <div className="relative grid size-40 place-items-center rounded-full bg-secondary/70">
                <motion.div
                  className="absolute inset-2 rounded-full border-4 border-leaf border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
                <div className="text-center">
                  <p className="font-display text-3xl font-semibold">94%</p>
                  <p className="text-xs text-muted-foreground">Performance ratio</p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-5">
              {panels.map((p) => (
                <div key={p.label}>
                  <div className="flex justify-between text-sm">
                    <span>{p.label}</span>
                    <span className="text-muted-foreground">{p.value}%</span>
                  </div>
                  <Progress value={p.value} className="mt-2 h-2" />
                </div>
              ))}
              <div className="flex justify-between rounded-2xl bg-secondary/70 p-4 text-sm">
                <span className="text-muted-foreground">Module temperature</span>
                <span className="font-semibold">46.2 °C</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}