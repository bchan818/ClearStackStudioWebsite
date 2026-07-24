"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { track } from "@vercel/analytics";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  eventName:
    | "start_project_click"
    | "service_package_click"
    | "live_demo_click"
    | "case_study_click";
  eventLabel: string;
  ctaLocation?: string;
  projectSlug?: string;
  projectType?: string;
  serviceCategory?: string;
};

export function TrackedLink({
  eventName,
  eventLabel,
  ctaLocation,
  projectSlug,
  projectType,
  serviceCategory,
  href,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      href={href}
      onClick={(event) => {
        track(eventName, {
          label: eventLabel,
          ...(ctaLocation ? { cta_location: ctaLocation } : {}),
          ...(projectSlug ? { project_slug: projectSlug } : {}),
          ...(projectType ? { project_type: projectType } : {}),
          ...(serviceCategory ? { service_category: serviceCategory } : {})
        });
        onClick?.(event);
      }}
      {...props}
    />
  );
}
