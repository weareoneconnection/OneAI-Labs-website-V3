// The product surfaces live on our own domains. Sub-paths are derived from appUrl so
// they cannot drift apart from it the way five hand-written URLs previously did.
const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.oneai.network";

export const site = {
  name: "OneAI Labs",
  legalName: "ONEAI LABS SDN. BHD.",
  registrationNo: "202601020394 (1682491-W)",
  incorporatedOn: "18 May 2026",
  jurisdiction: "Malaysia",
  url: "https://www.oneai.network",
  appUrl,
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "https://api.oneai.network",
  docsUrl: `${appUrl}/docs`,
  pricingUrl: `${appUrl}/pricing`,
  securityUrl: `${appUrl}/security`,
  theOneUrl: "https://theone-eta.vercel.app/",
  mirrorUrl: "https://onemirror-v1.vercel.app/",
  studioUrl: "https://oneai-web-delta.vercel.app/",
  videoUrl: "https://www.onevideo.studio/",
  forgeUrl: "https://forge.oneai.network/",
  // OneAI Construction runs as its own brand and its own site. The Labs site
  // introduces it and hands off; it does not restate the product copy.
  constructionUrl: "https://www.oneaiconstruction.com",
  waocUrl: "https://waoc.io",
  // Engagements are led by the founder directly rather than handed to an account
  // team, which caps how many can run at once. Stated on the service pages as the
  // reason we are selective — a limit that comes from how the work is done is a
  // promise, while the same limit unexplained reads as an apology.
  concurrentEngagements: 2,
  email: "info@weareoneconnection.com",
  contactFormEndpoint: "https://formspree.io/f/xojrozjo"
};

/** A product page on the OneAI Construction site, in the reader's own language. */
export function constructionProductUrl(locale: "en" | "zh", slug: "construction-os" | "construction-twin") {
  return `${site.constructionUrl}/${locale}/products/${slug}`;
}
