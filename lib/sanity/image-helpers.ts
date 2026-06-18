import { getImageUrl } from "@/lib/sanity/image";
import type { SanityImage } from "@/lib/sanity/types";

export function resolveSectionImage(
  image?: SanityImage,
  imagePath?: string,
  fallback = "/images/hero.png"
) {
  return getImageUrl(image) || imagePath || fallback;
}
