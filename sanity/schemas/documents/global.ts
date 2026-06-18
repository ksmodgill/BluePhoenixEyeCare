import { defineArrayMember, defineField, defineType } from "sanity";

export const header = defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    defineField({
      name: "singletonKey",
      type: "string",
      hidden: true,
      readOnly: true
    }),
    defineField({
      name: "logoOverride",
      title: "Logo Override",
      type: "image",
      description: "Optional. Falls back to Site Settings logo.",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string"
        })
      ]
    }),
    defineField({
      name: "navigation",
      title: "Navigation Menu",
      type: "array",
      of: [defineArrayMember({ type: "navItem" })],
      validation: (rule) => rule.min(1)
    }),
    defineField({
      name: "primaryCta",
      title: "Primary CTA",
      type: "ctaButton"
    }),
    defineField({
      name: "secondaryCta",
      title: "Secondary CTA",
      type: "ctaButton"
    }),
    defineField({
      name: "mobileMenuIntro",
      title: "Mobile Menu Intro",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" })
      ]
    })
  ],
  preview: {
    prepare: () => ({ title: "Header" })
  }
});

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "singletonKey",
      type: "string",
      hidden: true,
      readOnly: true
    }),
    defineField({
      name: "description",
      title: "Footer Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "copyrightText",
      title: "Copyright Text",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "quickLinks",
      title: "Quick Links",
      type: "array",
      of: [defineArrayMember({ type: "navItem" })]
    }),
    defineField({
      name: "serviceLinks",
      title: "Service Links",
      type: "array",
      of: [{ type: "string" }]
    })
  ],
  preview: {
    prepare: () => ({ title: "Footer" })
  }
});

export const globalUi = defineType({
  name: "globalUi",
  title: "Global UI",
  type: "document",
  fields: [
    defineField({
      name: "singletonKey",
      type: "string",
      hidden: true,
      readOnly: true
    }),
    defineField({
      name: "stickyBarHeading",
      title: "Sticky Bar Heading",
      type: "string"
    }),
    defineField({
      name: "stickyBarCallLabel",
      title: "Sticky Bar Call Label",
      type: "string",
      initialValue: "Call"
    }),
    defineField({
      name: "stickyBarWhatsappLabel",
      title: "Sticky Bar WhatsApp Label",
      type: "string",
      initialValue: "WhatsApp"
    }),
    defineField({
      name: "showFloatingCredit",
      title: "Show Floating Credit",
      type: "boolean",
      initialValue: true
    }),
    defineField({
      name: "floatingCredit",
      title: "Floating Credit",
      type: "object",
      fields: [
        defineField({ name: "label", title: "Label", type: "string" }),
        defineField({ name: "url", title: "URL", type: "url" })
      ]
    }),
    defineField({
      name: "showBackToTop",
      title: "Show Back to Top",
      type: "boolean",
      initialValue: true
    })
  ],
  preview: {
    prepare: () => ({ title: "Global UI" })
  }
});
