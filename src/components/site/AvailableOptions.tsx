import { SubProductCard } from "./SubProductCard";
import { hasOptions, type Product } from "@/lib/products";

/**
 * Renders the sub-product grid for any product that has more than one option.
 * Products without options render nothing at all.
 */
export function AvailableOptions({
  product,
  excludeVariantSlug,
  title = "Available options",
  subtitle,
}: {
  product: Product;
  excludeVariantSlug?: string;
  title?: string;
  subtitle?: string;
}) {
  if (!hasOptions(product)) return null;
  const variants = product.variants.filter((v) => v.slug !== excludeVariantSlug);
  if (variants.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        {subtitle ??
          `Choose the ${product.title.toLowerCase()} configuration that fits your site. Our team can help you shortlist the right option.`}
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {variants.map((v) => (
          <SubProductCard key={v.slug} product={product} variant={v} />
        ))}
      </div>
    </section>
  );
}
