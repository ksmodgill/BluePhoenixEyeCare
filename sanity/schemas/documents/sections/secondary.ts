import { defineArrayMember, defineField, defineType } from "sanity";

const sectionFields = [
  defineField({
    name: "internalTitle",
    title: "Internal Title",
    type: "string",
    validation: (rule) => rule.required()
  }),
  defineField({ name: "seo", title: "SEO Override", type: "seo" })
];

export const symptomsSection = defineType({
  name: "symptomsSection",
  title: "Symptoms Section",
  type: "document",
  fields: [
    ...sectionFields,
    defineField({ name: "header", title: "Section Header", type: "sectionHeader", validation: (r) => r.required() }),
    defineField({
      name: "symptoms",
      title: "Symptoms",
      type: "array",
      of: [defineArrayMember({ type: "symptomCard" })],
      options: { layout: "grid" }
    }),
    defineField({
      name: "sideImage",
      title: "Right Side Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt Text", type: "string", validation: (r) => r.required() })
      ]
    }),
    defineField({
      name: "sideImagePath",
      title: "Side Image Path (fallback)",
      type: "string"
    }),
    defineField({ name: "sideCaptionTitle", title: "Image Caption Title", type: "string" }),
    defineField({ name: "sideCaptionText", title: "Image Caption Text", type: "text", rows: 2 }),
    defineField({
      name: "visitCta",
      title: "When Should You Visit CTA",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
        defineField({ name: "cta", title: "CTA Button", type: "ctaButton" }),
        defineField({
          name: "checklist",
          title: "Checklist",
          type: "array",
          of: [defineArrayMember({ type: "checklistItem" })]
        })
      ]
    }),
    defineField({
      name: "benefits",
      title: "Benefits / Symptom Checker",
      type: "object",
      fields: [
        defineField({
          name: "variant",
          title: "Variant",
          type: "string",
          options: {
            list: [
              { title: "Benefit Cards", value: "benefitCards" },
              { title: "Symptom Checker", value: "symptomChecker" }
            ]
          },
          initialValue: "symptomChecker"
        }),
        defineField({ name: "header", title: "Header", type: "sectionHeader" }),
        defineField({
          name: "benefitCards",
          title: "Benefit Cards",
          type: "array",
          of: [defineArrayMember({ type: "benefitCard" })]
        }),
        defineField({
          name: "checkerSymptoms",
          title: "Checker Symptoms",
          type: "array",
          of: [{ type: "string" }]
        }),
        defineField({ name: "checkerCta", title: "Checker CTA", type: "ctaButton" })
      ]
    }),
    defineField({
      name: "localSeo",
      title: "Local SEO Block",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "content", title: "Content", type: "portableTextBlock" }),
        defineField({
          name: "plainParagraphs",
          title: "Plain Paragraphs",
          type: "array",
          of: [{ type: "text" }]
        })
      ]
    })
  ],
  preview: { select: { title: "internalTitle" } }
});

export const visitCtaSection = defineType({
  name: "visitCtaSection",
  title: "When Should You Visit CTA",
  type: "document",
  fields: [
    ...sectionFields,
    defineField({ name: "heading", title: "Heading", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
    defineField({ name: "cta", title: "CTA Button", type: "ctaButton" }),
    defineField({
      name: "checklist",
      title: "Symptoms Checklist",
      type: "array",
      of: [defineArrayMember({ type: "checklistItem" })]
    })
  ],
  preview: { select: { title: "internalTitle" } }
});

export const benefitsSection = defineType({
  name: "benefitsSection",
  title: "Eye Care Benefits",
  type: "document",
  fields: [
    ...sectionFields,
    defineField({
      name: "variant",
      title: "Section Variant",
      type: "string",
      options: {
        list: [
          { title: "Benefit Cards", value: "benefitCards" },
          { title: "Symptom Checker", value: "symptomChecker" }
        ]
      },
      initialValue: "symptomChecker"
    }),
    defineField({ name: "header", title: "Section Header", type: "sectionHeader" }),
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [defineArrayMember({ type: "benefitCard" })],
      hidden: ({ parent }) => parent?.variant !== "benefitCards"
    }),
    defineField({
      name: "checkerSymptoms",
      title: "Checker Symptoms",
      type: "array",
      of: [{ type: "string" }],
      hidden: ({ parent }) => parent?.variant !== "symptomChecker"
    }),
    defineField({
      name: "checkerCta",
      title: "Checker CTA",
      type: "ctaButton",
      hidden: ({ parent }) => parent?.variant !== "symptomChecker"
    })
  ],
  preview: { select: { title: "internalTitle" } }
});

export const finalCtaSection = defineType({
  name: "finalCtaSection",
  title: "Final CTA Section",
  type: "document",
  fields: [
    ...sectionFields,
    defineField({ name: "badge", title: "Badge", type: "string" }),
    defineField({ name: "heading", title: "Heading", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "primaryCta", title: "Primary CTA", type: "ctaButton" }),
    defineField({ name: "secondaryCta", title: "Secondary CTA", type: "ctaButton" }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt Text", type: "string" })
      ]
    })
  ],
  preview: { select: { title: "internalTitle" } }
});

export const gallerySection = defineType({
  name: "gallerySection",
  title: "Gallery Section",
  type: "document",
  fields: [
    ...sectionFields,
    defineField({ name: "header", title: "Section Header", type: "sectionHeader", validation: (r) => r.required() }),
    defineField({
      name: "categories",
      title: "Filter Categories",
      type: "array",
      of: [{ type: "string" }]
    }),
    defineField({
      name: "galleryItems",
      title: "Gallery Items",
      type: "array",
      of: [defineArrayMember({ type: "galleryItem" })],
      options: { layout: "grid" }
    }),
    defineField({
      name: "showcaseBlocks",
      title: "Showcase Blocks",
      type: "array",
      of: [defineArrayMember({ type: "galleryShowcaseBlock" })]
    }),
    defineField({
      name: "highlightBadges",
      title: "Highlight Badges",
      type: "array",
      of: [{ type: "string" }]
    }),
    defineField({
      name: "trustBanner",
      title: "Trust Banner",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
        defineField({ name: "primaryCta", title: "Primary CTA", type: "ctaButton" })
      ]
    })
  ],
  preview: { select: { title: "internalTitle" } }
});

export const reviewsSection = defineType({
  name: "reviewsSection",
  title: "Reviews Section",
  type: "document",
  fields: [
    ...sectionFields,
    defineField({ name: "header", title: "Section Header", type: "sectionHeader", validation: (r) => r.required() }),
    defineField({ name: "aggregateBadge", title: "Aggregate Badge", type: "string" }),
    defineField({
      name: "initialCount",
      title: "Initial Reviews Count",
      type: "number",
      initialValue: 6
    }),
    defineField({
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "testimonial" }]
        })
      ]
    })
  ],
  preview: { select: { title: "internalTitle" } }
});

export const faqSection = defineType({
  name: "faqSection",
  title: "FAQ Section",
  type: "document",
  fields: [
    ...sectionFields,
    defineField({ name: "header", title: "Section Header", type: "sectionHeader", validation: (r) => r.required() }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [defineArrayMember({ type: "faqItem" })]
    }),
    defineField({
      name: "bottomCta",
      title: "Bottom CTA",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "cta", title: "CTA", type: "ctaButton" })
      ]
    })
  ],
  preview: { select: { title: "internalTitle" } }
});

export const contactSection = defineType({
  name: "contactSection",
  title: "Contact Section",
  type: "document",
  fields: [
    ...sectionFields,
    defineField({ name: "header", title: "Section Header", type: "sectionHeader", validation: (r) => r.required() }),
    defineField({ name: "clinicHeading", title: "Clinic Card Heading", type: "string" }),
    defineField({ name: "clinicIntro", title: "Clinic Intro", type: "text", rows: 3 }),
    defineField({ name: "primaryCta", title: "Primary CTA", type: "ctaButton" }),
    defineField({ name: "secondaryCta", title: "Secondary CTA", type: "ctaButton" }),
    defineField({
      name: "assuranceItems",
      title: "Assurance Items",
      type: "array",
      of: [{ type: "string" }]
    }),
    defineField({
      name: "miniServices",
      title: "Mini Service Tags",
      type: "array",
      of: [{ type: "string" }]
    }),
    defineField({ name: "mapEyebrow", title: "Map Eyebrow", type: "string" }),
    defineField({ name: "mapHeading", title: "Map Heading", type: "string" }),
    defineField({
      name: "mapStripLabels",
      title: "Map Strip Labels",
      type: "array",
      of: [{ type: "string" }]
    }),
    defineField({
      name: "googleRatingLabel",
      title: "Google Rating Label",
      type: "string"
    }),
    defineField({
      name: "googleRatingText",
      title: "Google Rating Text",
      type: "string"
    }),
    defineField({
      name: "localSeo",
      title: "Local SEO Block",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "content", title: "Content", type: "portableTextBlock" }),
        defineField({
          name: "plainParagraphs",
          title: "Plain Paragraphs",
          type: "array",
          of: [{ type: "text" }]
        })
      ]
    })
  ],
  preview: { select: { title: "internalTitle" } }
});

export const featuredBrandsSection = defineType({
  name: "featuredBrandsSection",
  title: "Featured Brands Section",
  type: "document",
  fields: [
    ...sectionFields,
    defineField({
      name: "header",
      title: "Section Header",
      type: "sectionHeader",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "brands",
      title: "Brand Logos",
      description: "Logos appear in the auto-scrolling full-width slider below the section heading.",
      type: "array",
      of: [defineArrayMember({ type: "brandLogoItem" })],
      validation: (rule) => rule.min(1)
    })
  ],
  preview: { select: { title: "internalTitle" } }
});

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "authorName",
      title: "Author Name",
      type: "string",
      validation: (r) => r.required()
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (r) => r.min(1).max(5),
      initialValue: 5
    }),
    defineField({
      name: "text",
      title: "Review Text",
      type: "text",
      rows: 4,
      validation: (r) => r.required()
    }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: true }),
    defineField({ name: "order", title: "Sort Order", type: "number" })
  ],
  orderings: [
    {
      title: "Sort Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }]
    }
  ],
  preview: {
    select: { title: "authorName", subtitle: "text" }
  }
});
