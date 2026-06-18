import { defineArrayMember, defineField, defineType } from "sanity";

export const serviceCard = defineType({
  name: "serviceCard",
  title: "Service Card",
  type: "object",
  fields: [
    defineField({ name: "icon", title: "Icon", type: "iconPicker" }),
    defineField({
      name: "title",
      title: "Service Name",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({ name: "badge", title: "Badge", type: "string" }),
    defineField({
      name: "image",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (rule) => rule.required()
        })
      ]
    }),
    defineField({
      name: "imagePath",
      title: "Image Path (fallback)",
      type: "string",
      description: "Public folder path when no CMS image is uploaded"
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "benefits",
      title: "Feature List",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.min(1)
    }),
    defineField({ name: "seoLine", title: "SEO Line", type: "string" }),
    defineField({ name: "cta", title: "CTA Button", type: "ctaButton" })
  ],
  preview: { select: { title: "title", media: "image" } }
});

export const symptomCard = defineType({
  name: "symptomCard",
  title: "Symptom Card",
  type: "object",
  fields: [
    defineField({
      name: "number",
      title: "Number",
      type: "string",
      description: "Optional decorative number"
    }),
    defineField({ name: "icon", title: "Icon", type: "iconPicker" }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "label",
      title: "Tags Label",
      type: "string",
      description: "e.g. Common Causes"
    }),
    defineField({
      name: "tags",
      title: "Tags / Causes",
      type: "array",
      of: [{ type: "string" }]
    }),
    defineField({ name: "cta", title: "CTA Button", type: "ctaButton" })
  ],
  preview: { select: { title: "title" } }
});

export const faqItem = defineType({
  name: "faqItem",
  title: "FAQ Item",
  type: "object",
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required()
    })
  ]
});

export const galleryItem = defineType({
  name: "galleryItem",
  title: "Gallery Item",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (rule) => rule.required()
        })
      ]
    }),
    defineField({
      name: "imagePath",
      title: "Image Path (fallback)",
      type: "string"
    }),
    defineField({
      name: "alt",
      title: "Alt Text (for fallback image)",
      type: "string"
    }),
    defineField({
      name: "size",
      title: "Grid Size",
      type: "string",
      options: {
        list: ["large", "tall", "medium", "wide"]
      },
      initialValue: "medium"
    })
  ]
});

export const galleryShowcaseBlock = defineType({
  name: "galleryShowcaseBlock",
  title: "Gallery Showcase Block",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({ name: "content", title: "Content", type: "text", rows: 3 }),
    defineField({
      name: "items",
      title: "Highlight Items",
      type: "array",
      of: [{ type: "string" }]
    })
  ]
});

export const weeklyScheduleItem = defineType({
  name: "weeklyScheduleItem",
  title: "Weekly Schedule",
  type: "object",
  fields: [
    defineField({
      name: "day",
      title: "Day",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({ name: "time", title: "Hours", type: "string" }),
    defineField({ name: "closed", title: "Closed", type: "boolean", initialValue: false })
  ]
});

export const portableTextBlock = defineType({
  name: "portableTextBlock",
  title: "Rich Text",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" }
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" }
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "Link",
            fields: [
              defineField({
                name: "href",
                type: "url",
                validation: (rule) =>
                  rule.uri({ allowRelative: true, scheme: ["http", "https", "mailto", "tel"] })
              })
            ]
          }
        ]
      }
    })
  ]
});
