import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { PreviewBanner } from "@/components/preview-banner";
import { getSiteSettings } from "@/lib/sanity/fetchers";
import { resolveFaviconUrl } from "@/lib/sanity/brand";
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

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const seo = settings.defaultSeo;
  const faviconUrl = resolveFaviconUrl(settings);

  return {
    metadataBase: new URL(settings.siteUrl),
    title: {
      default: seo?.metaTitle || `${settings.clinicName} | Eye Care Clinic in ${settings.city}`,
      template: `%s | ${settings.clinicName}`
    },
    description: seo?.metaDescription,
    applicationName: settings.clinicName,
    icons: {
      icon: [{ url: faviconUrl, type: "image/png" }],
      shortcut: faviconUrl,
      apple: faviconUrl
    },
    keywords: [
      `Eye Care Clinic in ${settings.city}`,
      "Eye Checkup",
      "Eye Examination",
      "Vision Testing",
      "Contact Lenses",
      "Optical Store",
      "Retina Screening",
      "Premium Eyewear"
    ],
    alternates: {
      canonical: seo?.canonicalUrl || "/"
    },
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false
      }
    },
    openGraph: {
      title: seo?.metaTitle || settings.clinicName,
      description: seo?.metaDescription,
      url: "/",
      siteName: settings.clinicName,
      type: "website",
      locale: "en_IN"
    },
    twitter: {
      card: "summary_large_image",
      title: settings.clinicName,
      description: seo?.metaDescription
    }
  };
}

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
      <body>
        <PreviewBanner />
        {children}
      </body>
    </html>
  );
}
