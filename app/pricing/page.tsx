import type { Metadata } from "next";
import type { ReactNode } from "react";
import { TrackedLink } from "@/components/TrackedLink";
import { createSeoMetadata, socialImages } from "@/lib/seo";
import { cardScopeLiveUrl, clearBloomLiveUrl, mswApplicationReviewDemoUrl } from "@/lib/siteLinks";

export const metadata: Metadata = createSeoMetadata({
  title: "Pricing Guidance | ClearStack Studio",
  description:
    "Learn how ClearStack Studio scopes and prices product MVPs, storefronts, AI-powered tools, internal dashboards, and website or app refreshes.",
  path: "/pricing",
  image: socialImages.default,
  imageAlt: "ClearStack Studio pricing guidance social preview for scoped MVP, storefront, AI, dashboard, and refresh projects."
});

const services = [
  {
    title: "Product MVP",
    bestFor: "Founders or teams validating a software product idea.",
    scope: [
      "Landing page",
      "Core user journey",
      "Primary workflow",
      "Dashboard or structured interface",
      "Mock or approved data structure",
      "Responsive implementation",
      "Deployment-ready build"
    ],
    proof: "CardScope",
    overviewHref: "/work/cardscope",
    caseStudyHref: "/work/cardscope/case-study",
    serviceHref: "/services",
    liveHref: cardScopeLiveUrl,
    slug: "cardscope"
  },
  {
    title: "Storefront MVP",
    bestFor: "Small businesses, creators, and product brands.",
    scope: [
      "Branded storefront",
      "Product catalog",
      "Product pages",
      "Inquiry or commerce-ready flow",
      "Policies and customer-information pages",
      "Responsive implementation",
      "Deployment-ready build"
    ],
    proof: "ClearBloom Beauty",
    overviewHref: "/work/clearbloom-beauty",
    caseStudyHref: "/work/clearbloom-beauty/case-study",
    serviceHref: "/services#storefront-mvp",
    liveHref: clearBloomLiveUrl,
    slug: "clearbloom-beauty"
  },
  {
    title: "AI-Powered Tool",
    bestFor: "Creators, teams, or businesses exploring an AI-assisted workflow.",
    scope: [
      "Input or prompt workflow",
      "Output/results interface",
      "Usage boundaries",
      "Prototype testing path",
      "Mock or approved API integration plan",
      "Responsive interface"
    ],
    proof: "AI Fashion Model",
    overviewHref: "/work/ai-fashion-model",
    caseStudyHref: "/work/ai-fashion-model/case-study",
    serviceHref: "/services",
    slug: "ai-fashion-model"
  },
  {
    title: "Internal Workflow Dashboard",
    bestFor: "Teams replacing spreadsheets, email chains, or manual review workflows.",
    scope: [
      "Dashboard navigation",
      "Record/status views",
      "Filters and summaries",
      "Review or operational workflow",
      "Mock or approved data structure",
      "Reporting or export planning"
    ],
    proof: "MSW Application Review",
    overviewHref: "/work/msw-application-review",
    caseStudyHref: "/work/msw-application-review/case-study",
    serviceHref: "/services",
    liveHref: mswApplicationReviewDemoUrl,
    slug: "msw-application-review"
  },
  {
    title: "Website/App Refresh",
    bestFor: "Organizations improving an existing digital experience.",
    scope: [
      "Navigation and content cleanup",
      "Responsive UI improvements",
      "Conversion-path improvements",
      "Accessibility review",
      "Performance review",
      "Deployment and handoff"
    ],
    proof: "ClearStack Studio",
    overviewHref: "/work",
    caseStudyHref: "/about",
    serviceHref: "/services",
    slug: "clearstack-studio"
  }
];

const costFactors = [
  "Number of pages",
  "Number of workflows",
  "User roles",
  "Authentication",
  "Database requirements",
  "Payment processing",
  "External APIs",
  "AI model or API usage",
  "File uploads",
  "Reporting and exports",
  "Admin tools",
  "Content readiness",
  "Design complexity",
  "Accessibility requirements",
  "Timeline urgency",
  "Deployment complexity",
  "Post-launch support"
];

const separateCosts = [
  "Domain registration",
  "Hosting",
  "Database services",
  "Authentication providers",
  "Payment processors",
  "Email providers",
  "AI APIs",
  "Analytics tools",
  "Storage",
  "Third-party software subscriptions",
  "Premium fonts, images, or licensed assets"
];

const usuallyIncluded = [
  "Project planning",
  "Interface implementation",
  "Responsive layout",
  "Core pages and workflows",
  "Reusable components",
  "Source-code handoff",
  "Deployment setup",
  "Lint and production build checks",
  "Basic documentation",
  "Agreed revision rounds",
  "Launch-readiness review"
];

const notAutomatic = [
  "Unlimited revisions",
  "Unlimited pages",
  "Unlimited support",
  "Ongoing content updates",
  "Payments",
  "Authentication",
  "Databases",
  "External APIs",
  "Mobile apps",
  "Custom AI model training",
  "Legal or compliance review",
  "Third-party subscription fees"
];

const phases = [
  "Discovery and clarification",
  "Scope proposal",
  "Written approval",
  "Build",
  "Review",
  "Testing",
  "Launch",
  "Handoff"
];

const pricingFaqs = [
  {
    question: "Do you offer fixed-price projects?",
    answer: "Fixed pricing may be available when scope and requirements are sufficiently clear."
  },
  {
    question: "Do you charge hourly?",
    answer: "The engagement model is confirmed during scope review. ClearStack does not assume a billing model before the requirements are understood."
  },
  {
    question: "Is a deposit required?",
    answer: "Payment schedules are confirmed in the written agreement. No deposit percentage is assumed on this guidance page."
  },
  {
    question: "Are hosting and domain fees included?",
    answer: "Only when explicitly included in scope. Otherwise, domain, hosting, and vendor charges are separate."
  },
  {
    question: "Can I start small and add features later?",
    answer: "Yes. A phased build is often the best way to manage scope and risk."
  },
  {
    question: "Does submitting an inquiry lock me into a price?",
    answer: "No. An inquiry is not a quote or contract."
  }
];

export default function PricingPage() {
  return (
    <main className="bg-slateInk">
      <section className="relative isolate overflow-hidden bg-slateInk">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_16%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_84%_2%,rgba(52,211,153,0.12),transparent_28%)]"
        />
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            ClearStack Studio · Pricing guidance
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Clear pricing starts with clear scope.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            ClearStack Studio prices projects according to the first useful version, required workflows, technical complexity, integrations, timeline, and launch needs.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              className="focus-ring inline-flex min-h-11 items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              ctaLocation="pricing_hero"
              eventLabel="pricing_hero_start_project"
              eventName="pricing_start_project_click"
              href="/start"
            >
              Start a project
            </TrackedLink>
            <TrackedLink
              className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyanGlow hover:text-white"
              ctaLocation="pricing_hero"
              eventLabel="pricing_hero_view_services"
              eventName="pricing_service_click"
              href="/services"
            >
              View services
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="bg-[#081827] py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Pricing approach</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Guidance first, written scope before pricing is final.
            </h2>
          </div>
          <div className="space-y-4 text-sm leading-7 text-slate-300 sm:text-base">
            <p>ClearStack scopes the smallest useful first version before estimating the work.</p>
            <p>Pricing depends on deliverables, complexity, technical requirements, integrations, timeline, and launch needs.</p>
            <p>Starting ranges are planning guidance, not binding estimates. Final pricing is confirmed after project review, and future phases can be scoped separately.</p>
          </div>
        </div>
      </section>

      <section className="bg-slateInk py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Service guidance cards</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Starting scope is confirmed after discovery.
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <article className="flex h-full flex-col border border-white/10 bg-white/[0.04] p-6 shadow-glow/20" key={service.title}>
                <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.16em]">
                  <span className="border border-cyan-300/40 px-2 py-1 text-cyan-100">{service.title}</span>
                  <span className="border border-emerald-300/40 px-2 py-1 text-emerald-100">Starting scope: Confirmed after discovery</span>
                </div>
                <p className="mt-5 text-sm font-semibold text-slate-100">Best for</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{service.bestFor}</p>
                <p className="mt-5 text-sm font-semibold text-slate-100">Typical first-version scope</p>
                <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-300 sm:grid-cols-2">
                  {service.scope.map((item) => (
                    <li className="border border-white/10 bg-slateInk/70 px-3 py-2" key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-6 text-slate-300">
                  <span className="font-semibold text-slate-100">Related proof project:</span> {service.proof}
                </p>
                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  <TrackedLink
                    className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
                    ctaLocation="pricing_service_card"
                    eventLabel={`pricing_${service.slug}_service`}
                    eventName="pricing_service_click"
                    href={service.serviceHref}
                    projectSlug={service.slug}
                    serviceCategory={service.title}
                  >
                    View relevant service for {service.title}
                  </TrackedLink>
                  <TrackedLink
                    className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
                    ctaLocation="pricing_service_card"
                    eventLabel={`pricing_${service.slug}_overview`}
                    eventName="pricing_project_click"
                    href={service.overviewHref}
                    projectSlug={service.slug}
                    serviceCategory={service.title}
                  >
                    View {service.proof} overview
                  </TrackedLink>
                  <TrackedLink
                    className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
                    ctaLocation="pricing_service_card"
                    eventLabel={`pricing_${service.slug}_case_study`}
                    eventName="pricing_project_click"
                    href={service.caseStudyHref}
                    projectSlug={service.slug}
                    serviceCategory={service.title}
                  >
                    View {service.proof} case study
                  </TrackedLink>
                  <TrackedLink
                    className="focus-ring inline-flex min-h-11 items-center justify-center bg-cyanGlow px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
                    ctaLocation="pricing_service_card"
                    eventLabel={`pricing_${service.slug}_start`}
                    eventName="pricing_start_project_click"
                    href="/start"
                    projectSlug={service.slug}
                    serviceCategory={service.title}
                  >
                    Start a {service.title} inquiry
                  </TrackedLink>
                  {service.liveHref ? (
                    <TrackedLink
                      className="focus-ring inline-flex min-h-11 items-center justify-center border border-emerald-300/40 px-4 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emeraldLift hover:text-slate-950"
                      ctaLocation="pricing_service_card"
                      eventLabel={`pricing_${service.slug}_live_demo`}
                      eventName="pricing_project_click"
                      href={service.liveHref}
                      projectSlug={service.slug}
                      serviceCategory={service.title}
                    >
                      View {service.proof} live demo
                    </TrackedLink>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081827] py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-2 lg:px-8">
          <InfoList title="What affects project cost" items={costFactors} />
          <InfoList title="What may cost extra" items={separateCosts}>
            <p className="mt-5 text-sm leading-6 text-amber-50">
              Third-party providers control their own pricing, limits, availability, and policies.
            </p>
          </InfoList>
          <InfoList title="What is usually included" items={usuallyIncluded}>
            <p className="mt-5 text-sm leading-6 text-slate-300">
              Exact inclusions depend on the approved scope.
            </p>
          </InfoList>
          <InfoList title="What is not automatically included" items={notAutomatic} />
        </div>
      </section>

      <section className="bg-slateInk py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Example project paths</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Proof projects show how service categories translate into first-version builds.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <article className="border border-white/10 bg-white/[0.04] p-5" key={service.proof}>
                <h3 className="text-xl font-semibold text-white">{service.proof}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">Service: {service.title}</p>
                <div className="mt-5 grid gap-2">
                  <TrackedLink className="focus-ring text-sm font-semibold text-cyan-100 underline decoration-cyan-300/40 underline-offset-4" ctaLocation="pricing_examples" eventLabel={`pricing_example_${service.slug}_overview`} eventName="pricing_project_click" href={service.overviewHref} projectSlug={service.slug}>Project overview</TrackedLink>
                  <TrackedLink className="focus-ring text-sm font-semibold text-cyan-100 underline decoration-cyan-300/40 underline-offset-4" ctaLocation="pricing_examples" eventLabel={`pricing_example_${service.slug}_case_study`} eventName="pricing_project_click" href={service.caseStudyHref} projectSlug={service.slug}>Case study</TrackedLink>
                  <TrackedLink className="focus-ring text-sm font-semibold text-cyan-100 underline decoration-cyan-300/40 underline-offset-4" ctaLocation="pricing_examples" eventLabel={`pricing_example_${service.slug}_service`} eventName="pricing_service_click" href={service.serviceHref} serviceCategory={service.title}>Relevant service</TrackedLink>
                  <TrackedLink className="focus-ring text-sm font-semibold text-cyan-100 underline decoration-cyan-300/40 underline-offset-4" ctaLocation="pricing_examples" eventLabel={`pricing_example_${service.slug}_start`} eventName="pricing_start_project_click" href="/start" serviceCategory={service.title}>Start Project page</TrackedLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081827] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Engagement phases</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Scope and written approval come before development.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {phases.map((phase, index) => (
              <article className="border border-white/10 bg-slateInk p-5" key={phase}>
                <p className="text-sm font-semibold text-cyanGlow">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{phase}</h3>
              </article>
            ))}
          </div>
          <p className="mt-8 border border-amber-100/20 bg-amber-100/[0.05] p-5 text-sm leading-6 text-amber-50">
            No development begins until scope, deliverables, timeline, and payment terms are confirmed in writing.
          </p>
        </div>
      </section>

      <section className="bg-slateInk py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Pricing FAQ</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Common pricing questions before scope review.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {pricingFaqs.map((faq) => (
              <article className="border border-white/10 bg-white/[0.04] p-5" key={faq.question}>
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl border border-cyan-300/20 bg-cyan-300/[0.06] p-8 text-center shadow-glow sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Next step</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to define the first useful version?
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackedLink
              className="focus-ring inline-flex min-h-11 items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              ctaLocation="pricing_final_cta"
              eventLabel="pricing_final_start_project"
              eventName="pricing_start_project_click"
              href="/start"
            >
              Start a project
            </TrackedLink>
            <TrackedLink
              className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
              ctaLocation="pricing_final_cta"
              eventLabel="pricing_final_view_projects"
              eventName="pricing_project_click"
              href="/projects"
            >
              View proof projects
            </TrackedLink>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoList({ title, items, children }: { title: string; items: string[]; children?: ReactNode }) {
  return (
    <article className="border border-white/10 bg-white/[0.04] p-6 sm:p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
      <ul className="mt-6 grid gap-2 text-sm leading-6 text-slate-300 sm:grid-cols-2">
        {items.map((item) => (
          <li className="border border-white/10 bg-slateInk/70 px-3 py-2" key={item}>{item}</li>
        ))}
      </ul>
      {children}
    </article>
  );
}
