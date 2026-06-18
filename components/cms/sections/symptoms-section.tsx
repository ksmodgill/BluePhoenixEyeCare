import Image from "next/image";
import { CtaButtonLink } from "@/components/cms/cta-button-link";
import { RichText } from "@/components/cms/rich-text";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { SymptomIcon } from "@/components/sections";
import { BenefitsSectionCms } from "@/components/cms/sections/benefits-section";
import { resolveSectionImage } from "@/lib/sanity/image-helpers";
import type { SiteSettings, SymptomsSectionData } from "@/lib/sanity/types";

type Props = {
  data: SymptomsSectionData;
  settings: SiteSettings;
};

export function SymptomsSectionCms({ data, settings }: Props) {
  const { header } = data;

  return (
    <SectionShell
      id={header.sectionId}
      eyebrow={header.eyebrow}
      title={header.title}
      intro={header.intro}
      tone="white"
    >
      <div className="eye-problems-grid">
        <div className="symptoms-list">
          {data.symptoms?.map((problem, index) => (
            <Reveal key={problem.title} delay={index * 0.04}>
              <article className="symptom-card">
                <div className="symptom-card__top">
                  <div className="symptom-card__icon">
                    <SymptomIcon name={problem.icon || "blurred"} />
                  </div>
                  <h3>{problem.title}</h3>
                </div>
                <div className="symptom-card__content">
                  <p>{problem.description}</p>
                  {problem.label ? <strong>{problem.label}</strong> : null}
                  {problem.tags?.length ? (
                    <ul aria-label={`${problem.title} ${problem.label?.toLowerCase() || "details"}`}>
                      {problem.tags.map((cause) => (
                        <li key={cause}>{cause}</li>
                      ))}
                    </ul>
                  ) : null}
                  <CtaButtonLink
                    cta={problem.cta}
                    settings={settings}
                    className="symptom-card__cta"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="symptom-visual" delay={0.1}>
          <div className="symptom-visual__image">
            <Image
              src={resolveSectionImage(
                data.sideImage,
                data.sideImagePath,
                "/images/Eye Problems-image.jpg"
              )}
              width={678}
              height={414}
              loading="lazy"
              sizes="(max-width: 1024px) 92vw, 520px"
              alt={data.sideImage?.alt || "Eye problems and vision strain"}
            />
          </div>
          {(data.sideCaptionTitle || data.sideCaptionText) && (
            <div className="symptom-visual__note">
              {data.sideCaptionTitle ? <strong>{data.sideCaptionTitle}</strong> : null}
              {data.sideCaptionText ? <p>{data.sideCaptionText}</p> : null}
            </div>
          )}
        </Reveal>
      </div>

      {data.visitCta ? (
        <Reveal className="warning-banner" delay={0.12}>
          <div className="warning-banner__icon">
            <SymptomIcon name="alert" />
          </div>
          <div>
            {data.visitCta.heading ? <h3>{data.visitCta.heading}</h3> : null}
            {data.visitCta.description ? <p>{data.visitCta.description}</p> : null}
            {data.visitCta.checklist?.length ? (
              <div className="warning-banner__checks">
                {data.visitCta.checklist.map((item) => (
                  <span key={item.label}>
                    <span aria-hidden="true">✓</span>
                    {item.label}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
          <CtaButtonLink cta={data.visitCta.cta} settings={settings} />
        </Reveal>
      ) : null}

      {data.benefits ? (
        <BenefitsSectionCms
          data={{
            _type: "benefitsSection",
            _id: `${data._id}-benefits`,
            variant: data.benefits.variant,
            header: data.benefits.header,
            benefits: data.benefits.benefitCards,
            checkerSymptoms: data.benefits.checkerSymptoms,
            checkerCta: data.benefits.checkerCta
          }}
          settings={settings}
        />
      ) : null}

      {data.localSeo ? (
        <Reveal className="eye-problems-seo" delay={0.16}>
          <h3>{data.localSeo.heading}</h3>
          <RichText value={data.localSeo.content} paragraphs={data.localSeo.plainParagraphs} />
        </Reveal>
      ) : null}
    </SectionShell>
  );
}
