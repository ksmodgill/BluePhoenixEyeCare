import { defineField, defineType } from "sanity";

export const statCard = defineType({
  name: "statCard",
  title: "Statistics Card",
  type: "object",
  fields: [
    defineField({
      name: "staticValue",
      title: "Static Value",
      type: "string",
      description: "Use for non-numeric stats like 'Trusted' or 'All Ages'"
    }),
    defineField({
      name: "value",
      title: "Animated Number",
      type: "number"
    }),
    defineField({
      name: "suffix",
      title: "Suffix",
      type: "string",
      description: "e.g. ★ or %"
    }),
    defineField({
      name: "decimals",
      title: "Decimal Places",
      type: "number",
      initialValue: 0
    }),
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (rule) => rule.required()
    })
  ],
  preview: {
    select: { title: "label", subtitle: "staticValue" }
  }
});

export const featureCard = defineType({
  name: "featureCard",
  title: "Feature Card",
  type: "object",
  fields: [
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
    })
  ]
});

export const infoCard = defineType({
  name: "infoCard",
  title: "Information Card",
  type: "object",
  fields: [
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
      rows: 3
    })
  ]
});

export const trustItem = defineType({
  name: "trustItem",
  title: "Trust Item",
  type: "object",
  fields: [
    defineField({ name: "icon", title: "Icon", type: "iconPicker" }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required()
    })
  ]
});

export const checklistItem = defineType({
  name: "checklistItem",
  title: "Checklist Item",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (rule) => rule.required()
    })
  ],
  preview: { select: { title: "label" } }
});

export const benefitCard = defineType({
  name: "benefitCard",
  title: "Benefit Card",
  type: "object",
  fields: [
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
    })
  ]
});
