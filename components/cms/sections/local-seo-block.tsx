import { Reveal } from "@/components/reveal";
import { RichText } from "@/components/cms/rich-text";
import type { LocalSeoBlockData } from "@/lib/sanity/types";

type Props = {
  data: LocalSeoBlockData;
};

export function LocalSeoBlockCms({ data }: Props) {
  return (
    <Reveal className="services-seo-block eye-problems-seo contact-seo-block" delay={0.14}>
      <h3>{data.heading}</h3>
      <RichText value={data.content} paragraphs={data.plainParagraphs} />
    </Reveal>
  );
}
