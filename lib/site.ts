const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");

export const siteName = "Damjan Tepic — Digital Architect";

export const siteDescription =
  "I design and build web products end to end — invoicing platforms, media tools, and business websites. Selected work: FakturaOne, MusicOne, Glazure Cubak.";

export const socialProfiles = {
  github: "https://github.com/TepicDamjan",
  linkedin: "https://www.linkedin.com/in/damjan-tepic",
} as const;
