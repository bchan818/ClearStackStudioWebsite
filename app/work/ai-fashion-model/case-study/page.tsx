import type { Metadata } from "next";
import Link from "next/link";
import { TrackedLink } from "@/components/TrackedLink";
import { createSeoMetadata, socialImages } from "@/lib/seo";

const summaryStats = [
  { label: "Project type", value: "AI-assisted creative prototype" },
  { label: "Primary use", value: "Structured fashion briefs and prompt planning" },
  { label: "Audience", value: "Fashion brands, creators, beauty teams, marketing teams" },
  { label: "Status", value: "Embedded ClearStack proof project" }
];

const workflow = [
  "Select campaign type and intended channel.",
  "Define visual direction, styling, setting, lighting, and camera framing.",
  "Generate a structured creative brief preview from safe static options.",
  "Review sample concept cards and responsible AI boundaries before production."
];

const keyScreens = [
  "Hero positioning for an AI-assisted fashion concept workflow",
  "Step-by-step workflow section",
  "Prompt-builder preview with structured field output",
  "Static sample concept cards",
  "Responsible AI and asset-use review section",
  "Future production roadmap and ClearStack inquiry CTAs"
];

const boundaries = [
  "No live AI image-generation service is connected",
  "No uploads, database, authentication, payments, external APIs, or environment variables were added",
  "Human review is required before publication",
  "Brand, likeness, trademark, and platform terms must be checked",
  "Sensitive or confidential campaign information should not be entered",
  "Prototype concepts are not automatically cleared for commercial use"
];

const proofPoints = [
  "A static proof can make an AI concept understandable before expensive integrations are added.",
  "Fashion and beauty teams benefit from structured prompt planning, not just a blank text box.",
  "Responsible asset-use guidance can be part of the user experience from the first prototype."
];

const productionRoadmap = [
  "AI API integration after provider, privacy, cost, and policy review",
  "Saved concepts and brand presets",
  "User accounts and team collaboration",
  "Asset export and approval workflows",
  "Usage logging that avoids storing prompt contents or personal data"
];

const lessons = [
  "The useful first version is the workflow, not the model integration.",
  "Clear labels prevent visitors from mistaking prototype concepts for cleared commercial assets.",
  "Safe CTA analytics can measure interest without tracking prompt contents, selections, or personal data."
];

export const metadata: Metadata = {
  ...createSeoMetadata({
    title: "AI Fashion Model Case Study | ClearStack Studio",
    description:
      "See how ClearStack Studio shaped AI Fashion Model into a structured creative workflow prototype for fashion concepts, prompt planning, and responsible asset review.",
    path: "/work/ai-fashion-model/case-study",
    image: socialImages.aiFashionModel,
    imageAlt: "AI Fashion Model case study social preview labeled AI-Assisted Prototype.",
    type: "article"
  })
};

export default function AiFashionModelCaseStudyPage() {
  return (
    <main className="bg-slateInk">
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-24 lg:grid-cols-[1fr_0.8fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-200">
            Case Study
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            AI Fashion Model: a structured creative workflow before production AI.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            This case study shows how ClearStack Studio embedded AI Fashion Model inside the studio portfolio as a complete proof project for fashion concept planning, prompt structure, sample review, and responsible asset-use decisions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <TrackedLink
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              eventLabel="ai_fashion_case_study_start_project"
              eventName="ai_fashion_start_project_click"
              href="/start"
              projectSlug="ai-fashion-model"
            >
              Start a similar project
            </TrackedLink>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-fuchsia-200/40 px-6 py-3 text-sm font-semibold text-fuchsia-100 transition hover:border-fuchsia-200 hover:text-white"
              href="/work/ai-fashion-model"
            >
              View project page
            </Link>
          </div>
        </div>

        <div className="border border-white/10 bg-white/[0.04] p-5 shadow-glow">
          <div className="grid gap-4">
            {summaryStats.map((stat) => (
              <div className="border border-white/10 bg-slateInk p-4" key={stat.label}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {stat.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
          <article className="border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Problem</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">AI creative ideas can feel vague before there is a workflow.</h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">The project needed to show practical value without pretending a production image generator, asset library, or approval system was already connected.</p>
          </article>
          <article className="border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Audience</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">Fashion brands, creators, beauty teams, and marketing teams.</h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">The prototype speaks to teams that need to plan campaigns, lookbooks, product stories, social concepts, and beauty visuals before production.</p>
          </article>
          <article className="border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-200">Prototype goal</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">Turn concept planning into a reviewable proof flow.</h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">The proof focuses on structured briefs, prompt planning, sample concept review, and responsible asset-use decisions.</p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Workflow</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          A complete static path from creative idea to review-ready concept.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {workflow.map((step, index) => (
            <article className="border border-cyan-300/20 bg-cyan-300/[0.05] p-5" key={step}>
              <p className="text-sm font-semibold text-cyanGlow">0{index + 1}</p>
              <h3 className="mt-4 text-lg font-semibold text-white">{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-200">Key screens</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Screens that make the prototype credible without adding backend scope.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {keyScreens.map((screen) => (
              <article className="border border-white/10 bg-white/[0.04] p-5 text-sm leading-6 text-slate-300" key={screen}>
                {screen}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            Responsible AI boundaries
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            The case study keeps prototype limits visible.
          </h2>
          <p className="mt-5 border border-amber-200/30 bg-amber-200/[0.08] p-5 text-sm leading-6 text-amber-50">
            Prototype concepts should not be treated as cleared commercial assets. Rights, platform terms, disclosures, likeness permissions, and brand approvals must be reviewed before publication.
          </p>
        </div>
        <div className="grid gap-3">
          {boundaries.map((item) => (
            <div className="border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-slate-300" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            What the prototype proves
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            ClearStack can make AI-assisted tools understandable before integrations are added.
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {proofPoints.map((point) => (
              <article className="border border-emerald-300/20 bg-emerald-300/[0.05] p-5 text-sm leading-6 text-slate-300" key={point}>
                {point}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-200">
            Future production roadmap
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Production features are future scope, not current claims.
          </h2>
          <div className="mt-8 grid gap-3">
            {productionRoadmap.map((item) => (
              <div className="border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-slate-300" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            Lessons learned
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Useful AI prototypes need scope, review, and disclosure from day one.
          </h2>
          <div className="mt-8 grid gap-3">
            {lessons.map((lesson) => (
              <div className="border border-cyan-300/20 bg-cyan-300/[0.05] p-4 text-sm leading-6 text-slate-200" key={lesson}>
                {lesson}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl border border-fuchsia-200/20 bg-fuchsia-200/[0.05] p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-100">
            Start a similar project
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Turn a creative workflow into a proof project before production AI complexity.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <TrackedLink
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              eventLabel="ai_fashion_case_study_start_bottom"
              eventName="ai_fashion_start_project_click"
              href="/start"
              projectSlug="ai-fashion-model"
            >
              Start a similar project
            </TrackedLink>
            <TrackedLink
              className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-fuchsia-200/60 hover:text-white"
              eventLabel="ai_fashion_case_study_services_bottom"
              eventName="ai_fashion_view_services_click"
              href="/services"
              projectSlug="ai-fashion-model"
            >
              View services
            </TrackedLink>
            <Link className="focus-ring inline-flex items-center justify-center border border-fuchsia-200/40 px-5 py-3 text-sm font-semibold text-fuchsia-100 transition hover:border-fuchsia-200 hover:text-white" href="/services/ai-powered-tool">
              Explore AI-Powered Tool service
            </Link>
            <Link className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-200/60 hover:text-white" href="/projects">
              View projects
            </Link>
            <Link className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-200/60 hover:text-white" href="/work">
              View all work
            </Link>
            <Link className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-200/60 hover:text-white" href="/work/ai-fashion-model/case-study">
              Case study permalink
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
