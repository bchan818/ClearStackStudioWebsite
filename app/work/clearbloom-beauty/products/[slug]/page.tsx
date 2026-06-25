import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClearBloomProductVisual } from "@/components/ClearBloomProductVisual";
import { clearBloomProducts, getClearBloomProduct } from "@/lib/clearbloomProducts";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return clearBloomProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getClearBloomProduct(slug);

  if (!product) {
    return {
      title: "Product not found"
    };
  }

  return {
    title: `${product.name} | ClearBloom Beauty`,
    description: `${product.shortDescription} ${product.notes}.`
  };
}

export default async function ClearBloomProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getClearBloomProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-[#130d14] text-stone-50">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.22),transparent_34%),linear-gradient(135deg,#130d14_0%,#22111d_52%,#100b12_100%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <Link
              className="focus-ring text-sm font-semibold text-rose-200 transition hover:text-white"
              href="/work/clearbloom-beauty#shop"
            >
              ← Back to ClearBloom shop
            </Link>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">
              {product.category}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              {product.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200">
              {product.detail}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <p className="text-3xl font-semibold text-amber-100">{product.price}</p>
              <span className="border border-rose-200/30 bg-rose-200/[0.08] px-3 py-2 text-sm text-rose-100">
                {product.size}
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="focus-ring inline-flex items-center justify-center bg-rose-200 px-5 py-3 text-sm font-semibold text-[#130d14] transition hover:bg-amber-100"
                href={`/work/clearbloom-beauty/checkout?product=${product.slug}`}
              >
                Request this product
              </Link>
              <Link
                className="focus-ring inline-flex items-center justify-center border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-rose-200 hover:text-rose-100"
                href="/work/clearbloom-beauty/checkout"
              >
                View order inquiry
              </Link>
            </div>
          </div>

          <div className="border border-white/10 bg-white/[0.06] p-5 shadow-[0_0_90px_rgba(244,114,182,0.18)]">
            <ClearBloomProductVisual product={product} variant="hero" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:py-20 lg:grid-cols-3 lg:px-8">
        <article className="border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-xl font-semibold text-white">Product notes</h2>
          <p className="mt-4 text-sm leading-6 text-stone-300">{product.notes}</p>
        </article>
        <article className="border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-xl font-semibold text-white">Finish</h2>
          <p className="mt-4 text-sm leading-6 text-stone-300">{product.finish}</p>
        </article>
        <article className="border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-xl font-semibold text-white">Best for</h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-stone-300">
            {product.bestFor.map((item) => (
              <li className="flex gap-3" key={item}>
                <span className="text-rose-200" aria-hidden="true">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="bg-[#1b1018] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-100">
            Formula story
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Key ingredients and product positioning are ready for the store page.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {product.ingredients.map((ingredient) => (
              <div
                className="border border-white/10 bg-white/[0.04] p-5 text-sm font-medium text-stone-200"
                key={ingredient}
              >
                {ingredient}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="border border-rose-200/30 bg-rose-200/[0.08] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-white">Early order inquiry</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-300">
            This MVP does not process payments yet. Use the inquiry checkout to request this product while final inventory, shipping, return policy, and payment provider setup are completed.
          </p>
          <Link
            className="focus-ring mt-6 inline-flex items-center justify-center bg-rose-200 px-5 py-3 text-sm font-semibold text-[#130d14] transition hover:bg-amber-100"
            href={`/work/clearbloom-beauty/checkout?product=${product.slug}`}
          >
            Request {product.name}
          </Link>
        </div>
      </section>
    </main>
  );
}
