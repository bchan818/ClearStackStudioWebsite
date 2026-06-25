import type { Metadata } from "next";
import Link from "next/link";

const collections = [
  {
    name: "Velvet Bloom Eau de Parfum",
    category: "Perfume",
    price: "$78",
    notes: "Rose petals, soft amber, white musk",
    color: "from-rose-300/30 via-pink-200/10 to-amber-200/20"
  },
  {
    name: "Citrus Veil Body Mist",
    category: "Fragrance",
    price: "$34",
    notes: "Mandarin, neroli, clean sandalwood",
    color: "from-orange-200/30 via-yellow-100/10 to-emerald-100/20"
  },
  {
    name: "Skin Silk Serum",
    category: "Cosmetic",
    price: "$46",
    notes: "Hydrating glow serum for daily prep",
    color: "from-cyan-200/20 via-white/10 to-fuchsia-200/20"
  },
  {
    name: "Soft Focus Lip Tint",
    category: "Cosmetic",
    price: "$24",
    notes: "Buildable color with a satin finish",
    color: "from-fuchsia-300/30 via-rose-200/10 to-purple-200/20"
  }
];

const sellingPoints = [
  "Curated perfume and cosmetic collections with a luxury editorial feel.",
  "Simple shopping path for featured products, bundles, and seasonal drops.",
  "Built as a ClearStack Studio commerce concept that can grow into Shopify, Stripe, inventory, and customer accounts later.",
  "Brand-safe product storytelling with clear pricing, benefits, and contact-driven ordering for the first launch."
];

const launchSteps = [
  {
    title: "Phase 1: Brand storefront",
    text: "Publish a polished landing/shop page with hero copy, featured products, categories, and a contact CTA."
  },
  {
    title: "Phase 2: Commerce setup",
    text: "Connect Shopify, Stripe, or another approved checkout once product inventory, shipping, and policies are ready."
  },
  {
    title: "Phase 3: Growth tools",
    text: "Add email capture, reviews, bundles, promotions, and social content once the core storefront is validated."
  }
];

export const metadata: Metadata = {
  title: "ClearBloom Beauty",
  description:
    "ClearBloom Beauty is a perfume and cosmetics storefront concept tied to ClearStack Studio."
};

export default function ClearBloomBeautyPage() {
  return (
    <main className="bg-[#130d14] text-stone-50">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.24),transparent_34%),radial-gradient(circle_at_78%_22%,rgba(251,191,36,0.16),transparent_28%),linear-gradient(135deg,#130d14_0%,#22111d_48%,#100b12_100%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">
                ClearStack Studio Commerce Concept
              </p>
              <span className="border border-amber-200/40 bg-amber-100/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">
                Perfume + Cosmetics
              </span>
            </div>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              ClearBloom Beauty turns fragrance and cosmetic discovery into a polished online boutique.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200">
              A premium storefront for curated perfumes, beauty essentials, and seasonal product drops — built to stay connected to the ClearStack Studio portfolio while becoming its own sellable brand experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="focus-ring inline-flex items-center justify-center bg-rose-200 px-5 py-3 text-sm font-semibold text-[#130d14] transition hover:bg-amber-100"
                href="#shop"
              >
                Shop the concept
              </Link>
              <Link
                className="focus-ring inline-flex items-center justify-center border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-rose-200 hover:text-rose-100"
                href="/contact"
              >
                Build this store
              </Link>
            </div>
          </div>

          <div className="border border-white/10 bg-white/[0.06] p-5 shadow-[0_0_90px_rgba(244,114,182,0.18)] backdrop-blur">
            <div className="min-h-[470px] border border-rose-200/20 bg-[#1b1018] p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-100">
                    Signature Drop
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">
                    Velvet Bloom
                  </h2>
                </div>
                <p className="text-sm font-semibold text-amber-100">$78</p>
              </div>
              <div
                aria-label="Abstract perfume bottle and cosmetic palette mockup"
                className="mt-8 grid min-h-[270px] place-items-center bg-gradient-to-br from-rose-300/20 via-fuchsia-200/10 to-amber-100/20 p-6"
                role="img"
              >
                <div className="relative h-56 w-44">
                  <div className="absolute left-1/2 top-2 h-8 w-16 -translate-x-1/2 border border-rose-100/60 bg-white/10" />
                  <div className="absolute left-1/2 top-9 h-40 w-28 -translate-x-1/2 rounded-t-[42px] border border-rose-100/70 bg-white/15 shadow-[inset_0_0_60px_rgba(255,255,255,0.12)]" />
                  <div className="absolute bottom-4 left-1/2 h-20 w-40 -translate-x-1/2 rounded-full border border-amber-100/40 bg-[#3b2032]/80" />
                  <div className="absolute bottom-8 left-7 h-8 w-8 rounded-full bg-rose-200/80" />
                  <div className="absolute bottom-8 left-16 h-8 w-8 rounded-full bg-amber-100/80" />
                  <div className="absolute bottom-8 right-7 h-8 w-8 rounded-full bg-fuchsia-200/80" />
                </div>
              </div>
              <p className="mt-6 text-sm leading-6 text-stone-300">
                Featured product areas can support hero drops, bundles, reviews, product notes, and checkout links when commerce is connected.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8" id="shop">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">
          Featured Products
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          A boutique catalog built for fragrance storytelling and cosmetic conversion.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {collections.map((product) => (
            <article
              className="border border-white/10 bg-white/[0.04] p-4"
              key={product.name}
            >
              <div className={`h-44 bg-gradient-to-br ${product.color}`} />
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-200">
                    {product.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {product.name}
                  </h3>
                </div>
                <p className="text-sm font-semibold text-amber-100">
                  {product.price}
                </p>
              </div>
              <p className="mt-3 text-sm leading-6 text-stone-300">
                {product.notes}
              </p>
              <Link
                className="focus-ring mt-5 inline-flex w-full items-center justify-center border border-rose-200/40 px-4 py-3 text-sm font-semibold text-rose-100 transition hover:bg-rose-200 hover:text-[#130d14]"
                href="/contact"
              >
                Request product details
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#1b1018] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-100">
              Why this fits ClearStack Studio
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              It can be both a real storefront and a portfolio proof point.
            </h2>
            <p className="mt-5 text-sm leading-6 text-stone-300">
              ClearBloom Beauty gives ClearStack Studio a polished commerce example for small retail brands: product pages, conversion copy, visual merchandising, launch phases, and future checkout integration.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {sellingPoints.map((point) => (
              <div
                className="border border-white/10 bg-white/[0.04] p-5 text-sm leading-6 text-stone-300"
                key={point}
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">
          Launch Roadmap
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Start with a beautiful storefront, then connect real commerce when operations are ready.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {launchSteps.map((step) => (
            <article
              className="border border-white/10 bg-white/[0.04] p-6"
              key={step.title}
            >
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-6 text-stone-300">{step.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 border border-rose-200/30 bg-rose-200/[0.08] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-white">
            Ready to turn this into a live beauty store?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-300">
            Next step: choose the final brand name, product list, product photos, pricing, shipping policy, return policy, and checkout provider.
          </p>
          <Link
            className="focus-ring mt-6 inline-flex items-center justify-center bg-rose-200 px-5 py-3 text-sm font-semibold text-[#130d14] transition hover:bg-amber-100"
            href="/contact"
          >
            Start the commerce build
          </Link>
        </div>
      </section>
    </main>
  );
}
