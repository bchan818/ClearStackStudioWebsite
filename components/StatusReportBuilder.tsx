"use client";

import { useMemo, useState } from "react";
import { track } from "@vercel/analytics";
import { builderFieldClass, builderTextareaClass, bulletList, splitLines, valueOrFallback } from "@/components/BuilderShared";

type ProjectType =
  | "Product MVP"
  | "Storefront MVP"
  | "AI-Powered Tool"
  | "Internal Workflow Dashboard"
  | "Website/App Refresh"
  | "Other";

type OverallStatus = "On Track" | "At Risk" | "Blocked" | "Awaiting Client" | "Launch Ready" | "Completed";
type ReportFormat = "Standard report" | "Concise email update" | "Slack-style update";

type StatusReportForm = {
  clientName: string;
  projectName: string;
  projectType: ProjectType;
  reportingPeriod: string;
  reportDate: string;
  overallStatus: OverallStatus;
  executiveSummary: string;
  completedWork: string;
  workInProgress: string;
  nextPriorities: string;
  risksBlockers: string;
  decisionsNeeded: string;
  upcomingMilestones: string;
  timelineChanges: string;
  scopeChanges: string;
  liveUrl: string;
  repositoryUrl: string;
  nextUpdateDate: string;
  additionalNotes: string;
};

type TrackerRecord = {
  id: string;
  name: string;
  projectType: ProjectType;
  stage: string;
  nextAction: string;
  targetDate: string;
  publicUrl: string;
};

const trackerStorageKey = "clearstack-project-tracker-records-v1";
const notice = "This builder creates a project communication draft only. Review all dates, commitments, scope changes, and client-facing statements before sending.";

const projectTypes: ProjectType[] = [
  "Product MVP",
  "Storefront MVP",
  "AI-Powered Tool",
  "Internal Workflow Dashboard",
  "Website/App Refresh",
  "Other"
];

const overallStatuses: OverallStatus[] = ["On Track", "At Risk", "Blocked", "Awaiting Client", "Launch Ready", "Completed"];
const reportFormats: ReportFormat[] = ["Standard report", "Concise email update", "Slack-style update"];

const initialReport: StatusReportForm = {
  clientName: "",
  projectName: "",
  projectType: "Product MVP",
  reportingPeriod: "",
  reportDate: new Date().toISOString().slice(0, 10),
  overallStatus: "On Track",
  executiveSummary: "",
  completedWork: "",
  workInProgress: "",
  nextPriorities: "",
  risksBlockers: "",
  decisionsNeeded: "",
  upcomingMilestones: "",
  timelineChanges: "",
  scopeChanges: "",
  liveUrl: "",
  repositoryUrl: "",
  nextUpdateDate: "",
  additionalNotes: ""
};

const requiredFields: Array<keyof StatusReportForm> = [
  "projectName",
  "reportingPeriod",
  "reportDate",
  "executiveSummary",
  "completedWork",
  "workInProgress",
  "nextPriorities",
  "nextUpdateDate"
];

function isTrackerRecord(value: unknown): value is TrackerRecord {
  if (!value || typeof value !== "object") return false;

  const record = value as Partial<TrackerRecord>;
  return Boolean(
    typeof record.id === "string" &&
      typeof record.name === "string" &&
      projectTypes.includes(record.projectType as ProjectType) &&
      typeof record.stage === "string" &&
      typeof record.nextAction === "string" &&
      typeof record.targetDate === "string" &&
      typeof record.publicUrl === "string"
  );
}

function readTrackerRecords() {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(trackerStorageKey);
    if (!raw) return [];

    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isTrackerRecord);
  } catch {
    return [];
  }
}

function buildStandardReport(form: StatusReportForm) {
  return [
    "1. Project Status Report",
    `Project: ${valueOrFallback(form.projectName)}`,
    `Client/organization: ${valueOrFallback(form.clientName, "Not listed")}`,
    `Project type: ${form.projectType}`,
    "",
    "NOTICE",
    notice,
    "This static builder does not submit, save, email, or store entered report data.",
    "",
    "2. Reporting period",
    `Reporting period: ${valueOrFallback(form.reportingPeriod)}`,
    `Report date: ${valueOrFallback(form.reportDate)}`,
    "",
    "3. Overall status",
    form.overallStatus,
    "",
    "4. Executive summary",
    valueOrFallback(form.executiveSummary),
    "",
    "5. Completed this period",
    bulletList(splitLines(form.completedWork)),
    "",
    "6. In progress",
    bulletList(splitLines(form.workInProgress)),
    "",
    "7. Next priorities",
    bulletList(splitLines(form.nextPriorities)),
    "",
    "8. Risks and blockers",
    bulletList(splitLines(form.risksBlockers).length ? splitLines(form.risksBlockers) : ["No current risks or blockers listed"]),
    "",
    "9. Decisions or information needed",
    bulletList(splitLines(form.decisionsNeeded).length ? splitLines(form.decisionsNeeded) : ["No decisions or client inputs listed for this update"]),
    "",
    "10. Upcoming milestones",
    bulletList(splitLines(form.upcomingMilestones).length ? splitLines(form.upcomingMilestones) : ["Upcoming milestones to be confirmed"]),
    "",
    "11. Timeline and scope updates",
    `Timeline changes: ${valueOrFallback(form.timelineChanges, "No timeline changes listed")}`,
    `Scope changes: ${valueOrFallback(form.scopeChanges, "No scope changes listed")}`,
    "",
    "12. Project links",
    `Live site or demo URL: ${valueOrFallback(form.liveUrl, "Not provided")}`,
    `Repository URL: ${valueOrFallback(form.repositoryUrl, "Not provided")}`,
    "",
    "13. Next update date",
    valueOrFallback(form.nextUpdateDate),
    "",
    "14. Closing note",
    valueOrFallback(
      form.additionalNotes,
      "Please review this update and send any questions, decisions, or priority changes before the next project checkpoint."
    )
  ].join("\n");
}

function buildConciseReport(form: StatusReportForm) {
  return [
    `Project: ${valueOrFallback(form.projectName)}`,
    `Status: ${form.overallStatus}`,
    `Reporting period: ${valueOrFallback(form.reportingPeriod)} | Report date: ${valueOrFallback(form.reportDate)}`,
    "",
    `Summary: ${valueOrFallback(form.executiveSummary)}`,
    "",
    "Completed:",
    bulletList(splitLines(form.completedWork)),
    "",
    "In progress:",
    bulletList(splitLines(form.workInProgress)),
    "",
    "Next:",
    bulletList(splitLines(form.nextPriorities)),
    "",
    "Risks:",
    bulletList(splitLines(form.risksBlockers).length ? splitLines(form.risksBlockers) : ["No current risks listed"]),
    "",
    "Needs from client:",
    bulletList(splitLines(form.decisionsNeeded).length ? splitLines(form.decisionsNeeded) : ["No client decisions listed"]),
    "",
    `Upcoming milestone: ${valueOrFallback(form.upcomingMilestones, "To be confirmed")}`,
    `Next update: ${valueOrFallback(form.nextUpdateDate)}`,
    "",
    notice
  ].join("\n");
}

function buildSlackReport(form: StatusReportForm) {
  return [
    `*${valueOrFallback(form.projectName)} status update*`,
    `Status: ${form.overallStatus}`,
    `Period: ${valueOrFallback(form.reportingPeriod)} | Next update: ${valueOrFallback(form.nextUpdateDate)}`,
    "",
    `Summary: ${valueOrFallback(form.executiveSummary)}`,
    "",
    "Completed:",
    bulletList(splitLines(form.completedWork)),
    "",
    "In progress:",
    bulletList(splitLines(form.workInProgress)),
    "",
    "Next priorities:",
    bulletList(splitLines(form.nextPriorities)),
    "",
    "Risks/blockers:",
    bulletList(splitLines(form.risksBlockers).length ? splitLines(form.risksBlockers) : ["None listed"]),
    "",
    "Decisions needed:",
    bulletList(splitLines(form.decisionsNeeded).length ? splitLines(form.decisionsNeeded) : ["None listed"])
  ].join("\n");
}

function buildReport(form: StatusReportForm, format: ReportFormat) {
  if (format === "Concise email update") return buildConciseReport(form);
  if (format === "Slack-style update") return buildSlackReport(form);
  return buildStandardReport(form);
}

function statusClass(status: OverallStatus) {
  if (status === "On Track" || status === "Launch Ready" || status === "Completed") return "border-emerald-300/40 text-emerald-100";
  if (status === "At Risk" || status === "Awaiting Client") return "border-amber-100/40 text-amber-100";
  return "border-red-300/40 text-red-100";
}

export function StatusReportBuilder() {
  const [form, setForm] = useState<StatusReportForm>(initialReport);
  const [format, setFormat] = useState<ReportFormat>("Standard report");
  const [report, setReport] = useState(() => buildReport(initialReport, "Standard report"));
  const [statusMessage, setStatusMessage] = useState("Complete the required fields, then generate a report draft.");
  const [copyStatus, setCopyStatus] = useState("Copy report");
  const [trackerRecords] = useState<TrackerRecord[]>(() =>
    typeof window === "undefined" ? [] : readTrackerRecords()
  );
  const [selectedTrackerId, setSelectedTrackerId] = useState("");

  const missingFields = useMemo(
    () => requiredFields.filter((field) => !form[field].trim()),
    [form]
  );

  const updateField = (field: keyof StatusReportForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setCopyStatus("Copy report");
  };

  const applyTrackerRecord = (recordId: string) => {
    setSelectedTrackerId(recordId);
    const record = trackerRecords.find((item) => item.id === recordId);
    if (!record) return;

    setForm((current) => ({
      ...current,
      projectName: record.name,
      projectType: record.projectType,
      overallStatus: record.stage === "Launch Ready" ? "Launch Ready" : record.stage === "Closed" || record.stage === "Handoff Complete" ? "Completed" : current.overallStatus,
      workInProgress: current.workInProgress || `Current tracker stage: ${record.stage}`,
      nextPriorities: current.nextPriorities || record.nextAction,
      upcomingMilestones: current.upcomingMilestones || record.targetDate,
      liveUrl: current.liveUrl || record.publicUrl
    }));
    setStatusMessage("Safe fields were prefilled from the browser-local tracker record. Private notes were not imported.");
  };

  const generateReport = () => {
    if (missingFields.length) {
      setStatusMessage("Please complete the required fields before generating a report draft.");
      return;
    }

    setReport(buildReport(form, format));
    setStatusMessage("Status report draft generated. Review all client-facing details before sending.");
    setCopyStatus("Copy report");
    track("status_report_generated", {
      cta_location: "status_report_builder",
      label: "status_report_generated"
    });
  };

  const copyReport = async () => {
    track("status_report_copied", {
      cta_location: "status_report_builder",
      label: "status_report_copied"
    });

    if (!navigator.clipboard) {
      setCopyStatus("Select and copy below");
      setStatusMessage("Clipboard access is unavailable. Select the report text and copy it manually.");
      return;
    }

    await navigator.clipboard.writeText(report);
    setCopyStatus("Copied");
    setStatusMessage("Report copied. Review the content before sending it to a client or project channel.");
  };

  const resetBuilder = () => {
    setForm(initialReport);
    setFormat("Standard report");
    setReport(buildReport(initialReport, "Standard report"));
    setSelectedTrackerId("");
    setCopyStatus("Copy report");
    setStatusMessage("Builder reset. Complete the required fields, then generate a report draft.");
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="border border-cyan-300/20 bg-cyan-300/[0.05] p-6 shadow-glow sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Status report draft</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Generate a polished project update.</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">
            Convert project updates into a report for email, Slack, project meetings, or client documentation. This static builder does not submit, save, email, or store entered report data.
          </p>
          <div className="mt-5 border border-amber-100/30 bg-amber-100/[0.06] p-4 text-sm leading-6 text-amber-50">{notice}</div>

          {trackerRecords.length ? (
            <div className="mt-6 border border-white/10 bg-slateInk/70 p-4">
              <label className="text-sm font-semibold text-slate-100">
                Optional browser-local tracker prefill
                <select className={builderFieldClass} onChange={(event) => applyTrackerRecord(event.target.value)} value={selectedTrackerId}>
                  <option value="">Select a tracker record</option>
                  {trackerRecords.map((record) => (
                    <option key={record.id} value={record.id}>{record.name} - {record.stage}</option>
                  ))}
                </select>
              </label>
              <p className="mt-3 text-xs leading-5 text-slate-400">Prefill uses only safe fields: project name, type, stage, target date, next action, and public URL. Tracker notes are not imported.</p>
            </div>
          ) : null}

          <form className="mt-8 grid gap-5" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">Client or organization name<input className={builderFieldClass} name="clientName" onChange={(event) => updateField("clientName", event.target.value)} type="text" value={form.clientName} /></label>
              <label className="text-sm font-semibold text-slate-100">Project name <span className="text-cyanGlow">*</span><input className={builderFieldClass} name="projectName" onChange={(event) => updateField("projectName", event.target.value)} type="text" value={form.projectName} /></label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">Project type<select className={builderFieldClass} name="projectType" onChange={(event) => updateField("projectType", event.target.value)} value={form.projectType}>{projectTypes.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
              <label className="text-sm font-semibold text-slate-100">Overall status<select className={builderFieldClass} name="overallStatus" onChange={(event) => updateField("overallStatus", event.target.value)} value={form.overallStatus}>{overallStatuses.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              <label className="text-sm font-semibold text-slate-100">Reporting period <span className="text-cyanGlow">*</span><input className={builderFieldClass} name="reportingPeriod" onChange={(event) => updateField("reportingPeriod", event.target.value)} placeholder="Example: July 15-22" type="text" value={form.reportingPeriod} /></label>
              <label className="text-sm font-semibold text-slate-100">Report date <span className="text-cyanGlow">*</span><input className={builderFieldClass} name="reportDate" onChange={(event) => updateField("reportDate", event.target.value)} type="date" value={form.reportDate} /></label>
              <label className="text-sm font-semibold text-slate-100">Next update date <span className="text-cyanGlow">*</span><input className={builderFieldClass} name="nextUpdateDate" onChange={(event) => updateField("nextUpdateDate", event.target.value)} type="date" value={form.nextUpdateDate} /></label>
            </div>

            <label className="text-sm font-semibold text-slate-100">Report format<select className={builderFieldClass} onChange={(event) => setFormat(event.target.value as ReportFormat)} value={format}>{reportFormats.map((option) => <option key={option}>{option}</option>)}</select></label>
            <label className="text-sm font-semibold text-slate-100">Short executive summary <span className="text-cyanGlow">*</span><textarea className={`${builderTextareaClass} min-h-28`} name="executiveSummary" onChange={(event) => updateField("executiveSummary", event.target.value)} value={form.executiveSummary} /></label>
            <label className="text-sm font-semibold text-slate-100">Completed work <span className="text-cyanGlow">*</span><textarea className={`${builderTextareaClass} min-h-28`} name="completedWork" onChange={(event) => updateField("completedWork", event.target.value)} placeholder="Use commas or separate lines." value={form.completedWork} /></label>
            <label className="text-sm font-semibold text-slate-100">Work in progress <span className="text-cyanGlow">*</span><textarea className={`${builderTextareaClass} min-h-28`} name="workInProgress" onChange={(event) => updateField("workInProgress", event.target.value)} value={form.workInProgress} /></label>
            <label className="text-sm font-semibold text-slate-100">Next priorities <span className="text-cyanGlow">*</span><textarea className={`${builderTextareaClass} min-h-28`} name="nextPriorities" onChange={(event) => updateField("nextPriorities", event.target.value)} value={form.nextPriorities} /></label>
            <label className="text-sm font-semibold text-slate-100">Risks or blockers<textarea className={builderTextareaClass} name="risksBlockers" onChange={(event) => updateField("risksBlockers", event.target.value)} value={form.risksBlockers} /></label>
            <label className="text-sm font-semibold text-slate-100">Decisions needed<textarea className={builderTextareaClass} name="decisionsNeeded" onChange={(event) => updateField("decisionsNeeded", event.target.value)} value={form.decisionsNeeded} /></label>
            <label className="text-sm font-semibold text-slate-100">Upcoming milestones<textarea className={builderTextareaClass} name="upcomingMilestones" onChange={(event) => updateField("upcomingMilestones", event.target.value)} value={form.upcomingMilestones} /></label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">Timeline changes<input className={builderFieldClass} name="timelineChanges" onChange={(event) => updateField("timelineChanges", event.target.value)} type="text" value={form.timelineChanges} /></label>
              <label className="text-sm font-semibold text-slate-100">Scope changes<input className={builderFieldClass} name="scopeChanges" onChange={(event) => updateField("scopeChanges", event.target.value)} type="text" value={form.scopeChanges} /></label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">Live site or demo URL<input className={builderFieldClass} name="liveUrl" onChange={(event) => updateField("liveUrl", event.target.value)} type="url" value={form.liveUrl} /></label>
              <label className="text-sm font-semibold text-slate-100">Repository URL<input className={builderFieldClass} name="repositoryUrl" onChange={(event) => updateField("repositoryUrl", event.target.value)} type="url" value={form.repositoryUrl} /></label>
            </div>

            <label className="text-sm font-semibold text-slate-100">Additional notes<textarea className={builderTextareaClass} name="additionalNotes" onChange={(event) => updateField("additionalNotes", event.target.value)} value={form.additionalNotes} /></label>

            <p className="text-sm leading-6 text-slate-300" role="status">{statusMessage}</p>
            {missingFields.length ? <p className="text-sm leading-6 text-amber-100">Required before generating: {missingFields.join(", ")}.</p> : null}

            <div className="flex flex-wrap gap-3">
              <button className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift" onClick={generateReport} type="button">Generate report</button>
              <button className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white" onClick={resetBuilder} type="button">Reset</button>
            </div>
          </form>
        </div>

        <aside className="border border-white/10 bg-white/[0.04] p-6 shadow-glow sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Report preview</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">Copyable client-ready update</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">Overall status: <span className={`inline-flex border px-2 py-1 text-xs font-semibold ${statusClass(form.overallStatus)}`}>{form.overallStatus}</span></p>
          <textarea aria-label="Generated project status report" className="mt-6 min-h-[560px] w-full resize-y break-words border border-white/10 bg-slateInk/80 p-4 font-mono text-xs leading-5 text-slate-200 outline-none focus:border-cyan-300/70" readOnly value={report} />
          <button className="focus-ring mt-5 inline-flex w-full items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white" onClick={copyReport} type="button">{copyStatus}</button>
          <p className="mt-4 text-sm leading-6 text-emerald-100" role="status" aria-live="polite">{copyStatus === "Copied" ? "Report copied to clipboard." : "Copy confirmation will appear here."}</p>
          <p className="mt-5 text-xs leading-5 text-slate-400">Analytics records only safe actions: status report generated and copied. It does not track client names, project names, report content, dates, URLs, risks, decisions, or form values.</p>
        </aside>
      </div>
    </section>
  );
}
