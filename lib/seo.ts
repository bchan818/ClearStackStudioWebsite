import type { Metadata } from "next";

export const siteUrl = "https://clear-stack-studio-website.vercel.app";
export const siteName = "ClearStack Studio";
export const siteTagline = "From idea to app.";

export const defaultTitle = "ClearStack Studio | From idea to app";
export const defaultDescription =
  "ClearStack Studio builds focused product MVPs, storefronts, AI-powered prototypes, internal workflow dashboards, and modern website or app refreshes.";

export const socialImages = {
  default: "/social/clearstack-default.png",
  services: "/social/services.png",
  projects: "/social/projects.png",
  cardscope: "/social/cardscope.png",
  clearBloomBeauty: "/social/clearbloom-beauty.png",
  aiFashionModel: "/social/ai-fashion-model.png",
  mswApplicationReview: "/social/msw-application-review.png"
} as const;

type SeoMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
};

export function createSeoMetadata({
  title,
  description,
  path,
  image = socialImages.default,
  imageAlt = "ClearStack Studio social preview image.",
  type = "website"
}: SeoMetadataOptions): Metadata {
  return {
    title: {
      absolute: title
    },
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      locale: "en_US",
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: image,
          alt: imageAlt
        }
      ]
    }
  };
}
