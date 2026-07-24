"use client";

import { useMemo, useState } from "react";
import { track } from "@vercel/analytics";
import { builderFieldClass, builderTextareaClass, valueOrFallback } from "@/components/BuilderShared";

type Priority = "Critical" | "High" | "Normal" | "Low" | "Future enhancement";
type FeedbackStatus = "New" | "Needs Clarification" | "Accepted" | "In Progress" | "Completed" | "Deferred" | "Out of Scope";
type RequestType = "Bug or defect" | "Agreed revision" | "New scope request" | "Future enhancement";

type FeedbackForm = {
  clientName: string;
  projectName: string;
  reviewRound: string;
  areaReviewed: string;
  workingWell: string;
  requestedChange: string;
  priority: Priority;
  requestType: RequestType;
  reasonOutcome: string;
  referenceUrl: string;
  clarificationNeeded: string;
  requestedCompletionDate: string;
  feedbackStatus: FeedbackStatus;
  additionalNotes: string;
};

const priorities: Priority[] = ["Critical", "High", "Normal", "Low", "Future enhancement"];
const statuses: FeedbackStatus[] = ["New", "Needs Clarification", "Accepted", "In Progress", "Completed", "Deferred", "Out of Scope"];
const requestTypes: RequestType[] = ["Bug or defect", "Agreed revision", "New scope request", "Future enhancement"];
const notice = "This builder creates a communication draft only. Review all revision requests, priorities, dates, scope implications, and client-facing statements before sending.";

const initialForm: FeedbackForm = {
  clientName: "",
  projectName: "",
  reviewRound: "",
  areaReviewed: "",
  workingWell: "",
  requestedChange: "",
  priority: "Normal",
  requestType: "Agreed revision",
  reasonOutcome: "",
  referenceUrl: "",
  clarificationNeeded: "",
  requestedCompletionDate: "",
  feedbackStatus: "New",
  additionalNotes: ""
};

const requiredFields: Array<keyof FeedbackForm> = [
  "projectName",
  "reviewRound",
  "areaReviewed",
  "workingWell",
  "requestedChange",
  "reasonOutcome"
];

function buildFeedback(form: FeedbackForm) {
  return [
    "1. Project feedback summary",
    `Project: ${valueOrFallback(form.projectName)}`,
    `Client/organization: ${valueOrFallback(form.clientName, "Not listed")}`,
    "",
    "NOTICE",
    notice,
    "This static builder does not submit, save, email, or store entered feedback data.",
    "",
    "Scope classification note",
    `Request type: ${form.requestType}. This label is for communication only and does not automatically classify the request as included in scope. Scope impact should be reviewed against the approved agreement or SOW.`,
    "",
    "2. Review round",
    valueOrFallback(form.reviewRound),
    "",
    "3. Area reviewed",
    valueOrFallback(form.areaReviewed),
    "",
    "4. What is working well",
    valueOrFallback(form.workingWell),
    "",
    "5. Requested changes",
    valueOrFallback(form.requestedChange),
    "",
    "6. Priority",
    `${form.priority} (${form.requestType})`,
    "",
    "7. Reason or expected outcome",
    valueOrFallback(form.reasonOutcome),
    "",
    "8. Decisions or clarifications needed",
    valueOrFallback(form.clarificationNeeded, "No decision or clarification listed yet"),
    "",
    "9. Target completion date",
    valueOrFallback(form.requestedCompletionDate, "Not requested or to be confirmed"),
    "",
    "10. Current status",
    form.feedbackStatus,
    "",
    "11. Additional notes",
    valueOrFallback(form.additionalNotes, "No additional notes listed"),
    `Reference or screenshot URL: ${valueOrFallback(form.referenceUrl, "Not provided")}`,
    "",
    "12. Next step",
    "Review the requested change, confirm whether it is a bug/defect, agreed revision, new scope request, or future enhancement, then document the decision before implementation."
  ].join("\n");
}

function priorityClass(priority: Priority) {
  if (priority === "Critical") return "border-red-300/50 text-red-100";
  if (priority === "High") return "border-amber-100/50 text-amber-100";
  if (priority === "Future enhancement") return "border-slate-400/40 text-slate-300";
  return "border-cyan-300/40 text-cyan-100";
}

export function ClientFeedbackBuilder() {
  const [form, setForm] = useState<FeedbackForm>(initialForm);
  const [summary, setSummary] = useState(() => buildFeedback(initialForm));
  const [statusMessage, setStatusMessage] = useState("Complete the required fields, then generate a feedback summary.");
  const [copyStatus, setCopyStatus] = useState("Copy feedback summary");

  const missingFields = useMemo(() => requiredFields.filter((field) => !form[field].trim()), [form]);

  const updateField = (field: keyof FeedbackForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setCopyStatus("Copy feedback summary");
  };

  const generateSummary = () => {
    if (missingFields.length) {
      setStatusMessage("Please complete the required fields before generating a feedback summary.");
      return;
    }

    setSummary(buildFeedback(form));
    setStatusMessage("Feedback summary generated. Review scope implications before sending.");
    setCopyStatus("Copy feedback summary");
    track("feedback_summary_generated", {
      cta_location: "client_feedback_builder",
      label: "feedback_summary_generated"
    });
  };

  const copySummary = async () => {
    track("feedback_summary_copied", {
      cta_location: "client_feedback_builder",
      label: "feedback_summary_copied"
    });

    if (!navigator.clipboard) {
      setCopyStatus("Select and copy below");
      setStatusMessage("Clipboard access is unavailable. Select the summary text and copy it manually.");
      return;
    }

    await navigator.clipboard.writeText(summary);
    setCopyStatus("Copied");
    setStatusMessage("Feedback summary copied. Review it before sending.");
  };

  const resetBuilder = () => {
    if (!window.confirm("Reset the feedback builder fields? Generated text will return to the blank draft.")) return;
    setForm(initialForm);
    setSummary(buildFeedback(initialForm));
    setCopyStatus("Copy feedback summary");
    setStatusMessage("Builder reset. Complete the required fields, then generate a feedback summary.");
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="border border-cyan-300/20 bg-cyan-300/[0.05] p-6 shadow-glow sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Client feedback draft</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Document feedback and revision requests clearly.</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">Use this static builder to create a clear communication draft. It does not submit, save, email, or store entered feedback.</p>
          <div className="mt-5 border border-amber-100/30 bg-amber-100/[0.06] p-4 text-sm leading-6 text-amber-50">{notice}</div>

          <form className="mt-8 grid gap-5" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">Client or organization name<input className={builderFieldClass} onChange={(event) => updateField("clientName", event.target.value)} type="text" value={form.clientName} /></label>
              <label className="text-sm font-semibold text-slate-100">Project name <span className="text-cyanGlow">*</span><input className={builderFieldClass} onChange={(event) => updateField("projectName", event.target.value)} type="text" value={form.projectName} /></label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">Review round <span className="text-cyanGlow">*</span><input className={builderFieldClass} onChange={(event) => updateField("reviewRound", event.target.value)} placeholder="Example: Round 2" type="text" value={form.reviewRound} /></label>
              <label className="text-sm font-semibold text-slate-100">Page, route, or feature being reviewed <span className="text-cyanGlow">*</span><input className={builderFieldClass} onChange={(event) => updateField("areaReviewed", event.target.value)} type="text" value={form.areaReviewed} /></label>
            </div>
            <label className="text-sm font-semibold text-slate-100">What is working well <span className="text-cyanGlow">*</span><textarea className={builderTextareaClass} onChange={(event) => updateField("workingWell", event.target.value)} value={form.workingWell} /></label>
            <label className="text-sm font-semibold text-slate-100">Requested change <span className="text-cyanGlow">*</span><textarea className={`${builderTextareaClass} min-h-28`} onChange={(event) => updateField("requestedChange", event.target.value)} value={form.requestedChange} /></label>
            <div className="grid gap-5 sm:grid-cols-3">
              <label className="text-sm font-semibold text-slate-100">Priority<select className={builderFieldClass} onChange={(event) => updateField("priority", event.target.value)} value={form.priority}>{priorities.map((option) => <option key={option}>{option}</option>)}</select></label>
              <label className="text-sm font-semibold text-slate-100">Request type<select className={builderFieldClass} onChange={(event) => updateField("requestType", event.target.value)} value={form.requestType}>{requestTypes.map((option) => <option key={option}>{option}</option>)}</select></label>
              <label className="text-sm font-semibold text-slate-100">Feedback status<select className={builderFieldClass} onChange={(event) => updateField("feedbackStatus", event.target.value)} value={form.feedbackStatus}>{statuses.map((option) => <option key={option}>{option}</option>)}</select></label>
            </div>
            <label className="text-sm font-semibold text-slate-100">Reason or expected outcome <span className="text-cyanGlow">*</span><textarea className={builderTextareaClass} onChange={(event) => updateField("reasonOutcome", event.target.value)} value={form.reasonOutcome} /></label>
            <label className="text-sm font-semibold text-slate-100">Decision or clarification needed<textarea className={builderTextareaClass} onChange={(event) => updateField("clarificationNeeded", event.target.value)} value={form.clarificationNeeded} /></label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">Reference or screenshot URL<input className={builderFieldClass} onChange={(event) => updateField("referenceUrl", event.target.value)} type="url" value={form.referenceUrl} /></label>
              <label className="text-sm font-semibold text-slate-100">Requested completion date<input className={builderFieldClass} onChange={(event) => updateField("requestedCompletionDate", event.target.value)} type="date" value={form.requestedCompletionDate} /></label>
            </div>
            <label className="text-sm font-semibold text-slate-100">Additional notes<textarea className={builderTextareaClass} onChange={(event) => updateField("additionalNotes", event.target.value)} value={form.additionalNotes} /></label>
            <p className="text-sm leading-6 text-slate-300" role="status">{statusMessage}</p>
            {missingFields.length ? <p className="text-sm leading-6 text-amber-100">Required before generating: {missingFields.join(", ")}.</p> : null}
            <div className="flex flex-wrap gap-3">
              <button className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift" onClick={generateSummary} type="button">Generate feedback summary</button>
              <button className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white" onClick={resetBuilder} type="button">Reset</button>
            </div>
          </form>
        </div>

        <aside className="border border-white/10 bg-white/[0.04] p-6 shadow-glow sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Feedback preview</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">Copyable feedback summary</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">Priority: <span className={`inline-flex border px-2 py-1 text-xs font-semibold ${priorityClass(form.priority)}`}>{form.priority} - {form.requestType}</span></p>
          <textarea aria-label="Generated client feedback summary" className="mt-6 min-h-[560px] w-full resize-y break-words border border-white/10 bg-slateInk/80 p-4 font-mono text-xs leading-5 text-slate-200 outline-none focus:border-cyan-300/70" readOnly value={summary} />
          <button className="focus-ring mt-5 inline-flex w-full items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white" onClick={copySummary} type="button">{copyStatus}</button>
          <p className="mt-4 text-sm leading-6 text-emerald-100" role="status" aria-live="polite">{copyStatus === "Copied" ? "Feedback summary copied to clipboard." : "Copy confirmation will appear here."}</p>
          <p className="mt-5 text-xs leading-5 text-slate-400">Analytics records only safe actions. It does not track names, feedback contents, revision requests, URLs, dates, approval details, checklist selections, or form values.</p>
        </aside>
      </div>
    </section>
  );
}
