import type { Metadata } from "next";
import Link from "next/link";
import { FeaturedProduct } from "@/components/FeaturedProduct";
import { cardScopeLiveUrl, clearBloomLiveUrl } from "@/lib/siteLinks";

const capabilities = [
  "MVP software products",
  "Inquiry-based storefront MVPs",
  "AI-powered creative tool prototypes",
  "Internal workflow dashboards"
];

const proofPoints = [
  {
    label: "Approach",
    text: "Start with the smallest useful version, then build toward real user feedback."
  },
  {
    label: "Quality",
    text: "Clean interfaces, responsive layouts, and practical technical choices."
  },
  {
    label: "Fit",
    text: "Best for small teams that need a reliable builder for early product momentum."
  }
];

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore ClearStack Studio proof projects across MVP software, storefront MVPs, AI-powered tools, and internal workflow dashboards."
};

export default function WorkPage() {
  return (
    <main className="bg-slateInk">
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            Work
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Practical digital products built with clarity from day one.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            ClearStack Studio partners with small businesses, creators, and
            growing teams to shape ideas into polished websites, apps, tools,
            MVPs, storefronts, AI-assisted workflows, and internal dashboards.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability) => (
            <div
              className="border border-white/10 bg-white/[0.03] p-5"
              key={capability}
            >
              <p className="text-sm font-medium text-slate-100">
                {capability}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {proofPoints.map((point) => (
            <article
              className="border border-emerald-300/20 bg-emerald-300/[0.05] p-5"
              key={point.label}
            >
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-emeraldLift">
                {point.label}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {point.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <FeaturedProduct />

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="border border-cyan-300/20 bg-cyan-300/[0.05] p-8 sm:p-10">
          <h2 className="text-2xl font-semibold text-white">
            A balanced portfolio of practical proof projects.
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            CardScope proves MVP software, ClearBloom Beauty proves storefront
            MVPs, AI Fashion Model proves AI-assisted creative/product
            visualization prototypes, and MSW Application Review proves internal
            workflow dashboards.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
            Each project keeps scope honest: static proof where appropriate,
            mock data only for sensitive workflows, and future integrations only
            after the MVP direction is clear.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              href={cardScopeLiveUrl}
            >
              View CardScope
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-rose-200/40 px-5 py-3 text-sm font-semibold text-rose-100 transition hover:border-rose-200 hover:text-white"
              href={clearBloomLiveUrl}
            >
              View live storefront demo
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-amber-100/30 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:border-amber-100 hover:text-white"
              href="/work/clearbloom-beauty/case-study"
            >
              Read ClearBloom case study
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-amber-100/30 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:border-amber-100 hover:text-white"
              href="/work/ai-fashion-model"
            >
              View AI Fashion Model
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-emerald-300/40 px-5 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-300 hover:text-white"
              href="/work/msw-application-review"
            >
              View MSW dashboard
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
              href="/contact"
            >
              Start a project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
