import type { FooterData, HomepageSection, HeaderData, SiteSettings } from "@/lib/sanity/types";
import { HeroSectionCms } from "./sections/hero-section";
import { TrustedVisionSectionCms } from "./sections/trusted-vision-section";
import { QualityFeaturesSectionCms } from "./sections/quality-features-section";
import { ServicesSectionCms } from "./sections/services-section";
import { CtaBannerSectionCms } from "./sections/cta-banner-section";
import { LocalSeoBlockCms } from "./sections/local-seo-block";
import { SymptomsSectionCms } from "./sections/symptoms-section";
import { VisitCtaSectionCms } from "./sections/visit-cta-section";
import { BenefitsSectionCms } from "./sections/benefits-section";
import { FeaturedBrandsSectionCms } from "./sections/featured-brands-section";
import { GallerySectionCms } from "./sections/gallery-section";
import { ReviewsSectionCms } from "./sections/reviews-section";
import { FaqSectionCms } from "./sections/faq-section";
import { ContactSectionCms } from "./sections/contact-section";

type SectionRendererProps = {
  sections: HomepageSection[];
  settings: SiteSettings;
  header?: HeaderData;
  footer?: FooterData;
};

export function SectionRenderer({ sections, settings, header, footer }: SectionRendererProps) {
  return (
    <>
      {sections.map((section) => {
        switch (section._type) {
          case "heroSection":
            return <HeroSectionCms key={section._id} data={section} settings={settings} />;
          case "trustedVisionSection":
            return <TrustedVisionSectionCms key={section._id} data={section} settings={settings} />;
          case "qualityFeaturesSection":
            return <QualityFeaturesSectionCms key={section._id} data={section} settings={settings} />;
          case "servicesSection":
            return <ServicesSectionCms key={section._id} data={section} settings={settings} />;
          case "featuredBrandsSection":
            return <FeaturedBrandsSectionCms key={section._id} data={section} />;
          case "ctaBannerSection":
            return <CtaBannerSectionCms key={section._id} data={section} settings={settings} />;
          case "localSeoBlock":
            return <LocalSeoBlockCms key={section._id} data={section} />;
          case "symptomsSection":
            return <SymptomsSectionCms key={section._id} data={section} settings={settings} />;
          case "visitCtaSection":
            return <VisitCtaSectionCms key={section._id} data={section} settings={settings} />;
          case "benefitsSection":
            return <BenefitsSectionCms key={section._id} data={section} settings={settings} />;
          case "gallerySection":
            return <GallerySectionCms key={section._id} data={section} settings={settings} />;
          case "reviewsSection":
            return <ReviewsSectionCms key={section._id} data={section} />;
          case "faqSection":
            return <FaqSectionCms key={section._id} data={section} settings={settings} />;
          case "contactSection":
            return (
              <ContactSectionCms
                key={section._id}
                data={section}
                settings={settings}
                header={header}
                footer={footer}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
}
