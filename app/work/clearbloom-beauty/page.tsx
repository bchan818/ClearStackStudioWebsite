import type { Metadata } from "next";
import Link from "next/link";
import { clearBloomBundles, clearBloomProducts } from "@/lib/clearbloomProducts";

const sellingPoints = [
  "Curated perfume and cosmetic collections with a luxury editorial feel.",
  "Clickable product detail pages for featured products, bundles, and seasonal drops.",
  "Checkout-ready structure that can connect to Shopify, Stripe, inventory, and customer accounts later.",
  "Brand-safe product storytelling with clear pricing, benefits, and contact-driven ordering for the first launch."
];

const storeFeatures = [
  {
    title: "Product catalog",
    text: "Featured perfumes, fragrance mists, skincare, makeup, prices, sizes, notes, and product detail pages."
  },
  {
    title: "Order inquiry checkout",
    text: "A lightweight checkout path that lets early buyers request products before payment processing is connected."
  },
  {
    title: "Beauty bundles",
    text: "Gift-ready product sets that create higher-value offers without needing complex backend logic yet."
  }
];

export const metadata: Metadata = {
  title: "ClearBloom Beauty",
  description:
    "ClearBloom Beauty is a perfume and cosmetics storefront by ClearStack Studio with products, bundles, and order inquiry paths."
};

export default function ClearBloomBeautyPage() {
  const signatureProduct = clearBloomProducts[0];

  return (
    <main className="bg-[#130d14] text-stone-50">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.24),transparent_34%),radial-gradient(circle_at_78%_22%,rgba(251,191,36,0.16),transparent_28%),linear-gradient(135deg,#130d14_0%,#22111d_48%,#100b12_100%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">
                ClearStack Studio Storefront MVP
              </p>
              <span className="border border-amber-200/40 bg-amber-100/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">
                Perfume + Cosmetics
              </span>
            </div>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              ClearBloom Beauty is a polished online boutique for fragrance, skin, and soft beauty essentials.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200">
              Shop the first ClearBloom Beauty collection, explore product pages, compare bundles, and start an order inquiry while the brand prepares for full checkout integration.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="focus-ring inline-flex items-center justify-center bg-rose-200 px-5 py-3 text-sm font-semibold text-[#130d14] transition hover:bg-amber-100"
                href="#shop"
              >
                Shop ClearBloom
              </Link>
              <Link
                className="focus-ring inline-flex items-center justify-center border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-rose-200 hover:text-rose-100"
                href="/work/clearbloom-beauty/checkout"
              >
                Start order inquiry
              </Link>
              <Link
                className="focus-ring inline-flex items-center justify-center border border-amber-100/30 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:border-amber-100 hover:text-white"
                href="/work/clearbloom-beauty/case-study"
              >
                Read case study
              </Link>
              <Link
                className="focus-ring inline-flex items-center justify-center border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-rose-200 hover:text-rose-100"
                href="/work/clearbloom-beauty/policies"
              >
                View policies + FAQ
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
                <p className="text-sm font-semibold text-amber-100">{signatureProduct.price}</p>
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
                {signatureProduct.detail}
              </p>
              <Link
                className="focus-ring mt-5 inline-flex items-center justify-center bg-rose-200 px-4 py-3 text-sm font-semibold text-[#130d14] transition hover:bg-amber-100"
                href={`/work/clearbloom-beauty/products/${signatureProduct.slug}`}
              >
                View signature product
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8" id="shop">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">
          Shop Products
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          A boutique catalog built for fragrance storytelling and cosmetic conversion.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {clearBloomProducts.map((product) => (
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
                {product.shortDescription}
              </p>
              <p className="mt-2 text-xs leading-5 text-stone-400">
                {product.notes}
              </p>
              <Link
                className="focus-ring mt-5 inline-flex w-full items-center justify-center border border-rose-200/40 px-4 py-3 text-sm font-semibold text-rose-100 transition hover:bg-rose-200 hover:text-[#130d14]"
                href={`/work/clearbloom-beauty/products/${product.slug}`}
              >
                View product
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#1b1018] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-100">
            Bundles
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Gift-ready sets make the storefront feel ready to sell.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {clearBloomBundles.map((bundle) => (
              <article
                className="border border-rose-200/20 bg-rose-200/[0.06] p-6"
                key={bundle.name}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-white">{bundle.name}</h3>
                  <p className="text-sm font-semibold text-amber-100">{bundle.price}</p>
                </div>
                <p className="mt-4 text-sm leading-6 text-stone-300">
                  {bundle.description}
                </p>
                <Link
                  className="focus-ring mt-6 inline-flex items-center justify-center border border-rose-200/40 px-4 py-3 text-sm font-semibold text-rose-100 transition hover:bg-rose-200 hover:text-[#130d14]"
                  href="/work/clearbloom-beauty/checkout"
                >
                  Request bundle
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">
          Storefront MVP
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          ClearBloom Beauty now has the structure of a real store without taking payments yet.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {storeFeatures.map((feature) => (
            <article
              className="border border-white/10 bg-white/[0.04] p-6"
              key={feature.title}
            >
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-4 text-sm leading-6 text-stone-300">{feature.text}</p>
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
        <div className="border border-amber-100/20 bg-amber-100/[0.06] p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-100">
              Case Study
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              See how ClearBloom became a storefront MVP.
            </h2>
          </div>
          <Link
            className="focus-ring mt-8 inline-flex items-center justify-center bg-rose-200 px-5 py-3 text-sm font-semibold text-[#130d14] transition hover:bg-amber-100 lg:mt-0"
            href="/work/clearbloom-beauty/case-study"
          >
            Read the ClearBloom case study
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="border border-white/10 bg-white/[0.04] p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">
              Policies + FAQ
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Clear answers before real checkout goes live.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-stone-300">
              Customers can review what is active now, what is still being finalized, and why the storefront currently uses an inquiry flow.
            </p>
          </div>
          <Link
            className="focus-ring mt-8 inline-flex items-center justify-center border border-rose-200/40 px-5 py-3 text-sm font-semibold text-rose-100 transition hover:bg-rose-200 hover:text-[#130d14] lg:mt-0"
            href="/work/clearbloom-beauty/policies"
          >
            Read policies + FAQ
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="border border-rose-200/30 bg-rose-200/[0.08] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-white">
            Ready to place an early order?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-300">
            This MVP uses an order inquiry flow until product photos, inventory, shipping, returns, taxes, and payment processing are finalized.
          </p>
          <Link
            className="focus-ring mt-6 inline-flex items-center justify-center bg-rose-200 px-5 py-3 text-sm font-semibold text-[#130d14] transition hover:bg-amber-100"
            href="/work/clearbloom-beauty/checkout"
          >
            Start order inquiry
          </Link>
        </div>
      </section>
    </main>
  );
}
