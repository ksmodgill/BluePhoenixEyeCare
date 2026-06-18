import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { TestimonialsList } from "@/components/testimonials-list";
import type { ReviewsSectionData } from "@/lib/sanity/types";

type Props = {
  data: ReviewsSectionData;
};

export function ReviewsSectionCms({ data }: Props) {
  const { header } = data;
  const reviews = data.reviews || [];
  const initialCount = data.initialCount || 6;
  const initialReviews = reviews.slice(0, initialCount).map((review) => ({
    name: review.authorName,
    text: review.text
  }));
  const moreReviews = reviews.slice(initialCount).map((review) => ({
    name: review.authorName,
    text: review.text
  }));

  return (
    <SectionShell
      id={header.sectionId}
      eyebrow={header.eyebrow}
      title={header.title}
      intro={header.intro}
      tone="white"
      align={header.align || "center"}
    >
      <Reveal className="reviews-redesign">
        <TestimonialsList
          initialReviews={initialReviews}
          moreReviews={moreReviews}
          aggregateBadge={data.aggregateBadge}
        />
      </Reveal>
    </SectionShell>
  );
}
