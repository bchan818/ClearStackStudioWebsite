"use client";

import { useMemo, useState } from "react";
import { track } from "@vercel/analytics";

type InquiryForm = {
  name: string;
  email: string;
  projectType: string;
  projectGoal: string;
  audience: string;
  mustHaveFeatures: string;
  timeline: string;
  budgetRange: string;
  existingLink: string;
};

const initialInquiry: InquiryForm = {
  name: "",
  email: "",
  projectType: "Product MVP",
  projectGoal: "",
  audience: "",
  mustHaveFeatures: "",
  timeline: "",
  budgetRange: "",
  existingLink: ""
};

const projectTypes = [
  "Product MVP",
  "Storefront MVP",
  "AI-Powered Tool",
  "Internal Dashboard",
  "Website/App Refresh",
  "Not sure yet"
];

const budgetRanges = [
  "Not sure yet",
  "Under $1,000",
  "$1,000 - $2,500",
  "$2,500 - $5,000",
  "$5,000 - $10,000",
  "$10,000+"
];

const fieldClass =
  "mt-2 w-full border border-white/10 bg-slateInk/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70";

function buildSummary(inquiry: InquiryForm) {
  return [
    "ClearStack Studio project inquiry",
    "",
    `Name: ${inquiry.name || "Not provided"}`,
    `Email: ${inquiry.email || "Not provided"}`,
    `Project type: ${inquiry.projectType || "Not provided"}`,
    `Project goal: ${inquiry.projectGoal || "Not provided"}`,
    `Audience/users: ${inquiry.audience || "Not provided"}`,
    `Must-have features: ${inquiry.mustHaveFeatures || "Not provided"}`,
    `Timeline: ${inquiry.timeline || "Not provided"}`,
    `Budget range: ${inquiry.budgetRange || "Not provided"}`,
    `Existing link/reference: ${inquiry.existingLink || "None provided"}`,
    "",
    "I understand this page does not submit to a backend. I am sending this by email or copying the summary manually."
  ].join("\n");
}

export function StartInquiryWorkflow() {
  const [inquiry, setInquiry] = useState<InquiryForm>(initialInquiry);
  const [copyStatus, setCopyStatus] = useState("Copy summary");

  const summary = useMemo(() => buildSummary(inquiry), [inquiry]);
  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(
      `${inquiry.projectType || "Project"} inquiry for ClearStack Studio`
    );
    return `mailto:hello@clearstack.studio?subject=${subject}&body=${encodeURIComponent(summary)}`;
  }, [inquiry.projectType, summary]);

  const updateField = (field: keyof InquiryForm, value: string) => {
    setInquiry((current) => ({ ...current, [field]: value }));
    setCopyStatus("Copy summary");
  };

  const copySummary = async () => {
    track("inquiry_summary_copy", {
      cta_location: "start_inquiry_workflow",
      label: "start_page_inquiry_copy_summary"
    });

    if (!navigator.clipboard) {
      setCopyStatus("Select and copy below");
      return;
    }

    await navigator.clipboard.writeText(summary);
    setCopyStatus("Copied");
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8" id="inquiry-workflow">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.86fr]">
        <div className="border border-cyan-300/20 bg-cyan-300/[0.05] p-6 shadow-glow sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            Static project inquiry workflow
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Build a clear inquiry before you email.
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">
            Fill out the fields below to create a prefilled email and a copyable inquiry summary. This is a static page: no backend submission occurs, no account is created, and nothing is stored by this website.
          </p>

          <form className="mt-8 grid gap-5" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">
                Name
                <input
                  className={fieldClass}
                  name="name"
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder="Your name"
                  type="text"
                  value={inquiry.name}
                />
              </label>
              <label className="text-sm font-semibold text-slate-100">
                Email
                <input
                  className={fieldClass}
                  name="email"
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder="you@example.com"
                  type="email"
                  value={inquiry.email}
                />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">
                Project type
                <select
                  className={fieldClass}
                  name="projectType"
                  onChange={(event) => updateField("projectType", event.target.value)}
                  value={inquiry.projectType}
                >
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
              <label className="text-sm font-semibold text-slate-100">
                Timeline
                <input
                  className={fieldClass}
                  name="timeline"
                  onChange={(event) => updateField("timeline", event.target.value)}
                  placeholder="Example: 2-4 weeks, this quarter, flexible"
                  type="text"
                  value={inquiry.timeline}
                />
              </label>
            </div>

            <label className="text-sm font-semibold text-slate-100">
              Project goal
              <textarea
                className={`${fieldClass} min-h-28 resize-y`}
                name="projectGoal"
                onChange={(event) => updateField("projectGoal", event.target.value)}
                placeholder="What should this project help you launch, validate, sell, or improve?"
                value={inquiry.projectGoal}
              />
            </label>

            <label className="text-sm font-semibold text-slate-100">
              Audience
              <textarea
                className={`${fieldClass} min-h-24 resize-y`}
                name="audience"
                onChange={(event) => updateField("audience", event.target.value)}
                placeholder="Who is this for: customers, users, reviewers, creators, internal staff, or another group?"
                value={inquiry.audience}
              />
            </label>

            <label className="text-sm font-semibold text-slate-100">
              Must-have features
              <textarea
                className={`${fieldClass} min-h-28 resize-y`}
                name="mustHaveFeatures"
                onChange={(event) => updateField("mustHaveFeatures", event.target.value)}
                placeholder="List the pages, screens, products, workflows, content sections, or actions the first version needs."
                value={inquiry.mustHaveFeatures}
              />
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100">
                Budget range
                <select
                  className={fieldClass}
                  name="budgetRange"
                  onChange={(event) => updateField("budgetRange", event.target.value)}
                  value={inquiry.budgetRange}
                >
                  <option value="">Select a range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </label>
              <label className="text-sm font-semibold text-slate-100">
                Optional existing link
                <input
                  className={fieldClass}
                  name="existingLink"
                  onChange={(event) => updateField("existingLink", event.target.value)}
                  placeholder="Current site, demo, doc, or reference link"
                  type="url"
                  value={inquiry.existingLink}
                />
              </label>
            </div>
          </form>
        </div>

        <aside className="border border-white/10 bg-white/[0.04] p-6 shadow-glow sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            Your inquiry summary
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-white">
            Send by email or copy manually.
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            The buttons below only open your email app or copy text to your clipboard. This page does not submit, save, or send form data on its own.
          </p>
          <textarea
            aria-label="Generated project inquiry summary"
            className="mt-6 min-h-[360px] w-full resize-y border border-white/10 bg-slateInk/80 p-4 font-mono text-xs leading-5 text-slate-200 outline-none focus:border-cyan-300/70"
            readOnly
            value={summary}
          />
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              href={mailtoHref}
              onClick={() => {
                track("inquiry_email_open", {
                  cta_location: "start_inquiry_workflow",
                  label: "start_page_inquiry_prefilled_email"
                });
              }}
            >
              Open prefilled email
            </a>
            <button
              className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
              onClick={copySummary}
              type="button"
            >
              {copyStatus}
            </button>
          </div>
          <div className="mt-5 border border-amber-100/30 bg-amber-100/[0.06] p-4 text-sm leading-6 text-amber-50">
            No backend submission occurs. If your email app does not open, copy the summary and send it to hello@clearstack.studio manually.
          </div>
        </aside>
      </div>
    </section>
  );
}
