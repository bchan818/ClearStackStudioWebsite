import type { Metadata } from "next";
import Link from "next/link";
import { StatusReportBuilder } from "@/components/StatusReportBuilder";

export const metadata: Metadata = {
  title: "Status Report Builder",
  description:
    "A static ClearStack Studio project status report builder for client-ready updates."
};

const workflowSteps = ["Track", "Update", "Launch", "Handoff"];

export default function StatusReportBuilderPage() {
  return (
    <main className="bg-slateInk">
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
          Status Report Builder
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Turn project updates into a polished client-ready status report.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Create a static browser-based communication draft for email, Slack, project meetings, or client documentation without adding backend storage.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
          {workflowSteps.map((step, index) => (
            <span className="border border-white/10 bg-white/[0.04] px-3 py-2" key={step}>
              {step}{index < workflowSteps.length - 1 ? " ->" : ""}
            </span>
          ))}
        </div>
        <div className="mt-6 border border-amber-100/30 bg-amber-100/[0.06] p-4 text-sm leading-6 text-amber-50">
          This builder creates a project communication draft only. Review all dates, commitments, scope changes, and client-facing statements before sending.
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
            href="#builder"
          >
            Build status report
          </a>
          <Link
            className="focus-ring inline-flex items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
            href="/project-tracker"
          >
            Project tracker
          </Link>
          <Link
            className="focus-ring inline-flex items-center justify-center border border-emerald-300/40 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emeraldLift hover:text-slate-950"
            href="/project-handoff"
          >
            Continue to handoff
          </Link>
        </div>
      </section>

      <div id="builder">
        <StatusReportBuilder />
      </div>
    </main>
  );
}
