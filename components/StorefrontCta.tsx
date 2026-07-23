import Link from "next/link";

type StorefrontCtaProps = {
  eyebrow?: string;
  title?: string;
  text?: string;
  variant?: "rose" | "amber";
  proofHref?: string;
  proofLabel?: string;
  liveHref?: string;
  liveLabel?: string;
};

export function StorefrontCta({
  eyebrow = "Storefront MVP Package",
  title = "Build a storefront like this.",
  text = "ClearStack Studio can help shape a product brand into a polished storefront MVP before full checkout, inventory, shipping, and fulfillment systems are connected.",
  variant = "rose",
  proofHref,
  proofLabel = "See ClearBloom case study",
  liveHref,
  liveLabel = "View live storefront demo"
}: StorefrontCtaProps) {
  const isAmber = variant === "amber";

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
      <div
        className={`${
          isAmber
            ? "border-amber-100/20 bg-amber-100/[0.06]"
            : "border-rose-200/30 bg-rose-200/[0.08]"
        } border p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10`}
      >
        <div>
          <p
            className={`text-sm font-semibold uppercase tracking-[0.24em] ${
              isAmber ? "text-amber-100" : "text-rose-200"
            }`}
          >
            {eyebrow}
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-stone-300">
            {text}
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 lg:mt-0">
          <Link
            className="focus-ring inline-flex items-center justify-center bg-rose-200 px-6 py-3 text-sm font-semibold text-[#130d14] transition hover:bg-amber-100"
            href="/start"
          >
            Build a storefront like this
          </Link>
          <Link
            className="focus-ring inline-flex items-center justify-center border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-rose-200 hover:text-rose-100"
            href="/start"
          >
            Start a storefront inquiry
          </Link>
          {liveHref ? (
            <Link
              className="focus-ring inline-flex items-center justify-center border border-rose-200/40 px-6 py-3 text-sm font-semibold text-rose-100 transition hover:bg-rose-200 hover:text-[#130d14]"
              href={liveHref}
            >
              {liveLabel}
            </Link>
          ) : null}
          {proofHref ? (
            <Link
              className="focus-ring inline-flex items-center justify-center border border-amber-100/40 px-6 py-3 text-sm font-semibold text-amber-100 transition hover:bg-amber-100 hover:text-[#130d14]"
              href={proofHref}
            >
              {proofLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
