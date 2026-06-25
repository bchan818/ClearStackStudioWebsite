export type ClearBloomProduct = {
  slug: string;
  name: string;
  category: "Perfume" | "Fragrance" | "Skincare" | "Makeup";
  price: string;
  shortDescription: string;
  notes: string;
  detail: string;
  size: string;
  finish: string;
  ingredients: string[];
  bestFor: string[];
  color: string;
};

export const clearBloomProducts: ClearBloomProduct[] = [
  {
    slug: "velvet-bloom-eau-de-parfum",
    name: "Velvet Bloom Eau de Parfum",
    category: "Perfume",
    price: "$78",
    shortDescription: "A soft floral signature scent with warm depth.",
    notes: "Rose petals, soft amber, white musk",
    detail:
      "Velvet Bloom is the signature ClearBloom Beauty fragrance: polished, feminine, and warm enough for day-to-night wear.",
    size: "50 ml / 1.7 fl oz",
    finish: "Elegant floral amber scent trail",
    ingredients: ["Rose accord", "White musk", "Amber woods", "Vanilla orchid"],
    bestFor: ["Signature scent", "Date night", "Gift sets"],
    color: "from-rose-300/30 via-pink-200/10 to-amber-200/20"
  },
  {
    slug: "citrus-veil-body-mist",
    name: "Citrus Veil Body Mist",
    category: "Fragrance",
    price: "$34",
    shortDescription: "A clean bright mist for everyday refresh.",
    notes: "Mandarin, neroli, clean sandalwood",
    detail:
      "Citrus Veil is a light, fresh body mist designed for layering after shower routines, gym bags, and warm-weather days.",
    size: "120 ml / 4 fl oz",
    finish: "Fresh citrus skin scent",
    ingredients: ["Mandarin peel", "Neroli water", "Soft sandalwood", "Clean musk"],
    bestFor: ["Daily refresh", "Layering", "Travel pouch"],
    color: "from-orange-200/30 via-yellow-100/10 to-emerald-100/20"
  },
  {
    slug: "skin-silk-serum",
    name: "Skin Silk Serum",
    category: "Skincare",
    price: "$46",
    shortDescription: "A glow-prep serum for smooth hydrated skin.",
    notes: "Hydrating glow serum for daily prep",
    detail:
      "Skin Silk Serum is the base-layer product for the ClearBloom routine, made to prep skin before makeup or fragrance layering.",
    size: "30 ml / 1 fl oz",
    finish: "Dewy soft-focus glow",
    ingredients: ["Hyaluronic complex", "Niacinamide", "Pearl extract", "Aloe water"],
    bestFor: ["Daily skincare", "Makeup prep", "Glow routines"],
    color: "from-cyan-200/20 via-white/10 to-fuchsia-200/20"
  },
  {
    slug: "soft-focus-lip-tint",
    name: "Soft Focus Lip Tint",
    category: "Makeup",
    price: "$24",
    shortDescription: "A buildable satin lip tint for effortless color.",
    notes: "Buildable color with a satin finish",
    detail:
      "Soft Focus Lip Tint adds low-maintenance color with a comfortable satin feel for everyday beauty looks.",
    size: "4 ml / 0.14 fl oz",
    finish: "Satin blurred tint",
    ingredients: ["Shea butter", "Jojoba oil", "Rose wax", "Soft pigment blend"],
    bestFor: ["Everyday makeup", "Minimal looks", "Purse essential"],
    color: "from-fuchsia-300/30 via-rose-200/10 to-purple-200/20"
  }
];

export const clearBloomBundles = [
  {
    name: "Signature Bloom Set",
    price: "$112",
    description: "Velvet Bloom Eau de Parfum plus Soft Focus Lip Tint for a polished gift-ready routine."
  },
  {
    name: "Daily Glow Set",
    price: "$80",
    description: "Skin Silk Serum and Citrus Veil Body Mist for fresh skin and fragrance layering."
  }
];

export function getClearBloomProduct(slug: string) {
  return clearBloomProducts.find((product) => product.slug === slug);
}
