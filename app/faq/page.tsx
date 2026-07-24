import type { Metadata } from "next";
import { TrackedLink } from "@/components/TrackedLink";
import { createSeoMetadata, socialImages } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "FAQ | ClearStack Studio",
  description:
    "Answers about ClearStack Studio services, pricing approach, timelines, revisions, ownership, hosting, privacy, launch, support, and project eligibility.",
  path: "/faq",
  image: socialImages.default,
  imageAlt: "ClearStack Studio FAQ social preview for project scope, pricing, timelines, privacy, and launch questions."
});

type FaqCategory = {
  title: string;
  description: string;
  questions: {
    question: string;
    answer: string;
  }[];
};

const categories: FaqCategory[] = [
  {
    title: "Getting Started",
    description: "How the first conversation begins and what information helps shape the right scope.",
    questions: [
      {
        question: "How do I start a project?",
        answer:
          "Use the Start Project page to describe the project type, goal, intended users, must-have features, timeline, and budget range. An inquiry starts a conversation and is not a binding contract."
      },
      {
        question: "What information should I provide?",
        answer:
          "Provide the project goal, target users, required features, existing links or materials, preferred timeline, and any known constraints. Do not submit passwords, API keys, payment details, or confidential records through the public form."
      },
      {
        question: "What happens after I submit an inquiry?",
        answer:
          "ClearStack reviews the request, clarifies the first useful version, identifies major dependencies, and prepares a proposed scope, timeline, and deliverables outline."
      },
      {
        question: "Is an inquiry a contract?",
        answer:
          "No. An inquiry is a request for discussion. Final scope, pricing, ownership, timeline, and responsibilities are confirmed separately in writing."
      }
    ]
  },
  {
    title: "Services and Scope",
    description: "What ClearStack builds and how advanced features are handled.",
    questions: [
      {
        question: "What types of projects does ClearStack Studio build?",
        answer:
          "ClearStack builds focused product MVPs, storefront MVPs, AI-powered prototypes, internal workflow dashboards, and website or app refreshes."
      },
      {
        question: "What is an MVP?",
        answer:
          "An MVP is the smallest useful version of a product that demonstrates the core experience, helps validate the idea, and creates a foundation for future development."
      },
      {
        question: "Can ClearStack build payments, accounts, databases, or APIs?",
        answer:
          "Yes, when those features are explicitly included in the approved scope. They are not assumed to be part of every first-version build."
      },
      {
        question: "Can ClearStack improve an existing website or app?",
        answer:
          "Yes. Website and app refresh projects can focus on structure, messaging, navigation, responsiveness, accessibility, performance, or conversion paths."
      },
      {
        question: "Can a prototype become a full product later?",
        answer:
          "Yes. A focused first version can be expanded later with authentication, payments, databases, external APIs, automation, mobile apps, or additional workflows when appropriate."
      }
    ]
  },
  {
    title: "Pricing and Payments",
    description: "How pricing is scoped without publishing unsupported fixed terms.",
    questions: [
      {
        question: "How is pricing determined?",
        answer:
          "Pricing depends on project type, scope, complexity, number of pages or workflows, technical requirements, third-party integrations, and timeline."
      },
      {
        question: "Do you publish fixed prices?",
        answer:
          "ClearStack may provide starting ranges or typical scope guidance, but final pricing is confirmed after the project requirements are reviewed."
      },
      {
        question: "Are hosting, domain, and subscription fees included?",
        answer:
          "Third-party costs are separate unless the written scope explicitly states otherwise. These may include domains, hosting, databases, authentication, payment processors, AI APIs, email providers, and other subscriptions."
      },
      {
        question: "Does the Start Project page collect payment?",
        answer:
          "No. The Start Project page does not collect payment or create a binding agreement."
      },
      {
        question: "How are payment milestones handled?",
        answer:
          "Payment schedules, deposits, and milestones are defined in the written project agreement before development begins. ClearStack does not publish specific deposit percentages or payment terms without an approved agreement."
      }
    ]
  },
  {
    title: "Timelines and Communication",
    description: "How dates, updates, decisions, and delays are handled.",
    questions: [
      {
        question: "How long does a project take?",
        answer:
          "Timelines depend on scope, complexity, content readiness, feedback speed, third-party services, and technical dependencies. Estimated dates are confirmed after scope review."
      },
      {
        question: "What can delay a project?",
        answer:
          "Common causes include delayed content, missing access, late approvals, expanding scope, third-party service issues, and unresolved decisions."
      },
      {
        question: "How will progress be communicated?",
        answer:
          "The communication channel and update cadence are agreed before work begins. Updates may include completed work, current priorities, blockers, decisions needed, and upcoming milestones."
      },
      {
        question: "Who should provide project decisions?",
        answer:
          "Where possible, the client should identify one primary decision-maker or provide consolidated feedback to reduce confusion and delays."
      }
    ]
  },
  {
    title: "Revisions and Change Requests",
    description: "How feedback stays connected to approved scope.",
    questions: [
      {
        question: "How many revisions are included?",
        answer:
          "Revision rounds depend on the approved project scope and agreement. ClearStack does not assume unlimited revisions."
      },
      {
        question: "What is the difference between a revision and new scope?",
        answer:
          "A revision adjusts an approved deliverable. New scope introduces an additional page, workflow, feature, integration, or requirement that was not part of the original agreement."
      },
      {
        question: "What happens when I request a new feature?",
        answer:
          "ClearStack reviews the request and explains whether it fits the current scope, requires a change request, or belongs in a future phase."
      },
      {
        question: "How should feedback be submitted?",
        answer:
          "Feedback should be consolidated, specific, and connected to the project goal. Fragmented feedback across multiple channels can slow the review process."
      }
    ]
  },
  {
    title: "Ownership and Handoff",
    description: "What ownership and delivery details are confirmed in writing.",
    questions: [
      {
        question: "Who owns the final code and assets?",
        answer:
          "Ownership and licensing are confirmed in the written agreement. ClearStack should not promise universal ownership terms without an approved project agreement."
      },
      {
        question: "Will I receive the source code?",
        answer:
          "Source-code access is provided when included in the approved scope and handoff plan."
      },
      {
        question: "What is included in the project handoff?",
        answer:
          "Depending on scope, handoff may include source repository access, deployment details, live URLs, documentation, known limitations, maintenance guidance, and future roadmap recommendations."
      },
      {
        question: "Who owns production accounts?",
        answer:
          "Client ownership of production domains, hosting, databases, payment processors, email providers, and other critical accounts is preferred where practical."
      }
    ]
  },
  {
    title: "Hosting and Third-Party Services",
    description: "How deployment platforms, accounts, and vendor costs are handled.",
    questions: [
      {
        question: "Does ClearStack provide hosting?",
        answer:
          "ClearStack can configure deployment and hosting when included in scope, but ongoing platform charges and account ownership are typically handled separately."
      },
      {
        question: "Can ClearStack deploy to Vercel?",
        answer:
          "Yes. Vercel is one possible deployment platform for supported projects, depending on the project architecture and scope."
      },
      {
        question: "What happens if a third-party service changes its pricing or policies?",
        answer:
          "Third-party providers control their own pricing, availability, limits, and policies. Those changes may affect the project independently of ClearStack."
      },
      {
        question: "Will I need my own accounts?",
        answer:
          "Production projects may require client-owned accounts for domains, hosting, databases, payment systems, authentication providers, email services, analytics, or APIs."
      }
    ]
  },
  {
    title: "Privacy and Sensitive Information",
    description: "What should never be sent through public forms and how public demos are handled.",
    questions: [
      {
        question: "Can I submit passwords or private credentials through the site?",
        answer:
          "No. Do not submit passwords, API keys, payment credentials, private documents, or protected records through public forms."
      },
      {
        question: "How should sensitive access be transferred?",
        answer:
          "Sensitive credentials should be transferred through an approved secure channel agreed during the project."
      },
      {
        question: "Do proof projects use real client or applicant data?",
        answer:
          "Public proof projects use fictional, static, or mock data unless clearly stated otherwise."
      },
      {
        question: "Does ClearStack store inquiry form data?",
        answer:
          "The current Start Project page uses a mailto and copyable summary flow. It does not submit information to a ClearStack database."
      },
      {
        question: "Does ClearStack track form contents?",
        answer:
          "No. Privacy-conscious analytics should not collect names, email addresses, project descriptions, budgets, or other inquiry contents."
      }
    ]
  },
  {
    title: "Launch and Post-Launch Support",
    description: "What happens before launch and how future support is scoped.",
    questions: [
      {
        question: "What happens before launch?",
        answer:
          "Launch readiness may include lint and build checks, key-route verification, responsive review, navigation checks, accessibility basics, metadata review, deployment verification, and documentation of known limitations."
      },
      {
        question: "Is post-launch support included?",
        answer:
          "Post-launch support depends on the approved scope and agreement. Ongoing maintenance or feature development may require a separate arrangement."
      },
      {
        question: "What happens if a bug is found after launch?",
        answer:
          "ClearStack reviews whether the issue is a defect within the agreed work, a third-party problem, a new requirement, or a future enhancement."
      },
      {
        question: "Can ClearStack continue improving the project?",
        answer:
          "Yes. Projects can continue through additional phases for new features, integrations, automation, performance work, content updates, or maintenance."
      }
    ]
  },
  {
    title: "Project Eligibility",
    description: "What makes a project a practical fit for a focused first version.",
    questions: [
      {
        question: "What projects are a good fit for ClearStack Studio?",
        answer:
          "Good-fit projects have a clear goal, a definable first version, an identifiable user or audience, and a willingness to prioritize must-have features."
      },
      {
        question: "What projects may not be a good fit?",
        answer:
          "Projects may not be a fit when they require unsupported regulated workflows, unclear ownership, unrealistic guarantees, unsafe handling of sensitive data, or an undefined scope with no prioritization."
      },
      {
        question: "Can ClearStack work with regulated or sensitive information?",
        answer:
          "Projects involving medical, student, financial, legal, or other protected information require additional privacy, security, compliance, and architecture review before any commitment is made."
      },
      {
        question: "Can ClearStack guarantee business results?",
        answer:
          "No. ClearStack can build and improve digital products, but cannot guarantee revenue, adoption, search rankings, fundraising, or other business outcomes."
      }
    ]
  }
];

const relatedLinks = [
  { label: "Services", href: "/services" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "About ClearStack", href: "/about" },
  { label: "Start a project", href: "/start" },
  { label: "Proof projects", href: "/projects" },
  { label: "Contact ClearStack", href: "/contact" }
];

export default function FaqPage() {
  return (
    <main className="bg-slateInk">
      <section className="relative isolate overflow-hidden bg-slateInk">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_82%_4%,rgba(52,211,153,0.12),transparent_28%)]"
        />
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
            ClearStack Studio · From idea to app.
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Clear answers before the build begins.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how ClearStack Studio approaches scope, pricing, timelines, ownership, revisions, launch, support, and future development.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              className="focus-ring inline-flex min-h-11 items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              ctaLocation="faq_hero"
              eventLabel="faq_hero_start_project"
              eventName="faq_start_project_click"
              href="/start"
            >
              Start a project
            </TrackedLink>
            <TrackedLink
              className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyanGlow hover:text-white"
              ctaLocation="faq_hero"
              eventLabel="faq_hero_view_services"
              eventName="faq_related_link_click"
              href="/services"
            >
              View services
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="bg-[#081827] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">FAQ categories</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Browse by the question clients usually need answered first.
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => (
              <a
                className="focus-ring border border-white/10 bg-slateInk p-4 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
                href={`#${category.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                key={category.title}
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slateInk py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="space-y-12">
            {categories.map((category) => (
              <section
                className="scroll-mt-24 border border-white/10 bg-white/[0.03] p-5 sm:p-7"
                id={category.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                key={category.title}
              >
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">{category.title}</p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {category.title} questions
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{category.description}</p>
                </div>
                <div className="mt-8 grid gap-4 lg:grid-cols-2">
                  {category.questions.map((item) => (
                    <article className="border border-white/10 bg-slateInk p-5" key={item.question}>
                      <h3 className="text-lg font-semibold leading-7 text-white">{item.question}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-300">{item.answer}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081827] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Related links</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Continue exploring the ClearStack Studio process.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedLinks.map((link) => (
              <TrackedLink
                className="focus-ring block border border-white/10 bg-slateInk p-5 transition hover:border-cyan-300/50"
                ctaLocation="faq_related_links"
                eventLabel={`faq_related_${link.href.replace(/[^a-z0-9]+/g, "_")}`}
                eventName="faq_related_link_click"
                href={link.href}
                key={link.href}
              >
                <span className="text-lg font-semibold text-white">{link.label}</span>
                <span className="mt-2 block text-sm leading-6 text-slate-300">Go to {link.href}</span>
              </TrackedLink>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slateInk px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl border border-cyan-300/20 bg-cyan-300/[0.06] p-8 text-center shadow-glow sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Next step</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Still deciding what the first version should include?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            Share the project goal, intended users, and must-have features. ClearStack Studio can help shape a focused starting scope.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackedLink
              className="focus-ring inline-flex min-h-11 items-center justify-center bg-cyanGlow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emeraldLift"
              ctaLocation="faq_final_cta"
              eventLabel="faq_final_start_project"
              eventName="faq_start_project_click"
              href="/start"
            >
              Start a project
            </TrackedLink>
            <TrackedLink
              className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white"
              ctaLocation="faq_final_cta"
              eventLabel="faq_final_contact_clearstack"
              eventName="faq_contact_click"
              href="/contact"
            >
              Contact ClearStack
            </TrackedLink>
          </div>
        </div>
      </section>
    </main>
  );
}
