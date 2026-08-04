import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Reveal, SectionHeading } from "./Reveal";

export function EmiCalculator() {
  const [kw, setKw] = useState(5);
  const [rate, setRate] = useState(9.5);
  const [years, setYears] = useState(5);

  const { emi, total, interest, principal } = useMemo(() => {
    const principal = kw * 58000;
    const r = rate / 12 / 100;
    const n = years * 12;
    const emi = Math.round((principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    const total = emi * n;
    return { emi, total, interest: total - principal, principal };
  }, [kw, rate, years]);

  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading
          eyebrow="Solar Financing"
          title="EMI calculator — go solar from ₹0 down"
          subtitle="Rooftop solar loans from partner banks at 8.5%–10.5% with tenures up to 10 years."
        />
        <Reveal>
          <div className="glass-card mt-12 grid gap-10 rounded-[2rem] p-8 md:grid-cols-2">
            <div className="space-y-8">
              {[
                {
                  label: "Plant Size",
                  value: `${kw} kW`,
                  min: 1,
                  max: 100,
                  step: 1,
                  v: kw,
                  set: setKw,
                },
                {
                  label: "Interest Rate",
                  value: `${rate}%`,
                  min: 7,
                  max: 15,
                  step: 0.25,
                  v: rate,
                  set: setRate,
                },
                {
                  label: "Tenure",
                  value: `${years} years`,
                  min: 1,
                  max: 10,
                  step: 1,
                  v: years,
                  set: setYears,
                },
              ].map((f) => (
                <div key={f.label}>
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-semibold">{f.label}</Label>
                    <span className="text-sm text-muted-foreground">{f.value}</span>
                  </div>
                  <Slider
                    className="mt-3"
                    aria-label={f.label}
                    value={[f.v]}
                    min={f.min}
                    max={f.max}
                    step={f.step}
                    onValueChange={([v]) => f.set(v)}
                  />
                </div>
              ))}
            </div>
            <div className="rounded-3xl bg-primary p-8 text-primary-foreground">
              <p className="text-sm opacity-80">Monthly EMI</p>
              <p className="mt-1 font-display text-5xl font-semibold">
                ₹{emi.toLocaleString("en-IN")}
              </p>
              <dl className="mt-8 space-y-3 text-sm">
                <div className="flex justify-between border-b border-white/15 pb-2">
                  <dt className="opacity-80">Loan amount</dt>
                  <dd>₹{principal.toLocaleString("en-IN")}</dd>
                </div>
                <div className="flex justify-between border-b border-white/15 pb-2">
                  <dt className="opacity-80">Total interest</dt>
                  <dd>₹{interest.toLocaleString("en-IN")}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="opacity-80">Total payable</dt>
                  <dd>₹{total.toLocaleString("en-IN")}</dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}