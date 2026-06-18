import { CtaButtonLink } from "@/components/cms/cta-button-link";
import { Reveal } from "@/components/reveal";
import { SymptomIcon } from "@/components/sections";
import type { SiteSettings, VisitCtaSectionData } from "@/lib/sanity/types";

type Props = {
  data: VisitCtaSectionData;
  settings: SiteSettings;
};

export function VisitCtaSectionCms({ data, settings }: Props) {
  return (
    <Reveal className="warning-banner" delay={0.12}>
      <div className="warning-banner__icon">
        <SymptomIcon name="alert" />
      </div>
      <div>
        <h3>{data.heading}</h3>
        {data.description ? <p>{data.description}</p> : null}
        {data.checklist?.length ? (
          <div className="warning-banner__checks">
            {data.checklist.map((item) => (
              <span key={item.label}>
                <span aria-hidden="true">✓</span>
                {item.label}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      <CtaButtonLink cta={data.cta} settings={settings} />
    </Reveal>
  );
}
