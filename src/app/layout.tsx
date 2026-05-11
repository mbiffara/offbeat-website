import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OFFBEAT — Operational Infrastructure for Nightlife",
  description:
    "The infrastructure the nightlife ecosystem runs on. Music programming, talent buying, show advance, event marketing, partnerships, and on-site operations under one accountable partner.",
  metadataBase: new URL("https://offbeat.co"),
  openGraph: {
    title: "OFFBEAT — Operational Infrastructure for Nightlife",
    description:
      "The infrastructure the nightlife ecosystem runs on. We don't promise. We operate.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
