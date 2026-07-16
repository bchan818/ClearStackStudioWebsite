import Link from "next/link";
import { clearBloomLiveUrl } from "@/lib/siteLinks";

const packages = [
  {
    name: "MVP Launch Package",
    shortDescription:
      "Turn a product idea into a focused, launch-ready first version that people can try, understand, and respond to.",
    bestFit:
      "Founders, creators, or small businesses that need a first working product before investing in a full platform.",
    includes: [
      "Product scope and MVP feature plan",
      "Core user flow and key page structure",
      "Responsive web app or product experience",
      "Basic deployment and launch-ready setup"
    ],
    deliverables: [
      "Landing or product page",
      "Core MVP screens",
      "Demo or validation path",
      "Launch checklist"
    ],
    price: "Starting at project-scope estimate",
    cta: "Start an MVP inquiry",
    href: "/contact"
  },
  {
    name: "Storefront MVP Package",
    shortDescription:
      "Create a polished, inquiry-ready storefront demo before full commerce, inventory, and payment systems are connected.",
    bestFit:
      "Beauty, wellness, fashion, lifestyle, food/product, boutique ecommerce, and creator merchandise brands that need to present products professionally before full ecommerce setup.",
    includes: [
      "Homepage and storefront positioning",
      "Product catalog and product detail pages",
      "Brand visuals and product storytelling",
      "Inquiry checkout, policies, FAQ, and storefront launch structure"
    ],
    deliverables: [
      "Storefront page",
      "Product catalog cards",
      "Product detail pages",
      "Inquiry checkout flow",
      "ClearBloom-style case study proof",
      "Live ClearBloom storefront demo reference"
    ],
    price: "Starting at storefront-scope estimate",
    cta: "Start a storefront inquiry",
    href: "/contact",
    detailsCta: "Learn about the package",
    detailsHref: "/services#storefront-mvp",
    liveCta: "View ClearBloom live demo",
    liveHref: clearBloomLiveUrl
  },
  {
    name: "Website/App Refresh Package",
    shortDescription:
      "Modernize an existing site or app experience so it is cleaner, faster, easier to navigate, and more conversion-focused.",
    bestFit:
      "Businesses, creators, and teams that already have a website or app but need better structure, design, and polish.",
    includes: [
      "Content cleanup and clearer page structure",
      "Improved layout, responsive design, and navigation",
      "Service, work, or product sections",
      "Deployment polish and conversion-focused CTAs"
    ],
    deliverables: [
      "Refreshed core pages",
      "Updated navigation",
      "Service/work sections",
      "Launch-ready deployment pass"
    ],
    price: "Starting at refresh-scope estimate",
    cta: "Start a refresh inquiry",
    href: "/contact"
  }
];

type ServicePackagesProps = {
  variant?: "preview" | "full";
};

export function ServicePackages({ variant = "full" }: ServicePackagesProps) {
  const isPreview = variant === "preview";

  return (
    <section className={`${isPreview ? "bg-slateInk" : "bg-[#081827]"} px-6 py-16 sm:py-20 lg:px-8`}>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
              Service Packages
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Clear packages for building, launching, and improving digital products.
            </h2>
            <p className="mt-5 text-sm leading-6 text-slate-300 sm:text-base">
              Choose a focused starting point, then scope the details around the business goal, timeline, and launch needs.
            </p>
          </div>
          {isPreview ? (
            <Link
              className="focus-ring inline-flex items-center justify-center border border-cyan-300/40 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyanGlow hover:text-slate-950"
              href="/services"
            >
              Compare all packages
            </Link>
          ) : null}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {packages.map((servicePackage) => (
            <article
              className="flex h-full flex-col border border-white/10 bg-white/[0.04] p-6 shadow-glow/20 transition hover:border-cyan-300/40"
              key={servicePackage.name}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyanGlow">
                  Package
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {servicePackage.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {servicePackage.shortDescription}
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-sm font-semibold text-slate-100">Best fit</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {servicePackage.bestFit}
                </p>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold text-slate-100">What is included</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  {servicePackage.includes.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <span aria-hidden="true" className="text-cyanGlow">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {!isPreview ? (
                <div className="mt-6">
                  <p className="text-sm font-semibold text-slate-100">Example deliverables</p>
                  <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-300">
                    {servicePackage.deliverables.map((item) => (
                      <li className="border border-white/10 bg-slateInk/60 px-3 py-2" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="mt-auto pt-6">
                <p className="border-t border-white/10 pt-5 text-sm font-semibold text-emerald-100">
                  {servicePackage.price}
                </p>
                <Link
                  className="focus-ring mt-5 inline-flex w-full items-center justify-center bg-cyanGlow px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
                  href={servicePackage.href}
                >
                  {servicePackage.cta}
                </Link>
                {servicePackage.detailsHref ? (
                  <Link
                    className="focus-ring mt-3 inline-flex w-full items-center justify-center border border-white/15 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
                    href={servicePackage.detailsHref}
                  >
                    {servicePackage.detailsCta}
                  </Link>
                ) : null}
                {servicePackage.liveHref ? (
                  <Link
                    className="focus-ring mt-3 inline-flex w-full items-center justify-center border border-amber-100/40 px-4 py-3 text-sm font-semibold text-amber-100 transition hover:bg-amber-100 hover:text-slate-950"
                    href={servicePackage.liveHref}
                  >
                    {servicePackage.liveCta}
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        {isPreview ? (
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              href="/start"
            >
              Start a Project
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
              href="/services"
            >
              View package details
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
