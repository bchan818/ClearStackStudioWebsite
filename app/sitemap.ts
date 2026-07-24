import type { MetadataRoute } from "next";

const baseUrl = "https://clear-stack-studio-website.vercel.app";

const routes = [
  "/",
  "/services",
  "/work",
  "/projects",
  "/start",
  "/proposal-builder",
  "/sow-builder",
  "/project-handoff",
  "/project-tracker",
  "/status-report-builder",
  "/contact",
  "/qa-checklist",
  "/launch-readiness",
  "/work/cardscope",
  "/work/cardscope/case-study",
  "/work/clearbloom-beauty",
  "/work/clearbloom-beauty/case-study",
  "/work/clearbloom-beauty/checkout/success",
  "/work/ai-fashion-model",
  "/work/ai-fashion-model/case-study",
  "/work/msw-application-review",
  "/work/msw-application-review/case-study"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/services" || route === "/contact" ? 0.9 : 0.7
  }));
}
