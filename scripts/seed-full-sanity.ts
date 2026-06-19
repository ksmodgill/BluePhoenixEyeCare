import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { createClient } from "@sanity/client";
import { defaultSiteData } from "../lib/sanity/defaults";

function loadEnvFile(filename: string) {
  try {
    const envPath = resolve(process.cwd(), filename);
    const content = readFileSync(envPath, "utf8");

    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const separator = trimmed.indexOf("=");
      if (separator === -1) continue;
      const key = trimmed.slice(0, separator).trim();
      const value = trimmed.slice(separator + 1).trim();
      if (!process.env[key]) process.env[key] = value;
    }
  } catch {
    // Optional env file.
  }
}

loadEnvFile(".env.local");
loadEnvFile(".env");

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error("Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN in .env.local");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01",
  token,
  useCdn: false
});

const SECTION_TITLES: Record<string, string> = {
  heroSection: "Hero",
  trustedVisionSection: "Trusted Vision Care",
  qualityFeaturesSection: "Quality Features",
  servicesSection: "Services",
  featuredBrandsSection: "Featured Brand",
  symptomsSection: "Symptoms",
  gallerySection: "Gallery",
  reviewsSection: "Reviews",
  faqSection: "FAQ",
  contactSection: "Contact"
};

function withKeys<T extends Record<string, unknown>>(items: T[] | undefined, prefix: string) {
  return (items || []).map((item, index) => ({
    ...item,
    _key: `${prefix}-${index}`
  }));
}

function paragraphsToPortableText(paragraphs?: string[]) {
  if (!paragraphs?.length) return undefined;

  return paragraphs.map((text, index) => ({
    _type: "block",
    _key: `block-${index}`,
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: `span-${index}`, text, marks: [] }]
  }));
}

function transformLocalSeo(localSeo?: {
  heading?: string;
  content?: unknown;
  plainParagraphs?: string[];
}) {
  if (!localSeo) return undefined;

  return {
    heading: localSeo.heading,
    plainParagraphs: localSeo.plainParagraphs,
    content: localSeo.plainParagraphs
      ? paragraphsToPortableText(localSeo.plainParagraphs)
      : localSeo.content
  };
}

function toSectionId(defaultId: string) {
  return defaultId.replace(/^default-/, "section-");
}

function prepareSection(section: (typeof defaultSiteData.homepage.sections)[number]) {
  const { _type, _id, ...restRaw } = section;
  const rest = restRaw as Record<string, unknown>;
  const docId = toSectionId(_id);
  const base = {
    _id: docId,
    _type,
    internalTitle: SECTION_TITLES[_type] || _type
  };

  switch (_type) {
    case "heroSection":
      return {
        ...base,
        ...rest,
        heroImagePath: "/images/hero.png"
      };

    case "trustedVisionSection":
      return {
        ...base,
        ...rest,
        panelCtas: withKeys(rest.panelCtas as Record<string, unknown>[] | undefined, "cta"),
        proofCard: rest.proofCard
          ? {
              ...rest.proofCard,
              stats: withKeys(
                (rest.proofCard as { stats?: Record<string, unknown>[] }).stats,
                "stat"
              )
            }
          : undefined
      };

    case "qualityFeaturesSection":
      return {
        ...base,
        ...rest,
        features: withKeys(rest.features as Record<string, unknown>[] | undefined, "feature")
      };

    case "servicesSection":
      return {
        ...base,
        ...rest,
        services: withKeys(rest.services as Record<string, unknown>[] | undefined, "service"),
        localSeo: transformLocalSeo(
          rest.localSeo as { heading?: string; plainParagraphs?: string[] } | undefined
        )
      };

    case "featuredBrandsSection":
      return {
        ...base,
        ...rest,
        brands: withKeys(rest.brands as Record<string, unknown>[] | undefined, "brand")
      };

    case "symptomsSection":
      return {
        ...base,
        ...rest,
        symptoms: withKeys(rest.symptoms as Record<string, unknown>[] | undefined, "symptom"),
        visitCta: rest.visitCta
          ? {
              ...(rest.visitCta as object),
              checklist: withKeys(
                (rest.visitCta as { checklist?: Record<string, unknown>[] }).checklist,
                "check"
              )
            }
          : undefined,
        localSeo: transformLocalSeo(
          rest.localSeo as { heading?: string; plainParagraphs?: string[] } | undefined
        )
      };

    case "gallerySection":
      return {
        ...base,
        ...rest,
        galleryItems: withKeys(rest.galleryItems as Record<string, unknown>[] | undefined, "gallery"),
        showcaseBlocks: withKeys(
          rest.showcaseBlocks as Record<string, unknown>[] | undefined,
          "showcase"
        )
      };

    case "reviewsSection": {
      const { reviews, ...reviewRest } = rest as {
        reviews?: Array<{ _id: string; authorName: string; rating?: number; text: string }>;
        [key: string]: unknown;
      };

      return {
        ...base,
        ...reviewRest,
        reviews: (reviews || []).map((review, index) => ({
          _type: "reference",
          _ref: `testimonial-${review._id}`,
          _key: `review-${index}`
        })),
        _reviewsData: reviews
      };
    }

    case "faqSection":
      return {
        ...base,
        ...rest,
        faqs: withKeys(rest.faqs as Record<string, unknown>[] | undefined, "faq")
      };

    case "contactSection":
      return {
        ...base,
        ...rest,
        localSeo: transformLocalSeo(
          rest.localSeo as { heading?: string; plainParagraphs?: string[] } | undefined
        )
      };

    default:
      return { ...base, ...rest };
  }
}

async function seed() {
  const { settings, header, footer, globalUi, homepage } = defaultSiteData;
  const tx = client.transaction();

  tx.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    singletonKey: "siteSettings",
    ...settings,
    weeklySchedule: withKeys(settings.weeklySchedule, "schedule")
  });

  tx.createOrReplace({
    _id: "header",
    _type: "header",
    singletonKey: "header",
    ...header,
    navigation: withKeys(header.navigation, "nav")
  });

  tx.createOrReplace({
    _id: "footer",
    _type: "footer",
    singletonKey: "footer",
    ...footer,
    quickLinks: withKeys(footer.quickLinks, "link")
  });

  tx.createOrReplace({
    _id: "globalUi",
    _type: "globalUi",
    singletonKey: "globalUi",
    ...globalUi
  });

  const sectionRefs: Array<{ _type: "sectionReference"; _key: string; enabled: boolean; section: { _type: "reference"; _ref: string } }> = [];

  for (const section of homepage.sections) {
    const prepared = prepareSection(section) as Record<string, unknown> & {
      _id: string;
      _type: string;
      _reviewsData?: Array<{ _id: string; authorName: string; rating?: number; text: string }>;
    };

    if (prepared._type === "reviewsSection" && prepared._reviewsData) {
      prepared._reviewsData.forEach((review, index) => {
        tx.createOrReplace({
          _id: `testimonial-${review._id}`,
          _type: "testimonial",
          authorName: review.authorName,
          rating: review.rating ?? 5,
          text: review.text,
          featured: true,
          order: index + 1
        });
      });
      delete prepared._reviewsData;
    }

    tx.createOrReplace(prepared);

    sectionRefs.push({
      _type: "sectionReference",
      _key: prepared._id,
      enabled: true,
      section: { _type: "reference", _ref: prepared._id }
    });
  }

  tx.createOrReplace({
    _id: "homepage",
    _type: "homepage",
    singletonKey: "homepage",
    title: homepage.title,
    seo: settings.defaultSeo,
    sections: sectionRefs
  });

  await tx.commit();

  console.log(`Full seed complete: ${sectionRefs.length} homepage sections published.`);
  console.log("Restart dev server and open /studio to edit content.");
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
