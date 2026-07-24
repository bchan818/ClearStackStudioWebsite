import type { Metadata } from "next";
import Link from "next/link";
import { ProjectFitAssessment } from "@/components/ProjectFitAssessment";
import { createSeoMetadata, socialImages } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Project Fit Assessment | ClearStack Studio",
  description:
    "Find out whether your idea is best suited for a product MVP, storefront, AI-powered tool, internal dashboard, or website and app refresh.",
  path: "/project-fit",
  image: socialImages.default,
  imageAlt: "ClearStack Studio project fit assessment social preview."
});

export default function ProjectFitPage() {
  return (
    <main className="bg-slateInk">
      <section className="relative isolate overflow-hidden bg-slateInk">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_16%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_84%_2%,rgba(52,211,153,0.12),transparent_28%)]"
        />
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            Project Fit Assessment
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Find the right starting point for your project.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Answer a few questions about your idea, audience, workflow, and technical needs. ClearStack Studio will suggest the closest service and proof project.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              className="focus-ring inline-flex min-h-11 items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              href="#assessment"
            >
              Start assessment
            </a>
            <Link
              className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyanGlow hover:text-white"
              href="/services"
            >
              View services
            </Link>
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-amber-50">
            This assessment provides general project guidance only. Final service fit, scope, pricing, timeline, and technical approach are confirmed after project review.
          </p>
        </div>
      </section>

      <ProjectFitAssessment />
    </main>
  );
}
