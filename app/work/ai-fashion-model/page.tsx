import type { Metadata } from "next";
import Link from "next/link";

const prototypeFeatures = [
  {
    title: "Prompt-based creative direction",
    text: "A structured way to turn mood, styling, audience, and campaign notes into visual concept prompts."
  },
  {
    title: "Fashion concept boards",
    text: "Static prototype cards for outfit ideas, visual themes, creator content angles, and product styling experiments."
  },
  {
    title: "Creator and retail use cases",
    text: "Positioned for creators, boutique brands, fashion concepts, retail campaigns, and early product ideation."
  },
  {
    title: "MVP guardrails",
    text: "Presented as an AI-assisted prototype, not a production AI model, real training pipeline, or connected generation platform."
  }
];

const workflowSteps = [
  "Capture the creative direction, audience, visual tone, and product or campaign idea.",
  "Translate the concept into repeatable prompt blocks and review-ready creative cards.",
  "Use static prototype screens to test whether the workflow is useful before connecting real AI APIs.",
  "Plan a future upgrade path for asset management, model/provider selection, approvals, and analytics."
];

const roadmapItems = [
  "Connect approved AI image or text providers only after scope, budget, privacy, and content policies are defined.",
  "Add saved projects, brand kits, approval states, and reusable prompt templates.",
  "Support creator campaign planning, retail product ideation, and social content calendars.",
  "Add authentication, database storage, and billing only if the prototype validates demand."
];

export const metadata: Metadata = {
  title: "AI Fashion Model | ClearStack Studio",
  description:
    "AI Fashion Model is an AI-assisted creative and product visualization prototype by ClearStack Studio for fashion, retail, creator, and visual concept workflows."
};

export default function AiFashionModelPage() {
  return (
    <main className="bg-slateInk">
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-24 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-200">
              AI-powered tool
            </p>
            <span className="border border-fuchsia-200/40 bg-fuchsia-200/[0.1] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-100">
              Prototype
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            AI Fashion Model turns creative concepts into AI-assisted visual prototype workflows.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            From creative concept to AI-powered visual prototype. This proof project shows how ClearStack Studio can shape prompt-based creative workflows for creators, fashion, retail, visual concepts, and product ideation without claiming a production-ready AI model.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["AI-assisted", "Fashion concepts", "Visual prototype", "Creator workflows"].map((tag) => (
              <span
                className="border border-fuchsia-200/30 bg-fuchsia-200/[0.08] px-3 py-2 text-sm text-fuchsia-100"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              href="/contact"
            >
              Start an AI tool inquiry
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-fuchsia-200/40 px-5 py-3 text-sm font-semibold text-fuchsia-100 transition hover:border-fuchsia-200 hover:text-white"
              href="/work/ai-fashion-model/case-study"
            >
              Read case study
            </Link>
          </div>
        </div>

        <div className="border border-fuchsia-200/20 bg-fuchsia-200/[0.05] p-5 shadow-[0_0_80px_rgba(217,70,239,0.14)]">
          <div className="min-h-[420px] border border-white/10 bg-gradient-to-br from-fuchsia-300/20 via-slate-950 to-cyan-300/20 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-100">
              Prototype board
            </p>
            <div className="mt-8 grid gap-4">
              <div className="border border-white/15 bg-slate-950/70 p-5">
                <p className="text-sm text-slate-400">Creative prompt</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Soft editorial streetwear campaign
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Mood, color, styling, shot list, and concept notes organized before any AI provider is connected.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="min-h-32 border border-fuchsia-200/30 bg-fuchsia-200/[0.08] p-4">
                  <p className="text-sm font-semibold text-white">Look 01</p>
                  <p className="mt-2 text-sm text-slate-300">Neutral layers, soft studio light</p>
                </div>
                <div className="min-h-32 border border-cyan-200/30 bg-cyan-200/[0.08] p-4">
                  <p className="text-sm font-semibold text-white">Use case</p>
                  <p className="mt-2 text-sm text-slate-300">Creator campaign and retail product ideation</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm leading-6 text-slate-400">
              Static mock content only. No AI API, model training, private datasets, authentication, or database is connected.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            Prototype Features
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A safe first version for testing AI-assisted creative workflows.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {prototypeFeatures.map((feature) => (
              <article className="border border-white/10 bg-white/[0.04] p-5" key={feature.title}>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            MVP Workflow
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            From prompt idea to review-ready concept board.
          </h2>
          <div className="mt-8 grid gap-3">
            {workflowSteps.map((step, index) => (
              <div className="border border-cyan-300/20 bg-cyan-300/[0.05] p-4 text-sm leading-6 text-slate-200" key={step}>
                <span className="font-semibold text-cyanGlow">0{index + 1}. </span>
                {step}
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-200">
            Future Roadmap
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Real AI integrations come after the workflow is validated.
          </h2>
          <div className="mt-8 grid gap-3">
            {roadmapItems.map((item) => (
              <div className="border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-slate-300" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl border border-fuchsia-200/20 bg-fuchsia-200/[0.05] p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-100">
            ClearStack Studio service connection
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Use this pattern for AI tools, creator workflows, and visual product ideation.
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
            AI Fashion Model is a proof project for building practical AI-assisted MVPs: define the workflow, make the interface useful, keep the boundaries honest, then connect production systems only when the concept is ready.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              href="/contact"
            >
              Build an AI tool like this
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-fuchsia-200/60 hover:text-white"
              href="/work"
            >
              View all work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
