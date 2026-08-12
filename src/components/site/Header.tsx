import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, Moon, Sun, SunMedium, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { products } from "@/lib/products";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SolarButton } from "./SolarButton";

const mainLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/solutions", label: "Solar Solutions" },
  { to: "/industries", label: "Industries" },
  { to: "/subsidy", label: "Subsidy" },
  { to: "/calculator", label: "Calculator" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

const productsLinkClass =
  "rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground";

const activeLinkProps = { className: "bg-secondary text-secondary-foreground" };

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [expandedVariant, setExpandedVariant] = useState<string | null>(null);
  const [dark, setDark] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const isProductsActive =
    location.pathname === "/products" ||
    products.some((p) => location.pathname === `/products/${p.slug}`);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass-card border-x-0 border-t-0 py-2" : "border-transparent py-4",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5"
      >
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid size-10 place-items-center rounded-2xl bg-primary text-primary-foreground">
            <SunMedium className="size-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold">Novatussolar</span>
            <span className="block text-[11px] tracking-wide text-muted-foreground">
              Smart Solar Energy
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 xl:flex">
          {mainLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={activeLinkProps}
                className={productsLinkClass}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    productsLinkClass,
                    "flex items-center gap-1",
                    isProductsActive && "bg-secondary text-secondary-foreground",
                  )}
                  aria-label="Products menu"
                >
                  Products
                  <ChevronDown className="size-4 transition-transform group-data-[state=open]:rotate-180" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-72 rounded-xl p-2">
                <DropdownMenuItem asChild>
                  <Link
                    to="/products"
                    className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium"
                  >
                    All Products
                  </Link>
                </DropdownMenuItem>
                <hr className="my-1 border-border" />
                {products.map((p) => (
                  <div key={p.slug}>
                    <DropdownMenuItem asChild>
                      <Link
                        to="/products/$slug"
                        params={{ slug: p.slug }}
                        className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium"
                      >
                        {p.title}
                      </Link>
                    </DropdownMenuItem>
                    {p.variants.length > 1
                      ? p.variants.map((v) => (
                          <DropdownMenuItem key={v.slug} asChild>
                            <Link
                              to="/products/$slug/$variant"
                              params={{ slug: p.slug, variant: v.slug }}
                              className="cursor-pointer rounded-lg py-1.5 pl-7 pr-3 text-xs text-muted-foreground"
                            >
                              {v.label}
                            </Link>
                          </DropdownMenuItem>
                        ))
                      : null}
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            onClick={() => setDark((d) => !d)}
            className="grid size-11 place-items-center rounded-full border border-border bg-card/70 text-foreground transition-colors hover:bg-secondary"
          >
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <Link to="/contact" className="hidden sm:block">
            <SolarButton variant="primary">Free Site Visit</SolarButton>
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid size-11 place-items-center rounded-full border border-border bg-card/70 xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="glass-card mx-4 mt-3 rounded-3xl p-3 xl:hidden">
          <ul className="grid gap-1">
            {mainLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium hover:bg-secondary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => setProductsOpen((o) => !o)}
                aria-expanded={productsOpen}
                className={cn(
                  "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium hover:bg-secondary",
                  isProductsActive && "bg-secondary",
                )}
              >
                Products
                <ChevronDown
                  className={cn(
                    "size-4 transition-transform",
                    productsOpen && "rotate-180",
                  )}
                />
              </button>
              {productsOpen ? (
                <ul className="mt-1 grid gap-1 pl-4">
                  <li>
                    <Link
                      to="/products"
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-2 text-sm font-medium hover:bg-secondary"
                    >
                      All Products
                    </Link>
                  </li>
                  {products.map((p) => (
                    <li key={p.slug}>
                      <div className="flex items-center justify-between">
                        <Link
                          to="/products/$slug"
                          params={{ slug: p.slug }}
                          onClick={() => setOpen(false)}
                          className="block rounded-2xl px-4 py-2 text-sm hover:bg-secondary"
                        >
                          {p.title}
                        </Link>
                        {p.variants.length > 1 ? (
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedVariant((cur) =>
                                cur === p.slug ? null : p.slug,
                              )
                            }
                            aria-expanded={expandedVariant === p.slug}
                            aria-label={`Toggle ${p.title} variants`}
                            className="grid size-8 place-items-center rounded-full hover:bg-secondary"
                          >
                            <ChevronDown
                              className={cn(
                                "size-4 transition-transform",
                                expandedVariant === p.slug && "rotate-180",
                              )}
                            />
                          </button>
                        ) : null}
                      </div>
                      {p.variants.length > 1 && expandedVariant === p.slug ? (
                        <ul className="grid gap-0.5 pl-4">
                          {p.variants.map((v) => (
                            <li key={v.slug}>
                              <Link
                                to="/products/$slug/$variant"
                                params={{ slug: p.slug, variant: v.slug }}
                                onClick={() => setOpen(false)}
                                className="block rounded-2xl px-4 py-1.5 text-xs text-muted-foreground hover:bg-secondary"
                              >
                                {v.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
