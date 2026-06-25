import type { Metadata } from "next";
import Link from "next/link";
import { MvpServiceCta } from "@/components/MvpServiceCta";

const summaryStats = [
  { label: "Project type", value: "Standalone MVP" },
  { label: "Parent brand", value: "ClearStack Studio" },
  { label: "Audience", value: "Collectors, sellers, hobbyists" },
  { label: "Live app", value: "cardscope-mvp.vercel.app" }
];

const builtItems = [
  "Standalone CardScope MVP app",
  "Manual card search and mock card detail pages",
  "Collection dashboard and watchlist preview",
  "Pricing, Pro preview, seller tools, roadmap, demo, pitch, and early-access pages",
  "ClearStack Studio product teaser, Live MVP badge, and MVP service CTA"
];

const deferredItems = [
  "Authentication and user accounts",
  "Database-backed saved collections",
  "Real payment processing",
  "Live card pricing APIs or scraping",
  "Camera/scanner workflows",
  "Native mobile app"
];

const processSteps = [
  {
    title: "Idea",
    text: "Position CardScope as a simple collection tracker and pricing workflow for card collectors before investing in advanced scanner or marketplace features."
  },
  {
    title: "MVP scope",
    text: "Keep the first version focused on manual search, mock card data, collection tracking, product pages, and conversion paths."
  },
  {
    title: "Validation layer",
    text: "Add Pro preview, roadmap, early-access FAQ, guided demo, and founder pitch pages to test interest before backend work."
  },
  {
    title: "Studio proof",
    text: "Use the live CardScope MVP as a ClearStack Studio case study and proof point for future MVP clients."
  }
];

const proofPoints = [
  "A small idea can become a shareable product without overbuilding the backend first.",
  "A live MVP can validate product direction, pricing, and feature interest before expensive integrations.",
  "ClearStack Studio can connect product strategy, landing pages, prototype UX, and deployment into one practical launch path."
];

export const metadata: Metadata = {
  title: "CardScope Case Study | ClearStack Studio",
  description:
    "See how ClearStack Studio shaped CardScope from product idea to live MVP, including scope, launch result, guardrails, and client-ready proof points."
};

export default function CardScopeCaseStudyPage() {
  return (
    <main className="bg-slateInk">
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-24 lg:grid-cols-[1fr_0.8fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            Case Study
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            CardScope: from product idea to live MVP.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            CardScope shows how ClearStack Studio can turn an early product idea
            into a real, shareable MVP with a clear scope, live deployment,
            conversion path, and honest roadmap guardrails.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              href="https://cardscope-mvp.vercel.app"
            >
              View live MVP
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
              href="/contact"
            >
              Start your MVP project
            </Link>
          </div>
        </div>

        <div className="border border-white/10 bg-white/[0.04] p-5 shadow-glow">
          <div className="grid gap-4">
            {summaryStats.map((stat) => (
              <div className="border border-white/10 bg-slateInk p-4" key={stat.label}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {stat.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            The MVP Process
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A focused path from concept to validation.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article className="border border-white/10 bg-white/[0.03] p-5" key={step.title}>
                <p className="text-sm font-semibold text-cyanGlow">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            What Was Built
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            A launchable product surface without premature backend complexity.
          </h2>
          <div className="mt-8 grid gap-3">
            {builtItems.map((item) => (
              <div className="border border-cyan-300/20 bg-cyan-300/[0.05] p-4 text-sm leading-6 text-slate-200" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            Intentionally Deferred
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            The MVP stays honest about what comes later.
          </h2>
          <div className="mt-8 grid gap-3">
            {deferredItems.map((item) => (
              <div className="border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-slate-300" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            Launch Result
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            CardScope is now a live flagship proof point for ClearStack Studio.
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {proofPoints.map((point) => (
              <article className="border border-emerald-300/20 bg-emerald-300/[0.05] p-5 text-sm leading-6 text-slate-300" key={point}>
                {point}
              </article>
            ))}
          </div>
        </div>
      </section>

      <MvpServiceCta />
    </main>
  );
}
