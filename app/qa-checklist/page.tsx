import type { Metadata } from "next";
import Link from "next/link";

const checklistSections = [
  {
    title: "Live Site Checks",
    items: [
      "Homepage loads without errors",
      "Key routes load",
      "No server error appears",
      "Deployed URL matches the intended project",
      "Vercel deployment is current"
    ]
  },
  {
    title: "Navigation Checks",
    items: [
      "Header links work",
      "Footer links work",
      "CTA buttons work",
      "External demo links open correctly",
      "Case study links work",
      "Contact/start links work"
    ]
  },
  {
    title: "Mobile and Layout Checks",
    items: [
      "Homepage works on mobile",
      "Navigation fits on small screens",
      "Cards stack correctly",
      "Buttons are easy to tap",
      "Text does not overflow",
      "Footer remains readable"
    ]
  },
  {
    title: "CTA and Business Checks",
    items: [
      "Primary CTA is clear",
      "Secondary CTA is clear",
      "Proof project connects to a service",
      "Visitors know what to do next",
      "Contact/start path is easy to find"
    ]
  },
  {
    title: "SEO and Sharing Checks",
    items: [
      "Page title is clear",
      "Metadata description exists",
      "Open Graph/social preview exists if available",
      "Favicon appears",
      "Sitemap exists",
      "Robots file exists"
    ]
  },
  {
    title: "Demo Honesty Checks",
    items: [
      "Mock/demo features are labeled honestly",
      "No fake payment processing is implied",
      "No fake user accounts are implied",
      "No real API/data claims are made unless actually connected",
      "Inquiry/demo flows are clearly described"
    ]
  },
  {
    title: "Deployment Checks",
    items: [
      "`npm run lint` passes",
      "`npm run build` passes",
      "Git working tree is clean",
      "Latest commit is pushed",
      "Vercel deployment succeeds"
    ]
  }
];

const routeGroups = [
  {
    title: "ClearStack Studio",
    description: "Studio portfolio, services, proof dashboard, inquiry paths, and contact routes.",
    routes: ["/", "/services", "/work", "/projects", "/start", "/contact"]
  },
  {
    title: "CardScope",
    description: "Standalone card tracker MVP routes to verify before sharing the product demo.",
    routes: [
      "/",
      "/search",
      "/collection",
      "/watchlist",
      "/pro",
      "/pricing",
      "/seller-tools",
      "/demo",
      "/roadmap",
      "/early-access"
    ]
  },
  {
    title: "ClearBloom Beauty",
    description: "Standalone inquiry-based storefront MVP routes for catalog, checkout, brand, and support pages.",
    routes: [
      "/",
      "/shop",
      "/products/velvet-bloom-eau-de-parfum",
      "/cart",
      "/checkout",
      "/checkout/success",
      "/about",
      "/brand",
      "/policies",
      "/contact"
    ]
  },
  {
    title: "AI Fashion Model",
    description: "Internal ClearStack proof pages for the AI-assisted creative prototype.",
    routes: ["/work/ai-fashion-model", "/work/ai-fashion-model/case-study"]
  },
  {
    title: "MSW Application Review",
    description: "Internal ClearStack proof pages for the mock workflow dashboard case study.",
    routes: ["/work/msw-application-review", "/work/msw-application-review/case-study"]
  }
];

export const metadata: Metadata = {
  title: "Project QA Checklist",
  description:
    "A ClearStack Studio QA checklist for verifying project websites before launch or sharing."
};

export default function QaChecklistPage() {
  return (
    <main className="bg-slateInk">
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
          ClearStack Studio QA
        </p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Project QA Checklist
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Use this checklist to verify that each ClearStack Studio project is functional, clear, responsive, and ready to share.
            </p>
          </div>
          <div className="border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
            <p className="text-sm font-semibold text-cyan-100">Before launch or sharing</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Check routes, navigation, mobile layout, CTAs, SEO basics, demo honesty, and deployment status before sending a link to a client or audience.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
                Checklist Groups
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Run the same quality pass for every proof project.
              </h2>
            </div>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-cyan-300/40 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyanGlow hover:text-slate-950"
              href="/projects"
            >
              Compare proof projects
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {checklistSections.map((section, index) => (
              <article className="border border-white/10 bg-white/[0.04] p-6 shadow-glow/20" key={section.title}>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-cyan-300/30 bg-cyan-300/[0.08] text-sm font-semibold text-cyanGlow">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                    <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-300">
                      {section.items.map((item) => (
                        <li className="flex gap-3" key={item}>
                          <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 border border-emerald-300/60 bg-emerald-300/20" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
          Project-specific routes
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Verify the right route set for each project.
        </h2>
        <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
          Use these route groups as a smoke-test list for the studio site and each standalone MVP before sharing live links.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {routeGroups.map((group) => (
            <article className="border border-white/10 bg-white/[0.04] p-6" key={group.title}>
              <h3 className="text-2xl font-semibold text-white">{group.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{group.description}</p>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {group.routes.map((route) => (
                  <code className="border border-white/10 bg-slateInk/70 px-3 py-2 text-sm text-cyan-100" key={`${group.title}-${route}`}>
                    {route}
                  </code>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-6xl border border-emerald-300/20 bg-emerald-300/[0.05] p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
              Ready to verify
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Check the project before sharing the link.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
              Pair this checklist with live route checks, responsive browser review, and the final lint/build results for a clean handoff.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 lg:mt-0">
            <Link
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              href="/projects"
            >
              View projects
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
              href="/start"
            >
              Start a project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
