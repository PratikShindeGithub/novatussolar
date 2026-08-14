import { useEffect, useState, type ReactNode } from "react";
import { toast } from "sonner";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SolarButton } from "./SolarButton";
import type { Product } from "@/lib/products";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().regex(/^[0-9+\-\s]{8,15}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(160),
  message: z.string().trim().min(5, "Tell us a little about your requirement").max(800),
});

export function QuoteDialog({
  product,
  variantSlug,
  children,
}: {
  product: Product;
  /** preselects (and prefills) a specific sub-product option */
  variantSlug?: string;
  children: ReactNode;
}) {
  const initial =
    product.variants.find((v) => v.slug === variantSlug)?.label ?? product.variants[0].label;
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [variant, setVariant] = useState(initial);
  const [message, setMessage] = useState("");

  const prefill = (v: string) =>
    `I would like a quote for the ${product.title} (${v}). Please share pricing, capacity options and installation timelines.`;

  useEffect(() => {
    if (open) {
      setVariant(initial);
      setMessage(prefill(initial));
      setErrors({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, product.slug, variantSlug]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Request a quote — {product.title}</DialogTitle>
          <DialogDescription>
            Share your details and our solar advisor will send a tailored quotation within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <form
          className="grid gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = Object.fromEntries(new FormData(form));
            const parsed = schema.safeParse(data);
            if (!parsed.success) {
              const next: Record<string, string> = {};
              for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
              setErrors(next);
              return;
            }
            setErrors({});
            toast.success(`Thanks! Your quote request for ${product.title} is on its way.`);
            form.reset();
            setOpen(false);
          }}
        >
          <div>
            <Label htmlFor="q-product">Product</Label>
            <Input id="q-product" name="product" readOnly value={product.title} className="mt-2 h-12 bg-muted" />
          </div>
          {product.variants.length > 1 ? (
            <div>
              <Label htmlFor="q-variant">Option</Label>
              <Select
                value={variant}
                onValueChange={(v) => {
                  setVariant(v);
                  setMessage(prefill(v));
                }}
              >
                <SelectTrigger id="q-variant" className="mt-2 h-12 bg-card">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {product.variants.map((v) => (
                    <SelectItem key={v.slug} value={v.label}>
                      {v.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input type="hidden" name="variant" value={variant} />
            </div>
          ) : (
            <input type="hidden" name="variant" value={variant} />
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="q-name">Full name</Label>
              <Input id="q-name" name="name" className="mt-2 h-12 bg-card" required />
              {errors.name ? <p className="mt-1 text-xs text-destructive">{errors.name}</p> : null}
            </div>
            <div>
              <Label htmlFor="q-phone">Phone</Label>
              <Input id="q-phone" name="phone" className="mt-2 h-12 bg-card" required />
              {errors.phone ? <p className="mt-1 text-xs text-destructive">{errors.phone}</p> : null}
            </div>
          </div>
          <div>
            <Label htmlFor="q-email">Email</Label>
            <Input id="q-email" name="email" type="email" className="mt-2 h-12 bg-card" required />
            {errors.email ? <p className="mt-1 text-xs text-destructive">{errors.email}</p> : null}
          </div>
          <div>
            <Label htmlFor="q-message">Your requirement</Label>
            <Textarea
              id="q-message"
              name="message"
              rows={4}
              className="mt-2 bg-card"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message ? <p className="mt-1 text-xs text-destructive">{errors.message}</p> : null}
          </div>
          <SolarButton type="submit" size="lg" magnetic={false} className="w-full">
            Send quote request
          </SolarButton>
        </form>
      </DialogContent>
    </Dialog>
  );
}
