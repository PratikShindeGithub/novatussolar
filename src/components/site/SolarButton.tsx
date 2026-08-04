import { cva, type VariantProps } from "class-variance-authority";
import { useRef, type ButtonHTMLAttributes, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold transition-transform duration-300 will-change-transform focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none active:scale-[0.98] disabled:opacity-60",
  {
    variants: {
      variant: {
        solar: "bg-solar text-solar-foreground shadow-[0_16px_40px_-18px_var(--solar)]",
        primary: "bg-primary text-primary-foreground shadow-[0_16px_40px_-20px_var(--primary)]",
        outline: "border border-border bg-card/70 text-foreground backdrop-blur",
        ghostLight: "border border-white/30 bg-white/10 text-white backdrop-blur",
      },
      size: {
        md: "h-11 px-5 text-sm",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: { variant: "solar", size: "md" },
  },
);

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & { magnetic?: boolean; children: ReactNode };

export function SolarButton({
  className,
  variant,
  size,
  magnetic = true,
  children,
  onClick,
  ...rest
}: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.14}px, ${y * 0.22}px) scale(1.03)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  const ripple = (e: MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      const span = document.createElement("span");
      const size = Math.max(rect.width, rect.height);
      span.style.cssText = `position:absolute;border-radius:9999px;pointer-events:none;background:currentColor;opacity:.28;width:${size}px;height:${size}px;left:${e.clientX - rect.left - size / 2}px;top:${e.clientY - rect.top - size / 2}px;transform:scale(0);transition:transform .6s ease,opacity .6s ease;`;
      el.appendChild(span);
      requestAnimationFrame(() => {
        span.style.transform = "scale(2.2)";
        span.style.opacity = "0";
      });
      setTimeout(() => span.remove(), 650);
    }
    onClick?.(e);
  };

  return (
    <button
      ref={ref}
      className={cn(buttonStyles({ variant, size }), "group", className)}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={ripple}
      {...rest}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
}