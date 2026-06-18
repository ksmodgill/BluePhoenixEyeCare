import type { SiteSettings } from "@/lib/sanity/types";

type Faq = {
  question: string;
  answer: string;
};

type SchemaMarkupProps = {
  settings: SiteSettings;
  faqs?: Faq[];
};

export function SchemaMarkup({ settings, faqs = [] }: SchemaMarkupProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    name: settings.clinicName,
    url: settings.siteUrl,
    description: settings.defaultSeo?.metaDescription,
    medicalSpecialty: "Optometry",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: settings.addressLines?.join(", "),
      addressLocality: settings.city,
      addressRegion: settings.state,
      postalCode: settings.pinCode,
      addressCountry: settings.country || "IN"
    },
    hasMap: settings.googleMapUrl,
    openingHours: settings.openingTime && settings.closingTime ? [`Mo-Sa ${settings.openingTime}-${settings.closingTime}`] : undefined,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "calls and WhatsApp enquiries",
      areaServed: settings.city,
      availableLanguage: ["English", "Tamil"]
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: settings.clinicName,
    url: settings.siteUrl,
    slogan: settings.tagline,
    sameAs: [settings.googleReviewsUrl, settings.facebook, settings.instagram, settings.youtube, settings.linkedin].filter(Boolean)
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "#home" },
      { "@type": "ListItem", position: 2, name: "Services", item: "#services" },
      { "@type": "ListItem", position: 3, name: "Reviews", item: "#reviews" },
      { "@type": "ListItem", position: 4, name: "Contact", item: "#contact" }
    ]
  };

  const schemas: Record<string, unknown>[] = [businessSchema, organizationSchema, breadcrumbSchema];
  if (faqs.length) {
    schemas.push(faqSchema);
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
