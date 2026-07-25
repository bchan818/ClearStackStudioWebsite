import type { Metadata } from "next";
import Link from "next/link";
import { TrackedLink } from "@/components/TrackedLink";
import { createSeoMetadata, socialImages } from "@/lib/seo";

const clarityPoints = [
  "Who uses the tool",
  "What information they provide",
  "What the AI is expected to assist with",
  "What result the user receives",
  "Where human review is required",
  "What data should or should not be stored",
  "Which model or API may fit later",
  "What belongs in the first version versus a future phase"
];

const useCases = [
  "Structured content assistance",
  "Creative brief generation",
  "Document summarization workflows",
  "Guided research tools",
  "Internal knowledge assistants",
  "Classification or review support",
  "Recommendation interfaces",
  "Prompt-based creator tools",
  "Customer-support drafting tools",
  "Workflow copilots"
];

const processSteps = [
  {
    title: "Define the use case",
    text: "Clarify the user, problem, input, expected result, and success criteria."
  },
  {
    title: "Map the workflow",
    text: "Design the steps before, during, and after the AI-assisted action."
  },
  {
    title: "Set responsible boundaries",
    text: "Identify privacy, data, disclosure, accuracy, approval, and human-review requirements."
  },
  {
    title: "Build the prototype",
    text: "Create the interface, sample states, mock outputs, and user journey."
  },
  {
    title: "Test the experience",
    text: "Review whether the workflow is understandable and useful before adding a live model."
  },
  {
    title: "Plan production integration",
    text: "Document future API, authentication, database, monitoring, cost, and deployment needs."
  }
];

const firstVersion = [
  "Use-case definition",
  "Input or prompt interface",
  "Guided selections",
  "Structured output preview",
  "Sample or mock AI results",
  "Loading, error, and review states",
  "Human approval step",
  "Usage and disclosure notices",
  "Responsive interface",
  "Deployment-ready prototype",
  "Production roadmap"
];

const deferredItems = [
  "Live AI API integration",
  "Model selection and benchmarking",
  "Fine-tuning",
  "Retrieval-augmented generation",
  "User authentication",
  "Database-backed history",
  "Team collaboration",
  "Production monitoring",
  "Usage limits",
  "Billing",
  "File uploads",
  "Sensitive-data processing",
  "Automated publishing"
];

const responsibleTopics = [
  "Human review",
  "Accuracy limitations",
  "Bias and inappropriate output risks",
  "Privacy and confidential information",
  "Data retention",
  "Disclosure",
  "Copyright, trademark, likeness, and usage rights",
  "Model-provider terms",
  "Production monitoring"
];

const goodFit = [
  "A clear workflow problem exists",
  "AI can assist rather than fully replace judgment",
  "Sample inputs and expected outputs can be defined",
  "Human review is practical",
  "The team is willing to test before scaling"
];

const poorFit = [
  "The concept depends on guaranteed accuracy",
  "The tool would make high-stakes decisions without review",
  "Sensitive data would be used without proper controls",
  "The business model is unclear",
  "The first version requires many integrations before the workflow is validated"
];

const faqs = [
  {
    question: "Do I need to choose an AI model before starting?",
    answer: "No. The prototype can start with the workflow, inputs, outputs, review steps, and safety boundaries before a provider decision is made."
  },
  {
    question: "Can the first version use mock outputs?",
    answer: "Yes. Mock outputs are often useful for testing whether the user journey is understandable before investing in a production model connection."
  },
  {
    question: "Can a live API be added later?",
    answer: "Yes, if the workflow validates and the next phase includes provider review, privacy planning, monitoring, cost controls, and security scope."
  },
  {
    question: "Will the tool store prompts or results?",
    answer: "Not by default. Storage decisions should be scoped intentionally based on user needs, privacy requirements, retention limits, and production risk."
  },
  {
    question: "How do you handle sensitive information?",
    answer: "Sensitive information should be avoided in public inquiry flows and prototype content unless proper controls are explicitly scoped for a later production phase."
  },
  {
    question: "Can this become a production application?",
    answer: "Yes. A validated prototype can become the foundation for a production build with authentication, data storage, model integration, monitoring, and deployment planning."
  },
  {
    question: "Do you guarantee AI accuracy?",
    answer: "No. AI-assisted output requires human review, testing, monitoring, and clear limits before it is used in important workflows."
  },
  {
    question: "Can the prototype support internal users?",
    answer: "Yes. Internal teams can use a prototype to test workflow steps, review states, and approval paths before real accounts or private data are introduced."
  }
];

export const metadata: Metadata = {
  ...createSeoMetadata({
    title: "AI-Powered Tool Development | ClearStack Studio",
    description:
      "Plan and prototype an AI-powered workflow with clear inputs, outputs, human review, responsible-use boundaries, and a future production roadmap.",
    path: "/services/ai-powered-tool",
    image: socialImages.services,
    imageAlt: "ClearStack Studio services social preview for AI-powered tool development."
  })
};

export default function AiPoweredToolServicePage() {
  return (
    <main className="bg-slateInk">
      <section className="relative isolate overflow-hidden bg-slateInk">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(217,70,239,0.16),transparent_30%),radial-gradient(circle_at_82%_4%,rgba(34,211,238,0.14),transparent_28%)]"
        />
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-24 lg:grid-cols-[1fr_0.86fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-200">
              AI-Powered Tool
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Turn an AI idea into a focused, testable workflow.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              ClearStack Studio helps teams define the user input, AI-assisted process, review experience, responsible-use boundaries, and future production architecture before investing in a full AI integration.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <TrackedLink
                className="focus-ring inline-flex min-h-11 items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
                ctaLocation="ai_service_hero"
                eventLabel="ai_service_hero_start"
                eventName="ai_service_start_click"
                href="/start"
              >
                Discuss an AI tool
              </TrackedLink>
              <TrackedLink
                className="focus-ring inline-flex min-h-11 items-center justify-center border border-fuchsia-200/40 px-6 py-3 text-sm font-semibold text-fuchsia-100 transition hover:border-fuchsia-200 hover:text-white"
                ctaLocation="ai_service_hero"
                eventLabel="ai_service_hero_project"
                eventName="ai_service_project_click"
                href="/work/ai-fashion-model"
                projectSlug="ai-fashion-model"
              >
                View AI Fashion Model
              </TrackedLink>
            </div>
          </div>

          <div className="border border-fuchsia-200/20 bg-fuchsia-200/[0.05] p-6 shadow-[0_0_80px_rgba(217,70,239,0.14)] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-100">
              Prototype scope
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">
              Validate the workflow before production AI scope.
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              An AI prototype can validate the workflow and user experience without immediately connecting a production AI model.
            </p>
            <dl className="mt-6 grid gap-3 text-sm leading-6 text-slate-300">
              <div className="border border-white/10 bg-slateInk/70 p-4">
                <dt className="font-semibold text-slate-100">Prototype uses</dt>
                <dd className="mt-1">Mock states, structured outputs, review screens, and clear disclosure copy.</dd>
              </div>
              <div className="border border-white/10 bg-slateInk/70 p-4">
                <dt className="font-semibold text-slate-100">Deferred scope</dt>
                <dd className="mt-1">Production model calls, accounts, databases, uploads, billing, and external integrations.</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
          What this service is
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          A focused engagement for shaping an AI-assisted workflow before the technical bet gets bigger.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {clarityPoints.map((point) => (
            <article className="border border-white/10 bg-white/[0.04] p-5 text-sm font-semibold leading-6 text-slate-200" key={point}>
              {point}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            Best-fit use cases
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Useful when AI can assist a defined workflow, not replace judgment entirely.
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
            Not every use case is appropriate for AI. The first step is deciding whether an assistant, classifier, drafting flow, or review aid creates practical value with acceptable risk.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {useCases.map((useCase) => (
              <article className="border border-cyan-300/20 bg-cyan-300/[0.05] p-5 text-sm font-semibold leading-6 text-cyan-50" key={useCase}>
                {useCase}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-200">
          Engagement process
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          From use-case definition to a production roadmap.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <article className="border border-white/10 bg-white/[0.04] p-5" key={step.title}>
              <p className="text-sm font-semibold text-cyanGlow">0{index + 1}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
              What a first version may include
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Prototype-only elements that make the workflow testable.
            </h2>
            <p className="mt-5 text-sm leading-6 text-slate-300">
              These pieces help a team evaluate clarity, usefulness, and review expectations before a production AI provider is connected.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {firstVersion.map((item) => (
                <div className="border border-emerald-300/20 bg-emerald-300/[0.05] p-4 text-sm leading-6 text-slate-200" key={item}>
                  <span className="font-semibold text-emerald-100">Prototype-only: </span>{item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-100">
              What is usually deferred
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Production complexity belongs after workflow validation.
            </h2>
            <p className="mt-5 text-sm leading-6 text-slate-300">
              These may belong in a later phase depending on risk, budget, validation results, privacy needs, and technical constraints.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {deferredItems.map((item) => (
                <div className="border border-amber-200/20 bg-amber-200/[0.05] p-4 text-sm leading-6 text-slate-200" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-8 border border-fuchsia-200/20 bg-fuchsia-200/[0.05] p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-100">
              Proof project
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              AI Fashion Model
            </h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-100">
              AI-assisted creative workflow prototype
            </p>
            <p className="mt-5 text-sm leading-6 text-slate-300 sm:text-base">
              AI Fashion Model demonstrates a guided creative brief, structured prompt planning, sample concept states, and responsible asset-use guidance. It does not connect to a production image-generation service.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <TrackedLink
                className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
                ctaLocation="ai_service_proof_project"
                eventLabel="ai_service_proof_project_page"
                eventName="ai_service_project_click"
                href="/work/ai-fashion-model"
                projectSlug="ai-fashion-model"
              >
                View AI Fashion Model
              </TrackedLink>
              <TrackedLink
                className="focus-ring inline-flex items-center justify-center border border-fuchsia-200/40 px-5 py-3 text-sm font-semibold text-fuchsia-100 transition hover:border-fuchsia-200 hover:text-white"
                ctaLocation="ai_service_proof_project"
                eventLabel="ai_service_proof_case_study"
                eventName="ai_service_project_click"
                href="/work/ai-fashion-model/case-study"
                projectSlug="ai-fashion-model"
              >
                Read the case study
              </TrackedLink>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Guided creative brief",
              "Structured prompt planning",
              "Sample concept states",
              "Responsible asset-use guidance",
              "No production image-generation service",
              "Clear future roadmap"
            ].map((item) => (
              <div className="border border-white/10 bg-slateInk/70 p-4 text-sm leading-6 text-slate-200" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-100">
            Responsible AI
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Review requirements are part of the product experience, not an afterthought.
          </h2>
          <p className="mt-6 border border-amber-200/30 bg-amber-200/[0.08] p-5 text-sm leading-6 text-amber-50">
            AI-assisted outputs should be reviewed by a qualified person before they are published, relied upon, or used to make consequential decisions.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {responsibleTopics.map((topic) => (
              <article className="border border-white/10 bg-white/[0.04] p-5" key={topic}>
                <h3 className="text-lg font-semibold text-white">{topic}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Identify how this topic affects the prototype now and what controls would be needed before production use.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:px-8">
        <div className="border border-emerald-300/20 bg-emerald-300/[0.05] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Good fit</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">The workflow can be tested safely.</h2>
          <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-300">
            {goodFit.map((item) => (
              <li className="border border-white/10 bg-slateInk/60 p-3" key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="border border-rose-200/20 bg-rose-200/[0.05] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-100">Poor fit</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">The first version carries too much risk or uncertainty.</h2>
          <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-300">
            {poorFit.map((item) => (
              <li className="border border-white/10 bg-slateInk/60 p-3" key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl border border-cyan-300/20 bg-cyan-300/[0.05] p-8 text-center sm:p-10">
          <p className="text-sm leading-6 text-slate-300">
            Not sure whether your idea is an AI tool, product MVP, or internal dashboard?
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Compare the best starting point before scoping the build.
          </h2>
          <TrackedLink
            className="focus-ring mt-8 inline-flex items-center justify-center border border-cyan-300/40 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyanGlow hover:text-slate-950"
            ctaLocation="ai_service_project_fit"
            eventLabel="ai_service_project_fit"
            eventName="ai_service_project_fit_click"
            href="/project-fit"
          >
            Take the Project Fit Assessment
          </TrackedLink>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">FAQ</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Common AI-powered tool questions.
        </h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <article className="border border-white/10 bg-white/[0.04] p-5" key={faq.question}>
              <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl border border-fuchsia-200/20 bg-fuchsia-200/[0.05] p-8 text-center sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-100">
            Start with the workflow, not the model.
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Define the user experience, review requirements, and first-version scope before committing to a production AI integration.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <TrackedLink
              className="focus-ring inline-flex min-h-11 items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              ctaLocation="ai_service_final"
              eventLabel="ai_service_final_start"
              eventName="ai_service_start_click"
              href="/start"
            >
              Start an AI tool inquiry
            </TrackedLink>
            <Link
              className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
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
