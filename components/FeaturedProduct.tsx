import { TrackedLink } from "@/components/TrackedLink";
import { cardScopeLiveUrl, clearBloomLiveUrl, mswApplicationReviewDemoUrl } from "@/lib/siteLinks";

const projects = [
  {
    eyebrow: "Featured Product",
    badge: "Live MVP",
    title: "CardScope by ClearStack Studio",
    slug: "cardscope",
    description:
      "A live MVP for card search, collection tracking, and Pro-style product validation, built for collectors who want faster pricing and cleaner organization.",
    tags: ["MVP software", "Collection tracker", "Pro preview"],
    href: cardScopeLiveUrl,
    cta: "View CardScope",
    caseStudyHref: "/work/cardscope/case-study",
    accent: "cyan",
    previewLabel: "Estimated value",
    previewTitle: "$42.80",
    previewText: "Manual search, saved cards, and mock pricing workflows."
  },
  {
    eyebrow: "Storefront MVP",
    badge: "Inquiry-based",
    title: "ClearBloom Beauty storefront",
    slug: "clearbloom-beauty",
    description:
      "A fictional premium perfume and cosmetics storefront proof with catalog pages, product detail pages, policies, inquiry checkout, and a future ecommerce upgrade path.",
    tags: ["Storefront MVP", "Product drops", "No live checkout"],
    href: clearBloomLiveUrl,
    cta: "View live storefront demo",
    caseStudyHref: "/work/clearbloom-beauty/case-study",
    caseStudyCta: "Read case study",
    accent: "rose",
    previewLabel: "Signature Drop",
    previewTitle: "Velvet Bloom",
    previewText: "Premium catalog, bundles, policies, and inquiry checkout."
  },
  {
    eyebrow: "AI-powered tool",
    badge: "Prototype",
    title: "AI Fashion Model",
    slug: "ai-fashion-model",
    description:
      "An AI-assisted creative and product visualization prototype for prompt-based fashion concepts, creator workflows, retail ideation, and visual product prototyping.",
    tags: ["AI-assisted", "Fashion concepts", "Visual prototype"],
    href: "/work/ai-fashion-model",
    cta: "View AI tool proof",
    caseStudyHref: "/work/ai-fashion-model/case-study",
    accent: "fuchsia",
    previewLabel: "Creative prompt",
    previewTitle: "Editorial concept board",
    previewText: "Static MVP surface for testing AI-assisted design workflows."
  },
  {
    eyebrow: "Internal workflow dashboard",
    badge: "Live Demo",
    title: "MSW Application Review",
    slug: "msw-application-review",
    description:
      "A live mock-data internal dashboard proof for application review workflows, review queues, reviewer assignments, reporting, admin previews, and privacy-safe operations tooling.",
    tags: ["Workflow dashboard", "Status tracking", "Mock data only"],
    href: mswApplicationReviewDemoUrl,
    cta: "View live dashboard demo",
    caseStudyHref: "/work/msw-application-review/case-study",
    accent: "emerald",
    previewLabel: "Review queue",
    previewTitle: "20 mock records",
    previewText: "Generic dashboard states with no private student or applicant data."
  }
];

const accentStyles = {
  cyan: {
    article: "border-white/10 bg-slateInk shadow-glow",
    text: "text-cyanGlow",
    badge: "border-emerald-300/40 bg-emerald-300/[0.12] text-emerald-100",
    tag: "border-emerald-300/30 bg-emerald-300/[0.08] text-emerald-100",
    preview: "border-cyan-300/20 bg-gradient-to-br from-cyan-300/20 via-slate-900 to-emerald-300/20",
    button: "bg-cyanGlow text-slate-950 hover:bg-emeraldLift",
    secondary: "border-white/15 text-slate-100 hover:border-cyan-300/50 hover:text-white"
  },
  rose: {
    article: "border-rose-200/20 bg-[#130d14] shadow-[0_0_80px_rgba(244,114,182,0.14)]",
    text: "text-rose-200",
    badge: "border-amber-200/40 bg-amber-100/10 text-amber-100",
    tag: "border-rose-200/30 bg-rose-200/[0.08] text-rose-100",
    preview: "border-rose-200/20 bg-gradient-to-br from-rose-300/20 via-fuchsia-200/10 to-amber-100/20",
    button: "bg-rose-200 text-[#130d14] hover:bg-amber-100",
    secondary: "border-amber-100/30 text-amber-100 hover:border-amber-100 hover:text-white"
  },
  fuchsia: {
    article: "border-fuchsia-200/20 bg-fuchsia-200/[0.04] shadow-[0_0_80px_rgba(217,70,239,0.12)]",
    text: "text-fuchsia-200",
    badge: "border-fuchsia-200/40 bg-fuchsia-200/[0.1] text-fuchsia-100",
    tag: "border-fuchsia-200/30 bg-fuchsia-200/[0.08] text-fuchsia-100",
    preview: "border-fuchsia-200/20 bg-gradient-to-br from-fuchsia-300/20 via-slate-950 to-cyan-300/20",
    button: "bg-cyanGlow text-slate-950 hover:bg-emeraldLift",
    secondary: "border-fuchsia-200/40 text-fuchsia-100 hover:border-fuchsia-200 hover:text-white"
  },
  emerald: {
    article: "border-emerald-300/20 bg-emerald-300/[0.04] shadow-[0_0_80px_rgba(52,211,153,0.1)]",
    text: "text-emeraldLift",
    badge: "border-emerald-300/40 bg-emerald-300/[0.12] text-emerald-100",
    tag: "border-emerald-300/30 bg-emerald-300/[0.08] text-emerald-100",
    preview: "border-emerald-300/20 bg-gradient-to-br from-emerald-300/20 via-slate-950 to-cyan-300/20",
    button: "bg-cyanGlow text-slate-950 hover:bg-emeraldLift",
    secondary: "border-emerald-300/40 text-emerald-100 hover:border-emerald-300 hover:text-white"
  }
};

export function FeaturedProduct() {
  return (
    <section className="bg-[#081827] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            Featured Work
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Proof projects across software, storefronts, AI tools, and dashboards.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            ClearStack Studio turns ideas into launch-ready proof: MVP software, storefront MVPs, AI-powered creative tools, and internal workflow dashboards.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => {
            const styles = accentStyles[project.accent as keyof typeof accentStyles];

            return (
              <article className={`border p-5 ${styles.article}`} key={project.title}>
                <div className="flex h-full min-h-[500px] flex-col gap-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <p className={`text-sm font-semibold uppercase tracking-[0.24em] ${styles.text}`}>
                        {project.eyebrow}
                      </p>
                      <span className={`border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${styles.badge}`}>
                        {project.badge}
                      </span>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-5 text-base leading-7 text-slate-300">
                      {project.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span className={`border px-3 py-2 text-sm ${styles.tag}`} key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div
                      aria-label={`${project.title} preview mockup`}
                      className={`min-h-[230px] border p-4 ${styles.preview}`}
                      role="img"
                    >
                      <div className="flex h-full min-h-[198px] flex-col justify-between border border-white/15 bg-slate-950/60 p-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.22em] text-slate-300">
                            {project.previewLabel}
                          </p>
                          <p className="mt-8 text-3xl font-semibold text-white">
                            {project.previewTitle}
                          </p>
                        </div>
                        <p className="text-sm leading-6 text-slate-300">
                          {project.previewText}
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <TrackedLink
                        className={`focus-ring inline-flex w-fit items-center justify-center px-5 py-3 text-sm font-semibold transition ${styles.button}`}
                        ctaLocation="featured_work_card"
                        eventLabel={`featured_work_${project.slug}_primary`}
                        eventName={project.href === project.caseStudyHref ? "case_study_click" : project.href.startsWith("http") ? "live_demo_click" : "case_study_click"}
                        href={project.href}
                        projectSlug={project.slug}
                        projectType={project.eyebrow}
                      >
                        {project.cta}
                      </TrackedLink>
                      <TrackedLink
                        className={`focus-ring inline-flex w-fit items-center justify-center border px-5 py-3 text-sm font-semibold transition ${styles.secondary}`}
                        ctaLocation="featured_work_card"
                        eventLabel={`featured_work_${project.slug}_case_study`}
                        eventName="case_study_click"
                        href={project.caseStudyHref}
                        projectSlug={project.slug}
                        projectType={project.eyebrow}
                      >
                        {project.caseStudyCta ?? "See case study"}
                      </TrackedLink>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
