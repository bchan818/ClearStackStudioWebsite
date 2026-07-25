"use client";

import { useMemo, useState } from "react";
import { track } from "@vercel/analytics";

type InquiryForm = {
  contactName: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  servicesNeeded: string[];
  budgetRange: string;
  timeline: string;
  launchDate: string;
  projectGoals: string;
  requirements: string;
  challenges: string;
  existingWebsite: string;
  referenceLink: string;
};

type FormStatus = "idle" | "loading" | "success" | "error";

type FormErrors = Partial<Record<keyof InquiryForm, string>>;

const initialInquiry: InquiryForm = {
  contactName: "",
  email: "",
  company: "",
  phone: "",
  projectType: "Product MVP",
  servicesNeeded: [],
  budgetRange: "",
  timeline: "",
  launchDate: "",
  projectGoals: "",
  requirements: "",
  challenges: "",
  existingWebsite: "",
  referenceLink: ""
};

const projectTypes = [
  "Product MVP",
  "Storefront MVP",
  "AI-Powered Tool",
  "Internal Dashboard",
  "Website/App Refresh",
  "Not sure yet"
];

const serviceOptions = [
  "Discovery and scope planning",
  "Landing page or website refresh",
  "Product MVP screens",
  "Storefront MVP",
  "AI-assisted tool prototype",
  "Internal dashboard or workflow tool",
  "Launch, QA, and handoff support"
];

const budgetRanges = [
  "Not sure yet",
  "Under $1,000",
  "$1,000 - $2,500",
  "$2,500 - $5,000",
  "$5,000 - $10,000",
  "$10,000+"
];

const timelineOptions = [
  "Flexible / exploring fit",
  "As soon as practical",
  "2-4 weeks",
  "1-2 months",
  "This quarter",
  "Specific date listed below"
];

const requiredLabel = "Required";

const fieldClass =
  "mt-2 w-full min-w-0 border border-white/10 bg-slateInk/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70";
const errorFieldClass = "border-rose-300/70 focus:border-rose-200";

function optional(value: string, fallback = "Not provided") {
  return value.trim() || fallback;
}

function buildSummary(inquiry: InquiryForm) {
  return [
    "ClearStack Studio project inquiry",
    "",
    `Contact name: ${optional(inquiry.contactName)}`,
    `Email: ${optional(inquiry.email)}`,
    `Company: ${optional(inquiry.company)}`,
    `Phone: ${optional(inquiry.phone)}`,
    `Project type: ${optional(inquiry.projectType)}`,
    `Services needed: ${inquiry.servicesNeeded.length > 0 ? inquiry.servicesNeeded.join(", ") : "Not provided"}`,
    `Estimated budget range: ${optional(inquiry.budgetRange)}`,
    `Desired timeline: ${optional(inquiry.timeline)}`,
    `Desired launch date: ${optional(inquiry.launchDate)}`,
    `Project goals: ${optional(inquiry.projectGoals)}`,
    `Requirements: ${optional(inquiry.requirements)}`,
    `Challenges: ${optional(inquiry.challenges)}`,
    `Existing website: ${optional(inquiry.existingWebsite, "None provided")}`,
    `Reference link: ${optional(inquiry.referenceLink, "None provided")}`,
    "",
    "Submission note: This page does not submit to a backend. I am opening a prefilled email or copying the summary manually. The email is not sent until I review and send it from my own email app."
  ].join("\n");
}

function validateInquiry(inquiry: InquiryForm): FormErrors {
  const errors: FormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!inquiry.contactName.trim()) {
    errors.contactName = "Enter a contact name so ClearStack knows who to reply to.";
  }

  if (!inquiry.email.trim()) {
    errors.email = "Enter an email address for the reply.";
  } else if (!emailPattern.test(inquiry.email)) {
    errors.email = "Enter a valid email address, such as name@example.com.";
  }

  if (!inquiry.company.trim()) {
    errors.company = "Enter a company, brand, or project name.";
  }

  if (!inquiry.projectType) {
    errors.projectType = "Select the closest project type.";
  }

  if (inquiry.servicesNeeded.length === 0) {
    errors.servicesNeeded = "Select at least one service area.";
  }

  if (!inquiry.budgetRange) {
    errors.budgetRange = "Select an estimated budget range, even if you are not sure yet.";
  }

  if (!inquiry.timeline) {
    errors.timeline = "Select a desired timeline.";
  }

  if (!inquiry.projectGoals.trim()) {
    errors.projectGoals = "Describe what the project should accomplish.";
  }

  if (!inquiry.requirements.trim()) {
    errors.requirements = "List the key requirements or must-have features.";
  }

  return errors;
}

function RequiredMark() {
  return (
    <span className="ml-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyanGlow">
      {requiredLabel}
    </span>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p className="mt-2 text-sm leading-5 text-rose-100" id={id} role="alert">
      {message}
    </p>
  );
}

export function StartInquiryWorkflow() {
  const [inquiry, setInquiry] = useState<InquiryForm>(initialInquiry);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
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
    setErrors((current) => ({ ...current, [field]: undefined }));
    setFormStatus("idle");
    setCopyStatus("Copy summary");
  };

  const toggleService = (service: string) => {
    setInquiry((current) => {
      const servicesNeeded = current.servicesNeeded.includes(service)
        ? current.servicesNeeded.filter((item) => item !== service)
        : [...current.servicesNeeded, service];

      return { ...current, servicesNeeded };
    });
    setErrors((current) => ({ ...current, servicesNeeded: undefined }));
    setFormStatus("idle");
    setCopyStatus("Copy summary");
  };

  const copySummary = async () => {
    track("inquiry_summary_copy", {
      cta_location: "start_inquiry_workflow",
      label: "start_page_inquiry_copy_summary"
    });

    try {
      if (!navigator.clipboard) {
        setCopyStatus("Select and copy below");
        return;
      }

      await navigator.clipboard.writeText(summary);
      setCopyStatus("Copied");
    } catch {
      setCopyStatus("Copy failed");
    }
  };

  const openEmailDraft = () => {
    const nextErrors = validateInquiry(inquiry);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setFormStatus("error");
      return;
    }

    track("inquiry_email_open", {
      cta_location: "start_inquiry_workflow",
      label: "start_page_inquiry_prefilled_email"
    });

    try {
      setFormStatus("loading");
      window.setTimeout(() => {
        window.location.href = mailtoHref;
        setFormStatus("success");
      }, 150);
    } catch {
      setFormStatus("error");
    }
  };

  const statusMessage =
    formStatus === "loading"
      ? "Preparing email"
      : formStatus === "success"
        ? "Email draft opened"
        : formStatus === "error"
          ? Object.keys(errors).length > 0
            ? "Fix the highlighted fields"
            : "Could not open your email app"
          : "Ready to review";

  const fieldState = (field: keyof InquiryForm) => ({
    "aria-invalid": errors[field] ? true : undefined,
    "aria-errormessage": errors[field] ? `${field}-error` : undefined
  });

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8" id="inquiry-workflow">
      <form
        aria-describedby="inquiry-form-help inquiry-privacy-note"
        className="grid gap-8 lg:grid-cols-[1fr_0.86fr]"
        onSubmit={(event) => {
          event.preventDefault();
          openEmailDraft();
        }}
      >
        <div className="min-w-0 border border-cyan-300/20 bg-cyan-300/[0.05] p-6 shadow-glow sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            Professional client-intake draft
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Build a clear inquiry before you email.
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">
            Fill out the fields below to create a prefilled email and a copyable inquiry summary. No backend submission occurs, no account is created, and nothing is stored by this website.
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-400" id="inquiry-form-help">
            Fields marked <span className="font-semibold text-cyanGlow">Required</span> are needed before opening the email draft. Do not enter passwords, payment details, API keys, or private records.
          </p>

          <div className="mt-8 grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100" htmlFor="contactName">
                Contact name
                <RequiredMark />
                <input
                  {...fieldState("contactName")}
                  className={`${fieldClass} ${errors.contactName ? errorFieldClass : ""}`}
                  id="contactName"
                  name="contactName"
                  onChange={(event) => updateField("contactName", event.target.value)}
                  placeholder="Your name"
                  required
                  type="text"
                  value={inquiry.contactName}
                />
                <FieldError id="contactName-error" message={errors.contactName} />
              </label>
              <label className="text-sm font-semibold text-slate-100" htmlFor="email">
                Email
                <RequiredMark />
                <input
                  {...fieldState("email")}
                  className={`${fieldClass} ${errors.email ? errorFieldClass : ""}`}
                  id="email"
                  name="email"
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder="you@example.com"
                  required
                  type="email"
                  value={inquiry.email}
                />
                <FieldError id="email-error" message={errors.email} />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100" htmlFor="company">
                Company
                <RequiredMark />
                <input
                  {...fieldState("company")}
                  className={`${fieldClass} ${errors.company ? errorFieldClass : ""}`}
                  id="company"
                  name="company"
                  onChange={(event) => updateField("company", event.target.value)}
                  placeholder="Company, brand, or project name"
                  required
                  type="text"
                  value={inquiry.company}
                />
                <FieldError id="company-error" message={errors.company} />
              </label>
              <label className="text-sm font-semibold text-slate-100" htmlFor="phone">
                Optional phone
                <input
                  className={fieldClass}
                  id="phone"
                  name="phone"
                  onChange={(event) => updateField("phone", event.target.value)}
                  placeholder="Optional phone number"
                  type="tel"
                  value={inquiry.phone}
                />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100" htmlFor="projectType">
                Project type
                <RequiredMark />
                <select
                  {...fieldState("projectType")}
                  className={`${fieldClass} ${errors.projectType ? errorFieldClass : ""}`}
                  id="projectType"
                  name="projectType"
                  onChange={(event) => updateField("projectType", event.target.value)}
                  required
                  value={inquiry.projectType}
                >
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <FieldError id="projectType-error" message={errors.projectType} />
              </label>
              <label className="text-sm font-semibold text-slate-100" htmlFor="budgetRange">
                Estimated budget range
                <RequiredMark />
                <select
                  {...fieldState("budgetRange")}
                  className={`${fieldClass} ${errors.budgetRange ? errorFieldClass : ""}`}
                  id="budgetRange"
                  name="budgetRange"
                  onChange={(event) => updateField("budgetRange", event.target.value)}
                  required
                  value={inquiry.budgetRange}
                >
                  <option value="">Select a range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
                <FieldError id="budgetRange-error" message={errors.budgetRange} />
              </label>
            </div>

            <fieldset
              aria-describedby="servicesNeeded-help"
              aria-errormessage={errors.servicesNeeded ? "servicesNeeded-error" : undefined}
              aria-invalid={errors.servicesNeeded ? true : undefined}
              className="border border-white/10 p-4"
            >
              <legend className="px-1 text-sm font-semibold text-slate-100">
                Services needed
                <RequiredMark />
              </legend>
              <p className="mt-1 text-xs leading-5 text-slate-400" id="servicesNeeded-help">
                Select every area that may apply. This does not lock scope; it helps route the first conversation.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {serviceOptions.map((service) => (
                  <label
                    className="flex min-h-11 items-start gap-3 border border-white/10 bg-slateInk/70 p-3 text-sm leading-5 text-slate-200"
                    key={service}
                  >
                    <input
                      checked={inquiry.servicesNeeded.includes(service)}
                      className="mt-1 h-4 w-4 accent-cyanGlow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyanGlow"
                      name="servicesNeeded"
                      onChange={() => toggleService(service)}
                      type="checkbox"
                      value={service}
                    />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
              <FieldError id="servicesNeeded-error" message={errors.servicesNeeded} />
            </fieldset>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100" htmlFor="timeline">
                Desired timeline
                <RequiredMark />
                <select
                  {...fieldState("timeline")}
                  className={`${fieldClass} ${errors.timeline ? errorFieldClass : ""}`}
                  id="timeline"
                  name="timeline"
                  onChange={(event) => updateField("timeline", event.target.value)}
                  required
                  value={inquiry.timeline}
                >
                  <option value="">Select a timeline</option>
                  {timelineOptions.map((timeline) => (
                    <option key={timeline} value={timeline}>
                      {timeline}
                    </option>
                  ))}
                </select>
                <FieldError id="timeline-error" message={errors.timeline} />
              </label>
              <label className="text-sm font-semibold text-slate-100" htmlFor="launchDate">
                Desired launch date
                <input
                  className={fieldClass}
                  id="launchDate"
                  name="launchDate"
                  onChange={(event) => updateField("launchDate", event.target.value)}
                  type="date"
                  value={inquiry.launchDate}
                />
              </label>
            </div>

            <label className="text-sm font-semibold text-slate-100" htmlFor="projectGoals">
              Project goals
              <RequiredMark />
              <textarea
                {...fieldState("projectGoals")}
                className={`${fieldClass} min-h-28 resize-y ${errors.projectGoals ? errorFieldClass : ""}`}
                id="projectGoals"
                name="projectGoals"
                onChange={(event) => updateField("projectGoals", event.target.value)}
                placeholder="What should this project help you launch, validate, sell, automate, or improve?"
                required
                value={inquiry.projectGoals}
              />
              <FieldError id="projectGoals-error" message={errors.projectGoals} />
            </label>

            <label className="text-sm font-semibold text-slate-100" htmlFor="requirements">
              Requirements
              <RequiredMark />
              <textarea
                {...fieldState("requirements")}
                className={`${fieldClass} min-h-28 resize-y ${errors.requirements ? errorFieldClass : ""}`}
                id="requirements"
                name="requirements"
                onChange={(event) => updateField("requirements", event.target.value)}
                placeholder="List the pages, screens, workflows, content sections, integrations, or constraints that matter for the first version."
                required
                value={inquiry.requirements}
              />
              <FieldError id="requirements-error" message={errors.requirements} />
            </label>

            <label className="text-sm font-semibold text-slate-100" htmlFor="challenges">
              Challenges
              <textarea
                className={`${fieldClass} min-h-24 resize-y`}
                id="challenges"
                name="challenges"
                onChange={(event) => updateField("challenges", event.target.value)}
                placeholder="What is unclear, blocked, manual, outdated, or risky about the current process?"
                value={inquiry.challenges}
              />
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-100" htmlFor="existingWebsite">
                Existing website
                <input
                  className={fieldClass}
                  id="existingWebsite"
                  name="existingWebsite"
                  onChange={(event) => updateField("existingWebsite", event.target.value)}
                  placeholder="https://example.com"
                  type="url"
                  value={inquiry.existingWebsite}
                />
              </label>
              <label className="text-sm font-semibold text-slate-100" htmlFor="referenceLink">
                Optional reference link
                <input
                  className={fieldClass}
                  id="referenceLink"
                  name="referenceLink"
                  onChange={(event) => updateField("referenceLink", event.target.value)}
                  placeholder="Inspiration, demo, doc, or competitor link"
                  type="url"
                  value={inquiry.referenceLink}
                />
              </label>
            </div>
          </div>
        </div>

        <aside className="min-w-0 border border-white/10 bg-white/[0.04] p-6 shadow-glow sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            Your inquiry summary
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-white">
            Review, then send from your email app.
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            The email is not sent until you review and send it from your own email app. If the email button does not open, copy the summary and send it manually.
          </p>
          <div className="mt-4 border border-amber-100/30 bg-amber-100/[0.06] p-4 text-sm leading-6 text-amber-50" id="inquiry-privacy-note">
            Most inquiries receive a first reply within 1-2 business days when enough project context is included. No backend submission occurs, no database receives this information, and no payment or account is created.
          </div>
          <p className="mt-4 text-sm font-semibold text-slate-200" role="status">
            {statusMessage}
          </p>
          <textarea
            aria-label="Generated project inquiry summary"
            className="mt-6 min-h-[320px] w-full min-w-0 resize-y whitespace-pre-wrap break-words border border-white/10 bg-slateInk/80 p-4 font-mono text-xs leading-5 text-slate-200 outline-none focus:border-cyan-300/70 sm:min-h-[420px]"
            readOnly
            value={summary}
          />
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <button
              className="focus-ring inline-flex min-h-11 items-center justify-center bg-cyanGlow px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift disabled:cursor-not-allowed disabled:opacity-70"
              disabled={formStatus === "loading"}
              type="submit"
            >
              {formStatus === "loading" ? "Preparing email" : "Open prefilled email"}
            </button>
            <button
              aria-describedby="copy-summary-status"
              className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
              onClick={copySummary}
              type="button"
            >
              {copyStatus}
            </button>
          </div>
          <p className="sr-only" id="copy-summary-status" role="status">
            {copyStatus === "Copied"
              ? "Inquiry summary copied to clipboard."
              : copyStatus === "Copy failed"
                ? "The inquiry summary could not be copied automatically. Select the text area and copy it manually."
                : copyStatus}
          </p>
          <div className="mt-5 border border-white/10 bg-slateInk/70 p-4 text-sm leading-6 text-slate-300">
            Secondary contact option: send the copied summary from your own email app to hello@clearstack.studio. This is the same mailto-based workflow, not a separate submission service.
          </div>
        </aside>
      </form>
    </section>
  );
}
