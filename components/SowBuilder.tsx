"use client";

import { useMemo, useState } from "react";
import { track } from "@vercel/analytics";
import {
  builderFieldClass,
  builderProjectTypes,
  builderTextareaClass,
  bulletList,
  type BuilderProjectType,
  splitLines,
  valueOrFallback
} from "@/components/BuilderShared";

type SowForm = {
  clientName: string;
  projectName: string;
  projectType: BuilderProjectType;
  projectObjective: string;
  targetUsers: string;
  includedFeatures: string;
  outOfScopeItems: string;
  deliverables: string;
  milestones: string;
  targetTimeline: string;
  revisionRounds: string;
  clientResponsibilities: string;
  clearstackResponsibilities: string;
  dependencies: string;
  acceptanceCriteria: string;
  paymentMilestones: string;
  assumptions: string;
};

const initialSow: SowForm = {
  clientName: "",
  projectName: "",
  projectType: "Product MVP",
  projectObjective: "",
  targetUsers: "",
  includedFeatures: "",
  outOfScopeItems: "",
  deliverables: "",
  milestones: "",
  targetTimeline: "",
  revisionRounds: "",
  clientResponsibilities: "",
  clearstackResponsibilities: "",
  dependencies: "",
  acceptanceCriteria: "",
  paymentMilestones: "",
  assumptions: ""
};

const requiredFields: Array<keyof SowForm> = [
  "clientName",
  "projectName",
  "projectObjective",
  "targetUsers",
  "includedFeatures",
  "deliverables",
  "targetTimeline",
  "revisionRounds",
  "acceptanceCriteria"
];

const sowNotice =
  "This builder creates a preliminary planning draft only. It is not legal advice, a signed contract, or a binding estimate. Final scope, pricing, ownership, payment terms, and responsibilities must be confirmed in a written agreement approved by all parties.";

const projectScopeDefaults: Record<BuilderProjectType, string[]> = {
  "Product MVP": [
    "Landing page and core product positioning",
    "Core user journey and primary workflow",
    "Dashboard or structured interface where useful",
    "Mock or production-ready data plan depending on approved scope",
    "Deployment-ready build"
  ],
  "Storefront MVP": [
    "Branded storefront",
    "Product catalog and product pages",
    "Inquiry or commerce-ready flow",
    "Policy/customer-information pages",
    "Future payment and inventory roadmap"
  ],
  "AI-Powered Tool": [
    "Input or prompt workflow",
    "Results/output interface",
    "Usage boundaries and prototype testing flow",
    "Future API integration plan"
  ],
  "Internal Workflow Dashboard": [
    "Dashboard navigation",
    "Record/status views",
    "Filters, summaries, and action states",
    "Review or operational workflow",
    "Mock-data structure and privacy/permissions planning"
  ],
  "Website/App Refresh": [
    "Content and navigation review",
    "Responsive UI improvements",
    "Conversion-path improvements",
    "Accessibility and performance review",
    "Deployment and handoff"
  ]
};

function buildSow(form: SowForm) {
  const included = splitLines(form.includedFeatures);
  const outOfScope = splitLines(form.outOfScopeItems);
  const deliverables = splitLines(form.deliverables);
  const milestones = splitLines(form.milestones);
  const clientResponsibilities = splitLines(form.clientResponsibilities);
  const clearstackResponsibilities = splitLines(form.clearstackResponsibilities);
  const dependencies = splitLines(form.dependencies);
  const criteria = splitLines(form.acceptanceCriteria);
  const payments = splitLines(form.paymentMilestones);
  const assumptions = splitLines(form.assumptions);

  return [
    `1. Statement of Work title`,
    `Statement of Work Planning Draft: ${valueOrFallback(form.projectName, "Unnamed project")}`,
    "",
    "NOTICE",
    sowNotice,
    "This static builder does not create electronic signatures, execute agreements, submit information, or save entered data.",
    "",
    "2. Project overview",
    `Client/organization: ${valueOrFallback(form.clientName)}`,
    `Project name: ${valueOrFallback(form.projectName)}`,
    `Project type: ${form.projectType}`,
    `Target users: ${valueOrFallback(form.targetUsers)}`,
    "",
    "3. Objectives",
    valueOrFallback(form.projectObjective),
    "",
    "4. Scope of work",
    bulletList([...projectScopeDefaults[form.projectType], ...included]),
    "",
    "5. Deliverables",
    bulletList(deliverables),
    "",
    "6. Out-of-scope items",
    bulletList(
      outOfScope.length
        ? outOfScope
        : [
            "Payments, authentication, databases, APIs, automations, or production integrations unless separately approved",
            "Third-party subscriptions, hosting, domains, vendor fees, and licensed assets unless stated in the agreement",
            "Legal, compliance, copywriting, photography, or brand identity work unless separately scoped"
          ]
    ),
    "",
    "7. Project phases and milestones",
    bulletList(
      milestones.length
        ? milestones
        : [
            "Discovery and scope confirmation",
            "Content/workflow planning",
            "Interface and feature build",
            "Review rounds and focused revisions",
            "Launch-readiness checks and handoff"
          ]
    ),
    "",
    "8. Estimated timeline",
    `${valueOrFallback(form.targetTimeline)}. Timeline remains subject to approved scope, content readiness, feedback speed, dependencies, and revision rounds.`,
    "",
    "9. Client responsibilities",
    bulletList(
      clientResponsibilities.length
        ? clientResponsibilities
        : [
            "Provide project goals, content, brand assets, examples, and timely feedback",
            "Confirm access requirements and third-party account ownership through approved channels",
            "Review milestones and approve changes before work expands beyond scope"
          ]
    ),
    "",
    "10. ClearStack Studio responsibilities",
    bulletList(
      clearstackResponsibilities.length
        ? clearstackResponsibilities
        : [
            "Plan and build the approved first-version scope",
            "Communicate scope boundaries and known tradeoffs",
            "Run practical lint/build and launch-readiness checks",
            "Prepare agreed handoff notes and source-code delivery"
          ]
    ),
    "",
    "11. Revision boundaries",
    `${valueOrFallback(form.revisionRounds)}. Revision rounds apply to the approved scope and do not include new feature categories, integrations, or major direction changes unless handled through a change request.`,
    "",
    "12. Acceptance criteria",
    bulletList(criteria),
    "",
    "13. Change-request process",
    "Requests outside the approved scope should be reviewed, estimated, and approved in writing before implementation. Change requests may affect pricing, timeline, milestones, and handoff dates.",
    "",
    "14. Payment milestone placeholders",
    bulletList(
      payments.length
        ? payments
        : [
            "Deposit or project start milestone: to be confirmed",
            "Mid-project milestone: to be confirmed if applicable",
            "Final delivery milestone: to be confirmed"
          ]
    ),
    "",
    "15. Assumptions and dependencies",
    bulletList([
      ...dependencies.map((dependency) => `Dependency: ${dependency}`),
      ...assumptions,
      "Final scope, pricing, ownership, payment terms, and responsibilities require a written agreement approved by all parties",
      "Sensitive credentials or private data must be transferred outside this public tool through an approved secure channel"
    ]),
    "",
    "16. Approval and next steps",
    bulletList([
      "Review this planning draft internally",
      "Confirm scope, timeline, revision boundaries, and payment milestones",
      "Convert the approved scope into a written agreement",
      "Begin work only after the agreement is approved by all parties"
    ])
  ].join("\n");
}

export function SowBuilder() {
  const [form, setForm] = useState<SowForm>(initialSow);
  const [sow, setSow] = useState(() => buildSow(initialSow));
  const [status, setStatus] = useState("Complete the required fields, then generate an SOW draft.");
  const [copyStatus, setCopyStatus] = useState("Copy SOW");

  const missingFields = useMemo(
    () => requiredFields.filter((field) => !form[field].trim()),
    [form]
  );

  const updateField = (field: keyof SowForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setCopyStatus("Copy SOW");
  };

  const generateSow = () => {
    if (missingFields.length) {
      setStatus("Please complete the required fields before generating an SOW draft.");
      return;
    }

    setSow(buildSow(form));
    setStatus("SOW draft generated. Review it before copying or using it for planning.");
    setCopyStatus("Copy SOW");
    track("sow_generated", {
      cta_location: "sow_builder",
      label: "sow_builder_generate",
      project_type: form.projectType
    });
  };

  const copySow = async () => {
    track("sow_copied", {
      cta_location: "sow_builder",
      label: "sow_builder_copy",
      project_type: form.projectType
    });

    if (!navigator.clipboard) {
      setCopyStatus("Select and copy below");
      return;
    }

    await navigator.clipboard.writeText(sow);
    setCopyStatus("Copied");
  };

  const resetBuilder = () => {
    setForm(initialSow);
    setSow(buildSow(initialSow));
    setStatus("Builder reset. Complete the required fields, then generate an SOW draft.");
    setCopyStatus("Copy SOW");
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="border border-cyan-300/20 bg-cyan-300/[0.05] p-6 shadow-glow sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            SOW planning draft
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Generate a structured Statement of Work outline.
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">
            This static builder turns project details into a copyable SOW planning draft. It does not submit, save, sign, email, or store anything.
          </p>
          <div className="mt-5 border border-amber-100/30 bg-amber-100/[0.06] p-4 text-sm leading-6 text-amber-50">
            {sowNotice}
          </div>

          <form className="mt-8 grid gap-5" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">
                Client or organization name <span className="text-cyanGlow">*</span>
                <input className={builderFieldClass} name="clientName" onChange={(event) => updateField("clientName", event.target.value)} type="text" value={form.clientName} />
              </label>
              <label className="text-sm font-semibold text-slate-100">
                Project name <span className="text-cyanGlow">*</span>
                <input className={builderFieldClass} name="projectName" onChange={(event) => updateField("projectName", event.target.value)} type="text" value={form.projectName} />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">
                Project type
                <select className={builderFieldClass} name="projectType" onChange={(event) => updateField("projectType", event.target.value as BuilderProjectType)} value={form.projectType}>
                  {builderProjectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                </select>
              </label>
              <label className="text-sm font-semibold text-slate-100">
                Target timeline <span className="text-cyanGlow">*</span>
                <input className={builderFieldClass} name="targetTimeline" onChange={(event) => updateField("targetTimeline", event.target.value)} placeholder="Example: 4-6 weeks" type="text" value={form.targetTimeline} />
              </label>
            </div>

            <label className="text-sm font-semibold text-slate-100">Project objective <span className="text-cyanGlow">*</span><textarea className={`${builderTextareaClass} min-h-28`} name="projectObjective" onChange={(event) => updateField("projectObjective", event.target.value)} value={form.projectObjective} /></label>
            <label className="text-sm font-semibold text-slate-100">Target users <span className="text-cyanGlow">*</span><textarea className={builderTextareaClass} name="targetUsers" onChange={(event) => updateField("targetUsers", event.target.value)} value={form.targetUsers} /></label>
            <label className="text-sm font-semibold text-slate-100">Included features <span className="text-cyanGlow">*</span><textarea className={`${builderTextareaClass} min-h-28`} name="includedFeatures" onChange={(event) => updateField("includedFeatures", event.target.value)} placeholder="Use commas or separate lines." value={form.includedFeatures} /></label>
            <label className="text-sm font-semibold text-slate-100">Out-of-scope items<textarea className={builderTextareaClass} name="outOfScopeItems" onChange={(event) => updateField("outOfScopeItems", event.target.value)} value={form.outOfScopeItems} /></label>
            <label className="text-sm font-semibold text-slate-100">Deliverables <span className="text-cyanGlow">*</span><textarea className={`${builderTextareaClass} min-h-28`} name="deliverables" onChange={(event) => updateField("deliverables", event.target.value)} value={form.deliverables} /></label>
            <label className="text-sm font-semibold text-slate-100">Proposed milestones<textarea className={builderTextareaClass} name="milestones" onChange={(event) => updateField("milestones", event.target.value)} value={form.milestones} /></label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">Revision rounds <span className="text-cyanGlow">*</span><input className={builderFieldClass} name="revisionRounds" onChange={(event) => updateField("revisionRounds", event.target.value)} placeholder="Example: Two focused revision rounds" type="text" value={form.revisionRounds} /></label>
              <label className="text-sm font-semibold text-slate-100">Payment milestone placeholders<input className={builderFieldClass} name="paymentMilestones" onChange={(event) => updateField("paymentMilestones", event.target.value)} placeholder="Example: Deposit, midpoint, final" type="text" value={form.paymentMilestones} /></label>
            </div>

            <label className="text-sm font-semibold text-slate-100">Client responsibilities<textarea className={builderTextareaClass} name="clientResponsibilities" onChange={(event) => updateField("clientResponsibilities", event.target.value)} value={form.clientResponsibilities} /></label>
            <label className="text-sm font-semibold text-slate-100">ClearStack responsibilities<textarea className={builderTextareaClass} name="clearstackResponsibilities" onChange={(event) => updateField("clearstackResponsibilities", event.target.value)} value={form.clearstackResponsibilities} /></label>
            <label className="text-sm font-semibold text-slate-100">Dependencies<textarea className={builderTextareaClass} name="dependencies" onChange={(event) => updateField("dependencies", event.target.value)} value={form.dependencies} /></label>
            <label className="text-sm font-semibold text-slate-100">Acceptance criteria <span className="text-cyanGlow">*</span><textarea className={builderTextareaClass} name="acceptanceCriteria" onChange={(event) => updateField("acceptanceCriteria", event.target.value)} value={form.acceptanceCriteria} /></label>
            <label className="text-sm font-semibold text-slate-100">Additional assumptions<textarea className={builderTextareaClass} name="assumptions" onChange={(event) => updateField("assumptions", event.target.value)} value={form.assumptions} /></label>

            <p className="text-sm leading-6 text-slate-300" role="status">{status}</p>
            {missingFields.length ? <p className="text-sm leading-6 text-amber-100">Required before generating: {missingFields.join(", ")}.</p> : null}

            <div className="flex flex-wrap gap-3">
              <button className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift" onClick={generateSow} type="button">Generate SOW</button>
              <button className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white" onClick={resetBuilder} type="button">Reset draft fields</button>
            </div>
          </form>
        </div>

        <aside className="border border-white/10 bg-white/[0.04] p-6 shadow-glow sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">SOW preview</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">Copyable Statement of Work draft</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">Review this planning draft carefully. It is not a signed contract or legal document.</p>
          <textarea aria-label="Generated Statement of Work draft" className="mt-6 min-h-[560px] w-full resize-y overflow-wrap-anywhere border border-white/10 bg-slateInk/80 p-4 font-mono text-xs leading-5 text-slate-200 outline-none focus:border-cyan-300/70" readOnly value={sow} />
          <button className="focus-ring mt-5 inline-flex w-full items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white" onClick={copySow} type="button">{copyStatus}</button>
          <p className="mt-5 text-xs leading-5 text-slate-400">Analytics records only safe actions: SOW generated and SOW copied. It does not track client names, descriptions, payment details, deliverables, or form contents.</p>
        </aside>
      </div>
    </section>
  );
}
