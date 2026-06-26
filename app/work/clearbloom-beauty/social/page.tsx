import type { Metadata } from "next";
import Link from "next/link";

const handles = [
  { platform: "Instagram", handle: "@clearbloombeauty", use: "Primary launch channel for product visuals, reels, and stories." },
  { platform: "TikTok", handle: "@clearbloombeauty", use: "Short-form behind-the-brand, product routine, and packaging reveal videos." },
  { platform: "Pinterest", handle: "ClearBloom Beauty", use: "Soft-luxury mood boards, product pins, and beauty routine inspiration." },
  { platform: "YouTube Shorts", handle: "@clearbloombeauty", use: "Repurposed vertical launch videos and product storytelling shorts." }
];

const bios = [
  {
    label: "Short bio",
    text: "Soft-luxury fragrance, skin, and beauty essentials. Velvet Bloom starts here."
  },
  {
    label: "Professional bio",
    text: "ClearBloom Beauty is a soft-luxury perfume and cosmetics boutique featuring fragrance, skin prep, satin color, gift-ready bundles, and a transparent order-inquiry storefront MVP."
  },
  {
    label: "Disclosure / status line",
    text: "Storefront MVP by ClearStack Studio. Order inquiries only while full checkout, inventory, shipping, and policies are finalized."
  }
];

const hashtags = [
  "#ClearBloomBeauty",
  "#SoftLuxuryBeauty",
  "#PerfumeTok",
  "#FragranceLovers",
  "#BeautyRoutine",
  "#SkincarePrep",
  "#LipTint",
  "#BoutiqueBeauty",
  "#CleanAesthetic",
  "#GiftReadyBeauty"
];

const launchPosts = [
  {
    title: "Meet ClearBloom Beauty",
    format: "Instagram carousel / TikTok intro",
    caption:
      "Meet ClearBloom Beauty — a soft-luxury fragrance and cosmetics boutique for polished scent, skin, and everyday beauty essentials. Start with Velvet Bloom, our signature floral amber scent.",
    cta: "Explore the storefront"
  },
  {
    title: "Velvet Bloom signature scent",
    format: "Reel / product card",
    caption:
      "Velvet Bloom is soft rose, warm amber, and white musk in one signature scent story. Elegant enough for nights out, easy enough for everyday ritual.",
    cta: "View Velvet Bloom"
  },
  {
    title: "Citrus Veil daily refresh",
    format: "TikTok routine clip",
    caption:
      "A quick clean refresh: mandarin, neroli, soft sandalwood, and a body mist made for layering after shower routines or before heading out.",
    cta: "Add Citrus Veil to your routine"
  },
  {
    title: "Skin Silk serum prep",
    format: "Before-makeup routine",
    caption:
      "Skin Silk Serum is the glow-prep step: smooth, hydrated, soft-focus skin before fragrance, makeup, or a no-makeup day.",
    cta: "See Skin Silk Serum"
  },
  {
    title: "Soft Focus Lip Tint",
    format: "Close-up swatch video",
    caption:
      "A satin blurred tint for everyday color. Soft Focus Lip Tint is the purse essential for simple, polished beauty looks.",
    cta: "View Soft Focus Lip Tint"
  },
  {
    title: "Signature Bloom Set",
    format: "Gift set reveal",
    caption:
      "The gift-ready pairing: Velvet Bloom Eau de Parfum plus Soft Focus Lip Tint for a soft-luxury routine that feels finished.",
    cta: "Request the bundle"
  },
  {
    title: "Daily Glow Set",
    format: "Routine flat lay",
    caption:
      "Fresh skin, fresh scent: Skin Silk Serum and Citrus Veil Body Mist create the daily glow set for clean, easy beauty."
      ,
    cta: "Request the Daily Glow Set"
  },
  {
    title: "Behind the storefront MVP",
    format: "Founder/build story",
    caption:
      "Building ClearBloom Beauty from concept to storefront MVP: product pages, bundles, order inquiry, policies, brand kit, and a path toward full checkout.",
    cta: "Read the case study"
  },
  {
    title: "What comes before checkout",
    format: "Trust / FAQ post",
    caption:
      "Before a beauty brand accepts payments, it needs inventory, shipping, returns, product claims, and support ready. ClearBloom starts with transparent order inquiries."
      ,
    cta: "Read policies + FAQ"
  }
];

const videoPrompts = [
  "Vertical 9:16 soft-luxury perfume bottle reveal, deep plum background, rose petals, warm amber light, text overlay: Meet ClearBloom Beauty.",
  "Vertical 9:16 clean skincare routine, serum drop texture, beige bathroom counter, soft morning light, text overlay: Skin Silk Serum glow prep.",
  "Vertical 9:16 gift set unboxing, rose satin ribbon, perfume and lip tint, minimal luxury packaging, text overlay: Signature Bloom Set.",
  "Vertical 9:16 behind-the-brand build sequence, website pages, product cards, soft rose UI, text overlay: From beauty idea to storefront MVP."
];

const profileChecklist = [
  "Create or reserve @clearbloombeauty on Instagram, TikTok, Pinterest, and YouTube if available.",
  "Use the short bio first, then add the storefront URL once the profile allows links.",
  "Pin the launch intro post and product signature post after publishing.",
  "Keep the order-inquiry limitation visible until real checkout is connected.",
  "Ask followers to request products, vote on bundles, and comment on scent or shade preferences."
];

export const metadata: Metadata = {
  title: "Social Launch Kit | ClearBloom Beauty",
  description:
    "ClearBloom Beauty social launch kit with handles, bios, first 9 posts, hashtags, video prompts, and setup checklist."
};

export default function ClearBloomSocialPage() {
  return (
    <main className="bg-[#130d14] text-stone-50">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.24),transparent_34%),radial-gradient(circle_at_78%_22%,rgba(251,191,36,0.16),transparent_28%),linear-gradient(135deg,#130d14_0%,#22111d_48%,#100b12_100%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
          <Link className="focus-ring text-sm font-semibold text-rose-200 transition hover:text-white" href="/work/clearbloom-beauty/brand">
            ← Back to brand kit
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">
            Social Launch Kit
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            ClearBloom Beauty is ready for its first social rollout.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-200">
            Use this launch kit to set up public profiles, write bios, publish the first 9 posts, and keep the storefront MVP transparent while checkout is still inquiry-based.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="focus-ring inline-flex items-center justify-center bg-rose-200 px-5 py-3 text-sm font-semibold text-[#130d14] transition hover:bg-amber-100" href="/work/clearbloom-beauty">
              View storefront
            </Link>
            <Link className="focus-ring inline-flex items-center justify-center border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-rose-200 hover:text-rose-100" href="/work/clearbloom-beauty/policies">
              Review policies
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-100">Recommended handles</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {handles.map((item) => (
            <article className="border border-white/10 bg-white/[0.04] p-5" key={item.platform}>
              <h2 className="text-xl font-semibold text-white">{item.platform}</h2>
              <p className="mt-3 text-sm font-semibold text-rose-100">{item.handle}</p>
              <p className="mt-4 text-sm leading-6 text-stone-300">{item.use}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#1b1018] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">Bios + disclosure</p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {bios.map((bio) => (
              <article className="border border-rose-200/20 bg-rose-200/[0.06] p-6" key={bio.label}>
                <h2 className="text-xl font-semibold text-white">{bio.label}</h2>
                <p className="mt-4 text-sm leading-6 text-stone-300">{bio.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-100">First 9 posts</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          A complete first grid for Instagram, TikTok, Pinterest, and Shorts.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {launchPosts.map((post, index) => (
            <article className="border border-white/10 bg-white/[0.04] p-5" key={post.title}>
              <p className="text-sm font-semibold text-rose-200">Post {index + 1}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{post.title}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-amber-100">{post.format}</p>
              <p className="mt-4 text-sm leading-6 text-stone-300">{post.caption}</p>
              <p className="mt-4 text-sm font-semibold text-rose-100">CTA: {post.cta}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#1b1018] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">Hashtags + video prompts</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Short-form content should show the product mood before full checkout launches.
            </h2>
          </div>
          <div className="space-y-8">
            <div className="flex flex-wrap gap-3">
              {hashtags.map((tag) => (
                <span className="border border-rose-200/30 bg-rose-200/[0.08] px-3 py-2 text-sm text-rose-100" key={tag}>{tag}</span>
              ))}
            </div>
            <div className="grid gap-4">
              {videoPrompts.map((prompt) => (
                <div className="border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-stone-300" key={prompt}>{prompt}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-100">Profile setup checklist</p>
        <div className="mt-8 grid gap-3">
          {profileChecklist.map((item) => (
            <div className="border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-stone-300" key={item}>{item}</div>
          ))}
        </div>
      </section>
    </main>
  );
}
