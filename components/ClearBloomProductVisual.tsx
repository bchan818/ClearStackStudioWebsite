import type { ClearBloomProduct } from "@/lib/clearbloomProducts";

type ProductVisualProps = {
  product: ClearBloomProduct;
  variant?: "card" | "hero";
};

const productThemes: Record<
  ClearBloomProduct["slug"],
  {
    accent: string;
    glow: string;
    vessel: "bottle" | "mist" | "dropper" | "tube";
    label: string;
  }
> = {
  "velvet-bloom-eau-de-parfum": {
    accent: "bg-rose-200",
    glow: "shadow-[0_0_60px_rgba(251,113,133,0.34)]",
    vessel: "bottle",
    label: "Velvet Bloom"
  },
  "citrus-veil-body-mist": {
    accent: "bg-amber-100",
    glow: "shadow-[0_0_60px_rgba(251,191,36,0.28)]",
    vessel: "mist",
    label: "Citrus Veil"
  },
  "skin-silk-serum": {
    accent: "bg-cyan-100",
    glow: "shadow-[0_0_60px_rgba(165,243,252,0.22)]",
    vessel: "dropper",
    label: "Skin Silk"
  },
  "soft-focus-lip-tint": {
    accent: "bg-fuchsia-200",
    glow: "shadow-[0_0_60px_rgba(240,171,252,0.28)]",
    vessel: "tube",
    label: "Soft Focus"
  }
};

function ProductVessel({ product }: { product: ClearBloomProduct }) {
  const theme = productThemes[product.slug];

  if (theme.vessel === "mist") {
    return (
      <div className="relative h-56 w-32">
        <div className="absolute left-1/2 top-0 h-7 w-14 -translate-x-1/2 border border-white/60 bg-white/20" />
        <div className="absolute left-1/2 top-7 h-5 w-20 -translate-x-1/2 rounded-t-full border border-white/50 bg-white/10" />
        <div className={`absolute left-1/2 top-12 h-40 w-24 -translate-x-1/2 rounded-t-[34px] border border-white/60 bg-white/20 ${theme.glow}`} />
        <div className="absolute left-1/2 top-28 w-28 -translate-x-1/2 border border-white/40 bg-[#130d14]/75 px-3 py-4 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">ClearBloom</p>
          <p className="mt-2 text-sm font-semibold text-white">{theme.label}</p>
        </div>
      </div>
    );
  }

  if (theme.vessel === "dropper") {
    return (
      <div className="relative h-56 w-32">
        <div className="absolute left-1/2 top-0 h-8 w-10 -translate-x-1/2 rounded-t-full bg-white/80" />
        <div className="absolute left-1/2 top-7 h-10 w-5 -translate-x-1/2 bg-white/60" />
        <div className={`absolute left-1/2 top-16 h-36 w-24 -translate-x-1/2 rounded-b-[20px] rounded-t-[42px] border border-white/60 bg-white/20 ${theme.glow}`} />
        <div className="absolute left-1/2 top-32 w-28 -translate-x-1/2 border border-white/40 bg-[#130d14]/75 px-3 py-4 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">ClearBloom</p>
          <p className="mt-2 text-sm font-semibold text-white">{theme.label}</p>
        </div>
      </div>
    );
  }

  if (theme.vessel === "tube") {
    return (
      <div className="relative h-56 w-32">
        <div className={`absolute left-1/2 top-8 h-36 w-16 -translate-x-1/2 rounded-t-[32px] border border-white/60 bg-white/20 ${theme.glow}`} />
        <div className="absolute left-1/2 top-44 h-8 w-20 -translate-x-1/2 border border-white/60 bg-white/15" />
        <div className="absolute left-1/2 top-28 w-28 -translate-x-1/2 border border-white/40 bg-[#130d14]/75 px-3 py-4 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">ClearBloom</p>
          <p className="mt-2 text-sm font-semibold text-white">{theme.label}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-56 w-36">
      <div className="absolute left-1/2 top-0 h-8 w-16 -translate-x-1/2 border border-white/60 bg-white/15" />
      <div className={`absolute left-1/2 top-8 h-40 w-28 -translate-x-1/2 rounded-t-[46px] border border-white/60 bg-white/20 ${theme.glow}`} />
      <div className="absolute left-1/2 top-28 w-32 -translate-x-1/2 border border-white/40 bg-[#130d14]/75 px-3 py-4 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">ClearBloom</p>
        <p className="mt-2 text-sm font-semibold text-white">{theme.label}</p>
      </div>
    </div>
  );
}

export function ClearBloomProductVisual({ product, variant = "card" }: ProductVisualProps) {
  const theme = productThemes[product.slug];
  const isHero = variant === "hero";

  return (
    <div
      aria-label={`${product.name} packaging visual`}
      className={`relative grid overflow-hidden bg-gradient-to-br ${product.color} ${
        isHero ? "min-h-[440px] p-8" : "h-56 p-5"
      } place-items-center`}
      role="img"
    >
      <div className="absolute left-5 top-5 h-20 w-20 rounded-full border border-white/15 bg-white/10 blur-sm" />
      <div className="absolute bottom-5 right-5 h-24 w-24 rounded-full border border-white/15 bg-white/10 blur-sm" />
      <div className="absolute inset-x-6 bottom-8 h-10 rounded-full bg-black/20 blur-xl" />
      <div className={`relative ${isHero ? "scale-110" : "scale-90"}`}>
        <ProductVessel product={product} />
      </div>
      <div
        className={`absolute left-4 right-4 flex items-center justify-between border border-white/15 bg-[#130d14]/60 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white/80 backdrop-blur ${
          isHero ? "bottom-4" : "top-4"
        }`}
      >
        <span>{product.category}</span>
        <span className={`h-2 w-2 rounded-full ${theme.accent}`} />
      </div>
    </div>
  );
}
