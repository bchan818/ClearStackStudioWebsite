import type { Metadata } from "next";
import Link from "next/link";
import { StorefrontCta } from "@/components/StorefrontCta";

const nextSteps = [
  "Review the requested products, bundle, or questions.",
  "Confirm availability, estimated timing, and any follow-up details by email.",
  "Move to real checkout only after payments, inventory, shipping, tax, and policies are connected."
];

const futureConnections = [
  "Shopify product catalog and checkout",
  "Stripe payment processing",
  "Inventory availability and product variants",
  "Shipping, tax, and return workflows",
  "Email automations and customer updates"
];

export const metadata: Metadata = {
  title: "Inquiry Received | ClearBloom Beauty",
  description:
    "ClearBloom Beauty inquiry confirmation page for the storefront MVP demo with transparent non-payment checkout guardrails."
};

export default function ClearBloomCheckoutSuccessPage() {
  return (
    <main className="bg-[#130d14] text-stone-50">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.24),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(251,191,36,0.14),transparent_30%),linear-gradient(135deg,#130d14_0%,#22111d_52%,#100b12_100%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
          <Link
            className="focus-ring text-sm font-semibold text-rose-200 transition hover:text-white"
            href="/work/clearbloom-beauty/checkout"
          >
            ← Back to inquiry checkout
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">
            Inquiry Received
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            ClearBloom Beauty inquiry received.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-200">
            This demo uses an inquiry-based checkout flow instead of live payment processing. It shows how a storefront MVP can validate demand before a brand connects real commerce infrastructure.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="focus-ring inline-flex items-center justify-center bg-rose-200 px-5 py-3 text-sm font-semibold text-[#130d14] transition hover:bg-amber-100"
              href="/work/clearbloom-beauty"
            >
              Back to ClearBloom Beauty
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-rose-200 hover:text-rose-100"
              href="/contact"
            >
              Build a storefront like this
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-100">
            Demo Confirmation
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            The flow confirms interest without pretending a payment happened.
          </h2>
          <div className="mt-8 grid gap-3">
            {nextSteps.map((step) => (
              <div className="border border-rose-200/20 bg-rose-200/[0.06] p-4 text-sm leading-6 text-stone-200" key={step}>
                {step}
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">
            Production Upgrade Path
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            A full build could connect the systems a real store needs.
          </h2>
          <div className="mt-8 grid gap-3">
            {futureConnections.map((connection) => (
              <div className="border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-stone-300" key={connection}>
                {connection}
              </div>
            ))}
          </div>
        </div>
      </section>

      <StorefrontCta
        eyebrow="Storefront MVP Proof"
        title="Use this inquiry flow as the first step toward a real store."
        text="ClearStack Studio can build the polished storefront surface first, then help plan a future Shopify, Stripe, inventory, shipping, tax, and email automation upgrade path when operations are ready."
        variant="amber"
      />
    </main>
  );
}
