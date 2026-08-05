import { Link } from "@tanstack/react-router";
import { Menu, Moon, Sun, SunMedium, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { SolarButton } from "./SolarButton";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/solutions", label: "Solar Solutions" },
  { to: "/products", label: "Products" },
  { to: "/industries", label: "Industries" },
  { to: "/subsidy", label: "Subsidy" },
  { to: "/projects", label: "Projects" },
  { to: "/calculator", label: "Calculator" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

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
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "bg-secondary text-secondary-foreground" }}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
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
            {links.map((l) => (
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
          </ul>
        </div>
      ) : null}
    </header>
  );
}