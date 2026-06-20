import { defineArrayMember, defineField, defineType } from "sanity";

const singletonField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "string",
    hidden: true,
    readOnly: true
  });

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    { name: "business", title: "Business Details", default: true },
    { name: "contact", title: "Contact" },
    { name: "address", title: "Address" },
    { name: "social", title: "Social Links" },
    { name: "hours", title: "Business Hours" },
    { name: "seo", title: "SEO Defaults" }
  ],
  fields: [
    singletonField("singletonKey", "Singleton Key"),
    defineField({
      name: "clinicName",
      title: "Clinic Name",
      type: "string",
      group: "business",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      group: "business"
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      group: "business",
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
      name: "favicon",
      title: "Favicon",
      type: "image",
      group: "business"
    }),
    defineField({
      name: "siteUrl",
      title: "Site URL",
      type: "url",
      group: "business",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "primaryPhone",
      title: "Primary Phone",
      type: "string",
      group: "contact",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "secondaryPhone",
      title: "Landline Number",
      type: "string",
      group: "contact"
    }),
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp Number",
      type: "string",
      group: "contact",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "whatsappDefaultMessage",
      title: "Default WhatsApp Message",
      type: "string",
      group: "contact"
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      group: "contact",
      validation: (rule) => rule.email()
    }),
    defineField({
      name: "appointmentEmail",
      title: "Appointment Email",
      type: "string",
      group: "contact",
      validation: (rule) => rule.email()
    }),
    defineField({
      name: "addressLines",
      title: "Full Address Lines",
      type: "array",
      of: [{ type: "string" }],
      group: "address",
      validation: (rule) => rule.min(1)
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
      group: "address",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "state",
      title: "State",
      type: "string",
      group: "address",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "country",
      title: "Country",
      type: "string",
      group: "address",
      initialValue: "India"
    }),
    defineField({
      name: "pinCode",
      title: "Pin Code",
      type: "string",
      group: "address"
    }),
    defineField({
      name: "googleMapUrl",
      title: "Google Map URL",
      type: "url",
      group: "address"
    }),
    defineField({
      name: "mapEmbedUrl",
      title: "Map Embed URL",
      type: "url",
      group: "address"
    }),
    defineField({
      name: "googleReviewsUrl",
      title: "Google Reviews URL",
      type: "url",
      group: "address"
    }),
    defineField({
      name: "facebook",
      title: "Facebook",
      type: "url",
      group: "social"
    }),
    defineField({
      name: "instagram",
      title: "Instagram",
      type: "url",
      group: "social"
    }),
    defineField({
      name: "youtube",
      title: "YouTube",
      type: "url",
      group: "social"
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn",
      type: "url",
      group: "social"
    }),
    defineField({
      name: "openingTime",
      title: "Opening Time",
      type: "string",
      group: "hours"
    }),
    defineField({
      name: "closingTime",
      title: "Closing Time",
      type: "string",
      group: "hours"
    }),
    defineField({
      name: "weeklySchedule",
      title: "Weekly Schedule",
      type: "array",
      of: [defineArrayMember({ type: "weeklyScheduleItem" })],
      group: "hours"
    }),
    defineField({
      name: "defaultSeo",
      title: "SEO Defaults",
      type: "seo",
      group: "seo"
    })
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" })
  }
});
