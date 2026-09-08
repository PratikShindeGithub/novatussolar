import { ArrowRight, FileText } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "./Reveal";
import { QuoteDialog } from "./QuoteDialog";
import { SolarButton } from "./SolarButton";
import { products } from "@/lib/products";

export function Products() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <SectionHeading
        eyebrow="Products"
        title="All Products"
        subtitle="From water heating to high-efficiency PV panels — source quality solar products directly through Novatussolar."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.06}>
            <article className="glass-card lift-hover group flex h-full flex-col overflow-hidden rounded-[2.5rem]">
              <div className="p-4 pb-0 sm:p-5 sm:pb-0">
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[1.75rem]">
                <img
                  src={p.img}
                  alt={`${p.title} supplied and installed by Novatussolar in Pune`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.03]"
                />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="mb-3 flex items-center gap-2 text-primary">
                  <span className="grid size-9 place-items-center rounded-xl bg-secondary">
                    <p.icon className="size-4" />
                  </span>
                  <span className="text-xs font-bold uppercase">Novatussolar</span>
                </div>
                <h3 className="text-2xl font-bold leading-tight">
                  <Link to="/products/$slug" params={{ slug: p.slug }} className="hover:text-primary">
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{p.description}</p>
                <div className="mt-auto grid gap-3 pt-7">
                  <Link to="/products/$slug" params={{ slug: p.slug }} className="block">
                    <SolarButton className="h-12 w-full rounded-2xl" magnetic={false} aria-label={`View details for ${p.title}`}>
                      View Details <ArrowRight className="size-4" />
                    </SolarButton>
                  </Link>
                  <QuoteDialog product={p}>
                    <SolarButton
                      className="h-12 w-full rounded-2xl border-2"
                      variant="outline"
                      magnetic={false}
                      aria-label={`Request a quote for ${p.title}`}
                    >
                      <FileText className="size-4" /> Request a Quote
                    </SolarButton>
                  </QuoteDialog>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
