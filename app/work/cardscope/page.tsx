import type { Metadata } from "next";
import Link from "next/link";

const problems = [
  "Card values are scattered across tools, listings, notes, and memory.",
  "Collectors need a simpler way to check rough value before making a trade or sale.",
  "Sellers need collection records that are easier to update than spreadsheets.",
  "Hobbyists want useful pricing context without starting with a full scanner workflow."
];

const mvpFeatures = [
  {
    title: "Manual card search",
    text: "Look up a card by name, set, number, or variant before scanner tools are added."
  },
  {
    title: "Estimated prices",
    text: "Show practical price ranges and recent reference points as estimates, not guarantees."
  },
  {
    title: "Collection tracking",
    text: "Save cards, quantities, conditions, notes, and personal ownership details."
  },
  {
    title: "Pricing pages",
    text: "Give each tracked card a focused pricing view with the details collectors check most."
  },
  {
    title: "Pro-ready structure",
    text: "Prepare premium features without locking core collection basics behind a paywall."
  }
];

const roadmapItems = [
  "Camera-assisted scanner tools after the manual workflow is reliable.",
  "Mobile app experiences for quick lookups at shops, shows, and meetups.",
  "Deeper collection insights such as watchlists, value changes, and sell lists.",
  "Better support for multiple card categories as product quality improves."
];

const pricingPlans = [
  {
    name: "Free",
    description:
      "A useful starting point for casual collectors who want search, saved cards, and simple collection totals.",
    features: ["Manual search", "Basic collection tracking", "Simple estimated values"]
  },
  {
    name: "Pro",
    description:
      "A subscription-ready path for sellers and serious collectors who need more tracking power.",
    features: [
      "Larger collection limits",
      "Advanced pricing pages",
      "Watchlists and saved pricing views"
    ]
  }
];

const statusItems = [
  "Product concept and first-version scope are defined.",
  "Core product will start with manual search before scanner complexity.",
  "No live marketplace scraping, API keys, payment processing, or connected forms are included on this teaser page.",
  "CardScope is the first featured product by ClearStack Studio."
];

export const metadata: Metadata = {
  title: "CardScope",
  description:
    "CardScope is a card price scanner and collection tracker concept by ClearStack Studio for collectors, sellers, and hobbyists."
};

export default function CardScopePage() {
  return (
    <main className="bg-slateInk">
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-24 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            Featured Product
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            CardScope helps collectors price, track, and understand their cards.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            CardScope is the first featured product by ClearStack Studio. The
            first version focuses on manual card search, estimated prices,
            collection tracking, pricing pages, and subscription-ready Pro
            features.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Collectors", "Sellers", "Hobbyists"].map((audience) => (
              <span
                className="border border-emerald-300/30 bg-emerald-300/[0.08] px-3 py-2 text-sm text-emerald-100"
                key={audience}
              >
                {audience}
              </span>
            ))}
          </div>
        </div>

        <div className="border border-white/10 bg-white/[0.04] p-5 shadow-glow">
          <div className="border border-cyan-300/20 bg-[#081827] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
              Product Preview
            </p>
            <div className="mt-8 border border-white/10 bg-slateInk p-5">
              <p className="text-sm text-slate-400">Search result</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Charizard ex
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Saved to collection with condition, notes, quantity, and an
                estimated value range.
              </p>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="border border-white/10 bg-white/[0.04] p-4">
                <p className="text-sm text-slate-400">Estimated range</p>
                <p className="mt-2 text-3xl font-semibold text-cyanGlow">
                  $38-$48
                </p>
              </div>
              <div className="border border-white/10 bg-white/[0.04] p-4">
                <p className="text-sm text-slate-400">Collection total</p>
                <p className="mt-2 text-3xl font-semibold text-emeraldLift">
                  $1,284
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-400">
              Scanner tools and mobile apps come later, after the core product
              is reliable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            The Problem
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Pricing and tracking cards should not feel like managing five
            separate tools.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {problems.map((problem) => (
              <div
                className="border border-white/10 bg-white/[0.03] p-5 text-sm leading-6 text-slate-300"
                key={problem}
              >
                {problem}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
          MVP Features
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          The first release is built around the parts collectors need every day.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mvpFeatures.map((feature) => (
            <article
              className="border border-white/10 bg-white/[0.04] p-5"
              key={feature.title}
            >
              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {feature.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
              Future Roadmap
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Scanner and mobile tools come after the foundation works.
            </h2>
          </div>
          <div className="grid gap-4">
            {roadmapItems.map((item) => (
              <div
                className="border border-emerald-300/20 bg-emerald-300/[0.05] p-5 text-sm leading-6 text-slate-300"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
          Monetization
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          A simple Free and Pro concept keeps the product useful from the start.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {pricingPlans.map((plan) => (
            <article
              className="border border-white/10 bg-white/[0.04] p-6"
              key={plan.name}
            >
              <h3 className="text-2xl font-semibold text-white">
                {plan.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {plan.description}
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
                {plan.features.map((feature) => (
                  <li className="flex gap-3" key={feature}>
                    <span aria-hidden="true" className="text-cyanGlow">
                      -
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            Development Status
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            CardScope is in early product development.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {statusItems.map((item) => (
              <div
                className="border border-white/10 bg-white/[0.03] p-5 text-sm leading-6 text-slate-300"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="border border-cyan-300/20 bg-cyan-300/[0.06] p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
              From idea to app.
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Want to talk through CardScope or a product like it?
            </h2>
          </div>
          <Link
            className="focus-ring mt-8 inline-flex items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift lg:mt-0"
            href="/contact"
          >
            Contact ClearStack Studio
          </Link>
        </div>
      </section>
    </main>
  );
}
