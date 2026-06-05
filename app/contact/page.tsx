import type { Metadata } from "next";
import Link from "next/link";

const contactReasons = [
  "A new website or refresh",
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

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact ClearStack Studio to discuss a website, mobile app, AI tool, or MVP project."
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
              Best for early-stage ideas, practical rebuilds, and focused MVPs
              where the next step needs to get clear fast.
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
    </main>
  );
}
