import Link from "next/link";

export function FeaturedProduct() {
  return (
    <section className="bg-[#081827] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            Featured Work
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            ClearStack Studio products and storefront MVPs
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Live MVPs and polished storefront builds that show how ClearStack
            Studio turns ideas into launch-ready digital experiences.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="border border-white/10 bg-slateInk p-5 shadow-glow">
            <div className="flex flex-col gap-8 lg:min-h-[530px]">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
                    Featured Product
                  </p>
                  <span className="border border-emerald-300/40 bg-emerald-300/[0.12] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100">
                    Live MVP
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  CardScope by ClearStack Studio
                </h3>
                <p className="mt-5 text-base leading-7 text-slate-300">
                  A live MVP for card search, collection tracking, and Pro-style
                  product validation, built for collectors who want faster
                  pricing, cleaner organization, and a clearer view of their
                  collection.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {["Live MVP", "Collection tracker", "Pro preview"].map(
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
              </div>

              <div className="mt-auto">
                <div
                  aria-label="CardScope scan preview mockup"
                  className="min-h-[250px] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/20 via-slate-900 to-emerald-300/20 p-4"
                  role="img"
                >
                  <div className="flex h-full min-h-[218px] flex-col justify-between border border-white/20 bg-slate-950/55 p-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-cyan-100">
                        Scan Preview
                      </p>
                      <div
                        aria-hidden="true"
                        className="mt-10 h-24 border-2 border-cyan-200/70"
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
                <Link
                  className="focus-ring mt-6 inline-flex w-fit items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
                  href="https://cardscope-mvp.vercel.app"
                >
                  View CardScope
                </Link>
              </div>
            </div>
          </article>

          <article className="border border-rose-200/20 bg-[#130d14] p-5 shadow-[0_0_80px_rgba(244,114,182,0.14)]">
            <div className="flex flex-col gap-8 lg:min-h-[530px]">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-200">
                    Storefront MVP
                  </p>
                  <span className="border border-amber-200/40 bg-amber-100/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">
                    Perfume + Cosmetics
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  ClearBloom Beauty storefront
                </h3>
                <p className="mt-5 text-base leading-7 text-stone-300">
                  A premium perfume and cosmetics storefront tied to ClearStack
                  Studio, designed with product detail pages, beauty bundles,
                  order inquiries, and future checkout integration.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {["Online boutique", "Product drops", "Checkout-ready"].map(
                    (tag) => (
                      <span
                        className="border border-rose-200/30 bg-rose-200/[0.08] px-3 py-2 text-sm text-rose-100"
                        key={tag}
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="mt-auto">
                <div
                  aria-label="ClearBloom perfume and cosmetics storefront mockup"
                  className="min-h-[250px] border border-rose-200/20 bg-gradient-to-br from-rose-300/20 via-fuchsia-200/10 to-amber-100/20 p-4"
                  role="img"
                >
                  <div className="grid h-full min-h-[218px] gap-4 border border-white/15 bg-[#1b1018]/80 p-4 sm:grid-cols-[0.85fr_1.15fr]">
                    <div className="grid place-items-center border border-rose-100/30 bg-white/10">
                      <div className="h-28 w-16 rounded-t-[36px] border border-rose-100/70 bg-white/20" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-xs uppercase tracking-[0.22em] text-rose-100">
                        Signature Drop
                      </p>
                      <p className="mt-3 text-3xl font-semibold text-white">
                        Velvet Bloom
                      </p>
                      <p className="mt-2 text-sm text-stone-300">
                        Rose petals, soft amber, white musk
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  className="focus-ring mt-6 inline-flex w-fit items-center justify-center bg-rose-200 px-5 py-3 text-sm font-semibold text-[#130d14] transition hover:bg-amber-100"
                  href="/work/clearbloom-beauty"
                >
                  View ClearBloom Beauty
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
