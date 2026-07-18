import type { Metadata } from "next";
import Link from "next/link";
import { StorefrontCta } from "@/components/StorefrontCta";
import { clearBloomLiveUrl, mswApplicationReviewDemoUrl } from "@/lib/siteLinks";

const contactReasons = [
  "MVP Launch Package",
  "Storefront MVP Package",
  "Website/App Refresh Package",
  "A mobile app prototype",
  "AI-powered tool inquiry",
  "Internal dashboard inquiry"
];

const projectDetails = [
  "What you want to build",
  "Your audience or customers",
  "Your ideal timeline",
  "Any examples, notes, or current tools"
];

const intakeQuestions = [
  {
    title: "Package fit",
    prompt:
      "Which package are you interested in: MVP Launch Package, Storefront MVP Package, or Website/App Refresh Package?"
  },
  {
    title: "Project goal",
    prompt: "What are you trying to build, launch, or improve?"
  },
  {
    title: "Audience",
    prompt: "Who is the product, storefront, website, or app for?"
  },
  {
    title: "Needed scope",
    prompt: "What pages, features, products, workflows, or content sections do you need?"
  },
  {
    title: "Starting materials",
    prompt: "Do you already have branding, copy, product info, screenshots, examples, or a current site?"
  },
  {
    title: "Timeline and success",
    prompt: "What timeline are you aiming for, and what would make the project successful?"
  }
];

const inquiryPaths = [
  {
    title: "MVP Launch Package",
    text: "For founders, creators, or small businesses that need a first working product with core flow, key pages, deployment, and launch-ready MVP structure.",
    href: "mailto:hello@clearstack.studio?subject=MVP%20Launch%20Package%20inquiry%20for%20ClearStack%20Studio",
    cta: "Start an MVP inquiry"
  },
  {
    title: "Storefront MVP Package",
    text: "Want a storefront like ClearBloom Beauty? This path is for beauty, wellness, fashion, lifestyle, food/product, boutique ecommerce, or creator merchandise brands that need a polished catalog, brand visuals, inquiry checkout, policies, and storefront launch structure before real commerce is connected.",
    href: "mailto:hello@clearstack.studio?subject=Storefront%20MVP%20Package%20inquiry%20for%20ClearStack%20Studio",
    cta: "Start a storefront inquiry"
  },
  {
    title: "Website/App Refresh Package",
    text: "For businesses that need content cleanup, improved layout, responsive design, navigation updates, service/work sections, and deployment polish.",
    href: "mailto:hello@clearstack.studio?subject=Website%2FApp%20Refresh%20Package%20inquiry%20for%20ClearStack%20Studio",
    cta: "Start a refresh inquiry"
  },
  {
    title: "AI-powered tool inquiry",
    text: "For creators, retail teams, product ideas, and business workflows that need an AI-assisted prototype before real AI APIs, accounts, or databases are connected.",
    href: "mailto:hello@clearstack.studio?subject=AI-powered%20tool%20inquiry%20for%20ClearStack%20Studio",
    cta: "Start an AI tool inquiry"
  },
  {
    title: "Internal dashboard inquiry",
    text: "For teams that need structured reviewer queues, applicant/status tracking, review notes, reports, export planning, administrative workflows, or privacy-conscious internal dashboard MVPs using safe mock scope first. See the MSW Application Review live mock-data dashboard demo as proof.",
    href: "mailto:hello@clearstack.studio?subject=Internal%20dashboard%20inquiry%20for%20ClearStack%20Studio",
    cta: "Start a dashboard inquiry"
  }
];

const proofLinks = [
  {
    title: "CardScope case study",
    text: "Live card collection MVP and ClearStack Studio proof point.",
    href: "/work/cardscope/case-study"
  },
  {
    title: "ClearBloom Beauty Storefront MVP case study",
    text: "Fictional inquiry-based storefront MVP proof for premium beauty, wellness, fashion, lifestyle, food/product, boutique ecommerce, and creator merchandise brands.",
    href: "/work/clearbloom-beauty/case-study"
  },
  {
    title: "AI Fashion Model case study",
    text: "AI-assisted creative and product visualization prototype proof for creators, fashion, retail, and product ideation workflows.",
    href: "/work/ai-fashion-model/case-study"
  },
  {
    title: "View live dashboard demo",
    text: "Public-safe dashboard demo using fictional mock applicant data only.",
    href: mswApplicationReviewDemoUrl
  },
  {
    title: "MSW Application Review case study",
    text: "Live mock-data internal workflow dashboard demo for structured application review, reviewer assignment flows, status tracking, reports, export planning, and privacy-conscious dashboard design.",
    href: "/work/msw-application-review/case-study"
  }
];

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact ClearStack Studio to discuss a website, mobile app, AI tool, storefront, or MVP project."
};

export default function ContactPage() {
  return (
    <main className="bg-slateInk">
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Tell ClearStack Studio what you want to build next.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Share the idea, goal, or messy first draft. ClearStack Studio can
            help turn it into a clear plan and a modern digital product.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {contactReasons.map((reason) => (
              <div
                className="border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
                key={reason}
              >
                {reason}
              </div>
            ))}
          </div>
        </div>

        <div className="border border-white/10 bg-white/[0.04] p-6 shadow-glow sm:p-8">
          <h2 className="text-2xl font-semibold text-white">
            Project inquiry
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Email is the simplest first step for this version of the site. A
            short note is enough to begin.
          </p>
          <Link
            className="focus-ring mt-8 inline-flex w-full items-center justify-center bg-cyanGlow px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
            href="mailto:hello@clearstack.studio?subject=Project%20inquiry%20for%20ClearStack%20Studio"
          >
            Email hello@clearstack.studio
          </Link>
          <Link
            className="focus-ring mt-3 inline-flex w-full items-center justify-center border border-white/15 px-5 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
            href="/start"
          >
            Choose a project path first
          </Link>
          <div className="mt-6 border border-emerald-300/20 bg-emerald-300/[0.06] p-4">
            <p className="text-sm font-medium leading-6 text-emerald-50">
              Best for early-stage ideas, practical rebuilds, focused MVPs, and
              storefront concepts where the next step needs to get clear fast.
            </p>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-sm font-semibold text-slate-100">
              Helpful details to include
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              {projectDetails.map((detail) => (
                <li className="flex gap-3" key={detail}>
                  <span aria-hidden="true" className="text-cyanGlow">
                    -
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <StorefrontCta
        eyebrow="Storefront MVP Package proof"
        title="Want a storefront like ClearBloom Beauty?"
        text="ClearBloom Beauty is a fictional, inquiry-based storefront MVP that shows how ClearStack Studio can package premium product pages, catalog structure, policy pages, and a future ecommerce upgrade path for beauty, wellness, fashion, lifestyle, food/product, boutique ecommerce, and creator merchandise brands."
        variant="amber"
        liveHref={clearBloomLiveUrl}
        liveLabel="View live storefront demo"
        proofHref="/work/clearbloom-beauty/case-study"
        proofLabel="See ClearBloom case study"
      />

      <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
            Choose a starting point
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Pick the inquiry path that best matches your project.
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {inquiryPaths.map((path) => (
              <article
                className="border border-white/10 bg-white/[0.04] p-6"
                key={path.title}
              >
                <h3 className="text-xl font-semibold text-white">
                  {path.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {path.text}
                </p>
                <Link
                  className="focus-ring mt-6 inline-flex items-center justify-center border border-cyan-300/40 px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyanGlow hover:text-slate-950"
                  href={path.href}
                >
                  {path.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="border border-emerald-300/20 bg-emerald-300/[0.05] p-8 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">
                Project Intake Checklist
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Send these details so the first reply can be specific.
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">
                No form backend is connected yet. Use this checklist to write a clear first email and choose the right package path.
              </p>
            </div>
            <Link
              className="focus-ring inline-flex items-center justify-center bg-cyanGlow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              href="mailto:hello@clearstack.studio?subject=Project%20intake%20for%20ClearStack%20Studio"
            >
              Email your project details
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {intakeQuestions.map((question, index) => (
              <article
                className="border border-white/10 bg-slateInk/70 p-5"
                key={question.title}
              >
                <p className="text-sm font-semibold text-cyanGlow">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {question.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {question.prompt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="border border-cyan-300/20 bg-cyan-300/[0.05] p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            Proof before you reach out
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Review recent ClearStack Studio builds before starting your project.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {proofLinks.map((link) => (
              <Link
                className="focus-ring block border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300/50"
                href={link.href}
                key={link.title}
              >
                <h3 className="text-lg font-semibold text-white">
                  {link.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {link.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
