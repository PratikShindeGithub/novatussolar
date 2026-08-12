import { Droplets, Flame, Layers, Sun, Thermometer, type LucideIcon } from "lucide-react";
import residentialImg from "@/assets/residential.jpg";
import industrialImg from "@/assets/industrial.jpg";
import commercialImg from "@/assets/commercial.jpg";

export type ProductVariant = {
  slug: string;
  label: string;
  description: string;
};

export type Product = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  img: string;
  variants: ProductVariant[];
  highlights: string[];
  applications: string[];
};

export const products: Product[] = [
  {
    slug: "solar-water-heater",
    icon: Droplets,
    title: "Solar Water Heater",
    description: "Efficient evacuated tube collector water heaters for homes, hostels and hospitals.",
    img: residentialImg,
    variants: [
      {
        slug: "etc-tank-gi-ms",
        label: "ETC Tank GI/MS — 100 L to 750 L",
        description:
          "Evacuated tube collector system with a galvanised iron or mild steel inner tank, PUF insulated for overnight heat retention.",
      },
      {
        slug: "ss-tank",
        label: "SS Tank — 100 L to 750 L",
        description:
          "Stainless steel inner tank variant built for hard water and coastal conditions, with longer corrosion-free life.",
      },
    ],
    highlights: [
      "Borosilicate 3.3 evacuated tubes with high absorption coating",
      "PUF insulated tank for overnight heat retention",
      "Low maintenance, no moving parts",
    ],
    applications: ["Homes and bungalows", "Hostels and PGs", "Hospitals and clinics"],
  },
  {
    slug: "evacuated-tube-collector",
    icon: Layers,
    title: "Evacuated Tube Collector",
    description: "High-absorption vacuum tubes that deliver hot water even on cloudy Pune days.",
    img: commercialImg,
    variants: [
      {
        slug: "standard",
        label: "ETC collector tubes — standard and high-efficiency coatings",
        description:
          "Vacuum insulated borosilicate tubes available in standard and high-efficiency selective coatings, individually replaceable.",
      },
    ],
    highlights: [
      "Vacuum insulation minimises heat loss",
      "Performs in low ambient temperature and diffused light",
      "Individually replaceable tubes",
    ],
    applications: ["Retrofits on existing tanks", "Commercial hot water loops", "Process pre-heating"],
  },
  {
    slug: "solar-panel",
    icon: Sun,
    title: "Solar Panel",
    description: "Tier-1 PV modules engineered for maximum generation per square foot of roof.",
    img: industrialImg,
    variants: [
      {
        slug: "monocrystalline-half-cut",
        label: "Monocrystalline (Mono) half cut",
        description:
          "Half-cut monocrystalline cells reduce resistive and shading losses, delivering higher yield on compact rooftops.",
      },
      {
        slug: "bifacial-glass-to-glass",
        label: "Bifacial (glass to glass)",
        description:
          "Glass-to-glass bifacial modules capture reflected light from the rear side for extra generation, with a 30-year performance warranty.",
      },
    ],
    highlights: [
      "Half-cut cell design for lower shading losses",
      "Bifacial glass-to-glass modules with 30-year performance warranty",
      "IEC certified, DCR and non-DCR options",
    ],
    applications: ["Rooftop residential", "Commercial rooftops", "Industrial and ground mount"],
  },
  {
    slug: "flat-plate-collector",
    icon: Thermometer,
    title: "Flat Plate Collector",
    description: "Durable flat-plate absorbers for high-pressure plumbing and commercial hot water.",
    img: commercialImg,
    variants: [
      {
        slug: "standard",
        label: "Copper/aluminium absorber with toughened glass glazing",
        description:
          "Copper riser and header absorber under toughened glass, built to withstand pressurised plumbing lines and rooftop exposure.",
      },
    ],
    highlights: [
      "Copper riser and header for fast heat transfer",
      "Withstands pressurised plumbing lines",
      "Rugged build for rooftop and terrace mounting",
    ],
    applications: ["Hotels and resorts", "Industrial hot water", "High-rise apartments"],
  },
  {
    slug: "fpc-solar-water-heater",
    icon: Flame,
    title: "FPC Solar Water Heater",
    description: "Flat-plate collector based systems built for pressurised and non-pressurised needs.",
    img: residentialImg,
    variants: [
      {
        slug: "pressurised-tank",
        label: "Pressurised Tank — 100 L to 5000 L",
        description:
          "Pressurised FPC systems suited to multi-storey plumbing and bulk hot water demand up to 5000 L.",
      },
      {
        slug: "non-pressurised-tank",
        label: "Non-Pressurised Tank — 100 L to 2000 L",
        description:
          "Gravity-fed non-pressurised FPC systems from 100 L to 2000 L, ideal for homes and small institutions.",
      },
    ],
    highlights: [
      "Available up to 5000 L for bulk hot water demand",
      "Pressurised models suited to multi-storey plumbing",
      "Optional electric backup heater",
    ],
    applications: ["Hotels and hostels", "Hospitals", "Factories and canteens"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const getVariant = (productSlug: string, variantSlug: string) => {
  const product = getProduct(productSlug);
  if (!product) return undefined;
  const variant = product.variants.find((v) => v.slug === variantSlug);
  if (!variant) return undefined;
  return { product, variant };
};
