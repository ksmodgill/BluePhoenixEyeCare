import type { PortableTextBlock } from "@portabletext/types";
import type { SiteSettings } from "./types";

export type CtaAction = "call" | "whatsapp" | "url" | "section";

export type CtaButton = {
  label?: string;
  action?: CtaAction;
  url?: string;
  sectionId?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg";
  openInNewTab?: boolean;
  whatsappMessage?: string;
};

export function buildWhatsappHref(number: string, message?: string) {
  const digits = number.replace(/\D/g, "");
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits.startsWith("91") ? digits : `91${digits}`}${text}`;
}

export function buildCallHref(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export function resolveCtaHref(cta: CtaButton | undefined, settings: SiteSettings): string {
  if (!cta) {
    return buildCallHref(settings.primaryPhone);
  }

  switch (cta.action) {
    case "call":
      return buildCallHref(settings.primaryPhone);
    case "whatsapp":
      return buildWhatsappHref(
        settings.whatsappNumber,
        cta.whatsappMessage || settings.whatsappDefaultMessage
      );
    case "section":
      return cta.sectionId ? `#${cta.sectionId}` : "#";
    case "url":
      return cta.url || "#";
    default:
      return "#";
  }
}

export function resolveSiteConfig(settings: SiteSettings) {
  const callHref = buildCallHref(settings.primaryPhone);
  const whatsappHref = buildWhatsappHref(
    settings.whatsappNumber,
    settings.whatsappDefaultMessage
  );

  return {
    name: settings.clinicName,
    url: settings.siteUrl,
    description: settings.defaultSeo?.metaDescription || "",
    contactHref: "#contact",
    phoneDisplay: settings.primaryPhone,
    whatsappDisplay: settings.whatsappNumber,
    hoursDisplay: settings.weeklySchedule
      ?.map((item) => `${item.day}: ${item.closed ? "Closed" : item.time}`)
      .join("; "),
    hoursSchedule: settings.weeklySchedule || [],
    addressLines: settings.addressLines || [],
    callHref,
    whatsappHref,
    directionsHref: settings.googleMapUrl || "#",
    googleReviewsHref: settings.googleReviewsUrl || "#",
    mapEmbedSrc: settings.mapEmbedUrl || ""
  };
}

export type PortableTextValue = PortableTextBlock[];
