import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import { absoluteUrl, siteConfig } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Goodness & Mercy Ventures | Nigerian Fabrics & Accessories",
    template: "%s | Goodness & Mercy Ventures",
  },
  description:
    "Shop premium lace, Ankara, Adire, Aso-Oke, jewelry, Italian shoes, and bags for Nigerian weddings, owambe, birthdays, and aso-ebi groups. International shipping from Nigeria.",
  keywords: [
    "Nigerian fabrics",
    "lace fabric Nigeria",
    "Ankara fabric",
    "aso ebi fabrics",
    "owambe outfits",
    "Nigerian wedding accessories",
    "bags from Nigeria",
    "jewelry for gele",
    "international shipping from Nigeria",
    "Ikorodu Lagos fabric store",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    title: "Goodness & Mercy Ventures | Nigerian Fabrics & Accessories",
    description:
      "Luxury Nigerian fabrics and accessories for weddings, aso-ebi groups, owambe, birthdays, and international shoppers.",
    images: [
      {
        url: absoluteUrl("/assets/images/hero.webp"),
        width: 1200,
        height: 1600,
        alt: "Goodness and Mercy Ventures fabrics and accessories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goodness & Mercy Ventures | Nigerian Fabrics & Accessories",
    description:
      "Shop Nigerian lace, Ankara, jewelry, and bags with international shipping from Nigeria.",
    images: [absoluteUrl("/assets/images/hero.webp")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
