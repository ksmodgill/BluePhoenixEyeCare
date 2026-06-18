"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { GalleryLightbox } from "@/components/cms/gallery-lightbox";
import { CtaButtonLink } from "@/components/cms/cta-button-link";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { resolveSectionImage } from "@/lib/sanity/image-helpers";
import type { GalleryItemData, GallerySectionData, SiteSettings } from "@/lib/sanity/types";

type Props = {
  data: GallerySectionData;
  settings: SiteSettings;
};

type GalleryTileItem = GalleryItemData & { src: string };

function GalleryTile({ item, onOpen }: { item: GalleryTileItem; onOpen: () => void }) {
  return (
    <article className={`gallery-tile gallery-tile--${item.size || "medium"}`}>
      <button type="button" className="gallery-tile__trigger" onClick={onOpen} aria-label={`View ${item.title}`}>
        <Image
          src={item.src}
          width={760}
          height={620}
          loading="lazy"
          sizes="(max-width: 760px) 86vw, (max-width: 1024px) 45vw, 390px"
          alt={item.alt || item.title}
        />
      </button>
      <span>
        <strong>{item.title}</strong>
      </span>
    </article>
  );
}

export function GallerySectionCms({ data, settings }: Props) {
  const categories = data.categories || ["All"];
  const [activeCategory, setActiveCategory] = useState(categories[0] || "All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

  useEffect(() => {
    setLightboxIndex(null);
  }, [activeCategory]);

  const lightboxItems = useMemo(
    () =>
      filteredItems.map((item) => ({
        src: item.src,
        title: item.title,
        alt: item.alt || item.title
      })),
    [filteredItems]
  );

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
            {filteredItems.map((item, index) => (
              <GalleryTile
                key={`${item.title}-${item.category}`}
                item={item}
                onOpen={() => setLightboxIndex(index)}
              />
            ))}
          </div>

          {data.showcaseBlocks?.length ? (
            <div className="gallery-section-cards">
              {data.showcaseBlocks.map((block) => (
                <article key={block.title} className="gallery-info-card">
                  <h3>{block.title}</h3>
                  {block.content ? <p>{block.content}</p> : null}
                  {block.items?.length ? (
                    <div>
                      {block.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          ) : null}

          {data.highlightBadges?.length ? (
            <div className="gallery-highlight-strip" aria-label="Clinic visual highlights">
              {data.highlightBadges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
          ) : null}

          {data.trustBanner ? (
            <article className="gallery-trust-banner">
              <div>
                {data.trustBanner.eyebrow ? <span className="eyebrow">{data.trustBanner.eyebrow}</span> : null}
                {data.trustBanner.heading ? <h3>{data.trustBanner.heading}</h3> : null}
                {data.trustBanner.description ? <p>{data.trustBanner.description}</p> : null}
              </div>
              {data.trustBanner.primaryCta ? (
                <div className="gallery-trust-banner__actions">
                  <CtaButtonLink cta={data.trustBanner.primaryCta} settings={settings} />
                </div>
              ) : null}
            </article>
          ) : null}
        </div>
      </Reveal>

      <GalleryLightbox
        items={lightboxItems}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </SectionShell>
  );
}
