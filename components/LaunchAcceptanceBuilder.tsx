"use client";

import { useMemo, useState } from "react";
import { track } from "@vercel/analytics";
import { builderFieldClass, builderTextareaClass, bulletList, splitLines, valueOrFallback } from "@/components/BuilderShared";

type ProjectType = "Product MVP" | "Storefront MVP" | "AI-Powered Tool" | "Internal Workflow Dashboard" | "Website/App Refresh" | "Other";
type ApprovalStatus = "Pending Review" | "Approved for Launch" | "Approved with Known Limitations" | "Revisions Required" | "Launch Deferred" | "Launched" | "Handoff Complete";

type LaunchForm = {
  clientName: string;
  projectName: string;
  projectType: ProjectType;
  liveUrl: string;
  repositoryUrl: string;
  deploymentPlatform: string;
  launchDate: string;
  approvedPages: string;
  approvedFeatures: string;
  testingCompleted: string;
  finalRevisionStatus: string;
  knownLimitations: string;
  deferredFeatures: string;
  clientResponsibilities: string;
  clearstackCompleted: string;
  domainStatus: string;
  deploymentStatus: string;
  documentationStatus: string;
  handoffStatus: string;
  supportPeriod: string;
  approvalStatus: ApprovalStatus;
  approvalDate: string;
  finalNotes: string;
};

type ChecklistState = Record<string, boolean>;

const projectTypes: ProjectType[] = ["Product MVP", "Storefront MVP", "AI-Powered Tool", "Internal Workflow Dashboard", "Website/App Refresh", "Other"];
const approvalStatuses: ApprovalStatus[] = ["Pending Review", "Approved for Launch", "Approved with Known Limitations", "Revisions Required", "Launch Deferred", "Launched", "Handoff Complete"];
const checklistItems = [
  "Core pages verified",
  "Navigation verified",
  "Mobile layout verified",
  "Forms or inquiry flows tested",
  "External links checked",
  "Metadata reviewed",
  "Accessibility basics reviewed",
  "Production build passed",
  "Live deployment verified",
  "Domain verified",
  "Analytics verified",
  "Known limitations documented",
  "Handoff materials prepared"
];

const notice = "This builder creates a launch-review and acknowledgment draft only. It does not create an electronic signature, binding acceptance, legal agreement, warranty, or payment authorization. Final approval and contractual obligations must be confirmed through the agreed written process.";

const initialForm: LaunchForm = {
  clientName: "",
  projectName: "",
  projectType: "Product MVP",
  liveUrl: "",
  repositoryUrl: "",
  deploymentPlatform: "",
  launchDate: "",
  approvedPages: "",
  approvedFeatures: "",
  testingCompleted: "",
  finalRevisionStatus: "",
  knownLimitations: "",
  deferredFeatures: "",
  clientResponsibilities: "",
  clearstackCompleted: "",
  domainStatus: "",
  deploymentStatus: "",
  documentationStatus: "",
  handoffStatus: "",
  supportPeriod: "",
  approvalStatus: "Pending Review",
  approvalDate: "",
  finalNotes: ""
};

const initialChecklist = Object.fromEntries(checklistItems.map((item) => [item, false])) as ChecklistState;
const requiredFields: Array<keyof LaunchForm> = ["projectName", "liveUrl", "deploymentPlatform", "launchDate", "approvedPages", "approvedFeatures", "testingCompleted", "finalRevisionStatus", "supportPeriod"];

function buildLaunchSummary(form: LaunchForm, checklist: ChecklistState) {
  const completedChecks = checklistItems.filter((item) => checklist[item]);
  const pendingChecks = checklistItems.filter((item) => !checklist[item]);

  return [
    "1. Launch acceptance summary",
    `Project: ${valueOrFallback(form.projectName)}`,
    `Client/organization: ${valueOrFallback(form.clientName, "Not listed")}`,
    `Approval status: ${form.approvalStatus}`,
    "",
    "NOTICE",
    notice,
    "This static builder does not create electronic signatures, submit approvals, save information, or store entered data.",
    "",
    "2. Project and deployment information",
    `Project type: ${form.projectType}`,
    `Live URL: ${valueOrFallback(form.liveUrl)}`,
    `Repository URL: ${valueOrFallback(form.repositoryUrl, "Not provided")}`,
    `Deployment platform: ${valueOrFallback(form.deploymentPlatform)}`,
    `Launch date: ${valueOrFallback(form.launchDate)}`,
    "",
    "3. Approved pages and features",
    "Approved pages:",
    bulletList(splitLines(form.approvedPages)),
    "",
    "Approved features:",
    bulletList(splitLines(form.approvedFeatures)),
    "",
    "4. Testing completed",
    bulletList(splitLines(form.testingCompleted)),
    "",
    "Launch checklist completed:",
    bulletList(completedChecks.length ? completedChecks : ["No checklist items marked complete yet"]),
    "",
    "Launch checklist still pending:",
    bulletList(pendingChecks.length ? pendingChecks : ["No pending checklist items listed"]),
    "",
    "5. Final revision status",
    valueOrFallback(form.finalRevisionStatus),
    "",
    "6. Known limitations",
    bulletList(splitLines(form.knownLimitations).length ? splitLines(form.knownLimitations) : ["No known limitations listed"]),
    "",
    "7. Deferred or future features",
    bulletList(splitLines(form.deferredFeatures).length ? splitLines(form.deferredFeatures) : ["No deferred features listed"]),
    "",
    "8. Client responsibilities",
    bulletList(splitLines(form.clientResponsibilities).length ? splitLines(form.clientResponsibilities) : ["Client responsibilities to be confirmed through the agreed written process"]),
    "",
    "9. ClearStack completion summary",
    bulletList(splitLines(form.clearstackCompleted).length ? splitLines(form.clearstackCompleted) : ["ClearStack completion details to be confirmed"]),
    "",
    "10. Domain and deployment confirmation",
    `Domain status: ${valueOrFallback(form.domainStatus, "To be confirmed")}`,
    `Deployment status: ${valueOrFallback(form.deploymentStatus, "To be confirmed")}`,
    "",
    "11. Documentation and handoff status",
    `Documentation status: ${valueOrFallback(form.documentationStatus, "To be confirmed")}`,
    `Handoff status: ${valueOrFallback(form.handoffStatus, "To be confirmed")}`,
    "",
    "12. Post-launch support",
    valueOrFallback(form.supportPeriod),
    "",
    "13. Launch approval status",
    form.approvalStatus,
    "",
    "14. Approval date",
    valueOrFallback(form.approvalDate, "Not approved or not dated yet"),
    "",
    "15. Final notes and next steps",
    valueOrFallback(form.finalNotes, "Review the launch status, confirm remaining responsibilities, and proceed through the agreed written approval and handoff process.")
  ].join("\n");
}

function statusClass(status: ApprovalStatus) {
  if (status === "Approved for Launch" || status === "Launched" || status === "Handoff Complete") return "border-emerald-300/40 text-emerald-100";
  if (status === "Approved with Known Limitations" || status === "Pending Review") return "border-amber-100/40 text-amber-100";
  return "border-red-300/40 text-red-100";
}

export function LaunchAcceptanceBuilder() {
  const [form, setForm] = useState<LaunchForm>(initialForm);
  const [checklist, setChecklist] = useState<ChecklistState>(initialChecklist);
  const [summary, setSummary] = useState(() => buildLaunchSummary(initialForm, initialChecklist));
  const [statusMessage, setStatusMessage] = useState("Complete the required fields, then generate a launch summary.");
  const [copyStatus, setCopyStatus] = useState("Copy launch summary");

  const missingFields = useMemo(() => requiredFields.filter((field) => !form[field].trim()), [form]);

  const updateField = (field: keyof LaunchForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setCopyStatus("Copy launch summary");
  };

  const updateChecklist = (item: string, checked: boolean) => {
    setChecklist((current) => ({ ...current, [item]: checked }));
    setCopyStatus("Copy launch summary");
  };

  const generateSummary = () => {
    if (missingFields.length) {
      setStatusMessage("Please complete the required fields before generating a launch summary.");
      return;
    }

    setSummary(buildLaunchSummary(form, checklist));
    setStatusMessage("Launch summary generated. Review approval language before sending.");
    setCopyStatus("Copy launch summary");
    track("launch_acceptance_generated", {
      cta_location: "launch_acceptance_builder",
      label: "launch_acceptance_generated"
    });
  };

  const copySummary = async () => {
    track("launch_acceptance_copied", {
      cta_location: "launch_acceptance_builder",
      label: "launch_acceptance_copied"
    });

    if (!navigator.clipboard) {
      setCopyStatus("Select and copy below");
      setStatusMessage("Clipboard access is unavailable. Select the summary text and copy it manually.");
      return;
    }

    await navigator.clipboard.writeText(summary);
    setCopyStatus("Copied");
    setStatusMessage("Launch summary copied. Confirm approval through the agreed written process.");
  };

  const resetBuilder = () => {
    if (!window.confirm("Reset the launch acceptance builder fields and checklist?")) return;
    setForm(initialForm);
    setChecklist(initialChecklist);
    setSummary(buildLaunchSummary(initialForm, initialChecklist));
    setCopyStatus("Copy launch summary");
    setStatusMessage("Builder reset. Complete the required fields, then generate a launch summary.");
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="border border-cyan-300/20 bg-cyan-300/[0.05] p-6 shadow-glow sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Launch acceptance draft</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Document launch readiness and approval status.</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">Use this static builder to create a launch-review and handoff-ready acknowledgment draft. It does not submit, save, sign, or store entered information.</p>
          <div className="mt-5 border border-amber-100/30 bg-amber-100/[0.06] p-4 text-sm leading-6 text-amber-50">{notice}</div>

          <form className="mt-8 grid gap-5" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">Client or organization name<input className={builderFieldClass} onChange={(event) => updateField("clientName", event.target.value)} type="text" value={form.clientName} /></label>
              <label className="text-sm font-semibold text-slate-100">Project name <span className="text-cyanGlow">*</span><input className={builderFieldClass} onChange={(event) => updateField("projectName", event.target.value)} type="text" value={form.projectName} /></label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">Project type<select className={builderFieldClass} onChange={(event) => updateField("projectType", event.target.value)} value={form.projectType}>{projectTypes.map((option) => <option key={option}>{option}</option>)}</select></label>
              <label className="text-sm font-semibold text-slate-100">Launch approval status<select className={builderFieldClass} onChange={(event) => updateField("approvalStatus", event.target.value)} value={form.approvalStatus}>{approvalStatuses.map((option) => <option key={option}>{option}</option>)}</select></label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">Live URL <span className="text-cyanGlow">*</span><input className={builderFieldClass} onChange={(event) => updateField("liveUrl", event.target.value)} type="url" value={form.liveUrl} /></label>
              <label className="text-sm font-semibold text-slate-100">Repository URL<input className={builderFieldClass} onChange={(event) => updateField("repositoryUrl", event.target.value)} type="url" value={form.repositoryUrl} /></label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">Deployment platform <span className="text-cyanGlow">*</span><input className={builderFieldClass} onChange={(event) => updateField("deploymentPlatform", event.target.value)} type="text" value={form.deploymentPlatform} /></label>
              <label className="text-sm font-semibold text-slate-100">Launch date <span className="text-cyanGlow">*</span><input className={builderFieldClass} onChange={(event) => updateField("launchDate", event.target.value)} type="date" value={form.launchDate} /></label>
            </div>
            <label className="text-sm font-semibold text-slate-100">Approved pages <span className="text-cyanGlow">*</span><textarea className={`${builderTextareaClass} min-h-28`} onChange={(event) => updateField("approvedPages", event.target.value)} value={form.approvedPages} /></label>
            <label className="text-sm font-semibold text-slate-100">Approved features <span className="text-cyanGlow">*</span><textarea className={`${builderTextareaClass} min-h-28`} onChange={(event) => updateField("approvedFeatures", event.target.value)} value={form.approvedFeatures} /></label>
            <label className="text-sm font-semibold text-slate-100">Testing completed <span className="text-cyanGlow">*</span><textarea className={builderTextareaClass} onChange={(event) => updateField("testingCompleted", event.target.value)} value={form.testingCompleted} /></label>
            <label className="text-sm font-semibold text-slate-100">Final revision status <span className="text-cyanGlow">*</span><textarea className={builderTextareaClass} onChange={(event) => updateField("finalRevisionStatus", event.target.value)} value={form.finalRevisionStatus} /></label>

            <fieldset className="border border-white/10 bg-slateInk/70 p-4">
              <legend className="px-2 text-sm font-semibold text-slate-100">Launch checklist</legend>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {checklistItems.map((item) => (
                  <label className="flex gap-3 text-sm leading-6 text-slate-200" key={item}>
                    <input className="mt-1 h-4 w-4 accent-cyanGlow" checked={checklist[item]} onChange={(event) => updateChecklist(item, event.target.checked)} type="checkbox" />
                    <span>{item}: {checklist[item] ? "Complete" : "Pending"}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="text-sm font-semibold text-slate-100">Known limitations<textarea className={builderTextareaClass} onChange={(event) => updateField("knownLimitations", event.target.value)} value={form.knownLimitations} /></label>
            <label className="text-sm font-semibold text-slate-100">Deferred features<textarea className={builderTextareaClass} onChange={(event) => updateField("deferredFeatures", event.target.value)} value={form.deferredFeatures} /></label>
            <label className="text-sm font-semibold text-slate-100">Client responsibilities<textarea className={builderTextareaClass} onChange={(event) => updateField("clientResponsibilities", event.target.value)} value={form.clientResponsibilities} /></label>
            <label className="text-sm font-semibold text-slate-100">ClearStack responsibilities completed<textarea className={builderTextareaClass} onChange={(event) => updateField("clearstackCompleted", event.target.value)} value={form.clearstackCompleted} /></label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">Domain status<input className={builderFieldClass} onChange={(event) => updateField("domainStatus", event.target.value)} type="text" value={form.domainStatus} /></label>
              <label className="text-sm font-semibold text-slate-100">Deployment status<input className={builderFieldClass} onChange={(event) => updateField("deploymentStatus", event.target.value)} type="text" value={form.deploymentStatus} /></label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">Documentation status<input className={builderFieldClass} onChange={(event) => updateField("documentationStatus", event.target.value)} type="text" value={form.documentationStatus} /></label>
              <label className="text-sm font-semibold text-slate-100">Handoff status<input className={builderFieldClass} onChange={(event) => updateField("handoffStatus", event.target.value)} type="text" value={form.handoffStatus} /></label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">Post-launch support period <span className="text-cyanGlow">*</span><input className={builderFieldClass} onChange={(event) => updateField("supportPeriod", event.target.value)} type="text" value={form.supportPeriod} /></label>
              <label className="text-sm font-semibold text-slate-100">Approval date<input className={builderFieldClass} onChange={(event) => updateField("approvalDate", event.target.value)} type="date" value={form.approvalDate} /></label>
            </div>
            <label className="text-sm font-semibold text-slate-100">Final notes<textarea className={builderTextareaClass} onChange={(event) => updateField("finalNotes", event.target.value)} value={form.finalNotes} /></label>
            <p className="text-sm leading-6 text-slate-300" role="status">{statusMessage}</p>
            {missingFields.length ? <p className="text-sm leading-6 text-amber-100">Required before generating: {missingFields.join(", ")}.</p> : null}
            <div className="flex flex-wrap gap-3">
              <button className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift" onClick={generateSummary} type="button">Generate launch summary</button>
              <button className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white" onClick={resetBuilder} type="button">Reset</button>
            </div>
          </form>
        </div>

        <aside className="border border-white/10 bg-white/[0.04] p-6 shadow-glow sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Launch preview</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">Copyable launch acceptance summary</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">Approval status: <span className={`inline-flex border px-2 py-1 text-xs font-semibold ${statusClass(form.approvalStatus)}`}>{form.approvalStatus}</span></p>
          <textarea aria-label="Generated launch acceptance summary" className="mt-6 min-h-[560px] w-full resize-y break-words border border-white/10 bg-slateInk/80 p-4 font-mono text-xs leading-5 text-slate-200 outline-none focus:border-cyan-300/70" readOnly value={summary} />
          <button className="focus-ring mt-5 inline-flex w-full items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white" onClick={copySummary} type="button">{copyStatus}</button>
          <p className="mt-4 text-sm leading-6 text-emerald-100" role="status" aria-live="polite">{copyStatus === "Copied" ? "Launch summary copied to clipboard." : "Copy confirmation will appear here."}</p>
          <p className="mt-5 text-xs leading-5 text-slate-400">Analytics records only safe actions. It does not track names, URLs, dates, approval details, checklist selections, or form values.</p>
        </aside>
      </div>
    </section>
  );
}
