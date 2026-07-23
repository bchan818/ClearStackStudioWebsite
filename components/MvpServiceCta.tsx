import Link from "next/link";

export function MvpServiceCta() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
      <div className="border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[0.1] via-white/[0.04] to-emerald-300/[0.08] p-8 sm:p-10 lg:grid lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            MVP Build Service
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Want an MVP like CardScope?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
            ClearStack Studio builds focused MVPs, product landing pages, and
            early validation tools for founders, creators, and small teams who
            need a practical first version before investing in a bigger build.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:mt-0 lg:grid-cols-1">
          <Link
            className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
            href="/start"
          >
            Start your MVP project
          </Link>
          <Link
            className="focus-ring inline-flex items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
            href="https://cardscope-mvp.vercel.app"
          >
            View CardScope MVP
          </Link>
        </div>
      </div>
    </section>
  );
}
