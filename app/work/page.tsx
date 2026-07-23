import type { Metadata } from "next";
import Link from "next/link";
import { FeaturedProduct } from "@/components/FeaturedProduct";
import { cardScopeLiveUrl, clearBloomLiveUrl, mswApplicationReviewDemoUrl } from "@/lib/siteLinks";

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
        <article className="border border-emerald-300/25 bg-emerald-300/[0.06] p-8 shadow-glow/20 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="border border-emerald-300/40 bg-emerald-300/[0.12] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100">
              Internal Workflow Dashboard
            </span>
            <span className="border border-white/10 bg-slateInk/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100">
              Live Demo
            </span>
          </div>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            MSW Application Review shows how a sensitive review workflow can become a public-safe dashboard proof.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
            The live mock-data demo presents applicant workflow, review queue, reviewer assignment, reporting, admin, and settings previews for an internal dashboard or workflow-tool build.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-emerald-50">
            This public demo uses fictional mock applicant data only. No private applicant records, student data, admissions documents, or confidential review notes are included.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              href={mswApplicationReviewDemoUrl}
            >
              View live dashboard demo
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-emerald-300/40 px-5 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-300 hover:text-white"
              href="/work/msw-application-review/case-study"
            >
              View case study
            </Link>
          </div>
        </article>
      </section>

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
            after the MVP direction is clear. MSW Application Review now includes a public-safe live mock-data dashboard demo.
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
              href={mswApplicationReviewDemoUrl}
            >
              View live dashboard demo
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-emerald-300/40 px-5 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-300 hover:text-white"
              href="/work/msw-application-review"
            >
              View project overview
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
              href="/start"
            >
              Start a project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
