import Image from "next/image";
import { CtaButtonLink } from "@/components/cms/cta-button-link";
import { RichText } from "@/components/cms/rich-text";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { ServiceIcon } from "@/components/sections";
import { resolveSectionImage } from "@/lib/sanity/image-helpers";
import type { ServicesSectionData, SiteSettings } from "@/lib/sanity/types";

type Props = {
  data: ServicesSectionData;
  settings: SiteSettings;
};

export function ServicesSectionCms({ data, settings }: Props) {
  const { header } = data;

  return (
    <SectionShell
      id={header.sectionId}
      eyebrow={header.eyebrow}
      title={header.title}
      intro={header.intro}
      tone="gray"
      align={header.align || "center"}
    >
      <div className="services-grid">
        {data.services?.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.04}>
            <article className="service-card">
              {service.badge ? <span className="service-card__badge">{service.badge}</span> : null}
              <div className="service-card__image">
                <Image
                  src={resolveSectionImage(service.image, service.imagePath, "/images/hero.png")}
                  width={520}
                  height={420}
                  loading="lazy"
                  sizes="(max-width: 760px) 92vw, (max-width: 1024px) 44vw, 360px"
                  alt={service.image?.alt || service.title}
                />
              </div>
              <div className="service-card__top">
                <div className="service-card__icon">
                  <ServiceIcon name={service.icon || "eye"} />
                </div>
                <h3>{service.title}</h3>
              </div>
              <div className="service-card__content">
                <p>{service.description}</p>
              </div>
              {service.benefits?.length ? (
                <ul className="service-card__benefits" aria-label={`${service.title} benefits`}>
                  {service.benefits.map((benefit) => (
                    <li key={benefit}>
                      <span aria-hidden="true">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              ) : null}
              {service.seoLine ? <p className="service-card__seo">{service.seoLine}</p> : null}
              <CtaButtonLink
                cta={service.cta}
                settings={settings}
                className="service-card__cta"
                aria-label={`${service.cta?.label || "Ask on WhatsApp"} for ${service.title}`}
              />
            </article>
          </Reveal>
        ))}
      </div>
      {data.conversionBanner ? (
        <Reveal className="services-conversion-banner" delay={0.12}>
          <div>
            {data.conversionBanner.eyebrow ? (
              <span className="eyebrow">{data.conversionBanner.eyebrow}</span>
            ) : null}
            {data.conversionBanner.heading ? <h3>{data.conversionBanner.heading}</h3> : null}
            {data.conversionBanner.description ? <p>{data.conversionBanner.description}</p> : null}
          </div>
          <div className="services-conversion-banner__actions">
            <CtaButtonLink cta={data.conversionBanner.primaryCta} settings={settings} />
            <CtaButtonLink cta={data.conversionBanner.secondaryCta} settings={settings} />
          </div>
        </Reveal>
      ) : null}
      {data.localSeo ? (
        <Reveal className="services-seo-block" delay={0.14}>
          <h3>{data.localSeo.heading}</h3>
          <RichText value={data.localSeo.content} paragraphs={data.localSeo.plainParagraphs} />
        </Reveal>
      ) : null}
    </SectionShell>
  );
}
