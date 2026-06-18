import { CtaButtonLink } from "@/components/cms/cta-button-link";
import { Reveal } from "@/components/reveal";
import type { BenefitsSectionData, SiteSettings } from "@/lib/sanity/types";

type Props = {
  data: BenefitsSectionData;
  settings: SiteSettings;
};

export function BenefitsSectionCms({ data, settings }: Props) {
  if (data.variant === "benefitCards" && data.benefits?.length) {
    return (
      <Reveal className="benefits-grid" delay={0.14}>
        {data.benefits.map((benefit) => (
          <article key={benefit.title} className="why-card">
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </article>
        ))}
      </Reveal>
    );
  }

  const header = data.header;

  return (
    <Reveal className="symptom-checker" delay={0.14}>
      <div>
        {header?.eyebrow ? <span className="eyebrow">{header.eyebrow}</span> : null}
        {header?.title ? <h3>{header.title}</h3> : null}
        {header?.intro ? <p>{header.intro}</p> : null}
      </div>
      <fieldset className="symptom-options">
        <legend className="sr-only">Select eye symptoms</legend>
        {data.checkerSymptoms?.map((item) => (
          <label key={item}>
            <input type="checkbox" name="symptoms" value={item} />
            <span>{item}</span>
          </label>
        ))}
      </fieldset>
      <CtaButtonLink cta={data.checkerCta} settings={settings} />
    </Reveal>
  );
}
