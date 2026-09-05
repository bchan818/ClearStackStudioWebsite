import type { MetadataRoute } from "next";

const baseUrl = "https://clear-stack-studio-website.vercel.app";

const routes = [
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
  "/qa-checklist",
  "/launch-readiness",
  "/work/cardscope",
  "/work/cardscope/case-study",
  "/work/clearbloom-beauty",
  "/work/clearbloom-beauty/case-study",
  "/work/clearbloom-beauty/checkout/success",
  "/work/roamthecities",
  "/work/sports-predictor",
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
