"use client";

import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackEvent, type AnalyticsEventName, type AnalyticsParams } from "@/lib/analytics";

export function TrackedLink({
  href,
  event,
  eventParams,
  children,
  ...props
}: {
  href: string;
  event: AnalyticsEventName;
  eventParams?: AnalyticsParams;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children" | "onClick"> & Partial<Pick<LinkProps, "replace" | "scroll" | "prefetch">>) {
  const onClick = () => trackEvent(event, { ...eventParams, destination: href });

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return <a href={href} {...props} onClick={onClick}>{children}</a>;
  }

  return <Link href={href} {...props} onClick={onClick}>{children}</Link>;
}
