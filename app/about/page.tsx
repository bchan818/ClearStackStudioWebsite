import type { Metadata } from "next";
import Link from "next/link";
import { TrackedLink } from "@/components/TrackedLink";
import { createSeoMetadata, socialImages } from "@/lib/seo";
import { cardScopeLiveUrl, clearBloomLiveUrl, mswApplicationReviewDemoUrl } from "@/lib/siteLinks";

export const metadata: Metadata = createSeoMetadata({
  title: "About ClearStack Studio | From idea to app",
  description:
    "Learn how ClearStack Studio builds focused MVPs, storefronts, AI-powered prototypes, internal dashboards, and website or app refreshes.",
  path: "/about",
  image: socialImages.default,
  imageAlt: "ClearStack Studio about page social preview for focused digital product builds."
});

const audiences = [
  {
    title: "Founders validating a software idea",
    text: "Turn the core product workflow into a usable MVP that can be shared, tested, and improved."
  },
  {
    title: "Small businesses launching a storefront",
    text: "Present products, brand positioning, policies, and inquiry paths before full commerce is scoped."
  },
  {
    title: "Teams replacing spreadsheets or manual workflows",
    text: "Move repeated review, status, assignment, or reporting work into a clearer dashboard experience."
  },
  {
    title: "Creators exploring AI-assisted products",
    text: "Shape a creative or operational AI concept into an honest prototype with clear demo boundaries."
  },
  {
    title: "Organizations improving an existing website or app",
    text: "Refresh structure, content, responsiveness, accessibility basics, and conversion paths without unnecessary rebuilds."
  }
];

const services = [
  {
    title: "Product MVP",
    what: "A focused first version of a software product or workflow.",
    fit: "Founders and small teams validating a product idea.",
    outcome: "Core journey, responsive interface, launchable proof, and roadmap for the next version.",
    proof: "CardScope",
    category: "Product MVP"
  },
  {
    title: "Storefront MVP",
    what: "A polished product-brand surface with catalog, product pages, and inquiry paths.",
    fit: "Small businesses, boutiques, beauty, wellness, lifestyle, and creator brands.",
    outcome: "Storefront demo, product storytelling, policy pages, and clear commerce upgrade path.",
    proof: "ClearBloom Beauty",
    category: "Storefront MVP"
  },
  {
    title: "AI-Powered Tool",
    what: "A practical prototype for testing an AI-assisted workflow before production integrations.",
    fit: "Creators, operators, and teams exploring AI-assisted content, review, or ideation tools.",
    outcome: "Prompt/input flow, output presentation, prototype boundaries, and future API plan.",
    proof: "AI Fashion Model",
    category: "AI-Powered Tool"
  },
  {
    title: "Internal Workflow Dashboard",
    what: "A structured interface for operational status, review queues, assignments, and reporting.",
    fit: "Teams replacing spreadsheets, inbox tracking, or manual review processes.",
    outcome: "Dashboard views, workflow states, mock or approved data structure, and launch checks.",
    proof: "MSW Application Review",
    category: "Internal Dashboard"
  },
  {
    title: "Website/App Refresh",
    what: "A focused improvement pass for an existing digital experience.",
    fit: "Organizations that need clearer navigation, stronger content, better responsiveness, or cleaner launch readiness.",
    outcome: "Updated structure, responsive UI polish, conversion-path improvements, and handoff guidance.",
    proof: "ClearStack Studio",
    category: "Website/App Refresh"
  }
];

const processSteps = [
  { title: "Clarify", text: "Define the goal, audience, constraints, proof point, and first useful version." },
  { title: "Scope", text: "Confirm included pages, features, boundaries, deliverables, timeline, and revision expectations before development." },
  { title: "Design", text: "Shape the interface, content structure, user journey, and responsive layout direction." },
  { title: "Build", text: "Develop the agreed first version without assuming advanced features that were not scoped." },
  { title: "Test", text: "Check lint, build, responsive layout, links, accessibility basics, and launch-critical flows." },
  { title: "Launch", text: "Deploy the approved build and verify the public routes, CTAs, metadata, and demo boundaries." },
  { title: "Handoff", text: "Provide source-code and practical guidance for operating, reviewing, or extending the delivered scope." },
  { title: "Improve", text: "Use feedback and the roadmap to decide when payments, accounts, databases, APIs, automation, or mobile apps make sense." }
];

const principles = [
  "Start with the smallest useful version",
  "Keep scope understandable",
  "Use honest prototype and demo labels",
  "Design for mobile and desktop",
  "Preserve accessibility basics",
  "Test before deployment",
  "Provide source-code and handoff guidance",
  "Plan a practical roadmap for future growth"
];

const proofProjects = [
  {
    name: "CardScope",
    category: "Software MVP",
    status: "Live MVP / Pro prototype",
    description: "A card discovery, collection tracking, watchlist, and seller-tools prototype for collectors and sellers.",
    proves: "Focused product MVP scoping, product workflows, dashboard-style screens, and future Pro planning.",
    liveHref: cardScopeLiveUrl,
    caseStudyHref: "/work/cardscope/case-study",
    slug: "cardscope"
  },
  {
    name: "ClearBloom Beauty",
    category: "Storefront MVP",
    status: "Storefront MVP demo",
    description: "A premium beauty storefront prototype with catalog, product detail pages, brand content, and inquiry checkout.",
    proves: "Storefront positioning, responsive product discovery, inquiry-based checkout, and honest commerce boundaries.",
    liveHref: clearBloomLiveUrl,
    caseStudyHref: "/work/clearbloom-beauty/case-study",
    slug: "clearbloom-beauty"
  },
  {
    name: "AI Fashion Model",
    category: "AI-Assisted Prototype",
    status: "AI-assisted prototype",
    description: "A creative prototype exploring AI-assisted fashion concepts, visualization, and product ideation workflows.",
    proves: "How AI-assisted ideas can be packaged into a clear public prototype before production integrations are added.",
    liveHref: undefined,
    caseStudyHref: "/work/ai-fashion-model/case-study",
    slug: "ai-fashion-model"
  },
  {
    name: "MSW Application Review",
    category: "Internal Dashboard Demo",
    status: "Live mock-data dashboard demo",
    description: "A public-safe mock dashboard for applicant tracking, reviewer workflows, assignments, and reporting.",
    proves: "Privacy-safe dashboard storytelling, operational workflows, status views, and mock-data boundaries for sensitive systems.",
    liveHref: mswApplicationReviewDemoUrl,
    caseStudyHref: "/work/msw-application-review/case-study",
    slug: "msw-application-review"
  }
];

const clientReceives = [
  "Defined first-version scope",
  "Responsive implementation",
  "Working source code",
  "Deployment setup",
  "Testing and launch checks",
  "Basic documentation",
  "Handoff guidance",
  "Agreed revision scope",
  "Future roadmap recommendations"
];

const boundaries = [
  "Payments are not included unless scoped.",
  "Authentication is not included unless scoped.",
  "Database and API work are not included unless scoped.",
  "Third-party subscription and hosting costs are separate unless stated.",
  "Prototype data may be fictional or static.",
  "An inquiry is not a contract.",
  "Sensitive credentials should never be submitted through public forms."
];

export default function AboutPage() {
  return (
    <main className="bg-slateInk">
      <section className="relative isolate overflow-hidden bg-slateInk">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_15%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_82%_0%,rgba(52,211,153,0.12),transparent_28%)]"
        />
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            ClearStack Studio · From idea to app.
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Focused digital products, built from idea to launch.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            ClearStack Studio helps turn early concepts, manual workflows, storefront ideas, and existing digital experiences into clear, functional first versions.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              className="focus-ring inline-flex min-h-11 items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              ctaLocation="about_hero"
              eventLabel="about_hero_start_project"
              eventName="about_start_project_click"
              href="/start"
            >
              Start a project
            </TrackedLink>
            <TrackedLink
              className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyanGlow hover:text-white"
              ctaLocation="about_hero"
              eventLabel="about_hero_view_projects"
              eventName="about_view_projects_click"
              href="/projects"
            >
              View proof projects
            </TrackedLink>
            <Link
              className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyanGlow hover:text-white"
              href="/how-we-work"
            >
              See how we work
            </Link>
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Studio positioning</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              What ClearStack Studio does
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-7 text-slate-300 sm:text-base">
            <p>
              ClearStack focuses on useful first versions: the core product, storefront, dashboard, AI-assisted workflow, or refreshed experience that can be understood, tested, and shared.
            </p>
            <p>
              Projects are scoped around the core experience rather than unnecessary complexity. Each build should be understandable, responsive, testable, and ready to share.
            </p>
            <p>
              When appropriate, a first version can later expand into payments, accounts, databases, APIs, automation, or mobile applications. Those advanced features are planned and scoped only when they are needed.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slateInk py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Who ClearStack helps</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Practical outcomes for early-stage ideas and operational workflows.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {audiences.map((audience) => (
              <article className="border border-white/10 bg-white/[0.04] p-5" key={audience.title}>
                <h3 className="text-lg font-semibold text-white">{audience.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{audience.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081827] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">What ClearStack builds</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Service areas with proof-project examples.
              </h2>
            </div>
            <TrackedLink
              className="focus-ring inline-flex min-h-11 items-center justify-center border border-cyan-300/40 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyanGlow hover:text-slate-950"
              ctaLocation="about_services_section"
              eventLabel="about_services_overview"
              eventName="about_service_click"
              href="/services"
            >
              Explore all services
            </TrackedLink>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {services.map((service) => (
              <article className="flex h-full flex-col border border-white/10 bg-slateInk p-5 shadow-glow/20" key={service.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyanGlow">{service.category}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300"><span className="font-semibold text-slate-100">What it is:</span> {service.what}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300"><span className="font-semibold text-slate-100">Best fit:</span> {service.fit}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300"><span className="font-semibold text-slate-100">First-version outcome:</span> {service.outcome}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-emeraldLift">Related proof: {service.proof}</p>
                <TrackedLink
                  className="focus-ring mt-auto inline-flex min-h-11 items-center justify-center border border-white/15 px-4 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
                  ctaLocation="about_service_card"
                  eventLabel={`about_${service.title.toLowerCase().replace(/[^a-z0-9]+/g, "_")}`}
                  eventName="about_service_click"
                  href="/services"
                  serviceCategory={service.title}
                >
                  View service details
                </TrackedLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slateInk py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">How ClearStack works</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Clarify, scope, design, build, test, launch, handoff, and improve.
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-300">
            Scope is confirmed before development. Advanced features are added only when needed. Launch readiness includes lint, build, responsive layout, link checks, and deployment verification. Final deliverables depend on the written project scope.
          </p>
          <Link
            className="focus-ring mt-6 inline-flex min-h-11 items-center justify-center border border-cyan-300/40 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyanGlow hover:text-slate-950"
            href="/how-we-work"
          >
            Read the full How We Work process
          </Link>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article className="border border-white/10 bg-white/[0.04] p-5" key={step.title}>
                <p className="text-sm font-semibold text-cyanGlow">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081827] py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Build principles</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              How ClearStack approaches a build
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {principles.map((principle) => (
              <div className="border border-white/10 bg-slateInk p-4 text-sm font-medium text-slate-200" key={principle}>
                {principle}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slateInk py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Proof projects</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Public proof projects that show the current ClearStack service areas.
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {proofProjects.map((project) => (
              <article className="flex h-full flex-col border border-white/10 bg-white/[0.04] p-6 shadow-glow/20" key={project.name}>
                <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.16em]">
                  <span className="border border-cyan-300/40 px-2 py-1 text-cyan-100">{project.category}</span>
                  <span className="border border-emerald-300/40 px-2 py-1 text-emerald-100">Status: {project.status}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">{project.name}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{project.description}</p>
                <p className="mt-5 text-sm font-semibold text-slate-100">What it proves</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{project.proves}</p>
                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  {project.liveHref ? (
                    <TrackedLink
                      className="focus-ring inline-flex min-h-11 items-center justify-center bg-cyanGlow px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
                      ctaLocation="about_proof_project"
                      eventLabel={`about_${project.slug}_live_demo`}
                      eventName="live_demo_click"
                      href={project.liveHref}
                      projectSlug={project.slug}
                      projectType={project.category}
                    >
                      View {project.name} live demo
                    </TrackedLink>
                  ) : null}
                  <TrackedLink
                    className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-5 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
                    ctaLocation="about_proof_project"
                    eventLabel={`about_${project.slug}_case_study`}
                    eventName="case_study_click"
                    href={project.caseStudyHref}
                    projectSlug={project.slug}
                    projectType={project.category}
                  >
                    Read {project.name} case study
                  </TrackedLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081827] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">What clients receive</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A delivery package matched to the approved scope.
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-300">
            Exact deliverables depend on the approved scope, but ClearStack keeps the handoff practical and clear.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {clientReceives.map((item) => (
              <div className="border border-white/10 bg-slateInk p-4 text-sm font-medium text-slate-200" key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slateInk py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Transparent boundaries</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            What ClearStack does not assume
          </h2>
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {boundaries.map((boundary) => (
              <div className="border border-amber-100/20 bg-amber-100/[0.05] p-4 text-sm leading-6 text-amber-50" key={boundary}>{boundary}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl border border-cyan-300/20 bg-cyan-300/[0.06] p-8 text-center shadow-glow sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Ready when you are</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Have an idea that needs a clear first version?
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackedLink
              className="focus-ring inline-flex min-h-11 items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              ctaLocation="about_final_cta"
              eventLabel="about_final_start_project"
              eventName="about_start_project_click"
              href="/start"
            >
              Start a project
            </TrackedLink>
            <TrackedLink
              className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
              ctaLocation="about_final_cta"
              eventLabel="about_final_explore_services"
              eventName="about_service_click"
              href="/services"
            >
              Explore services
            </TrackedLink>
          </div>
        </div>
      </section>
    </main>
  );
}
