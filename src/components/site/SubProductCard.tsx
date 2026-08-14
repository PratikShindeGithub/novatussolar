import { Link } from "@tanstack/react-router";
import { ArrowRight, FileText } from "lucide-react";
import { QuoteDialog } from "./QuoteDialog";
import { SolarButton } from "./SolarButton";
import { variantImage, type Product, type ProductVariant } from "@/lib/products";

export function SubProductCard({
  product,
  variant,
}: {
  product: Product;
  variant: ProductVariant;
}) {
  return (
    <article className="glass-card lift-hover group flex h-full flex-col overflow-hidden rounded-[2rem]">
      <div className="overflow-hidden">
        <img
          src={variantImage(product, variant)}
          alt={`${variant.name} option for ${product.title} by Novatussolar`}
          loading="lazy"
          width={1024}
          height={768}
          className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">
          <Link
            to="/products/$slug/$variant"
            params={{ slug: product.slug, variant: variant.slug }}
            className="hover:text-primary"
          >
            {variant.name}
          </Link>
        </h3>
        {variant.spec ? (
          <p className="mt-1 text-sm font-medium text-primary">{variant.spec}</p>
        ) : null}
        <p className="mt-2 text-sm text-muted-foreground">{variant.description}</p>
        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          <Link to="/products/$slug/$variant" params={{ slug: product.slug, variant: variant.slug }}>
            <SolarButton magnetic={false}>
              View Details <ArrowRight className="size-4" />
            </SolarButton>
          </Link>
          <QuoteDialog product={product} variantSlug={variant.slug}>
            <SolarButton variant="outline" magnetic={false} aria-label={`Enquire about ${variant.name}`}>
              <FileText className="size-4" /> Enquire Now
            </SolarButton>
          </QuoteDialog>
        </div>
      </div>
    </article>
  );
}
