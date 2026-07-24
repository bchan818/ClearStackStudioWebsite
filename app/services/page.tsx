import type { Metadata } from "next";
import Link from "next/link";
import { ServicePackages } from "@/components/ServicePackages";
import { StorefrontCta } from "@/components/StorefrontCta";
import { TrackedLink } from "@/components/TrackedLink";
import { clearBloomLiveUrl, mswApplicationReviewDemoUrl } from "@/lib/siteLinks";

const processSteps = [
  {
    title: "Clarify",
    text: "Define the audience, offer, success path, and smallest useful first version."
  },
  {
    title: "Build",
    text: "Create the product, storefront, or website surface with practical scope and clear guardrails."
  },
  {
    title: "Launch",
    text: "Deploy the live site or MVP, verify key routes, and make the next action obvious."
  },
  {
    title: "Improve",
    text: "Use proof pages, FAQs, case studies, and better CTAs to keep improving conversion."
  }
];

const inquiryBenefits = [
  {
    title: "Validate demand first",
    text: "Present products, bundles, pricing, and brand story professionally before investing in full ecommerce infrastructure."
  },
  {
    title: "Keep the MVP honest",
    text: "The storefront can collect qualified interest without pretending payments, inventory, shipping, or tax systems are live."
  },
  {
    title: "Upgrade when ready",
    text: "Once the offer is clearer, the same storefront can move toward Shopify, Stripe, inventory, shipping, tax, email, and automation work."
  }
];

const proofLinks = [
  {
    title: "CardScope case study",
    slug: "cardscope",
    eventName: "case_study_click",
    text: "From card-collector product idea to live MVP proof point.",
    href: "/work/cardscope/case-study"
  },
  {
    title: "ClearBloom Beauty case study",
    slug: "clearbloom-beauty",
    eventName: "case_study_click",
    text: "A fictional, inquiry-based storefront MVP that shows the Storefront MVP Package pattern for beauty, wellness, fashion, lifestyle, food/product, boutique ecommerce, and creator merchandise brands.",
    href: "/work/clearbloom-beauty/case-study"
  },
  {
    title: "AI Fashion Model case study",
    slug: "ai-fashion-model",
    eventName: "case_study_click",
    text: "An AI-assisted creative and product visualization prototype for creators, fashion, retail, and visual concept workflows.",
    href: "/work/ai-fashion-model/case-study"
  },
  {
    title: "MSW Application Review live demo",
    slug: "msw-application-review",
    eventName: "live_demo_click",
    text: "A live mock-data internal dashboard and workflow-tool proof for review queues, assignments, reporting, operational software, and privacy-conscious dashboard design.",
    href: mswApplicationReviewDemoUrl
  },
  {
    title: "MSW Application Review case study",
    slug: "msw-application-review",
    eventName: "case_study_click",
    text: "Case study for the public-safe internal workflow dashboard demo and the service pattern behind it.",
    href: "/work/msw-application-review/case-study"
  }
];

const specialtyServices = [
  {
    title: "AI-powered tool prototypes",
    slug: "ai-fashion-model",
    eventName: "case_study_click",
    text: "AI Fashion Model shows how a creative idea can become a prompt-based MVP for fashion concepts, creator workflows, retail ideation, and visual product prototyping before real AI APIs are connected.",
    href: "/work/ai-fashion-model/case-study",
    cta: "See AI tool proof"
  },
  {
    title: "Internal dashboards, workflow tools, and operational software",
    slug: "msw-application-review",
    eventName: "live_demo_click",
    text: "MSW Application Review shows how ClearStack can turn manual review, assignment, reporting, and operations workflows into a live mock-data dashboard proof before adding real authentication, databases, or integrations.",
    href: mswApplicationReviewDemoUrl,
    cta: "View live dashboard demo"
  }
];

const clientDeliverables = [
  "Scoped first-version plan",
  "Responsive interface",
  "Core pages and workflows",
  "Reusable components",
  "Deployment setup",
  "Source-code handoff",
  "Basic project documentation",
  "Lint/build verification",
  "Launch-readiness checks",
  "Agreed revision rounds",
  "Short post-launch support period"
];

const serviceDeliverables = [
  {
    service: "Product MVP",
    description: "A focused product proof for validating a useful first workflow before a larger platform build.",
    items: [
      "Core user journey",
      "Product landing page",
      "Primary workflow",
      "Dashboard or structured interface",
      "Mock or production-ready data architecture, depending on scope",
      "Deployment-ready build"
    ]
  },
  {
    service: "Storefront MVP",
    description: "A polished product-brand surface for presenting an offer and collecting qualified interest honestly.",
    items: [
      "Branded storefront",
      "Product catalog",
      "Product detail pages",
      "Inquiry or commerce-ready flow",
      "Policies and customer-information pages",
      "Future Shopify/Stripe upgrade path"
    ]
  },
  {
    service: "AI-Powered Tool",
    description: "A practical prototype for testing an AI-assisted workflow before connecting production AI services.",
    items: [
      "Focused AI-assisted workflow",
      "Prompt/input interface",
      "Output/results presentation",
      "Usage boundaries",
      "Prototype evaluation path",
      "Future API integration plan"
    ]
  },
  {
    service: "Internal Workflow Dashboard",
    description: "A structured interface for turning manual operations into clear status, review, and action paths.",
    items: [
      "Dashboard navigation",
      "Record/status views",
      "Review or operational workflow",
      "Filters, summaries, and action states",
      "Mock-data or approved-data structure",
      "Privacy-conscious interface planning"
    ]
  },
  {
    service: "Website/App Refresh",
    description: "A focused improvement pass for an existing experience that needs clearer navigation, UI, and conversion paths.",
    items: [
      "Content and navigation cleanup",
      "Responsive UI improvements",
      "Conversion-path improvements",
      "Performance and accessibility review",
      "Deployment and handoff"
    ]
  }
];

const faqs = [
  {
    question: "How long does a project usually take?",
    answer:
      "Timelines depend on scope, content readiness, feedback speed, and whether the build is a simple static proof, storefront, MVP workflow, or more complex dashboard. ClearStack confirms a practical timeline after reviewing the requested first version."
  },
  {
    question: "What information do you need to begin?",
    answer:
      "A useful inquiry includes the project goal, audience, preferred project type, must-have features, existing links if available, timeline goals, and budget range. Sensitive credentials or private data should not be submitted through the public inquiry workflow."
  },
  {
    question: "Do you handle both design and development?",
    answer:
      "Yes. ClearStack can shape the page structure, responsive interface, component system, and implementation together for a focused first version. Brand identity, illustration, photography, or advanced UX research can be scoped separately if needed."
  },
  {
    question: "Who owns the final code and assets?",
    answer:
      "Ownership details are confirmed in the project agreement. In general, the handoff can include the source code and project documentation for the approved scope, while third-party assets, fonts, services, or licenses follow their own terms."
  },
  {
    question: "Are domain, hosting, and third-party fees included?",
    answer:
      "Third-party services and recurring fees are separate unless the project agreement states otherwise. This can include domains, hosting, email, analytics, payment providers, SaaS tools, stock assets, and other vendor costs."
  },
  {
    question: "Can you add payments, accounts, or databases?",
    answer:
      "Yes, but payments, authentication, databases, external APIs, and production integrations require separate scope, planning, and security review. They are not included by default in a static proof or inquiry-based MVP."
  },
  {
    question: "How many revisions are included?",
    answer:
      "Revision rounds are agreed before the project begins. The goal is to keep feedback focused on the approved first-version scope so the project can move toward launch without uncontrolled expansion."
  },
  {
    question: "What happens after launch?",
    answer:
      "After launch, ClearStack can provide a short support period for small fixes, handoff questions, and launch checks. Larger new features, integrations, or content expansions are scoped as follow-up work."
  },
  {
    question: "Can the MVP be expanded later?",
    answer:
      "Yes. MVPs are built to create useful proof first, then expand later based on feedback, demand, and budget. Common next steps include richer dashboards, real data, payments, accounts, automations, or third-party integrations."
  },
  {
    question: "Can you improve an existing website or app?",
    answer:
      "Yes. A refresh project can improve content structure, navigation, responsive UI, accessibility, performance, conversion paths, and deployment readiness while preserving what already works."
  },
  {
    question: "Do you work with confidential or sensitive data?",
    answer:
      "Sensitive data requires a separate privacy and security discussion before any access is shared. Do not send credentials, private records, applicant data, customer lists, health information, financial details, or other sensitive material through the public inquiry workflow."
  },
  {
    question: "Is submitting an inquiry a contract?",
    answer:
      "No. Submitting an inquiry is not a binding contract. Pricing, ownership, timeline, included revision rounds, and final scope are confirmed only after review and agreement."
  }
];

export const metadata: Metadata = {
  title: "Services",
  description:
    "ClearStack Studio service packages for MVP launches, storefront MVPs, website refreshes, app refreshes, and practical launch-ready digital products."
};

export default function ServicesPage() {
  return (
    <main className="bg-slateInk">
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
          Services
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Business-ready packages for launching and improving digital products.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          ClearStack Studio helps founders, creators, small businesses, and product brands move from rough idea to a clean, responsive, launch-ready digital experience.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <TrackedLink
            className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
            ctaLocation="services_hero"
            eventLabel="services_hero_start_project"
            eventName="start_project_click"
            href="/start"
          >
            Start a Project
          </TrackedLink>
          <Link
            className="focus-ring inline-flex items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
            href="/work"
          >
            View work
          </Link>
        </div>
      </section>

      <ServicePackages />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
              Deliverables
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              What clients receive
            </h2>
            <p className="mt-5 text-sm leading-6 text-slate-300 sm:text-base">
              Every engagement is scoped around a focused, useful first version with clear deliverables, working code, launch checks, and a practical handoff.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              The exact scope, revision rounds, support window, ownership details, and third-party costs are confirmed before work begins.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {clientDeliverables.map((deliverable) => (
              <div
                className="border border-white/10 bg-white/[0.04] p-4 text-sm font-medium leading-6 text-slate-200"
                key={deliverable}
              >
                <span aria-hidden="true" className="mr-2 text-cyanGlow">-</span>
                {deliverable}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            Service-specific deliverables
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Representative outcomes by project type.
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
            These are practical examples, not fixed bundles. Final deliverables depend on approved scope, available content, technical complexity, and budget.
          </p>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {serviceDeliverables.map((service) => (
              <article className="border border-white/10 bg-white/[0.04] p-6" key={service.service}>
                <h3 className="text-2xl font-semibold text-white">
                  {service.service}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {service.description}
                </p>
                <ul className="mt-5 grid gap-2 text-sm leading-6 text-slate-300 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <li className="border border-white/10 bg-slateInk/70 px-3 py-2" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
          Expanded proof areas
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          ClearStack Studio also builds AI-assisted tools, internal dashboards, workflow tools, and operational software.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {specialtyServices.map((service) => (
            <article className="border border-white/10 bg-white/[0.04] p-6" key={service.title}>
              <h3 className="text-2xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                {service.text}
              </p>
              <TrackedLink
                className="focus-ring mt-6 inline-flex items-center justify-center border border-cyan-300/40 px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyanGlow hover:text-slate-950"
                ctaLocation="services_expanded_proof"
                eventLabel={`services_${service.slug}`}
                eventName={service.eventName as "case_study_click" | "live_demo_click"}
                href={service.href}
                projectSlug={service.slug}
                serviceCategory={service.title}
              >
                {service.cta}
              </TrackedLink>
            </article>
          ))}
        </div>
      </section>

      <section
        className="scroll-mt-24 px-6 py-16 sm:py-20 lg:px-8"
        id="storefront-mvp"
      >
        <div className="mx-auto max-w-6xl border border-amber-100/20 bg-amber-100/[0.06] p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-100">
            Storefront MVP Package
          </p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Launch an inquiry-ready storefront before full ecommerce.
              </h2>
              <p className="mt-5 text-sm leading-6 text-slate-300 sm:text-base">
                The Storefront MVP Package gives beauty, wellness, fashion, lifestyle, food/product, boutique ecommerce, and creator merchandise brands a polished way to present products, validate demand, and collect qualified interest before Shopify, Stripe, inventory, shipping, tax, and automation systems are connected.
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">
                ClearBloom Beauty is the live storefront MVP proof: a fictional premium beauty brand with product pages, inquiry checkout, policies, and a future ecommerce upgrade path.
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">
                It is designed to be honest: visitors can explore products and send an inquiry, but the site does not pretend to process payments, reserve inventory, calculate shipping, or submit taxes.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="border border-white/10 bg-slateInk/70 p-5">
                <h3 className="text-lg font-semibold text-white">Built for</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Premium product concepts, small catalogs, launch tests, seasonal drops, creator merch, boutique retail, and early ecommerce brands.
                </p>
              </div>
              <div className="border border-white/10 bg-slateInk/70 p-5">
                <h3 className="text-lg font-semibold text-white">Not live commerce yet</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  No real payment processing, Shopify, Stripe, inventory management, shipping, tax logic, customer accounts, or external APIs are included until that scope is approved.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-8">
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              Why inquiry-based first?
            </h3>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
              Before connecting full ecommerce infrastructure, an inquiry-based storefront lets a brand present products professionally, collect qualified interest, and learn what customers actually want — without pretending payments, inventory, shipping, or tax systems are live.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {inquiryBenefits.map((benefit) => (
                <article
                  className="border border-white/10 bg-slateInk/70 p-5"
                  key={benefit.title}
                >
                  <h4 className="text-lg font-semibold text-white">
                    {benefit.title}
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {benefit.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <TrackedLink
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              ctaLocation="services_storefront_mvp"
              eventLabel="services_storefront_mvp_start_project"
              eventName="service_package_click"
              href="/start"
              serviceCategory="Storefront MVP Package"
            >
              Start a storefront inquiry
            </TrackedLink>
            <TrackedLink
              className="focus-ring inline-flex items-center justify-center border border-amber-100/40 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:bg-amber-100 hover:text-slate-950"
              ctaLocation="services_storefront_mvp"
              eventLabel="services_clearbloom_live_demo"
              eventName="live_demo_click"
              href={clearBloomLiveUrl}
              projectSlug="clearbloom-beauty"
              serviceCategory="Storefront MVP Package"
            >
              View live storefront demo
            </TrackedLink>
            <TrackedLink
              className="focus-ring inline-flex items-center justify-center border border-amber-100/40 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:bg-amber-100 hover:text-slate-950"
              ctaLocation="services_storefront_mvp"
              eventLabel="services_clearbloom_case_study"
              eventName="case_study_click"
              href="/work/clearbloom-beauty/case-study"
              projectSlug="clearbloom-beauty"
              serviceCategory="Storefront MVP Package"
            >
              Read ClearBloom case study
            </TrackedLink>
          </div>
        </div>
      </section>

      <StorefrontCta
        eyebrow="Storefront MVP Package proof"
        title="ClearBloom Beauty shows the package as a client-facing storefront demo."
        text="The case study explains how a fictional beauty brand became a premium inquiry-based storefront MVP with catalog structure, product detail pages, policies, and a future Shopify or Stripe upgrade path."
        variant="amber"
        liveHref={clearBloomLiveUrl}
        liveLabel="View live storefront demo"
        proofHref="/work/clearbloom-beauty/case-study"
        proofLabel="See ClearBloom case study"
      />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
          Process
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          A simple path from idea to launch-ready proof.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article className="border border-white/10 bg-white/[0.03] p-5" key={step.title}>
              <p className="text-sm font-semibold text-cyanGlow">0{index + 1}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            FAQ
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Practical questions before starting an inquiry.
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
            These answers keep the first conversation clear. Final pricing, ownership, revision rounds, support, and technical scope are confirmed in the project agreement.
          </p>

          <div className="mt-10 grid gap-3">
            {faqs.map((faq) => (
              <details
                className="group border border-white/10 bg-white/[0.04] p-5 open:border-cyan-300/40"
                key={faq.question}
              >
                <summary className="focus-ring cursor-pointer list-none text-base font-semibold text-white marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    <span>{faq.question}</span>
                    <span
                      aria-hidden="true"
                      className="text-cyanGlow transition group-open:rotate-45"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-10 border border-cyan-300/20 bg-cyan-300/[0.05] p-6 sm:flex sm:items-center sm:justify-between sm:gap-8">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                Ready to scope the first version?
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Start with a focused inquiry, or compare proof projects before choosing the closest path.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-0">
              <TrackedLink
                className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
                ctaLocation="services_faq_cta"
                eventLabel="services_faq_start_project"
                eventName="start_project_click"
                href="/start"
              >
                Start a project
              </TrackedLink>
              <Link
                className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
                href="/projects"
              >
                View proof projects
              </Link>
              <Link
                className="focus-ring inline-flex items-center justify-center border border-emerald-300/40 px-5 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emeraldLift hover:text-slate-950"
                href="/proposal-builder"
              >
                Build proposal draft
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            Proof
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Review recent builds before starting your own.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {proofLinks.map((link) => (
              <TrackedLink
                className="focus-ring block border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300/50"
                ctaLocation="services_proof_grid"
                eventLabel={`services_proof_${link.slug}`}
                eventName={link.eventName as "case_study_click" | "live_demo_click"}
                href={link.href}
                key={link.title}
                projectSlug={link.slug}
              >
                <h3 className="text-lg font-semibold text-white">{link.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{link.text}</p>
              </TrackedLink>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
