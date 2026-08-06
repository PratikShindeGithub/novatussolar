import { motion } from "motion/react";
import { SectionHeading } from "./Reveal";

const steps = [
  ["Site Visit", "Free inspection anywhere in Pune within 48 hours."],
  ["Roof Inspection", "Shadow analysis, structure audit and area mapping."],
  ["Proposal", "System size, generation estimate and payback in writing."],
  ["Government Approval", "Subsidy registration and DISCOM feasibility filing."],
  ["Installation", "Mounting, module laying, cabling and inverter commissioning."],
  ["Testing", "Earthing, insulation and safety checks by certified engineers."],
  ["Net Metering", "MSEDCL meter replacement and bi-directional metering."],
  ["Electricity Generation", "Plant goes live with monitoring on your phone."],
];

export function Journey() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-24">
      <SectionHeading
        eyebrow="Interactive Solar Journey"
        title="From first call to first Unit Generated"
        subtitle="A transparent eight-step process — you always know what happens next."
      />
      <ol className="relative mt-16 ml-4 space-y-10 border-l-2 border-dashed border-border pl-8 sm:ml-8">
        {steps.map(([title, text], i) => (
          <motion.li
            key={title}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <span className="absolute top-1 -left-[3.05rem] grid size-8 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              {i + 1}
            </span>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{text}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}