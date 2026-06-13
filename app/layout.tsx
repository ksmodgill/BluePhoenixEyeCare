import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Blue Phoenix Eye Care & Opticals | Eye Care Clinic in Kulasekharam",
    template: "%s | Blue Phoenix Eye Care & Opticals"
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  icons: {
    icon: [{ url: "/images/Favicon.png", type: "image/png" }],
    shortcut: "/images/Favicon.png",
    apple: "/images/Favicon.png"
  },
  keywords: [
    "Eye Care Clinic in Kulasekharam",
    "Eye Checkup",
    "Eye Examination",
    "Vision Testing",
    "Contact Lenses",
    "Optical Store",
    "Retina Screening",
    "Premium Eyewear"
  ],
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Blue Phoenix Eye Care & Opticals | Eye Checkup & Premium Eyewear",
    description:
      "Call or WhatsApp Blue Phoenix Eye Care & Opticals for professional eye examinations, vision testing, contact lens guidance, retina screening and premium eyewear in Kulasekharam.",
    url: "/",
    siteName: siteConfig.name,
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Phoenix Eye Care & Opticals",
    description: siteConfig.description
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#082B7A"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
