import type { Metadata } from "next";
import Link from "next/link";
import { ServicePackages } from "@/components/ServicePackages";

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
