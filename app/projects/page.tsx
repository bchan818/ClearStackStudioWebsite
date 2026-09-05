import type { Metadata } from "next";
import Link from "next/link";
import { TrackedLink } from "@/components/TrackedLink";
import { requireProductBySlug } from "@/lib/products";
import { createSeoMetadata, socialImages } from "@/lib/seo";
import { mswApplicationReviewDemoUrl } from "@/lib/siteLinks";

const categoryChips = ["All", "MVP software", "Storefront MVP", "Travel Platform", "Forecasting and simulation product", "AI-assisted tool prototype", "Internal workflow dashboard"];

const proofApproach = [
  {
    title: "Proof-first strategy",
    text: "Each project shows a focused first version, the business problem it addresses, and the next build path without pretending every future integration already exists."
  },
  {
    title: "Clear status labels",
    text: "Live MVPs, fictional storefront demos, static AI concepts, and mock-data dashboards are labeled so visitors can tell what is real, fictional, or demonstration-only."
  },
  {
    title: "Service mapping",
    text: "The portfolio connects each proof project to a service path, so prospective clients can find the example closest to the product they want to build."
  }
];

const cardScopeProduct = requireProductBySlug("cardscope");
const clearBloomProduct = requireProductBySlug("clearbloom-beauty");
const roamTheCitiesProduct = requireProductBySlug("roamthecities");
const sportsPredictorProduct = requireProductBySlug("sports-predictor");

const projects = [
  {
    name: cardScopeProduct.name,
    slug: cardScopeProduct.slug,
    category: cardScopeProduct.category,
    status: "Live MVP",
    integrityLabel: "ClearStack-owned live MVP proof product",
    description: cardScopeProduct.description,
    problem:
      "Collectors and sellers need a simpler way to search cards, organize a collection, and understand estimated value without starting with a complex scanner or marketplace integration.",
    solution:
      "ClearStack designed a focused standalone MVP with manual search, mock card detail pages, saved collection workflows, watchlist-style planning, pricing pages, and a Pro-ready product structure.",
    deliverables: [
      "Standalone live MVP surface",
      "Manual search and mock card detail pages",
      "Collection dashboard and watchlist preview",
      "Pricing, Pro preview, roadmap, demo, pitch, and early-access pages"
    ],
    services: ["Product MVP strategy", "Product UX", "Landing and conversion pages", "Launch-ready static MVP structure"],
    techNotes:
      "Useful as a Next.js-style product MVP reference for routing, reusable UI, static product data, and no-backend validation before real APIs, accounts, payments, or scanner workflows.",
    projectHref: "/work/cardscope",
    projectLabel: "View CardScope proof page",
    liveDemo: cardScopeProduct.liveUrl,
    liveLabel: "View CardScope live MVP",
    caseStudy: cardScopeProduct.caseStudyPath,
    caseStudyLabel: "Read the CardScope case study",
    serviceHref: "/services",
    serviceLabel: "MVP Launch Package",
    accent: "cyan"
  },
  {
    name: clearBloomProduct.name,
    slug: clearBloomProduct.slug,
    category: clearBloomProduct.category,
    status: "Live storefront demo",
    integrityLabel: "Fictional beauty storefront proof project",
    description: clearBloomProduct.description,
    problem:
      "A product brand needs to look credible, explain its catalog, and test buyer interest before connecting payments, inventory, tax, shipping, fulfillment, and customer accounts.",
    solution:
      "ClearStack designed a polished boutique storefront demo with fragrance and beauty products, bundles, product visuals, brand storytelling, social launch support, policy guidance, and an inquiry-first checkout path.",
    deliverables: [
      "Fictional premium beauty storefront",
      "Product catalog, product pages, bundles, and brand kit",
      "Inquiry checkout and success flow",
      "Policy, FAQ, social launch, and case-study routes"
    ],
    services: ["Storefront MVP planning", "Retail UX", "Brand and product storytelling", "Inquiry-based launch flow"],
    techNotes:
      "Helpful for product catalog routing, reusable product visuals, inquiry-only checkout boundaries, and a future Shopify or Stripe upgrade path once operations are ready.",
    projectHref: "/work/clearbloom-beauty",
    projectLabel: "View ClearBloom Beauty proof page",
    liveDemo: clearBloomProduct.liveUrl,
    liveLabel: "View ClearBloom live storefront demo",
    caseStudy: clearBloomProduct.caseStudyPath,
    caseStudyLabel: "Read the ClearBloom case study",
    serviceHref: "/services#storefront-mvp",
    serviceLabel: "Storefront MVP Package",
    accent: "rose"
  },
  {
    name: roamTheCitiesProduct.name,
    slug: roamTheCitiesProduct.slug,
    category: roamTheCitiesProduct.category,
    status: "ClearStack-operated product",
    integrityLabel: "Travel platform built and operated by ClearStack Studio",
    description: roamTheCitiesProduct.description,
    problem:
      "Travelers need a clearer way to discover destinations, organize trip ideas, evaluate recommendations, and move from inspiration to a planned itinerary.",
    solution:
      "ClearStack built a web and mobile-compatible product foundation with destination discovery, trip planning, recommendations, affiliate attribution, analytics, feature flags, and operational monitoring foundations.",
    deliverables: [
      "RoamTheCities travel platform foundation",
      "Destination discovery and trip planning architecture",
      "Recommendation, affiliate attribution, analytics, feature-flag, and operations layers",
      "Admin dashboards and mobile/web compatibility planning"
    ],
    services: ["Product MVP strategy", "Travel platform UX", "Mobile/web product architecture", "Operational dashboard planning"],
    techNotes:
      "Useful as a product-platform reference for Supabase-backed authentication, trips, destinations, affiliate systems, analytics, feature flags, operational monitoring, and Expo/mobile compatibility.",
    projectHref: "/work/roamthecities",
    projectLabel: "View RoamTheCities case study",
    liveDemo: roamTheCitiesProduct.liveUrl,
    liveLabel: "Visit RoamTheCities",
    caseStudy: roamTheCitiesProduct.caseStudyPath,
    caseStudyLabel: "Read the RoamTheCities case study",
    serviceHref: "/services",
    serviceLabel: "Product MVP Package",
    accent: "sky"
  },
  {
    name: sportsPredictorProduct.name,
    slug: sportsPredictorProduct.slug,
    category: sportsPredictorProduct.category,
    status: "Prospective forecasting MVP",
    integrityLabel: "ClearStack-developed statistical product with immutable pregame artifacts",
    description: sportsPredictorProduct.description,
    problem:
      "Sports forecasts are easy to present without showing whether future results leaked into training, when the prediction was created, or whether a published output changed later.",
    solution:
      "ClearStack built a leakage-safe NFL prediction engine, chronological backtests, immutable pregame run artifacts, checksum verification, and a responsive Next.js product interface.",
    deliverables: [
      "Chronological NFL modeling pipeline",
      "Rolling-origin benchmark and calibration reports",
      "Immutable timestamped prediction artifacts",
      "Manifest-validated responsive Next.js website"
    ],
    services: ["Data product strategy", "Statistical workflow engineering", "Transparent reporting UX", "Next.js product delivery"],
    techNotes:
      "Python and scikit-learn generate transparent baseline forecasts; Next.js reads committed pregame artifacts only after validating manifest byte sizes and SHA-256 checksums.",
    projectHref: sportsPredictorProduct.caseStudyPath,
    projectLabel: "View Sports Predictor case study",
    liveDemo: sportsPredictorProduct.liveUrl,
    liveLabel: "Open live predictor",
    caseStudy: sportsPredictorProduct.caseStudyPath,
    caseStudyLabel: "Read the Sports Predictor case study",
    serviceHref: "/services",
    serviceLabel: "Product MVP Package",
    accent: "cyan"
  },
  {
    name: "AI Fashion Model",
    slug: "ai-fashion-model",
    category: "AI-assisted tool prototype",
    status: "Static prototype concept",
    integrityLabel: "Static AI-assisted creative workflow proof",
    description:
      "A structured creative workflow for fashion, beauty, creator, and marketing teams to plan AI-assisted concepts before production AI complexity.",
    problem:
      "AI creative ideas can feel vague or risky when teams jump straight to generation without defining the campaign, prompt structure, review criteria, disclosure, or rights checks.",
    solution:
      "ClearStack designed a static workflow that guides campaign type, visual direction, styling, prompt-builder preview, sample concepts, responsible AI boundaries, and a future production roadmap.",
    deliverables: [
      "AI-assisted fashion concept proof page",
      "Structured prompt-builder preview",
      "Sample concept cards and responsible AI notice",
      "Case study and AI-powered service connection"
    ],
    services: ["AI-powered tool prototyping", "Workflow design", "Responsible-use UX", "Future production planning"],
    techNotes:
      "Useful where the workflow matters before the model integration. No live AI image-generation service, uploads, database, auth, payments, external APIs, or environment variables are connected.",
    projectHref: "/work/ai-fashion-model",
    projectLabel: "View AI Fashion Model proof page",
    liveDemo: undefined,
    liveLabel: undefined,
    caseStudy: "/work/ai-fashion-model/case-study",
    caseStudyLabel: "Read the AI Fashion Model case study",
    serviceHref: "/services/ai-powered-tool",
    serviceLabel: "AI-Powered Tool Build",
    accent: "fuchsia"
  },
  {
    name: "MSW Application Review",
    slug: "msw-application-review",
    category: "Internal workflow dashboard",
    status: "Live mock-data dashboard demo",
    integrityLabel: "Public-safe mock-data dashboard demo",
    description:
      "A public-safe internal dashboard demo for applicant workflow, review queues, reviewer assignments, reports, admin previews, and settings planning.",
    problem:
      "Sensitive review workflows can become scattered across spreadsheets, emails, PDFs, notes, and manual reviewer coordination while still needing strict privacy boundaries.",
    solution:
      "ClearStack designed a mock-data-only dashboard proof with reviewer queues, applicant status tracking, review workflow previews, assignments, reporting, exports, admin settings, and a demo-safety route.",
    deliverables: [
      "Live public mock-data dashboard demo",
      "Applicant queue, detail, review, assignment, reporting, and settings previews",
      "Case study with screenshot tour and safety notes",
      "Privacy-safe positioning with fictional applicant data only"
    ],
    services: ["Internal workflow dashboard", "Operations tool planning", "Privacy-conscious UX", "Public-safe demo preparation"],
    techNotes:
      "Helpful for App Router-style dashboard route planning, mock exports, reviewer workflow structure, and safe public demos that avoid private applicant records or confidential review notes.",
    projectHref: "/work/msw-application-review",
    projectLabel: "View MSW Application Review proof page",
    liveDemo: mswApplicationReviewDemoUrl,
    liveLabel: "View MSW live mock-data dashboard demo",
    caseStudy: "/work/msw-application-review/case-study",
    caseStudyLabel: "Read the MSW Application Review case study",
    serviceHref: "/services",
    serviceLabel: "Internal Dashboard Build",
    accent: "emerald"
  }
];

const accentStyles = {
  cyan: {
    border: "border-cyan-300/25",
    badge: "border-cyan-300/40 bg-cyan-300/[0.08] text-cyan-100",
    panel: "border-cyan-300/20 bg-cyan-300/[0.05]",
    button: "bg-cyanGlow text-slate-950 hover:bg-emeraldLift",
    text: "text-cyanGlow"
  },
  rose: {
    border: "border-rose-200/25",
    badge: "border-rose-200/40 bg-rose-200/[0.08] text-rose-100",
    panel: "border-rose-200/20 bg-rose-200/[0.06]",
    button: "bg-rose-200 text-[#130d14] hover:bg-amber-100",
    text: "text-rose-200"
  },
  fuchsia: {
    border: "border-fuchsia-200/25",
    badge: "border-fuchsia-200/40 bg-fuchsia-200/[0.08] text-fuchsia-100",
    panel: "border-fuchsia-200/20 bg-fuchsia-200/[0.06]",
    button: "bg-cyanGlow text-slate-950 hover:bg-emeraldLift",
    text: "text-fuchsia-200"
  },
  emerald: {
    border: "border-emerald-300/25",
    badge: "border-emerald-300/40 bg-emerald-300/[0.08] text-emerald-100",
    panel: "border-emerald-300/20 bg-emerald-300/[0.05]",
    button: "bg-cyanGlow text-slate-950 hover:bg-emeraldLift",
    text: "text-emeraldLift"
  },
  sky: {
    border: "border-sky-200/25",
    badge: "border-sky-200/40 bg-sky-200/[0.08] text-sky-100",
    panel: "border-sky-200/20 bg-sky-200/[0.05]",
    button: "bg-cyanGlow text-slate-950 hover:bg-emeraldLift",
    text: "text-sky-200"
  }
};

const portfolioSteps = [
  {
    title: "Start with the closest proof project",
    text: "Pick the example that resembles your idea: a product MVP, storefront, AI-assisted workflow, internal dashboard, or website/app refresh."
  },
  {
    title: "Read the case study",
    text: "Use the case study to see what was built, what was intentionally deferred, and which guardrails shaped the first version."
  },
  {
    title: "Compare the service fit",
    text: "Each card connects the demonstrated capability to a ClearStack service so you can quickly find the right engagement path."
  },
  {
    title: "Build something similar",
    text: "Use the Start Project flow to describe the similar outcome you want, then confirm scope before any development work begins."
  }
];

export const metadata: Metadata = {
  ...createSeoMetadata({
    title: "Proof Projects | ClearStack Studio",
    description:
      "Explore ClearStack Studio proof projects across software MVPs, storefronts, AI-assisted tools, and internal workflow dashboards.",
    path: "/projects",
    image: socialImages.projects,
    imageAlt: "ClearStack Studio proof projects social preview for software MVPs, storefronts, AI-assisted tools, and dashboards."
  })
};

export default function ProjectsPage() {
  return (
    <main className="bg-slateInk">
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
          Projects Dashboard
        </p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Proof projects that show what ClearStack Studio can build next.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              ClearStack Studio uses proof projects to demonstrate practical capabilities without inventing client results. Browse focused examples across MVP software, storefront MVPs, AI-assisted tool prototypes, and internal workflow dashboards, then start a similar project with clear expectations.
            </p>
          </div>
          <aside className="border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
            <p className="text-sm font-semibold text-cyan-100">Portfolio integrity</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Proof projects are ClearStack-owned examples unless a page says otherwise. Fictional brands, mock-data dashboards, and static demonstrations are labeled clearly. No fabricated revenue, adoption, testimonials, or client metrics are claimed.
            </p>
          </aside>
        </div>

        <div className="mt-10 flex flex-wrap gap-3" aria-label="Project category overview">
          {categoryChips.map((chip) => (
            <span
              className="border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-200"
              key={chip}
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <TrackedLink
            className="focus-ring inline-flex min-h-11 items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
            ctaLocation="projects_hero"
            eventLabel="projects_hero_start_project"
            eventName="start_project_click"
            href="/start"
          >
            Start a similar project
          </TrackedLink>
          <Link
            className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
            href="/services"
          >
            Match projects to services
          </Link>
          <Link
            className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
            href="/how-we-work"
          >
            See how the build works
          </Link>
          <Link
            className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
            href="/results"
          >
            View demonstrated outcomes
          </Link>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            Proof-project approach
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A portfolio overview for comparing capabilities, not a page of unsupported claims.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {proofApproach.map((item) => (
              <article className="border border-white/10 bg-white/[0.04] p-5" key={item.title}>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
              Project Matrix
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Compare each project by problem, solution, service fit, and next action.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              className="focus-ring inline-flex min-h-11 items-center justify-center border border-cyan-300/40 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyanGlow hover:text-slate-950"
              href="/work"
            >
              View case-study portfolio
            </Link>
            <Link
              className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
              href="/pricing"
            >
              Review pricing guidance
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-6">
          {projects.map((project) => {
            const styles = accentStyles[project.accent as keyof typeof accentStyles];

            return (
              <article
                className={`border bg-white/[0.04] p-5 shadow-glow/20 sm:p-6 ${styles.border}`}
                key={project.name}
              >
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.15fr_0.9fr]">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      <span className={`border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${styles.badge}`}>
                        {project.category}
                      </span>
                      <span className="border border-white/10 bg-slateInk/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
                        Project status: {project.status}
                      </span>
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-white sm:text-3xl">
                      {project.name}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-slate-300">
                      {project.description}
                    </p>
                    <p className={`mt-5 border p-4 text-sm font-semibold leading-6 ${styles.panel} ${styles.text}`}>
                      {project.integrityLabel}
                    </p>
                  </div>

                  <div className="grid gap-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <section className="border border-white/10 bg-slateInk/60 p-4">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                          Business problem or opportunity
                        </h4>
                        <p className="mt-3 text-sm leading-6 text-slate-200">{project.problem}</p>
                      </section>
                      <section className="border border-white/10 bg-slateInk/60 p-4">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                          Solution ClearStack designed
                        </h4>
                        <p className="mt-3 text-sm leading-6 text-slate-200">{project.solution}</p>
                      </section>
                    </div>

                    <section className="border border-white/10 bg-slateInk/60 p-4">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        Key features and deliverables
                      </h4>
                      <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-300 sm:grid-cols-2">
                        {project.deliverables.map((item) => (
                          <li className="flex gap-3" key={item}>
                            <span aria-hidden="true" className={styles.text}>-</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>

                  <div className="flex flex-col gap-4">
                    <section className="border border-white/10 bg-slateInk/60 p-4">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        Relevant services provided
                      </h4>
                      <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-300">
                        {project.services.map((service) => (
                          <li key={service}>{service}</li>
                        ))}
                      </ul>
                      <TrackedLink
                        className="focus-ring mt-4 inline-flex min-h-11 items-center justify-center border border-cyan-300/40 px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyanGlow hover:text-slate-950"
                        ctaLocation="projects_matrix_related_service"
                        eventLabel={`projects_${project.slug}_related_service`}
                        eventName="service_package_click"
                        href={project.serviceHref}
                        projectSlug={project.slug}
                        serviceCategory={project.serviceLabel}
                      >
                        {project.serviceLabel}
                      </TrackedLink>
                    </section>

                    <section className="border border-white/10 bg-slateInk/60 p-4">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        Technology notes
                      </h4>
                      <p className="mt-3 text-sm leading-6 text-slate-300">{project.techNotes}</p>
                    </section>

                    <div className="grid gap-3">
                      <Link
                        className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-4 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
                        href={project.projectHref}
                      >
                        {project.projectLabel}
                      </Link>
                      {project.liveDemo ? (
                        <TrackedLink
                          className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-4 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
                          ctaLocation="projects_matrix_card"
                          eventLabel={`projects_${project.slug}_live_demo`}
                          eventName="live_demo_click"
                          href={project.liveDemo}
                          projectSlug={project.slug}
                          projectType={project.category}
                        >
                          {project.liveLabel}
                        </TrackedLink>
                      ) : (
                        <span className="inline-flex min-h-11 items-center justify-center border border-white/15 px-4 py-3 text-center text-sm font-semibold text-slate-300">
                          Website coming soon
                        </span>
                      )}
                      <TrackedLink
                        className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-4 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
                        ctaLocation="projects_matrix_card"
                        eventLabel={`projects_${project.slug}_case_study`}
                        eventName="case_study_click"
                        href={project.caseStudy}
                        projectSlug={project.slug}
                        projectType={project.category}
                      >
                        {project.caseStudyLabel}
                      </TrackedLink>
                      <TrackedLink
                        className={`focus-ring inline-flex min-h-11 items-center justify-center px-4 py-3 text-center text-sm font-semibold transition ${styles.button}`}
                        ctaLocation="projects_matrix_build_similar"
                        eventLabel={`projects_${project.slug}_build_similar`}
                        eventName="start_project_click"
                        href="/start"
                        projectSlug={project.slug}
                        projectType={project.category}
                      >
                        Build something similar
                      </TrackedLink>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            How to use this portfolio
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Move from inspiration to a scoped inquiry.
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
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
              Supporting links
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Compare the portfolio with services, process, pricing, and FAQs.
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Link className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white" href="/services">
                View services
              </Link>
              <Link className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white" href="/how-we-work">
                Review how we work
              </Link>
              <Link className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white" href="/pricing">
                Review pricing guidance
              </Link>
              <Link className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white" href="/faq">
                Read FAQ
              </Link>
            </div>
          </article>
          <article className="border border-emerald-300/20 bg-emerald-300/[0.05] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
              Qualification note
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Choose a similar proof project, then confirm scope before development.
            </h2>
            <p className="mt-5 text-sm leading-6 text-slate-300 sm:text-base">
              The strongest inquiries reference the closest example, the business goal, the first useful version, required features, timeline, and any constraints. ClearStack does not assume pricing, timeline, technical architecture, or delivery terms until discovery confirms the scope.
            </p>
          </article>
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
              If one of these proof projects matches the direction you want, send a focused inquiry through the Start Project funnel. The current inquiry workflow opens a reviewable email draft and does not create an automatic backend submission.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 lg:mt-0">
            <TrackedLink
              className="focus-ring inline-flex min-h-11 items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              ctaLocation="projects_bottom_cta"
              eventLabel="projects_bottom_start_project"
              eventName="start_project_click"
              href="/start"
            >
              Start a project like these
            </TrackedLink>
            <Link
              className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
              href="/faq"
            >
              Read project FAQ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
