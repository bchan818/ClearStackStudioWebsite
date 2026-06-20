import Link from "next/link";

export function FeaturedProduct() {
  return (
    <section className="bg-[#081827] py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            Featured Product
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            CardScope by ClearStack Studio
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            A card price scanner and collection tracker in development for
            collectors who want faster pricing, cleaner organization, and a
            clearer view of their collection.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Price scanner", "Collection tracker", "In development"].map(
              (tag) => (
                <span
                  className="border border-emerald-300/30 bg-emerald-300/[0.08] px-3 py-2 text-sm text-emerald-100"
                  key={tag}
                >
                  {tag}
                </span>
              )
            )}
          </div>
          <Link
            className="focus-ring mt-8 inline-flex w-fit items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
            href="https://cardscope-mvp-mogw.vercel.app/"
          >
            View CardScope
          </Link>
        </div>

        <div className="border border-white/10 bg-slateInk p-5 shadow-glow">
          <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
            <div
              aria-label="CardScope scan preview mockup"
              className="min-h-[300px] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/20 via-slate-900 to-emerald-300/20 p-4"
              role="img"
            >
              <div className="flex h-full flex-col justify-between border border-white/20 bg-slate-950/55 p-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-cyan-100">
                    Scan Preview
                  </p>
                  <div
                    aria-hidden="true"
                    className="mt-10 h-28 border-2 border-cyan-200/70"
                  />
                </div>
                <div>
                  <p className="text-sm text-slate-300">Estimated value</p>
                  <p className="mt-1 text-4xl font-semibold text-white">
                    $42.80
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border border-white/10 bg-white/[0.04] p-4">
                <p className="text-sm text-slate-400">Collection value</p>
                <p className="mt-2 text-3xl font-semibold text-emeraldLift">
                  $1,284
                </p>
              </div>
              <div className="border border-white/10 bg-white/[0.04] p-4">
                <p className="text-sm text-slate-400">Cards tracked</p>
                <p className="mt-2 text-3xl font-semibold text-cyanGlow">
                  216
                </p>
              </div>
              <div className="border border-white/10 bg-white/[0.04] p-4">
                <p className="text-sm font-medium text-slate-100">
                  Built for quick lookups, collection notes, and future pricing
                  insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
