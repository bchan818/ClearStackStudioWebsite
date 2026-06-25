import type { Metadata } from "next";
import Link from "next/link";
import { clearBloomBundles, clearBloomProducts } from "@/lib/clearbloomProducts";

export const metadata: Metadata = {
  title: "Order Inquiry | ClearBloom Beauty",
  description:
    "Start an early order inquiry for ClearBloom Beauty perfume, fragrance, skincare, makeup, and bundles."
};

const policies = [
  "Payments are not processed on this MVP page yet.",
  "Inventory, shipping, taxes, return policy, and product photos must be finalized before public checkout is enabled.",
  "The inquiry button opens an email draft so early customers can request products safely."
];

export default function ClearBloomCheckoutPage() {
  const subject = encodeURIComponent("ClearBloom Beauty order inquiry");
  const body = encodeURIComponent(
    "Hi ClearBloom Beauty,\n\nI am interested in placing an early order.\n\nProducts or bundle wanted:\nQuantity:\nShipping city/state:\nQuestions:\n\nThank you."
  );

  return (
    <main className="bg-[#130d14] text-stone-50">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.22),transparent_34%),linear-gradient(135deg,#130d14_0%,#22111d_52%,#100b12_100%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <Link
              className="focus-ring text-sm font-semibold text-rose-200 transition hover:text-white"
              href="/work/clearbloom-beauty"
            >
              ← Back to ClearBloom Beauty
            </Link>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">
              Order Inquiry
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Start a ClearBloom Beauty early order request.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200">
              This is the safe first checkout step for the storefront MVP: customers can request products, ask questions, and confirm interest before full payment processing is connected.
            </p>
            <a
              className="focus-ring mt-8 inline-flex items-center justify-center bg-rose-200 px-5 py-3 text-sm font-semibold text-[#130d14] transition hover:bg-amber-100"
              href={`mailto:hello@clearstack.studio?subject=${subject}&body=${body}`}
            >
              Email order inquiry
            </a>
            <Link
              className="focus-ring ml-0 mt-3 inline-flex items-center justify-center border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-rose-200 hover:text-rose-100 sm:ml-3"
              href="/work/clearbloom-beauty/policies"
            >
              Review policies + FAQ
            </Link>
          </div>

          <div className="border border-white/10 bg-white/[0.06] p-6 shadow-[0_0_90px_rgba(244,114,182,0.18)]">
            <h2 className="text-2xl font-semibold text-white">Inquiry checklist</h2>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-stone-300">
              <li className="border border-white/10 bg-white/[0.04] p-4">Choose the products or bundle you want.</li>
              <li className="border border-white/10 bg-white/[0.04] p-4">Include quantity and shipping city/state.</li>
              <li className="border border-white/10 bg-white/[0.04] p-4">Wait for confirmation before payment or shipment.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">
          Products available for inquiry
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {clearBloomProducts.map((product) => (
            <article
              className="border border-white/10 bg-white/[0.04] p-5"
              key={product.slug}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-200">
                {product.category}
              </p>
              <h2 className="mt-3 text-lg font-semibold text-white">{product.name}</h2>
              <p className="mt-2 text-sm font-semibold text-amber-100">{product.price}</p>
              <p className="mt-3 text-sm leading-6 text-stone-300">
                {product.shortDescription}
              </p>
              <Link
                className="focus-ring mt-5 inline-flex text-sm font-semibold text-rose-100 transition hover:text-white"
                href={`/work/clearbloom-beauty/products/${product.slug}`}
              >
                View details →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#1b1018] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-100">
              Bundle options
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Early bundles are ready to validate demand.
            </h2>
          </div>
          <div className="grid gap-4">
            {clearBloomBundles.map((bundle) => (
              <div
                className="border border-rose-200/20 bg-rose-200/[0.06] p-5"
                key={bundle.name}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">{bundle.name}</h3>
                  <p className="text-sm font-semibold text-amber-100">{bundle.price}</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-stone-300">{bundle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">
          Storefront boundaries
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          This inquiry flow keeps the MVP honest until real commerce operations are ready.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {policies.map((policy) => (
            <div
              className="border border-white/10 bg-white/[0.04] p-5 text-sm leading-6 text-stone-300"
              key={policy}
            >
              {policy}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
