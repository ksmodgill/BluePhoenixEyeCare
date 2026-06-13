import type { CSSProperties } from "react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const classes = ["reveal-on-scroll", className].filter(Boolean).join(" ");
  const style = delay ? ({ "--reveal-delay": `${delay}s` } as CSSProperties) : undefined;

  return <div className={classes} style={style}>{children}</div>;
}
