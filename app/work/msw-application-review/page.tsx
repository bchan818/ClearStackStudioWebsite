import type { Metadata } from "next";
import Link from "next/link";

const dashboardFeatures = [
  {
    title: "Reviewer queues",
    text: "Organize applications by review status, reviewer ownership, next action, and follow-up needs."
  },
  {
    title: "Applicant status tracking",
    text: "Plan clear status views for applicant progress without exposing private applicant records in the public portfolio."
  },
  {
    title: "Review notes structure",
    text: "Shape how notes, review context, and decision support can be grouped for a repeatable review workflow."
  },
  {
    title: "Reports and exports planning",
    text: "Map reporting and export surfaces before connecting real data, retention rules, or approval processes."
  }
];

const proofPoints = [
  "Internal dashboard builds",
  "Application/review workflows",
  "Reviewer assignment flows",
  "Status tracking",
  "Report/export interface planning",
  "Privacy-conscious dashboard design",
  "Database-backed app architecture planning"
];

const safeRoutes = [
  "/",
  "/admin",
  "/applicants",
  "/applicants/[id]",
  "/applicants/[id]/review",
  "/applicants/new",
  "/assignments",
  "/login",
  "/reports",
  "/reviewer",
  "/settings",
  "/api/export"
];

const roadmapItems = [
  "Mock-data-only public demo",
  "Safe seed database",
  "Role-based demo login",
  "Secure authentication",
  "Audit trail",
  "Exports",
  "Reviewer assignment workflow",
  "Deployment hardening"
];

export const metadata: Metadata = {
  title: "MSW Application Review | ClearStack Studio",
  description:
    "MSW Application Review is a case-study-only internal workflow dashboard proof project for structured application review, reviewer queues, status tracking, and privacy-conscious dashboard design."
};

export default function MswApplicationReviewPage() {
  return (
    <main className="bg-slateInk">
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-24 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
              Internal Workflow Dashboard
            </p>
            <span className="border border-emerald-300/40 bg-emerald-300/[0.12] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100">
              Private workflow prototype
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            MSW Application Review is an internal dashboard proof project for structured application review.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            A structured application review dashboard prototype for organizing reviewer queues, applicant statuses, review notes, reports, and administrative workflows.
          </p>
          <p className="mt-5 text-sm leading-6 text-slate-300 sm:text-base">
            This proof project is presented with generic descriptions and mock-data positioning only. No private applicant records, student data, admissions documents, or confidential review notes are shown in ClearStack Studio.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Case-study-only", "Mock-data positioning", "No public live demo", "Privacy boundary"].map((tag) => (
              <span
                className="border border-emerald-300/30 bg-emerald-300/[0.08] px-3 py-2 text-sm text-emerald-100"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              href="/work/msw-application-review/case-study"
            >
              View case study
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-emerald-300/40 px-5 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-300 hover:text-white"
              href="/contact"
            >
              Start a dashboard inquiry
            </Link>
          </div>
        </div>

        <div className="border border-emerald-300/20 bg-emerald-300/[0.05] p-5 shadow-[0_0_80px_rgba(52,211,153,0.12)]">
          <div className="min-h-[420px] border border-white/10 bg-[#081827] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-100">
              Project Overview
            </p>
            <div className="mt-8 grid gap-4">
              <div className="border border-white/15 bg-slateInk p-5">
                <p className="text-sm text-slate-400">Status</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Private workflow prototype
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Local/private app build verified. A live public demo is intentionally withheld until a mock-data-only demo is prepared.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["Queue", "Review"],
                  ["Status", "Track"],
                  ["Reports", "Plan"]
                ].map(([label, value]) => (
                  <div className="border border-emerald-300/20 bg-emerald-300/[0.06] p-4" key={label}>
                    <p className="text-sm text-slate-300">{label}</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-6 text-sm leading-6 text-slate-400">
              No private app URL, applicant route, applicant ID, student name, admissions record, or confidential review note is linked or displayed here.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            What it proves
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            ClearStack Studio can plan sensitive internal dashboards without exposing private data.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {proofPoints.map((point) => (
              <article className="border border-white/10 bg-white/[0.04] p-5" key={point}>
                <p className="text-sm font-semibold text-white">{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            Planned app route structure
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            The private build is organized around operational dashboard routes.
          </h2>
          <p className="mt-5 text-sm leading-6 text-slate-300 sm:text-base">
            These route groups describe the app architecture only. They are not public links and do not expose private applicant data.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {safeRoutes.map((route) => (
              <div className="border border-cyan-300/20 bg-cyan-300/[0.05] p-4 text-sm font-semibold text-cyan-100" key={route}>
                {route}
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            Future roadmap
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Public sharing waits for a safe mock-data demo path.
          </h2>
          <div className="mt-8 grid gap-3">
            {roadmapItems.map((item) => (
              <div className="border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-slate-300" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl border border-emerald-300/20 bg-emerald-300/[0.05] p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            ClearStack Studio service connection
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Build an internal dashboard like this with safe MVP boundaries first.
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
            MSW Application Review is positioned as case-study-only proof for internal dashboards, review workflows, status tracking, and privacy-conscious architecture planning.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              href="/contact"
            >
              Build an internal dashboard like this
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-emerald-300/60 hover:text-white"
              href="/work/msw-application-review/case-study"
            >
              View case study
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
