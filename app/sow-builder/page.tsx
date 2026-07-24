import type { Metadata } from "next";
import Link from "next/link";
import { SowBuilder } from "@/components/SowBuilder";

export const metadata: Metadata = {
  title: "SOW Builder",
  description:
    "A static ClearStack Studio Statement of Work builder for creating copyable project scope planning drafts."
};

const workflowSteps = ["Inquiry", "Proposal", "Statement of Work", "Build", "Launch", "Handoff"];

export default function SowBuilderPage() {
  return (
    <main className="bg-slateInk">
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
          SOW Builder
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Convert scope notes into a Statement of Work planning draft.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Use this static builder to organize project objectives, scope, deliverables, milestones, responsibilities, revisions, acceptance criteria, assumptions, and approval next steps.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
          {workflowSteps.map((step, index) => (
            <span className="border border-white/10 bg-white/[0.04] px-3 py-2" key={step}>
              {step}{index < workflowSteps.length - 1 ? " ->" : ""}
            </span>
          ))}
        </div>
        <div className="mt-6 border border-amber-100/30 bg-amber-100/[0.06] p-4 text-sm leading-6 text-amber-50">
          This builder creates a preliminary planning draft only. It is not legal advice, a signed contract, or a binding estimate. Final scope, pricing, ownership, payment terms, and responsibilities must be confirmed in a written agreement approved by all parties.
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
            href="#builder"
          >
            Build SOW draft
          </a>
          <Link
            className="focus-ring inline-flex items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
            href="/proposal-builder"
          >
            Back to proposal builder
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
        <SowBuilder />
      </div>
    </main>
  );
}
