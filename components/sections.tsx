import Image from "next/image";
import { AnimatedStat } from "@/components/animated-stat";
import { ButtonLink } from "@/components/button-link";
import { GalleryShowcase } from "@/components/gallery-showcase";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { TestimonialsList } from "@/components/testimonials-list";
import { sectionIds, siteConfig } from "@/lib/site";

const heroServiceBadges = [
  "Comprehensive Eye Checkups",
  "Contact Lens Solutions",
  "Computer Vision Testing",
  "Retina Screening",
  "Blue Cut Lenses",
  "Anti-Glare Glasses"
];

const services = [
  {
    icon: "eye",
    title: "Comprehensive Eye Checkup",
    badge: "Most Popular",
    image: "/images/services/Comprehensive Eye Checkup.jpg",
    imageAlt: "Modern eye testing equipment for comprehensive eye checkup in Kulasekharam",
    description:
      "Detailed eye examinations to assess vision clarity, detect eye conditions early and maintain long-term eye health.",
    benefits: ["Vision Assessment", "Prescription Updates", "Early Disease Detection"],
    cta: "Ask on WhatsApp",
    seoLine: "Ideal for Eye Checkup in Kulasekharam, Eye Examination and Vision Testing."
  },
  {
    icon: "monitor",
    title: "Computer Vision Testing",
    image: "/images/services/Computer Vision Testing.jpg",
    imageAlt: "Digital eye strain and computer vision testing at Blue Phoenix Eye Care and Opticals",
    description:
      "Specialized eye testing for individuals experiencing digital eye strain caused by prolonged screen usage.",
    benefits: ["Screen Fatigue Relief", "Better Focus", "Reduced Eye Strain"],
    cta: "Ask on WhatsApp",
    seoLine: "Helpful for Computer Vision Testing, Digital Eye Strain and Eye Specialist guidance."
  },
  {
    icon: "lens",
    title: "Contact Lens Consultation",
    badge: "High Demand",
    image: "/images/services/Contact Lens Consultation.jpg",
    imageAlt: "Professional contact lens consultation and vision care guidance",
    description:
      "Professional guidance for selecting, fitting and maintaining contact lenses comfortably and safely.",
    benefits: ["Expert Lens Selection", "Proper Fitting", "Safe Lens Usage"],
    cta: "Ask on WhatsApp",
    seoLine: "Designed for Contact Lenses, Contact Lens Clinic support and complete Vision Care."
  },
  {
    icon: "retina",
    title: "Retina Screening",
    badge: "Preventive Care",
    image: "/images/services/Retina Screening.jpg",
    imageAlt: "Retina screening and eye diagnostic visual at Blue Phoenix Eye Care and Opticals",
    description:
      "Comprehensive retina evaluation to identify vision-threatening conditions before symptoms become serious.",
    benefits: ["Early Detection", "Better Eye Health", "Preventive Care"],
    cta: "Ask on WhatsApp",
    seoLine: "Supports Retina Screening, Eye Health Check and Retina Evaluation needs."
  },
  {
    icon: "cross",
    title: "Diabetic Eye Evaluation",
    image: "/images/services/Diabetic Eye Evaluation.jpg",
    imageAlt: "Diabetic eye evaluation with modern eye testing diagnostics",
    description:
      "Regular eye screening for diabetic patients to monitor eye health and reduce the risk of vision complications.",
    benefits: ["Early Diagnosis", "Better Monitoring", "Long-Term Protection"],
    cta: "Ask on WhatsApp",
    seoLine: "Focused on Diabetic Eye Evaluation, Diabetic Retina Check and Eye Testing."
  },
  {
    icon: "blueShield",
    title: "Blue Cut Lenses",
    image: "/images/services/Blue Cut Lenses.jpg",
    imageAlt: "Blue cut lens and premium optical collection in Kulasekharam",
    description:
      "Advanced lenses designed to reduce blue light exposure from digital devices and improve visual comfort.",
    benefits: ["Reduced Digital Strain", "Improved Comfort", "Better Daily Vision"],
    cta: "Ask on WhatsApp",
    seoLine: "A smart choice for Blue Cut Lenses, Blue Light Protection and Computer Glasses."
  },
  {
    icon: "glasses",
    title: "Anti-Glare Glasses",
    image: "/images/services/Anti-Glare Glasses.jpg",
    imageAlt: "Anti-glare glasses and lens solutions at Blue Phoenix Optical Store",
    description:
      "High-quality anti-glare lenses that improve visual clarity and reduce reflections during daily activities.",
    benefits: ["Sharper Vision", "Reduced Glare", "Better Driving Comfort"],
    cta: "Ask on WhatsApp",
    seoLine: "Useful for Anti Glare Glasses, Optical Solutions and Vision Correction."
  },
  {
    icon: "frame",
    title: "Premium Optical Frames",
    image: "/images/services/Premium Optical Frames.jpg",
    imageAlt: "Premium optical frame collection in Kulasekharam",
    description:
      "Explore a stylish collection of quality eyewear frames designed for comfort, durability and everyday confidence.",
    benefits: ["Premium Designs", "Comfortable Fit", "Durable Materials"],
    cta: "Ask on WhatsApp",
    seoLine: "Available through our Optical Store in Kulasekharam for Eyeglasses and Optical Frames."
  },
  {
    icon: "sunglasses",
    title: "Protective Sunglasses",
    image: "/images/services/Protective Sunglasses.jpg",
    imageAlt: "Protective sunglasses and premium eyewear collection at Blue Phoenix Opticals",
    description:
      "UV-protective sunglasses designed to safeguard your eyes while enhancing visual comfort outdoors.",
    benefits: ["UV Protection", "Eye Safety", "Stylish Designs"],
    cta: "Ask on WhatsApp",
    seoLine: "Explore Sunglasses, UV Protection Glasses and Premium Eyewear options."
  }
] as const;
const symptomProblems = [
  {
    icon: "blurred",
    title: "Blurred Vision",
    description:
      "Difficulty seeing clearly while reading, driving or viewing distant objects may indicate vision correction needs or underlying eye conditions.",
    label: "Common Causes",
    causes: ["Refractive Errors", "Eye Fatigue", "Cataract Development"],
    cta: "Ask on WhatsApp"
  },
  {
    icon: "monitorEye",
    title: "Digital Eye Strain",
    description:
      "Extended screen exposure can cause tired eyes, headaches, blurred vision and reduced productivity.",
    label: "Common Symptoms",
    causes: ["Eye Fatigue", "Dry Eyes", "Headaches", "Difficulty Focusing"],
    cta: "Ask on WhatsApp"
  },
  {
    icon: "reading",
    title: "Difficulty Reading Small Text",
    description:
      "Holding books farther away or struggling to read fine print may indicate age-related vision changes.",
    label: "Common Signs",
    causes: ["Eye Fatigue", "Reading Difficulty", "Frequent Prescription Changes"],
    cta: "Ask on WhatsApp"
  },
  {
    icon: "moon",
    title: "Night Vision Problems",
    description:
      "Difficulty driving at night or seeing clearly in low-light environments should not be ignored.",
    label: "Common Signs",
    causes: ["Glare Sensitivity", "Halos Around Lights", "Reduced Visual Clarity"],
    cta: "Ask on WhatsApp"
  },
  {
    icon: "drop",
    title: "Dry & Irritated Eyes",
    description:
      "Persistent dryness, burning sensation or irritation may affect comfort and daily activities.",
    label: "Common Signs",
    causes: ["Burning Eyes", "Redness", "Discomfort"],
    cta: "Ask on WhatsApp"
  },
  {
    icon: "medicalShield",
    title: "Diabetes Related Eye Concerns",
    description:
      "People living with diabetes should undergo regular eye evaluations to monitor retinal health.",
    label: "Common Risks",
    causes: ["Diabetic Retinopathy", "Vision Changes", "Retina Damage"],
    cta: "Ask on WhatsApp"
  }
] as const;

const warningSigns = [
  "Frequent headaches",
  "Blurred vision",
  "Eye strain from screens",
  "Difficulty reading",
  "Dry or irritated eyes",
  "Sudden vision changes",
  "Diabetes-related vision concerns"
];

const symptomCheckerItems = [
  "Blurred Vision",
  "Headaches",
  "Eye Strain",
  "Dry Eyes",
  "Reading Difficulty",
  "Night Vision Problems",
  "Diabetes Related Concerns"
];

const symptomWhatsappHref =
  "https://wa.me/919445887612?text=Hello%2C%20I%20would%20like%20guidance%20regarding%20my%20eye%20symptoms.";

const topPatientReviews = [
  {
    name: "Shajin Mariadhas",
    text:
      "I had a very good experience at Blue Phoenix Eye Care. The eye consultation was clear, professional, and very reassuring. The treatment was simple, affordable, and everything was explained properly."
  },
  {
    name: "Catherine",
    text:
      "Recently, I visited Blue Phoenix Eye Clinic to update my spectacles and for a regular eye check-up. I had a very good experience with the service and care provided."
  },
  {
    name: "Nathan El Hezekiah",
    text:
      "I went to Blue Phoenix Eye Care for an eye check-up and to get glasses for my long sight problem. They checked my eyes properly and explained everything in a simple way."
  },
  {
    name: "Jebisha Jebisha",
    text:
      "Extremely professional experience. They took the time to listen to my vision concerns rather than rushing. The diagnostic equipment was state-of-the-art, and I left with a clear understanding of my eye health."
  },
  {
    name: "Sujith",
    text:
      "I had a very good experience at Blue Phoenix Eye Care. The doctor was friendly, experienced, and explained everything clearly during the eye check-up. They have a great collection of frames and lenses with good quality."
  },
  {
    name: "Jaya Suriya",
    text:
      "Visited Blue Phoenix Eye Care for a routine checkup. The doctor was extremely patient, explained my prescription clearly, and the staff helped me pick frames that fit my budget. No long wait times. Highly recommended."
  }
] as const;

const morePatientReviews = [
  {
    name: "Teno Yesuraj",
    text:
      "Excellent optical store with outstanding customer service. The staff were professional, friendly, and helped me choose the perfect frame. The eye test was detailed and accurate. Highly recommended."
  },
  {
    name: "Aghilesh S",
    text:
      "Visited Blue Phoenix Eye Care & Opticals and had a great experience. The clinic is clean, professional, and patient-friendly. The eye care service and attention to detail are really appreciable."
  },
  {
    name: "Cgodwin Christalsingh",
    text: "Best place to get your glasses and a thorough eye check-up. Polite staff and a welcoming atmosphere."
  },
  {
    name: "Aswin Aswin JV",
    text: "Good quality patient care and reasonable prices for spectacles."
  },
  {
    name: "Abinesh Abi",
    text: "Professional eye check-up and a good optical collection."
  },
  {
    name: "NEW FUN TEAM",
    text: "Best eye care in Kulasekharam with a large collection of spectacles. The doctor is very kind."
  },
  {
    name: "Marbin M",
    text: "Best eye care in Kulasekharam."
  },
  {
    name: "Sarmitha",
    text: "Good experience and very cost-friendly."
  },
  {
    name: "Amr",
    text:
      "Excellent service and quality eye care. The staff were friendly and the consultation was very beneficial."
  }
] as const;

const faqs = [
  {
    question: "How often should I have an eye checkup?",
    answer:
      "Regular eye examinations help detect vision changes and eye conditions early. The recommended frequency may vary depending on age, health and existing eye conditions."
  },
  {
    question: "Do you provide contact lens consultations?",
    answer:
      "Yes. We offer professional guidance for selecting, fitting and maintaining contact lenses safely and comfortably."
  },
  {
    question: "What is computer vision testing?",
    answer:
      "Computer vision testing evaluates eye strain and vision-related issues caused by prolonged screen usage."
  },
  {
    question: "Do you provide blue cut and anti-glare lenses?",
    answer:
      "Yes. We offer blue cut lenses, anti-glare solutions and premium optical products to improve visual comfort."
  },
  {
    question: "Do diabetic patients need regular eye evaluations?",
    answer:
      "Regular eye evaluations are important for diabetic patients to monitor retinal health and identify vision-related complications early."
  },
  {
    question: "Can I contact the clinic through WhatsApp?",
    answer: "Yes. Patients can contact us through WhatsApp for eye care questions, service details and general enquiries."
  }
];

const footerServices = [
  "Eye Checkup",
  "Vision Testing",
  "Contact Lenses",
  "Retina Screening",
  "Diabetic Eye Evaluation",
  "Premium Eyewear"
];

const aboutStats = [
  { staticValue: "Trusted", label: "Local Patients" },
  { value: 5, suffix: "★", label: "Average Rating", decimals: 1 },
  { value: 100, suffix: "%", label: "Patient Focused Care" },
  { staticValue: "All Ages", label: "Vision Care Solutions" }
];

const aboutHighlights = [
  "Comprehensive eye examinations",
  "Modern diagnostic testing",
  "Premium optical solutions",
  "Family-focused care"
];

const whyFeatures = [
  {
    icon: "eye",
    title: "Comprehensive Eye Checkups",
    description:
      "Detailed eye examinations to identify vision issues early and maintain long-term eye health."
  },
  {
    icon: "technology",
    title: "Modern Diagnostic Testing",
    description:
      "Advanced testing methods help ensure accurate diagnosis and personalized treatment recommendations."
  },
  {
    icon: "glasses",
    title: "Premium Optical Collection",
    description:
      "Explore a carefully selected range of stylish frames, lenses, anti-glare solutions and blue-cut glasses."
  },
  {
    icon: "lens",
    title: "Contact Lens Expertise",
    description:
      "Professional guidance for selecting and maintaining contact lenses safely and comfortably."
  },
  {
    icon: "shield",
    title: "Preventive Eye Care",
    description:
      "Routine screenings help detect eye conditions before they become serious problems."
  },
  {
    icon: "heart",
    title: "Personalized Patient Care",
    description:
      "Every patient receives individual attention, clear explanations and solutions tailored to their vision needs."
  }
] as const;

const promiseItems = [
  "Personalized Attention",
  "Accurate Eye Testing",
  "Affordable Solutions",
  "Modern Equipment",
  "Comfortable Environment",
  "Trusted Vision Care"
];

export function FeatureIcon({ name }: { name: string }) {
  const commonProps = {
    width: 30,
    height: 30,
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true
  };

  if (name === "technology") {
    return (
      <svg {...commonProps}>
        <rect x="5" y="6" width="20" height="15" rx="4" stroke="currentColor" strokeWidth="2.4" />
        <path d="M11 25H19M15 21V25" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M10 13H20M10 17H16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "glasses") {
    return (
      <svg {...commonProps}>
        <path d="M7 16H23" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="9" cy="16" r="5" stroke="currentColor" strokeWidth="2.4" />
        <circle cx="21" cy="16" r="5" stroke="currentColor" strokeWidth="2.4" />
      </svg>
    );
  }

  if (name === "lens") {
    return (
      <svg {...commonProps}>
        <circle cx="15" cy="15" r="9" stroke="currentColor" strokeWidth="2.4" />
        <path d="M10 15C11 12 13 10 16 9M20 15C19 18 17 20 14 21" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg {...commonProps}>
        <path d="M15 4L24 8V14C24 20 20.5 24 15 26C9.5 24 6 20 6 14V8L15 4Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M11 15L14 18L20 12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "heart") {
    return (
      <svg {...commonProps}>
        <path d="M15 25C9 20.5 5 17 5 11.5C5 8.4 7.4 6 10.4 6C12.2 6 13.8 6.9 15 8.4C16.2 6.9 17.8 6 19.6 6C22.6 6 25 8.4 25 11.5C25 17 21 20.5 15 25Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M4 15C6.5 10.5 10.2 8 15 8C19.8 8 23.5 10.5 26 15C23.5 19.5 19.8 22 15 22C10.2 22 6.5 19.5 4 15Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      <circle cx="15" cy="15" r="4" stroke="currentColor" strokeWidth="2.4" />
    </svg>
  );
}

export function ServiceIcon({ name }: { name: string }) {
  const commonProps = {
    width: 34,
    height: 34,
    viewBox: "0 0 34 34",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true
  };

  if (name === "monitor") {
    return (
      <svg {...commonProps}>
        <rect x="5" y="6" width="24" height="18" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M12 29H22M17 24V29" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M11 14H23M11 18H18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "lens") {
    return (
      <svg {...commonProps}>
        <circle cx="17" cy="17" r="10.5" stroke="currentColor" strokeWidth="2.5" />
        <path d="M11 17C12.2 13.6 14.5 11.4 18.2 10.5M23 17C21.8 20.4 19.5 22.6 15.8 23.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "retina") {
    return (
      <svg {...commonProps}>
        <path d="M4 17C7.2 11.4 11.5 8.6 17 8.6C22.5 8.6 26.8 11.4 30 17C26.8 22.6 22.5 25.4 17 25.4C11.5 25.4 7.2 22.6 4 17Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="17" cy="17" r="5.2" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="17" cy="17" r="1.8" fill="currentColor" />
      </svg>
    );
  }

  if (name === "cross") {
    return (
      <svg {...commonProps}>
        <rect x="6" y="6" width="22" height="22" rx="7" stroke="currentColor" strokeWidth="2.5" />
        <path d="M17 11V23M11 17H23" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "blueShield") {
    return (
      <svg {...commonProps}>
        <path d="M17 4L27 8.5V15.5C27 22.5 23.1 27.2 17 30C10.9 27.2 7 22.5 7 15.5V8.5L17 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M13 17H21M17 13V21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "glasses") {
    return (
      <svg {...commonProps}>
        <path d="M8 18H26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="10.5" cy="18" r="5.8" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="23.5" cy="18" r="5.8" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    );
  }

  if (name === "frame") {
    return (
      <svg {...commonProps}>
        <rect x="7" y="8" width="20" height="18" rx="5" stroke="currentColor" strokeWidth="2.5" />
        <path d="M11 14H23M11 19H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M7 13L4 10M27 13L30 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "sunglasses") {
    return (
      <svg {...commonProps}>
        <path d="M7 16H27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M5.5 16C6.5 13.2 8.5 12 11.5 12H14.5C15.6 12 16.2 12.8 15.9 13.9L14.7 18.2C14 20.7 12.1 22 9.5 22C6.6 22 4.6 19.1 5.5 16Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M28.5 16C27.5 13.2 25.5 12 22.5 12H19.5C18.4 12 17.8 12.8 18.1 13.9L19.3 18.2C20 20.7 21.9 22 24.5 22C27.4 22 29.4 19.1 28.5 16Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M4 17C7.2 11.4 11.5 8.6 17 8.6C22.5 8.6 26.8 11.4 30 17C26.8 22.6 22.5 25.4 17 25.4C11.5 25.4 7.2 22.6 4 17Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="17" cy="17" r="4.8" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

export function SymptomIcon({ name }: { name: string }) {
  const commonProps = {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true
  };

  if (name === "monitorEye") {
    return (
      <svg {...commonProps}>
        <rect x="5" y="6" width="22" height="16" rx="4" stroke="currentColor" strokeWidth="2.4" />
        <path d="M11 27H21M16 22V27" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M10 14C12 11.5 14 10.3 16 10.3C18 10.3 20 11.5 22 14C20 16.5 18 17.7 16 17.7C14 17.7 12 16.5 10 14Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
        <circle cx="16" cy="14" r="2.2" fill="currentColor" />
      </svg>
    );
  }

  if (name === "reading") {
    return (
      <svg {...commonProps}>
        <path d="M6 8.5C9.4 7 12.8 7.2 16 9.4C19.2 7.2 22.6 7 26 8.5V24.5C22.6 23 19.2 23.2 16 25.4C12.8 23.2 9.4 23 6 24.5V8.5Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M16 9.5V25M10 13H13M19 13H22M10 17H13M19 17H22" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "moon") {
    return (
      <svg {...commonProps}>
        <path d="M21.5 25.2C14.5 25.2 8.8 19.5 8.8 12.5C8.8 10.2 9.4 8 10.6 6.1C7.1 8 4.8 11.7 4.8 16C4.8 22.2 9.8 27.2 16 27.2C20.3 27.2 24 24.9 25.9 21.4C24 22.6 21.9 25.2 21.5 25.2Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M20 9.5C21.7 10.2 23 11.3 24 13C23 14.7 21.7 15.8 20 16.5C18.3 15.8 17 14.7 16 13C17 11.3 18.3 10.2 20 9.5Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "drop") {
    return (
      <svg {...commonProps}>
        <path d="M16 4C21 10.1 24 14.4 24 19C24 23.4 20.4 27 16 27C11.6 27 8 23.4 8 19C8 14.4 11 10.1 16 4Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M13 21C13.7 22.4 14.8 23.1 16.5 23.1" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "medicalShield") {
    return (
      <svg {...commonProps}>
        <path d="M16 4L26 8.4V15.5C26 22.4 22.1 27 16 29C9.9 27 6 22.4 6 15.5V8.4L16 4Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M16 11V21M11 16H21" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "alert") {
    return (
      <svg {...commonProps}>
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="2.4" />
        <path d="M16 9.5V16.5M16 21.5H16.1" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M4 16C7.1 10.8 11.1 8.2 16 8.2C20.9 8.2 24.9 10.8 28 16C24.9 21.2 20.9 23.8 16 23.8C11.1 23.8 7.1 21.2 4 16Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      <circle cx="16" cy="16" r="4.8" stroke="currentColor" strokeWidth="2.4" />
      <path d="M10 10L22 22" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function ContactIcon({ name }: { name: "location" | "phone" | "whatsapp" | "clock" | "star" }) {
  const commonProps = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true
  };

  if (name === "phone") {
    return (
      <svg {...commonProps}>
        <path
          d="M7.2 4.8L9.6 7.2C10.2 7.8 10.3 8.7 9.8 9.4L8.8 10.8C10 13.1 11.9 15 14.2 16.2L15.6 15.2C16.3 14.7 17.2 14.8 17.8 15.4L20.2 17.8C20.7 18.3 20.8 19.1 20.4 19.7C19.8 20.7 18.6 21.2 17.4 20.9C10.5 19.5 4.5 13.5 3.1 6.6C2.8 5.4 3.3 4.2 4.3 3.6C4.9 3.2 5.7 3.3 6.2 3.8L7.2 4.8Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg {...commonProps}>
        <path
          d="M4.8 19.1L5.8 15.8C5.2 14.7 4.9 13.5 4.9 12.2C4.9 8 8.2 4.8 12.4 4.8C16.6 4.8 19.9 8 19.9 12.2C19.9 16.4 16.6 19.6 12.4 19.6C11.1 19.6 9.9 19.3 8.8 18.7L4.8 19.1Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M8.7 10.8H15.3M8.7 13.8H13"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "clock") {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M12 8V12.5L15.2 14.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    );
  }

  if (name === "star") {
    return (
      <svg {...commonProps}>
        <path
          d="M12 4.3L14.2 8.8L19.1 9.5L15.6 13L16.4 17.9L12 15.6L7.6 17.9L8.4 13L4.9 9.5L9.8 8.8L12 4.3Z"
          fill="currentColor"
          opacity="0.28"
        />
        <path
          d="M12 4.3L14.2 8.8L19.1 9.5L15.6 13L16.4 17.9L12 15.6L7.6 17.9L8.4 13L4.9 9.5L9.8 8.8L12 4.3Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path
        d="M19 10.5C19 15.4 12 20.5 12 20.5C12 20.5 5 15.4 5 10.5C5 6.6 8.1 3.5 12 3.5C15.9 3.5 19 6.6 19 10.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <circle cx="12" cy="10.5" r="2.4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__blur hero__blur--one" aria-hidden="true" />
      <div className="hero__blur hero__blur--two" aria-hidden="true" />
      <div className="container hero__grid">
        <Reveal className="hero__copy">
          <span className="eyebrow">Eye Clinic in Kulasekharam</span>
          <h1 id="hero-title">
            <span>Eye Care That Helps</span>
            <span>You See Life Clearly</span>
          </h1>
          <p>
            Comprehensive eye checkups, computer vision testing, contact lenses, anti-glare glasses,
            retina screening, and premium optical solutions — all under one roof.
          </p>
          <p className="hero__locality">
            Serving families across Kulasekharam with personalized and affordable Vision Care from
            an Eye Specialist, Eye Testing team, and Optical Store you can trust.
          </p>
          <div className="hero__actions">
            <ButtonLink
              href={siteConfig.callHref}
              size="lg"
              className="button--dominant"
              aria-label="Call Blue Phoenix Eye Care and Opticals"
            >
              Call Now <span className="button__arrow" aria-hidden="true">→</span>
            </ButtonLink>
            <ButtonLink
              href={siteConfig.whatsappHref}
              variant="secondary"
              size="lg"
              aria-label="Send a WhatsApp inquiry to Blue Phoenix Eye Care and Opticals"
            >
              WhatsApp Us <span className="button__arrow" aria-hidden="true">→</span>
            </ButtonLink>
          </div>

          <div className="hero__conversion-note" aria-label="Quick contact reassurance">
            <span>✓ Quick call support</span>
            <span>✓ WhatsApp guidance before your visit</span>
            <span>✓ Convenient Kulasekharam location</span>
          </div>
        </Reveal>

        <Reveal className="hero__visual" delay={0.12}>
          <div className="hero__shape hero__shape--ring" aria-hidden="true" />
          <div className="hero__shape hero__shape--dot" aria-hidden="true" />
          <div className="hero__image-wrap">
            <Image
              src="/images/hero.png"
              width={500}
              height={500}
              priority
              sizes="(max-width: 760px) 92vw, (max-width: 1200px) 44vw, 520px"
              alt="Free eye test and professional eye checkup at Blue Phoenix Eye Care and Opticals"
              className="hero__image"
            />
          </div>
        </Reveal>
      </div>

      <Reveal className="container hero__service-strip" delay={0.18}>
        <div className="hero__marquee" aria-label="Available eye care services">
          {[...heroServiceBadges, ...heroServiceBadges].map((item, index) => (
            <span key={`${item}-${index}`}>
              <span aria-hidden="true">✓</span>
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function AboutSection() {
  return (
    <SectionShell
      id={sectionIds.about}
      eyebrow="About Blue Phoenix Eye Care & Opticals"
      title="Trusted Vision Care for Every Stage of Life"
      intro="At Blue Phoenix Eye Care & Opticals, we believe clear vision is essential for a better quality of life. Our clinic combines professional eye care, modern diagnostic technology, and personalized attention to help patients of all ages maintain healthy eyesight."
      tone="white"
    >
      <div className="about-grid">
        <Reveal className="about-content">
          <div className="about-content__panel">
            <span className="about-content__badge">Modern Eye Care in Kulasekharam</span>
            <h3>Clear guidance, accurate testing and eyewear support in one place.</h3>
            <p>
              We provide comprehensive eye examinations, computer vision testing, contact lens
              consultations, retina screening, diabetic eye evaluations, and a wide range of premium
              optical solutions.
            </p>
            <p>
              Whether you need a routine eye checkup, new glasses, contact lenses, or specialized
              Vision Care, our team is committed to delivering accurate diagnosis, expert guidance,
              and affordable treatment options.
            </p>

            <div className="about-highlight-grid" aria-label="Blue Phoenix care highlights">
              {aboutHighlights.map((item) => (
                <span key={item}>
                  <span aria-hidden="true">✓</span>
                  {item}
                </span>
              ))}
            </div>

            <div className="about-actions">
              <ButtonLink href={siteConfig.callHref} aria-label="Call Blue Phoenix Eye Care and Opticals">
                Call Now <span className="button__arrow" aria-hidden="true">→</span>
              </ButtonLink>
              <ButtonLink
                href={siteConfig.whatsappHref}
                variant="secondary"
                aria-label="WhatsApp Blue Phoenix Eye Care and Opticals"
              >
                WhatsApp Us <span className="button__arrow" aria-hidden="true">→</span>
              </ButtonLink>
            </div>
          </div>
        </Reveal>

        <Reveal className="about-proof-card" delay={0.1}>
          <div className="about-proof-card__header">
            <span className="eyebrow">Trusted Locally</span>
            <h3>Built for everyday vision needs.</h3>
            <p>
              Located conveniently in Kulasekharam, our clinic supports families, students,
              professionals and senior citizens with dependable vision care.
            </p>
          </div>

          <div className="stats-grid about-stats-grid">
            {aboutStats.map((stat) => (
              <AnimatedStat key={stat.label} {...stat} />
            ))}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

export function ServicesSection() {
  return (
    <SectionShell
      id={sectionIds.services}
      eyebrow="Our Eye Care Services"
      title="Complete Vision Care Under One Roof"
      intro="From routine eye examinations to advanced diagnostic testing and premium optical solutions, Blue Phoenix Eye Care & Opticals provides comprehensive eye care services for patients of all ages in Kulasekharam."
      tone="gray"
      align="center"
    >
      <div className="services-grid">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.04}>
            <article className="service-card">
              {"badge" in service ? <span className="service-card__badge">{service.badge}</span> : null}
              <div className="service-card__image">
                <Image
                  src={service.image}
                  width={520}
                  height={420}
                  loading="lazy"
                  sizes="(max-width: 760px) 92vw, (max-width: 1024px) 44vw, 360px"
                  alt={service.imageAlt}
                />
              </div>
              <div className="service-card__top">
                <div className="service-card__icon">
                  <ServiceIcon name={service.icon} />
                </div>
                <h3>{service.title}</h3>
              </div>

              <div className="service-card__content">
                <p>{service.description}</p>
              </div>

              <ul className="service-card__benefits" aria-label={`${service.title} benefits`}>
                {service.benefits.map((benefit) => (
                  <li key={benefit}>
                    <span aria-hidden="true">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <p className="service-card__seo">{service.seoLine}</p>

              <ButtonLink
                href={siteConfig.whatsappHref}
                variant="ghost"
                aria-label={`${service.cta} at Blue Phoenix Eye Care and Opticals`}
                className="service-card__cta"
              >
                {service.cta} <span className="button__arrow" aria-hidden="true">→</span>
              </ButtonLink>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="services-conversion-banner" delay={0.12}>
        <div>
          <span className="eyebrow">Need Guidance?</span>
          <h3>Not Sure Which Eye Care Service You Need?</h3>
          <p>
            Our team can help identify the right solution through a professional eye examination and
            personalized consultation.
          </p>
        </div>
        <div className="services-conversion-banner__actions">
          <ButtonLink
            href={siteConfig.callHref}
            aria-label="Call Blue Phoenix Eye Care and Opticals"
          >
            Call Now <span className="button__arrow" aria-hidden="true">→</span>
          </ButtonLink>
          <ButtonLink
            href={siteConfig.whatsappHref}
            variant="secondary"
            aria-label="WhatsApp Blue Phoenix Eye Care and Opticals"
          >
            WhatsApp Us <span className="button__arrow" aria-hidden="true">→</span>
          </ButtonLink>
        </div>
      </Reveal>

      <Reveal className="services-seo-block" delay={0.14}>
        <h3>Trusted Eye Care Clinic in Kulasekharam</h3>
        <p>
          Blue Phoenix Eye Care & Opticals is built for patients who want dependable eye care in a
          calm, modern setting. Whether you call for an Eye Checkup, need accurate Eye Testing,
          require ongoing Vision Care, or want advice on Contact Lenses, our clinic helps you
          understand the right next step with clear guidance and patient-focused attention.
        </p>
        <p>
          Families across Kulasekharam visit us for comprehensive eye services including Retina
          Screening, Diabetic Eye Evaluation, premium eyewear selection, and optical solutions from a
          trusted Optical Store. Our goal is to make quality eye care easier to access, easier to
          understand, and easier to act on.
        </p>
      </Reveal>
    </SectionShell>
  );
}

export function WhyChooseUsSection() {
  return (
    <SectionShell
      eyebrow="Why Patients Trust Blue Phoenix"
      title="Quality Eye Care Backed by Expertise & Compassion"
      intro="A modern, patient-first approach for families, students, professionals, senior citizens, contact lens users, and anyone looking for dependable Vision Care."
      tone="gray"
    >
      <div className="why-grid">
        {whyFeatures.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 0.04}>
            <article className="why-card">
              <div className="why-card__icon">
                <FeatureIcon name={feature.icon} />
              </div>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="promise-card" delay={0.12}>
        <div className="promise-card__content">
          <span className="eyebrow">Patient First Promise</span>
          <h3>Our Commitment to Your Vision</h3>
          <p>
            We focus on delivering professional, ethical and patient-centered eye care. Every
            consultation is guided by accuracy, transparency and genuine concern for your long-term
            eye health.
          </p>
        </div>
        <div className="promise-card__checks" aria-label="Blue Phoenix patient care commitments">
          {promiseItems.map((item) => (
            <span key={item}>
              <span aria-hidden="true">✓</span>
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}

export function EyeProblemsSection() {
  return (
    <SectionShell
      eyebrow="Eye Problems We Help Diagnose & Manage"
      title="Experiencing Vision Problems? Don't Ignore the Early Signs."
      intro="Many eye conditions develop gradually and may not show obvious symptoms initially. Early detection through regular eye examinations can help protect your vision and overall eye health."
      tone="white"
    >
      <div className="eye-problems-grid">
        <div className="symptoms-list">
          {symptomProblems.map((problem, index) => (
            <Reveal key={problem.title} delay={index * 0.04}>
              <article className="symptom-card">
                <div className="symptom-card__top">
                  <div className="symptom-card__icon">
                    <SymptomIcon name={problem.icon} />
                  </div>
                  <h3>{problem.title}</h3>
                </div>
                <div className="symptom-card__content">
                  <p>{problem.description}</p>
                  <strong>{problem.label}</strong>
                  <ul aria-label={`${problem.title} ${problem.label.toLowerCase()}`}>
                    {problem.causes.map((cause) => (
                      <li key={cause}>{cause}</li>
                    ))}
                  </ul>
                  <ButtonLink
                    href={siteConfig.whatsappHref}
                    variant="ghost"
                    aria-label={`${problem.cta} at Blue Phoenix Eye Care and Opticals`}
                    className="symptom-card__cta"
                  >
                    {problem.cta} <span className="button__arrow" aria-hidden="true">→</span>
                  </ButtonLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="symptom-visual" delay={0.1}>
          <div className="symptom-visual__image">
            <Image
              src="/images/Eye Problems-image.jpg"
              width={678}
              height={414}
              loading="lazy"
              sizes="(max-width: 1024px) 92vw, 520px"
              alt="Woman experiencing reading difficulty and vision strain while using glasses"
            />
          </div>
          <div className="symptom-visual__note">
            <strong>Symptoms are signals.</strong>
            <p>Professional Eye Examination and Vision Testing can help identify the cause early.</p>
          </div>
        </Reveal>
      </div>

      <Reveal className="warning-banner" delay={0.12}>
        <div className="warning-banner__icon">
          <SymptomIcon name="alert" />
        </div>
        <div>
          <h3>When Should You Call for an Eye Checkup?</h3>
          <p>You should consider an eye examination if you experience:</p>
          <div className="warning-banner__checks">
            {warningSigns.map((item) => (
              <span key={item}>
                <span aria-hidden="true">✓</span>
                {item}
              </span>
            ))}
          </div>
        </div>
        <ButtonLink
          href={siteConfig.callHref}
          aria-label="Call Blue Phoenix Eye Care and Opticals for eye examination guidance"
        >
          Call Now <span className="button__arrow" aria-hidden="true">→</span>
        </ButtonLink>
      </Reveal>

      <Reveal className="symptom-checker" delay={0.14}>
        <div>
          <span className="eyebrow">Interactive Symptom Checker</span>
          <h3>Not Sure What&rsquo;s Causing Your Eye Discomfort?</h3>
          <p>Select symptoms and talk to our team for guidance.</p>
        </div>
        <fieldset className="symptom-options">
          <legend className="sr-only">Select eye symptoms</legend>
          {symptomCheckerItems.map((item) => (
            <label key={item}>
              <input type="checkbox" name="symptoms" value={item} />
              <span>{item}</span>
            </label>
          ))}
        </fieldset>
        <ButtonLink
          href={symptomWhatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open WhatsApp to ask about eye symptoms"
        >
          Talk to Our Team <span className="button__arrow" aria-hidden="true">→</span>
        </ButtonLink>
      </Reveal>

      <Reveal className="eye-problems-seo" delay={0.16}>
        <h3>Trusted Eye Care Clinic in Kulasekharam</h3>
        <p>
          Patients searching for eye checkups, Vision Testing, Retina Screening, Diabetic Eye
          Evaluation, contact lenses and optical solutions in Kulasekharam can rely on Blue Phoenix
          Eye Care & Opticals for professional and personalized eye care services.
        </p>
        <p>
          Whether you need an Eye Checkup in Kulasekharam, an Eye Examination with an Eye
          Specialist, or support from a trusted Optical Store, our team helps you understand your
          symptoms and choose the right next step for better eye health.
        </p>
      </Reveal>
    </SectionShell>
  );
}

export function GallerySection() {
  return (
    <SectionShell
      eyebrow="Clinic Gallery"
      title="Take a Look Inside Blue Phoenix Eye Care & Opticals"
      intro="Explore our clinic environment, eye testing facilities, premium optical collection and patient-focused spaces designed to provide a comfortable eye care experience."
      tone="gray"
    >
      <Reveal>
        <GalleryShowcase />
      </Reveal>
    </SectionShell>
  );
}

export function ReviewsSection() {
  return (
    <SectionShell
      id={sectionIds.reviews}
      eyebrow="Patient Reviews"
      title="Trusted by Patients Across Kulasekharam"
      intro="Read what our patients say about their eye examinations, eyewear quality, customer service, and overall experience at Blue Phoenix Eye Care."
      tone="white"
      align="center"
    >
      <Reveal className="reviews-redesign">
        <TestimonialsList initialReviews={topPatientReviews} moreReviews={morePatientReviews} />
      </Reveal>
    </SectionShell>
  );
}

export function FaqSection() {
  return (
    <SectionShell
      eyebrow="Frequently Asked Questions"
      title="Common Questions About Eye Care & Vision Testing"
      intro="Find answers to some of the most frequently asked questions from our patients."
      tone="gray"
    >
      <Reveal className="faq-list">
        {faqs.map((faq) => (
          <details key={faq.question} className="faq-item">
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </Reveal>
      <Reveal className="faq-conversion-card" delay={0.08}>
        <div>
          <span className="eyebrow">Still Have Questions?</span>
          <h3>Get quick guidance before visiting the clinic.</h3>
        </div>
        <ButtonLink href={siteConfig.whatsappHref} aria-label="Ask Blue Phoenix a question on WhatsApp">
          Ask on WhatsApp <span className="button__arrow" aria-hidden="true">→</span>
        </ButtonLink>
      </Reveal>
    </SectionShell>
  );
}

export function ContactSection() {
  return (
    <>
      <SectionShell
        id={sectionIds.contact}
        eyebrow="Contact Us"
        title="Talk to Blue Phoenix Eye Care & Opticals"
        intro="Need help with eye testing, contact lenses, retina screening or eyewear selection? Call us or send a WhatsApp message for quick guidance from our team."
        tone="white"
      >
        <div className="final-contact-grid">
          <Reveal className="contact-info-card">
            <div className="contact-info-card__header">
              <div>
                <span className="eyebrow">Clinic Details</span>
                <h3>Blue Phoenix Eye Care & Opticals</h3>
                <p className="contact-info-card__intro">
                  Reach us directly for eye checkup guidance, vision testing support and optical
                  collection enquiries in Kulasekharam.
                </p>
              </div>
              <div className="contact-primary-actions">
                <ButtonLink href={siteConfig.callHref} size="lg" aria-label="Call Blue Phoenix Eye Care and Opticals">
                  Call Now <span className="button__arrow" aria-hidden="true">→</span>
                </ButtonLink>
                <ButtonLink
                  href={siteConfig.whatsappHref}
                  size="lg"
                  variant="secondary"
                  aria-label="WhatsApp Blue Phoenix Eye Care and Opticals"
                >
                  WhatsApp Us <span className="button__arrow" aria-hidden="true">→</span>
                </ButtonLink>
              </div>
            </div>

            <div className="contact-detail-list">
              <article className="contact-detail-card contact-detail-card--address">
                <span aria-hidden="true"><ContactIcon name="location" /></span>
                <div>
                  <strong>Clinic Address</strong>
                  <p>{siteConfig.addressLines.map((line) => <span key={line}>{line}<br /></span>)}</p>
                </div>
              </article>
              <article className="contact-detail-card">
                <span aria-hidden="true"><ContactIcon name="phone" /></span>
                <div>
                  <strong>Phone Number</strong>
                  <p>
                    <a href={siteConfig.callHref} aria-label="Call Blue Phoenix Eye Care and Opticals">
                      {siteConfig.phoneDisplay}
                    </a>
                  </p>
                </div>
              </article>
              <article className="contact-detail-card">
                <span aria-hidden="true"><ContactIcon name="whatsapp" /></span>
                <div>
                  <strong>WhatsApp</strong>
                  <p>{siteConfig.whatsappDisplay}</p>
                </div>
              </article>
              <article className="contact-detail-card contact-detail-card--hours">
                <span aria-hidden="true"><ContactIcon name="clock" /></span>
                <div>
                  <strong>Clinic Hours</strong>
                  <dl className="contact-hours-list">
                    {siteConfig.hoursSchedule.map((item) => (
                      <div key={item.day}>
                        <dt>{item.day}</dt>
                        <dd>{item.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
              <a
                className="contact-detail-card contact-detail-card--rating"
                href={siteConfig.googleReviewsHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Blue Phoenix Eye Care and Opticals Google Business profile"
              >
                <span aria-hidden="true"><ContactIcon name="star" /></span>
                <div>
                  <strong>Google Rating</strong>
                  <p>5.0 <span className="rating-star">★</span> · Local patient feedback</p>
                </div>
              </a>
            </div>

            <div className="contact-assurance-list" aria-label="Contact support highlights">
              <span>✓ Quick response for eye care enquiries</span>
              <span>✓ Guidance for glasses, lenses and testing</span>
              <span>✓ Easy-to-find Kulasekharam location</span>
            </div>

            <div className="contact-mini-services" aria-label="Common contact reasons">
              {["Eye Checkup", "Vision Testing", "Contact Lenses", "Premium Frames", "Retina Screening", "Blue Cut Lenses"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="map-section" delay={0.1}>
          <span className="eyebrow">Find Us Easily</span>
          <h3>Conveniently Located in Kulasekharam</h3>
          <div className="map-location-strip">
            <strong><ContactIcon name="location" /> Blue Phoenix Eye Care & Opticals</strong>
            <span>Google Maps verified location</span>
            <span>Kulasekharam</span>
          </div>
          <iframe
            title="Blue Phoenix Eye Care and Opticals location map"
            src={siteConfig.mapEmbedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>

        <Reveal className="contact-seo-block" delay={0.18}>
          <h3>Eye Care Clinic in Kulasekharam</h3>
          <p>
            Blue Phoenix Eye Care & Opticals helps patients with Eye Checkup, Vision Testing, Eye
            Examination, Contact Lenses, Retina Screening, Diabetic Eye Evaluation, Premium Eyewear
            and Optical Store support in Kulasekharam.
          </p>
        </Reveal>
      </SectionShell>

      <footer className="site-footer">
        <div className="container site-footer__grid">
          <div>
            <a className="brand brand--image brand--footer" href="#home" aria-label="Blue Phoenix Eye Care and Opticals home">
              <Image
                src="/images/Logo.png"
                width={300}
                height={82}
                loading="lazy"
                sizes="(max-width: 760px) 220px, 300px"
                alt="Blue Phoenix Eye Care and Opticals logo"
                className="brand__logo"
              />
            </a>
            <p>
              Professional eye care, accurate vision testing and premium optical solutions for
              families across Kulasekharam.
            </p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h3>Services</h3>
            {footerServices.map((service) => (
              <a key={service} href="#services">{service}</a>
            ))}
          </div>
          <div>
            <h3>Contact</h3>
            <p>{siteConfig.addressLines.join(" ")}</p>
            <a href={siteConfig.callHref}>{siteConfig.phoneDisplay}</a>
            <a href={siteConfig.googleReviewsHref}>Google Reviews</a>
          </div>
        </div>
        <div className="container site-footer__bottom">
          <span>© 2026 Blue Phoenix Eye Care & Opticals. All rights reserved.</span>
          <a
            className="site-footer__credit"
            href="https://sintyz.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Designed and Developed by Sintyz.com
          </a>
        </div>
      </footer>
    </>
  );
}
