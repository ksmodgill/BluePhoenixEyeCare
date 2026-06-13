import { ConversionWidgets } from "@/components/conversion-widgets";
import { MobileActions } from "@/components/mobile-actions";
import { SchemaMarkup } from "@/components/schema-markup";
import {
  AboutSection,
  ContactSection,
  EyeProblemsSection,
  FaqSection,
  GallerySection,
  HeroSection,
  ReviewsSection,
  ServicesSection,
  WhyChooseUsSection
} from "@/components/sections";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <WhyChooseUsSection />
        <ServicesSection />
        <EyeProblemsSection />
        <GallerySection />
        <ReviewsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <ConversionWidgets />
      <MobileActions />
      <SchemaMarkup />
    </>
  );
}
