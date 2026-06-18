import { ConversionWidgets } from "@/components/conversion-widgets";
import { SectionRenderer } from "@/components/cms/section-renderer";
import { MobileActions } from "@/components/mobile-actions";
import { SchemaMarkup } from "@/components/schema-markup";
import { SiteHeader } from "@/components/site-header";
import { getSiteData } from "@/lib/sanity/fetchers";

export const revalidate = 3600;

export default async function Home() {
  const { settings, header, footer, globalUi, homepage } = await getSiteData();
  const faqSection = homepage.sections.find((section) => section._type === "faqSection");

  return (
    <>
      <SiteHeader settings={settings} header={header} />
      <main id="main">
        <SectionRenderer sections={homepage.sections} settings={settings} header={header} footer={footer} />
      </main>
      <ConversionWidgets globalUi={globalUi} />
      <MobileActions settings={settings} globalUi={globalUi} />
      <SchemaMarkup
        settings={settings}
        faqs={faqSection && faqSection._type === "faqSection" ? faqSection.faqs : undefined}
      />
    </>
  );
}
