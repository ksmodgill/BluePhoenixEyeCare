import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

type SectionShellProps = {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  tone?: "white" | "gray" | "navy";
  align?: "left" | "center";
};

export function SectionShell({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "white",
  align = "center"
}: SectionShellProps) {
  return (
    <section id={id} className={`section section--${tone}`}>
      <div className="container">
        <Reveal className={`section__header section__header--${align}`}>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </Reveal>
        <div className="section__content">{children}</div>
      </div>
    </section>
  );
}
