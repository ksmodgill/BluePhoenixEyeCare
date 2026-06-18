import { AnimatedStat } from "@/components/animated-stat";
import { CtaButtonLink } from "@/components/cms/cta-button-link";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import type { SiteSettings, TrustedVisionSectionData } from "@/lib/sanity/types";

type Props = {
  data: TrustedVisionSectionData;
  settings: SiteSettings;
};

export function TrustedVisionSectionCms({ data, settings }: Props) {
  const { header, proofCard } = data;

  return (
    <SectionShell
      id={header.sectionId}
      eyebrow={header.eyebrow}
      title={header.title}
      intro={header.intro}
      tone="white"
    >
      <div className="about-grid">
        <Reveal className="about-content">
          <div className="about-content__panel">
            {data.panelBadge ? <span className="about-content__badge">{data.panelBadge}</span> : null}
            <h3>{data.panelHeading}</h3>
            {data.panelDescription?.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            {data.highlights?.length ? (
              <div className="about-highlight-grid" aria-label="Care highlights">
                {data.highlights.map((item) => (
                  <span key={item}>
                    <span aria-hidden="true">✓</span>
                    {item}
                  </span>
                ))}
              </div>
            ) : null}
            <div className="about-actions">
              {data.panelCtas?.map((cta) => (
                <CtaButtonLink key={cta.label} cta={cta} settings={settings} />
              ))}
            </div>
          </div>
        </Reveal>

        {proofCard ? (
          <Reveal className="about-proof-card" delay={0.1}>
            <div className="about-proof-card__header">
              {proofCard.eyebrow ? <span className="eyebrow">{proofCard.eyebrow}</span> : null}
              {proofCard.heading ? <h3>{proofCard.heading}</h3> : null}
              {proofCard.description ? <p>{proofCard.description}</p> : null}
            </div>
            <div className="stats-grid about-stats-grid">
              {proofCard.stats?.map((stat) => (
                <AnimatedStat key={stat.label} {...stat} />
              ))}
            </div>
          </Reveal>
        ) : null}
      </div>
    </SectionShell>
  );
}
