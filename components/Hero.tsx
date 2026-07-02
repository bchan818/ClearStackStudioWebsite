import Link from "next/link";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slateInk">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(52,211,153,0.12),transparent_28%)]"
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            ClearStack Studio
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            From idea to app.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Modern websites, inquiry-ready storefront MVPs, mobile apps,
            AI-powered tools, and launch-focused builds for small businesses,
            creators, and growing teams.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              href="/contact"
            >
              Start a project
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyanGlow hover:text-white"
              href="/work"
            >
              See the work
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-amber-100/30 px-6 py-3 text-sm font-semibold text-amber-100 transition hover:border-amber-100 hover:text-white"
              href="/work/clearbloom-beauty/case-study"
            >
              See storefront proof
            </Link>
          </div>
        </div>

        <div className="relative min-h-[360px] border border-white/10 bg-white/[0.04] p-5 shadow-glow sm:min-h-[440px]">
          <div className="absolute inset-x-5 top-5 flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Build Dashboard
            </span>
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-emeraldLift shadow-[0_0_18px_rgba(52,211,153,0.8)]"
            />
          </div>

          <div className="mt-16 grid gap-4">
            <div className="border border-cyan-300/20 bg-cyan-300/[0.08] p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
                Product sprint
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">
                Scope, prototype, launch
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-white/10 bg-[#081827] p-4">
                <p className="text-3xl font-semibold text-emeraldLift">4</p>
                <p className="mt-2 text-sm text-slate-400">Core services</p>
              </div>
              <div className="border border-white/10 bg-[#081827] p-4">
                <p className="text-3xl font-semibold text-cyanGlow">2</p>
                <p className="mt-2 text-sm text-slate-400">
                  Featured projects
                </p>
              </div>
            </div>
            <div className="space-y-3 border border-white/10 bg-[#081827] p-4">
              {["Discovery", "Design", "Build", "Launch"].map((item, index) => (
                <div className="flex items-center gap-3" key={item}>
                  <span className="grid h-7 w-7 place-items-center bg-white/10 text-xs font-semibold text-slate-200">
                    {index + 1}
                  </span>
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
