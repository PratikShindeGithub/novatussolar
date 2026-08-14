import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export type Crumb = {
  label: string;
  to?: string;
  params?: Record<string, string>;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1">
            {i > 0 ? <ChevronRight className="size-3.5 opacity-60" /> : null}
            {item.to ? (
              <Link
                to={item.to}
                params={item.params as never}
                className="hover:text-primary"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground/90">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
