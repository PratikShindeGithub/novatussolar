import { motion, useScroll, useSpring } from "motion/react";
import { MessageCircle } from "lucide-react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 25, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-solar"
    />
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/912012345678"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with SolarMax Pune on WhatsApp"
      className="glow-solar fixed right-5 bottom-5 z-50 grid size-14 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}

export function BackgroundBlobs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="blob absolute -top-32 -left-24 size-[28rem] rounded-full bg-leaf/25" />
      <div
        className="blob absolute top-1/3 -right-32 size-[32rem] rounded-full bg-solar/20"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="blob absolute bottom-0 left-1/3 size-[24rem] rounded-full bg-primary/15"
        style={{ animationDelay: "-12s" }}
      />
    </div>
  );
}