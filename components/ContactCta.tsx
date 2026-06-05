import Link from "next/link";

export function ContactCta() {
  return (
    <section className="bg-slateInk px-6 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl border border-cyan-300/20 bg-cyan-300/[0.06] p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            Ready when you are
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Bring the idea. ClearStack Studio will help shape the first version.
          </h2>
        </div>
        <Link
          className="focus-ring mt-8 inline-flex items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift lg:mt-0"
          href="/contact"
        >
          Contact ClearStack Studio
        </Link>
      </div>
    </section>
  );
}
