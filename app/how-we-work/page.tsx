import type { Metadata } from "next";
import Link from "next/link";
import { TrackedLink } from "@/components/TrackedLink";
import { createSeoMetadata, socialImages } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "How We Work | ClearStack Studio",
  description:
    "Learn how ClearStack Studio scopes, designs, builds, tests, launches, and hands off focused MVPs, storefronts, dashboards, AI prototypes, and website refreshes.",
  path: "/how-we-work",
  image: socialImages.default,
  imageAlt: "ClearStack Studio How We Work social preview for a focused project process."
});

const engagementInputs = [
  "Project goals",
  "Intended users",
  "Must-have features",
  "Timeline",
  "Technical requirements",
  "Approved scope",
  "Available budget"
];

const stages = [
  {
    title: "Clarify",
    items: [
      "Define the problem or opportunity",
      "Identify the target users",
      "Review existing materials",
      "Identify the desired outcome"
    ]
  },
  {
    title: "Scope",
    items: [
      "Define the smallest useful first version",
      "Separate must-have features from future ideas",
      "Confirm deliverables, exclusions, timeline, and dependencies",
      "Identify third-party services or technical risks"
    ]
  },
  {
    title: "Design",
    items: [
      "Establish page structure and user flow",
      "Create interface direction",
      "Review mobile and desktop behavior",
      "Confirm the core experience before implementation expands"
    ]
  },
  {
    title: "Build",
    items: [
      "Develop the approved pages and workflows",
      "Reuse maintainable components",
      "Keep implementation aligned with the approved scope",
      "Document major technical decisions where useful"
    ]
  },
  {
    title: "Review",
    items: [
      "Share progress at agreed checkpoints",
      "Collect organized feedback",
      "Clarify whether requests are fixes, agreed revisions, new scope, or future enhancements",
      "Avoid fragmented feedback across multiple channels"
    ]
  },
  {
    title: "Test",
    items: [
      "Run lint and production build checks",
      "Verify key routes and links",
      "Review responsive layouts",
      "Check keyboard navigation and accessibility basics",
      "Confirm honest demo and prototype labels"
    ]
  },
  {
    title: "Launch",
    items: [
      "Confirm deployment settings",
      "Verify the production URL",
      "Check major calls to action",
      "Review metadata and social sharing basics",
      "Document known limitations and deferred features"
    ]
  },
  {
    title: "Handoff",
    items: [
      "Provide source-code access",
      "Confirm deployment access",
      "Deliver basic documentation",
      "Explain maintenance and next-step recommendations",
      "Confirm any agreed post-launch support period"
    ]
  }
];

const clientResponsibilities = [
  "Provide timely project information",
  "Identify one primary decision-maker where possible",
  "Review deliverables within agreed review windows",
  "Consolidate feedback",
  "Supply approved copy, images, brand assets, and legal language when required",
  "Maintain ownership and payment for third-party services unless otherwise agreed",
  "Avoid sending passwords or sensitive credentials through public forms"
];

const clearstackResponsibilities = [
  "Build according to the approved scope",
  "Communicate material blockers",
  "Use accurate prototype and demo language",
  "Test the agreed core experience",
  "Maintain reasonable code clarity",
  "Provide agreed documentation and handoff",
  "Identify requests that may affect scope, timeline, or cost"
];

const feedbackTypes = [
  {
    title: "Bug or defect",
    text: "Something agreed or built is not working as intended. These are reviewed against the approved scope and expected behavior."
  },
  {
    title: "Agreed revision",
    text: "A change that fits the approved revision scope, such as copy, layout, content, or flow refinements already allowed by the agreement."
  },
  {
    title: "Scope change",
    text: "A new requirement that changes features, integrations, pages, workflow depth, timeline, or cost. This may require approval before work continues."
  },
  {
    title: "Future enhancement",
    text: "A useful idea that belongs on the roadmap after the first version is launched or accepted."
  }
];

const faqItems = [
  {
    question: "When does development begin?",
    answer: "Development begins after discovery and scope review confirm the approved first version, key deliverables, responsibilities, and launch path."
  },
  {
    question: "How is scope confirmed?",
    answer: "Scope is confirmed in writing through the project agreement, proposal, statement of work, or approved project brief."
  },
  {
    question: "How should feedback be submitted?",
    answer: "Feedback should be consolidated through the agreed communication channel, grouped by page or feature, and submitted during the agreed review window."
  },
  {
    question: "What happens when a new feature is requested?",
    answer: "New features are reviewed as possible scope changes or future enhancements. They may affect timeline, cost, or launch priority."
  },
  {
    question: "Who manages hosting and third-party accounts?",
    answer: "Client ownership of production accounts is preferred where practical. Domains, hosting, payment tools, databases, AI APIs, email, and other services may have separate vendor costs."
  },
  {
    question: "What happens after launch?",
    answer: "Post-launch support depends on the engagement. Larger maintenance, monitoring, content updates, or new features may require a separate support arrangement."
  },
  {
    question: "Can the project grow later?",
    answer: "Yes. A focused first version can later expand into payments, accounts, databases, APIs, automations, mobile apps, or deeper workflows when those additions are scoped."
  },
  {
    question: "Is an inquiry a contract?",
    answer: "No. An inquiry starts a conversation and is not a contract, estimate approval, payment authorization, or launch commitment."
  }
];

const serviceAreas = [
  "Product MVP",
  "Storefront MVP",
  "AI-Powered Tool",
  "Internal Workflow Dashboard",
  "Website/App Refresh"
];

export default function HowWeWorkPage() {
  return (
    <main className="bg-slateInk">
      <section className="relative isolate overflow-hidden bg-slateInk">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_82%_4%,rgba(52,211,153,0.12),transparent_28%)]"
        />
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            ClearStack Studio · From idea to app.
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            A clear path from idea to launch.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            ClearStack Studio uses a focused build process to define the right first version, keep scope understandable, test the core experience, and prepare the project for launch and handoff.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              className="focus-ring inline-flex min-h-11 items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              ctaLocation="how_we_work_hero"
              eventLabel="how_we_work_hero_start_project"
              eventName="how_we_work_start_click"
              href="/start"
            >
              Start a project
            </TrackedLink>
            <TrackedLink
              className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyanGlow hover:text-white"
              ctaLocation="how_we_work_hero"
              eventLabel="how_we_work_hero_view_services"
              eventName="how_we_work_services_click"
              href="/services"
            >
              View services
            </TrackedLink>
            <Link
              className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyanGlow hover:text-white"
              href="/faq"
            >
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#081827] py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Engagement overview</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Every project starts by defining what matters most.
            </h2>
            <p className="mt-5 text-sm leading-6 text-slate-300">
              The exact process and deliverables depend on the written project agreement.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {engagementInputs.map((item) => (
              <div className="border border-white/10 bg-slateInk p-4 text-sm font-medium text-slate-200" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slateInk py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Project stages</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            The typical path from early idea to handoff.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {stages.map((stage, index) => (
              <article className="border border-white/10 bg-white/[0.04] p-6 shadow-glow/20" key={stage.title}>
                <p className="text-sm font-semibold text-cyanGlow">Stage {index + 1}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{stage.title}</h3>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                  {stage.items.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-emeraldLift" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081827] py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-2 lg:px-8">
          <article className="border border-cyan-300/20 bg-cyan-300/[0.05] p-6 sm:p-8">
            <h2 className="text-3xl font-semibold tracking-tight text-white">Client responsibilities</h2>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
              {clientResponsibilities.map((item) => (
                <li className="flex gap-3" key={item}>
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-cyanGlow" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="border border-emerald-300/20 bg-emerald-300/[0.05] p-6 sm:p-8">
            <h2 className="text-3xl font-semibold tracking-tight text-white">ClearStack responsibilities</h2>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
              {clearstackResponsibilities.map((item) => (
                <li className="flex gap-3" key={item}>
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-emeraldLift" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-slateInk py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Communication expectations</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Clear communication keeps the project moving.
              </h2>
            </div>
            <div className="space-y-4 text-sm leading-7 text-slate-300 sm:text-base">
              <p>The primary communication channel is agreed before work begins, and status updates occur at agreed milestones or intervals.</p>
              <p>Decisions and approvals should be documented so the project does not depend on scattered messages or assumptions.</p>
              <p>Urgent requests may affect timeline or scope, and delayed feedback may shift target dates.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#081827] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Feedback and revision boundaries</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Not every request is the same kind of change.
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-300">
            Revision rounds depend on the approved scope. New features may require a change request. Consolidated feedback reduces delays, and final approval is required before launch when applicable.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {feedbackTypes.map((type) => (
              <article className="border border-white/10 bg-slateInk p-5" key={type.title}>
                <h3 className="text-lg font-semibold text-white">{type.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{type.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slateInk py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-3 lg:px-8">
          <article className="border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-semibold text-white">Timeline expectations</h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Timelines depend on scope, complexity, feedback speed, dependencies, and third-party services. Estimated dates are confirmed after discovery and scope review.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Delays in content, access, approvals, or decisions may affect the schedule. ClearStack does not publish unsupported fixed-duration guarantees.
            </p>
          </article>
          <article className="border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-semibold text-white">Third-party services and costs</h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Domains, hosting, databases, email providers, payment processors, AI APIs, authentication services, and other subscriptions may have separate fees.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Third-party pricing and policies can change. The project scope should identify required services, and client ownership of production accounts is preferred where practical.
            </p>
          </article>
          <article className="border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-semibold text-white">Launch and post-launch support</h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Launch follows agreed readiness checks, and known limitations should be documented before or during handoff.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Post-launch support depends on the engagement. Ongoing maintenance, monitoring, feature development, and content updates may require a separate support arrangement.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[#081827] py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Privacy and sensitive information</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Keep sensitive access out of public forms.
            </h2>
          </div>
          <div className="space-y-4 text-sm leading-7 text-slate-300 sm:text-base">
            <p>Do not submit passwords, API keys, payment information, protected student records, medical data, or confidential documents through public forms.</p>
            <p>Sensitive access should be transferred through an approved secure channel.</p>
            <p>Public demos use mock or fictional data unless clearly stated otherwise.</p>
          </div>
        </div>
      </section>

      <section className="bg-slateInk py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Frequently asked process questions</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Common questions before a project begins.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqItems.map((item) => (
              <article className="border border-white/10 bg-white/[0.04] p-5" key={item.question}>
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081827] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="border border-cyan-300/20 bg-cyan-300/[0.05] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Service fit</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              The same process adapts to the approved service area.
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {serviceAreas.map((service) => (
                <span className="border border-white/10 bg-slateInk px-3 py-2 text-sm font-semibold text-slate-100" key={service}>
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slateInk px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl border border-emerald-300/20 bg-emerald-300/[0.06] p-8 text-center shadow-glow sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Next step</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to define the first useful version?
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackedLink
              className="focus-ring inline-flex min-h-11 items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              ctaLocation="how_we_work_final_cta"
              eventLabel="how_we_work_final_start_project"
              eventName="how_we_work_start_click"
              href="/start"
            >
              Start a project
            </TrackedLink>
            <TrackedLink
              className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
              ctaLocation="how_we_work_final_cta"
              eventLabel="how_we_work_final_see_projects"
              eventName="how_we_work_projects_click"
              href="/projects"
            >
              See what ClearStack builds
            </TrackedLink>
          </div>
        </div>
      </section>
    </main>
  );
}
