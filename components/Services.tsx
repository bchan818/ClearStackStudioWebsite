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
      "Practical AI features and internal tools that reduce repetitive work and make information easier to use."
  },
  {
    title: "MVPs",
    description:
      "Focused first versions that turn a product idea into something real enough to test, learn from, and improve."
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
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
      </div>
    </section>
  );
}
