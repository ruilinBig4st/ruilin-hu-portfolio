export function getSiteUrl(): URL | undefined {
  const host = process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (!host) return undefined;
  return new URL(host.startsWith("http") ? host : `https://${host}`);
}
