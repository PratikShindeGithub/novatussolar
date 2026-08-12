import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Calculator, ShieldCheck } from "lucide-react";
import heroAsset from "@/assets/hero-solar.png.asset.json";
import { SolarButton } from "./SolarButton";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const scale = useTransform(scrollY, [0, 600], [1.05, 1.18]);
  const fade = useTransform(scrollY, [0, 450], [1, 0]);

  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden">
      <motion.img
        src={heroImg}
        alt="Solar engineers inspecting a photovoltaic array under a clear blue sky"
        width={1920}
        height={1088}
        style={{ y, scale }}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="gradient-hero absolute inset-0 opacity-60 mix-blend-multiply" />
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,color-mix(in_oklab,var(--primary)_55%,transparent),transparent_50%)]"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-1/4 h-24 w-[45%] bg-white/10 blur-3xl"
        animate={{ x: ["-20%", "120%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        style={{ opacity: fade }}
        className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-24"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase backdrop-blur"
        >
          <ShieldCheck className="size-4" /> MNRE approved · Pune, Maharashtra
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl text-4xl leading-[1.05] font-semibold text-balance text-white sm:text-6xl lg:text-7xl"
        >
          Power Your Future With <span className="text-gradient-solar">Clean Solar Energy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-xl text-lg text-white/85"
        >
          Reduce electricity bills by up to 90% with smart solar solutions engineered, installed and
          monitored by Novatussolar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.38 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link to="/contact">
            <SolarButton size="lg" className="glow-solar">
              Get Free Solar Consultation
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </SolarButton>
          </Link>
          <Link to="/calculator">
            <SolarButton size="lg" variant="ghostLight">
              <Calculator className="size-4" /> Calculate Savings
            </SolarButton>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowRight className="size-6 rotate-90" />
      </motion.div>
    </section>
  );
}