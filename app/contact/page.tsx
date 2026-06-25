import type { Metadata } from "next";
import Link from "next/link";

const contactReasons = [
  "A new website or refresh",
  "An e-commerce storefront",
  "An MVP for a product idea",
  "A mobile app prototype",
  "An AI workflow or internal tool"
];

const projectDetails = [
  "What you want to build",
  "Your audience or customers",
  "Your ideal timeline",
  "Any examples, notes, or current tools"
];

const inquiryPaths = [
  {
    title: "MVP build",
    text: "For product ideas like CardScope that need a focused first version, live demo, pitch page, and validation path.",
    href: "mailto:hello@clearstack.studio?subject=MVP%20project%20inquiry%20for%20ClearStack%20Studio",
    cta: "Start an MVP inquiry"
  },
  {
    title: "Storefront build",
    text: "For retail, beauty, boutique, or product concepts like ClearBloom Beauty that need a polished storefront MVP.",
    href: "mailto:hello@clearstack.studio?subject=Storefront%20project%20inquiry%20for%20ClearStack%20Studio",
    cta: "Start a storefront inquiry"
  },
  {
    title: "Website or app refresh",
    text: "For small businesses and creators who need a cleaner site, stronger conversion flow, or mobile-ready product experience.",
    href: "mailto:hello@clearstack.studio?subject=Website%20or%20app%20project%20inquiry%20for%20ClearStack%20Studio",
    cta: "Start a website inquiry"
  }
];

const proofLinks = [
  {
    title: "CardScope case study",
    text: "Live card collection MVP and ClearStack Studio proof point.",
    href: "/work/cardscope/case-study"
  },
  {
    title: "ClearBloom Beauty case study",
    text: "Storefront MVP for a perfume and cosmetics concept.",
    href: "/work/clearbloom-beauty/case-study"
  }
];

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact ClearStack Studio to discuss a website, mobile app, AI tool, storefront, or MVP project."
};

export default function ContactPage() {
  return (
    <main className="bg-slateInk">
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Tell ClearStack Studio what you want to build next.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Share the idea, goal, or messy first draft. ClearStack Studio can
            help turn it into a clear plan and a modern digital product.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {contactReasons.map((reason) => (
              <div
                className="border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
                key={reason}
              >
                {reason}
              </div>
            ))}
          </div>
        </div>

        <div className="border border-white/10 bg-white/[0.04] p-6 shadow-glow sm:p-8">
          <h2 className="text-2xl font-semibold text-white">
            Project inquiry
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Email is the simplest first step for this version of the site. A
            short note is enough to begin.
          </p>
          <Link
            className="focus-ring mt-8 inline-flex w-full items-center justify-center bg-cyanGlow px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
            href="mailto:hello@clearstack.studio?subject=Project%20inquiry%20for%20ClearStack%20Studio"
          >
            Email hello@clearstack.studio
          </Link>
          <div className="mt-6 border border-emerald-300/20 bg-emerald-300/[0.06] p-4">
            <p className="text-sm font-medium leading-6 text-emerald-50">
              Best for early-stage ideas, practical rebuilds, focused MVPs, and
              storefront concepts where the next step needs to get clear fast.
            </p>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-sm font-semibold text-slate-100">
              Helpful details to include
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              {projectDetails.map((detail) => (
                <li className="flex gap-3" key={detail}>
                  <span aria-hidden="true" className="text-cyanGlow">
                    -
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            Choose a starting point
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Pick the inquiry path that best matches your project.
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {inquiryPaths.map((path) => (
              <article
                className="border border-white/10 bg-white/[0.04] p-6"
                key={path.title}
              >
                <h3 className="text-xl font-semibold text-white">
                  {path.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {path.text}
                </p>
                <Link
                  className="focus-ring mt-6 inline-flex items-center justify-center border border-cyan-300/40 px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyanGlow hover:text-slate-950"
                  href={path.href}
                >
                  {path.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="border border-cyan-300/20 bg-cyan-300/[0.05] p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            Proof before you reach out
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Review recent ClearStack Studio builds before starting your project.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {proofLinks.map((link) => (
              <Link
                className="focus-ring block border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300/50"
                href={link.href}
                key={link.title}
              >
                <h3 className="text-lg font-semibold text-white">
                  {link.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {link.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
