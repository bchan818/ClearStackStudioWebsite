import type { Metadata } from "next";
import Link from "next/link";

const readinessAreas = [
  {
    title: "Core functionality",
    text: "The primary experience works end-to-end enough for a visitor, client, or stakeholder to understand the product value."
  },
  {
    title: "Navigation and CTAs",
    text: "Header links, footer links, proof links, case studies, and next-step CTAs point visitors in the right direction."
  },
  {
    title: "Mobile responsiveness",
    text: "Pages remain readable and usable on small screens, with stacked cards, tappable buttons, and no text overflow."
  },
  {
    title: "SEO and sharing basics",
    text: "The site has clear titles, descriptions, favicon support, sitemap/robots coverage, and social preview metadata where available."
  },
  {
    title: "Demo honesty",
    text: "Mock data, inquiry flows, prototype features, and future integrations are labeled honestly before launch."
  },
  {
    title: "Deployment health",
    text: "Lint and build pass, the latest commit is pushed, key routes load, and the deployed URL matches the intended project."
  },
  {
    title: "Roadmap clarity",
    text: "Visitors can tell what is live now, what is intentionally deferred, and what the next useful phase could be."
  }
];

const projectExamples = [
  {
    name: "CardScope",
    category: "Software MVP",
    text: "Launch readiness means manual search works, collection routes load, the Pro prototype is framed as a preview, roadmap phases are clear, and early-access CTAs give visitors a next step."
  },
  {
    name: "ClearBloom Beauty",
    category: "Storefront MVP",
    text: "Launch readiness means the catalog, product pages, inquiry checkout, policies, and brand trust pages make the boutique feel real while staying clear that checkout is inquiry-based."
  },
  {
    name: "AI Fashion Model",
    category: "AI prototype",
    text: "Launch readiness means the AI-assisted workflow is positioned clearly, use cases are easy to understand, and prototype boundaries are visible before real AI APIs are connected."
  },
  {
    name: "MSW Application Review",
    category: "Workflow dashboard",
    text: "Launch readiness means the dashboard communicates review status, workflow structure, mock data, and privacy boundaries without implying live institutional data or integrations."
  }
];

const checklistItems = [
  "Key routes load",
  "CTAs point to the correct next step",
  "Mobile layout works",
  "Demo features are labeled honestly",
  "No fake payments/accounts/API claims",
  "Metadata is clear",
  "Build passes",
  "Deployment is current",
  "Next roadmap is visible"
];

export const metadata: Metadata = {
  title: "Launch Readiness",
  description:
    "How ClearStack Studio checks MVPs, storefronts, AI prototypes, dashboards, and websites before launch or sharing."
};

export default function LaunchReadinessPage() {
  return (
    <main className="bg-slateInk">
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
          Launch Readiness
        </p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Launch readiness for focused digital products.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Before a project is shared, ClearStack Studio checks the core experience, navigation, mobile layout, messaging, SEO basics, deployment, and next-step roadmap.
            </p>
          </div>
          <div className="border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
            <p className="text-sm font-semibold text-cyan-100">From idea to app.</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              A launch-ready first version does not need every future feature. It needs to be useful, understandable, and honest enough to share.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            What launch readiness means
          </p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-start">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Useful first versions are clear before they are complete.
            </h2>
            <div className="space-y-4 text-sm leading-6 text-slate-300 sm:text-base">
              <p>
                A project does not need every future feature to be worth launching or sharing. A focused MVP, storefront, prototype, dashboard, or website can be valuable when the main experience is functional and easy to understand.
              </p>
              <p>
                ClearStack Studio treats launch readiness as a practical quality pass: the project should be clear, functional, honest, responsive, and ready to share with the right audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
              Readiness areas
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              The quality pass covers product, business, and deployment basics.
            </h2>
          </div>
          <Link
            className="focus-ring inline-flex items-center justify-center border border-emerald-300/40 px-5 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emeraldLift hover:text-slate-950"
            href="/qa-checklist"
          >
            Open QA checklist
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {readinessAreas.map((area, index) => (
            <article className="border border-white/10 bg-white/[0.04] p-6 shadow-glow/20" key={area.title}>
              <p className="text-sm font-semibold text-cyanGlow">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{area.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            Project-specific examples
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Launch readiness changes by project type.
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {projectExamples.map((project) => (
              <article className="border border-white/10 bg-white/[0.04] p-6" key={project.name}>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                  <span className="border border-cyan-300/30 bg-cyan-300/[0.08] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                    {project.category}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-300">{project.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
          Launch readiness checklist summary
        </p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A quick pass before sending the link.
            </h2>
            <p className="mt-5 text-sm leading-6 text-slate-300 sm:text-base">
              Use this summary as the final review after lint, build, route checks, and browser review are complete.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {checklistItems.map((item) => (
              <div className="flex gap-3 border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300" key={item}>
                <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 border border-emerald-300/60 bg-emerald-300/20" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-6xl border border-emerald-300/20 bg-emerald-300/[0.05] p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
              Ready to launch
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Build something focused, useful, and ready to share.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
              Start with a practical first version, then use feedback and the roadmap to decide the next phase.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 lg:mt-0">
            <Link
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              href="/start"
            >
              Start a launch-ready MVP
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
              href="/projects"
            >
              View proof projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
