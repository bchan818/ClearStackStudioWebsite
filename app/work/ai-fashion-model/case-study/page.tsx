import type { Metadata } from "next";
import Link from "next/link";

const summaryStats = [
  { label: "Project type", value: "AI-powered tool prototype" },
  { label: "Primary use", value: "Creative/product visualization" },
  { label: "Audience", value: "Creators, fashion, retail, product teams" },
  { label: "Status", value: "Static MVP proof" }
];

const builtItems = [
  "AI-assisted creative workflow positioning",
  "Prompt-based fashion concept board structure",
  "Visual product prototyping interface mockup",
  "Creator, retail, and campaign ideation use cases",
  "Clear guardrails that no production AI model or API is connected"
];

const deferredItems = [
  "Real AI API integrations",
  "Custom model training or fine-tuning",
  "Private image datasets or asset libraries",
  "Authentication and saved user workspaces",
  "Billing, usage metering, or production content moderation workflows"
];

const processSteps = [
  {
    title: "Creative concept",
    text: "Frame the idea around fashion, retail, visual campaigns, and creator content rather than a vague AI demo."
  },
  {
    title: "MVP workflow",
    text: "Organize prompt inputs, concept cards, use cases, and review states so the tool has a clear job."
  },
  {
    title: "Prototype surface",
    text: "Build static screens that show the workflow without connecting keys, providers, databases, or private assets."
  },
  {
    title: "Upgrade path",
    text: "Identify future provider integration, brand-kit storage, approvals, and analytics only after the prototype proves useful."
  }
];

const proofPoints = [
  "AI products still need clear users, workflows, guardrails, and success criteria before integrations are added.",
  "A static prototype can help creators and product teams evaluate the value of AI-assisted ideation safely.",
  "ClearStack Studio can translate creative ideas into business-ready AI tool concepts without overclaiming production capability."
];

export const metadata: Metadata = {
  title: "AI Fashion Model Case Study | ClearStack Studio",
  description:
    "See how ClearStack Studio positions AI Fashion Model as an AI-assisted creative and product visualization prototype with honest MVP guardrails."
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
            AI Fashion Model: from creative concept to AI-powered visual prototype.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            AI Fashion Model shows how ClearStack Studio can turn a creative AI idea into an honest MVP surface for prompt-based fashion concepts, visual product prototyping, and creator or retail ideation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              href="/contact"
            >
              Build an AI tool like this
            </Link>
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
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            Project Overview
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A focused AI-assisted workflow before production AI complexity.
          </h2>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
            The problem was not simply generating visuals. The useful first version needed to clarify how creators and product teams could structure a fashion idea, create consistent prompt direction, and review visual concepts before investing in real AI integrations.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article className="border border-white/10 bg-white/[0.03] p-5" key={step.title}>
                <p className="text-sm font-semibold text-cyanGlow">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            What Was Built
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            A prototype for testing AI-assisted creative product value.
          </h2>
          <div className="mt-8 grid gap-3">
            {builtItems.map((item) => (
              <div className="border border-cyan-300/20 bg-cyan-300/[0.05] p-4 text-sm leading-6 text-slate-200" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-200">
            Intentionally Deferred
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            The prototype stays honest about what is not live yet.
          </h2>
          <div className="mt-8 grid gap-3">
            {deferredItems.map((item) => (
              <div className="border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-slate-300" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            What It Proves
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            ClearStack Studio can shape creative AI ideas into useful MVPs.
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {proofPoints.map((point) => (
              <article className="border border-emerald-300/20 bg-emerald-300/[0.05] p-5 text-sm leading-6 text-slate-300" key={point}>
                {point}
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              href="/contact"
            >
              Start an AI tool inquiry
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-fuchsia-200/60 hover:text-white"
              href="/services"
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
