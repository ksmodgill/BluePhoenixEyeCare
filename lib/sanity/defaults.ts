import type { SiteData } from "./types";

const defaultCta = {
  call: { label: "Call Now", action: "call" as const, variant: "primary" as const },
  callLg: { label: "Call Now", action: "call" as const, variant: "primary" as const, size: "lg" as const },
  whatsapp: { label: "WhatsApp Us", action: "whatsapp" as const, variant: "secondary" as const },
  whatsappLg: { label: "WhatsApp Us", action: "whatsapp" as const, variant: "secondary" as const, size: "lg" as const },
  whatsappGhost: { label: "Ask on WhatsApp", action: "whatsapp" as const, variant: "ghost" as const },
  whatsappSymptom: {
    label: "Talk to Our Team",
    action: "whatsapp" as const,
    variant: "primary" as const,
    openInNewTab: true,
    whatsappMessage: "Hello, I would like guidance regarding my eye symptoms."
  }
};

export const defaultSiteData: SiteData = {
  settings: {
    clinicName: "Blue Phoenix Eye Care & Opticals",
    tagline: "Professional eye care and premium optical solutions in Kulasekharam",
    siteUrl: "https://bluephoenixeyecare.com",
    primaryPhone: "9445887612",
    whatsappNumber: "9445887612",
    whatsappDefaultMessage: "Hello, I would like to ask about eye care services.",
    addressLines: [
      "Blessing Complex,",
      "8-130/7,",
      "Nagacode Junction,",
      "Opposite Sugumar Hospital,",
      "Kulasekharam,",
      "Tamil Nadu - 629161"
    ],
    city: "Kulasekharam",
    state: "Tamil Nadu",
    country: "India",
    pinCode: "629161",
    googleMapUrl: "https://maps.app.goo.gl/7V8FaHBFbkCMz1vx8",
    mapEmbedUrl: "https://www.google.com/maps?q=8.3619376,77.2934769&z=17&output=embed",
    googleReviewsUrl: "https://maps.app.goo.gl/rojuqmQfvdHRz5Dr7",
    weeklySchedule: [
      { day: "Saturday", time: "9 am–8:30 pm" },
      { day: "Sunday", time: "Closed", closed: true },
      { day: "Monday", time: "9 am–8:30 pm" },
      { day: "Tuesday", time: "9 am–8:30 pm" },
      { day: "Wednesday", time: "9 am–8:30 pm" },
      { day: "Thursday", time: "9 am–8:30 pm" },
      { day: "Friday", time: "9 am–8:30 pm" }
    ],
    defaultSeo: {
      metaTitle: "Blue Phoenix Eye Care & Opticals | Eye Care Clinic in Kulasekharam",
      metaDescription:
        "Premium Eye Care Clinic in Kulasekharam for eye checkup, eye examination, vision testing, contact lenses, retina screening and premium eyewear."
    }
  },
  header: {
    navigation: [
      { label: "Home", sectionId: "home" },
      { label: "About", sectionId: "about" },
      { label: "Services", sectionId: "services" },
      { label: "Reviews", sectionId: "reviews" },
      { label: "Contact", sectionId: "contact" }
    ],
    primaryCta: { label: "Call Now", action: "call", variant: "primary" },
    secondaryCta: { label: "WhatsApp", action: "whatsapp", variant: "secondary" },
    mobileMenuIntro: {
      eyebrow: "Blue Phoenix Eye Care",
      heading: "How can we help your vision today?"
    }
  },
  footer: {
    description:
      "Professional eye care, accurate vision testing and premium optical solutions for families across Kulasekharam.",
    copyrightText: "© 2026 Blue Phoenix Eye Care & Opticals. All rights reserved.",
    developerCredit: { label: "Designed and Developed by Sintyz.com", url: "https://sintyz.com" },
    quickLinks: [
      { label: "Home", sectionId: "home" },
      { label: "About", sectionId: "about" },
      { label: "Services", sectionId: "services" },
      { label: "Reviews", sectionId: "reviews" },
      { label: "Contact", sectionId: "contact" }
    ],
    serviceLinks: [
      "Eye Checkup",
      "Vision Testing",
      "Contact Lenses",
      "Retina Screening",
      "Diabetic Eye Evaluation",
      "Premium Eyewear"
    ]
  },
  globalUi: {
    stickyBarHeading: "Need eye care help?",
    stickyBarCallLabel: "Call",
    stickyBarWhatsappLabel: "WhatsApp",
    showFloatingCredit: true,
    floatingCredit: { label: "Designed by Sintyz", url: "https://sintyz.com" },
    showBackToTop: true
  },
  homepage: {
    title: "Homepage",
    sections: [
      {
        _type: "heroSection",
        _id: "default-hero",
        badge: "Eye Clinic in Kulasekharam",
        headingLine1: "Eye Care That Helps",
        headingLine2: "You See Life Clearly",
        description:
          "Comprehensive eye checkups, computer vision testing, contact lenses, anti-glare glasses, retina screening, and premium optical solutions — all under one roof.",
        localityNote:
          "Serving families across Kulasekharam with personalized and affordable Vision Care from an Eye Specialist, Eye Testing team, and Optical Store you can trust.",
        primaryCta: defaultCta.callLg,
        secondaryCta: defaultCta.whatsappLg,
        conversionNotes: [
          "Quick call support",
          "WhatsApp guidance before your visit",
          "Convenient Kulasekharam location"
        ],
        heroImage: undefined,
        serviceStrip: [
          "Comprehensive Eye Checkups",
          "Contact Lens Solutions",
          "Computer Vision Testing",
          "Retina Screening",
          "Blue Cut Lenses",
          "Anti-Glare Glasses"
        ]
      },
      {
        _type: "trustedVisionSection",
        _id: "default-about",
        header: {
          eyebrow: "About Blue Phoenix Eye Care & Opticals",
          title: "Trusted Vision Care for Every Stage of Life",
          intro:
            "At Blue Phoenix Eye Care & Opticals, we believe clear vision is essential for a better quality of life. Our clinic combines professional eye care, modern diagnostic technology, and personalized attention to help patients of all ages maintain healthy eyesight.",
          sectionId: "about"
        },
        panelBadge: "Modern Eye Care in Kulasekharam",
        panelHeading: "Clear guidance, accurate testing and eyewear support in one place.",
        panelDescription: [
          "We provide comprehensive eye examinations, computer vision testing, contact lens consultations, retina screening, diabetic eye evaluations, and a wide range of premium optical solutions.",
          "Whether you need a routine eye checkup, new glasses, contact lenses, or specialized Vision Care, our team is committed to delivering accurate diagnosis, expert guidance, and affordable treatment options."
        ],
        highlights: [
          "Comprehensive eye examinations",
          "Modern diagnostic testing",
          "Premium optical solutions",
          "Family-focused care"
        ],
        panelCtas: [defaultCta.call, defaultCta.whatsapp],
        proofCard: {
          eyebrow: "Trusted Locally",
          heading: "Built for everyday vision needs.",
          description:
            "Located conveniently in Kulasekharam, our clinic supports families, students, professionals and senior citizens with dependable vision care.",
          stats: [
            { staticValue: "Trusted", label: "Local Patients" },
            { value: 5, suffix: "★", label: "Average Rating", decimals: 1 },
            { value: 100, suffix: "%", label: "Patient Focused Care" },
            { staticValue: "All Ages", label: "Vision Care Solutions" }
          ]
        }
      },
      {
        _type: "qualityFeaturesSection",
        _id: "default-why",
        header: {
          eyebrow: "Why Patients Trust Blue Phoenix",
          title: "Quality Eye Care Backed by Expertise & Compassion",
          intro:
            "A modern, patient-first approach for families, students, professionals, senior citizens, contact lens users, and anyone looking for dependable Vision Care."
        },
        features: [
          { icon: "eye", title: "Comprehensive Eye Checkups", description: "Detailed eye examinations to identify vision issues early and maintain long-term eye health." },
          { icon: "technology", title: "Modern Diagnostic Testing", description: "Advanced testing methods help ensure accurate diagnosis and personalized treatment recommendations." },
          { icon: "glasses", title: "Premium Optical Collection", description: "Explore a carefully selected range of stylish frames, lenses, anti-glare solutions and blue-cut glasses." },
          { icon: "lens", title: "Contact Lens Expertise", description: "Professional guidance for selecting and maintaining contact lenses safely and comfortably." },
          { icon: "shield", title: "Preventive Eye Care", description: "Routine screenings help detect eye conditions before they become serious problems." },
          { icon: "heart", title: "Personalized Patient Care", description: "Every patient receives individual attention, clear explanations and solutions tailored to their vision needs." }
        ],
        bottomCard: {
          eyebrow: "Patient First Promise",
          heading: "Our Commitment to Your Vision",
          description:
            "We focus on delivering professional, ethical and patient-centered eye care. Every consultation is guided by accuracy, transparency and genuine concern for your long-term eye health.",
          commitments: [
            "Personalized Attention",
            "Accurate Eye Testing",
            "Affordable Solutions",
            "Modern Equipment",
            "Comfortable Environment",
            "Trusted Vision Care"
          ]
        }
      },
      {
        _type: "servicesSection",
        _id: "default-services",
        header: {
          eyebrow: "Our Eye Care Services",
          title: "Complete Vision Care Under One Roof",
          intro:
            "From routine eye examinations to advanced diagnostic testing and premium optical solutions, Blue Phoenix Eye Care & Opticals provides comprehensive eye care services for patients of all ages in Kulasekharam.",
          align: "center",
          sectionId: "services"
        },
        services: [
          { icon: "eye", title: "Comprehensive Eye Checkup", badge: "Most Popular", imagePath: "/images/services/Comprehensive Eye Checkup.jpg", description: "Detailed eye examinations to assess vision clarity, detect eye conditions early and maintain long-term eye health.", benefits: ["Vision Assessment", "Prescription Updates", "Early Disease Detection"], cta: defaultCta.whatsappGhost, seoLine: "Ideal for Eye Checkup in Kulasekharam, Eye Examination and Vision Testing." },
          { icon: "monitor", title: "Computer Vision Testing", imagePath: "/images/services/Computer Vision Testing.jpg", description: "Specialized eye testing for individuals experiencing digital eye strain caused by prolonged screen usage.", benefits: ["Screen Fatigue Relief", "Better Focus", "Reduced Eye Strain"], cta: defaultCta.whatsappGhost, seoLine: "Helpful for Computer Vision Testing, Digital Eye Strain and Eye Specialist guidance." },
          { icon: "lens", title: "Contact Lens Consultation", badge: "High Demand", imagePath: "/images/services/Contact Lens Consultation.jpg", description: "Professional guidance for selecting, fitting and maintaining contact lenses comfortably and safely.", benefits: ["Expert Lens Selection", "Proper Fitting", "Safe Lens Usage"], cta: defaultCta.whatsappGhost, seoLine: "Designed for Contact Lenses, Contact Lens Clinic support and complete Vision Care." },
          { icon: "retina", title: "Retina Screening", badge: "Preventive Care", imagePath: "/images/services/Retina Screening.jpg", description: "Comprehensive retina evaluation to identify vision-threatening conditions before symptoms become serious.", benefits: ["Early Detection", "Better Eye Health", "Preventive Care"], cta: defaultCta.whatsappGhost, seoLine: "Supports Retina Screening, Eye Health Check and Retina Evaluation needs." },
          { icon: "cross", title: "Diabetic Eye Evaluation", imagePath: "/images/services/Diabetic Eye Evaluation.jpg", description: "Regular eye screening for diabetic patients to monitor eye health and reduce the risk of vision complications.", benefits: ["Early Diagnosis", "Better Monitoring", "Long-Term Protection"], cta: defaultCta.whatsappGhost, seoLine: "Focused on Diabetic Eye Evaluation, Diabetic Retina Check and Eye Testing." },
          { icon: "blueShield", title: "Blue Cut Lenses", imagePath: "/images/services/Blue Cut Lenses.jpg", description: "Advanced lenses designed to reduce blue light exposure from digital devices and improve visual comfort.", benefits: ["Reduced Digital Strain", "Improved Comfort", "Better Daily Vision"], cta: defaultCta.whatsappGhost, seoLine: "A smart choice for Blue Cut Lenses, Blue Light Protection and Computer Glasses." },
          { icon: "glasses", title: "Anti-Glare Glasses", imagePath: "/images/services/Anti-Glare Glasses.jpg", description: "High-quality anti-glare lenses that improve visual clarity and reduce reflections during daily activities.", benefits: ["Sharper Vision", "Reduced Glare", "Better Driving Comfort"], cta: defaultCta.whatsappGhost, seoLine: "Useful for Anti Glare Glasses, Optical Solutions and Vision Correction." },
          { icon: "frame", title: "Premium Optical Frames", imagePath: "/images/services/Premium Optical Frames.jpg", description: "Explore a stylish collection of quality eyewear frames designed for comfort, durability and everyday confidence.", benefits: ["Premium Designs", "Comfortable Fit", "Durable Materials"], cta: defaultCta.whatsappGhost, seoLine: "Available through our Optical Store in Kulasekharam for Eyeglasses and Optical Frames." },
          { icon: "sunglasses", title: "Protective Sunglasses", imagePath: "/images/services/Protective Sunglasses.jpg", description: "UV-protective sunglasses designed to safeguard your eyes while enhancing visual comfort outdoors.", benefits: ["UV Protection", "Eye Safety", "Stylish Designs"], cta: defaultCta.whatsappGhost, seoLine: "Explore Sunglasses, UV Protection Glasses and Premium Eyewear options." }
        ],
        conversionBanner: {
          eyebrow: "Need Guidance?",
          heading: "Not Sure Which Eye Care Service You Need?",
          description:
            "Our team can help identify the right solution through a professional eye examination and personalized consultation.",
          primaryCta: defaultCta.call,
          secondaryCta: defaultCta.whatsapp
        },
        localSeo: {
          heading: "Trusted Eye Care Clinic in Kulasekharam",
          plainParagraphs: [
            "Blue Phoenix Eye Care & Opticals is built for patients who want dependable eye care in a calm, modern setting. Whether you call for an Eye Checkup, need accurate Eye Testing, require ongoing Vision Care, or want advice on Contact Lenses, our clinic helps you understand the right next step with clear guidance and patient-focused attention.",
            "Families across Kulasekharam visit us for comprehensive eye services including Retina Screening, Diabetic Eye Evaluation, premium eyewear selection, and optical solutions from a trusted Optical Store. Our goal is to make quality eye care easier to access, easier to understand, and easier to act on."
          ]
        }
      },
      {
        _type: "symptomsSection",
        _id: "default-symptoms",
        header: {
          eyebrow: "Eye Problems We Help Diagnose & Manage",
          title: "Experiencing Vision Problems? Don't Ignore the Early Signs.",
          intro:
            "Many eye conditions develop gradually and may not show obvious symptoms initially. Early detection through regular eye examinations can help protect your vision and overall eye health."
        },
        symptoms: [
          { icon: "blurred", title: "Blurred Vision", description: "Difficulty seeing clearly while reading, driving or viewing distant objects may indicate vision correction needs or underlying eye conditions.", label: "Common Causes", tags: ["Refractive Errors", "Eye Fatigue", "Cataract Development"], cta: defaultCta.whatsappGhost },
          { icon: "monitorEye", title: "Digital Eye Strain", description: "Extended screen exposure can cause tired eyes, headaches, blurred vision and reduced productivity.", label: "Common Symptoms", tags: ["Eye Fatigue", "Dry Eyes", "Headaches", "Difficulty Focusing"], cta: defaultCta.whatsappGhost },
          { icon: "reading", title: "Difficulty Reading Small Text", description: "Holding books farther away or struggling to read fine print may indicate age-related vision changes.", label: "Common Signs", tags: ["Eye Fatigue", "Reading Difficulty", "Frequent Prescription Changes"], cta: defaultCta.whatsappGhost },
          { icon: "moon", title: "Night Vision Problems", description: "Difficulty driving at night or seeing clearly in low-light environments should not be ignored.", label: "Common Signs", tags: ["Glare Sensitivity", "Halos Around Lights", "Reduced Visual Clarity"], cta: defaultCta.whatsappGhost },
          { icon: "drop", title: "Dry & Irritated Eyes", description: "Persistent dryness, burning sensation or irritation may affect comfort and daily activities.", label: "Common Signs", tags: ["Burning Eyes", "Redness", "Discomfort"], cta: defaultCta.whatsappGhost },
          { icon: "medicalShield", title: "Diabetes Related Eye Concerns", description: "People living with diabetes should undergo regular eye evaluations to monitor retinal health.", label: "Common Risks", tags: ["Diabetic Retinopathy", "Vision Changes", "Retina Damage"], cta: defaultCta.whatsappGhost }
        ],
        sideImagePath: "/images/Eye Problems-image.jpg",
        sideCaptionTitle: "Symptoms are signals.",
        sideCaptionText: "Professional Eye Examination and Vision Testing can help identify the cause early.",
        visitCta: {
          heading: "When Should You Call for an Eye Checkup?",
          description: "You should consider an eye examination if you experience:",
          cta: defaultCta.call,
          checklist: [
            { label: "Frequent headaches" },
            { label: "Blurred vision" },
            { label: "Eye strain from screens" },
            { label: "Difficulty reading" },
            { label: "Dry or irritated eyes" },
            { label: "Sudden vision changes" },
            { label: "Diabetes-related vision concerns" }
          ]
        },
        benefits: {
          variant: "symptomChecker",
          header: {
            eyebrow: "Interactive Symptom Checker",
            title: "Not Sure What's Causing Your Eye Discomfort?",
            intro: "Select symptoms and talk to our team for guidance."
          },
          checkerSymptoms: [
            "Blurred Vision",
            "Headaches",
            "Eye Strain",
            "Dry Eyes",
            "Reading Difficulty",
            "Night Vision Problems",
            "Diabetes Related Concerns"
          ],
          checkerCta: defaultCta.whatsappSymptom
        },
        localSeo: {
          heading: "Trusted Eye Care Clinic in Kulasekharam",
          plainParagraphs: [
            "Patients searching for eye checkups, Vision Testing, Retina Screening, Diabetic Eye Evaluation, contact lenses and optical solutions in Kulasekharam can rely on Blue Phoenix Eye Care & Opticals for professional and personalized eye care services.",
            "Whether you need an Eye Checkup in Kulasekharam, an Eye Examination with an Eye Specialist, or support from a trusted Optical Store, our team helps you understand your symptoms and choose the right next step for better eye health."
          ]
        }
      },
      {
        _type: "gallerySection",
        _id: "default-gallery",
        header: {
          eyebrow: "Clinic Gallery",
          title: "Take a Look Inside Blue Phoenix Eye Care & Opticals",
          intro:
            "Explore our clinic environment, eye testing facilities, premium optical collection and patient-focused spaces designed to provide a comfortable eye care experience."
        },
        categories: ["All", "Equipment", "Examination Room", "Optical Showcase", "Clinic Exterior", "Reception"],
        galleryItems: [
          { title: "Optical Showcase Display", category: "Optical Showcase", imagePath: "/images/Showcase Main Image.webp", alt: "Premium optical showcase display at Blue Phoenix Eye Care and Opticals", size: "large" },
          { title: "Advanced Eye Testing Equipment", category: "Equipment", imagePath: "/images/Equipment-image-1.webp", alt: "Modern eye testing equipment at Blue Phoenix Eye Care and Opticals", size: "tall" },
          { title: "Diagnostic Equipment Setup", category: "Equipment", imagePath: "/images/Equipment-image-2.webp", alt: "Professional diagnostic equipment for eye examination in Kulasekharam", size: "medium" },
          { title: "Eye Examination Room", category: "Examination Room", imagePath: "/images/Examination Room.webp", alt: "Eye examination room at Blue Phoenix Eye Care and Opticals", size: "wide" },
          { title: "Premium Glasses Showcase", category: "Optical Showcase", imagePath: "/images/Glasses Showcase 1.webp", alt: "Premium glasses showcase at Blue Phoenix Opticals", size: "medium" },
          { title: "Designer Frame Collection", category: "Optical Showcase", imagePath: "/images/Glasses Showcase 2.webp", alt: "Designer frame collection in Kulasekharam optical store", size: "medium" },
          { title: "Eyewear Display Wall", category: "Optical Showcase", imagePath: "/images/Glasses-Showcase-3.webp", alt: "Eyewear display wall with premium optical frames", size: "wide" },
          { title: "Modern Frame Selection", category: "Optical Showcase", imagePath: "/images/Glasses Showcase 4.webp", alt: "Modern optical frame selection at Blue Phoenix Eye Care and Opticals", size: "medium" },
          { title: "Stylish Eyewear Collection", category: "Optical Showcase", imagePath: "/images/Glasses Showcase 5.webp", alt: "Stylish eyewear collection at Blue Phoenix Opticals", size: "tall" },
          { title: "Clinic Exterior View", category: "Clinic Exterior", imagePath: "/images/Outer Clinic View.webp", alt: "Outer clinic view of Blue Phoenix Eye Care and Opticals in Kulasekharam", size: "medium" },
          { title: "Blue Phoenix Storefront", category: "Clinic Exterior", imagePath: "/images/Outer Clinic View 2.webp", alt: "Blue Phoenix Eye Care and Opticals storefront exterior", size: "wide" },
          { title: "Reception and Patient Welcome Area", category: "Reception", imagePath: "/images/Reception Image main.webp", alt: "Reception area at Blue Phoenix Eye Care and Opticals", size: "medium" }
        ],
        showcaseBlocks: [
          { title: "Eye Testing Facilities", content: "Advanced diagnostic tools help support accurate eye examinations and early detection of vision-related concerns.", items: ["Eye Testing Equipment", "Diagnostic Setup", "Vision Assessment", "Examination Room"] },
          { title: "Premium Optical Collection", content: "Discover stylish and functional eyewear solutions selected for comfort, durability and visual clarity.", items: ["Glasses Showcase", "Designer Frames", "Anti-Glare Lenses", "Blue Cut Lenses", "Sunglasses"] },
          { title: "Comfortable Patient Experience", content: "We aim to create a welcoming environment where patients feel comfortable and informed throughout their visit.", items: ["Reception Area", "Clinic Exterior", "Patient Welcome", "Friendly Staff Interaction"] }
        ],
        highlightBadges: [
          "🏥 Modern Eye Testing Facility",
          "👓 Premium Eyewear Collection",
          "🔬 Advanced Diagnostic Equipment",
          "❤️ Personalized Patient Care",
          "⭐ Highly Rated by Patients"
        ]
      },
      {
        _type: "reviewsSection",
        _id: "default-reviews",
        header: {
          eyebrow: "Patient Reviews",
          title: "Trusted by Patients Across Kulasekharam",
          intro:
            "Read what our patients say about their eye examinations, eyewear quality, customer service, and overall experience at Blue Phoenix Eye Care.",
          align: "center",
          sectionId: "reviews"
        },
        aggregateBadge: "★★★★★ Rated by Local Patients",
        initialCount: 6,
        reviews: [
          { _id: "r1", authorName: "Shajin Mariadhas", rating: 5, text: "I had a very good experience at Blue Phoenix Eye Care. The eye consultation was clear, professional, and very reassuring. The treatment was simple, affordable, and everything was explained properly." },
          { _id: "r2", authorName: "Catherine", rating: 5, text: "Recently, I visited Blue Phoenix Eye Clinic to update my spectacles and for a regular eye check-up. I had a very good experience with the service and care provided." },
          { _id: "r3", authorName: "Nathan El Hezekiah", rating: 5, text: "I went to Blue Phoenix Eye Care for an eye check-up and to get glasses for my long sight problem. They checked my eyes properly and explained everything in a simple way." },
          { _id: "r4", authorName: "Jebisha Jebisha", rating: 5, text: "Extremely professional experience. They took the time to listen to my vision concerns rather than rushing. The diagnostic equipment was state-of-the-art, and I left with a clear understanding of my eye health." },
          { _id: "r5", authorName: "Sujith", rating: 5, text: "I had a very good experience at Blue Phoenix Eye Care. The doctor was friendly, experienced, and explained everything clearly during the eye check-up. They have a great collection of frames and lenses with good quality." },
          { _id: "r6", authorName: "Jaya Suriya", rating: 5, text: "Visited Blue Phoenix Eye Care for a routine checkup. The doctor was extremely patient, explained my prescription clearly, and the staff helped me pick frames that fit my budget. No long wait times. Highly recommended." },
          { _id: "r7", authorName: "Teno Yesuraj", rating: 5, text: "Excellent optical store with outstanding customer service. The staff were professional, friendly, and helped me choose the perfect frame. The eye test was detailed and accurate. Highly recommended." },
          { _id: "r8", authorName: "Aghilesh S", rating: 5, text: "Visited Blue Phoenix Eye Care & Opticals and had a great experience. The clinic is clean, professional, and patient-friendly. The eye care service and attention to detail are really appreciable." },
          { _id: "r9", authorName: "Cgodwin Christalsingh", rating: 5, text: "Best place to get your glasses and a thorough eye check-up. Polite staff and a welcoming atmosphere." },
          { _id: "r10", authorName: "Aswin Aswin JV", rating: 5, text: "Good quality patient care and reasonable prices for spectacles." },
          { _id: "r11", authorName: "Abinesh Abi", rating: 5, text: "Professional eye check-up and a good optical collection." },
          { _id: "r12", authorName: "NEW FUN TEAM", rating: 5, text: "Best eye care in Kulasekharam with a large collection of spectacles. The doctor is very kind." },
          { _id: "r13", authorName: "Marbin M", rating: 5, text: "Best eye care in Kulasekharam." },
          { _id: "r14", authorName: "Sarmitha", rating: 5, text: "Good experience and very cost-friendly." },
          { _id: "r15", authorName: "Amr", rating: 5, text: "Excellent service and quality eye care. The staff were friendly and the consultation was very beneficial." }
        ]
      },
      {
        _type: "faqSection",
        _id: "default-faq",
        header: {
          eyebrow: "Frequently Asked Questions",
          title: "Common Questions About Eye Care & Vision Testing",
          intro: "Find answers to some of the most frequently asked questions from our patients."
        },
        faqs: [
          { question: "How often should I have an eye checkup?", answer: "Regular eye examinations help detect vision changes and eye conditions early. The recommended frequency may vary depending on age, health and existing eye conditions." },
          { question: "Do you provide contact lens consultations?", answer: "Yes. We offer professional guidance for selecting, fitting and maintaining contact lenses safely and comfortably." },
          { question: "What is computer vision testing?", answer: "Computer vision testing evaluates eye strain and vision-related issues caused by prolonged screen usage." },
          { question: "Do you provide blue cut and anti-glare lenses?", answer: "Yes. We offer blue cut lenses, anti-glare solutions and premium optical products to improve visual comfort." },
          { question: "Do diabetic patients need regular eye evaluations?", answer: "Regular eye evaluations are important for diabetic patients to monitor retinal health and identify vision-related complications early." },
          { question: "Can I contact the clinic through WhatsApp?", answer: "Yes. Patients can contact us through WhatsApp for eye care questions, service details and general enquiries." }
        ],
        bottomCta: {
          eyebrow: "Still Have Questions?",
          heading: "Get quick guidance before visiting the clinic.",
          cta: { label: "Ask on WhatsApp", action: "whatsapp", variant: "primary" }
        }
      },
      {
        _type: "contactSection",
        _id: "default-contact",
        header: {
          eyebrow: "Contact Us",
          title: "Talk to Blue Phoenix Eye Care & Opticals",
          intro:
            "Need help with eye testing, contact lenses, retina screening or eyewear selection? Call us or send a WhatsApp message for quick guidance from our team.",
          sectionId: "contact"
        },
        clinicHeading: "Blue Phoenix Eye Care & Opticals",
        clinicIntro:
          "Reach us directly for eye checkup guidance, vision testing support and optical collection enquiries in Kulasekharam.",
        primaryCta: defaultCta.callLg,
        secondaryCta: defaultCta.whatsappLg,
        assuranceItems: [
          "Quick response for eye care enquiries",
          "Guidance for glasses, lenses and testing",
          "Easy-to-find Kulasekharam location"
        ],
        miniServices: ["Eye Checkup", "Vision Testing", "Contact Lenses", "Premium Frames", "Retina Screening", "Blue Cut Lenses"],
        mapEyebrow: "Find Us Easily",
        mapHeading: "Conveniently Located in Kulasekharam",
        mapStripLabels: ["Blue Phoenix Eye Care & Opticals", "Google Maps verified location", "Kulasekharam"],
        googleRatingLabel: "Google Rating",
        googleRatingText: "5.0 ★ · Local patient feedback",
        localSeo: {
          heading: "Eye Care Clinic in Kulasekharam",
          plainParagraphs: [
            "Blue Phoenix Eye Care & Opticals helps patients with Eye Checkup, Vision Testing, Eye Examination, Contact Lenses, Retina Screening, Diabetic Eye Evaluation, Premium Eyewear and Optical Store support in Kulasekharam."
          ]
        }
      }
    ]
  }
};
