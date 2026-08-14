import type { Spec } from "@/lib/products";

export function ProductSpecifications({
  specs,
  title = "Specifications",
}: {
  specs?: Spec[];
  title?: string;
}) {
  if (!specs || specs.length === 0) return null;
  return (
    <div className="glass-card rounded-[2rem] p-8">
      <h2 className="text-xl font-semibold">{title}</h2>
      <dl className="mt-4 divide-y divide-border">
        {specs.map((s) => (
          <div key={s.label} className="flex flex-wrap justify-between gap-2 py-3 text-sm">
            <dt className="text-muted-foreground">{s.label}</dt>
            <dd className="font-medium text-foreground/90">{s.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
