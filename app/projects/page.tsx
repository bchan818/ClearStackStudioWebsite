import type { Metadata } from "next";
import Link from "next/link";
import { cardScopeLiveUrl, clearBloomLiveUrl } from "@/lib/siteLinks";

const categoryChips = ["All", "Software MVP", "Storefront MVP", "AI Tool", "Dashboard"];

const projects = [
  {
    name: "CardScope",
    category: "Software MVP",
    status: "Live MVP",
    description:
      "Card price scanner and collection tracker for collectors, sellers, and hobbyists.",
    proves:
      "Product MVPs, dashboards, collection tools, and Pro feature planning.",
    relatedService: "MVP Launch Package",
    serviceHref: "/services",
    liveDemo: cardScopeLiveUrl,
    caseStudy: "/work/cardscope/case-study",
    cta: "View CardScope",
    accent: "cyan"
  },
  {
    name: "ClearBloom Beauty",
    category: "Storefront MVP",
    status: "Live storefront demo",
    description:
      "Premium beauty storefront MVP with catalog, product pages, inquiry checkout, policies, and brand system.",
    proves:
      "Storefront MVPs, product catalogs, beauty/lifestyle branding, and inquiry checkout.",
    relatedService: "Storefront MVP Package",
    serviceHref: "/services#storefront-mvp",
    liveDemo: clearBloomLiveUrl,
    caseStudy: "/work/clearbloom-beauty/case-study",
    cta: "View live storefront demo",
    accent: "rose"
  },
  {
    name: "AI Fashion Model",
    category: "AI-Powered Tool",
    status: "Prototype concept",
    description:
      "AI-assisted fashion visualization and creative concept prototype.",
    proves:
      "AI creative tools, prompt workflows, visual product concepts, and creator/retail use cases.",
    relatedService: "AI-Powered Tool Build",
    serviceHref: "/services",
    liveDemo: undefined,
    caseStudy: "/work/ai-fashion-model/case-study",
    cta: "Read AI case study",
    accent: "fuchsia"
  },
  {
    name: "MSW Application Review",
    category: "Internal Workflow Dashboard",
    status: "Private workflow prototype",
    description:
      "A structured application review dashboard prototype for organizing reviewer queues, applicant statuses, review notes, reports, and administrative workflows.",
    proves:
      "Internal dashboard builds, application/review workflows, status tracking, reviewer assignment flows, report/export interface planning, privacy-conscious dashboard design, and database-backed app architecture planning.",
    relatedService: "Internal Dashboard Build",
    serviceHref: "/services",
    liveDemo: undefined,
    caseStudy: "/work/msw-application-review/case-study",
    cta: "View case study",
    accent: "emerald"
  }
];

const accentStyles = {
  cyan: {
    border: "border-cyan-300/25",
    badge: "border-cyan-300/40 bg-cyan-300/[0.08] text-cyan-100",
    button: "bg-cyanGlow text-slate-950 hover:bg-emeraldLift"
  },
  rose: {
    border: "border-rose-200/25",
    badge: "border-rose-200/40 bg-rose-200/[0.08] text-rose-100",
    button: "bg-rose-200 text-[#130d14] hover:bg-amber-100"
  },
  fuchsia: {
    border: "border-fuchsia-200/25",
    badge: "border-fuchsia-200/40 bg-fuchsia-200/[0.08] text-fuchsia-100",
    button: "bg-cyanGlow text-slate-950 hover:bg-emeraldLift"
  },
  emerald: {
    border: "border-emerald-300/25",
    badge: "border-emerald-300/40 bg-emerald-300/[0.08] text-emerald-100",
    button: "bg-cyanGlow text-slate-950 hover:bg-emeraldLift"
  }
};

const portfolioSteps = [
  {
    title: "Browse proof projects",
    text: "Start with the dashboard view to see which examples match your idea, market, or internal workflow."
  },
  {
    title: "Read case studies",
    text: "Use the case studies to understand what was built, what was intentionally deferred, and how the MVP could grow."
  },
  {
    title: "Compare project types",
    text: "Look across software MVPs, storefronts, AI concepts, and dashboards to choose the closest launch path."
  },
  {
    title: "Start the closest inquiry",
    text: "Send a focused request based on the proof project that feels most similar to what you want to build."
  }
];

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A unified ClearStack Studio projects dashboard across MVP software, storefront MVPs, AI-powered tools, and internal workflow dashboards."
};

export default function ProjectsPage() {
  return (
    <main className="bg-slateInk">
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
          Projects Dashboard
        </p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Proof projects across MVPs, storefronts, AI tools, and dashboards.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              ClearStack Studio uses focused proof projects to show how ideas become launch-ready digital products.
            </p>
          </div>
          <div className="border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
            <p className="text-sm font-semibold text-cyan-100">Work vs. Projects</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Work is the case-study portfolio. Projects is the dashboard overview for comparing proof types, services, and next-step CTAs.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {categoryChips.map((chip) => (
            <span
              className="border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-200"
              key={chip}
            >
              {chip}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
                Project Matrix
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Compare the proof projects by category, service fit, and launch path.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                className="focus-ring inline-flex items-center justify-center border border-cyan-300/40 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyanGlow hover:text-slate-950"
                href="/work"
              >
                View work portfolio
              </Link>
              <Link
                className="focus-ring inline-flex items-center justify-center border border-emerald-300/40 px-5 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emeraldLift hover:text-slate-950"
                href="/qa-checklist"
              >
                Use QA checklist
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-5">
            {projects.map((project) => {
              const styles = accentStyles[project.accent as keyof typeof accentStyles];
              const primaryHref = project.liveDemo ?? project.caseStudy;

              return (
                <article
                  className={`grid gap-6 border bg-white/[0.04] p-6 shadow-glow/20 lg:grid-cols-[0.85fr_1.25fr_0.85fr] ${styles.border}`}
                  key={project.name}
                >
                  <div>
                    <div className="flex flex-wrap gap-2">
                      <span className={`border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${styles.badge}`}>
                        {project.category}
                      </span>
                      <span className="border border-white/10 bg-slateInk/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-white">
                      {project.name}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-slate-300">
                      {project.description}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="border border-white/10 bg-slateInk/60 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        What it proves
                      </p>
                      <p className="mt-3 text-sm leading-6 text-slate-200">
                        {project.proves}
                      </p>
                    </div>
                    <div className="border border-white/10 bg-slateInk/60 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        Related service
                      </p>
                      <Link
                        className="focus-ring mt-3 inline-flex text-sm font-semibold leading-6 text-white underline decoration-cyan-300/40 underline-offset-4 transition hover:text-cyanGlow"
                        href={project.serviceHref}
                      >
                        {project.relatedService}
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between gap-4">
                    <div className="grid gap-3">
                      {project.liveDemo ? (
                        <Link
                          className="focus-ring inline-flex items-center justify-center border border-white/15 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
                          href={project.liveDemo}
                        >
                          Live demo
                        </Link>
                      ) : project.name === "MSW Application Review" ? (
                        <span className="inline-flex items-center justify-center border border-emerald-300/20 px-4 py-3 text-center text-sm font-semibold text-emerald-100">
                          Public demo withheld
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center border border-white/10 px-4 py-3 text-sm font-semibold text-slate-500">
                          Live demo planned
                        </span>
                      )}
                      {project.name === "MSW Application Review" ? (
                        <Link
                          className="focus-ring inline-flex items-center justify-center border border-white/15 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
                          href="/work/msw-application-review"
                        >
                          View project overview
                        </Link>
                      ) : null}
                      <Link
                        className="focus-ring inline-flex items-center justify-center border border-white/15 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
                        href={project.caseStudy}
                      >
                        {project.name === "MSW Application Review" ? "View case study" : "Case study"}
                      </Link>
                    </div>
                    <Link
                      className={`focus-ring inline-flex items-center justify-center px-4 py-3 text-sm font-semibold transition ${styles.button}`}
                      href={primaryHref}
                    >
                      {project.cta}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
          How to use this portfolio
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Use the proof projects to choose the closest next step.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {portfolioSteps.map((step, index) => (
            <article className="border border-white/10 bg-white/[0.04] p-5" key={step.title}>
              <p className="text-sm font-semibold text-cyanGlow">0{index + 1}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-6xl border border-emerald-300/20 bg-emerald-300/[0.05] p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
              Ready to build
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Start a project like these.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
              Choose the closest proof project and send a focused inquiry for an MVP, storefront, AI tool, dashboard, or refresh build.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 lg:mt-0">
            <Link
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              href="/start"
            >
              Start a project like these
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
              href="/services"
            >
              View services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
