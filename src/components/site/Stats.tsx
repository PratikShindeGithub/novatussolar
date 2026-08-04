import { BatteryCharging, IndianRupee, ShieldCheck, Users } from "lucide-react";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

const stats = [
  { icon: Users, to: 10000, suffix: "+", label: "Happy Customers" },
  { icon: BatteryCharging, to: 50, suffix: " MW+", label: "Installed Capacity" },
  { icon: IndianRupee, to: 15, prefix: "₹", suffix: " Cr+", label: "Electricity Bills Saved" },
  { icon: ShieldCheck, to: 25, suffix: " Yrs", label: "Performance Warranty" },
];

export function Stats() {
  return (
    <section className="relative z-10 mx-auto -mt-20 max-w-7xl px-5">
      <div className="glass-card grid gap-6 rounded-[2rem] p-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center">
            <s.icon className="mx-auto size-6 text-primary" />
            <p className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              <Counter to={s.to} prefix={s.prefix} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}