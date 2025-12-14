import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import "./globals.css";
import siteData from "@/content/site.json";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
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
  openGraph: {
    title: siteData.name,
    description: siteData.tagline,
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerifDisplay.variable}`}>
      <body
        className="antialiased"
        style={{
          fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
        }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
