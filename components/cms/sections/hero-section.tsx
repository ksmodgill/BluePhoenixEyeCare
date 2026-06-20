import Image from "next/image";
import { CtaButtonLink } from "@/components/cms/cta-button-link";
import { Reveal } from "@/components/reveal";
import { resolveSectionImage } from "@/lib/sanity/image-helpers";
import type { HeroSectionData, SiteSettings } from "@/lib/sanity/types";

type Props = {
  data: HeroSectionData;
  settings: SiteSettings;
};

export function HeroSectionCms({ data, settings }: Props) {
  const heroSrc = resolveSectionImage(data.heroImage, data.heroImagePath, "/images/hero.png");
  const strip = data.serviceStrip || [];

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__blur hero__blur--one" aria-hidden="true" />
      <div className="hero__blur hero__blur--two" aria-hidden="true" />
      <div className="container hero__grid">
        <Reveal className="hero__copy">
          <span className="eyebrow">{data.badge}</span>
          <h1 id="hero-title">
            <span>{data.headingLine1}</span>
            <span>{data.headingLine2}</span>
          </h1>
          <p>{data.description}</p>
          {data.localityNote ? <p className="hero__locality">{data.localityNote}</p> : null}
          <div className="hero__actions">
            <CtaButtonLink
              cta={{ ...data.primaryCta, size: "lg", variant: data.primaryCta?.variant || "primary" }}
              settings={settings}
              className="button--dominant"
              aria-label={`Call ${settings.clinicName}`}
            />
            <CtaButtonLink
              cta={{ ...data.secondaryCta, size: "lg", variant: data.secondaryCta?.variant || "secondary" }}
              settings={settings}
              aria-label={`WhatsApp ${settings.clinicName}`}
            />
          </div>
          {data.conversionNotes?.length ? (
            <div className="hero__conversion-note" aria-label="Quick contact reassurance">
              {data.conversionNotes.map((item) => (
                <span key={item}>✓ {item}</span>
              ))}
            </div>
          ) : null}
        </Reveal>

        <Reveal className="hero__visual md:block" delay={0.12}>
          <div className="hero__shape hero__shape--ring" aria-hidden="true" />
          <div className="hero__shape hero__shape--dot" aria-hidden="true" />
          <div className="hero__image-wrap !w-[calc(100%+1.25rem)] !-ml-2.5 rounded-2xl">
            <Image
              src={heroSrc}
              width={500}
              height={500}
              priority
              sizes="(max-width: 760px) 100vw, (max-width: 1200px) 44vw, 520px"
              alt={data.heroImage?.alt || "Professional eye care at Blue Phoenix Eye Care and Opticals"}
              className="hero__image"
            />
          </div>
        </Reveal>
      </div>

      {strip.length ? (
        <Reveal className="container hero__service-strip" delay={0.18}>
          <div className="hero__marquee" aria-label="Available eye care services">
            {[...strip, ...strip].map((item, index) => (
              <span key={`${item}-${index}`}>
                <span aria-hidden="true">✓</span>
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      ) : null}
    </section>
  );
}
