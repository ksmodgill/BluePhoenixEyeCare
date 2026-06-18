import { defineArrayMember, defineField, defineType } from "sanity";

const sectionFields = [
  defineField({
    name: "internalTitle",
    title: "Internal Title",
    type: "string",
    description: "For Studio list view only",
    validation: (rule) => rule.required()
  }),
  defineField({ name: "seo", title: "SEO Override", type: "seo" })
];

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "document",
  fields: [
    ...sectionFields,
    defineField({ name: "badge", title: "Small Badge Text", type: "string", validation: (r) => r.required() }),
    defineField({ name: "headingLine1", title: "Main Heading Line 1", type: "string", validation: (r) => r.required() }),
    defineField({ name: "headingLine2", title: "Highlighted Heading Line 2", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({ name: "localityNote", title: "Locality Note", type: "text", rows: 2 }),
    defineField({ name: "primaryCta", title: "Primary CTA", type: "ctaButton" }),
    defineField({ name: "secondaryCta", title: "Secondary CTA", type: "ctaButton" }),
    defineField({
      name: "conversionNotes",
      title: "Conversion Notes",
      type: "array",
      of: [{ type: "string" }]
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt Text", type: "string", validation: (r) => r.required() })
      ]
    }),
    defineField({
      name: "heroImagePath",
      title: "Hero Image Path (fallback)",
      type: "string",
      description: "Public folder path e.g. /images/hero.png when no CMS image is uploaded"
    }),
    defineField({
      name: "heroCard",
      title: "Hero Card (optional)",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Card Heading", type: "string" }),
        defineField({ name: "subheading", title: "Card Subheading", type: "string" }),
        defineField({ name: "floatingBadge", title: "Floating Badge Text", type: "string" })
      ]
    }),
    defineField({
      name: "trustBar",
      title: "Bottom Trust Bar",
      type: "array",
      of: [defineArrayMember({ type: "trustItem" })]
    }),
    defineField({
      name: "serviceStrip",
      title: "Service Marquee Items",
      type: "array",
      of: [{ type: "string" }]
    })
  ],
  preview: { select: { title: "internalTitle" } }
});

export const trustedVisionSection = defineType({
  name: "trustedVisionSection",
  title: "Trusted Vision Care",
  type: "document",
  fields: [
    ...sectionFields,
    defineField({ name: "header", title: "Section Header", type: "sectionHeader", validation: (r) => r.required() }),
    defineField({ name: "panelBadge", title: "Panel Badge", type: "string" }),
    defineField({ name: "panelHeading", title: "Panel Heading", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "panelDescription",
      title: "Panel Description",
      type: "array",
      of: [{ type: "text" }]
    }),
    defineField({ name: "highlights", title: "Highlights", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "panelCtas", title: "CTA Buttons", type: "array", of: [defineArrayMember({ type: "ctaButton" })] }),
    defineField({
      name: "proofCard",
      title: "Statistics Card",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
        defineField({
          name: "stats",
          title: "Statistics",
          type: "array",
          of: [defineArrayMember({ type: "statCard" })]
        })
      ]
    })
  ],
  preview: { select: { title: "internalTitle" } }
});

export const qualityFeaturesSection = defineType({
  name: "qualityFeaturesSection",
  title: "Quality Eye Care Features",
  type: "document",
  fields: [
    ...sectionFields,
    defineField({ name: "header", title: "Section Header", type: "sectionHeader", validation: (r) => r.required() }),
    defineField({
      name: "features",
      title: "Feature Grid",
      type: "array",
      of: [defineArrayMember({ type: "featureCard" })],
      options: { layout: "grid" }
    }),
    defineField({
      name: "bottomCard",
      title: "Bottom Information Card",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
        defineField({
          name: "commitments",
          title: "Commitment Items",
          type: "array",
          of: [{ type: "string" }]
        })
      ]
    }),
    defineField({
      name: "infoCards",
      title: "Additional Info Cards",
      type: "array",
      of: [defineArrayMember({ type: "infoCard" })]
    })
  ],
  preview: { select: { title: "internalTitle" } }
});

export const servicesSection = defineType({
  name: "servicesSection",
  title: "Services Section",
  type: "document",
  fields: [
    ...sectionFields,
    defineField({ name: "header", title: "Section Header", type: "sectionHeader", validation: (r) => r.required() }),
    defineField({
      name: "services",
      title: "Services Grid",
      type: "array",
      of: [defineArrayMember({ type: "serviceCard" })],
      options: { layout: "grid" }
    }),
    defineField({
      name: "conversionBanner",
      title: "Mid Page CTA Banner",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Badge", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
        defineField({ name: "primaryCta", title: "Button 1", type: "ctaButton" }),
        defineField({ name: "secondaryCta", title: "Button 2", type: "ctaButton" })
      ]
    }),
    defineField({
      name: "localSeo",
      title: "Local SEO Block",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "content", title: "Rich Text Content", type: "portableTextBlock" }),
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

export const ctaBannerSection = defineType({
  name: "ctaBannerSection",
  title: "CTA Banner",
  type: "document",
  fields: [
    ...sectionFields,
    defineField({ name: "eyebrow", title: "Badge", type: "string" }),
    defineField({ name: "heading", title: "Heading", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "primaryCta", title: "Button 1", type: "ctaButton" }),
    defineField({ name: "secondaryCta", title: "Button 2", type: "ctaButton" }),
    defineField({
      name: "variant",
      title: "Banner Style",
      type: "string",
      options: {
        list: [
          { title: "Blue Strip", value: "blue" },
          { title: "Neutral", value: "neutral" }
        ]
      },
      initialValue: "blue"
    })
  ],
  preview: { select: { title: "internalTitle" } }
});

export const localSeoBlock = defineType({
  name: "localSeoBlock",
  title: "Local SEO Block",
  type: "document",
  fields: [
    ...sectionFields,
    defineField({ name: "heading", title: "Heading", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "content",
      title: "Rich Text Content",
      type: "portableTextBlock",
      validation: (r) => r.required()
    })
  ],
  preview: { select: { title: "internalTitle" } }
});
