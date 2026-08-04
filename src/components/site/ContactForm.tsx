import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SolarButton } from "./SolarButton";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().regex(/^[0-9+\-\s]{8,15}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(160),
  message: z.string().trim().max(800).optional(),
});

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  return (
    <Reveal>
      <form
        className="glass-card grid gap-5 rounded-[2rem] p-8"
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
          toast.success("Thanks! Our solar advisor will call you within 24 hours.");
          form.reset();
        }}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="name">Full name</Label>
            <Input id="name" name="name" className="mt-2 h-12 bg-card" required />
            {errors.name ? <p className="mt-1 text-xs text-destructive">{errors.name}</p> : null}
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" className="mt-2 h-12 bg-card" required />
            {errors.phone ? <p className="mt-1 text-xs text-destructive">{errors.phone}</p> : null}
          </div>
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" className="mt-2 h-12 bg-card" required />
          {errors.email ? <p className="mt-1 text-xs text-destructive">{errors.email}</p> : null}
        </div>
        <div>
          <Label htmlFor="message">Tell us about your roof or monthly bill</Label>
          <Textarea id="message" name="message" rows={4} className="mt-2 bg-card" />
        </div>
        <SolarButton type="submit" size="lg" magnetic={false} className="w-full">
          Request Free Site Inspection
        </SolarButton>
      </form>
    </Reveal>
  );
}