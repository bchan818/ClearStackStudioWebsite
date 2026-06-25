import type { Metadata } from "next";
import Link from "next/link";
import { FeaturedProduct } from "@/components/FeaturedProduct";

const capabilities = [
  "Launch-ready websites",
  "Mobile app prototypes",
  "AI-powered internal tools",
  "MVP strategy and builds"
];

const proofPoints = [
  {
    label: "Approach",
    text: "Start with the smallest useful version, then build toward real user feedback."
  },
  {
    label: "Quality",
    text: "Clean interfaces, responsive layouts, and practical technical choices."
  },
  {
    label: "Fit",
    text: "Best for small teams that need a reliable builder for early product momentum."
  }
];

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore ClearStack Studio work, capabilities, and CardScope, a live card search and collection tracker MVP."
};

export default function WorkPage() {
  return (
    <main className="bg-slateInk">
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            Work
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Practical digital products built with clarity from day one.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            ClearStack Studio partners with small businesses, creators, and
            growing teams to shape ideas into polished websites, apps, tools,
            and MVPs.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability) => (
            <div
              className="border border-white/10 bg-white/[0.03] p-5"
              key={capability}
            >
              <p className="text-sm font-medium text-slate-100">
                {capability}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {proofPoints.map((point) => (
            <article
              className="border border-emerald-300/20 bg-emerald-300/[0.05] p-5"
              key={point.label}
            >
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-emeraldLift">
                {point.label}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {point.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <FeaturedProduct />

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="border border-cyan-300/20 bg-cyan-300/[0.05] p-8 sm:p-10">
          <h2 className="text-2xl font-semibold text-white">
            More project snapshots are coming soon.
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            The first public feature is CardScope, now available as a live MVP.
            As client work and studio products launch, this page will grow into a focused portfolio with
            concise project notes, outcomes, and launch details.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              href="https://cardscope-mvp.vercel.app"
            >
              View CardScope
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
              href="/contact"
            >
              Start a project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
