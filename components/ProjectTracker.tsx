"use client";

import { ChangeEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";
import { builderFieldClass, builderTextareaClass } from "@/components/BuilderShared";

type TrackerProjectType =
  | "Product MVP"
  | "Storefront MVP"
  | "AI-Powered Tool"
  | "Internal Workflow Dashboard"
  | "Website/App Refresh"
  | "Other";

type Stage =
  | "New Inquiry"
  | "Discovery"
  | "Proposal Drafted"
  | "Proposal Sent"
  | "SOW Pending"
  | "Approved"
  | "In Development"
  | "Testing"
  | "Launch Ready"
  | "Launched"
  | "Handoff Complete"
  | "Closed";

type Priority = "Low" | "Normal" | "High" | "Urgent";
type ProposalStatus = "Not Started" | "Drafting" | "Ready" | "Sent" | "Accepted" | "Declined";
type SowStatus = "Not Started" | "Drafting" | "Sent" | "Approved" | "Not Required";

type TrackerRecord = {
  id: string;
  name: string;
  projectType: TrackerProjectType;
  stage: Stage;
  priority: Priority;
  nextAction: string;
  targetDate: string;
  lastFollowUpDate: string;
  proposalStatus: ProposalStatus;
  sowStatus: SowStatus;
  publicUrl: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
};

type TrackerForm = Omit<TrackerRecord, "id" | "createdAt" | "updatedAt">;

const storageKey = "clearstack-project-tracker-records-v1";

const projectTypes: TrackerProjectType[] = [
  "Product MVP",
  "Storefront MVP",
  "AI-Powered Tool",
  "Internal Workflow Dashboard",
  "Website/App Refresh",
  "Other"
];

const stages: Stage[] = [
  "New Inquiry",
  "Discovery",
  "Proposal Drafted",
  "Proposal Sent",
  "SOW Pending",
  "Approved",
  "In Development",
  "Testing",
  "Launch Ready",
  "Launched",
  "Handoff Complete",
  "Closed"
];

const priorities: Priority[] = ["Low", "Normal", "High", "Urgent"];
const proposalStatuses: ProposalStatus[] = ["Not Started", "Drafting", "Ready", "Sent", "Accepted", "Declined"];
const sowStatuses: SowStatus[] = ["Not Started", "Drafting", "Sent", "Approved", "Not Required"];

const blankForm: TrackerForm = {
  name: "",
  projectType: "Product MVP",
  stage: "New Inquiry",
  priority: "Normal",
  nextAction: "",
  targetDate: "",
  lastFollowUpDate: "",
  proposalStatus: "Not Started",
  sowStatus: "Not Started",
  publicUrl: "",
  notes: ""
};

const emptyFilters = {
  stage: "All",
  projectType: "All",
  priority: "All",
  proposalStatus: "All",
  sowStatus: "All",
  search: ""
};

function makeId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `record-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function todayString() {
  return new Date().toISOString().slice(0, 10);
}

function isOverdue(record: TrackerRecord) {
  return Boolean(
    record.targetDate &&
      record.targetDate < todayString() &&
      record.stage !== "Closed" &&
      record.stage !== "Handoff Complete"
  );
}

function isRecord(value: unknown): value is TrackerRecord {
  if (!value || typeof value !== "object") return false;

  const record = value as Partial<TrackerRecord>;
  return Boolean(
    typeof record.id === "string" &&
      typeof record.name === "string" &&
      projectTypes.includes(record.projectType as TrackerProjectType) &&
      stages.includes(record.stage as Stage) &&
      priorities.includes(record.priority as Priority) &&
      typeof record.nextAction === "string" &&
      typeof record.targetDate === "string" &&
      typeof record.lastFollowUpDate === "string" &&
      proposalStatuses.includes(record.proposalStatus as ProposalStatus) &&
      sowStatuses.includes(record.sowStatus as SowStatus) &&
      typeof record.publicUrl === "string" &&
      typeof record.notes === "string" &&
      typeof record.createdAt === "string" &&
      typeof record.updatedAt === "string"
  );
}

function readStoredRecords() {
  try {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) return [];

    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed) || !parsed.every(isRecord)) return [];
    return parsed;
  } catch {
    return [];
  }
}

function stageBadgeClass(stage: Stage) {
  if (stage === "Launch Ready") return "border-emerald-300/40 text-emerald-100";
  if (stage === "Handoff Complete" || stage === "Closed") return "border-slate-400/40 text-slate-300";
  if (stage === "Proposal Sent" || stage === "SOW Pending") return "border-amber-100/40 text-amber-100";
  return "border-cyan-300/40 text-cyan-100";
}

function priorityBadgeClass(priority: Priority) {
  if (priority === "Urgent") return "border-red-300/50 text-red-100";
  if (priority === "High") return "border-amber-100/50 text-amber-100";
  if (priority === "Low") return "border-slate-500/50 text-slate-300";
  return "border-cyan-300/40 text-cyan-100";
}

export function ProjectTracker() {
  const [records, setRecords] = useState<TrackerRecord[]>(() =>
    typeof window === "undefined" ? [] : readStoredRecords()
  );
  const [form, setForm] = useState<TrackerForm>(blankForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [filters, setFilters] = useState(emptyFilters);
  const [status, setStatus] = useState("Tracker ready. Data stays in this browser only.");

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(storageKey, JSON.stringify(records));
    }
  }, [records]);

  const dashboard = useMemo(
    () => ({
      openLeads: records.filter((record) => ["New Inquiry", "Discovery", "Proposal Drafted", "Proposal Sent"].includes(record.stage)).length,
      activeProjects: records.filter((record) => ["Approved", "In Development", "Testing"].includes(record.stage)).length,
      awaitingResponse: records.filter((record) => record.stage === "Proposal Sent" || record.stage === "SOW Pending").length,
      launchReady: records.filter((record) => record.stage === "Launch Ready").length,
      overdue: records.filter(isOverdue).length,
      completedHandoffs: records.filter((record) => record.stage === "Handoff Complete").length
    }),
    [records]
  );

  const filteredRecords = useMemo(() => {
    const search = filters.search.trim().toLowerCase();

    return records.filter((record) => {
      const matchesFilters =
        (filters.stage === "All" || record.stage === filters.stage) &&
        (filters.projectType === "All" || record.projectType === filters.projectType) &&
        (filters.priority === "All" || record.priority === filters.priority) &&
        (filters.proposalStatus === "All" || record.proposalStatus === filters.proposalStatus) &&
        (filters.sowStatus === "All" || record.sowStatus === filters.sowStatus);

      const matchesSearch =
        !search ||
        record.name.toLowerCase().includes(search) ||
        record.nextAction.toLowerCase().includes(search) ||
        record.notes.toLowerCase().includes(search);

      return matchesFilters && matchesSearch;
    });
  }, [filters, records]);

  const updateForm = (field: keyof TrackerForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const clearForm = () => {
    if (editingId && !window.confirm("Discard the current edit and clear the form?")) return;
    setForm(blankForm);
    setEditingId(null);
    setStatus("Form cleared. Existing tracker records were not changed.");
  };

  const saveRecord = () => {
    if (!form.name.trim() || !form.nextAction.trim()) {
      setStatus("Project or lead name and next action are required before saving.");
      return;
    }

    const now = new Date().toISOString();

    if (editingId) {
      setRecords((current) =>
        current.map((record) =>
          record.id === editingId
            ? {
                ...record,
                ...form,
                updatedAt: now
              }
            : record
        )
      );
      setStatus("Tracker record updated.");
    } else {
      const newRecord: TrackerRecord = {
        id: makeId(),
        ...form,
        createdAt: now,
        updatedAt: now
      };
      setRecords((current) => [newRecord, ...current]);
      setStatus("Tracker record created and saved in this browser.");
      track("tracker_record_created", {
        cta_location: "project_tracker",
        label: "project_tracker_record_created",
        project_type: form.projectType
      });
    }

    setForm(blankForm);
    setEditingId(null);
  };

  const editRecord = (record: TrackerRecord) => {
    setForm({
      name: record.name,
      projectType: record.projectType,
      stage: record.stage,
      priority: record.priority,
      nextAction: record.nextAction,
      targetDate: record.targetDate,
      lastFollowUpDate: record.lastFollowUpDate,
      proposalStatus: record.proposalStatus,
      sowStatus: record.sowStatus,
      publicUrl: record.publicUrl,
      notes: record.notes
    });
    setEditingId(record.id);
    setStatus(`Editing ${record.name}. Save changes or clear the form to cancel.`);
  };

  const updateRecordStage = (recordId: string, stage: Stage) => {
    setRecords((current) =>
      current.map((record) =>
        record.id === recordId
          ? {
              ...record,
              stage,
              updatedAt: new Date().toISOString()
            }
          : record
      )
    );
    setStatus("Stage updated.");
    track("tracker_stage_updated", {
      cta_location: "project_tracker",
      label: "project_tracker_stage_updated"
    });
  };

  const deleteRecord = (recordId: string, recordName: string) => {
    if (!window.confirm(`Delete tracker record for ${recordName}? This only removes the browser-local copy.`)) return;
    setRecords((current) => current.filter((record) => record.id !== recordId));
    if (editingId === recordId) {
      setEditingId(null);
      setForm(blankForm);
    }
    setStatus("Tracker record deleted from this browser.");
  };

  const exportData = () => {
    const blob = new Blob([JSON.stringify(records, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `clearstack-project-tracker-${todayString()}.json`;
    link.click();
    URL.revokeObjectURL(url);
    setStatus("Tracker data exported as JSON. Review exports before sharing; do not include secrets or sensitive information.");
    track("tracker_exported", {
      cta_location: "project_tracker",
      label: "project_tracker_exported"
    });
  };

  const importData = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    try {
      const text = await file.text();
      const parsed = JSON.parse(text) as unknown;
      if (!Array.isArray(parsed) || !parsed.every(isRecord)) {
        setStatus("Import failed. The selected JSON file does not match the tracker record format.");
        return;
      }

      if (!window.confirm("Importing will replace all current browser-local tracker records. Continue?")) {
        setStatus("Import cancelled. Current tracker records were not changed.");
        return;
      }

      setRecords(parsed);
      setEditingId(null);
      setForm(blankForm);
      setStatus("Tracker data imported and saved in this browser.");
    } catch {
      setStatus("Import failed. Select a valid JSON export from this tracker.");
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="border border-cyan-300/20 bg-cyan-300/[0.05] p-6 shadow-glow sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Add or edit record</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">Project tracker intake</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Add lightweight lead and project records for internal planning. Do not enter passwords, API keys, payment details, protected records, confidential documents, or sensitive personal data.
          </p>

          <form className="mt-8 grid gap-5" onSubmit={(event) => event.preventDefault()}>
            <label className="text-sm font-semibold text-slate-100">
              Project or lead name <span className="text-cyanGlow">*</span>
              <input className={builderFieldClass} name="name" onChange={(event) => updateForm("name", event.target.value)} placeholder="Example: ClearBloom storefront refresh" type="text" value={form.name} />
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">
                Project type
                <select className={builderFieldClass} name="projectType" onChange={(event) => updateForm("projectType", event.target.value)} value={form.projectType}>
                  {projectTypes.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
              </label>
              <label className="text-sm font-semibold text-slate-100">
                Current stage
                <select className={builderFieldClass} name="stage" onChange={(event) => updateForm("stage", event.target.value)} value={form.stage}>
                  {stages.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">
                Priority
                <select className={builderFieldClass} name="priority" onChange={(event) => updateForm("priority", event.target.value)} value={form.priority}>
                  {priorities.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
              </label>
              <label className="text-sm font-semibold text-slate-100">
                Target date
                <input className={builderFieldClass} name="targetDate" onChange={(event) => updateForm("targetDate", event.target.value)} type="date" value={form.targetDate} />
              </label>
            </div>

            <label className="text-sm font-semibold text-slate-100">
              Next action <span className="text-cyanGlow">*</span>
              <input className={builderFieldClass} name="nextAction" onChange={(event) => updateForm("nextAction", event.target.value)} placeholder="Example: Send revised proposal" type="text" value={form.nextAction} />
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">
                Last follow-up date
                <input className={builderFieldClass} name="lastFollowUpDate" onChange={(event) => updateForm("lastFollowUpDate", event.target.value)} type="date" value={form.lastFollowUpDate} />
              </label>
              <label className="text-sm font-semibold text-slate-100">
                Optional public project URL
                <input className={builderFieldClass} name="publicUrl" onChange={(event) => updateForm("publicUrl", event.target.value)} placeholder="https://..." type="url" value={form.publicUrl} />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">
                Proposal status
                <select className={builderFieldClass} name="proposalStatus" onChange={(event) => updateForm("proposalStatus", event.target.value)} value={form.proposalStatus}>
                  {proposalStatuses.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
              </label>
              <label className="text-sm font-semibold text-slate-100">
                SOW status
                <select className={builderFieldClass} name="sowStatus" onChange={(event) => updateForm("sowStatus", event.target.value)} value={form.sowStatus}>
                  {sowStatuses.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
              </label>
            </div>

            <label className="text-sm font-semibold text-slate-100">
              Short operational notes
              <textarea className={`${builderTextareaClass} min-h-28`} name="notes" onChange={(event) => updateForm("notes", event.target.value)} placeholder="Keep notes operational and avoid sensitive or confidential data." value={form.notes} />
            </label>

            <p className="text-sm leading-6 text-slate-300" role="status">{status}</p>

            <div className="flex flex-wrap gap-3">
              <button className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift" onClick={saveRecord} type="button">
                {editingId ? "Update record" : "Add project or lead"}
              </button>
              <button className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white" onClick={clearForm} type="button">
                {editingId ? "Cancel edit" : "Clear form"}
              </button>
            </div>
          </form>
        </div>

        <div className="grid gap-5 content-start">
          <div className="border border-amber-100/30 bg-amber-100/[0.06] p-5 text-sm leading-6 text-amber-50">
            Tracker data is stored only in this browser. It is not synced, backed up, or submitted to ClearStack Studio servers.
          </div>
          <div className="border border-red-300/30 bg-red-300/[0.05] p-5 text-sm leading-6 text-red-50">
            Do not store passwords, API keys, payment card information, bank information, private credentials, protected student or medical records, confidential documents, or sensitive personal data.
          </div>
          <div className="border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Workflow</p>
            <p className="mt-3 text-lg font-semibold text-white">Inquiry -&gt; Proposal -&gt; SOW -&gt; Build -&gt; Launch -&gt; Handoff</p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
              <Link className="focus-ring border border-white/15 px-4 py-2 text-slate-100 transition hover:border-cyan-300/50" href="/start">Start inquiry</Link>
              <Link className="focus-ring border border-white/15 px-4 py-2 text-slate-100 transition hover:border-cyan-300/50" href="/proposal-builder">Proposal</Link>
              <Link className="focus-ring border border-white/15 px-4 py-2 text-slate-100 transition hover:border-cyan-300/50" href="/sow-builder">SOW</Link>
              <Link className="focus-ring border border-white/15 px-4 py-2 text-slate-100 transition hover:border-cyan-300/50" href="/status-report-builder">Update</Link>
              <Link className="focus-ring border border-white/15 px-4 py-2 text-slate-100 transition hover:border-cyan-300/50" href="/project-handoff">Handoff</Link>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {[
              ["Open leads", dashboard.openLeads],
              ["Active projects", dashboard.activeProjects],
              ["Awaiting response", dashboard.awaitingResponse],
              ["Launch-ready projects", dashboard.launchReady],
              ["Overdue next actions", dashboard.overdue],
              ["Completed handoffs", dashboard.completedHandoffs]
            ].map(([label, value]) => (
              <div className="border border-white/10 bg-white/[0.04] p-4" key={label}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{label}</p>
                <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
          <div className="border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Export and import</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">Export creates a JSON backup from this browser. Import validates the file and asks for confirmation before replacing current browser-local records.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button className="focus-ring inline-flex items-center justify-center border border-white/15 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50" onClick={exportData} type="button">Export tracker data as JSON</button>
              <label className="focus-ring inline-flex cursor-pointer items-center justify-center border border-white/15 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50">
                Import tracker data from JSON
                <input accept="application/json,.json" className="sr-only" onChange={importData} type="file" />
              </label>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-10 border border-white/10 bg-white/[0.04] p-5 sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Tracker dashboard</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Lead and project records</h2>
          </div>
          <button className="focus-ring inline-flex items-center justify-center border border-cyan-300/40 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyanGlow hover:text-slate-950" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} type="button">Add first project</button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <label className="text-sm font-semibold text-slate-100">Search project name, next action, or notes<input className={builderFieldClass} onChange={(event) => setFilters((current) => ({ ...current, search: event.target.value }))} type="search" value={filters.search} /></label>
          <label className="text-sm font-semibold text-slate-100">Stage<select className={builderFieldClass} onChange={(event) => setFilters((current) => ({ ...current, stage: event.target.value }))} value={filters.stage}><option>All</option>{stages.map((option) => <option key={option}>{option}</option>)}</select></label>
          <label className="text-sm font-semibold text-slate-100">Project type<select className={builderFieldClass} onChange={(event) => setFilters((current) => ({ ...current, projectType: event.target.value }))} value={filters.projectType}><option>All</option>{projectTypes.map((option) => <option key={option}>{option}</option>)}</select></label>
          <label className="text-sm font-semibold text-slate-100">Priority<select className={builderFieldClass} onChange={(event) => setFilters((current) => ({ ...current, priority: event.target.value }))} value={filters.priority}><option>All</option>{priorities.map((option) => <option key={option}>{option}</option>)}</select></label>
          <label className="text-sm font-semibold text-slate-100">Proposal status<select className={builderFieldClass} onChange={(event) => setFilters((current) => ({ ...current, proposalStatus: event.target.value }))} value={filters.proposalStatus}><option>All</option>{proposalStatuses.map((option) => <option key={option}>{option}</option>)}</select></label>
          <label className="text-sm font-semibold text-slate-100">SOW status<select className={builderFieldClass} onChange={(event) => setFilters((current) => ({ ...current, sowStatus: event.target.value }))} value={filters.sowStatus}><option>All</option>{sowStatuses.map((option) => <option key={option}>{option}</option>)}</select></label>
        </div>

        {records.length === 0 ? (
          <div className="mt-8 border border-white/10 bg-slateInk/70 p-8 text-center">
            <p className="text-xl font-semibold text-white">No leads or projects are being tracked yet.</p>
            <button className="focus-ring mt-5 inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} type="button">Add first project</button>
          </div>
        ) : (
          <div className="mt-8 overflow-x-auto">
            <table className="min-w-[980px] w-full border-collapse text-left text-sm">
              <caption className="sr-only">ClearStack Studio local project tracker records</caption>
              <thead className="text-xs uppercase tracking-[0.18em] text-slate-400">
                <tr className="border-b border-white/10">
                  <th className="p-3">Name</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Stage</th>
                  <th className="p-3">Priority</th>
                  <th className="p-3">Next action</th>
                  <th className="p-3">Target date</th>
                  <th className="p-3">Proposal</th>
                  <th className="p-3">SOW</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRecords.map((record) => (
                  <tr className="border-b border-white/10 align-top text-slate-200" key={record.id}>
                    <td className="max-w-[180px] p-3 font-semibold text-white break-words">{record.name}</td>
                    <td className="p-3">{record.projectType}</td>
                    <td className="p-3"><select aria-label={`Update stage for ${record.name}`} className={`${builderFieldClass} mt-0 min-w-44`} onChange={(event) => updateRecordStage(record.id, event.target.value as Stage)} value={record.stage}>{stages.map((option) => <option key={option} value={option}>{option}</option>)}</select><span className={`mt-2 inline-flex border px-2 py-1 text-xs ${stageBadgeClass(record.stage)}`}>{record.stage}</span></td>
                    <td className="p-3"><span className={`inline-flex border px-2 py-1 text-xs font-semibold ${priorityBadgeClass(record.priority)}`}>{record.priority}</span></td>
                    <td className="max-w-[220px] p-3 break-words">{record.nextAction}</td>
                    <td className="p-3">{record.targetDate || "Not set"}{isOverdue(record) ? <span className="mt-2 block border border-red-300/50 px-2 py-1 text-xs font-semibold text-red-100">Overdue next action</span> : null}</td>
                    <td className="p-3">{record.proposalStatus}</td>
                    <td className="p-3">{record.sowStatus}</td>
                    <td className="p-3"><div className="flex flex-col gap-2"><button className="focus-ring border border-white/15 px-3 py-2 text-xs font-semibold text-slate-100 transition hover:border-cyan-300/50" onClick={() => editRecord(record)} type="button">Edit record</button><button className="focus-ring border border-red-300/40 px-3 py-2 text-xs font-semibold text-red-100 transition hover:bg-red-300 hover:text-slate-950" onClick={() => deleteRecord(record.id, record.name)} type="button">Delete record</button></div></td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredRecords.length === 0 ? <p className="mt-6 text-sm text-slate-300">No records match the current filters.</p> : null}
          </div>
        )}
      </section>
    </section>
  );
}
