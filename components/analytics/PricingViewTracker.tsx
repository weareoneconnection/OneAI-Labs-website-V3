"use client";

import { useEffect } from "react";
import { analyticsEvents, trackEvent } from "@/lib/analytics";
import type { Locale } from "@/lib/i18n";

export function PricingViewTracker({ locale }: { locale: Locale }) {
  useEffect(() => {
    trackEvent(analyticsEvents.pricingView, { locale });
  }, [locale]);

  return null;
}
