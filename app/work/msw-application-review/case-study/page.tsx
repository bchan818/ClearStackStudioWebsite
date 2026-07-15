import type { Metadata } from "next";
import Link from "next/link";

const summaryStats = [
  { label: "Project type", value: "Internal workflow dashboard" },
  { label: "Primary use", value: "Application review" },
  { label: "Data posture", value: "Generic mock content only" },
  { label: "Status", value: "Static MVP proof" }
];

const builtItems = [
  "Mock application review dashboard surface",
  "Reviewer-friendly status and queue concepts",
  "Structured applicant information sections using generic placeholder content",
  "Decision support and operational efficiency positioning",
  "Privacy guardrails that avoid real student or admissions data"
];

const deferredItems = [
  "Real applicant records or confidential admissions data",
  "Authentication, role-based access, and reviewer permissions",
  "Database-backed applications or document uploads",
  "Audit logs, retention rules, and export controls",
  "Integrations with admissions, CRM, or student information systems"
];

const processSteps = [
  {
    title: "Manual process",
    text: "Start with a review workflow that may be scattered across email, spreadsheets, documents, and status notes."
  },
  {
    title: "MVP structure",
    text: "Organize the work into dashboard sections for status, applicant summary, reviewer notes, and next action."
  },
  {
    title: "Privacy-safe prototype",
    text: "Use only generic mock information so no private student data, real applicant names, or confidential admissions records are exposed."
  },
  {
    title: "Operational roadmap",
    text: "Plan secure data storage, permissions, integrations, and audit controls only after the workflow is validated."
  }
];

const proofPoints = [
  "Internal tools can reduce review friction when the workflow is structured before backend development begins.",
  "Sensitive dashboards should start with mock data and privacy guardrails before real records or integrations are introduced.",
  "ClearStack Studio can design operational MVPs for teams that need clearer status tracking, reviewer flow, and decision support."
];

export const metadata: Metadata = {
  title: "MSW Application Review Case Study | ClearStack Studio",
  description:
    "See how ClearStack Studio positions MSW Application Review as a privacy-safe internal workflow dashboard MVP for structured application review."
};

export default function MswApplicationReviewCaseStudyPage() {
  return (
    <main className="bg-slateInk">
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-24 lg:grid-cols-[1fr_0.8fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            Case Study
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            MSW Application Review: from manual review process to structured application dashboard.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            MSW Application Review shows how ClearStack Studio can turn a manual internal review process into a dashboard MVP with status tracking, structured information, reviewer-friendly views, and privacy-safe mock content.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              href="/contact"
            >
              Build an internal dashboard like this
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-emerald-300/40 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-300 hover:text-white"
              href="/work/msw-application-review"
            >
              View project page
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
            Project Overview
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A safer first step for operational application review tools.
          </h2>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
            The goal was to show how a manual review workflow could become a structured dashboard before any real applicant data, database, authentication, or admissions-system integration is introduced.
          </p>
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
            A dashboard MVP surface for structured review work.
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
            Real admissions workflows need privacy, security, and approval first.
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
            What It Proves
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            ClearStack Studio can build operational dashboards with privacy-aware MVP boundaries.
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {proofPoints.map((point) => (
              <article className="border border-emerald-300/20 bg-emerald-300/[0.05] p-5 text-sm leading-6 text-slate-300" key={point}>
                {point}
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              href="/contact"
            >
              Start a workflow dashboard inquiry
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-emerald-300/60 hover:text-white"
              href="/services"
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
