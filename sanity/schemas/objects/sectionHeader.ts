import { defineField, defineType } from "sanity";

export const sectionHeader = defineType({
  name: "sectionHeader",
  title: "Section Header",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Badge / Eyebrow",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "title",
      title: "Heading",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "intro",
      title: "Description",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "align",
      title: "Alignment",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" }
        ]
      },
      initialValue: "left"
    }),
    defineField({
      name: "sectionId",
      title: "Section ID",
      type: "string",
      description: "HTML id for in-page navigation"
    })
  ]
});
