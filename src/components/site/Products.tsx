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
            <article className="glass-card lift-hover group flex h-full flex-col overflow-hidden rounded-[2rem]">
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.title} supplied and installed by Novatussolar in Pune`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="grid size-11 place-items-center rounded-2xl bg-secondary text-primary">
                  <p.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-xl font-semibold">
                  <Link to="/products/$slug" params={{ slug: p.slug }} className="hover:text-primary">
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  <Link to="/products/$slug" params={{ slug: p.slug }}>
                    <SolarButton magnetic={false} aria-label={`View details for ${p.title}`}>
                      View Details <ArrowRight className="size-4" />
                    </SolarButton>
                  </Link>
                  <QuoteDialog product={p}>
                    <SolarButton
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
