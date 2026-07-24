import type { Metadata } from "next";
import Link from "next/link";
import { ProposalBuilder } from "@/components/ProposalBuilder";

export const metadata: Metadata = {
  title: "Proposal Builder",
  description:
    "A static ClearStack Studio project scope and proposal builder for creating a copyable planning draft."
};

export default function ProposalBuilderPage() {
  return (
    <main className="bg-slateInk">
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
          Proposal Builder
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Turn a project request into a structured proposal draft.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Use this internal-style static tool to organize goals, users, features, timelines, assumptions, responsibilities, and next steps before sending a formal scope discussion.
        </p>
        <div className="mt-6 border border-amber-100/30 bg-amber-100/[0.06] p-4 text-sm leading-6 text-amber-50">
          This builder creates a preliminary planning draft only. Final scope, pricing, ownership, timelines, and terms are confirmed in a written project agreement.
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
            href="#builder"
          >
            Build a proposal draft
          </a>
          <Link
            className="focus-ring inline-flex items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
            href="/services"
          >
            Review services
          </Link>
        </div>
      </section>

      <div id="builder">
        <ProposalBuilder />
      </div>
    </main>
  );
}
