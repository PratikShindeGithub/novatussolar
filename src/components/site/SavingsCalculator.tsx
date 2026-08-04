import { useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Leaf, LineChart, Ruler, Sun, Wallet } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Reveal, SectionHeading } from "./Reveal";

type PropertyType = "Residential" | "Commercial" | "Industrial";

const tariff: Record<PropertyType, number> = {
  Residential: 9.5,
  Commercial: 12,
  Industrial: 10.5,
};
const costPerKw: Record<PropertyType, number> = {
  Residential: 62000,
  Commercial: 55000,
  Industrial: 48000,
};

const monthFactor = [0.95, 1.02, 1.12, 1.15, 1.1, 0.82, 0.7, 0.72, 0.9, 1.02, 0.98, 0.92];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function SavingsCalculator() {
  const [bill, setBill] = useState(6000);
  const [type, setType] = useState<PropertyType>("Residential");

  const r = useMemo(() => {
    const units = bill / tariff[type];
    const systemKw = Math.max(1, Math.round((units / (30 * 4.2)) * 10) / 10);
    const monthlyGen = systemKw * 4.2 * 30;
    const monthlySaving = Math.round(Math.min(bill * 0.9, monthlyGen * tariff[type]));
    const annualSaving = monthlySaving * 12;
    const capex = systemKw * costPerKw[type];
    const subsidy = type === "Residential" ? Math.min(78000, systemKw * 18000) : 0;
    const netCost = capex - subsidy;
    const payback = Math.max(1.5, Math.round((netCost / annualSaving) * 10) / 10);
    const co2 = Math.round(monthlyGen * 12 * 0.82);
    const roofArea = Math.round(systemKw * 80);
    const roi25 = Math.round((annualSaving * 25 - netCost) / 100000);
    return {
      systemKw,
      monthlySaving,
      annualSaving,
      payback,
      co2,
      roofArea,
      netCost,
      subsidy,
      roi25,
      monthlyGen,
    };
  }, [bill, type]);

  const genData = months.map((m, i) => ({
    month: m,
    units: Math.round(r.monthlyGen * monthFactor[i]),
  }));
  const compare = [
    { name: "Before Solar", amount: bill },
    { name: "After Solar", amount: Math.max(0, bill - r.monthlySaving) },
  ];

  return (
    <section id="calculator" className="mx-auto max-w-7xl px-5 py-24">
      <SectionHeading
        eyebrow="AI Solar Savings Estimator"
        title="See your savings before you spend a rupee"
        subtitle="Move the slider, pick your property type and get an instant system size, payback and carbon estimate."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Reveal>
          <div className="glass-card h-full rounded-[2rem] p-8">
            <Label className="text-sm font-semibold">Monthly Electricity Bill</Label>
            <p className="mt-3 font-display text-4xl font-semibold">
              ₹{bill.toLocaleString("en-IN")}
            </p>
            <Slider
              className="mt-6"
              value={[bill]}
              min={1000}
              max={200000}
              step={500}
              onValueChange={([v]) => setBill(v)}
              aria-label="Monthly electricity bill in rupees"
            />

            <fieldset className="mt-8">
              <legend className="text-sm font-semibold">Property Type</legend>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {(["Residential", "Commercial", "Industrial"] as PropertyType[]).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setType(t)}
                    aria-pressed={type === t}
                    className={`rounded-2xl border px-3 py-3 text-sm font-medium transition-colors ${
                      type === t
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card hover:bg-secondary"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </fieldset>

            <dl className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: Sun, label: "Recommended System", value: `${r.systemKw} kW` },
                {
                  icon: Wallet,
                  label: "Monthly Savings",
                  value: `₹${r.monthlySaving.toLocaleString("en-IN")}`,
                },
                {
                  icon: LineChart,
                  label: "Annual Savings",
                  value: `₹${r.annualSaving.toLocaleString("en-IN")}`,
                },
                { icon: Sun, label: "Payback Period", value: `${r.payback} years` },
                { icon: Leaf, label: "CO₂ Reduced / Year", value: `${r.co2} kg` },
                { icon: Ruler, label: "Roof Area Needed", value: `${r.roofArea} sq.ft` },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-secondary/70 p-4">
                  <dt className="flex items-center gap-2 text-xs text-muted-foreground">
                    <item.icon className="size-4 text-primary" /> {item.label}
                  </dt>
                  <dd className="mt-1 font-display text-xl font-semibold">{item.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-xs text-muted-foreground">
              Net investment after subsidy: ₹{r.netCost.toLocaleString("en-IN")} · 25-year net gain ≈
              ₹{r.roi25} lakh
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="glass-card h-full rounded-[2rem] p-8">
            <h3 className="text-lg font-semibold">Estimated Monthly Production</h3>
            <div className="mt-4 h-56">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={genData}>
                  <defs>
                    <linearGradient id="gen" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--solar)" stopOpacity={0.85} />
                      <stop offset="100%" stopColor="var(--leaf)" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={11} />
                  <YAxis tickLine={false} axisLine={false} fontSize={11} width={40} />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 16,
                      border: "1px solid var(--border)",
                      background: "var(--card)",
                    }}
                    formatter={(v: number) => [`${v} units`, "Generation"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="units"
                    stroke="var(--leaf)"
                    strokeWidth={2}
                    fill="url(#gen)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <h3 className="mt-8 text-lg font-semibold">Bill Before vs After Solar</h3>
            <div className="mt-4 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={compare}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                  <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={11} />
                  <YAxis tickLine={false} axisLine={false} fontSize={11} width={55} />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 16,
                      border: "1px solid var(--border)",
                      background: "var(--card)",
                    }}
                    formatter={(v: number) => [`₹${v.toLocaleString("en-IN")}`, "Monthly bill"]}
                  />
                  <Bar dataKey="amount" radius={[12, 12, 0, 0]} fill="var(--primary)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}