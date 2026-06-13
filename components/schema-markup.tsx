import { siteConfig } from "@/lib/site";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How often should I have an eye checkup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Regular eye examinations help detect vision changes and eye conditions early. The recommended frequency may vary depending on age, health and existing eye conditions."
      }
    },
    {
      "@type": "Question",
      name: "Do you provide contact lens consultations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer professional guidance for selecting, fitting and maintaining contact lenses safely and comfortably."
      }
    },
    {
      "@type": "Question",
      name: "Can I contact the clinic through WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Patients can contact us through WhatsApp for eye care questions, service details and general enquiries."
      }
    },
    {
      "@type": "Question",
      name: "What is computer vision testing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Computer vision testing evaluates eye strain and vision-related issues caused by prolonged screen usage."
      }
    },
    {
      "@type": "Question",
      name: "Do you provide blue cut and anti-glare lenses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer blue cut lenses, anti-glare solutions and premium optical products to improve visual comfort."
      }
    },
    {
      "@type": "Question",
      name: "Do diabetic patients need regular eye evaluations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Regular eye evaluations are important for diabetic patients to monitor retinal health and identify vision-related complications early."
      }
    }
  ]
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],
  name: siteConfig.name,
  url: siteConfig.url,
  description:
    "Eye Care Clinic in Kulasekharam offering eye checkup, vision testing, contact lenses, retina screening, diabetic eye evaluation and premium eyewear.",
  medicalSpecialty: "Optometry",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Blessing Complex, 8-130/7, Nagacode Junction, Opposite Sugumar Hospital",
    addressLocality: "Kulasekharam",
    addressRegion: "Tamil Nadu",
    postalCode: "629161",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 8.3619376,
    longitude: 77.2934769
  },
  hasMap: siteConfig.directionsHref,
  openingHours: ["Mo-Sa 09:00-20:30"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    reviewCount: "34"
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Shajin Mariadhas" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "I had a very good experience at Blue Phoenix Eye Care. The eye consultation was clear, professional, and very reassuring. The treatment was simple, affordable, and everything was explained properly."
    }
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "calls and WhatsApp enquiries",
    areaServed: "Kulasekharam",
    availableLanguage: ["English", "Tamil"]
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  slogan: "Professional eye care and premium optical solutions in Kulasekharam",
  sameAs: [siteConfig.googleReviewsHref]
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPoint",
  contactType: "calls and WhatsApp enquiries",
  areaServed: "Kulasekharam",
  availableLanguage: ["English", "Tamil"],
  url: siteConfig.contactHref
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

export function SchemaMarkup() {
  return (
    <>
      {[businessSchema, organizationSchema, contactSchema, faqSchema, breadcrumbSchema].map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
