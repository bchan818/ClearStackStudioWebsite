import type { Metadata } from "next";
import Link from "next/link";
import { TrackedLink } from "@/components/TrackedLink";
import { clearStackProducts, type ClearStackProduct, type ClearStackProductStatus, getProductCaseStudyPath, getProductLiveUrl } from "@/lib/products";
import { createSeoMetadata, socialImages } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Products | ClearStack Studio",
  description:
    "Explore digital products built and operated by ClearStack Studio, including active products, MVP proof projects, experiments, and archived concepts.",
  path: "/products",
  image: socialImages.projects,
  imageAlt: "ClearStack Studio products social preview."
});

const activeStatuses: ClearStackProductStatus[] = ["active", "beta", "production"];
const proofStatuses: ClearStackProductStatus[] = ["mvp"];
const experimentStatuses: ClearStackProductStatus[] = ["concept", "prototype"];

const activeProducts = clearStackProducts.filter((product) => activeStatuses.includes(product.status));
const proofProducts = clearStackProducts.filter((product) => proofStatuses.includes(product.status));
const experimentProducts = clearStackProducts.filter((product) => experimentStatuses.includes(product.status));
const archivedProducts = clearStackProducts.filter((product) => product.status === "archived");

const statusLabels: Record<ClearStackProductStatus, string> = {
  concept: "Concept",
  prototype: "Prototype",
  mvp: "MVP / proof project",
  active: "Active product",
  beta: "Beta",
  production: "Production",
  archived: "Archived"
};

function ProductCard({ product, secondary = false }: { product: ClearStackProduct; secondary?: boolean }) {
  const liveUrl = getProductLiveUrl(product);
  const caseStudyPath = getProductCaseStudyPath(product);

  return (
    <article className={`flex h-full flex-col border p-5 ${secondary ? "border-white/10 bg-white/[0.025]" : "border-cyan-300/20 bg-white/[0.04] shadow-glow/20"}`}>
      <div className="flex flex-wrap items-center gap-3">
        <span className="border border-cyan-300/35 bg-cyan-300/[0.08] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
          {product.category}
        </span>
        <span className="border border-white/10 bg-slateInk/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
          {statusLabels[product.status]}
        </span>
      </div>

      <div className="mt-5 grid min-h-32 place-items-center border border-white/10 bg-slateInk/70 p-5 text-center">
        {product.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img alt={`${product.name} product preview`} className="max-h-32 object-contain" src={product.image} />
        ) : (
          <div aria-hidden="true" className="grid h-24 w-24 place-items-center border border-cyan-300/30 bg-cyan-300/[0.08] text-2xl font-semibold text-cyanGlow">
            {product.shortName ?? product.name.slice(0, 2)}
          </div>
        )}
      </div>

      <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white">{product.name}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-300">{product.description}</p>
      <p className="mt-4 text-xs leading-5 text-slate-500">{product.ownershipStatement}</p>

      <dl className="mt-5 grid gap-3 text-sm text-slate-300">
        {product.websiteStatus ? (
          <div className="border border-white/10 bg-white/[0.025] p-3">
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Website</dt>
            <dd className="mt-1 leading-6">{product.websiteStatus}</dd>
          </div>
        ) : null}
        {product.mobileAppStatus ? (
          <div className="border border-white/10 bg-white/[0.025] p-3">
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Mobile app</dt>
            <dd className="mt-1 leading-6">{product.mobileAppStatus}</dd>
          </div>
        ) : null}
      </dl>

      {product.technologies?.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {product.technologies.slice(0, 5).map((technology) => (
            <span className="border border-emerald-300/20 bg-emerald-300/[0.06] px-3 py-1 text-xs text-emerald-100" key={technology}>
              {technology}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        <TrackedLink
          className="focus-ring inline-flex min-h-11 items-center justify-center border border-cyan-300/40 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyanGlow hover:text-white"
          eventLabel={`products_${product.slug}_case_study`}
          eventName="case_study_click"
          href={caseStudyPath}
          projectSlug={product.slug}
          projectType={product.category}
        >
          View case study
        </TrackedLink>
        {liveUrl ? (
          <TrackedLink
            aria-label={`${product.externalLabel ?? `Visit ${product.name}`} - opens external product website`}
            className="focus-ring inline-flex min-h-11 items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
            eventLabel={`products_${product.slug}_live`}
            eventName="live_demo_click"
            href={liveUrl}
            projectSlug={product.slug}
            projectType={product.category}
          >
            {product.externalLabel ?? `Visit ${product.name}`} ↗
          </TrackedLink>
        ) : (
          <span className="inline-flex min-h-11 items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-300">
            Website coming soon
          </span>
        )}
      </div>
    </article>
  );
}

function ProductSection({ description, emptyText, products, secondary = false, title }: { description: string; emptyText: string; products: ClearStackProduct[]; secondary?: boolean; title: string }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight text-white">{title}</h2>
        <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">{description}</p>
      </div>
      {products.length ? (
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} secondary={secondary} />
          ))}
        </div>
      ) : (
        <p className="mt-6 border border-white/10 bg-white/[0.03] p-5 text-sm leading-6 text-slate-400">{emptyText}</p>
      )}
    </section>
  );
}

export default function ProductsPage() {
  return (
    <main className="bg-slateInk">
      <section className="relative isolate overflow-hidden bg-slateInk">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_82%_0%,rgba(52,211,153,0.12),transparent_28%)]" />
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Products</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Products built by ClearStack Studio
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            ClearStack Studio builds and operates its own digital products in addition to client work. This page separates active products from MVP proof projects, public experiments, and archived concepts using the shared product registry.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyanGlow hover:text-white" href="/projects">
              Compare proof projects
            </Link>
            <Link className="focus-ring inline-flex min-h-11 items-center justify-center border border-cyan-300/40 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyanGlow hover:text-white" href="/services">
              View services
            </Link>
            <TrackedLink className="focus-ring inline-flex min-h-11 items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift" eventLabel="products_hero_start_project" eventName="start_project_click" href="/start">
              Start a project
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-10 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          <article className="border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
            <h2 className="text-xl font-semibold text-white">Products versus projects</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Products are digital products built and operated by ClearStack Studio. Projects include client work, proof projects, internal builds, and case studies.
            </p>
          </article>
          <article className="border border-emerald-300/20 bg-emerald-300/[0.05] p-5">
            <h2 className="text-xl font-semibold text-white">Registry-backed data</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Product names, statuses, case-study paths, live URLs, mobile indicators, and ownership statements come from the centralized registry in <code className="text-cyanGlow">lib/products.ts</code>.
            </p>
          </article>
        </div>
      </section>

      <ProductSection
        description="Products with active, beta, or production registry statuses. These receive the strongest product positioning while still reflecting only confirmed data."
        emptyText="No active products are currently listed in the public registry."
        products={activeProducts}
        title="Active Products"
      />

      <ProductSection
        description="MVPs and proof projects demonstrate product direction, storefront concepts, and focused launch surfaces without implying full production operations."
        emptyText="No MVP or proof products are currently listed in the public registry."
        products={proofProducts}
        title="MVP / Proof Projects"
      />

      <ProductSection
        description="Public concepts and prototypes appear here only when they are intentionally listed in the registry. Private internal experiments are not exposed."
        emptyText="No public experiments are currently listed in the product registry."
        products={experimentProducts}
        secondary
        title="Experiments"
      />

      {archivedProducts.length ? (
        <ProductSection
          description="Archived products are preserved for context but are visually secondary to active products and MVP proof projects."
          emptyText="No archived products are currently listed in the product registry."
          products={archivedProducts}
          secondary
          title="Archived"
        />
      ) : null}
    </main>
  );
}
