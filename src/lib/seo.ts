const DEFAULT_SITE_URL = "http://localhost:3000";

export function getSiteUrl(): string {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
    DEFAULT_SITE_URL;

  try {
    return new URL(envUrl).toString().replace(/\/$/, "");
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export function getMetadataBase(): URL {
  return new URL(getSiteUrl());
}

export function absUrl(pathname: string): string {
  return new URL(pathname, getSiteUrl()).toString();
}

export const DEFAULT_OG_IMAGE = {
  url: "/images/projects/hero-1.png",
  width: 1200,
  height: 630,
  alt: "The Little Way Association",
};




