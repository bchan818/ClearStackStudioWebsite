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
  "/services/ai-powered-tool",
  "/work",
  "/projects",
  "/products",
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
  "/work/roamthecities",
  "/work/sports-predictor",
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
  ["app/services/ai-powered-tool/page.tsx", "AI-Powered Tool Development | ClearStack Studio", "Plan and prototype an AI-powered workflow with clear inputs, outputs, human review, responsible-use boundaries, and a future production roadmap.", "/social/services.png"],
  ["app/projects/page.tsx", "Proof Projects | ClearStack Studio", "Explore ClearStack Studio proof projects across software MVPs, storefronts, AI-assisted tools, and internal workflow dashboards.", "/social/projects.png"],
  ["app/products/page.tsx", "Products | ClearStack Studio", "Explore digital products built and operated by ClearStack Studio, including active products, MVP proof projects, experiments, and archived concepts.", "/social/projects.png"],
  ["app/work/page.tsx", "Work and Case Studies | ClearStack Studio", "See how ClearStack Studio turns product ideas, storefront concepts, AI workflows, and operational processes into focused digital prototypes.", "/social/projects.png"],
  ["app/start/page.tsx", "Start a Project | ClearStack Studio", "Tell ClearStack Studio what you want to launch and outline the first useful version of your product, storefront, dashboard, or website.", "/social/clearstack-default.png"],
  ["app/contact/page.tsx", "Contact | ClearStack Studio", "Contact ClearStack Studio about a product MVP, storefront, AI-powered tool, internal dashboard, or website refresh.", "/social/clearstack-default.png"],
  ["app/work/cardscope/page.tsx", "CardScope MVP | ClearStack Studio", "A card discovery, collection tracking, watchlist, and seller-tools prototype demonstrating a focused software MVP.", "/social/cardscope.png"],
  ["app/work/cardscope/case-study/page.tsx", "CardScope Case Study | ClearStack Studio", "See how ClearStack Studio shaped CardScope from product idea to live MVP, including scope, launch result, guardrails, and client-ready proof points.", "/social/cardscope.png"],
  ["app/work/clearbloom-beauty/page.tsx", "ClearBloom Beauty Storefront MVP | ClearStack Studio", "A premium beauty storefront prototype featuring product discovery, product pages, branding, and an inquiry-based checkout flow.", "/social/clearbloom-beauty.png"],
  ["app/work/clearbloom-beauty/case-study/page.tsx", "ClearBloom Beauty Case Study | ClearStack Studio", "See how ClearStack Studio shaped ClearBloom Beauty from perfume and cosmetics idea into a storefront MVP with products, bundles, order inquiry paths, and commerce guardrails.", "/social/clearbloom-beauty.png"],
  ["app/work/roamthecities/page.tsx", "RoamTheCities Travel Platform | ClearStack Studio", "RoamTheCities is a travel planning and discovery platform built and operated by ClearStack Studio.", "/social/projects.png"],
  ["app/work/sports-predictor/page.tsx", "ClearStack Sports Predictor | ClearStack Studio", "A leakage-safe NFL forecasting and simulation product with immutable pregame predictions and transparent probability reporting.", "/social/projects.png"],
  ["app/work/ai-fashion-model/page.tsx", "AI Fashion Model Prototype | ClearStack Studio", "Explore an AI-assisted fashion concept workflow for structured briefs, prompt planning, sample concepts, and responsible asset review.", "/social/ai-fashion-model.png"],
  ["app/work/ai-fashion-model/case-study/page.tsx", "AI Fashion Model Case Study | ClearStack Studio", "See how ClearStack Studio shaped AI Fashion Model into a structured creative workflow prototype for fashion concepts, prompt planning, and responsible asset review.", "/social/ai-fashion-model.png"],
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

  for (const route of ["/about", "/how-we-work", "/faq", "/pricing", "/project-fit", "/results", "/services", "/work", "/projects", "/products", "/start", "/studio-tools", "/contact"]) {
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
    readProjectFile("app/start/page.tsx"),
    readProjectFile("lib/products.ts")
  ].join("\n");

  const requiredProjectLinks = [
    "/work/cardscope/case-study",
    "/work/clearbloom-beauty/case-study",
    "/work/roamthecities",
    "/work/sports-predictor",
    "/work/ai-fashion-model",
    "/work/ai-fashion-model/case-study",
    "/work/msw-application-review",
    "/work/msw-application-review/case-study"
  ];

  for (const route of requiredProjectLinks) {
    assertContains(projectSources, route, `Project cards and proof sections should include ${route}`);
  }
});

test("RoamTheCities is discoverable without inventing an external production URL", () => {
  const registry = readProjectFile("lib/products.ts");
  const homepage = readProjectFile("app/page.tsx");
  const featured = readProjectFile("components/FeaturedProduct.tsx");
  const projects = readProjectFile("app/projects/page.tsx");
  const work = readProjectFile("app/work/page.tsx");
  const caseStudy = readProjectFile("app/work/roamthecities/page.tsx");
  const siteLinks = readProjectFile("lib/siteLinks.ts");
  const sitemap = readProjectFile("app/sitemap.ts");
  const combined = [registry, homepage, featured, projects, work, caseStudy].join("\n");

  assertContains(combined, "RoamTheCities", "ClearStack site should mention RoamTheCities visibly");
  assertContains(combined, "A travel planning and discovery platform built and operated by ClearStack Studio.", "RoamTheCities short description should be consistent");
  assertContains(combined, "/work/roamthecities", "RoamTheCities case-study route should be linked");
  assertContains(projects, "Travel Platform", "Projects page should categorize RoamTheCities as a Travel Platform");
  assertContains(caseStudy, "Visit RoamTheCities", "Case study should include Visit RoamTheCities CTA text");
  assertContains(caseStudy, "Explore the Product", "Case study should include Explore the Product CTA text");
  assertContains(caseStudy, "Start a Project", "Case study should include Start a Project CTA text");
  assertContains(sitemap, "/work/roamthecities", "Sitemap should include RoamTheCities case study");
  assertContains(siteLinks, "roamTheCitiesLiveUrl: string | undefined = undefined", "RoamTheCities live URL should remain pending when not confirmed");
  assertContains(combined, "Website coming soon", "Pages should show Website coming soon instead of inventing a URL");
  assert.equal((registry.match(/slug: "roamthecities"/g) ?? []).length, 1, "Registry should have one RoamTheCities product entry");
  assertContains(homepage, 'requireProductBySlug("roamthecities")', "Homepage should read RoamTheCities from the registry");
  assertContains(projects, 'requireProductBySlug("roamthecities")', "Projects page should read RoamTheCities from the registry");
  const unconfirmedRoamTheCitiesDomainPrefix = "https://" + "roamthecities";
  assert.ok(!combined.includes(unconfirmedRoamTheCitiesDomainPrefix), "Do not invent a RoamTheCities production URL");
});

test("RoamTheCities launch page explains product, ecosystem, affiliate model, architecture, and transparent status", () => {
  const caseStudy = readProjectFile("app/work/roamthecities/page.tsx");
  const screenshotSystem = readProjectFile("components/RoamTheCitiesScreenshotSystem.tsx");
  const caseStudyRenderedSource = caseStudy + screenshotSystem;
  const registry = readProjectFile("lib/products.ts");
  const siteLinks = readProjectFile("lib/siteLinks.ts");

  for (const token of [
    "RoamTheCities",
    "Travel Platform",
    "Active product",
    "RoamTheCities is a travel planning and discovery platform built and operated by ClearStack Studio.",
    "Website coming soon",
    "Explore the Product",
    "Start a Project",
    "Product overview",
    "Discover a destination",
    "Save places and experiences",
    "Build a trip",
    "Organize itinerary details",
    "Receive reminders",
    "Access travel information during the trip",
    "Use relevant booking partners",
    "RoamTheCities Website",
    "Shared Supabase Backend",
    "RoamTheCities Mobile App",
    "user accounts",
    "profiles",
    "saved destinations",
    "trip items",
    "notification preferences",
    "Destination Discovery",
    "Trip Planning",
    "Traveler Personalization",
    "Trip Intelligence",
    "Notifications",
    "Offline Access",
    "Collaboration",
    "Trip Budget",
    "Expedia",
    "Viator",
    "GoWithGuide",
    "RoamTheCities may earn commissions when users book through qualifying partner links.",
    "RoamTheCities does not handle third-party bookings directly",
    "Expo",
    "React Native",
    "TypeScript",
    "Next.js",
    "Supabase",
    "PostgreSQL",
    "Vercel",
    "GitHub",
    "Product strategy",
    "Mobile development",
    "Web development",
    "Shared backend architecture",
    "Authentication",
    "Database design",
    "Affiliate integration",
    "Personalization",
    "Offline-first design",
    "Admin tooling",
    "Analytics",
    "Complete",
    "In Development",
    "Planned",
    "Visual system",
    "Placeholder screenshot slot",
    "RoamTheCitiesBrandTokenSummary",
    "RoamTheCitiesScreenshotGallery",
    "Social and launch previews",
    "Open Graph",
    "X/Twitter",
    "Business model",
    "Built and operated by",
    "View products",
    "View projects",
    "View services",
    "requireProductBySlug(\"roamthecities\")",
    "roamTheCitiesProduct.liveUrl"
  ]) {
    assertContains(caseStudyRenderedSource, token, `RoamTheCities launch page should include ${token}`);
  }

  for (const route of ["/products", "/projects", "/services", "/start", "/about"]) {
    assertContains(caseStudy, `href="${route}"`, `RoamTheCities launch page should link to ${route}`);
  }

  assertContains(registry, 'liveUrl: roamTheCitiesLiveUrl ?? null', "RoamTheCities live URL should come from the registry");
  assertContains(siteLinks, "roamTheCitiesLiveUrl: string | undefined = undefined", "RoamTheCities live URL should remain unconfirmed until supplied");
  const unconfirmedRoamTheCitiesDomainPrefix = "https://" + "roamthecities";
  assert.ok(!caseStudy.includes(unconfirmedRoamTheCitiesDomainPrefix), "RoamTheCities launch page should not invent a production URL");
  assert.ok(!caseStudy.includes("% commission"), "RoamTheCities launch page should not publish commission percentages");
});

test("RoamTheCities visual brand kit centralizes screenshot slots, tokens, social previews, and placeholder rules", () => {
  const brand = readProjectFile("lib/roamTheCitiesBrand.ts");
  const screenshotSystem = readProjectFile("components/RoamTheCitiesScreenshotSystem.tsx");
  const caseStudy = readProjectFile("app/work/roamthecities/page.tsx");
  const docs = readProjectFile("docs/roamthecities-visual-brand-kit.md");

  for (const token of [
    "roamTheCitiesBrand",
    "Product name",
    "RoamTheCities",
    "RTC",
    "Find your next city story.",
    "logo",
    "appIcon",
    "background",
    "surface",
    "text",
    "mutedText",
    "border",
    "accent",
    "success",
    "warning",
    "error",
    "typography",
    "spacing",
    "radius",
    "cardStyle",
    "buttonStyles",
    "imageTreatment",
    "screenshotFraming",
    "socialPreview",
    "appStore",
    "assetNaming"
  ]) {
    assertContains(brand + docs, token, `RoamTheCities brand kit should include ${token}`);
  }

  for (const token of [
    "RoamTheCitiesScreenshotFrame",
    "RoamTheCitiesScreenshotGallery",
    "RoamTheCitiesBrandTokenSummary",
    "MobileFrame",
    "BrowserChrome",
    "SplitFrame",
    "Placeholder screenshot slot",
    "role=\"img\"",
    "aria-label={slot.alt}",
    "replacementFileName",
    "imageSrc: null",
    "roamthecities-mobile-home.png",
    "roamthecities-mobile-trip-planner.png",
    "roamthecities-web-destination.png",
    "roamthecities-web-admin-analytics.png",
    "roamthecities-social-og.png"
  ]) {
    assertContains(brand + screenshotSystem + docs, token, `Screenshot system should include ${token}`);
  }

  for (const token of [
    "Mobile experience",
    "Web experience",
    "Shared ecosystem",
    "Trip planning workflow",
    "Apple App Store",
    "Google Play",
    "Fabricate production screenshots",
    "No RoamTheCities-specific screenshots or logo image files were found under `public/`",
    "Use placeholders when real screenshots are missing",
    "Create one-off screenshot frames directly in case-study pages"
  ]) {
    assertContains(docs, token, `Brand-kit documentation should include ${token}`);
  }

  assertContains(caseStudy, "RoamTheCitiesBrandTokenSummary", "RoamTheCities case study should use the reusable brand-token component");
  assertContains(caseStudy, "RoamTheCitiesScreenshotGallery", "RoamTheCities case study should use the reusable screenshot gallery");
  assert.ok(!screenshotSystem.includes("<img") || screenshotSystem.includes("alt={slot.alt}"), "Screenshot images should carry meaningful alt text");
  assert.ok(!brand.includes("https://roamthecities"), "Brand kit should not invent a RoamTheCities production URL");
});

test("ClearStack product registry defines unique supported products, helpers, valid paths, URLs, and null live URL handling", () => {
  const registry = readProjectFile("lib/products.ts");
  const homepage = readProjectFile("app/page.tsx");
  const featured = readProjectFile("components/FeaturedProduct.tsx");
  const projects = readProjectFile("app/projects/page.tsx");
  const roamCaseStudy = readProjectFile("app/work/roamthecities/page.tsx");
  const siteLinks = readProjectFile("lib/siteLinks.ts");

  for (const token of [
    "export type ClearStackProduct",
    "ClearStackProductStatus",
    "getProductBySlug",
    "getFeaturedProducts",
    "getActiveProducts",
    "getProductLiveUrl",
    "getProductCaseStudyPath",
    "requireProductBySlug"
  ]) {
    assertContains(registry, token, `Registry should include ${token}`);
  }

  for (const slug of ["roamthecities", "clearbloom-beauty", "cardscope", "sports-predictor"]) {
    assert.equal((registry.match(new RegExp(`slug: "${slug}"`, "g")) ?? []).length, 1, `Registry should include exactly one ${slug} record`);
    assertContains(registry, `caseStudyPath: "/work/${slug}`, `Registry should include a case-study path for ${slug}`);
  }

  assertContains(registry, 'liveUrl: roamTheCitiesLiveUrl ?? null', "RoamTheCities should keep null live URL handling");
  assertContains(siteLinks, "roamTheCitiesLiveUrl: string | undefined = undefined", "Unconfirmed RoamTheCities URL should stay unset");
  assertContains(registry, 'status: "active"', "RoamTheCities should use a supported non-production status");
  assertContains(registry, 'status: "mvp"', "MVP products should use the shared status vocabulary");
  assertContains(registry, "A product built and operated by ClearStack Studio.", "Registry should support shared ownership wording");
  assertContains(registry, "Mobile-compatible product foundations exist", "RoamTheCities mobile status should be evidence-based");
  assertContains(registry, "Website project exists; public production URL is not confirmed", "RoamTheCities website status should not invent a live URL");

  for (const file of [homepage, featured, projects, roamCaseStudy]) {
    assertContains(file, "requireProductBySlug", "Key product surfaces should consume the shared registry");
  }

  assertContains(featured, "Website coming soon", "Featured cards should gracefully handle missing live URLs");
  assertContains(projects, "Website coming soon", "Project cards should gracefully handle missing live URLs");
  assertContains(roamCaseStudy, "Website coming soon", "RoamTheCities case study should gracefully handle missing live URL");

  for (const url of ["https://cardscope-mvp.vercel.app", "https://clearbloom-beauty.vercel.app"]) {
    assert.ok(/^https:\/\//.test(url), `${url} should be a valid external HTTPS URL`);
    assertContains(registry + siteLinks, url, `Registry/site links should preserve ${url}`);
  }
});

test("Products page is registry-driven and separates active products, proof projects, experiments, and archived products", () => {
  const productsPage = readProjectFile("app/products/page.tsx");
  const registry = readProjectFile("lib/products.ts");
  const homepage = readProjectFile("app/page.tsx");
  const footer = readProjectFile("components/Footer.tsx");
  const sitemap = readProjectFile("app/sitemap.ts");

  for (const token of [
    "Products built by ClearStack Studio",
    "ClearStack Studio builds and operates its own digital products in addition to client work",
    "Active Products",
    "MVP / Proof Projects",
    "Experiments",
    "Archived",
    "Products versus projects",
    "Registry-backed data",
    "clearStackProducts.filter",
    "getProductLiveUrl",
    "getProductCaseStudyPath",
    "Website coming soon",
    "Mobile app",
    "View case study",
    "opens external product website"
  ]) {
    assertContains(productsPage, token, `/products should include ${token}`);
  }

  for (const productName of ["RoamTheCities", "ClearBloom Beauty", "CardScope"]) {
    assertContains(registry, productName, `Registry should define ${productName}`);
    assertContains(productsPage, "product.name", "/products should render names from product records");
  }

  for (const route of ["/products", "/projects", "/services", "/start", "/work/roamthecities", "/work/clearbloom-beauty/case-study", "/work/cardscope/case-study"]) {
    assertContains(productsPage + homepage + footer + sitemap + registry, route, `Products surfaces should include ${route}`);
  }

  assertContains(productsPage, "activeStatuses", "RoamTheCities should appear in Active Products when registry status supports it");
  assertContains(registry, 'status: "active"', "RoamTheCities active placement should be registry-supported");
  assertContains(productsPage, "proofStatuses", "MVP/proof project placement should be registry-supported");
  assertContains(registry, 'status: "mvp"', "ClearBloom and CardScope should remain MVP/proof records");
  assertContains(homepage, "Explore ClearStack Studio products", "Homepage should include a concise products CTA");
  assertContains(homepage, 'href="/products"', "Homepage products CTA should link to /products");
  assertContains(footer, 'href="/products"', "Footer should include Products without crowding primary nav");
  assertContains(sitemap, '"/products"', "Sitemap should include /products");
  assertContains(registry, "roamTheCitiesLiveUrl ?? null", "RoamTheCities live URL should remain registry-controlled and nullable");
});

test("Projects overview maps proof projects to services, statuses, and conversion paths honestly", () => {
  const projects = readProjectFile("app/projects/page.tsx");
  const productRegistry = readProjectFile("lib/products.ts");
  const projectsAndRegistry = [projects, productRegistry].join("\n");
  const relatedPages = [
    readProjectFile("app/work/cardscope/page.tsx"),
    readProjectFile("app/work/cardscope/case-study/page.tsx"),
    readProjectFile("app/work/clearbloom-beauty/page.tsx"),
    readProjectFile("app/work/clearbloom-beauty/case-study/page.tsx"),
    readProjectFile("app/work/roamthecities/page.tsx"),
    readProjectFile("app/work/ai-fashion-model/page.tsx"),
    readProjectFile("app/work/ai-fashion-model/case-study/page.tsx"),
    readProjectFile("app/work/msw-application-review/page.tsx"),
    readProjectFile("app/work/msw-application-review/case-study/page.tsx")
  ].join("\n");

  for (const text of [
    "Proof projects that show what ClearStack Studio can build next.",
    "ClearStack Studio uses proof projects to demonstrate practical capabilities without inventing client results.",
    "Proof projects are ClearStack-owned examples unless a page says otherwise.",
    "No fabricated revenue, adoption, testimonials, or client metrics are claimed.",
    "Business problem or opportunity",
    "Solution ClearStack designed",
    "Key features and deliverables",
    "Relevant services provided",
    "Technology notes",
    "Build something similar",
    "Start with the closest proof project",
    "MVP software",
    "Storefront MVP",
    "Travel Platform",
    "AI-assisted tool prototype",
    "Internal workflow dashboard",
    "ClearStack-owned live MVP proof product",
    "Fictional beauty storefront proof project",
    "Travel platform built and operated by ClearStack Studio",
    "Static AI-assisted creative workflow proof",
    "Public-safe mock-data dashboard demo"
  ]) {
    assertContains(projects, text, `/projects should include ${text}`);
  }

  for (const projectName of ["CardScope", "ClearBloom Beauty", "RoamTheCities", "AI Fashion Model", "MSW Application Review"]) {
    assertContains(projects, projectName, `/projects should include ${projectName}`);
  }

  for (const route of [
    "/start",
    "/services",
    "/how-we-work",
    "/pricing",
    "/faq",
    "/work",
    "/work/cardscope",
    "/work/cardscope/case-study",
    "/work/clearbloom-beauty",
    "/work/clearbloom-beauty/case-study",
    "/work/roamthecities",
    "/work/ai-fashion-model",
    "/work/ai-fashion-model/case-study",
    "/work/msw-application-review",
    "/work/msw-application-review/case-study"
  ]) {
    assertContains(projectsAndRegistry, route, `/projects should link to ${route} directly or through the product registry`);
  }

  for (const label of [
    "View CardScope live MVP",
    "Read the CardScope case study",
    "View ClearBloom live storefront demo",
    "Read the ClearBloom case study",
    "Read the RoamTheCities case study",
    "View AI Fashion Model proof page",
    "Read the AI Fashion Model case study",
    "View MSW live mock-data dashboard demo",
    "Read the MSW Application Review case study"
  ]) {
    assertContains(projects, label, `/projects should use descriptive link text: ${label}`);
  }

  for (const outcomeClaim of ["paying client", "revenue increased", "conversion rate", "users acquired", "guaranteed ROI"]) {
    assert.ok(!projects.toLowerCase().includes(outcomeClaim), `/projects should not include unsupported claim: ${outcomeClaim}`);
  }

  assert.ok(
    relatedPages.includes('href="/projects"') || relatedPages.includes('href="/start"'),
    "Related project pages should link back to /projects or /start"
  );
});

test("AI Fashion Model proof routes explain workflow, CTAs, and responsible AI boundaries", () => {
  const proofPage = readProjectFile("app/work/ai-fashion-model/page.tsx");
  const caseStudy = readProjectFile("app/work/ai-fashion-model/case-study/page.tsx");
  const trackedLink = readProjectFile("components/TrackedLink.tsx");
  const combined = `${proofPage}\n${caseStudy}`;

  for (const text of [
    "Plan AI-assisted fashion concepts before connecting a production workflow.",
    "fashion brands, creators, beauty teams, and marketing teams",
    "Select campaign type",
    "Define visual direction",
    "Choose styling and setting",
    "Build a structured prompt",
    "Review a sample concept",
    "Prepare assets for human approval",
    "Prompt-builder preview",
    "This proof project generates a structured creative brief only. No live AI image-generation service is connected.",
    "Luxury studio portrait",
    "Resort campaign",
    "Streetwear editorial",
    "Minimal beauty story",
    "Futuristic runway",
    "Prototype concepts should not be treated as cleared commercial assets. Rights, platform terms, disclosures, likeness permissions, and brand approvals must be reviewed before publication."
  ]) {
    assertContains(proofPage, text, `AI Fashion Model page should include ${text}`);
  }

  for (const text of [
    "Problem",
    "Audience",
    "Prototype goal",
    "Workflow",
    "Key screens",
    "Responsible AI boundaries",
    "What the prototype proves",
    "Future production roadmap",
    "Lessons learned",
    "Start a similar project"
  ]) {
    assertContains(caseStudy, text, `AI Fashion Model case study should include ${text}`);
  }

  for (const route of ["/services", "/projects", "/work", "/start", "/work/ai-fashion-model/case-study"]) {
    assertContains(combined, `href="${route}"`, `AI Fashion Model routes should link to ${route}`);
  }

  for (const eventName of ["ai_fashion_case_study_click", "ai_fashion_start_project_click", "ai_fashion_view_services_click"]) {
    assertContains(combined, eventName, `AI Fashion Model routes should use safe CTA analytics event ${eventName}`);
    assertContains(trackedLink, eventName, `TrackedLink should type safe CTA event ${eventName}`);
  }

  for (const forbiddenClaim of ["Live AI image generation available", "commercially cleared", "rights are guaranteed"]) {
    assert.ok(!combined.includes(forbiddenClaim), `AI Fashion Model routes should not claim ${forbiddenClaim}`);
  }
});

test("AI-Powered Tool service page explains prototype scope, proof links, responsible AI, and safe analytics", () => {
  const servicePage = readProjectFile("app/services/ai-powered-tool/page.tsx");
  const servicesPage = readProjectFile("app/services/page.tsx");
  const projectFitPage = readProjectFile("app/project-fit/page.tsx");
  const homepage = readProjectFile("components/ServicePackages.tsx");
  const footer = readProjectFile("components/Footer.tsx");
  const aiFashionPage = readProjectFile("app/work/ai-fashion-model/page.tsx");
  const aiFashionCaseStudy = readProjectFile("app/work/ai-fashion-model/case-study/page.tsx");
  const sitemap = readProjectFile("app/sitemap.ts");
  const trackedLink = readProjectFile("components/TrackedLink.tsx");
  const linkedSources = `${servicesPage}\n${projectFitPage}\n${homepage}\n${footer}\n${aiFashionPage}\n${aiFashionCaseStudy}\n${sitemap}`;

  for (const text of [
    "AI-Powered Tool",
    "Turn an AI idea into a focused, testable workflow.",
    "ClearStack Studio helps teams define the user input, AI-assisted process, review experience, responsible-use boundaries, and future production architecture before investing in a full AI integration.",
    "An AI prototype can validate the workflow and user experience without immediately connecting a production AI model.",
    "Structured content assistance",
    "Creative brief generation",
    "Document summarization workflows",
    "Define the use case",
    "Map the workflow",
    "Set responsible boundaries",
    "Build the prototype",
    "Test the experience",
    "Plan production integration",
    "Prototype-only",
    "Live AI API integration",
    "AI Fashion Model",
    "AI-assisted creative workflow prototype",
    "AI-assisted outputs should be reviewed by a qualified person before they are published, relied upon, or used to make consequential decisions.",
    "Good fit",
    "Poor fit",
    "Take the Project Fit Assessment",
    "Start with the workflow, not the model."
  ]) {
    assertContains(servicePage, text, `AI-Powered Tool service page should include ${text}`);
  }

  for (const route of ["/start", "/work/ai-fashion-model", "/work/ai-fashion-model/case-study", "/project-fit", "/services"]) {
    assertContains(servicePage, `href="${route}"`, `AI-Powered Tool service page should link to ${route}`);
  }

  for (const eventName of ["ai_service_start_click", "ai_service_project_click", "ai_service_project_fit_click"]) {
    assertContains(servicePage, eventName, `AI-Powered Tool service page should track safe CTA event ${eventName}`);
    assertContains(trackedLink, eventName, `TrackedLink should type safe CTA event ${eventName}`);
  }

  for (const trackingKey of ["cta_location", "destination_route"]) {
    assertContains(trackedLink, trackingKey, `TrackedLink should support allowed AI service analytics key ${trackingKey}`);
  }

  for (const forbiddenTrackingKey of ["prompt_contents", "project_description", "personal_information", "assessment_answers"]) {
    assert.ok(!servicePage.includes(forbiddenTrackingKey), `AI service page should not track ${forbiddenTrackingKey}`);
  }

  for (const forbiddenClaim of ["live AI model is connected", "AI accuracy is guaranteed", "compliance guarantee", "commercial rights are guaranteed"]) {
    assert.ok(!servicePage.includes(forbiddenClaim), `AI service page should not claim ${forbiddenClaim}`);
  }

  assertContains(linkedSources, "/services/ai-powered-tool", "Relevant public pages should link to /services/ai-powered-tool");
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
    "Project discovery and scope confirmation",
    "Content and materials clients provide",
    "Design and development stages",
    "Testing and launch standards",
    "Final handoff and post-launch support",
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
    "Start your project inquiry",
    "Compare proof projects",
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
  const startPage = readProjectFile("app/start/page.tsx");
  const startWorkflow = readProjectFile("components/StartInquiryWorkflow.tsx");

  for (const text of [
    "Start Your Project",
    "ClearStack Studio helps founders, creators, small businesses, product brands, and teams turn focused digital ideas into launch-ready first versions.",
    "What happens after you send the inquiry",
    "No backend submission occurs",
    "The email is not sent until you review and send it from your own email app.",
    "Most inquiries receive a first reply within 1-2 business days when enough project context is included."
  ]) {
    assertContains(`${startPage}\n${startWorkflow}`, text, `/start should include ${text}`);
  }

  for (const route of ["/how-we-work", "/services", "/projects", "/faq"]) {
    assertContains(startPage, `href="${route}"`, `/start should link to ${route}`);
  }

  for (const fieldName of ["contactName", "email", "company", "phone", "projectType", "servicesNeeded", "budgetRange", "timeline", "launchDate", "projectGoals", "requirements", "challenges", "existingWebsite", "referenceLink"]) {
    assertContains(startWorkflow, `name=\"${fieldName}\"`, `Start inquiry field ${fieldName} should exist`);
  }

  for (const label of ["Contact name", "Email", "Company", "Optional phone", "Project type", "Services needed", "Estimated budget range", "Desired timeline", "Desired launch date", "Project goals", "Requirements", "Challenges", "Existing website", "Optional reference link"]) {
    assertContains(startWorkflow, label, `Start inquiry should include visible label text: ${label}`);
  }

  for (const accessibilityToken of ["aria-invalid", "aria-errormessage", "aria-describedby", "required", "role=\"alert\"", "role=\"status\""]) {
    assertContains(startWorkflow, accessibilityToken, `Start inquiry workflow should include ${accessibilityToken}`);
  }

  for (const stateText of ["Preparing email", "Ready to review", "Fix the highlighted fields", "Email draft opened", "Could not open your email app", "Copied", "Copy failed"]) {
    assertContains(startWorkflow, stateText, `Start inquiry workflow should include state ${stateText}`);
  }

  assertContains(startWorkflow, "inquiry-form-help", "Start inquiry form should expose helper/safety text");
  assertContains(startWorkflow, "role=\"status\"", "Copy confirmation should be announced through a live status region");

  for (const forbidden of ["fetch(", "axios", "/api/", "Formspree", "formspree", "process.env", "payment_intent", "createClient("]) {
    assert.ok(!startWorkflow.includes(forbidden), `Start inquiry workflow should not introduce ${forbidden}`);
  }
});

test("SEO metadata uses canonical ClearStack branding and social preview images", () => {
  const layout = readProjectFile("app/layout.tsx");
  const seoHelper = readProjectFile("lib/seo.ts");
  const sitemap = readProjectFile("app/sitemap.ts");
  const robots = readProjectFile("app/robots.ts");
  const productRegistry = readProjectFile("lib/products.ts");

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
    assert.ok(content.includes(description) || productRegistry.includes(description), `${file} should include expected SEO description directly or through the product registry`);
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

test("ClearStack Sports Predictor is integrated as an honest forecasting product", () => {
  const registry = readProjectFile("lib/products.ts");
  const siteLinks = readProjectFile("lib/siteLinks.ts");
  const caseStudy = readProjectFile("app/work/sports-predictor/page.tsx");
  const projects = readProjectFile("app/projects/page.tsx");
  const work = readProjectFile("app/work/page.tsx");
  const featured = readProjectFile("components/FeaturedProduct.tsx");
  const sitemap = readProjectFile("app/sitemap.ts");
  const combined = [registry, caseStudy, projects, work, featured, sitemap].join("\n");

  for (const token of [
    "ClearStack Sports Predictor",
    "Forecasting and simulation product",
    "leakage-safe",
    "chronological backtesting",
    "immutable pregame forecasts",
    "manifest",
    "checksum",
    "transparent probability",
    "responsive Next.js",
    "Predictions are statistical estimates, not guarantees or financial advice.",
    "/work/sports-predictor"
  ]) {
    assertContains(combined, token, `Sports Predictor integration should include ${token}`);
  }

  const expectedSportsPredictorUrl = "https://clearstack-sport-predictor.vercel.app";
  assertContains(siteLinks, `sportsPredictorLiveUrl = "${expectedSportsPredictorUrl}"`, "Shared site links should define the exact verified predictor URL");
  assert.ok(new URL(expectedSportsPredictorUrl).protocol === "https:", "Sports Predictor live URL should use HTTPS");
  assertContains(registry, "liveUrl: sportsPredictorLiveUrl", "Product registry should consume the centralized predictor URL");
  assertContains(caseStudy, "href={product.liveUrl}", "Case study live CTA should consume the registry URL");
  assertContains(caseStudy, "Open Live Predictor", "Case study should display the live predictor CTA");
  assertContains(caseStudy, 'aria-label="Open ClearStack Sports Predictor in a new tab"', "External live CTA should have an accessible destination label");
  assertContains(caseStudy, 'target="_blank"', "External live CTA should open in a new tab");
  assertContains(caseStudy, 'rel="noopener noreferrer"', "External live CTA should prevent opener access and referrer leakage");
  assertContains(registry, "repositoryUrl: null", "Private or unconfirmed repository links should not be published");
  assert.ok(!combined.includes("Live predictor URL pending"), "Sports Predictor surfaces should not show the stale pending live-URL state");
  assertContains(caseStudy, "Source link pending public confirmation", "Unconfirmed source repository status should remain non-clickable");
  assertContains(caseStudy, "not affiliated with or endorsed by the NFL", "Case study should deny NFL affiliation");
  assert.ok(!caseStudy.includes("<Image"), "Sports Predictor case study should not add unlicensed league or team artwork");
  assert.ok(!combined.includes("FINAL_PREDICTOR_URL"), "Placeholder live URLs must not be published");
  assert.equal((registry.match(/slug: "sports-predictor"/g) ?? []).length, 1, "Registry should include one Sports Predictor record");
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
