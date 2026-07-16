import type { Metadata } from "next";
import Link from "next/link";
import { cardScopeLiveUrl, clearBloomLiveUrl } from "@/lib/siteLinks";

const projectPaths = [
  {
    title: "MVP Build",
    eyebrow: "Software product proof",
    who: "Founders, creators, and small businesses with a product idea that needs a useful first version.",
    build:
      "Landing pages, core product screens, prototype flows, launch-ready MVP structure, and validation paths.",
    proof: "CardScope",
    proofHref: "/work/cardscope/case-study",
    liveHref: cardScopeLiveUrl,
    liveLabel: "View live MVP",
    scope: "1 focused user flow, core pages, simple mock data, deployment, and launch checklist.",
    cta: "Start an MVP inquiry",
    accent: "cyan"
  },
  {
    title: "Storefront MVP",
    eyebrow: "Inquiry-ready commerce proof",
    who: "Beauty, wellness, fashion, lifestyle, food/product, boutique ecommerce, and creator merchandise brands.",
    build:
      "Product catalog, product detail pages, brand storytelling, inquiry checkout, policy pages, and future ecommerce upgrade path.",
    proof: "ClearBloom Beauty",
    proofHref: "/work/clearbloom-beauty/case-study",
    liveHref: clearBloomLiveUrl,
    liveLabel: "View live storefront demo",
    scope: "Polished storefront surface with no live payments, inventory, shipping, or tax systems connected yet.",
    cta: "Start a storefront inquiry",
    accent: "rose"
  },
  {
    title: "AI-Powered Tool",
    eyebrow: "AI-assisted prototype",
    who: "Creators, retail teams, product thinkers, and businesses testing AI-assisted workflows or visual concepts.",
    build:
      "Prompt workflows, concept boards, AI-assisted interface prototypes, review states, and clear guardrails before real AI APIs.",
    proof: "AI Fashion Model",
    proofHref: "/work/ai-fashion-model/case-study",
    scope: "Static prototype with mock content, no API keys, no model training, no auth, and no database.",
    cta: "Start an AI tool inquiry",
    accent: "fuchsia"
  },
  {
    title: "Internal Dashboard",
    eyebrow: "Operational workflow MVP",
    who: "Teams with manual review, tracking, approval, reporting, intake, or decision-support workflows.",
    build:
      "Reviewer-friendly dashboards, status tracking, structured records, decision support screens, and workflow maps.",
    proof: "MSW Application Review",
    proofHref: "/work/msw-application-review/case-study",
    scope: "Mock-data dashboard first; auth, databases, permissions, audit logs, and integrations come later.",
    cta: "Start a workflow dashboard inquiry",
    accent: "emerald"
  },
  {
    title: "Website/App Refresh",
    eyebrow: "Conversion and clarity pass",
    who: "Businesses, creators, and teams with an existing site, app, or concept that needs better structure and polish.",
    build:
      "Content cleanup, improved navigation, responsive layouts, service/work sections, stronger CTAs, and deployment polish.",
    proof: "ClearStack Studio portfolio",
    proofHref: "/work",
    scope: "Focused improvement pass across the pages and flows that matter most for launch or conversion.",
    cta: "Start a refresh inquiry",
    accent: "slate"
  }
];

const nextSteps = [
  {
    title: "Clarify the idea",
    text: "Start with the goal, audience, current materials, and the problem the first version needs to solve."
  },
  {
    title: "Define the first version",
    text: "Cut the idea down to the smallest useful scope that can be built, shown, and improved."
  },
  {
    title: "Build the core experience",
    text: "Create the page, prototype, storefront, tool, dashboard, or workflow surface with honest MVP boundaries."
  },
  {
    title: "Launch and improve",
    text: "Deploy the static or MVP experience, verify the key routes, then use feedback to decide the next upgrade."
  }
];

const inquiryDetails = [
  "Project type",
  "Goal",
  "Audience/users",
  "Timeline",
  "Must-have features",
  "Existing links or references",
  "Budget range if known"
];

const accentStyles = {
  cyan: "border-cyan-300/20 bg-cyan-300/[0.05] text-cyan-100",
  rose: "border-rose-200/20 bg-rose-200/[0.06] text-rose-100",
  fuchsia: "border-fuchsia-200/20 bg-fuchsia-200/[0.06] text-fuchsia-100",
  emerald: "border-emerald-300/20 bg-emerald-300/[0.06] text-emerald-100",
  slate: "border-white/10 bg-white/[0.04] text-slate-100"
};

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Start a ClearStack Studio project by choosing the right inquiry path for an MVP, storefront MVP, AI-powered tool, internal dashboard, or website/app refresh."
};

export default function StartPage() {
  return (
    <main className="bg-slateInk">
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-24 lg:grid-cols-[1fr_0.82fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            Start a Project
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Start with the right first version.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Tell ClearStack Studio what you’re trying to launch, and we’ll help shape the simplest useful version.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              href="/contact"
            >
              Start your project inquiry
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
              href="/projects"
            >
              Compare proof projects
            </Link>
          </div>
        </div>

        <div className="border border-white/10 bg-white/[0.04] p-6 shadow-glow sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emeraldLift">
            What ClearStack can build
          </p>
          <div className="mt-6 grid gap-3">
            {projectPaths.map((path) => (
              <Link
                className="focus-ring flex items-center justify-between gap-4 border border-white/10 bg-slateInk/70 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-300/50 hover:text-white"
                href={path.proofHref}
                key={path.title}
              >
                <span>{path.title}</span>
                <span className="text-xs text-slate-500">{path.proof}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            Choose a path
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Pick the project type closest to what you need.
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {projectPaths.map((path) => {
              const style = accentStyles[path.accent as keyof typeof accentStyles];

              return (
                <article className={`border p-6 ${style}`} key={path.title}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-80">
                    {path.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {path.title}
                  </h3>
                  <div className="mt-6 grid gap-4 text-sm leading-6 text-slate-300">
                    <div>
                      <p className="font-semibold text-slate-100">Who it is for</p>
                      <p className="mt-1">{path.who}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-100">What ClearStack can build</p>
                      <p className="mt-1">{path.build}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-100">Typical starting scope</p>
                      <p className="mt-1">{path.scope}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
                      href="/contact"
                    >
                      {path.cta}
                    </Link>
                    <Link
                      className="focus-ring inline-flex items-center justify-center border border-white/15 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
                      href={path.proofHref}
                    >
                      See {path.proof}
                    </Link>
                    {path.liveHref ? (
                      <Link
                        className="focus-ring inline-flex items-center justify-center border border-amber-100/40 px-4 py-3 text-sm font-semibold text-amber-100 transition hover:bg-amber-100 hover:text-slate-950"
                        href={path.liveHref}
                      >
                        {path.liveLabel}
                      </Link>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
          What happens next
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          A simple process from rough idea to useful first version.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {nextSteps.map((step, index) => (
            <article className="border border-white/10 bg-white/[0.04] p-5" key={step.title}>
              <p className="text-sm font-semibold text-cyanGlow">0{index + 1}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
              What to include
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Send enough context for a useful first reply.
            </h2>
            <p className="mt-5 text-sm leading-6 text-slate-300 sm:text-base">
              No connected form is needed yet. Use this checklist to write a clear project inquiry through the Contact page.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {inquiryDetails.map((detail) => (
              <div className="border border-white/10 bg-white/[0.04] p-4 text-sm font-medium text-slate-200" key={detail}>
                {detail}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="border border-cyan-300/20 bg-cyan-300/[0.05] p-8 text-center sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            Ready to shape the first version?
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Start with the project path that matches your idea, then use proof projects to guide the scope.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              href="/contact"
            >
              Start your project inquiry
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
              href="/projects"
            >
              Compare proof projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
