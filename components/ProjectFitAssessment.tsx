"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import type { ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

type ServiceSlug =
  | "product-mvp"
  | "storefront-mvp"
  | "ai-powered-tool"
  | "internal-workflow-dashboard"
  | "website-app-refresh";

type QuestionType = "single" | "multiple";

type Option = {
  label: string;
  scores: Partial<Record<ServiceSlug, number>>;
};

type Question = {
  id: string;
  prompt: string;
  type: QuestionType;
  options: Option[];
};

type Answers = Record<string, string[]>;

const serviceDetails: Record<
  ServiceSlug,
  {
    title: string;
    proof: string;
    overviewHref: string;
    caseStudyHref: string;
    inquiryLabel: string;
    why: string;
    scope: string[];
    later: string[];
    nextStep: string;
  }
> = {
  "product-mvp": {
    title: "Product MVP",
    proof: "CardScope",
    overviewHref: "/work/cardscope",
    caseStudyHref: "/work/cardscope/case-study",
    inquiryLabel: "Start a Product MVP inquiry",
    why: "Your answers emphasize a new software product, public users, validation, and a core user workflow.",
    scope: ["Landing page", "Core user journey", "Primary workflow", "Dashboard or structured interface", "Mock or approved data structure"],
    later: ["Accounts or login", "Database-backed records", "External APIs", "Advanced admin tools"],
    nextStep: "Use CardScope as the closest proof pattern, then define the smallest useful product workflow."
  },
  "storefront-mvp": {
    title: "Storefront MVP",
    proof: "ClearBloom Beauty",
    overviewHref: "/work/clearbloom-beauty",
    caseStudyHref: "/work/clearbloom-beauty/case-study",
    inquiryLabel: "Start a storefront inquiry",
    why: "Your answers point toward buyers, product presentation, catalog pages, and an inquiry or checkout-ready flow.",
    scope: ["Branded storefront", "Product catalog", "Product pages", "Inquiry or commerce-ready flow", "Customer-information and policy pages"],
    later: ["Payment processing", "Inventory systems", "Shipping and tax setup", "Email commerce automation"],
    nextStep: "Compare the ClearBloom Beauty proof project, then decide what product content is ready for the first storefront version."
  },
  "ai-powered-tool": {
    title: "AI-Powered Tool",
    proof: "AI Fashion Model",
    overviewHref: "/work/ai-fashion-model",
    caseStudyHref: "/work/ai-fashion-model/case-study",
    inquiryLabel: "Start an AI tool inquiry",
    why: "Your answers emphasize an AI-assisted experience, prompt or input flow, and a result interface.",
    scope: ["Input or prompt workflow", "Output/results interface", "Usage boundaries", "Prototype testing path", "Mock or approved API integration plan"],
    later: ["Production AI API connection", "Usage limits and monitoring", "Custom model training", "Sensitive-data review"],
    nextStep: "Review the AI Fashion Model prototype to shape a safe, useful AI-assisted first version."
  },
  "internal-workflow-dashboard": {
    title: "Internal Workflow Dashboard",
    proof: "MSW Application Review",
    overviewHref: "/work/msw-application-review",
    caseStudyHref: "/work/msw-application-review/case-study",
    inquiryLabel: "Start a dashboard inquiry",
    why: "Your answers emphasize internal users, record tracking, review status, operations, and reporting.",
    scope: ["Dashboard navigation", "Record/status views", "Filters and summaries", "Review or operational workflow", "Reporting or export planning"],
    later: ["Authentication", "Role-based permissions", "Production database", "Audit logs and external integrations"],
    nextStep: "View MSW Application Review to compare a public-safe internal workflow dashboard pattern."
  },
  "website-app-refresh": {
    title: "Website/App Refresh",
    proof: "ClearStack Studio",
    overviewHref: "/about",
    caseStudyHref: "/how-we-work",
    inquiryLabel: "Start a refresh inquiry",
    why: "Your answers point toward an existing website or app that needs clearer navigation, design, accessibility, performance, or conversion paths.",
    scope: ["Navigation and content cleanup", "Responsive UI improvements", "Conversion-path improvements", "Accessibility review", "Performance review"],
    later: ["New product workflows", "Accounts or login", "Database-backed features", "Major replatforming"],
    nextStep: "Review how ClearStack works, then identify the pages or flows that need the first improvement pass."
  }
};

const questions: Question[] = [
  {
    id: "create",
    prompt: "What are you trying to create?",
    type: "single",
    options: [
      { label: "A new software product", scores: { "product-mvp": 4 } },
      { label: "An online product storefront", scores: { "storefront-mvp": 4 } },
      { label: "An AI-assisted experience", scores: { "ai-powered-tool": 4 } },
      { label: "An internal team workflow", scores: { "internal-workflow-dashboard": 4 } },
      { label: "A refresh of an existing website or app", scores: { "website-app-refresh": 4 } },
      { label: "I am not sure yet", scores: { "product-mvp": 1, "storefront-mvp": 1, "ai-powered-tool": 1, "internal-workflow-dashboard": 1, "website-app-refresh": 1 } }
    ]
  },
  {
    id: "users",
    prompt: "Who will use it?",
    type: "single",
    options: [
      { label: "Public customers or users", scores: { "product-mvp": 3 } },
      { label: "Buyers or product shoppers", scores: { "storefront-mvp": 3 } },
      { label: "Internal staff or reviewers", scores: { "internal-workflow-dashboard": 3 } },
      { label: "Creators or marketing teams", scores: { "ai-powered-tool": 3, "website-app-refresh": 1 } },
      { label: "Existing website or app visitors", scores: { "website-app-refresh": 3 } },
      { label: "Mixed audience", scores: { "product-mvp": 1, "storefront-mvp": 1, "ai-powered-tool": 1, "internal-workflow-dashboard": 1, "website-app-refresh": 1 } }
    ]
  },
  {
    id: "outcome",
    prompt: "What is the main outcome?",
    type: "single",
    options: [
      { label: "Validate a product idea", scores: { "product-mvp": 4 } },
      { label: "Present or sell products", scores: { "storefront-mvp": 4 } },
      { label: "Automate or assist a task with AI", scores: { "ai-powered-tool": 4 } },
      { label: "Organize records, reviews, or operations", scores: { "internal-workflow-dashboard": 4 } },
      { label: "Improve clarity, design, or conversion", scores: { "website-app-refresh": 4 } },
      { label: "Explore possible directions", scores: { "product-mvp": 1, "ai-powered-tool": 1, "website-app-refresh": 1 } }
    ]
  },
  {
    id: "features",
    prompt: "Which features matter most?",
    type: "multiple",
    options: [
      { label: "User-facing workflow", scores: { "product-mvp": 3 } },
      { label: "Product catalog and product pages", scores: { "storefront-mvp": 3 } },
      { label: "AI prompt or input flow", scores: { "ai-powered-tool": 3 } },
      { label: "Dashboard and status tracking", scores: { "internal-workflow-dashboard": 3 } },
      { label: "Better navigation and page design", scores: { "website-app-refresh": 3 } },
      { label: "Reports or exports", scores: { "internal-workflow-dashboard": 2 } },
      { label: "Payments or checkout", scores: { "storefront-mvp": 2 } },
      { label: "Accounts or login", scores: { "product-mvp": 1, "internal-workflow-dashboard": 2 } },
      { label: "Database-backed records", scores: { "internal-workflow-dashboard": 2, "product-mvp": 1 } },
      { label: "Not sure yet", scores: { "product-mvp": 1, "storefront-mvp": 1, "ai-powered-tool": 1, "internal-workflow-dashboard": 1, "website-app-refresh": 1 } }
    ]
  },
  {
    id: "existing",
    prompt: "Do you already have a website or app?",
    type: "single",
    options: [
      { label: "No, this is a new build", scores: { "product-mvp": 2, "storefront-mvp": 2, "ai-powered-tool": 1 } },
      { label: "Yes, but it needs a refresh", scores: { "website-app-refresh": 4 } },
      { label: "Yes, and I want to add a new feature", scores: { "product-mvp": 2, "internal-workflow-dashboard": 1, "website-app-refresh": 1 } },
      { label: "I only have notes or mockups", scores: { "product-mvp": 2, "storefront-mvp": 1, "ai-powered-tool": 1 } },
      { label: "I am not sure", scores: { "website-app-refresh": 1, "product-mvp": 1 } }
    ]
  },
  {
    id: "definition",
    prompt: "How defined is the first version?",
    type: "single",
    options: [
      { label: "Very clear", scores: { "product-mvp": 1, "storefront-mvp": 1, "internal-workflow-dashboard": 1 } },
      { label: "Mostly clear", scores: { "product-mvp": 1, "storefront-mvp": 1, "website-app-refresh": 1 } },
      { label: "I know the goal but not the scope", scores: { "product-mvp": 1, "ai-powered-tool": 1, "internal-workflow-dashboard": 1 } },
      { label: "I need help choosing the first version", scores: { "website-app-refresh": 1, "product-mvp": 1 } }
    ]
  },
  {
    id: "next-step",
    prompt: "What is the likely next step after the first version?",
    type: "single",
    options: [
      { label: "Test with users", scores: { "product-mvp": 3 } },
      { label: "Add payments or commerce", scores: { "storefront-mvp": 3 } },
      { label: "Add accounts or authentication", scores: { "product-mvp": 1, "internal-workflow-dashboard": 2 } },
      { label: "Connect a database or API", scores: { "internal-workflow-dashboard": 2, "product-mvp": 1 } },
      { label: "Expand the workflow", scores: { "internal-workflow-dashboard": 2, "product-mvp": 1 } },
      { label: "Improve the current site", scores: { "website-app-refresh": 3 } },
      { label: "I am not sure", scores: { "product-mvp": 1, "website-app-refresh": 1 } }
    ]
  },
  {
    id: "timing",
    prompt: "How soon do you want to begin?",
    type: "single",
    options: [
      { label: "As soon as possible", scores: { "website-app-refresh": 1, "storefront-mvp": 1 } },
      { label: "Within 1 month", scores: { "product-mvp": 1, "storefront-mvp": 1 } },
      { label: "Within 2–3 months", scores: { "product-mvp": 1, "internal-workflow-dashboard": 1 } },
      { label: "Within 3–6 months", scores: { "ai-powered-tool": 1, "internal-workflow-dashboard": 1 } },
      { label: "Exploring options", scores: { "website-app-refresh": 1, "ai-powered-tool": 1 } }
    ]
  }
];

const emptyScores: Record<ServiceSlug, number> = {
  "product-mvp": 0,
  "storefront-mvp": 0,
  "ai-powered-tool": 0,
  "internal-workflow-dashboard": 0,
  "website-app-refresh": 0
};

export function ProjectFitAssessment() {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [error, setError] = useState("");
  const [showResults, setShowResults] = useState(false);
  const stepHeadingRef = useRef<HTMLHeadingElement>(null);
  const question = questions[currentIndex];
  const progressText = `Question ${currentIndex + 1} of ${questions.length}`;

  const rankedResults = useMemo(() => scoreAnswers(answers), [answers]);
  const primary = rankedResults[0];
  const secondary = rankedResults[1];
  const primaryDetails = serviceDetails[primary.slug];
  const secondaryDetails = serviceDetails[secondary.slug];

  useEffect(() => {
    stepHeadingRef.current?.focus();
  }, [currentIndex, showResults, hasStarted]);

  function startAssessment() {
    setHasStarted(true);
    setShowResults(false);
    setCurrentIndex(0);
    setError("");
    track("project_fit_started", { cta_location: "project_fit_hero" });
  }

  function updateAnswer(optionLabel: string) {
    setError("");
    setAnswers((current) => {
      if (question.type === "single") {
        return { ...current, [question.id]: [optionLabel] };
      }

      const selected = new Set(current[question.id] ?? []);
      if (selected.has(optionLabel)) {
        selected.delete(optionLabel);
      } else {
        selected.add(optionLabel);
      }

      return { ...current, [question.id]: Array.from(selected) };
    });
  }

  function goNext() {
    if (!answers[question.id]?.length) {
      setError("Choose at least one option before continuing.");
      return;
    }

    if (currentIndex === questions.length - 1) {
      setShowResults(true);
      track("project_fit_completed", { recommended_service_slug: primary.slug, cta_location: "project_fit_assessment" });
      track("project_fit_recommendation_viewed", { recommended_service_slug: primary.slug, cta_location: "project_fit_results" });
      return;
    }

    setCurrentIndex((index) => index + 1);
  }

  function goPrevious() {
    setError("");
    setCurrentIndex((index) => Math.max(0, index - 1));
  }

  function startOver() {
    setAnswers({});
    setCurrentIndex(0);
    setShowResults(false);
    setHasStarted(false);
    setError("");
  }

  return (
    <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8" id="assessment">
      <div className="mx-auto max-w-6xl">
        {!hasStarted ? (
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Static assessment</p>
              <h2 ref={stepHeadingRef} tabIndex={-1} className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                A guided service-fit check with no email required.
              </h2>
              <p className="mt-5 text-sm leading-6 text-slate-300 sm:text-base">
                This assessment runs in your browser only. It does not save answers to a server, send personal information, create an account, or require contact details.
              </p>
              <p className="mt-4 text-sm leading-6 text-amber-50">
                This assessment provides general project guidance only. Final service fit, scope, pricing, timeline, and technical approach are confirmed after project review.
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                Progress appears as Question 3 of 8 while you move through the steps, and the assessment can be reset with Start over at any time.
              </p>
              <button
                className="focus-ring mt-8 inline-flex min-h-11 items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
                onClick={startAssessment}
                type="button"
              >
                Start assessment
              </button>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {Object.entries(serviceDetails).map(([slug, service]) => (
                <article className="border border-white/10 bg-white/[0.04] p-5" key={slug}>
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">Proof project: {service.proof}</p>
                </article>
              ))}
            </div>
          </div>
        ) : showResults ? (
          <ResultsView
            primary={primary}
            primaryDetails={primaryDetails}
            secondary={secondary}
            secondaryDetails={secondaryDetails}
            startOver={startOver}
          />
        ) : (
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <aside className="border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyanGlow">Progress</p>
              <p aria-live="polite" className="mt-4 text-2xl font-semibold text-white">{progressText}</p>
              <div aria-hidden="true" className="mt-5 h-2 bg-slate-900">
                <div className="h-2 bg-cyanGlow" style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }} />
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-300">Questions are scored transparently toward the five ClearStack service paths. Multiple selections are allowed only where noted.</p>
            </aside>
            <form className="border border-white/10 bg-slateInk p-6 shadow-glow sm:p-8" onSubmit={(event) => event.preventDefault()}>
              <fieldset aria-describedby={error ? `${question.id}-error` : `${question.id}-hint`}>
                <legend>
                  <span className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">{progressText}</span>
                  <h2 ref={stepHeadingRef} tabIndex={-1} className="mt-3 text-3xl font-semibold tracking-tight text-white">
                    {question.prompt}
                  </h2>
                </legend>
                <p className="mt-4 text-sm leading-6 text-slate-400" id={`${question.id}-hint`}>
                  {question.type === "multiple" ? "Select every option that applies." : "Choose the closest option."}
                </p>
                {error ? (
                  <p className="mt-4 border border-amber-100/30 bg-amber-100/[0.06] p-3 text-sm font-semibold text-amber-50" id={`${question.id}-error`} role="alert">
                    {error}
                  </p>
                ) : null}
                <div className="mt-6 grid gap-3">
                  {question.options.map((option) => {
                    const selected = answers[question.id]?.includes(option.label) ?? false;
                    const inputId = `${question.id}-${option.label.toLowerCase().replaceAll(" ", "-").replaceAll("/", "-")}`;

                    return (
                      <label
                        className={`focus-within:ring-2 focus-within:ring-cyanGlow border p-4 text-sm font-semibold leading-6 transition ${selected ? "border-cyan-300/60 bg-cyan-300/[0.08] text-white" : "border-white/10 bg-white/[0.04] text-slate-200 hover:border-cyan-300/40"}`}
                        htmlFor={inputId}
                        key={option.label}
                      >
                        <input
                          checked={selected}
                          className="mr-3 accent-cyan-300"
                          id={inputId}
                          name={question.id}
                          onChange={() => updateAnswer(option.label)}
                          type={question.type === "multiple" ? "checkbox" : "radio"}
                        />
                        {option.label}
                      </label>
                    );
                  })}
                </div>
              </fieldset>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={currentIndex === 0}
                  onClick={goPrevious}
                  type="button"
                >
                  Previous
                </button>
                <button
                  className="focus-ring inline-flex min-h-11 items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
                  onClick={goNext}
                  type="button"
                >
                  {currentIndex === questions.length - 1 ? "See recommendation" : "Next"}
                </button>
                <button
                  className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50"
                  onClick={startOver}
                  type="button"
                >
                  Start over
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}

function scoreAnswers(answers: Answers) {
  const totals: Record<ServiceSlug, number> = { ...emptyScores };

  for (const question of questions) {
    const selectedLabels = answers[question.id] ?? [];
    for (const option of question.options) {
      if (!selectedLabels.includes(option.label)) {
        continue;
      }

      for (const [slug, score] of Object.entries(option.scores) as [ServiceSlug, number][]) {
        totals[slug] += score;
      }
    }
  }

  return (Object.entries(totals) as [ServiceSlug, number][])
    .map(([slug, score]) => ({ slug, score }))
    .sort((a, b) => b.score - a.score || serviceDetails[a.slug].title.localeCompare(serviceDetails[b.slug].title));
}

function ResultsView({
  primary,
  primaryDetails,
  secondary,
  secondaryDetails,
  startOver
}: {
  primary: { slug: ServiceSlug; score: number };
  primaryDetails: (typeof serviceDetails)[ServiceSlug];
  secondary: { slug: ServiceSlug; score: number };
  secondaryDetails: (typeof serviceDetails)[ServiceSlug];
  startOver: () => void;
}) {
  const confidence = primary.score - secondary.score >= 4 ? "High" : primary.score === secondary.score ? "Mixed" : "Moderate";

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr]">
      <article className="border border-cyan-300/30 bg-cyan-300/[0.06] p-6 shadow-glow sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Recommended service</p>
        <h2 tabIndex={-1} className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {primaryDetails.title}
        </h2>
        <p className="mt-5 text-sm leading-6 text-slate-300 sm:text-base">{primaryDetails.why}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ResultList title="Typical first-version scope" items={primaryDetails.scope} />
          <ResultList title="What may belong in a later phase" items={primaryDetails.later} />
        </div>
        <div className="mt-6 border border-white/10 bg-slateInk/70 p-5">
          <p className="text-sm font-semibold text-slate-100">Related proof project</p>
          <p className="mt-2 text-lg font-semibold text-white">{primaryDetails.proof}</p>
          <p className="mt-3 text-sm leading-6 text-slate-300">{primaryDetails.nextStep}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <ProjectFitTrackedLink
            className="focus-ring inline-flex min-h-11 items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
            ctaLocation="project_fit_results"
            href={primaryDetails.overviewHref}
            recommendedServiceSlug={primary.slug}
          >
            View {primaryDetails.proof}
          </ProjectFitTrackedLink>
          <ProjectFitTrackedLink
            className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50"
            ctaLocation="project_fit_results"
            href={primaryDetails.caseStudyHref}
            recommendedServiceSlug={primary.slug}
          >
            Read case study
          </ProjectFitTrackedLink>
          <ProjectFitTrackedLink
            className="focus-ring inline-flex min-h-11 items-center justify-center border border-emerald-300/40 px-5 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emeraldLift hover:text-slate-950"
            ctaLocation="project_fit_results"
            href="/start"
            recommendedServiceSlug={primary.slug}
          >
            {primaryDetails.inquiryLabel}
          </ProjectFitTrackedLink>
        </div>
      </article>

      <aside className="space-y-5">
        <div className="border border-white/10 bg-white/[0.04] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emeraldLift">Confidence note</p>
          <p className="mt-4 text-2xl font-semibold text-white">{confidence} fit</p>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            If answers are mixed, treat this as a starting recommendation, not a final scope decision.
          </p>
        </div>
        <div className="border border-white/10 bg-white/[0.04] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyanGlow">Secondary option</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">{secondaryDetails.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            This may also fit because your answers include signals for {secondaryDetails.proof} style work. Compare it if the first recommendation feels too narrow.
          </p>
        </div>
        <div className="border border-amber-100/20 bg-amber-100/[0.05] p-6 text-sm leading-6 text-amber-50">
          This assessment provides general project guidance only. Final service fit, scope, pricing, timeline, and technical approach are confirmed after project review.
        </div>
        <button
          className="focus-ring inline-flex min-h-11 w-full items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50"
          onClick={startOver}
          type="button"
        >
          Start over
        </button>
      </aside>
    </div>
  );
}

function ProjectFitTrackedLink({
  children,
  className,
  ctaLocation,
  href,
  recommendedServiceSlug
}: {
  children: ReactNode;
  className: string;
  ctaLocation: string;
  href: string;
  recommendedServiceSlug: ServiceSlug;
}) {
  return (
    <Link
      className={className}
      href={href}
      onClick={() => {
        track("project_fit_recommendation_viewed", {
          recommended_service_slug: recommendedServiceSlug,
          cta_location: ctaLocation
        });
      }}
    >
      {children}
    </Link>
  );
}

function ResultList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border border-white/10 bg-slateInk/70 p-5">
      <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
      <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-300">
        {items.map((item) => (
          <li className="border border-white/10 bg-white/[0.04] px-3 py-2" key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
