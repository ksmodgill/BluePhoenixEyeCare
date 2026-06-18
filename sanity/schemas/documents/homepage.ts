import { defineArrayMember, defineField, defineType } from "sanity";

const sectionTypes = [
  { type: "heroSection" },
  { type: "trustedVisionSection" },
  { type: "qualityFeaturesSection" },
  { type: "servicesSection" },
  { type: "ctaBannerSection" },
  { type: "localSeoBlock" },
  { type: "symptomsSection" },
  { type: "visitCtaSection" },
  { type: "benefitsSection" },
  { type: "finalCtaSection" },
  { type: "gallerySection" },
  { type: "reviewsSection" },
  { type: "faqSection" },
  { type: "contactSection" }
];

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "singletonKey",
      type: "string",
      hidden: true,
      readOnly: true
    }),
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "seo",
      title: "Page SEO",
      type: "seo"
    }),
    defineField({
      name: "sections",
      title: "Page Sections",
      description: "Drag to reorder sections on the homepage.",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "sectionReference",
          title: "Section",
          fields: [
            defineField({
              name: "enabled",
              title: "Enabled",
              type: "boolean",
              initialValue: true
            }),
            defineField({
              name: "section",
              title: "Section",
              type: "reference",
              to: sectionTypes,
              validation: (rule) => rule.required()
            })
          ],
          preview: {
            select: {
              title: "section.internalTitle",
              subtitle: "section._type",
              enabled: "enabled"
            },
            prepare({ title, subtitle, enabled }) {
              return {
                title: enabled === false ? `[Hidden] ${title || "Section"}` : title || "Section",
                subtitle
              };
            }
          }
        })
      ]
    })
  ],
  preview: {
    prepare: () => ({ title: "Homepage" })
  }
});

export const sectionTypesList = sectionTypes;
