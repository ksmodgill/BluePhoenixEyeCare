import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import type { CtaButton } from "@/lib/sanity/resolveCta";
import { resolveCtaHref } from "@/lib/sanity/resolveCta";
import type { SiteSettings } from "@/lib/sanity/types";

type CtaButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  cta?: CtaButton;
  settings: SiteSettings;
  children?: ReactNode;
  fallbackLabel?: string;
};

export function CtaButtonLink({
  cta,
  settings,
  children,
  fallbackLabel = "Call Now",
  className,
  ...props
}: CtaButtonLinkProps) {
  const label = cta?.label || fallbackLabel;
  const href = resolveCtaHref(cta, settings);
  const variant = cta?.variant || "primary";
  const size = cta?.size === "lg" ? "lg" : "md";
  const classes = ["button", `button--${variant}`, `button--${size}`, className].filter(Boolean).join(" ");

  return (
    <Link
      href={href}
      className={classes}
      target={cta?.openInNewTab ? "_blank" : undefined}
      rel={cta?.openInNewTab ? "noopener noreferrer" : undefined}
      {...props}
    >
      <span className="button__glow" aria-hidden="true" />
      {children ?? (
        <>
          {label} <span className="button__arrow" aria-hidden="true">→</span>
        </>
      )}
    </Link>
  );
}
