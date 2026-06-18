import Image from "next/image";
import type { ReactNode } from "react";
import { CtaButtonLink } from "@/components/cms/cta-button-link";
import { RichText } from "@/components/cms/rich-text";
import { NavLink } from "@/components/cms/nav-link";
import { resolveBrandImage } from "@/lib/sanity/brand";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { ContactIcon } from "@/components/sections";
import { buildCallHref, buildWhatsappHref } from "@/lib/sanity/resolveCta";
import { footerDeveloperCredit } from "@/lib/site-credit";
import { FooterSocialLinks } from "@/components/cms/footer-social-links";
import type { ContactSectionData, FooterData, HeaderData, SiteSettings } from "@/lib/sanity/types";

type Props = {
  data: ContactSectionData;
  settings: SiteSettings;
  header?: HeaderData;
  footer?: FooterData;
  footerSlot?: ReactNode;
};

export function ContactSectionCms({ data, settings, header, footer, footerSlot }: Props) {
  const { header: sectionHeader } = data;
  const callHref = buildCallHref(settings.primaryPhone);
  const whatsappHref = buildWhatsappHref(settings.whatsappNumber, settings.whatsappDefaultMessage);
  const logoSrc = resolveBrandImage(settings, header);

  return (
    <>
      <SectionShell
        id={sectionHeader.sectionId}
        eyebrow={sectionHeader.eyebrow}
        title={sectionHeader.title}
        intro={sectionHeader.intro}
        tone="white"
      >
        <div className="final-contact-grid">
          <Reveal className="contact-info-card">
            <div className="contact-info-card__header">
              <div>
                <span className="eyebrow">Clinic Details</span>
                <h3>{data.clinicHeading || settings.clinicName}</h3>
                {data.clinicIntro ? <p className="contact-info-card__intro">{data.clinicIntro}</p> : null}
              </div>
              <div className="contact-primary-actions">
                <CtaButtonLink
                  cta={{ ...data.primaryCta, size: "lg" }}
                  settings={settings}
                />
                <CtaButtonLink
                  cta={{ ...data.secondaryCta, size: "lg" }}
                  settings={settings}
                />
              </div>
            </div>

            <div className="contact-detail-list">
              <article className="contact-detail-card contact-detail-card--address">
                <span aria-hidden="true"><ContactIcon name="location" /></span>
                <div>
                  <strong>Clinic Address</strong>
                  <p>
                    {settings.addressLines?.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </article>
              <article className="contact-detail-card">
                <span aria-hidden="true"><ContactIcon name="phone" /></span>
                <div>
                  <strong>Phone Number</strong>
                  <p>
                    <a href={callHref} aria-label={`Call ${settings.clinicName}`}>
                      {settings.primaryPhone}
                    </a>
                  </p>
                </div>
              </article>
              <a
                className="contact-detail-card"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp ${settings.clinicName}`}
              >
                <span aria-hidden="true"><ContactIcon name="whatsapp" /></span>
                <div>
                  <strong>WhatsApp</strong>
                  <p>{settings.whatsappNumber}</p>
                </div>
              </a>
              <article className="contact-detail-card contact-detail-card--hours">
                <span aria-hidden="true"><ContactIcon name="clock" /></span>
                <div>
                  <strong>Clinic Hours</strong>
                  <dl className="contact-hours-list">
                    {settings.weeklySchedule?.map((item) => (
                      <div key={item.day}>
                        <dt>{item.day}</dt>
                        <dd>{item.closed ? "Closed" : item.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
              <a
                className="contact-detail-card contact-detail-card--rating"
                href={settings.googleReviewsUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${settings.clinicName} Google Business profile`}
              >
                <span aria-hidden="true"><ContactIcon name="star" /></span>
                <div>
                  <strong>{data.googleRatingLabel || "Google Rating"}</strong>
                  <p>
                    {data.googleRatingText || "5.0"}{" "}
                    <span className="rating-star">★</span> · Local patient feedback
                  </p>
                </div>
              </a>
            </div>

            {data.assuranceItems?.length ? (
              <div className="contact-assurance-list" aria-label="Contact support highlights">
                {data.assuranceItems.map((item) => (
                  <span key={item}>✓ {item}</span>
                ))}
              </div>
            ) : null}

            {data.miniServices?.length ? (
              <div className="contact-mini-services" aria-label="Common contact reasons">
                {data.miniServices.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            ) : null}
          </Reveal>
        </div>

        <Reveal className="map-section" delay={0.1}>
          {data.mapEyebrow ? <span className="eyebrow">{data.mapEyebrow}</span> : null}
          {data.mapHeading ? <h3>{data.mapHeading}</h3> : null}
          <div className="map-location-strip">
            <strong>
              <ContactIcon name="location" /> {data.mapStripLabels?.[0] || settings.clinicName}
            </strong>
            {data.mapStripLabels?.slice(1).map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
          {settings.mapEmbedUrl ? (
            <iframe
              title={`${settings.clinicName} location map`}
              src={settings.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : null}
        </Reveal>

        {data.localSeo ? (
          <Reveal className="contact-seo-block" delay={0.18}>
            <h3>{data.localSeo.heading}</h3>
            <RichText value={data.localSeo.content} paragraphs={data.localSeo.plainParagraphs} />
          </Reveal>
        ) : null}
      </SectionShell>

      {footer ? (
        <footer className="site-footer">
          <div className="container site-footer__grid">
            <div>
              <a className="brand brand--image brand--footer" href="#home" aria-label={`${settings.clinicName} home`}>
                <Image
                  src={logoSrc}
                  width={300}
                  height={82}
                  loading="lazy"
                  sizes="(max-width: 760px) 220px, 300px"
                  alt={settings.logo?.alt || `${settings.clinicName} logo`}
                  className="brand__logo"
                />
              </a>
              <p>{footer.description}</p>
              <FooterSocialLinks settings={settings} />
            </div>
            <div>
              <h3>Quick Links</h3>
              {footer.quickLinks?.map((item) => (
                <NavLink key={item.label} item={item} />
              ))}
            </div>
            <div>
              <h3>Services</h3>
              {footer.serviceLinks?.map((service) => (
                <a key={service} href="#services">
                  {service}
                </a>
              ))}
            </div>
            <div>
              <h3>Contact</h3>
              <p>{settings.addressLines?.join(" ")}</p>
              <a href={callHref}>{settings.primaryPhone}</a>
              {settings.googleReviewsUrl ? (
                <a href={settings.googleReviewsUrl}>Google Reviews</a>
              ) : null}
            </div>
          </div>
          <div className="container site-footer__bottom">
            <span>{footer.copyrightText}</span>
            <a
              className="site-footer__credit"
              href={footerDeveloperCredit.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {footerDeveloperCredit.label}
            </a>
          </div>
        </footer>
      ) : (
        footerSlot
      )}
    </>
  );
}
