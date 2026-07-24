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

type HandoffForm = {
  clientName: string;
  projectName: string;
  projectType: BuilderProjectType;
  liveUrl: string;
  repositoryUrl: string;
  deploymentPlatform: string;
  deliveryDate: string;
  deliveredPages: string;
  deliveredFeatures: string;
  thirdPartyTools: string;
  environmentNote: string;
  testingCompleted: string;
  knownLimitations: string;
  maintenanceInstructions: string;
  supportPeriod: string;
  futureRecommendations: string;
  ownershipTransferItems: string;
  additionalNotes: string;
};

const initialHandoff: HandoffForm = {
  clientName: "",
  projectName: "",
  projectType: "Product MVP",
  liveUrl: "",
  repositoryUrl: "",
  deploymentPlatform: "",
  deliveryDate: "",
  deliveredPages: "",
  deliveredFeatures: "",
  thirdPartyTools: "",
  environmentNote: "",
  testingCompleted: "",
  knownLimitations: "",
  maintenanceInstructions: "",
  supportPeriod: "",
  futureRecommendations: "",
  ownershipTransferItems: "",
  additionalNotes: ""
};

const requiredFields: Array<keyof HandoffForm> = [
  "clientName",
  "projectName",
  "liveUrl",
  "repositoryUrl",
  "deploymentPlatform",
  "deliveryDate",
  "deliveredPages",
  "deliveredFeatures",
  "testingCompleted",
  "maintenanceInstructions",
  "supportPeriod"
];

const securityNotice =
  "Do not enter passwords, API keys, private credentials, payment information, protected records, or other confidential data. Transfer sensitive information through an approved secure channel.";

const defaultOwnershipItems = [
  "Source repository access transferred",
  "Deployment access confirmed",
  "Domain access confirmed",
  "Third-party account ownership confirmed",
  "Documentation delivered",
  "Credentials transferred securely outside this public tool",
  "Final URLs verified",
  "Client acceptance received"
];

function buildHandoff(form: HandoffForm) {
  const pages = splitLines(form.deliveredPages);
  const features = splitLines(form.deliveredFeatures);
  const tools = splitLines(form.thirdPartyTools);
  const tests = splitLines(form.testingCompleted);
  const limitations = splitLines(form.knownLimitations);
  const maintenance = splitLines(form.maintenanceInstructions);
  const roadmap = splitLines(form.futureRecommendations);
  const transferItems = splitLines(form.ownershipTransferItems);
  const notes = splitLines(form.additionalNotes);

  return [
    `Project Handoff Summary: ${valueOrFallback(form.projectName, "Unnamed project")}`,
    "",
    "SECURITY NOTICE",
    securityNotice,
    "This static builder does not submit, save, email, or store entered information.",
    "",
    "1. Project handoff summary",
    `Client/organization: ${valueOrFallback(form.clientName)}`,
    `Project name: ${valueOrFallback(form.projectName)}`,
    `Project type: ${form.projectType}`,
    `Delivery date: ${valueOrFallback(form.deliveryDate)}`,
    "",
    "2. Live and repository links",
    `Live website or app URL: ${valueOrFallback(form.liveUrl)}`,
    `Repository URL: ${valueOrFallback(form.repositoryUrl)}`,
    "",
    "3. Delivered pages and features",
    "Delivered pages:",
    bulletList(pages),
    "",
    "Delivered features:",
    bulletList(features),
    "",
    "4. Technical overview",
    bulletList([
      `Project type: ${form.projectType}`,
      `Deployment platform: ${valueOrFallback(form.deploymentPlatform)}`,
      `Environment-variable note: ${valueOrFallback(form.environmentNote, "No secrets or environment values are included in this public handoff draft")}`
    ]),
    "",
    "5. Deployment details",
    bulletList([
      `Deployment platform: ${valueOrFallback(form.deploymentPlatform)}`,
      `Live URL verified: ${valueOrFallback(form.liveUrl)}`,
      "Deployment access, billing, and account ownership should be confirmed through approved channels"
    ]),
    "",
    "6. Third-party services",
    bulletList(tools.length ? tools : ["To be confirmed or not applicable"]),
    "",
    "7. Testing and verification completed",
    bulletList(tests),
    "",
    "8. Known limitations",
    bulletList(limitations.length ? limitations : ["No known limitations listed in this draft"]),
    "",
    "9. Maintenance instructions",
    bulletList(maintenance),
    "",
    "10. Post-launch support",
    valueOrFallback(form.supportPeriod),
    "",
    "11. Recommended roadmap",
    bulletList(roadmap.length ? roadmap : ["Review usage and feedback before expanding scope"]),
    "",
    "12. Ownership-transfer checklist",
    bulletList(transferItems.length ? transferItems : defaultOwnershipItems),
    "",
    "13. Client acceptance checklist",
    bulletList([
      "Confirm delivered pages and features match the approved scope",
      "Confirm final URLs load as expected",
      "Confirm repository, deployment, domain, and third-party access where applicable",
      "Confirm sensitive credentials were transferred outside this public tool",
      "Confirm any remaining limitations or future recommendations are understood"
    ]),
    "",
    "14. Final notes",
    bulletList(notes.length ? notes : ["No additional notes provided"])
  ].join("\n");
}

export function ProjectHandoffBuilder() {
  const [form, setForm] = useState<HandoffForm>(initialHandoff);
  const [handoff, setHandoff] = useState(() => buildHandoff(initialHandoff));
  const [status, setStatus] = useState("Complete the required fields, then generate a handoff draft.");
  const [copyStatus, setCopyStatus] = useState("Copy handoff");

  const missingFields = useMemo(
    () => requiredFields.filter((field) => !form[field].trim()),
    [form]
  );

  const updateField = (field: keyof HandoffForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setCopyStatus("Copy handoff");
  };

  const generateHandoff = () => {
    if (missingFields.length) {
      setStatus("Please complete the required fields before generating a handoff draft.");
      return;
    }

    setHandoff(buildHandoff(form));
    setStatus("Handoff draft generated. Review it before copying or sharing.");
    setCopyStatus("Copy handoff");
    track("handoff_generated", {
      cta_location: "project_handoff_builder",
      label: "project_handoff_generate",
      project_type: form.projectType
    });
  };

  const copyHandoff = async () => {
    track("handoff_copied", {
      cta_location: "project_handoff_builder",
      label: "project_handoff_copy",
      project_type: form.projectType
    });

    if (!navigator.clipboard) {
      setCopyStatus("Select and copy below");
      return;
    }

    await navigator.clipboard.writeText(handoff);
    setCopyStatus("Copied");
  };

  const resetBuilder = () => {
    setForm(initialHandoff);
    setHandoff(buildHandoff(initialHandoff));
    setStatus("Builder reset. Complete the required fields, then generate a handoff draft.");
    setCopyStatus("Copy handoff");
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="border border-cyan-300/20 bg-cyan-300/[0.05] p-6 shadow-glow sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Project delivery handoff</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Generate a structured delivery summary.</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">Use this static builder to organize delivered work, links, testing, limitations, support notes, ownership-transfer items, and next recommendations.</p>
          <div className="mt-5 border border-amber-100/30 bg-amber-100/[0.06] p-4 text-sm leading-6 text-amber-50">{securityNotice}</div>

          <form className="mt-8 grid gap-5" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">Client or organization name <span className="text-cyanGlow">*</span><input className={builderFieldClass} name="clientName" onChange={(event) => updateField("clientName", event.target.value)} type="text" value={form.clientName} /></label>
              <label className="text-sm font-semibold text-slate-100">Project name <span className="text-cyanGlow">*</span><input className={builderFieldClass} name="projectName" onChange={(event) => updateField("projectName", event.target.value)} type="text" value={form.projectName} /></label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">Project type<select className={builderFieldClass} name="projectType" onChange={(event) => updateField("projectType", event.target.value as BuilderProjectType)} value={form.projectType}>{builderProjectTypes.map((type) => <option key={type} value={type}>{type}</option>)}</select></label>
              <label className="text-sm font-semibold text-slate-100">Delivery date <span className="text-cyanGlow">*</span><input className={builderFieldClass} name="deliveryDate" onChange={(event) => updateField("deliveryDate", event.target.value)} placeholder="Example: July 31, 2026" type="text" value={form.deliveryDate} /></label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">Live website or app URL <span className="text-cyanGlow">*</span><input className={builderFieldClass} name="liveUrl" onChange={(event) => updateField("liveUrl", event.target.value)} type="url" value={form.liveUrl} /></label>
              <label className="text-sm font-semibold text-slate-100">Repository URL <span className="text-cyanGlow">*</span><input className={builderFieldClass} name="repositoryUrl" onChange={(event) => updateField("repositoryUrl", event.target.value)} type="url" value={form.repositoryUrl} /></label>
            </div>

            <label className="text-sm font-semibold text-slate-100">Deployment platform <span className="text-cyanGlow">*</span><input className={builderFieldClass} name="deploymentPlatform" onChange={(event) => updateField("deploymentPlatform", event.target.value)} placeholder="Example: Vercel, GitHub Pages, Netlify" type="text" value={form.deploymentPlatform} /></label>
            <label className="text-sm font-semibold text-slate-100">Delivered pages <span className="text-cyanGlow">*</span><textarea className={`${builderTextareaClass} min-h-28`} name="deliveredPages" onChange={(event) => updateField("deliveredPages", event.target.value)} placeholder="Use commas or separate lines." value={form.deliveredPages} /></label>
            <label className="text-sm font-semibold text-slate-100">Delivered features <span className="text-cyanGlow">*</span><textarea className={`${builderTextareaClass} min-h-28`} name="deliveredFeatures" onChange={(event) => updateField("deliveredFeatures", event.target.value)} value={form.deliveredFeatures} /></label>
            <label className="text-sm font-semibold text-slate-100">Third-party tools or services<textarea className={builderTextareaClass} name="thirdPartyTools" onChange={(event) => updateField("thirdPartyTools", event.target.value)} value={form.thirdPartyTools} /></label>
            <label className="text-sm font-semibold text-slate-100">Environment-variable note<input className={builderFieldClass} name="environmentNote" onChange={(event) => updateField("environmentNote", event.target.value)} placeholder="Do not enter actual secret values." type="text" value={form.environmentNote} /></label>
            <label className="text-sm font-semibold text-slate-100">Testing completed <span className="text-cyanGlow">*</span><textarea className={builderTextareaClass} name="testingCompleted" onChange={(event) => updateField("testingCompleted", event.target.value)} placeholder="Example: lint, build, route/link checks, browser review" value={form.testingCompleted} /></label>
            <label className="text-sm font-semibold text-slate-100">Known limitations<textarea className={builderTextareaClass} name="knownLimitations" onChange={(event) => updateField("knownLimitations", event.target.value)} value={form.knownLimitations} /></label>
            <label className="text-sm font-semibold text-slate-100">Maintenance instructions <span className="text-cyanGlow">*</span><textarea className={builderTextareaClass} name="maintenanceInstructions" onChange={(event) => updateField("maintenanceInstructions", event.target.value)} value={form.maintenanceInstructions} /></label>
            <label className="text-sm font-semibold text-slate-100">Support period <span className="text-cyanGlow">*</span><input className={builderFieldClass} name="supportPeriod" onChange={(event) => updateField("supportPeriod", event.target.value)} placeholder="Example: 7 days of post-launch support" type="text" value={form.supportPeriod} /></label>
            <label className="text-sm font-semibold text-slate-100">Future recommendations<textarea className={builderTextareaClass} name="futureRecommendations" onChange={(event) => updateField("futureRecommendations", event.target.value)} value={form.futureRecommendations} /></label>
            <label className="text-sm font-semibold text-slate-100">Ownership-transfer items<textarea className={builderTextareaClass} name="ownershipTransferItems" onChange={(event) => updateField("ownershipTransferItems", event.target.value)} placeholder="Leave blank to use the default checklist." value={form.ownershipTransferItems} /></label>
            <label className="text-sm font-semibold text-slate-100">Additional notes<textarea className={builderTextareaClass} name="additionalNotes" onChange={(event) => updateField("additionalNotes", event.target.value)} value={form.additionalNotes} /></label>

            <p className="text-sm leading-6 text-slate-300" role="status">{status}</p>
            {missingFields.length ? <p className="text-sm leading-6 text-amber-100">Required before generating: {missingFields.join(", ")}.</p> : null}

            <div className="flex flex-wrap gap-3">
              <button className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift" onClick={generateHandoff} type="button">Generate handoff</button>
              <button className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white" onClick={resetBuilder} type="button">Reset draft fields</button>
            </div>
          </form>
        </div>

        <aside className="border border-white/10 bg-white/[0.04] p-6 shadow-glow sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Handoff preview</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">Copyable delivery summary</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">Review the handoff before sharing. Transfer credentials separately through a secure channel.</p>
          <textarea aria-label="Generated project handoff draft" className="mt-6 min-h-[560px] w-full resize-y break-words border border-white/10 bg-slateInk/80 p-4 font-mono text-xs leading-5 text-slate-200 outline-none focus:border-cyan-300/70" readOnly value={handoff} />
          <button className="focus-ring mt-5 inline-flex w-full items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white" onClick={copyHandoff} type="button">{copyStatus}</button>
          <p className="mt-5 text-xs leading-5 text-slate-400">Analytics records only safe actions: handoff generated and handoff copied. It does not track names, links, deliverables, credentials, or form contents.</p>
        </aside>
      </div>
    </section>
  );
}
