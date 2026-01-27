import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import "./globals.css";
import siteData from "@/content/site.json";
import { DEFAULT_OG_IMAGE, getMetadataBase } from "@/lib/seo";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import { ConditionalLayout } from "./ConditionalLayout";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  weight: ["600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: siteData.name,
    template: `%s | ${siteData.name}`,
  },
  description: siteData.description,
  keywords: [
    "charity",
    "donation",
    "Catholic charity",
    "developing countries",
    "humanitarian aid",
    "Little Way Association",
    "St Therese",
    "missionary support",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: siteData.name,
    description: siteData.tagline,
    type: "website",
    locale: "en_GB",
    siteName: siteData.name,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.name,
    description: siteData.tagline,
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfairDisplay.variable}`}>
      <body
        className="antialiased"
        style={{
          fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
        }}
      >
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
