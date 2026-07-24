import type { Metadata } from "next";
import Link from "next/link";
import { ProjectHandoffBuilder } from "@/components/ProjectHandoffBuilder";

export const metadata: Metadata = {
  title: "Project Handoff",
  description:
    "A static ClearStack Studio project handoff builder for creating copyable delivery documentation."
};

const workflowSteps = ["Inquiry", "Proposal", "Statement of Work", "Build", "Launch", "Handoff"];

export default function ProjectHandoffPage() {
  return (
    <main className="bg-slateInk">
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
          Project Handoff
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Create a structured delivery and client handoff summary.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Use this static builder to summarize delivered pages, features, links, deployment details, testing, known limitations, support, future roadmap items, and ownership-transfer steps.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
          {workflowSteps.map((step, index) => (
            <span className="border border-white/10 bg-white/[0.04] px-3 py-2" key={step}>
              {step}{index < workflowSteps.length - 1 ? " ->" : ""}
            </span>
          ))}
        </div>
        <div className="mt-6 border border-amber-100/30 bg-amber-100/[0.06] p-4 text-sm leading-6 text-amber-50">
          Do not enter passwords, API keys, private credentials, payment information, protected records, or other confidential data. Transfer sensitive information through an approved secure channel.
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
            href="#builder"
          >
            Build handoff draft
          </a>
          <Link
            className="focus-ring inline-flex items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
            href="/sow-builder"
          >
            Back to SOW builder
          </Link>
          <Link
            className="focus-ring inline-flex items-center justify-center border border-emerald-300/40 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emeraldLift hover:text-slate-950"
            href="/projects"
          >
            View proof projects
          </Link>
          <Link
            className="focus-ring inline-flex items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
            href="/contact"
          >
            Contact ClearStack
          </Link>
        </div>
      </section>

      <div id="builder">
        <ProjectHandoffBuilder />
      </div>
    </main>
  );
}
