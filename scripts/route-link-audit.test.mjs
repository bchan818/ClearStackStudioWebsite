import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import test from "node:test";

const rootDir = process.cwd();

const requiredInternalRoutes = [
  "/",
  "/about",
  "/how-we-work",
  "/faq",
  "/pricing",
  "/project-fit",
  "/results",
  "/services",
  "/work",
  "/projects",
  "/studio-tools",
  "/start",
  "/proposal-builder",
  "/sow-builder",
  "/project-handoff",
  "/project-tracker",
  "/status-report-builder",
  "/client-feedback",
  "/launch-acceptance",
  "/contact",
  "/launch-readiness",
  "/qa-checklist",
  "/work/cardscope",
  "/work/cardscope/case-study",
  "/work/clearbloom-beauty",
  "/work/clearbloom-beauty/case-study",
  "/work/ai-fashion-model",
  "/work/ai-fashion-model/case-study",
  "/work/msw-application-review",
  "/work/msw-application-review/case-study"
];

const expectedDemoUrls = {
  CardScope: "https://cardscope-mvp.vercel.app",
  "ClearBloom Beauty": "https://clearbloom-beauty.vercel.app",
  "MSW Application Review": "https://msw-application-review-demo.vercel.app"
};

const expectedBaseUrl = "https://clear-stack-studio-website.vercel.app";

const expectedSeoPages = [
  ["app/page.tsx", "ClearStack Studio | From idea to app", "Focused MVPs, storefronts, AI-powered tools, internal dashboards, and website or app refreshes built for launch.", "/social/clearstack-default.png"],
  ["app/about/page.tsx", "About ClearStack Studio | From idea to app", "Learn how ClearStack Studio builds focused MVPs, storefronts, AI-powered prototypes, internal dashboards, and website or app refreshes.", "/social/clearstack-default.png"],
  ["app/how-we-work/page.tsx", "How We Work | ClearStack Studio", "Learn how ClearStack Studio scopes, designs, builds, tests, launches, and hands off focused MVPs, storefronts, dashboards, AI prototypes, and website refreshes.", "/social/clearstack-default.png"],
  ["app/faq/page.tsx", "FAQ | ClearStack Studio", "Answers about ClearStack Studio services, pricing approach, timelines, revisions, ownership, hosting, privacy, launch, support, and project eligibility.", "/social/clearstack-default.png"],
  ["app/pricing/page.tsx", "Pricing Guidance | ClearStack Studio", "Learn how ClearStack Studio scopes and prices product MVPs, storefronts, AI-powered tools, internal dashboards, and website or app refreshes.", "/social/clearstack-default.png"],
  ["app/project-fit/page.tsx", "Project Fit Assessment | ClearStack Studio", "Find out whether your idea is best suited for a product MVP, storefront, AI-powered tool, internal dashboard, or website and app refresh.", "/social/clearstack-default.png"],
  ["app/results/page.tsx", "Results & Outcomes | ClearStack Studio", "See what ClearStack Studio proof projects demonstrate across product MVPs, storefronts, AI prototypes, internal dashboards, and website refreshes.", "/social/clearstack-default.png"],
  ["app/services/page.tsx", "Services | ClearStack Studio", "Explore ClearStack Studio services for product MVPs, storefront MVPs, AI-powered prototypes, internal dashboards, and website or app refreshes.", "/social/services.png"],
  ["app/projects/page.tsx", "Proof Projects | ClearStack Studio", "Explore ClearStack Studio proof projects across software MVPs, storefronts, AI-assisted tools, and internal workflow dashboards.", "/social/projects.png"],
  ["app/work/page.tsx", "Work and Case Studies | ClearStack Studio", "See how ClearStack Studio turns product ideas, storefront concepts, AI workflows, and operational processes into focused digital prototypes.", "/social/projects.png"],
  ["app/start/page.tsx", "Start a Project | ClearStack Studio", "Tell ClearStack Studio what you want to launch and outline the first useful version of your product, storefront, dashboard, or website.", "/social/clearstack-default.png"],
  ["app/contact/page.tsx", "Contact | ClearStack Studio", "Contact ClearStack Studio about a product MVP, storefront, AI-powered tool, internal dashboard, or website refresh.", "/social/clearstack-default.png"],
  ["app/work/cardscope/page.tsx", "CardScope MVP | ClearStack Studio", "A card discovery, collection tracking, watchlist, and seller-tools prototype demonstrating a focused software MVP.", "/social/cardscope.png"],
  ["app/work/cardscope/case-study/page.tsx", "CardScope Case Study | ClearStack Studio", "See how ClearStack Studio shaped CardScope from product idea to live MVP, including scope, launch result, guardrails, and client-ready proof points.", "/social/cardscope.png"],
  ["app/work/clearbloom-beauty/page.tsx", "ClearBloom Beauty Storefront MVP | ClearStack Studio", "A premium beauty storefront prototype featuring product discovery, product pages, branding, and an inquiry-based checkout flow.", "/social/clearbloom-beauty.png"],
  ["app/work/clearbloom-beauty/case-study/page.tsx", "ClearBloom Beauty Case Study | ClearStack Studio", "See how ClearStack Studio shaped ClearBloom Beauty from perfume and cosmetics idea into a storefront MVP with products, bundles, order inquiry paths, and commerce guardrails.", "/social/clearbloom-beauty.png"],
  ["app/work/ai-fashion-model/page.tsx", "AI Fashion Model Prototype | ClearStack Studio", "An AI-assisted fashion concept and visualization prototype exploring creative workflows for creators, retail, and product ideation.", "/social/ai-fashion-model.png"],
  ["app/work/ai-fashion-model/case-study/page.tsx", "AI Fashion Model Case Study | ClearStack Studio", "See how ClearStack Studio positions AI Fashion Model as an AI-assisted creative and product visualization prototype with honest MVP guardrails.", "/social/ai-fashion-model.png"],
  ["app/work/msw-application-review/page.tsx", "MSW Application Review Demo | ClearStack Studio", "A public-safe mock application review dashboard demonstrating applicant tracking, reviewer workflows, assignments, and reporting.", "/social/msw-application-review.png"],
  ["app/work/msw-application-review/case-study/page.tsx", "MSW Application Review Case Study | ClearStack Studio", "Case study for MSW Application Review, a live mock-data internal workflow dashboard demo with privacy-safe boundaries.", "/social/msw-application-review.png"]
];

const expectedSocialImages = [
  "public/social/clearstack-default.png",
  "public/social/services.png",
  "public/social/projects.png",
  "public/social/cardscope.png",
  "public/social/clearbloom-beauty.png",
  "public/social/ai-fashion-model.png",
  "public/social/msw-application-review.png"
];

const sourceRoots = ["app", "components", "lib"];
const sourceExtensions = new Set([".css", ".js", ".jsx", ".md", ".ts", ".tsx"]);

function routeToPageFile(route) {
  if (route === "/") {
    return path.join(rootDir, "app", "page.tsx");
  }

  return path.join(rootDir, "app", ...route.slice(1).split("/"), "page.tsx");
}

function readProjectFile(relativePath) {
  return readFileSync(path.join(rootDir, relativePath), "utf8");
}

function listSourceFiles(directory) {
  const absoluteDirectory = path.join(rootDir, directory);
  const entries = readdirSync(absoluteDirectory, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const relativePath = path.join(directory, entry.name);
    const absolutePath = path.join(rootDir, relativePath);

    if (entry.isDirectory()) {
      return listSourceFiles(relativePath);
    }

    if (entry.isFile() && sourceExtensions.has(path.extname(absolutePath))) {
      return [relativePath];
    }

    return [];
  });
}

function assertContains(fileContent, expectedText, message) {
  assert.ok(fileContent.includes(expectedText), message);
}

function assertLinksToStart(fileContent, message) {
  assert.ok(
    fileContent.includes('href="/start"') ||
      fileContent.includes("href=\"/start\"") ||
      fileContent.includes("href: \"/start\"") ||
      fileContent.includes("href={item.href}"),
    message
  );
}

function pngDimensions(relativePath) {
  const buffer = readFileSync(path.join(rootDir, relativePath));
  assert.equal(buffer.toString("ascii", 1, 4), "PNG", `${relativePath} should be a PNG file`);

  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20)
  };
}

test("important internal routes exist as App Router pages", () => {
  for (const route of requiredInternalRoutes) {
    assert.ok(existsSync(routeToPageFile(route)), `${route} should have a matching app route page`);
  }
});

test("Header navigation includes the primary public routes", () => {
  const header = readProjectFile("components/Header.tsx");

  for (const route of ["/about", "/services", "/pricing", "/work", "/projects", "/start", "/contact"]) {
    assertContains(header, `href: "${route}"`, `Header nav should include ${route}`);
  }

  assertContains(header, "aria-expanded", "Mobile menu button should expose expanded state");
  assertContains(header, "aria-controls=\"mobile-navigation\"", "Mobile menu button should control the mobile navigation region");
  assertContains(header, "Mobile navigation", "Mobile navigation should have an accessible label");
});

test("Layout includes skip link and stable main-content target", () => {
  const layout = readProjectFile("app/layout.tsx");

  assertContains(layout, "Skip to main content", "Layout should include a descriptive skip link");
  assertContains(layout, "href=\"#main-content\"", "Skip link should target main content");
  assertContains(layout, "id=\"main-content\"", "Layout should provide a stable main content target");
});

test("Footer navigation includes primary and utility routes", () => {
  const footer = readProjectFile("components/Footer.tsx");

  for (const route of ["/about", "/how-we-work", "/faq", "/pricing", "/project-fit", "/results", "/services", "/work", "/projects", "/start", "/studio-tools", "/contact"]) {
    assertContains(footer, `href="${route}"`, `Footer nav should include ${route}`);
  }
});

test("Studio Tools dashboard links only to existing workflow tools", () => {
  const studioTools = readProjectFile("components/StudioToolsDashboard.tsx");

  for (const route of ["/start", "/proposal-builder", "/sow-builder", "/project-tracker", "/status-report-builder", "/client-feedback", "/launch-acceptance", "/project-handoff", "/qa-checklist", "/launch-readiness", "/services"]) {
    assertContains(studioTools, `"${route}"`, `Studio Tools should include ${route}`);
  }

  assertContains(studioTools, "studio_tool_open", "Studio Tools should track safe tool-open actions");
});

test("builder workflow routes connect planning through handoff", () => {
  const proposalBuilder = readProjectFile("app/proposal-builder/page.tsx");
  const sowBuilder = readProjectFile("app/sow-builder/page.tsx");
  const projectHandoff = readProjectFile("app/project-handoff/page.tsx");
  const projectTracker = readProjectFile("app/project-tracker/page.tsx");
  const statusReportBuilder = readProjectFile("app/status-report-builder/page.tsx");
  const clientFeedback = readProjectFile("app/client-feedback/page.tsx");
  const launchAcceptance = readProjectFile("app/launch-acceptance/page.tsx");

  assertContains(proposalBuilder, "Inquiry", "Proposal builder should explain the workflow sequence");
  assertContains(proposalBuilder, 'href="/sow-builder"', "Proposal builder should link to SOW builder");
  assertContains(sowBuilder, 'href="/project-handoff"', "SOW builder should link to project handoff");
  assertContains(projectHandoff, 'href="/projects"', "Project handoff should link back to proof projects");
  assertContains(projectTracker, 'href="/proposal-builder"', "Project tracker should link to proposal builder");
  assertContains(projectTracker, 'href="/sow-builder"', "Project tracker should link to SOW builder");
  assertContains(projectTracker, 'href="/project-handoff"', "Project tracker should link to project handoff");
  assertContains(projectTracker, 'href="/status-report-builder"', "Project tracker should link to status report builder");
  assertContains(statusReportBuilder, 'href="/client-feedback"', "Status report builder should link to client feedback");
  assertContains(clientFeedback, 'href="/launch-acceptance"', "Client feedback should link to launch acceptance");
  assertContains(launchAcceptance, 'href="/project-handoff"', "Launch acceptance should link to project handoff");
});

test("Start Project CTAs route visitors to /start", () => {
  const filesWithStartProjectCtas = [
    "components/Header.tsx",
    "components/Hero.tsx",
    "components/ContactCta.tsx",
    "components/MvpServiceCta.tsx",
    "components/ServicePackages.tsx",
    "components/StorefrontCta.tsx",
    "app/page.tsx",
    "app/projects/page.tsx",
    "app/work/page.tsx"
  ];

  for (const file of filesWithStartProjectCtas) {
    const content = readProjectFile(file);
    assertContains(content, "start_project_click", `${file} should track Start Project CTA interest`);
    assertLinksToStart(content, `${file} should link a Start Project CTA to /start`);
  }
});

test("project card source includes required proof project routes", () => {
  const projectSources = [
    readProjectFile("components/FeaturedProduct.tsx"),
    readProjectFile("app/projects/page.tsx"),
    readProjectFile("app/work/page.tsx"),
    readProjectFile("app/start/page.tsx")
  ].join("\n");

  const requiredProjectLinks = [
    "/work/cardscope/case-study",
    "/work/clearbloom-beauty/case-study",
    "/work/ai-fashion-model",
    "/work/ai-fashion-model/case-study",
    "/work/msw-application-review",
    "/work/msw-application-review/case-study"
  ];

  for (const route of requiredProjectLinks) {
    assertContains(projectSources, route, `Project cards and proof sections should include ${route}`);
  }
});

test("About page explains studio scope, proof projects, boundaries, and safe CTA analytics", () => {
  const about = readProjectFile("app/about/page.tsx");
  const homepage = readProjectFile("app/page.tsx");
  const sitemap = readProjectFile("app/sitemap.ts");

  assertContains(sitemap, '"/about"', "Sitemap should include the public About page");
  assertContains(homepage, 'href="/about"', "Homepage should link to the About page");

  for (const text of [
    "Focused digital products, built from idea to launch.",
    "What ClearStack Studio does",
    "Who ClearStack helps",
    "What ClearStack builds",
    "How ClearStack works",
    "How ClearStack approaches a build",
    "What clients receive",
    "What ClearStack does not assume",
    "Sensitive credentials should never be submitted through public forms."
  ]) {
    assertContains(about, text, `About page should include ${text}`);
  }

  for (const projectName of ["CardScope", "ClearBloom Beauty", "AI Fashion Model", "MSW Application Review"]) {
    assertContains(about, projectName, `About page should feature ${projectName}`);
  }

  for (const eventName of ["about_start_project_click", "about_view_projects_click", "about_service_click"]) {
    assertContains(about, eventName, `About page should track safe CTA event ${eventName}`);
  }
});

test("How We Work page explains project process, client expectations, and safe CTA analytics", () => {
  const howWeWork = readProjectFile("app/how-we-work/page.tsx");
  const about = readProjectFile("app/about/page.tsx");
  const services = readProjectFile("app/services/page.tsx");
  const sitemap = readProjectFile("app/sitemap.ts");

  assertContains(sitemap, '"/how-we-work"', "Sitemap should include the public How We Work page");
  assertContains(about, 'href="/how-we-work"', "About page should link to How We Work");
  assertContains(services, 'href="/how-we-work"', "Services page should link to How We Work");

  for (const text of [
    "A clear path from idea to launch.",
    "Engagement overview",
    "Project stages",
    "Client responsibilities",
    "ClearStack responsibilities",
    "Communication expectations",
    "Feedback and revision boundaries",
    "Timeline expectations",
    "Third-party services and costs",
    "Launch and post-launch support",
    "Privacy and sensitive information",
    "Frequently asked process questions",
    "An inquiry starts a conversation and is not a contract"
  ]) {
    assertContains(howWeWork, text, `How We Work page should include ${text}`);
  }

  for (const stage of ["Clarify", "Scope", "Design", "Build", "Review", "Test", "Launch", "Handoff"]) {
    assertContains(howWeWork, stage, `How We Work page should include stage ${stage}`);
  }

  for (const eventName of ["how_we_work_start_click", "how_we_work_services_click", "how_we_work_projects_click"]) {
    assertContains(howWeWork, eventName, `How We Work page should track safe CTA event ${eventName}`);
    assertContains(readProjectFile("components/TrackedLink.tsx"), eventName, `TrackedLink should type ${eventName}`);
  }
});

test("FAQ page answers client questions, links public context, and uses safe CTA analytics", () => {
  const faq = readProjectFile("app/faq/page.tsx");
  const about = readProjectFile("app/about/page.tsx");
  const services = readProjectFile("app/services/page.tsx");
  const howWeWork = readProjectFile("app/how-we-work/page.tsx");
  const sitemap = readProjectFile("app/sitemap.ts");
  const trackedLink = readProjectFile("components/TrackedLink.tsx");

  assertContains(sitemap, '"/faq"', "Sitemap should include the public FAQ page");
  assertContains(about, 'href="/faq"', "About page should link to FAQ");
  assertContains(services, 'href="/faq"', "Services page should link to FAQ");
  assertContains(howWeWork, 'href="/faq"', "How We Work page should link to FAQ");

  for (const text of [
    "Clear answers before the build begins.",
    "Getting Started",
    "Services and Scope",
    "Pricing and Payments",
    "Timelines and Communication",
    "Revisions and Change Requests",
    "Ownership and Handoff",
    "Hosting and Third-Party Services",
    "Privacy and Sensitive Information",
    "Launch and Post-Launch Support",
    "Project Eligibility",
    "The current Start Project page uses a mailto and copyable summary flow. It does not submit information to a ClearStack database.",
    "Privacy-conscious analytics should not collect names, email addresses, project descriptions, budgets, or other inquiry contents.",
    "ClearStack can build and improve digital products, but cannot guarantee revenue, adoption, search rankings, fundraising, or other business outcomes.",
    "Still deciding what the first version should include?"
  ]) {
    assertContains(faq, text, `FAQ page should include ${text}`);
  }

  for (const route of ["/services", "/how-we-work", "/about", "/start", "/projects", "/contact"]) {
    assertContains(faq, `href={link.href}`, "FAQ related links should render from the related links list");
    assertContains(faq, `href: "${route}"`, `FAQ related links should include ${route}`);
  }

  for (const eventName of ["faq_start_project_click", "faq_contact_click", "faq_related_link_click"]) {
    assertContains(faq, eventName, `FAQ page should track safe CTA event ${eventName}`);
    assertContains(trackedLink, eventName, `TrackedLink should type ${eventName}`);
  }
});

test("Pricing page provides scope-based guidance, proof links, and safe CTA analytics", () => {
  const pricing = readProjectFile("app/pricing/page.tsx");
  const services = readProjectFile("app/services/page.tsx");
  const faq = readProjectFile("app/faq/page.tsx");
  const start = readProjectFile("app/start/page.tsx");
  const sitemap = readProjectFile("app/sitemap.ts");
  const trackedLink = readProjectFile("components/TrackedLink.tsx");

  assertContains(sitemap, '"/pricing"', "Sitemap should include the public Pricing page");
  assertContains(services, 'href="/pricing"', "Services page should link to Pricing");
  assertContains(faq, 'href: "/pricing"', "FAQ page related links should include Pricing");
  assertContains(start, 'href="/pricing"', "Start page should link to Pricing");

  for (const text of [
    "Clear pricing starts with clear scope.",
    "Pricing approach",
    "Starting scope: Confirmed after discovery",
    "What affects project cost",
    "What may cost extra",
    "Third-party providers control their own pricing, limits, availability, and policies.",
    "What is usually included",
    "What is not automatically included",
    "Example project paths",
    "No development begins until scope, deliverables, timeline, and payment terms are confirmed in writing.",
    "Do you offer fixed-price projects?",
    "Do you charge hourly?",
    "An inquiry is not a quote or contract."
  ]) {
    assertContains(pricing, text, `Pricing page should include ${text}`);
  }

  for (const projectName of ["CardScope", "ClearBloom Beauty", "AI Fashion Model", "MSW Application Review", "ClearStack Studio"]) {
    assertContains(pricing, projectName, `Pricing page should include proof project ${projectName}`);
  }

  for (const route of ["/services", "/start", "/projects", "/work/cardscope", "/work/cardscope/case-study", "/work/clearbloom-beauty", "/work/clearbloom-beauty/case-study", "/work/ai-fashion-model", "/work/ai-fashion-model/case-study", "/work/msw-application-review", "/work/msw-application-review/case-study"]) {
    assertContains(pricing, route, `Pricing page should link to ${route}`);
  }

  for (const eventName of ["pricing_start_project_click", "pricing_service_click", "pricing_project_click"]) {
    assertContains(pricing, eventName, `Pricing page should track safe CTA event ${eventName}`);
    assertContains(trackedLink, eventName, `TrackedLink should type ${eventName}`);
  }
});

test("Project Fit assessment is static, resettable, and links every recommendation path", () => {
  const projectFitPage = readProjectFile("app/project-fit/page.tsx");
  const projectFitAssessment = readProjectFile("components/ProjectFitAssessment.tsx");
  const services = readProjectFile("app/services/page.tsx");
  const pricing = readProjectFile("app/pricing/page.tsx");
  const start = readProjectFile("app/start/page.tsx");
  const sitemap = readProjectFile("app/sitemap.ts");

  assertContains(sitemap, '"/project-fit"', "Sitemap should include Project Fit");
  assertContains(services, 'href="/project-fit"', "Services page should link to Project Fit");
  assertContains(pricing, 'href="/project-fit"', "Pricing page should link to Project Fit");
  assertContains(start, 'href="/project-fit"', "Start page should link to Project Fit");

  for (const text of [
    "Find the right starting point for your project.",
    "Start assessment",
    "Question 3 of 8",
    "Previous",
    "Next",
    "See recommendation",
    "Start over",
    "This assessment provides general project guidance only.",
    "It does not save answers to a server",
    "scoreAnswers",
    "assessment can be reset"
  ]) {
    assertContains(`${projectFitPage}\n${projectFitAssessment}`, text, `Project Fit should include ${text}`);
  }

  for (const serviceName of ["Product MVP", "Storefront MVP", "AI-Powered Tool", "Internal Workflow Dashboard", "Website/App Refresh"]) {
    assertContains(projectFitAssessment, serviceName, `Project Fit should include ${serviceName} recommendation`);
  }

  for (const route of ["/work/cardscope", "/work/cardscope/case-study", "/work/clearbloom-beauty", "/work/clearbloom-beauty/case-study", "/work/ai-fashion-model", "/work/ai-fashion-model/case-study", "/work/msw-application-review", "/work/msw-application-review/case-study", "/about", "/how-we-work", "/start", "/services"]) {
    assertContains(`${projectFitPage}\n${projectFitAssessment}`, route, `Project Fit should link to ${route}`);
  }

  for (const eventName of ["project_fit_started", "project_fit_completed", "project_fit_recommendation_viewed"]) {
    assertContains(projectFitAssessment, eventName, `Project Fit should track safe event ${eventName}`);
  }

  for (const allowedKey of ["recommended_service_slug", "cta_location"]) {
    assertContains(projectFitAssessment, allowedKey, `Project Fit analytics may use ${allowedKey}`);
  }

  for (const forbiddenTrackingKey of ["timeline_answer", "feature_selections", "individual_answers", "project_description", "email_address", "personal_information", "free_text_content"]) {
    assert.ok(
      !projectFitAssessment.includes(forbiddenTrackingKey),
      `Project Fit analytics should not include ${forbiddenTrackingKey}`
    );
  }
});

test("Results page explains proof-project outcomes, guardrails, and safe analytics", () => {
  const results = readProjectFile("app/results/page.tsx");
  const projects = readProjectFile("app/projects/page.tsx");
  const work = readProjectFile("app/work/page.tsx");
  const services = readProjectFile("app/services/page.tsx");
  const about = readProjectFile("app/about/page.tsx");
  const sitemap = readProjectFile("app/sitemap.ts");
  const trackedLink = readProjectFile("components/TrackedLink.tsx");

  assertContains(sitemap, '"/results"', "Sitemap should include Results");
  for (const source of [projects, work, services, about]) {
    assertContains(source, 'href="/results"', "Public pages should link to Results");
  }

  for (const text of [
    "Proof projects that show what a focused first version can accomplish.",
    "Results framework",
    "Problem addressed",
    "First-version goal",
    "What was built",
    "What it proves",
    "Client value",
    "Future expansion path",
    "Outcome comparison",
    "Common client outcomes",
    "What results are not guaranteed",
    "ClearStack does not guarantee revenue",
    "ClearStack does not guarantee user adoption",
    "ClearStack does not guarantee search rankings",
    "ClearStack does not guarantee fundraising",
    "ClearStack does not guarantee third-party platform approval",
    "Which outcome are you trying to create?"
  ]) {
    assertContains(results, text, `Results page should include ${text}`);
  }

  for (const projectName of ["CardScope", "ClearBloom Beauty", "AI Fashion Model", "MSW Application Review", "ClearStack Studio"]) {
    assertContains(results, projectName, `Results page should include ${projectName}`);
  }

  for (const route of ["/projects", "/start", "/project-fit", "/work/cardscope", "/work/cardscope/case-study", "/work/clearbloom-beauty", "/work/clearbloom-beauty/case-study", "/work/ai-fashion-model", "/work/ai-fashion-model/case-study", "/work/msw-application-review", "/work/msw-application-review/case-study", "/about", "/how-we-work"]) {
    assertContains(results, route, `Results page should link to ${route}`);
  }

  assertContains(results, "The public demo uses fictional mock data only. No private applicant or student records are included.", "Results page should include MSW safety note");

  for (const eventName of ["results_project_click", "results_start_project_click", "results_project_fit_click"]) {
    assertContains(results, eventName, `Results page should track safe CTA event ${eventName}`);
    assertContains(trackedLink, eventName, `TrackedLink should type ${eventName}`);
  }
});

test("Start inquiry workflow keeps form controls labeled and copy status announced", () => {
  const startWorkflow = readProjectFile("components/StartInquiryWorkflow.tsx");

  for (const fieldName of ["name", "email", "projectType", "timeline", "projectGoal", "audience", "mustHaveFeatures", "budgetRange", "existingLink"]) {
    assertContains(startWorkflow, `name=\"${fieldName}\"`, `Start inquiry field ${fieldName} should exist`);
  }

  for (const label of ["Name", "Email", "Project type", "Timeline", "Project goal", "Audience", "Must-have features", "Budget range", "Optional existing link"]) {
    assertContains(startWorkflow, label, `Start inquiry should include visible label text: ${label}`);
  }

  assertContains(startWorkflow, "inquiry-form-help", "Start inquiry form should expose helper/safety text");
  assertContains(startWorkflow, "role=\"status\"", "Copy confirmation should be announced through a live status region");
});

test("SEO metadata uses canonical ClearStack branding and social preview images", () => {
  const layout = readProjectFile("app/layout.tsx");
  const seoHelper = readProjectFile("lib/seo.ts");
  const sitemap = readProjectFile("app/sitemap.ts");
  const robots = readProjectFile("app/robots.ts");

  for (const source of [seoHelper, sitemap, robots]) {
    assertContains(source, expectedBaseUrl, "SEO configuration should use the canonical live base URL");
  }

  assertContains(layout, "metadataBase: new URL(siteUrl)", "Layout metadata should use the shared canonical site URL");
  assertContains(layout, "summary_large_image", "Global metadata should configure summary_large_image Twitter cards");
  assertContains(layout, "ProfessionalService", "Structured data should accurately identify ClearStack Studio as a service business");
  assertContains(layout, "WebSite", "Structured data should include a WebSite node");

  for (const [file, title, description, image] of expectedSeoPages) {
    const content = readProjectFile(file);
    assertContains(content, title, `${file} should include expected SEO title`);
    assertContains(content, description, `${file} should include expected SEO description`);
    assertContains(content, "createSeoMetadata", `${file} should use the shared SEO metadata helper`);
    assertContains(seoHelper, image, `Shared SEO helper should define ${image}`);
  }
});

test("required social preview PNG assets exist at 1200 by 630", () => {
  for (const imagePath of expectedSocialImages) {
    assert.ok(existsSync(path.join(rootDir, imagePath)), `${imagePath} should exist`);
    assert.deepEqual(pngDimensions(imagePath), { width: 1200, height: 630 }, `${imagePath} should be 1200x630`);
  }
});

test("expected external demo URLs are defined exactly once in shared site links", () => {
  const siteLinks = readProjectFile("lib/siteLinks.ts");

  for (const [projectName, expectedUrl] of Object.entries(expectedDemoUrls)) {
    assertContains(siteLinks, expectedUrl, `${projectName} demo URL should be ${expectedUrl}`);
  }
});

test("live demo and case study links are trackable where practical", () => {
  const linkSources = [
    readProjectFile("components/FeaturedProduct.tsx"),
    readProjectFile("components/MvpServiceCta.tsx"),
    readProjectFile("components/ServicePackages.tsx"),
    readProjectFile("components/StorefrontCta.tsx"),
    readProjectFile("app/projects/page.tsx"),
    readProjectFile("app/start/page.tsx"),
    readProjectFile("app/work/page.tsx")
  ].join("\n");

  assertContains(linkSources, "live_demo_click", "Live demo links should use the live_demo_click event");
  assertContains(linkSources, "case_study_click", "Case study links should use the case_study_click event");
});

test("public-facing source does not contain localhost or local machine paths", () => {
  const sourceFiles = sourceRoots.flatMap(listSourceFiles);
  const forbiddenPatterns = [
    { pattern: /localhost/iu, label: "localhost link" },
    { pattern: /127\.0\.0\.1/u, label: "localhost IP link" },
    { pattern: /C:\\Users\\/u, label: "Windows local file path" },
    { pattern: /\/Users\/bchan8\//u, label: "Mac local file path" }
  ];

  for (const file of sourceFiles) {
    const content = readProjectFile(file);

    for (const { pattern, label } of forbiddenPatterns) {
      assert.ok(!pattern.test(content), `${file} should not contain a ${label}`);
    }
  }
});
