import { defineType } from "sanity";

const iconOptions = [
  { title: "Eye", value: "eye" },
  { title: "Technology", value: "technology" },
  { title: "Glasses", value: "glasses" },
  { title: "Lens", value: "lens" },
  { title: "Shield", value: "shield" },
  { title: "Heart", value: "heart" },
  { title: "Monitor", value: "monitor" },
  { title: "Retina", value: "retina" },
  { title: "Cross / Medical", value: "cross" },
  { title: "Blue Shield", value: "blueShield" },
  { title: "Frame", value: "frame" },
  { title: "Sunglasses", value: "sunglasses" },
  { title: "Blurred Vision", value: "blurred" },
  { title: "Monitor Eye", value: "monitorEye" },
  { title: "Reading", value: "reading" },
  { title: "Moon / Night", value: "moon" },
  { title: "Drop / Dry Eye", value: "drop" },
  { title: "Medical Shield", value: "medicalShield" },
  { title: "Alert", value: "alert" },
  { title: "Location", value: "location" },
  { title: "Phone", value: "phone" },
  { title: "WhatsApp", value: "whatsapp" },
  { title: "Clock", value: "clock" },
  { title: "Star", value: "star" }
];

export const iconPicker = defineType({
  name: "iconPicker",
  title: "Icon",
  type: "string",
  options: {
    list: iconOptions,
    layout: "dropdown"
  },
  validation: (rule) => rule.required()
});

export { iconOptions };
