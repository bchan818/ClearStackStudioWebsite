import type { Metadata } from "next";
import Link from "next/link";
import { ServicePackages } from "@/components/ServicePackages";
import { StorefrontCta } from "@/components/StorefrontCta";

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
    text: "From card-collector product idea to live MVP proof point.",
    href: "/work/cardscope/case-study"
  },
  {
    title: "ClearBloom Beauty case study",
    text: "A fictional, inquiry-based storefront MVP that shows the Storefront MVP Package pattern for beauty, wellness, fashion, lifestyle, food/product, boutique ecommerce, and creator merchandise brands.",
    href: "/work/clearbloom-beauty/case-study"
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

      <ServicePackages />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="border border-amber-100/20 bg-amber-100/[0.06] p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-100">
            Storefront MVP strategy
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Why inquiry-based first?
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
            Before connecting full ecommerce infrastructure, an inquiry-based storefront lets a brand present products professionally, collect qualified interest, and learn what customers actually want — without pretending payments, inventory, shipping, or tax systems are live.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {inquiryBenefits.map((benefit) => (
              <article
                className="border border-white/10 bg-slateInk/70 p-5"
                key={benefit.title}
              >
                <h3 className="text-lg font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {benefit.text}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              href="/contact"
            >
              Start a storefront inquiry
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-amber-100/40 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:bg-amber-100 hover:text-slate-950"
              href="/work/clearbloom-beauty/case-study"
            >
              See ClearBloom example
            </Link>
          </div>
        </div>
      </section>

      <StorefrontCta
        eyebrow="Storefront MVP Package proof"
        title="ClearBloom Beauty shows the package as a client-facing storefront demo."
        text="The case study explains how a fictional beauty brand became a premium inquiry-based storefront MVP with catalog structure, product detail pages, policies, and a future Shopify or Stripe upgrade path."
        variant="amber"
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
