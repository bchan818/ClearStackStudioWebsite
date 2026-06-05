const steps = [
  {
    title: "Clarify",
    description:
      "Define the goal, audience, features, and simplest useful first version."
  },
  {
    title: "Design",
    description:
      "Shape the user flow, interface, and technical plan before the build gets heavy."
  },
  {
    title: "Build",
    description:
      "Develop the product with clean code, responsive layouts, and practical iteration."
  },
  {
    title: "Launch",
    description:
      "Prepare the first version for real users, feedback, and the next round of improvement."
  }
];

export function Process() {
  return (
    <section className="bg-slateInk py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
              Process
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A clear path from rough idea to usable product.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, index) => (
              <article
                className="border border-white/10 bg-white/[0.03] p-6"
                key={step.title}
              >
                <p className="text-sm font-semibold text-emeraldLift">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
