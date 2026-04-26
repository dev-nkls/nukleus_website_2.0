import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://nukleus.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nukleus",
    template: "%s · Nukleus",
  },
  // TODO: replace with final tagline once messaging is locked.
  description: "Nukleus.",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Nukleus",
    title: "Nukleus",
    description: "Nukleus.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nukleus",
    description: "Nukleus.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
