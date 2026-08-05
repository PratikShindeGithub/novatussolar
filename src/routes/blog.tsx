import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";

const posts = [
  {
    title: "PM Surya Ghar subsidy in Maharashtra: 2026 rates explained",
    date: "12 July 2026",
    text: "How much subsidy you actually receive for 1 kW to 10 kW rooftop systems, and how the disbursal works.",
  },
  {
    title: "How Pune's monsoon really affects solar generation",
    date: "28 June 2026",
    text: "Four years of generation data from our Baner and Wakad installations, month by month.",
  },
  {
    title: "On-grid vs hybrid: which system suits your home?",
    date: "9 June 2026",
    text: "A practical comparison of cost, backup capability and payback for Pune households.",
  },
  {
    title: "Why panel cleaning schedules decide your ROI",
    date: "21 May 2026",
    text: "Soiling losses in industrial belts like Chakan can cross 12%. Here is the fix.",
  },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Solar Insights Blog | Novatussolar" },
      {
        name: "description",
        content:
          "Guides on solar subsidy, net metering, generation data and maintenance from Novatussolar's engineering team.",
      },
      { property: "og:title", content: "Solar Insights Blog | Novatussolar" },
      {
        property: "og:description",
        content: "Subsidy, net metering and generation guides from Pune solar engineers.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-5 pt-40 pb-16">
        <h1 className="text-4xl font-semibold text-balance sm:text-5xl">Solar insights</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Field notes, subsidy updates and real generation data from plants we run across Pune.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <article className="glass-card lift-hover h-full rounded-[2rem] p-7">
                <p className="text-xs tracking-widest text-muted-foreground uppercase">{p.date}</p>
                <h2 className="mt-3 text-xl font-semibold">{p.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaSection />
    </>
  );
}