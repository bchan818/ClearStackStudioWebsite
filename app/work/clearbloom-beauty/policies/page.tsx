import type { Metadata } from "next";
import Link from "next/link";

const policySections = [
  {
    title: "Order status",
    status: "Inquiry only",
    text: "ClearBloom Beauty is not processing payments on this MVP yet. Customers can email an order inquiry so product interest can be confirmed safely before checkout is connected."
  },
  {
    title: "Shipping",
    status: "To be finalized",
    text: "Shipping regions, carrier options, delivery timelines, handling fees, and packaging standards must be confirmed before public ordering is enabled."
  },
  {
    title: "Returns",
    status: "To be finalized",
    text: "Perfume and cosmetics need clear hygiene-safe return rules. A public return policy should be approved before taking real payments."
  },
  {
    title: "Inventory",
    status: "Mock catalog",
    text: "The current products and bundles are MVP catalog entries. Real stock counts, SKUs, batch details, and fulfillment rules should be added before launch."
  },
  {
    title: "Payments",
    status: "Not connected",
    text: "Shopify, Stripe, PayPal, tax calculation, refunds, and payment confirmation emails are future work and are not active on this MVP page."
  },
  {
    title: "Product claims",
    status: "Needs review",
    text: "Final product pages should avoid medical or guaranteed-result claims and should be reviewed against cosmetic labeling and advertising requirements before sales."
  }
];

const faqs = [
  {
    question: "Can customers buy ClearBloom Beauty products right now?",
    answer: "Not directly through the website yet. The current version supports early order inquiries while payment processing, inventory, and shipping details are prepared."
  },
  {
    question: "Why use an order inquiry instead of a shopping cart?",
    answer: "It keeps the MVP honest. A brand should not accept payments until product availability, fulfillment, return policy, taxes, and customer support are ready."
  },
  {
    question: "What is needed before full checkout goes live?",
    answer: "Final products, product photos, inventory, shipping rules, return policy, privacy policy, payment provider, tax setup, and customer support workflow."
  },
  {
    question: "Can this become a standalone ClearBloom Beauty store?",
    answer: "Yes. The current ClearStack Studio route can validate the brand first, then the storefront can move to a dedicated domain or Shopify store later."
  }
];

export const metadata: Metadata = {
  title: "Policies and FAQ | ClearBloom Beauty",
  description:
    "ClearBloom Beauty storefront MVP policies, FAQ, and commerce readiness guardrails before real checkout is enabled."
};

export default function ClearBloomPoliciesPage() {
  return (
    <main className="bg-[#130d14] text-stone-50">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.22),transparent_34%),linear-gradient(135deg,#130d14_0%,#22111d_52%,#100b12_100%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
          <Link
            className="focus-ring text-sm font-semibold text-rose-200 transition hover:text-white"
            href="/work/clearbloom-beauty"
          >
            ← Back to ClearBloom Beauty
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">
            Policies + FAQ
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            ClearBloom Beauty is preparing the trust layer before real checkout.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-200">
            This page keeps the storefront MVP transparent: order inquiries are active, but real payment, shipping, inventory, returns, taxes, and customer-account operations still need final setup.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="focus-ring inline-flex items-center justify-center bg-rose-200 px-5 py-3 text-sm font-semibold text-[#130d14] transition hover:bg-amber-100"
              href="/work/clearbloom-beauty/checkout"
            >
              Start order inquiry
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-rose-200 hover:text-rose-100"
              href="/contact"
            >
              Ask about the store
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-100">
          Commerce readiness
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          These items should be finalized before accepting real payments.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {policySections.map((section) => (
            <article
              className="border border-white/10 bg-white/[0.04] p-5"
              key={section.title}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-200">
                {section.status}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">{section.title}</h3>
              <p className="mt-4 text-sm leading-6 text-stone-300">{section.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#1b1018] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">
            Customer FAQ
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Clear answers help customers understand what is live now and what comes next.
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
              <article
                className="border border-rose-200/20 bg-rose-200/[0.06] p-6"
                key={faq.question}
              >
                <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                <p className="mt-4 text-sm leading-6 text-stone-300">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="border border-amber-100/20 bg-amber-100/[0.06] p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-100">
              Next build step
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              After policies, connect the real commerce stack.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-stone-300">
              The next major milestone is choosing Shopify or Stripe, adding real product photos, confirming inventory, and replacing inquiry CTAs with checkout buttons.
            </p>
          </div>
          <Link
            className="focus-ring mt-8 inline-flex items-center justify-center bg-rose-200 px-5 py-3 text-sm font-semibold text-[#130d14] transition hover:bg-amber-100 lg:mt-0"
            href="/work/clearbloom-beauty/case-study"
          >
            View case study
          </Link>
        </div>
      </section>
    </main>
  );
}
