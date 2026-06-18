export const imageFragment = `
  asset->{
    _id,
    url
  },
  alt
`;

export const ctaFragment = `
  label,
  action,
  url,
  sectionId,
  variant,
  size,
  openInNewTab,
  whatsappMessage
`;

export const seoFragment = `
  metaTitle,
  metaDescription,
  ogImage{${imageFragment}},
  canonicalUrl
`;

export const sectionHeaderFragment = `
  eyebrow,
  title,
  intro,
  align,
  sectionId
`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  clinicName,
  tagline,
  logo{${imageFragment}},
  favicon{${imageFragment}},
  siteUrl,
  primaryPhone,
  secondaryPhone,
  whatsappNumber,
  whatsappDefaultMessage,
  email,
  appointmentEmail,
  addressLines,
  city,
  state,
  country,
  pinCode,
  googleMapUrl,
  mapEmbedUrl,
  googleReviewsUrl,
  facebook,
  instagram,
  youtube,
  linkedin,
  openingTime,
  closingTime,
  weeklySchedule[]{day, time, closed},
  defaultSeo{${seoFragment}}
}`;

export const headerQuery = `*[_type == "header"][0]{
  logoOverride{${imageFragment}},
  navigation[]{label, sectionId, url, openInNewTab},
  primaryCta{${ctaFragment}},
  secondaryCta{${ctaFragment}},
  mobileMenuIntro{eyebrow, heading}
}`;

export const footerQuery = `*[_type == "footer"][0]{
  description,
  copyrightText,
  quickLinks[]{label, sectionId, url, openInNewTab},
  serviceLinks
}`;

export const globalUiQuery = `*[_type == "globalUi"][0]{
  stickyBarHeading,
  stickyBarCallLabel,
  stickyBarWhatsappLabel,
  showBackToTop
}`;

const sectionProjection = `
  _type,
  _id,
  ...,
  header{${sectionHeaderFragment}},
  heroImage{${imageFragment}},
  heroImagePath,
  sideImage{${imageFragment}},
  sideImagePath,
  backgroundImage{${imageFragment}},
  services[]{
    ...,
    image{${imageFragment}},
    imagePath,
    cta{${ctaFragment}}
  },
  symptoms[]{
    ...,
    cta{${ctaFragment}}
  },
  galleryItems[]{
    ...,
    image{${imageFragment}},
    imagePath,
    alt
  },
  reviews[]->{
    _id,
    authorName,
    rating,
    text,
    order
  }
`;

export const homepageQuery = `*[_type == "homepage"][0]{
  title,
  seo{${seoFragment}},
  "sections": sections[enabled != false].section->{
    ${sectionProjection}
  }
}`;
