import { CtaButtonLink } from "@/components/cms/cta-button-link";
import { Reveal } from "@/components/reveal";
import type { CtaBannerSectionData, SiteSettings } from "@/lib/sanity/types";

type Props = {
  data: CtaBannerSectionData;
  settings: SiteSettings;
};

export function CtaBannerSectionCms({ data, settings }: Props) {
  return (
    <Reveal className="services-conversion-banner" delay={0.12}>
      <div>
        {data.eyebrow ? <span className="eyebrow">{data.eyebrow}</span> : null}
        <h3>{data.heading}</h3>
        {data.description ? <p>{data.description}</p> : null}
      </div>
      <div className="services-conversion-banner__actions">
        <CtaButtonLink cta={data.primaryCta} settings={settings} />
        <CtaButtonLink cta={data.secondaryCta} settings={settings} />
      </div>
    </Reveal>
  );
}
