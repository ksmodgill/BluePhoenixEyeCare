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
  const landlineHref = settings.secondaryPhone ? buildCallHref(settings.secondaryPhone) : undefined;
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
              <div className="contact-detail-top">
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

              <article className="contact-detail-card contact-detail-card--numbers">
                <span aria-hidden="true"><ContactIcon name="phone" /></span>
                <div>
                  <strong>Contact Numbers</strong>
                  <dl className="contact-numbers-list">
                    <div>
                      <dt>Phone Number</dt>
                      <dd>
                        <a href={callHref} aria-label={`Call ${settings.clinicName}`}>
                          {settings.primaryPhone}
                        </a>
                      </dd>
                    </div>
                    {settings.secondaryPhone ? (
                      <div>
                        <dt>Landline Number</dt>
                        <dd>
                          <a href={landlineHref} aria-label={`Call ${settings.clinicName} landline`}>
                            {settings.secondaryPhone}
                          </a>
                        </dd>
                      </div>
                    ) : null}
                    <div>
                      <dt>WhatsApp</dt>
                      <dd>
                        <a
                          href={whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`WhatsApp ${settings.clinicName}`}
                        >
                          {settings.whatsappNumber}
                        </a>
                      </dd>
                    </div>
                  </dl>
                  <p className="contact-numbers-note">
                    Call, WhatsApp or landline for appointments, eye testing, contact lens guidance and eyewear support.
                  </p>
                </div>
              </article>
              </div>

              <div className="contact-detail-bottom">
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
                    <p className="contact-rating-score">{data.googleRatingText || "5.0 ★ · Local patient feedback"}</p>
                    <ul className="contact-rating-highlights">
                      {(data.googleRatingHighlights?.length
                        ? data.googleRatingHighlights
                        : [
                            "5-star rated by local patients",
                            "Trusted eye care clinic in Kulasekharam",
                            "Verified Google Business listing",
                            "Read genuine patient reviews online"
                          ]
                      ).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <span className="contact-rating-link">View patient reviews on Google →</span>
                  </div>
                </a>
              </div>
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
