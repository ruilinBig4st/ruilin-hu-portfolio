import type { Metadata } from "next";
import "./globals.css";
import { portfolio } from "@/lib/portfolio-data";
import { getSiteUrl } from "@/utils/site-url";
import { googleSiteVerification } from "@/constants/site";

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION || googleSiteVerification },
  title: `${portfolio.name} | Data Portfolio`,
  description: portfolio.summary,
  keywords: ["Ruilin Hu", "Data Analyst", "Data Scientist", "Business Analyst", "Analytics Engineer", "Portfolio"],
  authors: [{ name: portfolio.name }],
  openGraph: {
    title: `${portfolio.name} | Data Portfolio`,
    description: portfolio.summary,
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-ink text-steel antialiased">{children}</body>
    </html>
  );
}
