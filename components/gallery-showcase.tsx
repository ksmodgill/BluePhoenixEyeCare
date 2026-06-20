"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { siteConfig } from "@/lib/site";

const galleryItems = [
  {
    title: "Optical Showcase Display",
    category: "Optical Showcase",
    image: "/images/Showcase Main Image.webp",
    alt: "Premium optical showcase display at Blue Phoenix Eye Care and Opticals",
    size: "large"
  },
  {
    title: "Advanced Eye Testing Equipment",
    category: "Equipment",
    image: "/images/Equipment-image-1.webp",
    alt: "Modern eye testing equipment at Blue Phoenix Eye Care and Opticals",
    size: "tall"
  },
  {
    title: "Diagnostic Equipment Setup",
    category: "Equipment",
    image: "/images/Equipment-image-2.webp",
    alt: "Professional diagnostic equipment for eye examination in Kulasekharam",
    size: "medium"
  },
  {
    title: "Eye Examination Room",
    category: "Examination Room",
    image: "/images/Examination Room.webp",
    alt: "Eye examination room at Blue Phoenix Eye Care and Opticals",
    size: "wide"
  },
  {
    title: "Premium Glasses Showcase",
    category: "Optical Showcase",
    image: "/images/Glasses Showcase 1.webp",
    alt: "Premium glasses showcase at Blue Phoenix Opticals",
    size: "medium"
  },
  {
    title: "Designer Frame Collection",
    category: "Optical Showcase",
    image: "/images/Glasses Showcase 2.webp",
    alt: "Designer frame collection in Kulasekharam optical store",
    size: "medium"
  },
  {
    title: "Eyewear Display Wall",
    category: "Optical Showcase",
    image: "/images/Glasses-Showcase-3.webp",
    alt: "Eyewear display wall with premium optical frames",
    size: "wide"
  },
  {
    title: "Modern Frame Selection",
    category: "Optical Showcase",
    image: "/images/Glasses Showcase 4.webp",
    alt: "Modern optical frame selection at Blue Phoenix Eye Care and Opticals",
    size: "medium"
  },
  {
    title: "Stylish Eyewear Collection",
    category: "Optical Showcase",
    image: "/images/Glasses Showcase 5.webp",
    alt: "Stylish eyewear collection at Blue Phoenix Opticals",
    size: "tall"
  },
  {
    title: "Clinic Exterior View",
    category: "Clinic Exterior",
    image: "/images/Outer Clinic View.webp",
    alt: "Outer clinic view of Blue Phoenix Eye Care and Opticals in Kulasekharam",
    size: "medium"
  },
  {
    title: "Blue Phoenix Storefront",
    category: "Clinic Exterior",
    image: "/images/Outer Clinic View 2.webp",
    alt: "Blue Phoenix Eye Care and Opticals storefront exterior",
    size: "wide"
  },
  {
    title: "Reception and Patient Welcome Area",
    category: "Reception",
    image: "/images/Reception Image main.webp",
    alt: "Reception area at Blue Phoenix Eye Care and Opticals",
    size: "medium"
  }
] as const;

const categories = ["All", "Equipment", "Examination Room", "Optical Showcase", "Clinic Exterior", "Reception"] as const;

const showcaseSections = [
  {
    title: "Eye Testing Facilities",
    content:
      "Advanced diagnostic tools help support accurate eye examinations and early detection of vision-related concerns.",
    items: ["Eye Testing Equipment", "Diagnostic Setup", "Vision Assessment", "Examination Room"]
  },
  {
    title: "Premium Optical Collection",
    content:
      "Discover stylish and functional eyewear solutions selected for comfort, durability and visual clarity.",
    items: ["Glasses Showcase", "Designer Frames", "Anti-Glare Lenses", "Blue Cut Lenses", "Sunglasses"]
  },
  {
    title: "Comfortable Patient Experience",
    content:
      "We aim to create a welcoming environment where patients feel comfortable and informed throughout their visit.",
    items: ["Reception Area", "Clinic Exterior", "Patient Welcome", "Friendly Staff Interaction"]
  }
];

const highlightBadges = [
  "🏥 Modern Eye Testing Facility",
  "👓 Premium Eyewear Collection",
  "🔬 Advanced Diagnostic Equipment",
  "❤️ Personalized Patient Care",
  "⭐ Highly Rated by Patients"
];

const opticalCollection = [
  {
    title: "Optical Frames",
    image: "/images/services/Premium Optical Frames.jpg",
    description: "Premium frame styles selected for daily comfort, durability and confidence.",
    benefits: ["Comfortable fit", "Modern styles", "Durable materials"]
  },
  {
    title: "Blue Cut Lenses",
    image: "/images/services/Blue Cut Lenses.jpg",
    description: "Lens options designed for people who spend long hours on digital screens.",
    benefits: ["Screen comfort", "Daily visual ease", "Clearer workdays"]
  },
  {
    title: "Anti-Glare Glasses",
    image: "/images/services/Anti-Glare Glasses.jpg",
    description: "Lens solutions that help improve clarity by reducing distracting reflections.",
    benefits: ["Reduced glare", "Sharper clarity", "Better night comfort"]
  },
  {
    title: "Contact Lenses",
    image: "/images/services/Contact Lens Consultation.jpg",
    description: "Professional contact lens guidance for comfort, hygiene and confident use.",
    benefits: ["Lens selection", "Fit guidance", "Safe usage"]
  },
  {
    title: "Protective Sunglasses",
    image: "/images/Glasses Showcase 5.webp",
    description: "Outdoor eyewear options that pair visual comfort with practical protection.",
    benefits: ["Outdoor comfort", "UV protection", "Stylish designs"]
  }
];

type GalleryItem = (typeof galleryItems)[number];

export function GalleryShowcase() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return galleryItems;
    }

    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="gallery-showcase">
      <div className="gallery-tabs" aria-label="Gallery image categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => {
              setActiveCategory(category);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-masonry" aria-live="polite">
        {filteredItems.length ? (
          filteredItems.map((item) => (
            <GalleryTile key={`${item.title}-${item.category}-${item.image}`} item={item} />
          ))
        ) : (
          <p className="gallery-empty">No images in this category yet.</p>
        )}
      </div>

      <div className="gallery-section-cards">
        {showcaseSections.map((section) => (
          <article key={section.title} className="gallery-info-card">
            <h3>{section.title}</h3>
            <p>{section.content}</p>
            <div>
              {section.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="gallery-highlight-strip" aria-label="Clinic visual highlights">
        {highlightBadges.map((badge) => (
          <span key={badge}>{badge}</span>
        ))}
      </div>

      <section className="optical-showcase" aria-labelledby="optical-showcase-title">
        <div className="optical-showcase__header">
          <span className="eyebrow">Explore Our Optical Collection</span>
          <h3 id="optical-showcase-title">Eyewear Designed for Comfort, Clarity & Style</h3>
        </div>
        <div className="optical-showcase__scroller">
          {opticalCollection.slice(0, 4).map((item) => (
            <article key={item.title} className="optical-card">
              <div className="optical-card__image">
                <Image
                  src={item.image}
                  width={520}
                  height={420}
                  loading="lazy"
                  sizes="(max-width: 760px) 78vw, 360px"
                  alt={`${item.title} at Blue Phoenix Eye Care and Opticals`}
                />
              </div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <ul>
                  {item.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <article className="gallery-trust-banner">
        <div>
          <span className="eyebrow">Professional Vision Care</span>
          <h3>Your Vision Deserves Professional Care</h3>
          <p>
            From comprehensive eye examinations to premium eyewear solutions, we focus on helping
            patients achieve clearer and more comfortable vision.
          </p>
        </div>
        <div className="gallery-trust-banner__actions">
          <ButtonLink href={siteConfig.callHref} aria-label="Call Blue Phoenix">
            Call Now <span className="button__arrow" aria-hidden="true">→</span>
          </ButtonLink>
          <ButtonLink
            href={siteConfig.whatsappHref}
            variant="secondary"
            aria-label="WhatsApp Blue Phoenix"
          >
            WhatsApp Us <span className="button__arrow" aria-hidden="true">→</span>
          </ButtonLink>
        </div>
      </article>

      <article className="gallery-seo-block">
        <h3>Modern Eye Care Clinic in Kulasekharam</h3>
        <p>
          Blue Phoenix Eye Care & Opticals is designed for patients seeking a clean, professional
          Eye Care Clinic in Kulasekharam with dependable Eye Testing, Vision Care, Contact Lenses,
          Premium Eyewear and Optical Store support.
        </p>
        <p>
          Our gallery highlights spaces created for comfortable Eye Examination, Retina Screening,
          optical guidance and patient-focused care, helping families feel confident before they
          visit.
        </p>
      </article>

    </div>
  );
}

function GalleryTile({
  item
}: {
  item: GalleryItem;
}) {
  return (
    <article
      className={`gallery-tile gallery-tile--${item.size}`}
    >
      <Image
        src={item.image}
        width={760}
        height={620}
        loading="lazy"
        sizes="(max-width: 760px) 86vw, (max-width: 1024px) 45vw, 390px"
        alt={item.alt}
      />
      <span>
        <strong>{item.title}</strong>
      </span>
    </article>
  );
}
