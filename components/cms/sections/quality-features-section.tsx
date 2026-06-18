import { CtaButtonLink } from "@/components/cms/cta-button-link";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { FeatureIcon } from "@/components/sections";
import type { QualityFeaturesSectionData, SiteSettings } from "@/lib/sanity/types";

type Props = {
  data: QualityFeaturesSectionData;
  settings: SiteSettings;
};

export function QualityFeaturesSectionCms({ data }: Props) {
  const { header, bottomCard } = data;

  return (
    <SectionShell
      id={header.sectionId}
      eyebrow={header.eyebrow}
      title={header.title}
      intro={header.intro}
      tone="gray"
      align={header.align}
    >
      <div className="why-grid">
        {data.features?.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 0.04}>
            <article className="why-card">
              <div className="why-card__icon">
                <FeatureIcon name={feature.icon || "eye"} />
              </div>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {bottomCard ? (
        <Reveal className="promise-card" delay={0.12}>
          <div className="promise-card__content">
            {bottomCard.eyebrow ? <span className="eyebrow">{bottomCard.eyebrow}</span> : null}
            {bottomCard.heading ? <h3>{bottomCard.heading}</h3> : null}
            {bottomCard.description ? <p>{bottomCard.description}</p> : null}
          </div>
          {bottomCard.commitments?.length ? (
            <div className="promise-card__checks" aria-label="Patient care commitments">
              {bottomCard.commitments.map((item) => (
                <span key={item}>
                  <span aria-hidden="true">✓</span>
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </Reveal>
      ) : null}
    </SectionShell>
  );
}
