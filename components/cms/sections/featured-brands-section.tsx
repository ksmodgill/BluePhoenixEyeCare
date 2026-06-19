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
    <section className="featured-brands" aria-labelledby="featured-brands-title">
      <h2 id="featured-brands-title" className="featured-brands__title">
        Featured Brand
      </h2>
      <div className="featured-brands__viewport">
        <div className="featured-brands__track">
          {loop.map((brand, index) => (
            <div className="featured-brands__slide" key={`${brand.key}-${index}`}>
              <Image
                src={brand.src}
                alt={brand.alt}
                width={250}
                height={80}
                className="featured-brands__logo"
                sizes="(max-width: 760px) 150px, 250px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
