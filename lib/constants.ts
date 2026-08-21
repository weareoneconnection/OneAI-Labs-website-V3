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
  // No api.oneai.network record exists yet; keep the platform host until one does.
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "https://oneai-saas-api-production.up.railway.app",
  docsUrl: `${appUrl}/docs`,
  pricingUrl: `${appUrl}/pricing`,
  securityUrl: `${appUrl}/security`,
  theOneUrl: "https://theone-eta.vercel.app/",
  mirrorUrl: "https://onemirror-v1.vercel.app/",
  studioUrl: "https://oneai-web-delta.vercel.app/",
  videoUrl: "https://www.onevideo.studio/",
  forgeUrl: "https://forge.oneai.network/",
  waocUrl: "https://waoc.io",
  email: "info@weareoneconnection.com",
  contactFormEndpoint: "https://formspree.io/f/xojrozjo"
};
