import { PortableText } from "@portabletext/react";
import type { PortableTextValue } from "@/lib/sanity/resolveCta";

type RichTextProps = {
  value?: PortableTextValue;
  paragraphs?: string[];
};

export function RichText({ value, paragraphs }: RichTextProps) {
  if (value?.length) {
    return (
      <div className="rich-text">
        <PortableText value={value} />
      </div>
    );
  }

  if (paragraphs?.length) {
    return (
      <>
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </>
    );
  }

  return null;
}
