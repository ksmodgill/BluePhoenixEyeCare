"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { CtaButtonLink } from "@/components/cms/cta-button-link";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { resolveSectionImage } from "@/lib/sanity/image-helpers";
import type { GalleryItemData, GallerySectionData, SiteSettings } from "@/lib/sanity/types";

type Props = {
  data: GallerySectionData;
  settings: SiteSettings;
};

function GalleryTile({ item }: { item: GalleryItemData & { src: string } }) {
  return (
    <article className={`gallery-card gallery-card--${item.size || "medium"}`}>
      <Image
        src={item.src}
        width={640}
        height={480}
        loading="lazy"
        sizes="(max-width: 760px) 92vw, (max-width: 1200px) 44vw, 420px"
        alt={item.alt || item.title}
      />
      <div className="gallery-card__overlay">
        <strong>{item.title}</strong>
      </div>
    </article>
  );
}

export function GallerySectionCms({ data, settings }: Props) {
  const categories = data.categories || ["All"];
  const [activeCategory, setActiveCategory] = useState(categories[0] || "All");

  const items = useMemo(
    () =>
      (data.galleryItems || []).map((item) => ({
        ...item,
        src: resolveSectionImage(item.image, item.imagePath, "/images/hero.png")
      })),
    [data.galleryItems]
  );

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return items;
    }

    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  const { header } = data;

  return (
    <SectionShell
      id={header.sectionId}
      eyebrow={header.eyebrow}
      title={header.title}
      intro={header.intro}
      tone="gray"
    >
      <Reveal>
        <div className="gallery-showcase">
          <div className="gallery-tabs" aria-label="Gallery image categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="gallery-masonry" aria-live="polite">
            {filteredItems.map((item) => (
              <GalleryTile key={item.title} item={item} />
            ))}
          </div>

          {data.showcaseBlocks?.map((block) => (
            <div key={block.title} className="gallery-showcase__section">
              <h3>{block.title}</h3>
              {block.content ? <p>{block.content}</p> : null}
              {block.items?.length ? (
                <div className="gallery-showcase__tags">
                  {block.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              ) : null}
            </div>
          ))}

          {data.highlightBadges?.length ? (
            <div className="gallery-trust-badges">
              {data.highlightBadges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
          ) : null}

          {data.trustBanner ? (
            <div className="gallery-trust-banner">
              {data.trustBanner.eyebrow ? <span className="eyebrow">{data.trustBanner.eyebrow}</span> : null}
              {data.trustBanner.heading ? <h3>{data.trustBanner.heading}</h3> : null}
              {data.trustBanner.description ? <p>{data.trustBanner.description}</p> : null}
              <CtaButtonLink cta={data.trustBanner.primaryCta} settings={settings} />
            </div>
          ) : null}
        </div>
      </Reveal>
    </SectionShell>
  );
}
