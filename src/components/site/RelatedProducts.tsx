import { Link } from "@tanstack/react-router";
import { products } from "@/lib/products";

export function RelatedProducts({ currentSlug }: { currentSlug: string }) {
  const others = products.filter((p) => p.slug !== currentSlug);
  if (others.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold">Related products</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((p) => (
          <Link
            key={p.slug}
            to="/products/$slug"
            params={{ slug: p.slug }}
            className="glass-card lift-hover flex items-center gap-4 rounded-[2rem] p-5"
          >
            <img
              src={p.img}
              alt={`${p.title} by Novatussolar`}
              loading="lazy"
              width={160}
              height={160}
              className="size-16 shrink-0 rounded-2xl object-cover"
            />
            <span>
              <span className="block font-semibold">{p.title}</span>
              <span className="mt-1 block text-sm text-muted-foreground line-clamp-2">
                {p.description}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
