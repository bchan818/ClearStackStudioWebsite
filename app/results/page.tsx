import type { Metadata } from "next";
import { TrackedLink } from "@/components/TrackedLink";
import { createSeoMetadata, socialImages } from "@/lib/seo";
import { cardScopeLiveUrl, clearBloomLiveUrl, mswApplicationReviewDemoUrl } from "@/lib/siteLinks";

export const metadata: Metadata = createSeoMetadata({
  title: "Results & Outcomes | ClearStack Studio",
  description:
    "See what ClearStack Studio proof projects demonstrate across product MVPs, storefronts, AI prototypes, internal dashboards, and website refreshes.",
  path: "/results",
  image: socialImages.default,
  imageAlt: "ClearStack Studio results and outcomes social preview."
});

const frameworkItems = [
  "Problem addressed",
  "First-version goal",
  "What was built",
  "What it proves",
  "Client value",
  "Future expansion path"
];

const outcomes = [
  {
    project: "CardScope",
    slug: "cardscope",
    category: "Product MVP",
    problem:
      "Collectors and sellers need a clearer way to search cards, track collections, monitor value changes, and plan seller workflows.",
    goal:
      "Create a focused product prototype that demonstrates search, collection tracking, Pro positioning, watchlists, and seller tools.",
    built: [
      "Product landing page",
      "Card search experience",
      "Collection dashboard",
      "Watchlist",
      "Pro feature preview",
      "Seller tools preview",
      "Pricing",
      "Guided demo",
      "Roadmap",
      "Early access flow"
    ],
    proves: [
      "Product MVP architecture",
      "Dashboard and workflow design",
      "Freemium/Pro positioning",
      "Product roadmap planning",
      "Launch-ready software prototype presentation"
    ],
    comparable: [
      "Product discovery",
      "Core workflow",
      "Dashboard",
      "Mock or approved data structure",
      "Pricing or plan comparison",
      "Deployment-ready MVP",
      "Roadmap for accounts, APIs, payments, or mobile"
    ],
    future: [
      "Real pricing API",
      "Authentication",
      "Database-backed collections",
      "Payments",
      "Scanner/camera",
      "Mobile app"
    ],
    clientValue:
      "Shows how a product idea can become a clear MVP story with a core workflow, upgrade path, and launch-ready presentation.",
    coreOutcome: "Launch-ready product MVP proof with dashboard and Pro-positioning path.",
    liveStatus: "Live MVP confirmed",
    nextPhase: "Real data, accounts, payments, scanner/camera, and mobile expansion.",
    overviewHref: "/work/cardscope",
    caseStudyHref: "/work/cardscope/case-study",
    liveHref: cardScopeLiveUrl
  },
  {
    project: "ClearBloom Beauty",
    slug: "clearbloom-beauty",
    category: "Storefront MVP",
    problem:
      "A product brand needs a polished storefront experience before investing in full commerce infrastructure.",
    goal:
      "Create a premium beauty storefront with product discovery, branding, product detail pages, inquiry checkout, and customer-information pages.",
    built: [
      "Branded homepage",
      "Product catalog",
      "Product pages",
      "Inquiry bag",
      "Inquiry checkout",
      "Success page",
      "Policies",
      "Brand story",
      "Contact flow"
    ],
    proves: [
      "Storefront MVP design",
      "Product information architecture",
      "Brand-led interface design",
      "Inquiry-based pre-commerce workflows",
      "Future commerce upgrade planning"
    ],
    comparable: [
      "Storefront design",
      "Product catalog",
      "Product pages",
      "Inquiry flow",
      "Policies and customer information",
      "Responsive implementation",
      "Deployment",
      "Future Shopify or Stripe roadmap"
    ],
    future: ["Real payments", "Inventory", "Shipping", "Taxes", "Customer accounts", "Order management"],
    clientValue:
      "Shows how a brand can validate product presentation and buyer interest before full payment, inventory, shipping, or tax systems are scoped.",
    coreOutcome: "Premium storefront MVP with product discovery and inquiry-based pre-commerce flow.",
    liveStatus: "Live storefront demo confirmed",
    nextPhase: "Payments, inventory, shipping, taxes, accounts, and order management.",
    overviewHref: "/work/clearbloom-beauty",
    caseStudyHref: "/work/clearbloom-beauty/case-study",
    liveHref: clearBloomLiveUrl
  },
  {
    project: "AI Fashion Model",
    slug: "ai-fashion-model",
    category: "AI-Assisted Prototype",
    problem:
      "Creators and product teams need a clear way to explore AI-assisted visual concepts before committing to a production AI workflow.",
    goal:
      "Demonstrate how a creative brief or prompt could move through an AI-assisted concept workflow.",
    built: [
      "Project positioning",
      "Visual concept framework",
      "Prompt workflow",
      "Use-case presentation",
      "Prototype roadmap",
      "Case study"
    ],
    proves: [
      "AI workflow concepting",
      "Input/output interface planning",
      "Visual prototype communication",
      "Creator and retail use-case framing",
      "Safe prototype positioning"
    ],
    comparable: [
      "AI use-case clarification",
      "Prompt/input flow",
      "Results presentation",
      "Usage boundaries",
      "Prototype evaluation",
      "Future API plan"
    ],
    future: ["AI API integration", "Saved sessions", "User accounts", "Asset generation workflow", "Export tools", "Team collaboration"],
    clientValue:
      "Shows how an AI concept can be explained, bounded, and tested as a prototype before production API usage or model operations are introduced.",
    coreOutcome: "AI-assisted concept prototype with prompt-flow and safe use-case framing.",
    liveStatus: "Case-study prototype; no live external demo claimed",
    nextPhase: "AI API integration, saved sessions, user accounts, export tools, and team workflows.",
    overviewHref: "/work/ai-fashion-model",
    caseStudyHref: "/work/ai-fashion-model/case-study"
  },
  {
    project: "MSW Application Review",
    slug: "msw-application-review",
    category: "Internal Workflow Dashboard",
    problem:
      "Application and review processes can become scattered across spreadsheets, emails, notes, and disconnected records.",
    goal:
      "Create a structured mock-data dashboard for applicant tracking, reviewer assignments, reviews, reports, and administrative workflows.",
    built: [
      "Dashboard",
      "Applicant queue",
      "Applicant detail",
      "Review workflow",
      "Reviewer area",
      "Assignments",
      "Reports",
      "Settings",
      "Guided demo",
      "Demo safety page"
    ],
    proves: [
      "Internal dashboard design",
      "Workflow organization",
      "Review and status interfaces",
      "Reporting",
      "Role-based flow planning",
      "Privacy-conscious public demo practices"
    ],
    comparable: [
      "Workflow mapping",
      "Dashboard",
      "Record/status views",
      "Review or approval flow",
      "Reporting",
      "Mock or approved data structure",
      "Deployment-ready prototype"
    ],
    future: ["Secure authentication", "Database", "Role permissions", "Audit history", "File uploads", "Notifications", "Production exports"],
    clientValue:
      "Shows how a sensitive internal process can be translated into a public-safe demo and clear workflow prototype without exposing real records.",
    coreOutcome: "Mock-data internal dashboard with applicant, review, assignment, and reporting flows.",
    liveStatus: "Live mock-data dashboard demo confirmed",
    nextPhase: "Secure auth, database, permissions, audit history, uploads, notifications, and exports.",
    overviewHref: "/work/msw-application-review",
    caseStudyHref: "/work/msw-application-review/case-study",
    liveHref: mswApplicationReviewDemoUrl,
    safetyNote:
      "The public demo uses fictional mock data only. No private applicant or student records are included."
  },
  {
    project: "ClearStack Studio",
    slug: "clearstack-studio",
    category: "Website/App Refresh",
    problem:
      "A studio website needs clear positioning, services, proof projects, inquiry paths, trust content, analytics, metadata, and launch readiness.",
    goal:
      "Create a stronger public-facing studio site that connects services, proof projects, client education, inquiry, and conversion paths.",
    built: [
      "Homepage",
      "Services",
      "Work",
      "Projects",
      "Pricing guidance",
      "About",
      "How We Work",
      "FAQ",
      "Project Fit Assessment",
      "Start Project workflow",
      "Analytics",
      "Route/link tests",
      "SEO and metadata",
      "QA and launch-readiness pages"
    ],
    proves: [
      "Website/app refresh strategy",
      "Information architecture",
      "Conversion-focused content",
      "Responsive UI",
      "Analytics and QA integration",
      "Launch-ready public website"
    ],
    comparable: [
      "Site audit",
      "Messaging and navigation cleanup",
      "Responsive redesign",
      "Conversion paths",
      "Metadata",
      "Accessibility improvements",
      "Deployment",
      "Handoff"
    ],
    future: ["CMS", "Real inquiry backend", "CRM integration", "Custom domain", "Client portal", "Ongoing analytics and optimization"],
    clientValue:
      "Shows how a public website can become a stronger service, proof, education, and inquiry engine without requiring backend complexity first.",
    coreOutcome: "Conversion-focused studio website with service education, proof paths, analytics, QA, and launch readiness.",
    liveStatus: "Current public studio site",
    nextPhase: "CMS, inquiry backend, CRM integration, custom domain, client portal, and analytics optimization.",
    overviewHref: "/about",
    caseStudyHref: "/how-we-work"
  }
];

const commonOutcomes = [
  "Clearer product scope",
  "Stronger user journey",
  "Responsive interface",
  "Working prototype",
  "Launch-ready deployment",
  "Source-code handoff",
  "Future roadmap",
  "Honest demo boundaries"
];

const notGuaranteed = [
  "ClearStack does not guarantee revenue",
  "ClearStack does not guarantee user adoption",
  "ClearStack does not guarantee search rankings",
  "ClearStack does not guarantee fundraising",
  "ClearStack does not guarantee third-party platform approval",
  "Business outcomes depend on market, execution, audience, and other factors beyond the build itself"
];

export default function ResultsPage() {
  return (
    <main className="bg-slateInk">
      <section className="relative isolate overflow-hidden bg-slateInk">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_16%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_84%_2%,rgba(52,211,153,0.12),transparent_28%)]"
        />
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            Results & Outcomes
          </p>
          <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Proof projects that show what a focused first version can accomplish.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Each ClearStack Studio proof project demonstrates a specific product, storefront, AI, workflow, or website outcome—and how a similar engagement could be scoped for a real client.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              className="focus-ring inline-flex min-h-11 items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              ctaLocation="results_hero"
              eventLabel="results_hero_view_projects"
              eventName="results_project_click"
              href="/projects"
            >
              View proof projects
            </TrackedLink>
            <TrackedLink
              className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyanGlow hover:text-white"
              ctaLocation="results_hero"
              eventLabel="results_hero_start_project"
              eventName="results_start_project_click"
              href="/start"
            >
              Start a project
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="bg-[#081827] py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Results framework</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Evaluate each proof by the outcome it makes visible.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {frameworkItems.map((item) => (
              <div className="border border-white/10 bg-white/[0.04] p-4 text-sm font-semibold text-slate-200" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {outcomes.map((outcome, index) => (
        <section className={index % 2 === 0 ? "bg-slateInk py-16 sm:py-20" : "bg-[#081827] py-16 sm:py-20"} key={outcome.project}>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">{outcome.category}</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{outcome.project}</h2>
                <p className="mt-5 text-sm leading-6 text-slate-300"><span className="font-semibold text-slate-100">Problem:</span> {outcome.problem}</p>
                <p className="mt-4 text-sm leading-6 text-slate-300"><span className="font-semibold text-slate-100">First-version goal:</span> {outcome.goal}</p>
                <p className="mt-4 text-sm leading-6 text-slate-300"><span className="font-semibold text-slate-100">Client value:</span> {outcome.clientValue}</p>
                {outcome.safetyNote ? (
                  <p className="mt-5 border border-emerald-300/25 bg-emerald-300/[0.06] p-4 text-sm leading-6 text-emerald-50">{outcome.safetyNote}</p>
                ) : null}
                <div className="mt-6 flex flex-wrap gap-3">
                  <TrackedLink
                    className="focus-ring inline-flex min-h-11 items-center justify-center bg-cyanGlow px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
                    ctaLocation="results_project_section"
                    eventLabel={`results_${outcome.slug}_overview`}
                    eventName="results_project_click"
                    href={outcome.overviewHref}
                    projectSlug={outcome.slug}
                  >
                    View {outcome.project} overview
                  </TrackedLink>
                  <TrackedLink
                    className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50"
                    ctaLocation="results_project_section"
                    eventLabel={`results_${outcome.slug}_case_study`}
                    eventName="results_project_click"
                    href={outcome.caseStudyHref}
                    projectSlug={outcome.slug}
                  >
                    View {outcome.project} case study
                  </TrackedLink>
                  {outcome.liveHref ? (
                    <TrackedLink
                      className="focus-ring inline-flex min-h-11 items-center justify-center border border-emerald-300/40 px-4 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emeraldLift hover:text-slate-950"
                      ctaLocation="results_project_section"
                      eventLabel={`results_${outcome.slug}_live_demo`}
                      eventName="results_project_click"
                      href={outcome.liveHref}
                      projectSlug={outcome.slug}
                    >
                      View live demo
                    </TrackedLink>
                  ) : null}
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <OutcomeList title="What was built" items={outcome.built} />
                <OutcomeList title="What it proves" items={outcome.proves} />
                <OutcomeList title="Comparable client engagement" items={outcome.comparable} />
                <OutcomeList title="Future phase examples" items={outcome.future} />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-[#081827] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Outcome comparison</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Compare the business problem, service fit, and next logical phase.
          </h2>
          <div className="mt-10 grid gap-4">
            {outcomes.map((outcome) => (
              <article className="grid gap-4 border border-white/10 bg-white/[0.04] p-5 md:grid-cols-2 xl:grid-cols-[0.7fr_1.2fr_0.8fr_1fr_0.8fr_1fr]" key={outcome.project}>
                <CompareCell label="Project" value={outcome.project} />
                <CompareCell label="Client problem" value={outcome.problem} />
                <CompareCell label="Service type" value={outcome.category} />
                <CompareCell label="Core outcome" value={outcome.coreOutcome} />
                <CompareCell label="Live demo status" value={outcome.liveStatus} />
                <CompareCell label="Next logical phase" value={outcome.nextPhase} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slateInk py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Common client outcomes</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Recurring outcomes across focused first versions.
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {commonOutcomes.map((outcome) => (
                <div className="border border-white/10 bg-white/[0.04] p-4 text-sm font-semibold text-slate-200" key={outcome}>{outcome}</div>
              ))}
            </div>
          </div>
          <div className="border border-amber-100/20 bg-amber-100/[0.05] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-100">What results are not guaranteed</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">The build can create stronger proof, not guaranteed market results.</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-amber-50">
              {notGuaranteed.map((item) => (
                <li className="border border-amber-100/15 bg-slateInk/70 px-3 py-2" key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl border border-cyan-300/20 bg-cyan-300/[0.06] p-8 text-center shadow-glow sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Next step</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Which outcome are you trying to create?
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackedLink
              className="focus-ring inline-flex min-h-11 items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              ctaLocation="results_final_cta"
              eventLabel="results_final_project_fit"
              eventName="results_project_fit_click"
              href="/project-fit"
            >
              Take the Project Fit Assessment
            </TrackedLink>
            <TrackedLink
              className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
              ctaLocation="results_final_cta"
              eventLabel="results_final_start_project"
              eventName="results_start_project_click"
              href="/start"
            >
              Start a project
            </TrackedLink>
          </div>
        </div>
      </section>
    </main>
  );
}

function OutcomeList({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="border border-white/10 bg-white/[0.04] p-5">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-300">
        {items.map((item) => (
          <li className="border border-white/10 bg-slateInk/70 px-3 py-2" key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function CompareCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{label}</p>
      <p className="mt-2 break-words text-sm leading-6 text-slate-200">{value}</p>
    </div>
  );
}
