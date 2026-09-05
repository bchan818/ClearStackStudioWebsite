import type { Metadata } from "next";
import Link from "next/link";
import { FeaturedProduct } from "@/components/FeaturedProduct";
import { TrackedLink } from "@/components/TrackedLink";
import { requireProductBySlug } from "@/lib/products";
import { createSeoMetadata, socialImages } from "@/lib/seo";
import { mswApplicationReviewDemoUrl } from "@/lib/siteLinks";

const capabilities = [
  "MVP software products",
  "Inquiry-based storefront MVPs",
  "Travel planning platforms",
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

const cardScopeProduct = requireProductBySlug("cardscope");
const clearBloomProduct = requireProductBySlug("clearbloom-beauty");
const roamTheCitiesProduct = requireProductBySlug("roamthecities");
const sportsPredictorProduct = requireProductBySlug("sports-predictor");

export const metadata: Metadata = {
  ...createSeoMetadata({
    title: "Work and Case Studies | ClearStack Studio",
    description:
      "See how ClearStack Studio turns product ideas, storefront concepts, AI workflows, and operational processes into focused digital prototypes.",
    path: "/work",
    image: socialImages.projects,
    imageAlt: "ClearStack Studio work and case studies social preview."
  })
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
        <article className="border border-sky-200/25 bg-sky-200/[0.05] p-8 shadow-glow/20 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="border border-sky-200/40 bg-sky-200/[0.1] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-100">
              Travel Platform
            </span>
            <span className="border border-white/10 bg-slateInk/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100">
              ClearStack-operated product
            </span>
          </div>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            RoamTheCities is a travel platform built and operated by ClearStack Studio.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
            A travel planning and discovery platform built and operated by ClearStack Studio, with product foundations for destinations, trips, recommendations, affiliate attribution, analytics, feature flags, and operational monitoring.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {roamTheCitiesProduct.liveUrl ? (
              <TrackedLink
                className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
                eventLabel="work_roamthecities_live"
                eventName="live_demo_click"
                href={roamTheCitiesProduct.liveUrl}
              >
                Visit RoamTheCities
              </TrackedLink>
            ) : (
              <span className="inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-300">
                Website coming soon
              </span>
            )}
            <TrackedLink
              className="focus-ring inline-flex items-center justify-center border border-sky-200/40 px-5 py-3 text-sm font-semibold text-sky-100 transition hover:border-sky-200 hover:text-white"
              eventLabel="work_roamthecities_case_study"
              eventName="case_study_click"
              href={roamTheCitiesProduct.caseStudyPath}
            >
              View case study
            </TrackedLink>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <article className="border border-cyan-300/25 bg-cyan-300/[0.05] p-8 shadow-glow/20 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="border border-cyan-300/40 bg-cyan-300/[0.1] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
              Forecasting and simulation product
            </span>
            <span className="border border-white/10 bg-slateInk/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100">
              Prospective MVP
            </span>
          </div>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            ClearStack Sports Predictor turns leakage-safe modeling into immutable public forecasts.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
            A ClearStack Studio-developed NFL forecasting product combining chronological backtesting, transparent probability reporting, checksum-verified pregame artifacts, and a responsive Next.js interface.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {sportsPredictorProduct.liveUrl ? (
              <TrackedLink aria-label="Open ClearStack Sports Predictor in a new tab" className="focus-ring inline-flex min-h-11 items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift" eventLabel="work_sports_predictor_live" eventName="live_demo_click" href={sportsPredictorProduct.liveUrl} projectSlug={sportsPredictorProduct.slug} projectType={sportsPredictorProduct.category} rel="noopener noreferrer" target="_blank">
                Open Live Predictor
              </TrackedLink>
            ) : (
              <span className="inline-flex min-h-11 items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-300">Live predictor unavailable</span>
            )}
            <TrackedLink className="focus-ring inline-flex min-h-11 items-center justify-center border border-cyan-300/40 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyanGlow hover:text-white" eventLabel="work_sports_predictor_case_study" eventName="case_study_click" href={sportsPredictorProduct.caseStudyPath} projectSlug={sportsPredictorProduct.slug} projectType={sportsPredictorProduct.category}>
              View product case study
            </TrackedLink>
          </div>
        </article>
      </section>

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
            <TrackedLink
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              eventLabel="work_msw_live_dashboard_demo"
              eventName="live_demo_click"
              href={mswApplicationReviewDemoUrl}
            >
              View live dashboard demo
            </TrackedLink>
            <TrackedLink
              className="focus-ring inline-flex items-center justify-center border border-emerald-300/40 px-5 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-300 hover:text-white"
              eventLabel="work_msw_case_study"
              eventName="case_study_click"
              href="/work/msw-application-review/case-study"
            >
              View case study
            </TrackedLink>
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
            MVPs, RoamTheCities proves travel platform product architecture,
            ClearStack Sports Predictor proves transparent forecasting products,
            AI Fashion Model proves AI-assisted creative/product visualization
            prototypes, and MSW Application Review proves internal workflow
            dashboards.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
            Each project keeps scope honest: static proof where appropriate,
            mock data only for sensitive workflows, and future integrations only
            after the MVP direction is clear. MSW Application Review now includes a public-safe live mock-data dashboard demo.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              className="focus-ring inline-flex items-center justify-center border border-cyan-300/40 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyanGlow hover:text-slate-950"
              href="/results"
            >
              View results and outcomes
            </Link>
            <TrackedLink
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              eventLabel="work_cardscope_live"
              eventName="live_demo_click"
              href={cardScopeProduct.liveUrl ?? cardScopeProduct.caseStudyPath}
            >
              View CardScope
            </TrackedLink>
            <TrackedLink
              className="focus-ring inline-flex items-center justify-center border border-rose-200/40 px-5 py-3 text-sm font-semibold text-rose-100 transition hover:border-rose-200 hover:text-white"
              eventLabel="work_clearbloom_live"
              eventName="live_demo_click"
              href={clearBloomProduct.liveUrl ?? clearBloomProduct.caseStudyPath}
            >
              View live storefront demo
            </TrackedLink>
            <TrackedLink
              className="focus-ring inline-flex items-center justify-center border border-amber-100/30 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:border-amber-100 hover:text-white"
              eventLabel="work_clearbloom_case_study"
              eventName="case_study_click"
              href={clearBloomProduct.caseStudyPath}
            >
              Read ClearBloom case study
            </TrackedLink>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-amber-100/30 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:border-amber-100 hover:text-white"
              href="/work/ai-fashion-model"
            >
              View AI Fashion Model
            </Link>
            <TrackedLink
              className="focus-ring inline-flex items-center justify-center border border-emerald-300/40 px-5 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-300 hover:text-white"
              eventLabel="work_msw_live_dashboard_demo_bottom"
              eventName="live_demo_click"
              href={mswApplicationReviewDemoUrl}
            >
              View live dashboard demo
            </TrackedLink>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-emerald-300/40 px-5 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-300 hover:text-white"
              href="/work/msw-application-review"
            >
              View project overview
            </Link>
            <TrackedLink
              className="focus-ring inline-flex items-center justify-center border border-sky-200/40 px-5 py-3 text-sm font-semibold text-sky-100 transition hover:border-sky-200 hover:text-white"
              eventLabel="work_roamthecities_case_study_bottom"
              eventName="case_study_click"
              href={roamTheCitiesProduct.caseStudyPath}
            >
              View RoamTheCities case study
            </TrackedLink>
            <TrackedLink
              className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
              eventLabel="work_start_project"
              eventName="start_project_click"
              href="/start"
            >
              Start a project
            </TrackedLink>
          </div>
        </div>
      </section>
    </main>
  );
}
