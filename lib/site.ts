export const siteConfig = {
  name: "Blue Phoenix Eye Care & Opticals",
  url: "https://bluephoenixeyecare.com",
  description:
    "Premium Eye Care Clinic in Kulasekharam for eye checkup, eye examination, vision testing, contact lenses, retina screening and premium eyewear.",
  contactHref: "#contact",
  phoneDisplay: "9445887612",
  whatsappDisplay: "9445887612",
  hoursDisplay: "Monday to Saturday: 9 am–8:30 pm; Sunday: Closed",
  hoursSchedule: [
    { day: "Saturday", time: "9 am–8:30 pm" },
    { day: "Sunday", time: "Closed" },
    { day: "Monday", time: "9 am–8:30 pm" },
    { day: "Tuesday", time: "9 am–8:30 pm" },
    { day: "Wednesday", time: "9 am–8:30 pm" },
    { day: "Thursday", time: "9 am–8:30 pm" },
    { day: "Friday", time: "9 am–8:30 pm" }
  ],
  addressLines: [
    "Blessing Complex,",
    "8-130/7,",
    "Nagacode Junction,",
    "Opposite Sugumar Hospital,",
    "Kulasekharam,",
    "Tamil Nadu - 629161"
  ],
  callHref: "tel:9445887612",
  whatsappHref:
    "https://wa.me/919445887612?text=Hello%2C%20I%20would%20like%20to%20ask%20about%20eye%20care%20services.",
  directionsHref: "https://maps.app.goo.gl/7V8FaHBFbkCMz1vx8",
  googleReviewsHref:
    "https://www.google.com/search?q=Blue%20Phoenix%20Eye%20Care%20%26%20Opticals%20Kulasekharam%20reviews",
  mapEmbedSrc:
    "https://www.google.com/maps?q=8.3619376,77.2934769&z=17&output=embed"
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" }
];

export const sectionIds = {
  about: "about",
  services: "services",
  reviews: "reviews",
  contact: "contact"
} as const;
