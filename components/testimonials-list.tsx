"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";

type Testimonial = {
  name: string;
  text: string;
};

type TestimonialsListProps = {
  initialReviews: readonly Testimonial[];
  moreReviews: readonly Testimonial[];
  aggregateBadge?: string;
};

export function TestimonialsList({
  initialReviews,
  moreReviews,
  aggregateBadge = "Rated by Local Patients"
}: TestimonialsListProps) {
  const [showAll, setShowAll] = useState(false);

  const visibleReviews = useMemo(
    () => (showAll ? [...initialReviews, ...moreReviews] : [...initialReviews]),
    [initialReviews, moreReviews, showAll]
  );

  return (
    <div className="testimonials-showcase">
      <div className="testimonials-badge" aria-label="Five star rated by local patients">
        <span className="review-stars" aria-hidden="true">★★★★★</span>
        <strong>{aggregateBadge}</strong>
      </div>

      <div className="testimonials-grid" aria-live="polite">
        {visibleReviews.map((review, index) => {
          const isNewlyLoaded = showAll && index >= initialReviews.length;
          const style = {
            "--testimonial-delay": `${Math.min(index, 8) * 0.045}s`
          } as CSSProperties;

          return (
            <article
              className={["testimonial-card", isNewlyLoaded ? "testimonial-card--new" : ""]
                .filter(Boolean)
                .join(" ")}
              key={`${review.name}-${index}`}
              style={style}
            >
              <span className="testimonial-card__quote" aria-hidden="true">&ldquo;</span>
              <div className="review-stars" aria-label="5 star rating">
                ★★★★★
              </div>
              <p>&ldquo;{review.text}&rdquo;</p>
              <footer>
                <strong>{review.name}</strong>
              </footer>
            </article>
          );
        })}
      </div>

      {!showAll ? (
        <div className="testimonials-actions">
          <button
            className="testimonials-load-more"
            type="button"
            aria-expanded={showAll}
            onClick={() => setShowAll(true)}
          >
            Load More Reviews
            <span aria-hidden="true">↓</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
