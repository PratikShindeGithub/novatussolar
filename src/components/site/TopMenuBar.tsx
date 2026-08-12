import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, FileText } from "lucide-react";

const quickLinks = [
  { to: "/contact", label: "Free Site Visit", icon: MapPin },
  { to: "/calculator", label: "Savings Calculator", icon: FileText },
];

export function TopMenuBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[60] hidden border-b border-border/40 bg-card/90 backdrop-blur-md sm:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-1.5 text-xs">
        <div className="flex items-center gap-4 text-muted-foreground">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            aria-label="Call Novatussolar"
          >
            <Phone className="size-3.5" />
            <span>+91 98765 43210</span>
          </a>
          <a
            href="mailto:hello@novatussolar.com"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            aria-label="Email Novatussolar"
          >
            <Mail className="size-3.5" />
            <span>hello@novatussolar.com</span>
          </a>
        </div>

        <div className="flex items-center gap-1">
          {quickLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="flex items-center gap-1.5 rounded-full px-3 py-1 font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <l.icon className="size-3.5" />
              <span>{l.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
