import { getImageUrl } from "./image";
import type { HeaderData, SanityImage, SiteSettings } from "./types";

export function resolveBrandImage(
  settings: SiteSettings,
  header?: HeaderData,
  fallback = "/images/Logo.png",
  width = 640
): string {
  const override = getImageUrl(header?.logoOverride, width);
  const logo = getImageUrl(settings.logo, width);
  return override || logo || fallback;
}

export function resolveFaviconUrl(settings: SiteSettings, fallback = "/images/Favicon.png"): string {
  return getImageUrl(settings.favicon) || fallback;
}

export function resolveSectionImageStrict(
  image?: SanityImage,
  imagePath?: string,
  fallback?: string
): string | null {
  const sanityUrl = getImageUrl(image);
  if (sanityUrl) return sanityUrl;
  if (imagePath) return imagePath;
  return fallback ?? null;
}
