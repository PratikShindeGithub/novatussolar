import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Download, FileText } from "lucide-react";
import { QuoteDialog } from "@/components/site/QuoteDialog";
import { SolarButton } from "@/components/site/SolarButton";
import { CtaSection } from "@/components/site/CtaSection";
import { getProduct, products } from "@/lib/products";
import { downloadBrochure } from "@/lib/brochure";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { title: product.title, description: product.description };
  },
  head: ({ loaderData }) => {
    const title = `${loaderData?.title ?? "Solar Product"} | Novatussolar`;
    const description = loaderData?.description ?? "Solar products by Novatussolar in Pune.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: Page,
});

function Page() {
  const { slug } = Route.useParams();
  const product = getProduct(slug)!;

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-40 pb-16">
        <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" /> All products
        </Link>
        <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
          <img
            src={product.img}
            alt={`${product.title} installed by Novatussolar in Pune`}
            width={1024}
            height={768}
            className="glass-card h-80 w-full rounded-[2rem] object-cover"
          />
          <div>
            <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary">
              <product.icon className="size-6" />
            </span>
            <h1 className="mt-5 text-4xl font-semibold text-balance sm:text-5xl">{product.title}</h1>
            <p className="mt-4 text-muted-foreground">{product.description}</p>

            <h2 className="mt-8 text-sm font-semibold tracking-wide uppercase text-muted-foreground">
              Available options
            </h2>
            <ul className="mt-3 space-y-2">
              {product.variants.map((v) => (
                <li key={v} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 size-4 text-primary" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <QuoteDialog product={product}>
                <SolarButton size="lg" magnetic={false} aria-label={`Request a quote for ${product.title}`}>
                  <FileText className="size-4" /> Request a quote
                </SolarButton>
              </QuoteDialog>
              <SolarButton
                size="lg"
                variant="outline"
                magnetic={false}
                onClick={() => downloadBrochure(product)}
                aria-label={`Download the ${product.title} product brochure`}
              >
                <Download className="size-4" /> Download product brochure
              </SolarButton>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="glass-card rounded-[2rem] p-8">
            <h2 className="text-xl font-semibold">Key highlights</h2>
            <ul className="mt-4 space-y-3">
              {product.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-foreground/90">
                  <span className="mt-1.5 block size-1.5 rounded-full bg-primary" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card rounded-[2rem] p-8">
            <h2 className="text-xl font-semibold">Typical applications</h2>
            <ul className="mt-4 space-y-3">
              {product.applications.map((a) => (
                <li key={a} className="flex items-start gap-2 text-sm text-foreground/90">
                  <span className="mt-1.5 block size-1.5 rounded-full bg-primary" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-xl font-semibold">Other products</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {products
              .filter((p) => p.slug !== product.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="glass-card rounded-full px-5 py-2 text-sm hover:text-primary"
                >
                  {p.title}
                </Link>
              ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
