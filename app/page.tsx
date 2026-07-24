import Link from "next/link";
import { TrackedLink } from "@/components/TrackedLink";
import { cardScopeLiveUrl, clearBloomLiveUrl, mswApplicationReviewDemoUrl } from "@/lib/siteLinks";

const audiences = [
  "Founders testing a product idea",
  "Small businesses launching a storefront",
  "Teams replacing manual workflows",
  "Creators exploring AI-assisted tools",
  "Organizations improving an existing website or app"
];

const services = [
  {
    name: "Product MVP",
    outcome: "Turn a product idea into a focused first version people can try, understand, and respond to.",
    bestFit: "Founders and small teams validating a new workflow or product concept.",
    proof: "CardScope",
    href: "/start",
    cta: "Start an MVP project"
  },
  {
    name: "Storefront MVP",
    outcome: "Present products through a polished catalog, product pages, policy content, and inquiry flow before full commerce is connected.",
    bestFit: "Beauty, wellness, boutique, product, lifestyle, and creator merchandise brands.",
    proof: "ClearBloom Beauty",
    href: "/services#storefront-mvp",
    cta: "View storefront service"
  },
  {
    name: "AI-Powered Tool",
    outcome: "Prototype an AI-assisted workflow with a clear interface, useful outputs, and honest demo boundaries.",
    bestFit: "Creators, operators, and teams exploring AI-assisted content, review, or decision workflows.",
    proof: "AI Fashion Model",
    href: "/services",
    cta: "Explore AI tools"
  },
  {
    name: "Internal Workflow Dashboard",
    outcome: "Replace manual tracking with a structured dashboard for status, review queues, and operational decisions.",
    bestFit: "Teams managing repeatable internal workflows, reviews, requests, or approvals.",
    proof: "MSW Application Review",
    href: "/services",
    cta: "Explore dashboards"
  },
  {
    name: "Website/App Refresh",
    outcome: "Modernize structure, copy, layout, responsiveness, and launch readiness without rebuilding more than needed.",
    bestFit: "Organizations with an existing site or app that needs clearer navigation, stronger conversion, and better polish.",
    proof: "ClearStack Studio",
    href: "/start",
    cta: "Start a refresh"
  }
];

const proofProjects = [
  {
    name: "CardScope",
    category: "Product MVP",
    status: "Live MVP",
    description: "A card search and collection tracking MVP built to validate core product workflows and future Pro concepts.",
    proves: "Focused MVP scoping, usable product screens, mock pricing workflows, and a practical growth roadmap.",
    relatedService: "Product MVP",
    liveHref: cardScopeLiveUrl,
    caseStudyHref: "/work/cardscope/case-study",
    slug: "cardscope"
  },
  {
    name: "ClearBloom Beauty",
    category: "Storefront MVP",
    status: "Live storefront demo",
    description: "A premium perfume and cosmetics storefront proof with catalog pages, product detail pages, policy pages, and inquiry checkout.",
    proves: "Storefront positioning, product storytelling, responsive catalog design, and honest no-payment MVP boundaries.",
    relatedService: "Storefront MVP",
    liveHref: clearBloomLiveUrl,
    caseStudyHref: "/work/clearbloom-beauty/case-study",
    slug: "clearbloom-beauty"
  },
  {
    name: "AI Fashion Model",
    category: "AI-Powered Tool",
    status: "AI-assisted prototype",
    description: "A creative prototype for AI-assisted fashion concepts, visual ideation, and creator workflow exploration.",
    proves: "How an AI concept can be packaged into a clear, public-safe prototype before complex automation is added.",
    relatedService: "AI-Powered Tool",
    liveHref: "/work/ai-fashion-model",
    caseStudyHref: "/work/ai-fashion-model/case-study",
    slug: "ai-fashion-model"
  },
  {
    name: "MSW Application Review",
    category: "Internal Workflow Dashboard",
    status: "Live mock-data dashboard demo",
    description: "A public-safe mock-data dashboard demo for application review workflows, queues, assignments, and reporting previews.",
    proves: "Privacy-safe dashboard storytelling, operational status views, admin-style workflows, and demo boundaries for sensitive systems.",
    relatedService: "Internal Workflow Dashboard",
    liveHref: mswApplicationReviewDemoUrl,
    caseStudyHref: "/work/msw-application-review/case-study",
    slug: "msw-application-review"
  }
];

const whyClearStack = [
  "Focused first versions",
  "Clear scope",
  "Honest demo boundaries",
  "Responsive design",
  "Launch-ready builds",
  "Source-code handoff",
  "Practical roadmap for future growth"
];

const processSteps = [
  { name: "Clarify", text: "Define the goal, audience, proof point, and smallest useful first version." },
  { name: "Scope", text: "Turn the idea into clear pages, features, boundaries, and launch priorities." },
  { name: "Build", text: "Design and develop a responsive product, storefront, dashboard, or refresh." },
  { name: "Test", text: "Check flows, links, mobile behavior, metadata, accessibility basics, and deployment readiness." },
  { name: "Launch", text: "Publish the build with honest demo boundaries and next-step guidance." },
  { name: "Improve", text: "Use feedback and the roadmap to decide what deserves the next iteration." }
];

const clientReceives = [
  "Working responsive build",
  "Source code",
  "Deployment setup",
  "Documentation",
  "Testing and launch checks",
  "Handoff guidance",
  "Agreed revision scope"
];

export default function Home() {
  return (
    <main className="bg-slateInk">
      <section className="relative isolate overflow-hidden bg-slateInk">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(52,211,153,0.12),transparent_28%)]"
        />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[1fr_0.85fr] lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
              ClearStack Studio
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              From idea to app.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              ClearStack Studio builds focused MVPs, storefronts, AI-powered prototypes, internal dashboards, and modern website or app refreshes.
            </p>
            <p className="mt-5 max-w-2xl border-l border-cyan-300/50 pl-4 text-sm leading-6 text-cyan-100">
              Strategy, interface design, development, testing, deployment, and handoff in one focused build process.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
                ctaLocation="homepage_hero"
                eventLabel="homepage_hero_start_project"
                eventName="start_project_click"
                href="/start"
              >
                Start a project
              </TrackedLink>
              <Link
                className="focus-ring inline-flex items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyanGlow hover:text-white"
                href="/projects"
              >
                View proof projects
              </Link>
            </div>
          </div>

          <div className="border border-white/10 bg-white/[0.04] p-5 shadow-glow sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Build focus
            </p>
            <div className="mt-6 grid gap-4">
              {["MVP software", "Storefront demos", "AI prototypes", "Workflow dashboards", "Website/app refreshes"].map((item, index) => (
                <div className="flex items-center gap-4 border border-white/10 bg-slateInk/70 p-4" key={item}>
                  <span className="grid h-9 w-9 shrink-0 place-items-center bg-cyan-300/10 text-sm font-semibold text-cyanGlow">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#081827] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            Who ClearStack helps
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Practical builds for people who need a clearer first version.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {audiences.map((audience) => (
              <article className="border border-white/10 bg-slateInk p-5 text-sm leading-6 text-slate-300" key={audience}>
                {audience}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slateInk py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Services overview</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Five focused ways to move from idea to usable product.</h2>
            </div>
            <Link className="focus-ring inline-flex w-fit items-center justify-center border border-cyan-300/40 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyanGlow hover:text-slate-950" href="/services">
              View all services
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {services.map((service) => (
              <article className="flex h-full flex-col border border-white/10 bg-white/[0.04] p-5 shadow-glow/20" key={service.name}>
                <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{service.outcome}</p>
                <p className="mt-5 text-sm font-semibold text-slate-100">Best fit</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{service.bestFit}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-emeraldLift">Proof: {service.proof}</p>
                <Link className="focus-ring mt-auto inline-flex items-center justify-center border border-white/15 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white" href={service.href}>
                  {service.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081827] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Proof projects</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Live and public-safe demos that show the type of work ClearStack builds.</h2>
            <p className="mt-5 text-base leading-7 text-slate-300">Each proof project is positioned honestly: what is live, what is mocked, and what kind of client service it demonstrates.</p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {proofProjects.map((project) => (
              <article className="flex h-full flex-col border border-white/10 bg-slateInk p-6 shadow-glow" key={project.name}>
                <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.16em]">
                  <span className="border border-cyan-300/40 px-2 py-1 text-cyan-100">{project.category}</span>
                  <span className="border border-emerald-300/40 px-2 py-1 text-emerald-100">Status: {project.status}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">{project.name}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{project.description}</p>
                <p className="mt-5 text-sm font-semibold text-slate-100">What it proves</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{project.proves}</p>
                <p className="mt-5 text-sm text-emerald-100">Related service: {project.relatedService}</p>
                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  <TrackedLink
                    className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
                    ctaLocation="homepage_proof_project"
                    eventLabel={`homepage_${project.slug}_live_demo`}
                    eventName={project.liveHref.startsWith("http") ? "live_demo_click" : "case_study_click"}
                    href={project.liveHref}
                    projectSlug={project.slug}
                    projectType={project.category}
                  >
                    View {project.name} demo
                  </TrackedLink>
                  <TrackedLink
                    className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
                    ctaLocation="homepage_proof_project"
                    eventLabel={`homepage_${project.slug}_case_study`}
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

      <section className="bg-slateInk py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Why ClearStack</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">A focused build process with honest boundaries.</h2>
            <p className="mt-5 text-sm leading-6 text-slate-300">ClearStack Studio helps shape the first version clearly instead of overbuilding before the core idea is proven.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {whyClearStack.map((item) => (
              <div className="border border-white/10 bg-white/[0.04] p-4 text-sm font-medium text-slate-200" key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081827] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Process</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">Clarify, scope, build, test, launch, and improve.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <article className="border border-white/10 bg-slateInk p-5" key={step.name}>
                <p className="text-sm font-semibold text-cyanGlow">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{step.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slateInk py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">What clients receive</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">A practical delivery package, not just a set of screens.</h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {clientReceives.map((item) => (
              <div className="border border-white/10 bg-white/[0.04] p-4 text-sm font-medium text-slate-200" key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl border border-cyan-300/20 bg-cyan-300/[0.06] p-8 text-center shadow-glow sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Ready when you are</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">Start with the smallest version that proves the idea.</h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackedLink
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              ctaLocation="homepage_final_cta"
              eventLabel="homepage_final_start_project"
              eventName="start_project_click"
              href="/start"
            >
              Start a project
            </TrackedLink>
            <Link className="focus-ring inline-flex items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white" href="/services">
              View services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
