import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading } from "./Reveal";

const reviews = [
  {
    name: "Rohit Deshpande",
    role: "Homeowner, Baner",
    text: "Bill went from ₹7,400 to ₹610 a month. The team handled the subsidy paperwork completely — I only signed twice.",
  },
  {
    name: "Meera Kulkarni",
    role: "Secretary, Green Meadows Society, Wakad",
    text: "310 kW across nine buildings, commissioned in five weeks with zero disruption to residents. Monitoring app is excellent.",
  },
  {
    name: "Anil Shetty",
    role: "Director, Chakan Auto Components",
    text: "2.4 MW captive plant paid back in under four years. Their engineers still visit quarterly for cleaning and thermography.",
  },
  {
    name: "Dr. Sana Shaikh",
    role: "City Care Hospital, Hadapsar",
    text: "Hybrid system keeps critical loads running during outages. Genuinely premium execution and after-sales support.",
  },
  {
    name: "Pratik Shinde",
    role: "Owner, Shinde Industries, Pimpri",
    text: "180 kW rooftop on our unit cut the monthly power bill by nearly 70%. Payback is tracking under four years and the install finished ahead of schedule.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % reviews.length), 6000);
    return () => clearInterval(id);
  }, []);

  const r = reviews[i];

  return (
    <section className="mx-auto max-w-5xl px-5 py-24">
      <SectionHeading
        eyebrow="Testimonials"
        title="10,000+ Customers, 4.9 Average Rating"
        subtitle="Real reviews from Pune homes, societies and factories."
      />
      <div className="glass-card mt-12 rounded-[2rem] p-10">
        <Quote className="size-8 text-solar" />
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={r.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45 }}
          >
            <p className="mt-5 text-xl leading-relaxed text-balance sm:text-2xl">“{r.text}”</p>
            <footer className="mt-6">
              <div className="flex gap-1" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <motion.span
                    key={s}
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.1 + s * 0.08, type: "spring", stiffness: 320 }}
                  >
                    <Star className="size-5 fill-solar text-solar" />
                  </motion.span>
                ))}
              </div>
              <p className="mt-3 font-semibold">{r.name}</p>
              <p className="text-sm text-muted-foreground">{r.role}</p>
            </footer>
          </motion.blockquote>
        </AnimatePresence>

        <div className="mt-8 flex gap-2">
          {reviews.map((rev, idx) => (
            <button
              key={rev.name}
              type="button"
              aria-label={`Show review from ${rev.name}`}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === i ? "w-10 bg-primary" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}