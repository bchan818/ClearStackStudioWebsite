import type { Metadata } from "next";
import Link from "next/link";
import { StorefrontCta } from "@/components/StorefrontCta";
import { clearBloomLiveUrl } from "@/lib/siteLinks";

const summaryStats = [
  { label: "Project type", value: "Storefront MVP" },
  { label: "Industry", value: "Perfume + cosmetics" },
  { label: "Audience", value: "Beauty shoppers, gift buyers, boutique retail customers" },
  { label: "Next platform", value: "Shopify, Stripe, inventory, and email later" }
];

const builtItems = [
  "Premium beauty storefront route under ClearStack Studio",
  "Hero positioning for fragrance, skin, and soft beauty essentials",
  "Clickable product catalog with prices, notes, and product detail pages",
  "Gift-ready beauty bundle cards",
  "Order inquiry path before real payment processing",
  "Launch roadmap and future commerce guardrails"
];

const futureItems = [
  "Shopify or Stripe checkout",
  "Real inventory and fulfillment rules",
  "Product photography and packaging assets",
  "Shipping, tax, return, and privacy policies",
  "Email capture, reviews, promotions, and analytics",
  "Customer accounts and order history"
];

const processSteps = [
  {
    title: "Retail idea",
    text: "Start with a premium perfume and cosmetics concept that can show ClearStack Studio's ability to shape retail brands."
  },
  {
    title: "Storefront MVP",
    text: "Build the visible shopping experience first: hero, products, bundles, details, and contact-driven order interest."
  },
  {
    title: "Commerce guardrails",
    text: "Keep checkout, payments, inventory, policies, and fulfillment clearly marked as later work until operations are ready."
  },
  {
    title: "Client proof",
    text: "Use ClearBloom Beauty as a portfolio example for boutique retail, product storytelling, and ecommerce planning."
  }
];

const proofPoints = [
  "A retail idea can look polished and testable before full commerce infrastructure is connected.",
  "Product storytelling, bundles, and inquiry flows can validate interest before inventory and payment setup.",
  "ClearStack Studio can help small brands move from loose product ideas to a structured commerce launch plan."
];

const studioProof = [
  "Retail concept to storefront MVP: a loose beauty idea became a structured, navigable storefront demo.",
  "Brand presentation: the experience includes visual tone, product story, bundle positioning, and brand support pages.",
  "Product catalog structure: products have categories, prices, notes, sizes, detail pages, and inquiry paths.",
  "Inquiry-based checkout: customers can express intent without fake payments or misleading purchase claims.",
  "Policy and FAQ readiness: the MVP explains what is active now and what must be finalized before live checkout.",
  "Future commerce upgrade path: Shopify, Stripe, inventory, shipping, tax, and email automation can be added later."
];

export const metadata: Metadata = {
  title: "ClearBloom Beauty Case Study | ClearStack Studio",
  description:
    "See how ClearStack Studio shaped ClearBloom Beauty from perfume and cosmetics idea into a storefront MVP with products, bundles, order inquiry paths, and commerce guardrails."
};

export default function ClearBloomCaseStudyPage() {
  return (
    <main className="bg-[#130d14] text-stone-50">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.24),transparent_34%),radial-gradient(circle_at_78%_22%,rgba(251,191,36,0.16),transparent_28%),linear-gradient(135deg,#130d14_0%,#22111d_48%,#100b12_100%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-24 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">
              Case Study
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              ClearBloom Beauty: from retail idea to storefront MVP.
            </h1>
            <p className="mt-6 text-lg leading-8 text-stone-200">
              ClearBloom Beauty shows how ClearStack Studio can turn a perfume
              and cosmetics concept into a polished storefront MVP with product
              storytelling, bundles, order inquiry paths, and a realistic
              commerce roadmap.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="focus-ring inline-flex items-center justify-center bg-rose-200 px-6 py-3 text-sm font-semibold text-[#130d14] transition hover:bg-amber-100"
                href={clearBloomLiveUrl}
              >
                View live storefront demo
              </Link>
              <Link
                className="focus-ring inline-flex items-center justify-center border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-rose-200 hover:text-rose-100"
                href="/start"
              >
                Start a storefront inquiry
              </Link>
              <Link
                className="focus-ring inline-flex items-center justify-center border border-amber-100/30 px-6 py-3 text-sm font-semibold text-amber-100 transition hover:border-amber-100 hover:text-white"
                href="/work/clearbloom-beauty/brand"
              >
                View brand kit
              </Link>
            </div>
          </div>

          <div className="border border-white/10 bg-white/[0.06] p-5 shadow-[0_0_90px_rgba(244,114,182,0.18)]">
            <div className="grid gap-4">
              {summaryStats.map((stat) => (
                <div className="border border-rose-200/20 bg-[#1b1018] p-4" key={stat.label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1b1018] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-100">
            The Storefront Process
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A practical path from boutique concept to commerce-ready launch plan.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article className="border border-white/10 bg-white/[0.04] p-5" key={step.title}>
                <p className="text-sm font-semibold text-rose-200">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-300">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">
            What Was Built
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            A storefront MVP that can sell the brand story before full checkout.
          </h2>
          <div className="mt-8 grid gap-3">
            {builtItems.map((item) => (
              <div className="border border-rose-200/20 bg-rose-200/[0.06] p-4 text-sm leading-6 text-stone-200" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-100">
            What Comes Later
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Commerce infrastructure waits until the product operation is ready.
          </h2>
          <div className="mt-8 grid gap-3">
            {futureItems.map((item) => (
              <div className="border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-stone-300" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1b1018] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">
            Client Proof
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            ClearBloom Beauty proves ClearStack Studio can support retail brands, not just software apps.
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {proofPoints.map((point) => (
              <article className="border border-amber-100/20 bg-amber-100/[0.06] p-5 text-sm leading-6 text-stone-300" key={point}>
                {point}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-100">
          What this proves for ClearStack Studio
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          The demo shows a repeatable path for product brands that need to look ready before full ecommerce is live.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {studioProof.map((point) => (
            <article
              className="border border-white/10 bg-white/[0.04] p-5 text-sm leading-6 text-stone-300"
              key={point}
            >
              {point}
            </article>
          ))}
        </div>
      </section>

      <StorefrontCta
        eyebrow="Build a Storefront MVP"
        title="Want a storefront concept like ClearBloom Beauty?"
        text="ClearStack Studio can help shape a beauty, wellness, fashion, food, lifestyle, or product idea into a polished storefront MVP before checkout, inventory, and fulfillment are fully connected."
        liveHref={clearBloomLiveUrl}
        liveLabel="View live storefront demo"
        proofHref="/work/clearbloom-beauty/case-study"
        proofLabel="Read ClearBloom case study"
      />
    </main>
  );
}
