import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-slateInk px-6 py-24 text-white sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl border border-white/10 bg-white/[0.04] p-8 shadow-glow">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Page not found</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          This page could not be found.
        </h1>
        <p className="mt-5 text-base leading-7 text-slate-300">
          The page may have moved, or the link may be outdated. Start from the portfolio, services, or contact page to keep exploring ClearStack Studio.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift" href="/">
            Go home
          </Link>
          <Link className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white" href="/work">
            View work
          </Link>
          <Link className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white" href="/contact">
            Contact ClearStack
          </Link>
        </div>
      </div>
    </main>
  );
}
