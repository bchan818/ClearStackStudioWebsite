import type { Metadata } from "next";
import Link from "next/link";

const palette = [
  { name: "Bloom Noir", value: "#130d14", use: "Primary background" },
  { name: "Velvet Rose", value: "#fecdd3", use: "Primary CTA and accents" },
  { name: "Warm Amber", value: "#fef3c7", use: "Luxury highlight" },
  { name: "Soft Stone", value: "#e7e5e4", use: "Readable body text" },
  { name: "Deep Plum", value: "#22111d", use: "Cards and sections" }
];

const voicePillars = [
  {
    title: "Soft luxury",
    text: "Use polished, calm language that feels premium without sounding cold or unreachable."
  },
  {
    title: "Clear product value",
    text: "Explain scent notes, finish, use cases, and bundle value in simple language shoppers understand quickly."
  },
  {
    title: "Honest commerce",
    text: "Keep order, payment, inventory, and shipping language transparent until the full commerce stack is connected."
  }
];

const photographyDirections = [
  "Warm beige or deep plum backgrounds with soft shadow and reflective surfaces.",
  "Close-up bottle and texture shots with rose, citrus peel, serum drops, or satin lip color accents.",
  "Editorial flat lays pairing fragrance, skincare, and makeup with minimal props.",
  "Short-form vertical clips showing morning routine, gift set reveal, and signature scent application."
];

const socialPosts = [
  {
    platform: "Instagram launch caption",
    copy: "Meet ClearBloom Beauty — a soft-luxury fragrance and cosmetics boutique built around polished scent, skin, and everyday beauty essentials. Start with Velvet Bloom, our signature floral amber scent."
  },
  {
    platform: "TikTok / Reels hook",
    copy: "Building a boutique beauty brand from zero: perfume, serum, lip tint, bundles, product pages, and a checkout-ready storefront MVP."
  },
  {
    platform: "Pinterest pin title",
    copy: "Soft Luxury Perfume and Cosmetics Brand: ClearBloom Beauty Storefront Inspiration"
  }
];

const launchChecklist = [
  "Confirm final logo lockup and package label hierarchy.",
  "Replace abstract packaging with real product photography or AI-assisted mockups approved for brand use.",
  "Create Instagram, TikTok, Pinterest, and YouTube Shorts handles if the brand will be public-facing.",
  "Add final legal policies before accepting payments: shipping, returns, privacy, terms, and product disclaimers.",
  "Choose Shopify or Stripe checkout once inventory and fulfillment are ready."
];

export const metadata: Metadata = {
  title: "Brand Kit | ClearBloom Beauty",
  description:
    "ClearBloom Beauty brand kit with logo direction, color palette, voice, photography direction, social launch copy, and launch checklist."
};

export default function ClearBloomBrandPage() {
  return (
    <main className="bg-[#130d14] text-stone-50">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.24),transparent_34%),radial-gradient(circle_at_78%_22%,rgba(251,191,36,0.16),transparent_28%),linear-gradient(135deg,#130d14_0%,#22111d_48%,#100b12_100%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-24 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <Link
              className="focus-ring text-sm font-semibold text-rose-200 transition hover:text-white"
              href="/work/clearbloom-beauty"
            >
              ← Back to ClearBloom Beauty
            </Link>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">
              Brand Kit
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              ClearBloom Beauty now has a brand system for launch.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-200">
              A practical identity guide for the storefront: logo direction, color palette, voice, product photography, social copy, and launch-readiness steps.
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
                href="/work/clearbloom-beauty/policies"
              >
                Review policies
              </Link>
            </div>
          </div>

          <div className="border border-white/10 bg-white/[0.06] p-6 shadow-[0_0_90px_rgba(244,114,182,0.18)]">
            <div className="grid min-h-[420px] place-items-center border border-rose-200/20 bg-[#1b1018] p-8 text-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.38em] text-rose-200">
                  ClearBloom
                </p>
                <div className="mx-auto mt-8 grid h-32 w-32 place-items-center rounded-full border border-rose-200/50 bg-rose-200/[0.08] shadow-[0_0_70px_rgba(244,114,182,0.22)]">
                  <span className="text-5xl font-semibold text-white">CB</span>
                </div>
                <h2 className="mt-8 text-3xl font-semibold text-white">Beauty</h2>
                <p className="mt-3 text-sm uppercase tracking-[0.24em] text-amber-100">
                  Fragrance · Skin · Soft color
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-100">
          Color Palette
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          A soft-luxury palette built around rose, amber, plum, and clean contrast.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {palette.map((color) => (
            <article className="border border-white/10 bg-white/[0.04] p-4" key={color.name}>
              <div
                aria-hidden="true"
                className="h-24 border border-white/10"
                style={{ backgroundColor: color.value }}
              />
              <h3 className="mt-4 text-lg font-semibold text-white">{color.name}</h3>
              <p className="mt-1 text-sm font-semibold text-rose-100">{color.value}</p>
              <p className="mt-3 text-sm leading-6 text-stone-300">{color.use}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#1b1018] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">
              Brand Voice
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              ClearBloom should sound premium, helpful, and honest.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {voicePillars.map((pillar) => (
              <article className="border border-rose-200/20 bg-rose-200/[0.06] p-5" key={pillar.title}>
                <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-6 text-stone-300">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-100">
          Product Photography Direction
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Use visuals that make the storefront feel ready for social and commerce.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {photographyDirections.map((direction) => (
            <div className="border border-white/10 bg-white/[0.04] p-5 text-sm leading-6 text-stone-300" key={direction}>
              {direction}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1b1018] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">
            Social Launch Copy
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready-to-use captions for the first public brand posts.
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {socialPosts.map((post) => (
              <article className="border border-rose-200/20 bg-rose-200/[0.06] p-6" key={post.platform}>
                <h3 className="text-xl font-semibold text-white">{post.platform}</h3>
                <p className="mt-4 text-sm leading-6 text-stone-300">{post.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-100">
          Launch Checklist
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          What ClearBloom needs before it becomes a real checkout-enabled store.
        </h2>
        <div className="mt-10 grid gap-3">
          {launchChecklist.map((item) => (
            <div className="border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-stone-300" key={item}>
              {item}
            </div>
          ))}
        </div>
        <div className="mt-10 border border-rose-200/30 bg-rose-200/[0.08] p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <h2 className="text-2xl font-semibold text-white">Next: create social-ready product mockups.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-300">
              The brand system is ready. The next improvement is a social launch kit with profile bios, first-post captions, and short-form content prompts.
            </p>
          </div>
          <Link
            className="focus-ring mt-6 inline-flex items-center justify-center bg-rose-200 px-5 py-3 text-sm font-semibold text-[#130d14] transition hover:bg-amber-100 lg:mt-0"
            href="/work/clearbloom-beauty/social"
          >
            View social launch kit
          </Link>
        </div>
      </section>
    </main>
  );
}
