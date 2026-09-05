import { cardScopeLiveUrl, clearBloomLiveUrl, roamTheCitiesLiveUrl, sportsPredictorLiveUrl } from "@/lib/siteLinks";
import { socialImages } from "@/lib/seo";

export type ClearStackProductStatus = "concept" | "prototype" | "mvp" | "active" | "beta" | "production" | "archived";

export type ClearStackProduct = {
  id: string;
  slug: string;
  name: string;
  shortName: string | null;
  description: string;
  category: string;
  status: ClearStackProductStatus;
  featured: boolean;
  caseStudyPath: string;
  liveUrl: string | null;
  mobileAppStatus: string | null;
  websiteStatus: string | null;
  repositoryUrl: string | null;
  image: string | null;
  socialImage: string | null;
  technologies: string[] | null;
  ownershipStatement: string;
  externalLabel: string | null;
  createdAt: string | null;
  updatedAt: string | null;
};

const clearStackOwned = "A product built and operated by ClearStack Studio.";

export const clearStackProducts: ClearStackProduct[] = [
  {
    id: "roamthecities",
    slug: "roamthecities",
    name: "RoamTheCities",
    shortName: "RTC",
    description: "A travel planning and discovery platform built and operated by ClearStack Studio.",
    category: "Travel Platform",
    status: "active",
    featured: true,
    caseStudyPath: "/work/roamthecities",
    liveUrl: roamTheCitiesLiveUrl ?? null,
    mobileAppStatus: "Mobile-compatible product foundations exist; public mobile app launch is not confirmed in this repository.",
    websiteStatus: "Website project exists; public production URL is not confirmed in the ClearStack Studio site registry.",
    repositoryUrl: null,
    image: null,
    socialImage: socialImages.projects,
    technologies: ["Next.js", "Supabase architecture", "Expo-compatible planning", "Affiliate attribution", "Analytics", "Feature flags"],
    ownershipStatement: "RoamTheCities is a travel platform built and operated by ClearStack Studio.",
    externalLabel: "Visit RoamTheCities",
    createdAt: null,
    updatedAt: null
  },
  {
    id: "clearbloom-beauty",
    slug: "clearbloom-beauty",
    name: "ClearBloom Beauty",
    shortName: "ClearBloom",
    description: "A premium perfume and cosmetics storefront proof with catalog pages, product detail pages, policy pages, and inquiry checkout.",
    category: "Storefront MVP",
    status: "mvp",
    featured: true,
    caseStudyPath: "/work/clearbloom-beauty/case-study",
    liveUrl: clearBloomLiveUrl,
    mobileAppStatus: null,
    websiteStatus: "Standalone storefront MVP is live as a public proof project.",
    repositoryUrl: null,
    image: null,
    socialImage: socialImages.clearBloomBeauty,
    technologies: ["Next.js", "Static product catalog", "Inquiry checkout", "Responsive storefront UI"],
    ownershipStatement: clearStackOwned,
    externalLabel: "View ClearBloom live storefront demo",
    createdAt: null,
    updatedAt: null
  },
  {
    id: "cardscope",
    slug: "cardscope",
    name: "CardScope",
    shortName: null,
    description: "A card search and collection tracking MVP built to validate core product workflows and future Pro concepts.",
    category: "Product MVP",
    status: "mvp",
    featured: true,
    caseStudyPath: "/work/cardscope/case-study",
    liveUrl: cardScopeLiveUrl,
    mobileAppStatus: "Native mobile app is not part of the confirmed MVP scope in this site registry.",
    websiteStatus: "Standalone MVP is live as a public proof product.",
    repositoryUrl: null,
    image: null,
    socialImage: socialImages.cardscope,
    technologies: ["Next.js", "Mock product data", "Collection dashboard", "Pricing pages", "Pro preview"],
    ownershipStatement: clearStackOwned,
    externalLabel: "View CardScope live MVP",
    createdAt: null,
    updatedAt: null
  },
  {
    id: "sports-predictor",
    slug: "sports-predictor",
    name: "ClearStack Sports Predictor",
    shortName: "Sports Predictor",
    description: "A leakage-safe NFL forecasting and simulation product with immutable pregame predictions and transparent probability reporting.",
    category: "Forecasting and simulation product",
    status: "mvp",
    featured: true,
    caseStudyPath: "/work/sports-predictor",
    liveUrl: sportsPredictorLiveUrl,
    mobileAppStatus: null,
    websiteStatus: "Responsive Next.js MVP is live as a public ClearStack Studio product.",
    repositoryUrl: null,
    image: null,
    socialImage: socialImages.projects,
    technologies: ["Next.js", "TypeScript", "Python", "scikit-learn", "Immutable forecast artifacts", "SHA-256 manifests"],
    ownershipStatement: "ClearStack Sports Predictor is developed and operated by ClearStack Studio.",
    externalLabel: "Open Live Predictor",
    createdAt: null,
    updatedAt: null
  }
] as const;

export type ClearStackProductSlug = "roamthecities" | "clearbloom-beauty" | "cardscope" | "sports-predictor";

export function getProductBySlug(slug: string): ClearStackProduct | undefined {
  return clearStackProducts.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): ClearStackProduct[] {
  return clearStackProducts.filter((product) => product.featured);
}

export function getActiveProducts(): ClearStackProduct[] {
  return clearStackProducts.filter((product) => product.status !== "archived");
}

export function getProductLiveUrl(product: ClearStackProduct): string | null {
  return product.liveUrl;
}

export function getProductCaseStudyPath(product: ClearStackProduct): string {
  return product.caseStudyPath;
}

export function requireProductBySlug(slug: ClearStackProductSlug): ClearStackProduct {
  const product = getProductBySlug(slug);
  if (!product) {
    throw new Error(`Missing ClearStack product registry entry for ${slug}`);
  }
  return product;
}
