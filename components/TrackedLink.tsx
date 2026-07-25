"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { track } from "@vercel/analytics";

type TrackingEventName =
  | "start_project_click"
  | "service_package_click"
  | "live_demo_click"
  | "case_study_click"
  | "about_start_project_click"
  | "about_view_projects_click"
  | "about_service_click"
  | "how_we_work_start_click"
  | "how_we_work_services_click"
  | "how_we_work_projects_click"
  | "faq_start_project_click"
  | "faq_contact_click"
  | "faq_related_link_click"
  | "pricing_start_project_click"
  | "pricing_service_click"
  | "pricing_project_click"
  | "results_project_click"
  | "results_start_project_click"
  | "results_project_fit_click";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  eventName: TrackingEventName;
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
