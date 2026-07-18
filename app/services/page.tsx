import type { Metadata } from "next";
import Link from "next/link";
import { ServicePackages } from "@/components/ServicePackages";
import { StorefrontCta } from "@/components/StorefrontCta";
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
    text: "From card-collector product idea to live MVP proof point.",
    href: "/work/cardscope/case-study"
  },
  {
    title: "ClearBloom Beauty case study",
    text: "A fictional, inquiry-based storefront MVP that shows the Storefront MVP Package pattern for beauty, wellness, fashion, lifestyle, food/product, boutique ecommerce, and creator merchandise brands.",
    href: "/work/clearbloom-beauty/case-study"
  },
  {
    title: "AI Fashion Model case study",
    text: "An AI-assisted creative and product visualization prototype for creators, fashion, retail, and visual concept workflows.",
    href: "/work/ai-fashion-model/case-study"
  },
  {
    title: "MSW Application Review case study",
    text: "A live mock-data internal workflow dashboard demo for application review, reviewer assignment flows, status tracking, reports, export planning, and privacy-conscious dashboard design.",
    href: "/work/msw-application-review/case-study"
  }
];

const specialtyServices = [
  {
    title: "AI-powered tool prototypes",
    text: "AI Fashion Model shows how a creative idea can become a prompt-based MVP for fashion concepts, creator workflows, retail ideation, and visual product prototyping before real AI APIs are connected.",
    href: "/work/ai-fashion-model/case-study",
    cta: "See AI tool proof"
  },
  {
    title: "Internal workflow dashboards",
    text: "A live mock-data dashboard demo for organizing reviewer queues, applicant statuses, review notes, reports, and administrative workflows using fictional applicant data only.",
    href: mswApplicationReviewDemoUrl,
    cta: "View live dashboard demo"
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
            href="/start"
          >
            Start a Project
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
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
          Expanded proof areas
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          ClearStack Studio also builds AI-assisted tools and internal workflow dashboards.
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
              <Link
                className="focus-ring mt-6 inline-flex items-center justify-center border border-cyan-300/40 px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyanGlow hover:text-slate-950"
                href={service.href}
              >
                {service.cta}
              </Link>
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
            <Link
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              href="/contact"
            >
              Start a storefront inquiry
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-amber-100/40 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:bg-amber-100 hover:text-slate-950"
              href={clearBloomLiveUrl}
            >
              View live storefront demo
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-amber-100/40 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:bg-amber-100 hover:text-slate-950"
              href="/work/clearbloom-beauty/case-study"
            >
              Read ClearBloom case study
            </Link>
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
