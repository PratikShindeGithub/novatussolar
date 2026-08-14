import { Droplets, Flame, Layers, Sun, Thermometer, type LucideIcon } from "lucide-react";
import residentialImg from "@/assets/residential.jpg";
import industrialImg from "@/assets/industrial.jpg";
import commercialImg from "@/assets/commercial.jpg";

export type Spec = { label: string; value: string };

export type ProductVariant = {
  /** unique slug within the parent product */
  slug: string;
  /** full display label (name + spec) */
  label: string;
  /** short name without the capacity/spec suffix */
  name: string;
  /** capacity / size / configuration, if known */
  spec?: string;
  description: string;
  /** optional override, falls back to the parent product image */
  img?: string;
  features?: string[];
  specifications?: Spec[];
  seoTitle?: string;
  seoDescription?: string;
};

export type Product = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  img: string;
  gallery?: string[];
  /** longer body copy for the detail page */
  detail?: string;
  variants: ProductVariant[];
  highlights: string[];
  applications: string[];
  specifications?: Spec[];
  seoTitle?: string;
  seoDescription?: string;
};

export const products: Product[] = [
  {
    slug: "solar-water-heater",
    icon: Droplets,
    title: "Solar Water Heater",
    description: "Efficient evacuated tube collector water heaters for homes, hostels and hospitals.",
    detail:
      "Novatussolar supplies evacuated tube collector (ETC) solar water heating systems sized from 100 L to 750 L. Each system pairs high-absorption vacuum tubes with a PUF insulated storage tank so hot water stays available through the evening, with no running cost and almost no maintenance.",
    img: residentialImg,
    variants: [
      {
        slug: "etc-tank-gi-ms",
        name: "ETC Tank GI/MS",
        spec: "100 L to 750 L",
        label: "ETC Tank GI/MS — 100 L to 750 L",
        description:
          "Evacuated tube collector system with a galvanised iron or mild steel inner tank, PUF insulated for overnight heat retention.",
        features: [
          "Galvanised iron / mild steel inner tank",
          "PUF insulation for overnight heat retention",
          "Borosilicate 3.3 evacuated tubes",
        ],
        specifications: [
          { label: "Capacity range", value: "100 L to 750 L" },
          { label: "Tank material", value: "Galvanised iron / mild steel" },
          { label: "Collector", value: "Evacuated tube collector (ETC)" },
        ],
      },
      {
        slug: "ss-tank",
        name: "SS Tank",
        spec: "100 L to 750 L",
        label: "SS Tank — 100 L to 750 L",
        description:
          "Stainless steel inner tank variant built for hard water and coastal conditions, with longer corrosion-free life.",
        features: [
          "Stainless steel inner tank",
          "Suited to hard water and coastal air",
          "Longer corrosion-free service life",
        ],
        specifications: [
          { label: "Capacity range", value: "100 L to 750 L" },
          { label: "Tank material", value: "Stainless steel" },
          { label: "Collector", value: "Evacuated tube collector (ETC)" },
        ],
      },
    ],
    highlights: [
      "Borosilicate 3.3 evacuated tubes with high absorption coating",
      "PUF insulated tank for overnight heat retention",
      "Low maintenance, no moving parts",
    ],
    applications: ["Homes and bungalows", "Hostels and PGs", "Hospitals and clinics"],
    specifications: [
      { label: "Capacity range", value: "100 L to 750 L" },
      { label: "Collector type", value: "Evacuated tube collector (ETC)" },
      { label: "Tank options", value: "GI / MS or stainless steel" },
    ],
  },
  {
    slug: "evacuated-tube-collector",
    icon: Layers,
    title: "Evacuated Tube Collector",
    description: "High-absorption vacuum tubes that deliver hot water even on cloudy Pune days.",
    detail:
      "Evacuated tube collectors use vacuum insulated borosilicate tubes to trap heat with minimal loss, so they keep performing in diffused light and low ambient temperatures. Tubes are individually replaceable, which makes them ideal for retrofits and long-life commercial hot water loops.",
    img: commercialImg,
    variants: [
      {
        slug: "standard",
        name: "ETC collector tubes",
        spec: "Standard and high-efficiency coatings",
        label: "ETC collector tubes — standard and high-efficiency coatings",
        description:
          "Vacuum insulated borosilicate tubes available in standard and high-efficiency selective coatings, individually replaceable.",
        features: [
          "Borosilicate 3.3 vacuum tubes",
          "Standard and high-efficiency selective coatings",
          "Individually replaceable",
        ],
      },
    ],
    highlights: [
      "Vacuum insulation minimises heat loss",
      "Performs in low ambient temperature and diffused light",
      "Individually replaceable tubes",
    ],
    applications: ["Retrofits on existing tanks", "Commercial hot water loops", "Process pre-heating"],
    specifications: [
      { label: "Tube material", value: "Borosilicate 3.3" },
      { label: "Insulation", value: "Vacuum" },
      { label: "Coating options", value: "Standard / high-efficiency selective" },
    ],
  },
  {
    slug: "solar-panel",
    icon: Sun,
    title: "Solar Panel",
    description: "Tier-1 PV modules engineered for maximum generation per square foot of roof.",
    detail:
      "Our PV module range covers half-cut monocrystalline and glass-to-glass bifacial modules, in DCR and non-DCR options. Both are IEC certified and selected for maximum generation per square foot, whether the array sits on a compact rooftop or an open-land structure.",
    img: industrialImg,
    variants: [
      {
        slug: "monocrystalline-half-cut",
        name: "Monocrystalline (Mono) half cut",
        label: "Monocrystalline (Mono) half cut",
        description:
          "Half-cut monocrystalline cells reduce resistive and shading losses, delivering higher yield on compact rooftops.",
        features: [
          "Half-cut cell design lowers shading losses",
          "High yield per square foot",
          "IEC certified, DCR and non-DCR options",
        ],
        specifications: [
          { label: "Cell technology", value: "Monocrystalline half-cut" },
          { label: "Certification", value: "IEC certified" },
        ],
      },
      {
        slug: "bifacial-glass-to-glass",
        name: "Bifacial (glass to glass)",
        label: "Bifacial (glass to glass)",
        description:
          "Glass-to-glass bifacial modules capture reflected light from the rear side for extra generation, with a 30-year performance warranty.",
        features: [
          "Rear-side generation from reflected light",
          "Glass-to-glass construction",
          "30-year performance warranty",
        ],
        specifications: [
          { label: "Cell technology", value: "Bifacial glass-to-glass" },
          { label: "Performance warranty", value: "30 years" },
        ],
      },
    ],
    highlights: [
      "Half-cut cell design for lower shading losses",
      "Bifacial glass-to-glass modules with 30-year performance warranty",
      "IEC certified, DCR and non-DCR options",
    ],
    applications: ["Rooftop residential", "Commercial rooftops", "Industrial and ground mount"],
    specifications: [
      { label: "Technologies", value: "Mono half-cut, bifacial glass-to-glass" },
      { label: "Certification", value: "IEC certified" },
      { label: "Sourcing options", value: "DCR and non-DCR" },
    ],
  },
  {
    slug: "flat-plate-collector",
    icon: Thermometer,
    title: "Flat Plate Collector",
    description: "Durable flat-plate absorbers for high-pressure plumbing and commercial hot water.",
    detail:
      "Flat plate collectors use a copper riser and header absorber under toughened glass glazing. The rugged build handles pressurised plumbing lines and continuous rooftop exposure, which makes them the preferred choice for hotels, high-rises and industrial hot water.",
    img: commercialImg,
    variants: [
      {
        slug: "standard",
        name: "Copper/aluminium absorber",
        spec: "Toughened glass glazing",
        label: "Copper/aluminium absorber with toughened glass glazing",
        description:
          "Copper riser and header absorber under toughened glass, built to withstand pressurised plumbing lines and rooftop exposure.",
        features: [
          "Copper riser and header absorber",
          "Toughened glass glazing",
          "Suited to pressurised plumbing lines",
        ],
      },
    ],
    highlights: [
      "Copper riser and header for fast heat transfer",
      "Withstands pressurised plumbing lines",
      "Rugged build for rooftop and terrace mounting",
    ],
    applications: ["Hotels and resorts", "Industrial hot water", "High-rise apartments"],
    specifications: [
      { label: "Absorber", value: "Copper / aluminium" },
      { label: "Glazing", value: "Toughened glass" },
    ],
  },
  {
    slug: "fpc-solar-water-heater",
    icon: Flame,
    title: "FPC Solar Water Heater",
    description: "Flat-plate collector based systems built for pressurised and non-pressurised needs.",
    detail:
      "FPC solar water heaters combine flat plate collectors with pressurised or non-pressurised storage, scaling from a 100 L home system to a 5000 L bulk installation. Optional electric backup keeps supply steady through long monsoon spells.",
    img: residentialImg,
    variants: [
      {
        slug: "pressurised-tank",
        name: "Pressurised Tank",
        spec: "100 L to 5000 L",
        label: "Pressurised Tank — 100 L to 5000 L",
        description:
          "Pressurised FPC systems suited to multi-storey plumbing and bulk hot water demand up to 5000 L.",
        features: [
          "Handles multi-storey plumbing pressure",
          "Bulk capacities up to 5000 L",
          "Optional electric backup heater",
        ],
        specifications: [
          { label: "Capacity range", value: "100 L to 5000 L" },
          { label: "System type", value: "Pressurised" },
        ],
      },
      {
        slug: "non-pressurised-tank",
        name: "Non-Pressurised Tank",
        spec: "100 L to 2000 L",
        label: "Non-Pressurised Tank — 100 L to 2000 L",
        description:
          "Gravity-fed non-pressurised FPC systems from 100 L to 2000 L, ideal for homes and small institutions.",
        features: [
          "Gravity-fed operation",
          "Capacities from 100 L to 2000 L",
          "Simple, low maintenance plumbing",
        ],
        specifications: [
          { label: "Capacity range", value: "100 L to 2000 L" },
          { label: "System type", value: "Non-pressurised (gravity fed)" },
        ],
      },
    ],
    highlights: [
      "Available up to 5000 L for bulk hot water demand",
      "Pressurised models suited to multi-storey plumbing",
      "Optional electric backup heater",
    ],
    applications: ["Hotels and hostels", "Hospitals", "Factories and canteens"],
    specifications: [
      { label: "Capacity range", value: "100 L to 5000 L" },
      { label: "Collector type", value: "Flat plate collector (FPC)" },
      { label: "Tank options", value: "Pressurised / non-pressurised" },
    ],
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

/** A product only shows Available Options when it has more than one real option. */
export const hasOptions = (product: Product) => product.variants.length > 1;

export const variantImage = (product: Product, variant: ProductVariant) => variant.img ?? product.img;
