"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";

type ToolStatus = "Available" | "Planned";
type ToolGroup = "Plan" | "Manage" | "Launch";
type Tool = {
  name: string;
  slug: string;
  href: string;
  purpose: string;
  stage: string;
  storage: "Browser-local" | "No storage";
  status: ToolStatus;
  group: ToolGroup;
};

const workflowSteps = [
  { label: "Inquiry", href: "/start", slug: "start" },
  { label: "Proposal", href: "/proposal-builder", slug: "proposal-builder" },
  { label: "SOW", href: "/sow-builder", slug: "sow-builder" },
  { label: "Build", href: "/project-tracker", slug: "project-tracker" },
  { label: "Status", href: "/status-report-builder", slug: "status-report-builder" },
  { label: "Feedback", href: "/client-feedback", slug: "client-feedback" },
  { label: "Launch", href: "/launch-acceptance", slug: "launch-acceptance" },
  { label: "Handoff", href: "/project-handoff", slug: "project-handoff" }
];

const tools: Tool[] = [
  {
    name: "Start Project",
    slug: "start",
    href: "/start",
    purpose: "Capture a structured project inquiry and create a reviewable summary.",
    stage: "Inquiry",
    storage: "No storage",
    status: "Available",
    group: "Plan"
  },
  {
    name: "Proposal Builder",
    slug: "proposal-builder",
    href: "/proposal-builder",
    purpose: "Turn an inquiry into a preliminary project scope and proposal outline.",
    stage: "Proposal",
    storage: "No storage",
    status: "Available",
    group: "Plan"
  },
  {
    name: "SOW Builder",
    slug: "sow-builder",
    href: "/sow-builder",
    purpose: "Create a structured Statement of Work planning draft.",
    stage: "SOW",
    storage: "No storage",
    status: "Available",
    group: "Plan"
  },
  {
    name: "Project Tracker",
    slug: "project-tracker",
    href: "/project-tracker",
    purpose: "Track leads, project stages, next actions, target dates, and handoff status in the browser.",
    stage: "Build",
    storage: "Browser-local",
    status: "Available",
    group: "Manage"
  },
  {
    name: "Status Report Builder",
    slug: "status-report-builder",
    href: "/status-report-builder",
    purpose: "Create client-ready project updates covering progress, priorities, risks, and milestones.",
    stage: "Status",
    storage: "No storage",
    status: "Available",
    group: "Manage"
  },
  {
    name: "Client Feedback",
    slug: "client-feedback",
    href: "/client-feedback",
    purpose: "Structure revision requests, priorities, decisions, and next actions.",
    stage: "Feedback",
    storage: "No storage",
    status: "Available",
    group: "Manage"
  },
  {
    name: "Launch Acceptance",
    slug: "launch-acceptance",
    href: "/launch-acceptance",
    purpose: "Document launch readiness, approvals, known limitations, and final revision status.",
    stage: "Launch",
    storage: "No storage",
    status: "Available",
    group: "Launch"
  },
  {
    name: "Project Handoff",
    slug: "project-handoff",
    href: "/project-handoff",
    purpose: "Create a delivery summary covering live links, repositories, deployment, maintenance, and ownership transfer.",
    stage: "Handoff",
    storage: "No storage",
    status: "Available",
    group: "Launch"
  },
  {
    name: "QA Checklist",
    slug: "qa-checklist",
    href: "/qa-checklist",
    purpose: "Review functionality, navigation, mobile behavior, metadata, deployment, and demo honesty.",
    stage: "Launch QA",
    storage: "No storage",
    status: "Available",
    group: "Launch"
  },
  {
    name: "Launch Readiness",
    slug: "launch-readiness",
    href: "/launch-readiness",
    purpose: "Explain how ClearStack prepares focused products for launch and handoff.",
    stage: "Launch prep",
    storage: "No storage",
    status: "Available",
    group: "Launch"
  }
];

const groups: ToolGroup[] = ["Plan", "Manage", "Launch"];

function trackToolOpen(slug: string, ctaLocation: string) {
  track("studio_tool_open", {
    tool_slug: slug,
    cta_location: ctaLocation
  });
}

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <article className="flex h-full flex-col border border-white/10 bg-white/[0.04] p-5 shadow-glow">
      <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.16em]">
        <span className="border border-cyan-300/40 px-2 py-1 text-cyan-100">Stage: {tool.stage}</span>
        <span className="border border-emerald-300/40 px-2 py-1 text-emerald-100">Status: {tool.status}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white">{tool.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{tool.purpose}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Storage: {tool.storage}</p>
      {tool.status === "Available" ? (
        <Link
          className="focus-ring mt-5 inline-flex items-center justify-center border border-white/15 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
          href={tool.href}
          onClick={() => trackToolOpen(tool.slug, "studio_tools_card")}
        >
          Open tool
        </Link>
      ) : (
        <span className="mt-5 inline-flex items-center justify-center border border-slate-500/40 px-4 py-3 text-sm font-semibold text-slate-400">
          Planned
        </span>
      )}
    </article>
  );
}

export function StudioToolsDashboard() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
      <div className="border border-cyan-300/20 bg-cyan-300/[0.05] p-5 shadow-glow sm:p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Workflow overview</p>
        <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
          {workflowSteps.map((step, index) => (
            <Link
              className="focus-ring border border-white/10 bg-slateInk/80 px-3 py-2 transition hover:border-cyan-300/50 hover:text-white"
              href={step.href}
              key={step.slug}
              onClick={() => trackToolOpen(step.slug, "studio_tools_workflow")}
            >
              {step.label}{index < workflowSteps.length - 1 ? " ->" : ""}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-10">
        {groups.map((group) => (
          <section key={group}>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">{group}</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">{group} tools</h2>
              </div>
            </div>
            <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {tools.filter((tool) => tool.group === group).map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-12 grid gap-6 border border-white/10 bg-white/[0.04] p-6 shadow-glow lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Privacy and safety</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Use the tools for drafts, not sensitive storage.</h2>
        </div>
        <ul className="grid gap-3 text-sm leading-6 text-slate-300">
          <li>Do not enter passwords, API keys, payment details, protected records, or confidential credentials.</li>
          <li>Browser-local data is not synced or backed up.</li>
          <li>Draft generators do not automatically send or save entered information.</li>
          <li>Final legal, financial, ownership, and project terms require a separate written agreement.</li>
        </ul>
      </section>

      <section className="mt-12">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Recommended workflows</p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            { name: "New client project", path: "Start Project -> Proposal Builder -> SOW Builder" },
            { name: "Active build", path: "Project Tracker -> Status Report -> Client Feedback" },
            { name: "Launch and delivery", path: "QA Checklist -> Launch Acceptance -> Project Handoff" }
          ].map((workflow) => (
            <div className="border border-white/10 bg-slateInk/70 p-5" key={workflow.name}>
              <h3 className="text-lg font-semibold text-white">{workflow.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{workflow.path}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 border border-emerald-300/20 bg-emerald-300/[0.05] p-6 text-center shadow-glow sm:p-8">
        <h2 className="text-3xl font-semibold tracking-tight text-white">Start with the right tool for the next step.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-300">
          Use the dashboard as the central index for ClearStack planning, project management, launch, and handoff workflows.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
            href="/start"
            onClick={() => trackToolOpen("start", "studio_tools_primary_cta")}
          >
            Start a project
          </Link>
          <Link
            className="focus-ring inline-flex items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
            href="/services"
          >
            View services
          </Link>
        </div>
      </section>
    </section>
  );
}
