import type { Metadata } from "next";
import Link from "next/link";
import { ProjectTracker } from "@/components/ProjectTracker";

export const metadata: Metadata = {
  title: "Project Tracker",
  description:
    "A browser-local ClearStack Studio lead and project tracker for operational planning."
};

const workflowSteps = ["Inquiry", "Proposal", "SOW", "Build", "Launch", "Handoff"];

export default function ProjectTrackerPage() {
  return (
    <main className="bg-slateInk">
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
          Project Tracker
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Track ClearStack leads, project stages, launches, and handoffs in one browser-local workspace.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Use this lightweight internal planning tool to monitor inquiries, proposal status, SOW status, next actions, target dates, and handoff progress without adding a backend.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
          {workflowSteps.map((step, index) => (
            <span className="border border-white/10 bg-white/[0.04] px-3 py-2" key={step}>
              {step}{index < workflowSteps.length - 1 ? " ->" : ""}
            </span>
          ))}
        </div>
        <div className="mt-6 border border-amber-100/30 bg-amber-100/[0.06] p-4 text-sm leading-6 text-amber-50">
          Tracker data is stored only in this browser. It is not synced, backed up, or submitted to ClearStack Studio servers.
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
            href="#tracker"
          >
            Open tracker
          </a>
          <Link
            className="focus-ring inline-flex items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
            href="/start"
          >
            Start inquiry
          </Link>
          <Link
            className="focus-ring inline-flex items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
            href="/proposal-builder"
          >
            Proposal builder
          </Link>
          <Link
            className="focus-ring inline-flex items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
            href="/sow-builder"
          >
            SOW builder
          </Link>
          <Link
            className="focus-ring inline-flex items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
            href="/project-handoff"
          >
            Project handoff
          </Link>
          <Link
            className="focus-ring inline-flex items-center justify-center border border-emerald-300/40 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emeraldLift hover:text-slate-950"
            href="/status-report-builder"
          >
            Status report builder
          </Link>
        </div>
      </section>

      <div id="tracker">
        <ProjectTracker />
      </div>
    </main>
  );
}
