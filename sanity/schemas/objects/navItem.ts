import { defineField, defineType } from "sanity";

export const navItem = defineType({
  name: "navItem",
  title: "Navigation Item",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "sectionId",
      title: "Section ID",
      type: "string",
      description: "In-page anchor without #"
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "string",
      description: "External or custom URL (overrides section ID)"
    }),
    defineField({
      name: "openInNewTab",
      title: "Open in New Tab",
      type: "boolean",
      initialValue: false
    })
  ],
  preview: {
    select: { title: "label", subtitle: "sectionId" }
  }
});
