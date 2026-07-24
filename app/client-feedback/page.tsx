import type { Metadata } from "next";
import Link from "next/link";
import { ClientFeedbackBuilder } from "@/components/ClientFeedbackBuilder";

export const metadata: Metadata = {
  title: "Client Feedback Builder",
  description:
    "A static ClearStack Studio feedback summary builder for documenting revision requests and client decisions."
};

const workflowSteps = ["Status Update", "Feedback", "Launch Approval", "Handoff"];

export default function ClientFeedbackPage() {
  return (
    <main className="bg-slateInk">
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
          Client Feedback
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Document feedback, revision requests, and scope decisions clearly.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Create a copyable communication draft for review rounds, requested changes, priorities, clarifications, and next steps without storing client information on a server.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
          {workflowSteps.map((step, index) => (
            <span className="border border-white/10 bg-white/[0.04] px-3 py-2" key={step}>
              {step}{index < workflowSteps.length - 1 ? " ->" : ""}
            </span>
          ))}
        </div>
        <div className="mt-6 border border-amber-100/30 bg-amber-100/[0.06] p-4 text-sm leading-6 text-amber-50">
          This builder creates a communication draft only. Review all revision requests, priorities, dates, scope implications, and client-facing statements before sending.
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
            href="#builder"
          >
            Build feedback summary
          </a>
          <Link
            className="focus-ring inline-flex items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
            href="/status-report-builder"
          >
            Status report builder
          </Link>
          <Link
            className="focus-ring inline-flex items-center justify-center border border-emerald-300/40 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emeraldLift hover:text-slate-950"
            href="/launch-acceptance"
          >
            Continue to launch acceptance
          </Link>
        </div>
      </section>

      <div id="builder">
        <ClientFeedbackBuilder />
      </div>
    </main>
  );
}
