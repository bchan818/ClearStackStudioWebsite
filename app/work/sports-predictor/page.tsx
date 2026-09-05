import type { Metadata } from "next";
import Link from "next/link";
import { TrackedLink } from "@/components/TrackedLink";
import { requireProductBySlug } from "@/lib/products";
import { createSeoMetadata, socialImages } from "@/lib/seo";

const product = requireProductBySlug("sports-predictor");

const capabilities = [
  {
    title: "Leakage-safe engine",
    text: "Pregame features are emitted before the current result updates Elo or rolling team history. Future outcomes never enter earlier forecasts."
  },
  {
    title: "Chronological backtesting",
    text: "Rolling-origin evaluation trains each prediction season on prior seasons only, then reports winner, probability, margin, total, and score error metrics."
  },
  {
    title: "Immutable pregame forecasts",
    text: "Official runs are generated before kickoff into new directories that refuse overwrite, so published predictions cannot be silently revised."
  },
  {
    title: "Manifest verification",
    text: "Each run includes metadata plus a manifest that records artifact byte sizes and SHA-256 checksum values for independent integrity checks."
  },
  {
    title: "Transparent probability reporting",
    text: "The champion probability remains visually primary while the locked research blend and Elo-only reference stay clearly labeled as research outputs."
  },
  {
    title: "Responsive Next.js product",
    text: "The web MVP turns verified model artifacts into accessible prediction cards, game detail pages, methodology, performance, and archive views."
  }
];

const process = [
  ["01", "Local NFL results", "A pinned local snapshot provides schedule and completed historical scores."],
  ["02", "Pregame feature state", "Elo and rolling features use only information available before the selected kickoff."],
  ["03", "Transparent baseline", "Regularized regression projects scores while logistic regression estimates home-win probability."],
  ["04", "Immutable publication", "Timestamped CSV, metadata, and manifest files are checksummed before the website displays them."]
] as const;

const measuredResults = [
  { label: "Rolling-origin seasons", value: "2018–2025" },
  { label: "Games evaluated", value: "2,227" },
  { label: "Winner accuracy", value: "63.7%" },
  { label: "Primary probability metric", value: "Brier 0.2225" }
];

export const metadata: Metadata = {
  ...createSeoMetadata({
    title: "ClearStack Sports Predictor | ClearStack Studio",
    description:
      "A leakage-safe NFL forecasting and simulation product with immutable pregame predictions and transparent probability reporting.",
    path: "/work/sports-predictor",
    image: product.socialImage ?? socialImages.projects,
    imageAlt: "ClearStack Sports Predictor case study by ClearStack Studio.",
    type: "article"
  })
};

export default function SportsPredictorPage() {
  return (
    <main className="bg-slateInk">
      <section className="relative isolate overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_15%,rgba(34,211,238,0.17),transparent_32%),radial-gradient(circle_at_86%_0%,rgba(52,211,153,0.11),transparent_28%)]" />
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-8">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">{product.category}</p>
              <span className="border border-emerald-300/40 bg-emerald-300/[0.1] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100">ClearStack-developed MVP</span>
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">ClearStack Sports Predictor</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">NFL forecasts powered by transparent statistical modeling, with the data cutoff, model role, and artifact integrity kept visible.</p>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-400">{product.ownershipStatement} It demonstrates how ClearStack Studio can carry a statistical model from leakage audit and chronological evaluation through immutable pregame forecasts and a polished public interface.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {product.liveUrl ? (
                <TrackedLink aria-label="Open ClearStack Sports Predictor in a new tab" className="focus-ring inline-flex min-h-11 items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift" eventLabel="sports_predictor_live" eventName="live_demo_click" href={product.liveUrl} projectSlug={product.slug} projectType={product.category} rel="noopener noreferrer" target="_blank">Open Live Predictor</TrackedLink>
              ) : (
                <span className="inline-flex min-h-11 items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-300">Live predictor unavailable</span>
              )}
              {product.repositoryUrl ? (
                <a className="focus-ring inline-flex min-h-11 items-center justify-center border border-cyan-300/40 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyanGlow hover:text-white" href={product.repositoryUrl} rel="noopener noreferrer" target="_blank">View source repository</a>
              ) : (
                <span className="inline-flex min-h-11 items-center justify-center border border-white/10 px-5 py-3 text-sm text-slate-400">Source link pending public confirmation</span>
              )}
              <Link className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white" href="/start">Start a similar product</Link>
            </div>
          </div>

          <aside aria-label="Sports Predictor interface preview" className="border border-cyan-300/20 bg-white/[0.04] p-5 shadow-glow">
            <div className="border border-white/10 bg-[#081827] p-5">
              <div className="flex items-center justify-between gap-4"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">Official forecast</p><span className="border border-emerald-300/30 bg-emerald-300/[0.08] px-2 py-1 text-xs text-emerald-100">Manifest verified</span></div>
              <div className="mt-7 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center"><div><p className="text-xs uppercase tracking-[0.16em] text-slate-500">Away</p><p className="mt-2 text-2xl font-semibold text-white">TEAM A</p><p className="mt-2 text-3xl font-semibold text-slate-300">18.6</p></div><span className="text-xs text-slate-600">AT</span><div><p className="text-xs uppercase tracking-[0.16em] text-slate-500">Home</p><p className="mt-2 text-2xl font-semibold text-white">TEAM B</p><p className="mt-2 text-3xl font-semibold text-cyanGlow">25.0</p></div></div>
              <div className="mt-7 border border-white/10 bg-slateInk p-4"><div className="flex items-center justify-between text-sm"><span className="font-semibold text-white">Champion probability</span><span className="font-semibold text-cyanGlow">70.7%</span></div><div className="mt-3 h-2 bg-white/10"><div className="h-full w-[71%] bg-cyanGlow" /></div><div className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-400"><p>Margin <span className="block text-base font-semibold text-white">+6.5</span></p><p>Total <span className="block text-base font-semibold text-white">43.6</span></p></div></div>
              <p className="mt-4 text-xs leading-5 text-slate-500">Abstract team labels are used here. No league or team logos, trademarks, or licensed artwork are included.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl"><p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">What was built</p><h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">A trustworthy path from historical results to public pregame forecasts.</h2><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{capabilities.map((capability) => <article className="border border-white/10 bg-white/[0.035] p-5" key={capability.title}><h3 className="text-xl font-semibold text-white">{capability.title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{capability.text}</p></article>)}</div></div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Leakage-safe workflow</p><h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">Chronology is part of the product—not an afterthought.</h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-4">{process.map(([number, title, text]) => <article className="border border-cyan-300/20 bg-cyan-300/[0.04] p-5" key={number}><p className="font-semibold text-cyanGlow">{number}</p><h3 className="mt-4 text-lg font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{text}</p></article>)}</div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl"><p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Measured baseline</p><h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">Performance is published with limits and context.</h2><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{measuredResults.map((result) => <article className="border border-white/10 bg-slateInk p-5" key={result.label}><p className="text-xs uppercase tracking-[0.16em] text-slate-500">{result.label}</p><p className="mt-3 text-2xl font-semibold text-white">{result.value}</p></article>)}</div><p className="mt-6 max-w-3xl text-sm leading-6 text-slate-400">These are historical rolling-origin measurements, not guarantees of future accuracy. The 2026 prospective run remains separate from retrospective model development.</p></div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Integrity controls</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Forecasts that can be checked after publication.</h2></div><div className="grid gap-4 sm:grid-cols-2"><Integrity title="As-of timestamps" text="Every row records when information stopped and when the run was generated." /><Integrity title="Refuse overwrite" text="A run cannot replace an existing prediction directory." /><Integrity title="Manifest + checksum" text="Declared bytes and SHA-256 hashes are verified before display." /><Integrity title="Model-role clarity" text="Champion, locked research blend, and Elo reference remain distinct." /></div></div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl border border-amber-200/20 bg-amber-100/[0.05] p-7 sm:p-9"><p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-100">Responsible presentation</p><h2 className="mt-4 text-2xl font-semibold text-white">Statistical product, not league or betting endorsement.</h2><p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">Predictions are statistical estimates, not guarantees or financial advice.</p><p className="mt-3 max-w-4xl text-sm leading-7 text-slate-400">ClearStack Sports Predictor is an independent ClearStack Studio product and is not affiliated with or endorsed by the NFL or any team. No sportsbook links, betting transactions, league logos, team logos, or copyrighted league artwork are used on this page.</p></div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8"><div className="border border-emerald-300/20 bg-emerald-300/[0.05] p-8 text-center sm:p-10"><p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Build a data product</p><h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">Need a model-backed product with transparent outputs and a polished interface?</h2><p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-300">ClearStack Studio can help scope the first useful workflow, establish evidence boundaries, and turn the result into a responsive product surface.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><TrackedLink className="focus-ring inline-flex min-h-11 items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift" eventLabel="sports_predictor_start_project" eventName="start_project_click" href="/start" projectSlug={product.slug} projectType={product.category}>Start a similar project</TrackedLink><Link className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white" href="/projects">Compare proof projects</Link></div></div></section>
    </main>
  );
}

function Integrity({ title, text }: { title: string; text: string }) {
  return <article className="border border-white/10 bg-white/[0.035] p-5"><h3 className="font-semibold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{text}</p></article>;
}
