import type { PortableTextValue, CtaButton } from "./resolveCta";

export type SanityImage = {
  asset?: { _ref?: string; url?: string };
  alt?: string;
};

export type Seo = {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImage;
  canonicalUrl?: string;
};

export type NavItem = {
  label: string;
  sectionId?: string;
  url?: string;
  openInNewTab?: boolean;
};

export type SiteSettings = {
  clinicName: string;
  tagline?: string;
  logo?: SanityImage;
  favicon?: SanityImage;
  siteUrl: string;
  primaryPhone: string;
  secondaryPhone?: string;
  whatsappNumber: string;
  whatsappDefaultMessage?: string;
  email?: string;
  appointmentEmail?: string;
  addressLines?: string[];
  city: string;
  state: string;
  country?: string;
  pinCode?: string;
  googleMapUrl?: string;
  mapEmbedUrl?: string;
  googleReviewsUrl?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
  linkedin?: string;
  openingTime?: string;
  closingTime?: string;
  weeklySchedule?: Array<{ day: string; time?: string; closed?: boolean }>;
  defaultSeo?: Seo;
};

export type HeaderData = {
  logoOverride?: SanityImage;
  navigation: NavItem[];
  primaryCta?: CtaButton;
  secondaryCta?: CtaButton;
  mobileMenuIntro?: { eyebrow?: string; heading?: string };
};

export type FooterData = {
  description: string;
  copyrightText: string;
  quickLinks?: NavItem[];
  serviceLinks?: string[];
};

export type GlobalUiData = {
  stickyBarHeading?: string;
  stickyBarCallLabel?: string;
  stickyBarWhatsappLabel?: string;
  showBackToTop?: boolean;
};

export type SectionHeader = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  sectionId?: string;
};

export type HeroSectionData = {
  _type: "heroSection";
  _id: string;
  badge: string;
  headingLine1: string;
  headingLine2: string;
  description: string;
  localityNote?: string;
  primaryCta?: CtaButton;
  secondaryCta?: CtaButton;
  conversionNotes?: string[];
  heroImage?: SanityImage;
  heroImagePath?: string;
  heroCard?: { heading?: string; subheading?: string; floatingBadge?: string };
  trustBar?: Array<{ icon?: string; title: string }>;
  serviceStrip?: string[];
};

export type TrustedVisionSectionData = {
  _type: "trustedVisionSection";
  _id: string;
  header: SectionHeader;
  panelBadge?: string;
  panelHeading: string;
  panelDescription?: string[];
  highlights?: string[];
  panelCtas?: CtaButton[];
  proofCard?: {
    eyebrow?: string;
    heading?: string;
    description?: string;
    stats?: Array<{
      staticValue?: string;
      value?: number;
      suffix?: string;
      decimals?: number;
      label: string;
    }>;
  };
};

export type QualityFeaturesSectionData = {
  _type: "qualityFeaturesSection";
  _id: string;
  header: SectionHeader;
  features?: Array<{ icon?: string; title: string; description: string }>;
  bottomCard?: {
    eyebrow?: string;
    heading?: string;
    description?: string;
    commitments?: string[];
  };
  infoCards?: Array<{ title: string; description?: string }>;
};

export type ServiceCardData = {
  icon?: string;
  title: string;
  badge?: string;
  image?: SanityImage;
  imagePath?: string;
  description: string;
  benefits?: string[];
  seoLine?: string;
  cta?: CtaButton;
};

export type ServicesSectionData = {
  _type: "servicesSection";
  _id: string;
  header: SectionHeader;
  services?: ServiceCardData[];
  conversionBanner?: {
    eyebrow?: string;
    heading?: string;
    description?: string;
    primaryCta?: CtaButton;
    secondaryCta?: CtaButton;
  };
  localSeo?: {
    heading?: string;
    content?: PortableTextValue;
    plainParagraphs?: string[];
  };
};

export type CtaBannerSectionData = {
  _type: "ctaBannerSection";
  _id: string;
  eyebrow?: string;
  heading: string;
  description?: string;
  primaryCta?: CtaButton;
  secondaryCta?: CtaButton;
  variant?: "blue" | "neutral";
};

export type LocalSeoBlockData = {
  _type: "localSeoBlock";
  _id: string;
  heading: string;
  content?: PortableTextValue;
  plainParagraphs?: string[];
};

export type SymptomCardData = {
  number?: string;
  icon?: string;
  title: string;
  description: string;
  label?: string;
  tags?: string[];
  cta?: CtaButton;
};

export type SymptomsSectionData = {
  _type: "symptomsSection";
  _id: string;
  header: SectionHeader;
  symptoms?: SymptomCardData[];
  sideImage?: SanityImage;
  sideImagePath?: string;
  sideCaptionTitle?: string;
  sideCaptionText?: string;
  visitCta?: {
    heading?: string;
    description?: string;
    cta?: CtaButton;
    checklist?: Array<{ label: string }>;
  };
  benefits?: {
    variant?: "benefitCards" | "symptomChecker";
    header?: SectionHeader;
    benefitCards?: Array<{ title: string; description: string }>;
    checkerSymptoms?: string[];
    checkerCta?: CtaButton;
  };
  localSeo?: {
    heading?: string;
    content?: PortableTextValue;
    plainParagraphs?: string[];
  };
};

export type VisitCtaSectionData = {
  _type: "visitCtaSection";
  _id: string;
  heading: string;
  description?: string;
  cta?: CtaButton;
  checklist?: Array<{ label: string }>;
};

export type BenefitsSectionData = {
  _type: "benefitsSection";
  _id: string;
  variant?: "benefitCards" | "symptomChecker";
  header?: SectionHeader;
  benefits?: Array<{ title: string; description: string }>;
  checkerSymptoms?: string[];
  checkerCta?: CtaButton;
};

export type FinalCtaSectionData = {
  _type: "finalCtaSection";
  _id: string;
  badge?: string;
  heading: string;
  description?: string;
  primaryCta?: CtaButton;
  secondaryCta?: CtaButton;
  backgroundImage?: SanityImage;
};

export type GalleryItemData = {
  title: string;
  category: string;
  image?: SanityImage;
  imagePath?: string;
  alt?: string;
  size?: string;
};

export type GallerySectionData = {
  _type: "gallerySection";
  _id: string;
  header: SectionHeader;
  categories?: string[];
  galleryItems?: GalleryItemData[];
  showcaseBlocks?: Array<{ title: string; content?: string; items?: string[] }>;
  highlightBadges?: string[];
  trustBanner?: {
    eyebrow?: string;
    heading?: string;
    description?: string;
    primaryCta?: CtaButton;
  };
};

export type TestimonialData = {
  _id: string;
  authorName: string;
  rating?: number;
  text: string;
  order?: number;
};

export type ReviewsSectionData = {
  _type: "reviewsSection";
  _id: string;
  header: SectionHeader;
  aggregateBadge?: string;
  initialCount?: number;
  reviews?: TestimonialData[];
};

export type FaqSectionData = {
  _type: "faqSection";
  _id: string;
  header: SectionHeader;
  faqs?: Array<{ question: string; answer: string }>;
  bottomCta?: { eyebrow?: string; heading?: string; cta?: CtaButton };
};

export type ContactSectionData = {
  _type: "contactSection";
  _id: string;
  header: SectionHeader;
  clinicHeading?: string;
  clinicIntro?: string;
  primaryCta?: CtaButton;
  secondaryCta?: CtaButton;
  assuranceItems?: string[];
  miniServices?: string[];
  mapEyebrow?: string;
  mapHeading?: string;
  mapStripLabels?: string[];
  googleRatingLabel?: string;
  googleRatingText?: string;
  localSeo?: {
    heading?: string;
    content?: PortableTextValue;
    plainParagraphs?: string[];
  };
};

export type FeaturedBrandsSectionData = {
  _type: "featuredBrandsSection";
  _id: string;
  header?: SectionHeader;
  brands?: Array<{
    image?: SanityImage;
    imagePath?: string;
    alt?: string;
  }>;
};

export type HomepageSection =
  | HeroSectionData
  | TrustedVisionSectionData
  | QualityFeaturesSectionData
  | ServicesSectionData
  | CtaBannerSectionData
  | LocalSeoBlockData
  | SymptomsSectionData
  | VisitCtaSectionData
  | BenefitsSectionData
  | FinalCtaSectionData
  | GallerySectionData
  | FeaturedBrandsSectionData
  | ReviewsSectionData
  | FaqSectionData
  | ContactSectionData;

export type HomepageData = {
  title: string;
  seo?: Seo;
  sections: HomepageSection[];
};

export type SiteData = {
  settings: SiteSettings;
  header: HeaderData;
  footer: FooterData;
  globalUi: GlobalUiData;
  homepage: HomepageData;
};
