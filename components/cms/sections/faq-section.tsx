import { CtaButtonLink } from "@/components/cms/cta-button-link";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import type { FaqSectionData, SiteSettings } from "@/lib/sanity/types";

type Props = {
  data: FaqSectionData;
  settings: SiteSettings;
};

export function FaqSectionCms({ data, settings }: Props) {
  const { header, bottomCta } = data;

  return (
    <SectionShell
      id={header.sectionId}
      eyebrow={header.eyebrow}
      title={header.title}
      intro={header.intro}
      tone="gray"
    >
      <Reveal className="faq-list">
        {data.faqs?.map((faq) => (
          <details key={faq.question} className="faq-item">
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </Reveal>
      {bottomCta ? (
        <Reveal className="faq-conversion-card" delay={0.08}>
          <div>
            {bottomCta.eyebrow ? <span className="eyebrow">{bottomCta.eyebrow}</span> : null}
            {bottomCta.heading ? <h3>{bottomCta.heading}</h3> : null}
          </div>
          <CtaButtonLink cta={bottomCta.cta} settings={settings} />
        </Reveal>
      ) : null}
    </SectionShell>
  );
}
