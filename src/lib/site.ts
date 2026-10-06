const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const SITE_URL = (configuredSiteUrl || "https://www.aamos.in").replace(/\/$/, "");

export const WHATSAPP_URL =
  "https://wa.me/916235314140?text=Hello%20Aamos%20Wedding%20Planners";
