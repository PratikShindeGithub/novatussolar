import { Droplets, Flame, Layers, Sun, Thermometer, type LucideIcon } from "lucide-react";
import residentialImg from "@/assets/residential.jpg";
import industrialImg from "@/assets/industrial.jpg";
import commercialImg from "@/assets/commercial.jpg";

export type Product = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  img: string;
  variants: string[];
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
    variants: ["ETC Tank GI/MS — 100 L to 750 L", "SS Tank — 100 L to 750 L"],
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
    variants: ["ETC collector tubes in standard and high-efficiency coatings"],
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
    variants: ["Monocrystalline (Mono) half cut", "Bifacial (glass to glass)"],
    highlights: [
      "Half-cut cell design for lower shading losses",
      "Bifacial glass-to-glass modules with 30-year performance warranty",
      "IEC certified, DCR and non-DCR options",
    ],
    applications: ["Rooftop residential", "Commercial rooftops", "Industrial and ground mount"],
  },
  {
    slug: "flat-plate-tube-collector",
    icon: Thermometer,
    title: "Flat Plate Tube Collector",
    description: "Durable flat-plate absorbers for high-pressure plumbing and commercial hot water.",
    img: commercialImg,
    variants: ["Copper/aluminium absorber plates with toughened glass glazing"],
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
    variants: ["Pressurised Tank — 100 L to 5000 L", "Non-Pressurised Tank — 100 L to 2000 L"],
    highlights: [
      "Available up to 5000 L for bulk hot water demand",
      "Pressurised models suited to multi-storey plumbing",
      "Optional electric backup heater",
    ],
    applications: ["Hotels and hostels", "Hospitals", "Factories and canteens"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
