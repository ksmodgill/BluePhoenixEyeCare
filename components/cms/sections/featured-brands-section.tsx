"use client";

import Image from "next/image";
import { useMemo } from "react";
import { resolveSectionImage } from "@/lib/sanity/image-helpers";
import type { FeaturedBrandsSectionData } from "@/lib/sanity/types";

type Props = {
  data: FeaturedBrandsSectionData;
};

type BrandSlide = {
  key: string;
  src: string;
  alt: string;
};

export function FeaturedBrandsSectionCms({ data }: Props) {
  const brands = useMemo(() => {
    return (data.brands || [])
      .map((brand, index) => {
        const src = resolveSectionImage(brand.image, brand.imagePath, "");
        if (!src) {
          return null;
        }

        return {
          key: brand.image?.asset?._ref || brand.imagePath || `brand-${index}`,
          src,
          alt: brand.alt || brand.image?.alt || "Partner brand logo"
        } satisfies BrandSlide;
      })
      .filter((brand): brand is BrandSlide => Boolean(brand));
  }, [data.brands]);

  if (!brands.length) {
    return null;
  }

  const loop = [...brands, ...brands];

  return (
    <section className="featured-brands" aria-label="Featured eyewear brands">
      <div className="featured-brands__viewport">
        <div className="featured-brands__track">
          {loop.map((brand, index) => (
            <div className="featured-brands__slide" key={`${brand.key}-${index}`}>
              <Image
                src={brand.src}
                alt={brand.alt}
                width={200}
                height={64}
                className="featured-brands__logo"
                sizes="(max-width: 760px) 140px, 200px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
