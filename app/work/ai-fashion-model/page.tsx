import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TrackedLink } from "@/components/TrackedLink";
import { createSeoMetadata, socialImages } from "@/lib/seo";

const workflowSteps = [
  "Select campaign type",
  "Define visual direction",
  "Choose styling and setting",
  "Build a structured prompt",
  "Review a sample concept",
  "Prepare assets for human approval"
];

const useCases = [
  "Fashion editorial planning",
  "Product launch concepts",
  "Lookbook direction",
  "Social campaign ideation",
  "Beauty campaign concepts",
  "Creator content planning"
];

const promptFields = [
  ["Campaign type", "Editorial campaign"],
  ["Visual style", "Luxury studio portrait"],
  ["Wardrobe", "Tailored neutral dress with soft texture"],
  ["Color palette", "Ivory, taupe, warm beige"],
  ["Setting", "Minimal studio with soft backdrop"],
  ["Lighting", "Diffused key light with gentle shadow"],
  ["Camera framing", "Waist-up portrait with shallow depth of field"],
  ["Intended channel", "Campaign concept and website hero"]
];

const sampleConcepts = [
  {
    name: "Luxury studio portrait",
    campaignType: "Editorial campaign",
    direction: "Soft luxury studio",
    intendedUse: "Campaign concept",
    status: "Prototype concept"
  },
  {
    name: "Resort campaign",
    campaignType: "Product launch",
    direction: "Warm resort lifestyle",
    intendedUse: "Seasonal social story",
    status: "Sample concept"
  },
  {
    name: "Streetwear editorial",
    campaignType: "Social campaign",
    direction: "City editorial",
    intendedUse: "Creator content planning",
    status: "Editorial exploration"
  },
  {
    name: "Minimal beauty story",
    campaignType: "Beauty campaign",
    direction: "Clean close-up direction",
    intendedUse: "Beauty product story",
    status: "Prototype concept"
  },
  {
    name: "Futuristic runway",
    campaignType: "Lookbook",
    direction: "Architectural runway mood",
    intendedUse: "Lookbook direction",
    status: "Sample concept"
  }
];

const productionRoadmap = [
  "AI API integration",
  "Saved concepts",
  "User accounts",
  "Team collaboration",
  "Asset export",
  "Approval workflows",
  "Brand presets",
  "Usage logging"
];

export const metadata: Metadata = {
  ...createSeoMetadata({
    title: "AI Fashion Model Prototype | ClearStack Studio",
    description:
      "Explore an AI-assisted fashion concept workflow for structured briefs, prompt planning, sample concepts, and responsible asset review.",
    path: "/work/ai-fashion-model",
    image: socialImages.aiFashionModel,
    imageAlt: "AI Fashion Model social preview labeled AI-Assisted Prototype."
  })
};

export default function AiFashionModelPage() {
  return (
    <main className="bg-slateInk">
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-24 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-200">
              AI-assisted creative prototype
            </p>
            <span className="border border-fuchsia-200/40 bg-fuchsia-200/[0.1] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-100">
              Static proof project
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Plan AI-assisted fashion concepts before connecting a production workflow.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            AI Fashion Model shows how fashion brands, creators, beauty teams, and marketing teams can move from a campaign idea to a structured brief, prompt plan, sample concept, and responsible asset review before any live AI image-generation service is connected.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Fashion brands", "Creators", "Beauty teams", "Marketing teams"].map((tag) => (
              <span
                className="border border-fuchsia-200/30 bg-fuchsia-200/[0.08] px-3 py-2 text-sm text-fuchsia-100"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <TrackedLink
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              eventLabel="ai_fashion_review_workflow"
              eventName="ai_fashion_start_project_click"
              href="#workflow"
              projectSlug="ai-fashion-model"
            >
              Review the workflow
            </TrackedLink>
            <TrackedLink
              className="focus-ring inline-flex items-center justify-center border border-fuchsia-200/40 px-5 py-3 text-sm font-semibold text-fuchsia-100 transition hover:border-fuchsia-200 hover:text-white"
              eventLabel="ai_fashion_case_study_hero"
              eventName="ai_fashion_case_study_click"
              href="/work/ai-fashion-model/case-study"
              projectSlug="ai-fashion-model"
            >
              Read the case study
            </TrackedLink>
          </div>
        </div>

        <div className="border border-fuchsia-200/20 bg-fuchsia-200/[0.05] p-5 shadow-[0_0_80px_rgba(217,70,239,0.14)]">
          <div className="overflow-hidden border border-white/10 bg-gradient-to-br from-fuchsia-300/20 via-slate-950 to-cyan-300/20">
            <Image
              alt="AI Fashion Model prototype social preview for ClearStack Studio"
              className="h-auto w-full border-b border-white/10"
              height={630}
              priority
              src="/social/ai-fashion-model.png"
              width={1200}
            />
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-100">
                Prompt-builder preview
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Structured brief before generation
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                This proof project generates a structured creative brief only. No live AI image-generation service is connected.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8" id="workflow">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            Workflow section
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A prototype process from campaign idea to approval-ready concept.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {workflowSteps.map((step, index) => (
              <article className="border border-white/10 bg-white/[0.04] p-5" key={step}>
                <p className="text-sm font-semibold text-cyanGlow">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{step}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {index === 0 && "Pick the campaign category and business context before choosing visuals."}
                  {index === 1 && "Define mood, visual direction, color, and audience fit without copying a living artist or exact brand style."}
                  {index === 2 && "Choose wardrobe, hair, makeup, setting, pose, and channel-specific styling constraints."}
                  {index === 3 && "Convert selections into sections for subject, wardrobe, environment, lighting, composition, mood, intended use, and safety notes."}
                  {index === 4 && "Compare static concept cards and decide what needs revision before production."}
                  {index === 5 && "Prepare the concept for human approval, platform-term review, disclosure review, and rights checks."}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
          Use cases
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Built for practical fashion and marketing planning.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <article className="border border-cyan-300/20 bg-cyan-300/[0.05] p-5" key={useCase}>
              <h3 className="text-lg font-semibold text-white">{useCase}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Use the static workflow to align creative direction, prompt structure, intended channel, and review criteria before investing in production tooling.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-200">
              Prompt-builder preview
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Static fields show how a creative brief becomes a structured prompt.
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {promptFields.map(([label, value]) => (
                <div className="border border-white/10 bg-white/[0.04] p-4" key={label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{label}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-100">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-fuchsia-200/20 bg-slateInk p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-100">
              Generated structured prompt preview
            </p>
            <div className="mt-5 overflow-hidden whitespace-pre-wrap break-words border border-white/10 bg-[#050b14] p-5 text-sm leading-7 text-slate-200">
              Subject: AI-assisted fashion concept for a solo editorial model.{"\n"}
              Wardrobe: Tailored neutral dress with soft texture and minimal styling.{"\n"}
              Environment: Minimal warm studio backdrop with soft beige tones.{"\n"}
              Lighting: Diffused key light, gentle shadow, polished beauty finish.{"\n"}
              Composition: Waist-up portrait, shallow depth of field, website hero crop.{"\n"}
              Mood: Calm, premium, refined, modern, and brand-safe.{"\n"}
              Intended use: Campaign concept and internal creative review.{"\n"}
              Safety and brand notes: Human review required; no exact brand replication, copyrighted-style imitation, or unsupported commercial-use claim.
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-400">
              This proof project generates a structured creative brief only. No live AI image-generation service is connected.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
          Sample concepts
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Static concept cards for review, not rights-clearance claims.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {sampleConcepts.map((concept) => (
            <article className="border border-white/10 bg-white/[0.04] p-5" key={concept.name}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emeraldLift">{concept.status}</p>
              <h3 className="mt-4 text-lg font-semibold text-white">{concept.name}</h3>
              <dl className="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
                <div><dt className="font-semibold text-slate-100">Campaign type</dt><dd>{concept.campaignType}</dd></div>
                <div><dt className="font-semibold text-slate-100">Visual direction</dt><dd>{concept.direction}</dd></div>
                <div><dt className="font-semibold text-slate-100">Intended use</dt><dd>{concept.intendedUse}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-200">
            Responsible AI section
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Human review and rights checks stay visible before production.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {["Human review is required", "Brand and likeness rights must be checked", "Platform terms must be reviewed", "Prototype concepts are not automatically cleared for commercial use", "Sensitive or confidential campaign information should not be entered"].map((boundary) => (
              <article className="border border-fuchsia-200/20 bg-fuchsia-200/[0.06] p-5 text-sm font-semibold leading-6 text-fuchsia-50" key={boundary}>
                {boundary}
              </article>
            ))}
          </div>
          <p className="mt-8 border border-amber-200/30 bg-amber-200/[0.08] p-5 text-sm leading-6 text-amber-50">
            Prototype concepts should not be treated as cleared commercial assets. Rights, platform terms, disclosures, likeness permissions, and brand approvals must be reviewed before publication.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            Future production phase
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            What a later production version could add.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {productionRoadmap.map((item) => (
            <div className="border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-slate-300" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl border border-fuchsia-200/20 bg-fuchsia-200/[0.05] p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-100">
            ClearStack Studio service connection
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Want a creative AI prototype with honest boundaries?
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
            ClearStack can help turn a fashion, beauty, creator, or marketing workflow into a static proof project first, then scope production integrations only after the workflow is clear.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <TrackedLink
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              eventLabel="ai_fashion_start_project_bottom"
              eventName="ai_fashion_start_project_click"
              href="/start"
              projectSlug="ai-fashion-model"
            >
              Start a similar project
            </TrackedLink>
            <TrackedLink
              className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-fuchsia-200/60 hover:text-white"
              eventLabel="ai_fashion_view_services_bottom"
              eventName="ai_fashion_view_services_click"
              href="/services"
              projectSlug="ai-fashion-model"
            >
              View services
            </TrackedLink>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-fuchsia-200/40 px-5 py-3 text-sm font-semibold text-fuchsia-100 transition hover:border-fuchsia-200 hover:text-white"
              href="/services/ai-powered-tool"
            >
              Explore AI-Powered Tool service
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-200/60 hover:text-white"
              href="/projects"
            >
              View projects
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-200/60 hover:text-white"
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
