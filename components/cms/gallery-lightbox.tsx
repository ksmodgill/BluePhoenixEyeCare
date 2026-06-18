"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type GalleryLightboxItem = {
  src: string;
  title: string;
  alt: string;
};

type GalleryLightboxProps = {
  items: GalleryLightboxItem[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function GalleryLightbox({ items, activeIndex, onClose, onNavigate }: GalleryLightboxProps) {
  const [mounted, setMounted] = useState(false);
  const isOpen = activeIndex !== null && items[activeIndex] !== undefined;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isOpen || activeIndex === null) {
        return;
      }

      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight" && items.length > 1) {
        onNavigate((activeIndex + 1) % items.length);
      }

      if (event.key === "ArrowLeft" && items.length > 1) {
        onNavigate((activeIndex - 1 + items.length) % items.length);
      }
    },
    [activeIndex, isOpen, items.length, onClose, onNavigate]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown, isOpen]);

  if (!mounted || !isOpen || activeIndex === null) {
    return null;
  }

  const item = items[activeIndex];
  const showNav = items.length > 1;

  return createPortal(
    <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={item.title}>
      <button
        type="button"
        className="gallery-lightbox__backdrop"
        onClick={onClose}
        aria-label="Close gallery preview"
      />

      <div className="gallery-lightbox__panel">
        <button type="button" className="gallery-lightbox__close" onClick={onClose} aria-label="Close">
          ×
        </button>

        {showNav ? (
          <button
            type="button"
            className="gallery-lightbox__nav gallery-lightbox__nav--prev"
            onClick={() => onNavigate((activeIndex - 1 + items.length) % items.length)}
            aria-label="Previous image"
          >
            ‹
          </button>
        ) : null}

        <figure className="gallery-lightbox__figure">
          <Image
            src={item.src}
            alt={item.alt}
            width={1400}
            height={1050}
            className="gallery-lightbox__image"
            sizes="min(92vw, 1200px)"
            priority
          />
          <figcaption>{item.title}</figcaption>
        </figure>

        {showNav ? (
          <button
            type="button"
            className="gallery-lightbox__nav gallery-lightbox__nav--next"
            onClick={() => onNavigate((activeIndex + 1) % items.length)}
            aria-label="Next image"
          >
            ›
          </button>
        ) : null}

        {showNav ? (
          <p className="gallery-lightbox__counter" aria-live="polite">
            {activeIndex + 1} / {items.length}
          </p>
        ) : null}
      </div>
    </div>,
    document.body
  );
}
