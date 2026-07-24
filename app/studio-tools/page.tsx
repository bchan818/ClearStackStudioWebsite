import type { Metadata } from "next";
import { StudioToolsDashboard } from "@/components/StudioToolsDashboard";

export const metadata: Metadata = {
  title: "ClearStack Studio Tools",
  description:
    "A central dashboard for ClearStack Studio browser-based inquiry, planning, project-management, launch, and handoff tools."
};

export default function StudioToolsPage() {
  return (
    <main className="bg-slateInk">
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
          Studio Tools
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          ClearStack Studio Tools
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Plan, scope, manage, launch, and hand off focused digital projects with reusable browser-based tools.
        </p>
        <div className="mt-6 border border-amber-100/30 bg-amber-100/[0.06] p-4 text-sm leading-6 text-amber-50">
          These tools create planning and communication drafts. They do not create contracts, store data on ClearStack servers, process payments, or replace legal or professional advice.
        </div>
      </section>

      <StudioToolsDashboard />
    </main>
  );
}
