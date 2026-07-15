import type { Metadata } from "next";
import Link from "next/link";

const dashboardFeatures = [
  {
    title: "Structured applicant view",
    text: "Mock applicant information is organized into review-friendly sections without exposing real student records."
  },
  {
    title: "Status tracking",
    text: "Review stages, needs-review flags, and decision support notes are represented as safe static dashboard states."
  },
  {
    title: "Reviewer workflow",
    text: "The interface focuses on what reviewers need to scan, compare, and move forward in a repeatable process."
  },
  {
    title: "Internal tool MVP",
    text: "The proof stays static and generic while showing how manual review processes can become operational dashboards."
  }
];

const workflowSteps = [
  "Convert a manual review process into clear stages and dashboard views.",
  "Separate applicant summary, status, review notes, and next action into readable cards.",
  "Use generic mock data only so no private student or admissions information is exposed.",
  "Plan future database, authentication, permissions, and audit logging only after workflow scope is approved."
];

const roadmapItems = [
  "Role-based authentication and reviewer permissions.",
  "Database-backed application records and controlled document storage.",
  "Audit logs, export controls, and privacy review before handling sensitive data.",
  "Integrations with approved admissions or CRM systems only after security and compliance review."
];

export const metadata: Metadata = {
  title: "MSW Application Review | ClearStack Studio",
  description:
    "MSW Application Review is a mock internal workflow dashboard proof project by ClearStack Studio for structured application review and operational efficiency."
};

export default function MswApplicationReviewPage() {
  return (
    <main className="bg-slateInk">
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-24 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
              Internal workflow dashboard
            </p>
            <span className="border border-emerald-300/40 bg-emerald-300/[0.12] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100">
              Mock MVP
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            MSW Application Review turns a manual review process into a structured dashboard prototype.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            From manual review process to structured application dashboard. This proof project shows how ClearStack Studio can build internal workflow tools for application review, status tracking, reviewer-friendly dashboards, and operational decision support using safe mock content only.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Workflow dashboard", "Status tracking", "Decision support", "Mock data only"].map((tag) => (
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
              href="/contact"
            >
              Start a workflow dashboard inquiry
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-emerald-300/40 px-5 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-300 hover:text-white"
              href="/work/msw-application-review/case-study"
            >
              Read case study
            </Link>
          </div>
        </div>

        <div className="border border-emerald-300/20 bg-emerald-300/[0.05] p-5 shadow-[0_0_80px_rgba(52,211,153,0.12)]">
          <div className="min-h-[420px] border border-white/10 bg-[#081827] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-100">
              Dashboard preview
            </p>
            <div className="mt-8 grid gap-4">
              <div className="border border-white/15 bg-slateInk p-5">
                <p className="text-sm text-slate-400">Review queue</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Applicant review batch
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Generic mock records grouped by status, reviewer action, and decision support notes.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["Ready", "12"],
                  ["Needs review", "5"],
                  ["Follow-up", "3"]
                ].map(([label, value]) => (
                  <div className="border border-emerald-300/20 bg-emerald-300/[0.06] p-4" key={label}>
                    <p className="text-sm text-slate-300">{label}</p>
                    <p className="mt-2 text-3xl font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-6 text-sm leading-6 text-slate-400">
              Static mock dashboard only. No real applicant names, private student data, admissions records, database, authentication, or integrations are included.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            Dashboard Features
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A practical internal tool MVP for structured review work.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {dashboardFeatures.map((feature) => (
              <article className="border border-white/10 bg-white/[0.04] p-5" key={feature.title}>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            MVP Workflow
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            From manual queue to reviewer-friendly dashboard.
          </h2>
          <div className="mt-8 grid gap-3">
            {workflowSteps.map((step, index) => (
              <div className="border border-cyan-300/20 bg-cyan-300/[0.05] p-4 text-sm leading-6 text-slate-200" key={step}>
                <span className="font-semibold text-cyanGlow">0{index + 1}. </span>
                {step}
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            Future Roadmap
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Sensitive workflow systems need security and privacy planning first.
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
            Use this pattern for internal dashboards and operational workflow tools.
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
            MSW Application Review is a proof project for turning messy internal processes into clear, review-ready MVP dashboards while protecting privacy and keeping sensitive-data features out of scope until properly approved.
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
              href="/work"
            >
              View all work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
