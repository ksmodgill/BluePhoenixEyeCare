import { createImageUrlBuilder } from "@sanity/image-url";
import { sanityClient } from "./client";
import type { SanityImage } from "./types";

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: SanityImage) {
  return builder.image(source);
}

export function getImageUrl(source: SanityImage | null | undefined, width?: number): string | null {
  if (!source?.asset) {
    return null;
  }

  if (source.asset.url) {
    return source.asset.url;
  }

  let image = urlFor(source).auto("format").quality(85);

  if (width) {
    image = image.width(width);
  }

  return image.url();
}

export function getImageSrcOrFallback(
  source: SanityImage | null | undefined,
  fallback: string,
  width?: number
): string {
  return getImageUrl(source, width) ?? fallback;
}
