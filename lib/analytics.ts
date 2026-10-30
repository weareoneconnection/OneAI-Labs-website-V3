"use client";

/**
 * A deliberately small, provider-neutral event layer. GA receives the event when
 * configured; the browser event makes the same funnel observable in preview and in
 * tests without requiring a third-party analytics account.
 */
export const analyticsEvents = {
  ctaClick: "cta_click",
  apiSignupClick: "api_signup_click",
  productOpen: "product_open",
  pilotFormStart: "pilot_form_start",
  leadFormSubmit: "lead_form_submit",
  contactFormSuccess: "contact_form_success",
  contactFormError: "contact_form_error",
  missionDemoScenarioSelect: "mission_demo_scenario_select",
  missionDemoStepSelect: "mission_demo_step_select",
  pricingView: "pricing_view"
} as const;

export type AnalyticsEventName = (typeof analyticsEvents)[keyof typeof analyticsEvents];
export type AnalyticsParams = Record<string, string | number | boolean | undefined>;

type Gtag = (command: "event", eventName: string, params?: AnalyticsParams) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

export function trackEvent(name: AnalyticsEventName, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", name, params);
  window.dispatchEvent(new CustomEvent("oneai:analytics", { detail: { name, params } }));
}
