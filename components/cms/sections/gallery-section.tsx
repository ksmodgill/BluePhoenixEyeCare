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

type GalleryTileItem = GalleryItemData & { src: string; id: string };

function normalizeCategory(value: string | undefined) {
  return (value || "").trim().toLowerCase();
}

function buildCategories(items: GalleryItemData[], cmsCategories?: string[]) {
  const fromCms = (cmsCategories || []).map((category) => category.trim()).filter(Boolean);
  const withoutAll = fromCms.filter((category) => normalizeCategory(category) !== "all");
  const categories = ["All", ...withoutAll];

  for (const item of items) {
    const category = item.category?.trim();
    if (!category) {
      continue;
    }

    if (!categories.some((entry) => normalizeCategory(entry) === normalizeCategory(category))) {
      categories.push(category);
    }
  }

  return categories;
}

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
  const items = useMemo(
    () =>
      (data.galleryItems || []).map((item, index) => ({
        ...item,
        id: item._key || `${item.title}-${item.category}-${index}`,
        src: resolveSectionImage(item.image, item.imagePath, "/images/hero.png")
      })),
    [data.galleryItems]
  );

  const categories = useMemo(() => buildCategories(data.galleryItems || [], data.categories), [data.categories, data.galleryItems]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!categories.some((category) => normalizeCategory(category) === normalizeCategory(activeCategory))) {
      setActiveCategory("All");
    }
  }, [activeCategory, categories]);

  const filteredItems = useMemo(() => {
    if (normalizeCategory(activeCategory) === "all") {
      return items;
    }

    return items.filter(
      (item) => normalizeCategory(item.category) === normalizeCategory(activeCategory)
    );
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
                aria-pressed={normalizeCategory(activeCategory) === normalizeCategory(category)}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="gallery-masonry" aria-live="polite">
            {filteredItems.length ? (
              filteredItems.map((item, index) => (
                <GalleryTile
                  key={item.id}
                  item={item}
                  onOpen={() => setLightboxIndex(index)}
                />
              ))
            ) : (
              <p className="gallery-empty">No images in this category yet.</p>
            )}
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
