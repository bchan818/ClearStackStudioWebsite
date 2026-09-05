import type { Metadata } from "next";
import Link from "next/link";
import { RoamTheCitiesBrandTokenSummary, RoamTheCitiesScreenshotGallery } from "@/components/RoamTheCitiesScreenshotSystem";
import { TrackedLink } from "@/components/TrackedLink";
import { requireProductBySlug } from "@/lib/products";
import { createSeoMetadata, socialImages } from "@/lib/seo";

const roamTheCitiesProduct = requireProductBySlug("roamthecities");

const statusLabel = roamTheCitiesProduct.status === "active" ? "Active product" : roamTheCitiesProduct.status;

const travelerJourney = [
  "Discover a destination",
  "Save places and experiences",
  "Build a trip",
  "Organize itinerary details",
  "Receive reminders",
  "Access travel information during the trip",
  "Use relevant booking partners"
];

const sharedCapabilities = [
  "user accounts",
  "profiles",
  "destinations",
  "saved destinations",
  "trips",
  "trip items",
  "affiliate links",
  "notification preferences"
];

const coreCapabilities = [
  {
    title: "Destination Discovery",
    status: "Product foundation",
    items: ["destination pages", "saved destinations", "recommendations"],
    note: "Designed around helping travelers move from inspiration to a useful shortlist."
  },
  {
    title: "Trip Planning",
    status: "Product foundation",
    items: ["day-by-day itinerary", "multiple destinations", "trip items", "notes"],
    note: "Structured to support planning without implying live booking management."
  },
  {
    title: "Traveler Personalization",
    status: "Product foundation",
    items: ["preferences", "tailored recommendations", "pacing"],
    note: "Personalization is positioned as preference-led, not as opaque traveler profiling."
  },
  {
    title: "Trip Intelligence",
    status: "Product foundation",
    items: ["schedule conflict detection", "readiness checks", "travel-gap warnings"],
    note: "Advisory checks are framed as planning support, not guaranteed travel advice."
  },
  {
    title: "Notifications",
    status: "Architecture-ready",
    items: ["reminders", "trip alerts", "push-notification architecture"],
    note: "Notification behavior is described as architecture-ready until live delivery is verified."
  },
  {
    title: "Offline Access",
    status: "Architecture-ready",
    items: ["cached trip information", "offline itinerary access", "last-sync awareness"],
    note: "Offline behavior is labeled as planned/in-development until production device verification exists."
  },
  {
    title: "Collaboration",
    status: "Product foundation",
    items: ["shared trips", "owner/editor/viewer roles"],
    note: "Role concepts are included for collaborative planning while preserving ownership boundaries."
  },
  {
    title: "Trip Budget",
    status: "Product foundation",
    items: ["planned vs actual spending", "expense tracking", "shared expenses"],
    note: "Budgeting is presented as planning utility, not financial advice or payment processing."
  }
];

const affiliatePartners = [
  {
    name: "Expedia",
    focus: ["Hotels", "Flights", "Rental cars", "Packages"]
  },
  {
    name: "Viator",
    focus: ["Tours", "Attractions", "Activities"]
  },
  {
    name: "GoWithGuide",
    focus: ["Private guides", "Custom tours", "Airport transfers"]
  }
];

const architectureLayers = [
  {
    name: "Mobile",
    stack: "Expo, React Native, TypeScript",
    note: "Mobile app direction is documented as compatible/in-development, not a confirmed public app launch."
  },
  {
    name: "Web",
    stack: "Next.js, TypeScript, Vercel, GitHub",
    note: "The web project supports product, admin, content, analytics, launch surfaces, and ClearStack Studio development workflow practices."
  },
  {
    name: "Backend",
    stack: "Supabase, PostgreSQL, authentication patterns",
    note: "Shared backend architecture is described without exposing private database identifiers or secrets."
  },
  {
    name: "Data",
    stack: "Destinations, trips, saved places, trip items, preferences, events",
    note: "Data models are discussed at a product level only."
  },
  {
    name: "Integrations",
    stack: "Affiliate links, notifications, travel-data provider abstractions",
    note: "Partner links are outbound referral flows; RoamTheCities does not handle third-party bookings directly."
  }
];

const clearStackCapabilities = [
  "Product strategy",
  "Mobile development",
  "Web development",
  "Shared backend architecture",
  "Authentication",
  "Database design",
  "Affiliate integration",
  "Personalization",
  "Notifications",
  "Offline-first design",
  "Admin tooling",
  "Analytics"
];

const completeStatus = [
  "ClearStack Studio product registry entry and public case-study route",
  "ClearStack-owned product positioning and ownership statement",
  "Documented web/mobile/backend product architecture foundations",
  "Public-safe product, partner, analytics, feature flag, and operations storytelling"
];

const inDevelopmentStatus = [
  "Live RoamTheCities production URL confirmation and public launch linking",
  "Web and mobile client data wiring against verified non-production environments",
  "Admin-only analytics, notification, and operations dashboards against real events"
];

const plannedStatus = [
  "Verified public mobile app release path",
  "Real provider conversion imports and partner reporting",
  "Production screenshot set and product media library",
  "Expanded traveler onboarding and repeat-traveler engagement loops"
];

export const metadata: Metadata = {
  ...createSeoMetadata({
    title: "RoamTheCities Travel Platform | ClearStack Studio",
    description:
      "RoamTheCities is a travel planning and discovery platform built and operated by ClearStack Studio.",
    path: roamTheCitiesProduct.caseStudyPath,
    image: roamTheCitiesProduct.socialImage ?? socialImages.projects,
    imageAlt: "RoamTheCities travel platform case study by ClearStack Studio.",
    type: "article"
  })
};

function StatusList({ items, title }: { items: string[]; title: string }) {
  return (
    <article className="border border-white/10 bg-white/[0.035] p-5">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
        {items.map((item) => (
          <li className="border border-white/10 bg-slateInk/70 p-3" key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default function RoamTheCitiesPage() {
  return (
    <main className="bg-slateInk">
      <section className="relative isolate overflow-hidden bg-slateInk">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_82%_0%,rgba(52,211,153,0.12),transparent_28%)]" />
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-24 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">{roamTheCitiesProduct.category}</p>
              <span className="border border-sky-200/40 bg-sky-200/[0.1] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-100">{statusLabel}</span>
              <span className="border border-white/10 bg-slateInk/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">Built and operated by ClearStack Studio</span>
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">{roamTheCitiesProduct.name}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{roamTheCitiesProduct.description}</p>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-400">{roamTheCitiesProduct.ownershipStatement} The product demonstrates how ClearStack Studio can shape a travel platform across product strategy, web, mobile, shared backend architecture, affiliate attribution, admin tooling, analytics, and operational readiness.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {roamTheCitiesProduct.liveUrl ? (
                <TrackedLink className="focus-ring inline-flex min-h-11 items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift" eventLabel="roamthecities_launch_live" eventName="live_demo_click" href={roamTheCitiesProduct.liveUrl} projectSlug={roamTheCitiesProduct.slug} projectType={roamTheCitiesProduct.category}>
                  Visit RoamTheCities
                </TrackedLink>
              ) : (
                <span className="inline-flex min-h-11 items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-300">Website coming soon</span>
              )}
              <Link className="focus-ring inline-flex min-h-11 items-center justify-center border border-sky-200/40 px-5 py-3 text-sm font-semibold text-sky-100 transition hover:border-sky-200 hover:text-white" href="#product-overview">Explore the Product</Link>
              <TrackedLink className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white" eventLabel="roamthecities_launch_start_project" eventName="start_project_click" href="/start">
                Start a Project
              </TrackedLink>
            </div>
          </div>

          <aside aria-label="RoamTheCities launch summary" className="border border-sky-200/20 bg-sky-200/[0.05] p-5 shadow-glow">
            <div className="grid gap-4">
              <div className="border border-white/10 bg-slateInk/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Product</p>
                <p className="mt-2 text-lg font-semibold text-white">{roamTheCitiesProduct.name}</p>
              </div>
              <div className="border border-white/10 bg-slateInk/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Current status</p>
                <p className="mt-2 text-lg font-semibold text-white">{statusLabel}</p>
              </div>
              <div className="border border-white/10 bg-slateInk/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">External website</p>
                <p className="mt-2 text-lg font-semibold text-white">{roamTheCitiesProduct.liveUrl ?? "Website coming soon"}</p>
              </div>
              <div className="border border-white/10 bg-slateInk/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Mobile app status</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{roamTheCitiesProduct.mobileAppStatus}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8" id="product-overview">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Product overview</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">Built around the traveler journey.</h2>
          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {travelerJourney.map((step, index) => (
              <article className="border border-white/10 bg-white/[0.035] p-5" key={step}>
                <p className="text-sm font-semibold text-cyanGlow">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Website + mobile ecosystem</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">A shared product architecture for web and mobile surfaces.</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">This section describes the intended shared architecture. It does not claim production synchronization is live until the live data wiring is verified.</p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <div className="border border-sky-200/25 bg-sky-200/[0.06] p-6">
            <h3 className="text-2xl font-semibold text-white">RoamTheCities Website</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">Destination discovery, product pages, admin surfaces, analytics, content operations, and public product storytelling.</p>
          </div>
          <div className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-cyanGlow">↓ Shared Supabase Backend ↑</div>
          <div className="border border-emerald-300/25 bg-emerald-300/[0.06] p-6">
            <h3 className="text-2xl font-semibold text-white">RoamTheCities Mobile App</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">Expo/React Native-compatible planning for trips, offline access, reminders, preferences, budgets, and mobile traveler workflows.</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {sharedCapabilities.map((capability) => (
            <span className="border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-slate-300" key={capability}>{capability}</span>
          ))}
        </div>
      </section>

      <RoamTheCitiesBrandTokenSummary />

      <RoamTheCitiesScreenshotGallery />

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Core product capabilities</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">A travel platform foundation, with status labels kept honest.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {coreCapabilities.map((capability) => (
              <article className="border border-white/10 bg-white/[0.035] p-5" key={capability.title}>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold text-white">{capability.title}</h3>
                  <span className="border border-cyan-300/30 bg-cyan-300/[0.08] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">{capability.status}</span>
                </div>
                <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-300">
                  {capability.items.map((item) => <li key={item}>• {item}</li>)}
                </ul>
                <p className="mt-4 text-xs leading-5 text-slate-500">{capability.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Affiliate model</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Monetization through relevant travel partners.</h2>
            <p className="mt-5 text-sm leading-6 text-slate-300 sm:text-base">RoamTheCities may earn commissions when users book through qualifying partner links. RoamTheCities does not handle third-party bookings directly, and no public commission percentages are listed here.</p>
          </div>
          <div className="grid gap-4">
            {affiliatePartners.map((partner) => (
              <article className="border border-white/10 bg-white/[0.035] p-5" key={partner.name}>
                <h3 className="text-xl font-semibold text-white">{partner.name}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {partner.focus.map((item) => <span className="border border-emerald-300/20 bg-emerald-300/[0.06] px-3 py-1 text-sm text-emerald-100" key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Technical architecture</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">Confirmed stack direction without exposing private infrastructure.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {architectureLayers.map((layer) => (
              <article className="border border-white/10 bg-slateInk p-5" key={layer.name}>
                <h3 className="text-lg font-semibold text-white">{layer.name}</h3>
                <p className="mt-3 text-sm font-semibold text-cyanGlow">{layer.stack}</p>
                <p className="mt-3 text-xs leading-5 text-slate-400">{layer.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">ClearStack capability story</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">A credible proof point for product strategy and platform buildouts.</h2>
            <p className="mt-5 text-sm leading-6 text-slate-300 sm:text-base">RoamTheCities shows how ClearStack Studio can coordinate product architecture, traveler experience, backend planning, operational tooling, and monetization boundaries in one coherent product system.</p>
            <p className="mt-5 text-sm leading-6 text-slate-400">Built and operated by <Link className="focus-ring text-cyanGlow underline-offset-4 hover:underline" href="/about">ClearStack Studio</Link>.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {clearStackCapabilities.map((capability) => (
              <div className="border border-white/10 bg-white/[0.035] p-4 text-sm font-medium text-slate-200" key={capability}>{capability}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Development status</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">Transparent status, separated by evidence.</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <StatusList items={completeStatus} title="Complete" />
            <StatusList items={inDevelopmentStatus} title="In Development" />
            <StatusList items={plannedStatus} title="Planned" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="border border-sky-200/20 bg-sky-200/[0.05] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">Social and launch previews</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">Prepared for Open Graph, X/Twitter, product launch, and portfolio sharing assets.</h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">The brand kit defines logo placement, product name, tagline, background treatment, and ClearStack Studio operator placement without adding misleading feature claims.</p>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-300">
              <li>• Open Graph: 1200x630 warm sand background with ocean/forest card treatment.</li>
              <li>• X/Twitter: summary-large-image using the same safe composition.</li>
              <li>• Product launch: RoamTheCities name, Travel Platform category, and honest status.</li>
              <li>• ClearStack portfolio: ClearStack Studio appears as a secondary operator line.</li>
            </ul>
          </article>
          <article className="border border-emerald-300/20 bg-emerald-300/[0.05] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Business model</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">Travel discovery, planning utility, partner referrals, and repeat engagement.</h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">The business model combines destination discovery, trip-planning utility, relevant affiliate booking paths, and repeat traveler engagement. No revenue, adoption, traffic, ranking, or commission-performance claims are made.</p>
          </article>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl border border-cyan-300/20 bg-cyan-300/[0.06] p-8 text-center shadow-glow sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Related links</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">Explore the product, compare the portfolio, or start a similar build.</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white" href="/products">View products</Link>
            <Link className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white" href="/projects">View projects</Link>
            <Link className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white" href="/services">View services</Link>
            <TrackedLink className="focus-ring inline-flex min-h-11 items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift" eventLabel="roamthecities_launch_bottom_start_project" eventName="start_project_click" href="/start">Start a project</TrackedLink>
          </div>
        </div>
      </section>
    </main>
  );
}
