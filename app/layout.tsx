import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore: Side-effect import for global CSS in Next.js app router
import "./globals.css";

import CursorGlow from "@/components/CursorGlow";
import SmoothScroll from "@/components/SmoothScroll";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bhavishahomecare.com"), // Change this if using a different domain
  title: {
    default: "Bhavisha Home Care | AC & Home Appliance Repair Services",
    template: "%s | Bhavisha Home Care",
  },
  description:
    "Professional AC repair, washing machine, RO, and geyser repair services at your doorstep.",

  keywords: [
    "AC Repair",
    "AC Service",
    "Washing Machine Repair",
     "Washing Machine service",
    "RO Service",
    "Geyser Repair",
    "Geyser service",
    "Home Appliance Repair",
    "Home Appliance Service",
    "Bhavisha Home Care",
  ],

  authors: [{ name: "Bhavisha Home Care" }],

  openGraph: {
    title: "Bhavisha Home Care",
    description:
      "Professional AC & Home Appliance Repair Services.",
    url: "https://bhavishahomecare.com",
    siteName: "Bhavisha Home Care",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bhavisha Home Care",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bhavisha Home Care",
    description:
      "Professional AC & Home Appliance Repair Services.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://bhavishahomecare.com",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
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
      <body className="min-h-full flex flex-col">
         <LocalBusinessSchema />
        <SmoothScroll />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}