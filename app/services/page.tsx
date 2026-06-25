import type { Metadata } from "next";
import Link from "next/link";

const servicePackages = [
  {
    title: "MVP build",
    bestFor: "Founders and creators with a product idea that needs a focused first version.",
    includes: [
      "Landing page or product shell",
      "Demo or prototype workflow",
      "Validation pages and conversion CTAs",
      "Deployment-ready implementation"
    ],
    proof: "CardScope shows this path as a live MVP with demo, pitch, roadmap, and early-access flow.",
    href: "mailto:hello@clearstack.studio?subject=MVP%20build%20inquiry%20for%20ClearStack%20Studio"
  },
  {
    title: "Storefront MVP",
    bestFor: "Retail, beauty, boutique, and product brands that need a polished shopping surface before full commerce setup.",
    includes: [
      "Storefront page and brand positioning",
      "Product catalog and detail pages",
      "Inquiry checkout instead of fake payment",
      "Policies, FAQ, and commerce roadmap"
    ],
    proof: "ClearBloom Beauty shows this path with products, bundles, inquiry checkout, policies, and case-study proof.",
    href: "mailto:hello@clearstack.studio?subject=Storefront%20MVP%20inquiry%20for%20ClearStack%20Studio"
  },
  {
    title: "Website or app refresh",
    bestFor: "Small businesses and teams that need clearer messaging, stronger CTAs, and a more modern digital presence.",
    includes: [
      "Homepage and core page structure",
      "Responsive visual polish",
      "Service or product positioning",
      "Contact and lead-capture paths"
    ],
    proof: "ClearStack Studio uses its own site structure to show portfolio proof, services, contact paths, and launch-ready pages.",
    href: "mailto:hello@clearstack.studio?subject=Website%20or%20app%20refresh%20inquiry%20for%20ClearStack%20Studio"
  }
];

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

const proofLinks = [
  {
    title: "CardScope case study",
    text: "From card-collector product idea to live MVP proof point.",
    href: "/work/cardscope/case-study"
  },
  {
    title: "ClearBloom Beauty case study",
    text: "From perfume and cosmetics idea to storefront MVP.",
    href: "/work/clearbloom-beauty/case-study"
  }
];

export const metadata: Metadata = {
  title: "Services",
  description:
    "ClearStack Studio services for MVP builds, storefront MVPs, websites, app refreshes, and practical launch-ready digital products."
};

export default function ServicesPage() {
  return (
    <main className="bg-slateInk">
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
          Services
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          ClearStack Studio builds focused MVPs, storefronts, websites, and app-ready digital products.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          The best first version is clear, useful, and launchable. Start with a
          practical scope, publish real proof, and improve from there.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
            href="/contact"
          >
            Start a project
          </Link>
          <Link
            className="focus-ring inline-flex items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
            href="/work"
          >
            View work
          </Link>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            Service packages
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Choose the build path that matches your next milestone.
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {servicePackages.map((service) => (
              <article className="border border-white/10 bg-white/[0.04] p-6" key={service.title}>
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{service.bestFor}</p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
                  {service.includes.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <span aria-hidden="true" className="text-cyanGlow">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-6 text-emerald-100">
                  {service.proof}
                </p>
                <Link
                  className="focus-ring mt-6 inline-flex items-center justify-center border border-cyan-300/40 px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyanGlow hover:text-slate-950"
                  href={service.href}
                >
                  Ask about {service.title}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

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
            Proof
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Review recent builds before starting your own.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {proofLinks.map((link) => (
              <Link
                className="focus-ring block border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300/50"
                href={link.href}
                key={link.title}
              >
                <h3 className="text-lg font-semibold text-white">{link.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{link.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
