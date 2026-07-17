import type { Metadata } from "next";
import Link from "next/link";

const summaryStats = [
  { label: "Project type", value: "Internal Workflow Dashboard" },
  { label: "Status", value: "Private workflow prototype" },
  { label: "Data posture", value: "Generic descriptions and mock-data positioning only" },
  { label: "Public demo", value: "Intentionally withheld" }
];

const approachItems = [
  "Organize applicant queues into review-ready dashboard routes.",
  "Separate applicants, reviews, assignments, reports, admin, reviewer, and settings areas.",
  "Plan review notes, statuses, and report/export interfaces before connecting real data.",
  "Keep public ClearStack Studio content generic so no applicant records or admissions documents are exposed."
];

const proofPoints = [
  "Internal dashboard builds",
  "Application/review workflows",
  "Role-based workflow planning",
  "Status tracking",
  "Report/export interface planning",
  "Privacy-conscious dashboard design",
  "Database-backed app architecture planning"
];

const futureRoadmap = [
  "Public-safe demo environment",
  "Mock seed database",
  "Role-based demo login",
  "Secure authentication",
  "Audit trail",
  "Exports",
  "Reviewer assignment workflow",
  "Deployment hardening"
];

export const metadata: Metadata = {
  title: "MSW Application Review Case Study | ClearStack Studio",
  description:
    "Case study for MSW Application Review, a case-study-only internal workflow dashboard proof project with mock-data positioning and privacy-safe boundaries."
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
            MSW Application Review: private workflow prototype for structured application review.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            A structured application review dashboard prototype for organizing reviewer queues, applicant statuses, review notes, reports, and administrative workflows.
          </p>
          <p className="mt-5 text-sm leading-6 text-slate-300 sm:text-base">
            This proof project is presented with generic descriptions and mock-data positioning only. No private applicant records, student data, admissions documents, or confidential review notes are shown in ClearStack Studio.
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
              View project overview
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
            Problem
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Manual review processes can become scattered across spreadsheets, emails, PDFs, and notes.
          </h2>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
            When review work is spread across disconnected tools, teams can lose track of reviewer queues, applicant statuses, notes, reports, assignments, and next actions. The goal of this proof project is to show how that workflow can be organized into a clearer internal dashboard pattern.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
          Approach
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Organize the process into dashboard routes for applicants, reviews, assignments, reports, admin, and settings.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {approachItems.map((item, index) => (
            <article className="border border-cyan-300/20 bg-cyan-300/[0.05] p-5" key={item}>
              <p className="text-sm font-semibold text-cyanGlow">0{index + 1}</p>
              <p className="mt-3 text-sm leading-6 text-slate-200">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            Build status and safety boundary
          </p>
          <div className="mt-4 grid gap-6 lg:grid-cols-2">
            <article className="border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-2xl font-semibold text-white">Local/private app build verified</h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                The private MSW Admissions app build has been verified with Prisma client generation and a production Next.js build. ClearStack Studio does not expose that private app, private route URLs, local development paths, applicant IDs, student names, admissions records, or review notes.
              </p>
            </article>
            <article className="border border-emerald-300/20 bg-emerald-300/[0.05] p-6">
              <h2 className="text-2xl font-semibold text-white">No public live demo yet</h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                The live public demo is intentionally withheld until a mock-data-only demo is prepared. The ClearStack Studio site links only to this project overview and case study for now.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
          What it proves
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Internal dashboard proof without exposing sensitive admissions information.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {proofPoints.map((point) => (
            <article className="border border-white/10 bg-white/[0.04] p-5" key={point}>
              <p className="text-sm font-semibold text-white">{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            Future roadmap
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            The next phase is a public-safe demo environment, not a private-data deployment.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {futureRoadmap.map((item) => (
              <article className="border border-white/10 bg-white/[0.03] p-5 text-sm font-semibold text-slate-200" key={item}>
                {item}
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              href="/contact"
            >
              Start a dashboard inquiry
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-emerald-300/60 hover:text-white"
              href="/work/msw-application-review"
            >
              View project overview
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
