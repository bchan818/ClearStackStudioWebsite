"use client";

import { useMemo, useState } from "react";
import { track } from "@vercel/analytics";

type ProjectType =
  | "Product MVP"
  | "Storefront MVP"
  | "AI-Powered Tool"
  | "Internal Workflow Dashboard"
  | "Website/App Refresh";

type ProposalForm = {
  projectName: string;
  projectType: ProjectType;
  projectGoal: string;
  intendedUsers: string;
  mustHaveFeatures: string;
  futureFeatures: string;
  targetTimeline: string;
  budgetRange: string;
  existingLink: string;
  constraints: string;
};

const projectTypes: ProjectType[] = [
  "Product MVP",
  "Storefront MVP",
  "AI-Powered Tool",
  "Internal Workflow Dashboard",
  "Website/App Refresh"
];

const initialForm: ProposalForm = {
  projectName: "",
  projectType: "Product MVP",
  projectGoal: "",
  intendedUsers: "",
  mustHaveFeatures: "",
  futureFeatures: "",
  targetTimeline: "",
  budgetRange: "",
  existingLink: "",
  constraints: ""
};

const scopeSuggestions: Record<ProjectType, string[]> = {
  "Product MVP": [
    "Landing page",
    "Core user journey",
    "Primary workflow",
    "Dashboard or structured interface",
    "Mock or production-ready data plan",
    "Deployment-ready build"
  ],
  "Storefront MVP": [
    "Branded storefront",
    "Product catalog",
    "Product pages",
    "Inquiry or commerce-ready flow",
    "Policy/customer-information pages",
    "Future payment/inventory roadmap"
  ],
  "AI-Powered Tool": [
    "Input or prompt workflow",
    "Results/output interface",
    "Usage boundaries",
    "Prototype testing flow",
    "Future API integration plan"
  ],
  "Internal Workflow Dashboard": [
    "Dashboard navigation",
    "Record/status views",
    "Filters and summaries",
    "Review or operational workflow",
    "Mock-data structure",
    "Privacy and permissions planning"
  ],
  "Website/App Refresh": [
    "Content and navigation review",
    "Responsive UI improvements",
    "Conversion-path improvements",
    "Accessibility and performance review",
    "Deployment and handoff"
  ]
};

const fieldClass =
  "mt-2 w-full border border-white/10 bg-slateInk/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70";

const requiredFields: Array<keyof ProposalForm> = [
  "projectName",
  "projectGoal",
  "intendedUsers",
  "mustHaveFeatures",
  "targetTimeline",
  "budgetRange"
];

function valueOrFallback(value: string, fallback = "To be confirmed") {
  return value.trim() || fallback;
}

function splitLines(value: string) {
  return value
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function bulletList(items: string[]) {
  return items.length ? items.map((item) => `- ${item}`).join("\n") : "- To be confirmed during scope review";
}

function buildProposal(form: ProposalForm) {
  const mustHaves = splitLines(form.mustHaveFeatures);
  const futureFeatures = splitLines(form.futureFeatures);
  const suggestions = scopeSuggestions[form.projectType];

  return [
    `Project Scope and Proposal Draft: ${valueOrFallback(form.projectName, "Unnamed project")}`,
    "",
    "NOTICE",
    "This builder creates a preliminary planning draft only. Final scope, pricing, ownership, timelines, and terms are confirmed in a written project agreement.",
    "This static tool does not submit, save, email, or store entered information.",
    "",
    "1. Project overview",
    `Project/client name: ${valueOrFallback(form.projectName)}`,
    `Project type: ${form.projectType}`,
    `Main goal: ${valueOrFallback(form.projectGoal)}`,
    `Intended users: ${valueOrFallback(form.intendedUsers)}`,
    `Existing website or app: ${valueOrFallback(form.existingLink, "None provided")}`,
    "",
    "2. Recommended first-version scope",
    bulletList([...suggestions, ...mustHaves]),
    "",
    "3. Included deliverables",
    bulletList([
      "Scoped first-version plan",
      "Responsive interface for core screens/pages",
      "Reusable components where practical",
      "Deployment-ready build",
      "Basic handoff documentation",
      "Lint/build verification before delivery"
    ]),
    "",
    "4. Out-of-scope items",
    bulletList([
      "Features not listed in the approved first-version scope",
      "Payments, authentication, databases, external APIs, or automations unless separately scoped",
      "Third-party subscriptions, hosting, domains, licenses, and recurring vendor fees unless stated in the agreement",
      "Legal, compliance, copywriting, photography, or brand identity work unless separately scoped",
      ...(futureFeatures.length ? futureFeatures.map((feature) => `Future feature for later scope: ${feature}`) : [])
    ]),
    "",
    "5. Proposed phases",
    bulletList([
      "Discovery and scope confirmation",
      "Structure, content, and workflow planning",
      "Interface and component build",
      "Review rounds and focused revisions",
      "Launch-readiness checks, deployment setup, and handoff"
    ]),
    "",
    "6. Estimated timeline range",
    `Target timeline: ${valueOrFallback(form.targetTimeline)}. Final timeline depends on approved scope, content readiness, feedback speed, integrations, and revision rounds.`,
    "",
    "7. Client responsibilities",
    bulletList([
      "Provide goals, audience details, content, brand assets, and examples",
      "Confirm priorities for must-have versus future features",
      "Review drafts and provide timely feedback",
      "Manage third-party account ownership, billing, and approvals where needed"
    ]),
    "",
    "8. ClearStack responsibilities",
    bulletList([
      "Translate the request into a focused first-version scope",
      "Build the agreed responsive interface and core workflows",
      "Keep boundaries clear for deferred features and integrations",
      "Run practical lint/build and launch-readiness checks",
      "Prepare source-code and documentation handoff for the approved scope"
    ]),
    "",
    "9. Assumptions",
    bulletList([
      `Budget range for planning discussion: ${valueOrFallback(form.budgetRange)}`,
      `Additional constraints: ${valueOrFallback(form.constraints)}`,
      "Pricing is confirmed after scope review and is not generated automatically by this tool",
      "Ownership, usage rights, timelines, revision rounds, and support period are confirmed in the written agreement",
      "Sensitive credentials, private records, and confidential data should not be entered into this public static builder"
    ]),
    "",
    "10. Recommended next steps",
    bulletList([
      "Review this draft and remove anything that is not needed for the first version",
      "Confirm the must-have feature list and any hard deadline",
      "Identify source content, assets, and examples needed for planning",
      "Use the ClearStack inquiry workflow to start a scope review"
    ])
  ].join("\n");
}

export function ProposalBuilder() {
  const [form, setForm] = useState<ProposalForm>(initialForm);
  const [proposal, setProposal] = useState(() => buildProposal(initialForm));
  const [status, setStatus] = useState("Complete the required fields, then generate a proposal draft.");
  const [copyStatus, setCopyStatus] = useState("Copy proposal");

  const missingFields = useMemo(
    () => requiredFields.filter((field) => !form[field].trim()),
    [form]
  );

  const updateField = (field: keyof ProposalForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setCopyStatus("Copy proposal");
  };

  const generateProposal = () => {
    if (missingFields.length) {
      setStatus("Please complete the required fields before generating a proposal draft.");
      return;
    }

    setProposal(buildProposal(form));
    setStatus("Proposal draft generated. Review it before copying or sharing.");
    setCopyStatus("Copy proposal");
    track("proposal_generated", {
      cta_location: "proposal_builder",
      label: "proposal_builder_generate",
      project_type: form.projectType
    });
  };

  const copyProposal = async () => {
    track("proposal_copied", {
      cta_location: "proposal_builder",
      label: "proposal_builder_copy",
      project_type: form.projectType
    });

    if (!navigator.clipboard) {
      setCopyStatus("Select and copy below");
      return;
    }

    await navigator.clipboard.writeText(proposal);
    setCopyStatus("Copied");
  };

  const resetBuilder = () => {
    setForm(initialForm);
    setProposal(buildProposal(initialForm));
    setStatus("Builder reset. Complete the required fields, then generate a proposal draft.");
    setCopyStatus("Copy proposal");
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="border border-cyan-300/20 bg-cyan-300/[0.05] p-6 shadow-glow sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            Static planning tool
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Build a structured proposal outline.
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">
            Add the project details, generate a draft, edit the inputs, and regenerate as needed. Nothing is submitted, saved, emailed, or stored by this website.
          </p>
          <div className="mt-5 border border-amber-100/30 bg-amber-100/[0.06] p-4 text-sm leading-6 text-amber-50">
            This builder creates a preliminary planning draft only. Final scope, pricing, ownership, timelines, and terms are confirmed in a written project agreement.
          </div>

          <form className="mt-8 grid gap-5" onSubmit={(event) => event.preventDefault()}>
            <label className="text-sm font-semibold text-slate-100">
              Client or project name <span className="text-cyanGlow">*</span>
              <input
                className={fieldClass}
                name="projectName"
                onChange={(event) => updateField("projectName", event.target.value)}
                placeholder="Example: ClearBloom Beauty refresh"
                type="text"
                value={form.projectName}
              />
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">
                Project type
                <select
                  className={fieldClass}
                  name="projectType"
                  onChange={(event) => updateField("projectType", event.target.value as ProjectType)}
                  value={form.projectType}
                >
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
              <label className="text-sm font-semibold text-slate-100">
                Target timeline <span className="text-cyanGlow">*</span>
                <input
                  className={fieldClass}
                  name="targetTimeline"
                  onChange={(event) => updateField("targetTimeline", event.target.value)}
                  placeholder="Example: 3-5 weeks, flexible, this quarter"
                  type="text"
                  value={form.targetTimeline}
                />
              </label>
            </div>

            <label className="text-sm font-semibold text-slate-100">
              Main project goal <span className="text-cyanGlow">*</span>
              <textarea
                className={`${fieldClass} min-h-28 resize-y`}
                name="projectGoal"
                onChange={(event) => updateField("projectGoal", event.target.value)}
                placeholder="What should this project help launch, validate, sell, or improve?"
                value={form.projectGoal}
              />
            </label>

            <label className="text-sm font-semibold text-slate-100">
              Intended users <span className="text-cyanGlow">*</span>
              <textarea
                className={`${fieldClass} min-h-24 resize-y`}
                name="intendedUsers"
                onChange={(event) => updateField("intendedUsers", event.target.value)}
                placeholder="Who will use or review this project?"
                value={form.intendedUsers}
              />
            </label>

            <label className="text-sm font-semibold text-slate-100">
              Must-have features <span className="text-cyanGlow">*</span>
              <textarea
                className={`${fieldClass} min-h-28 resize-y`}
                name="mustHaveFeatures"
                onChange={(event) => updateField("mustHaveFeatures", event.target.value)}
                placeholder="Use commas or separate lines for key features, pages, workflows, or screens."
                value={form.mustHaveFeatures}
              />
            </label>

            <label className="text-sm font-semibold text-slate-100">
              Optional future features
              <textarea
                className={`${fieldClass} min-h-24 resize-y`}
                name="futureFeatures"
                onChange={(event) => updateField("futureFeatures", event.target.value)}
                placeholder="Features to consider later, not necessarily in the first version."
                value={form.futureFeatures}
              />
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">
                Budget range <span className="text-cyanGlow">*</span>
                <input
                  className={fieldClass}
                  name="budgetRange"
                  onChange={(event) => updateField("budgetRange", event.target.value)}
                  placeholder="Example: $2,500-$5,000 or to be discussed"
                  type="text"
                  value={form.budgetRange}
                />
              </label>
              <label className="text-sm font-semibold text-slate-100">
                Existing website or app link
                <input
                  className={fieldClass}
                  name="existingLink"
                  onChange={(event) => updateField("existingLink", event.target.value)}
                  placeholder="Optional URL or reference"
                  type="url"
                  value={form.existingLink}
                />
              </label>
            </div>

            <label className="text-sm font-semibold text-slate-100">
              Additional constraints
              <textarea
                className={`${fieldClass} min-h-24 resize-y`}
                name="constraints"
                onChange={(event) => updateField("constraints", event.target.value)}
                placeholder="Known launch dates, compliance needs, content gaps, platform preferences, or technical limits. Do not enter secrets or private data."
                value={form.constraints}
              />
            </label>

            <p className="text-sm leading-6 text-slate-300" role="status">
              {status}
            </p>
            {missingFields.length ? (
              <p className="text-sm leading-6 text-amber-100">
                Required before generating: {missingFields.join(", ")}.
              </p>
            ) : null}

            <div className="flex flex-wrap gap-3">
              <button
                className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
                onClick={generateProposal}
                type="button"
              >
                Generate proposal
              </button>
              <button
                className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
                onClick={resetBuilder}
                type="button"
              >
                Reset
              </button>
            </div>
          </form>
        </div>

        <aside className="border border-white/10 bg-white/[0.04] p-6 shadow-glow sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            Proposal preview
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-white">
            Copyable planning draft
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Review the draft before sharing. This is not automatically emailed or submitted anywhere.
          </p>
          <textarea
            aria-label="Generated proposal draft"
            className="mt-6 min-h-[520px] w-full resize-y border border-white/10 bg-slateInk/80 p-4 font-mono text-xs leading-5 text-slate-200 outline-none focus:border-cyan-300/70"
            readOnly
            value={proposal}
          />
          <button
            className="focus-ring mt-5 inline-flex w-full items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
            onClick={copyProposal}
            type="button"
          >
            {copyStatus}
          </button>
          <p className="mt-5 text-xs leading-5 text-slate-400">
            Analytics only records safe actions: proposal generated and proposal copied. Form contents, names, descriptions, budgets, links, and entered details are not tracked.
          </p>
        </aside>
      </div>
    </section>
  );
}
