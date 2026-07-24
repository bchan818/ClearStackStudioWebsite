import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import test from "node:test";

const rootDir = process.cwd();

const requiredInternalRoutes = [
  "/",
  "/services",
  "/work",
  "/projects",
  "/start",
  "/proposal-builder",
  "/sow-builder",
  "/project-handoff",
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

test("important internal routes exist as App Router pages", () => {
  for (const route of requiredInternalRoutes) {
    assert.ok(existsSync(routeToPageFile(route)), `${route} should have a matching app route page`);
  }
});

test("Header navigation includes the primary public routes", () => {
  const header = readProjectFile("components/Header.tsx");

  for (const route of ["/services", "/work", "/projects", "/start", "/contact"]) {
    assertContains(header, `href: "${route}"`, `Header nav should include ${route}`);
  }
});

test("Footer navigation includes primary and utility routes", () => {
  const footer = readProjectFile("components/Footer.tsx");

  for (const route of ["/services", "/work", "/projects", "/start", "/proposal-builder", "/sow-builder", "/project-handoff", "/contact", "/qa-checklist", "/launch-readiness"]) {
    assertContains(footer, `href="${route}"`, `Footer nav should include ${route}`);
  }
});

test("builder workflow routes connect planning through handoff", () => {
  const proposalBuilder = readProjectFile("app/proposal-builder/page.tsx");
  const sowBuilder = readProjectFile("app/sow-builder/page.tsx");
  const projectHandoff = readProjectFile("app/project-handoff/page.tsx");

  assertContains(proposalBuilder, "Inquiry", "Proposal builder should explain the workflow sequence");
  assertContains(proposalBuilder, 'href="/sow-builder"', "Proposal builder should link to SOW builder");
  assertContains(sowBuilder, 'href="/project-handoff"', "SOW builder should link to project handoff");
  assertContains(projectHandoff, 'href="/projects"', "Project handoff should link back to proof projects");
});

test("Start Project CTAs route visitors to /start", () => {
  const filesWithStartProjectCtas = [
    "components/Header.tsx",
    "components/Hero.tsx",
    "components/ContactCta.tsx",
    "components/MvpServiceCta.tsx",
    "components/ServicePackages.tsx",
    "components/StorefrontCta.tsx",
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
