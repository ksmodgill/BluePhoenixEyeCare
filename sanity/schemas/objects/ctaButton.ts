import { defineField, defineType } from "sanity";

export const ctaButton = defineType({
  name: "ctaButton",
  title: "CTA Button",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Button Text",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "action",
      title: "Action",
      type: "string",
      options: {
        list: [
          { title: "Call (from Site Settings)", value: "call" },
          { title: "WhatsApp (from Site Settings)", value: "whatsapp" },
          { title: "Custom URL", value: "url" },
          { title: "Page Section", value: "section" }
        ],
        layout: "radio"
      },
      initialValue: "call",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "url",
      title: "Custom URL",
      type: "url",
      hidden: ({ parent }) => parent?.action !== "url"
    }),
    defineField({
      name: "sectionId",
      title: "Section ID",
      type: "string",
      description: "Anchor target without #, e.g. contact",
      hidden: ({ parent }) => parent?.action !== "section"
    }),
    defineField({
      name: "variant",
      title: "Style",
      type: "string",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
          { title: "Ghost", value: "ghost" }
        ]
      },
      initialValue: "primary"
    }),
    defineField({
      name: "size",
      title: "Size",
      type: "string",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Large", value: "lg" }
        ]
      },
      initialValue: "default"
    }),
    defineField({
      name: "openInNewTab",
      title: "Open in New Tab",
      type: "boolean",
      initialValue: false
    }),
    defineField({
      name: "whatsappMessage",
      title: "WhatsApp Message Override",
      type: "string",
      description: "Optional pre-filled message when action is WhatsApp",
      hidden: ({ parent }) => parent?.action !== "whatsapp"
    })
  ],
  preview: {
    select: { title: "label", subtitle: "action" }
  }
});
