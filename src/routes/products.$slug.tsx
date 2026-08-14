import { createFileRoute, notFound } from "@tanstack/react-router";
import { Check, Download, FileText, MessageSquare } from "lucide-react";
import { QuoteDialog } from "@/components/site/QuoteDialog";
import { SolarButton } from "@/components/site/SolarButton";
import { CtaSection } from "@/components/site/CtaSection";
import { WhyUs } from "@/components/site/WhyUs";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { AvailableOptions } from "@/components/site/AvailableOptions";
import { ProductSpecifications } from "@/components/site/ProductSpecifications";
import { RelatedProducts } from "@/components/site/RelatedProducts";
import { getProduct } from "@/lib/products";
import { downloadBrochure } from "@/lib/brochure";

const SITE = "https://www.novatussolar.com";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return {
      title: product.seoTitle ?? product.title,
      description: product.seoDescription ?? product.description,
      slug: product.slug,
    };
  },
  head: ({ loaderData }) => {
    const title = `${loaderData?.title ?? "Solar Product"} | Novatussolar`;
    const description = loaderData?.description ?? "Solar products by Novatussolar in Pune.";
    const url = `${SITE}/products/${loaderData?.slug ?? ""}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: loaderData ? [{ rel: "canonical", href: url }] : [],
      scripts: loaderData
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Product",
                name: loaderData.title,
                description: loaderData.description,
                brand: { "@type": "Brand", name: "Novatussolar" },
                url,
              }),
            },
          ]
        : [],
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
        <Breadcrumbs
          items={[
            { label: "Home", to: "/" },
            { label: "Products", to: "/products" },
            { label: product.title },
          ]}
        />
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
            {product.detail ? (
              <p className="mt-4 text-muted-foreground">{product.detail}</p>
            ) : null}

            <div className="mt-8 flex flex-wrap gap-3">
              <QuoteDialog product={product}>
                <SolarButton size="lg" magnetic={false} aria-label={`Request a quote for ${product.title}`}>
                  <FileText className="size-4" /> Request a Quote
                </SolarButton>
              </QuoteDialog>
              <QuoteDialog product={product}>
                <SolarButton
                  size="lg"
                  variant="outline"
                  magnetic={false}
                  aria-label={`Enquire about ${product.title}`}
                >
                  <MessageSquare className="size-4" /> Enquire Now
                </SolarButton>
              </QuoteDialog>
              <SolarButton
                size="lg"
                variant="outline"
                magnetic={false}
                onClick={() => downloadBrochure(product)}
                aria-label={`Download the ${product.title} product brochure`}
              >
                <Download className="size-4" /> Download Brochure
              </SolarButton>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="glass-card rounded-[2rem] p-8">
            <h2 className="text-xl font-semibold">Key features</h2>
            <ul className="mt-4 space-y-3">
              {product.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-foreground/90">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <ProductSpecifications specs={product.specifications} />
          <div className="glass-card rounded-[2rem] p-8">
            <h2 className="text-xl font-semibold">Typical applications</h2>
            <ul className="mt-4 space-y-3">
              {product.applications.map((a) => (
                <li key={a} className="flex items-start gap-2 text-sm text-foreground/90">
                  <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <AvailableOptions product={product} />

        <RelatedProducts currentSlug={product.slug} />
      </section>
      <WhyUs />
      <CtaSection />
    </>
  );
}
