import Link from "next/link";

const services = [
  {
    title: "Websites",
    description:
      "Responsive, fast, modern sites that help customers understand what you offer and take the next step."
  },
  {
    title: "Mobile apps",
    description:
      "App experiences for validating ideas, serving users, and creating useful mobile-first workflows."
  },
  {
    title: "AI-powered tools",
    description:
      "AI-assisted prototypes and workflows like AI Fashion Model for creators, visual concepts, retail ideation, and practical business tools."
  },
  {
    title: "Internal dashboards",
    description:
      "Reviewer-friendly workflow dashboards like MSW Application Review for status tracking, structured information, and operational decision support."
  },
  {
    title: "MVPs",
    description:
      "Focused first versions that turn a product idea into something real enough to test, learn from, and improve."
  },
  {
    title: "Storefront MVPs",
    description:
      "Premium, inquiry-based storefront demos for beauty, wellness, fashion, lifestyle, food/product, boutique ecommerce, and creator merchandise brands before full checkout is connected."
  }
];

export function Services() {
  return (
    <section className="bg-[#081827] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            Services
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Digital product help for the first important version.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              className="border border-white/10 bg-slateInk p-6 transition hover:border-cyan-300/40"
              key={service.title}
            >
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                {service.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            className="focus-ring inline-flex items-center justify-center border border-cyan-300/40 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyanGlow hover:text-slate-950"
            href="/services"
          >
            Explore services
          </Link>
          <Link
            className="focus-ring inline-flex items-center justify-center border border-amber-100/30 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:border-amber-100 hover:text-white"
            href="/work/clearbloom-beauty/case-study"
          >
            See storefront MVP proof
          </Link>
        </div>
      </div>
    </section>
  );
}
