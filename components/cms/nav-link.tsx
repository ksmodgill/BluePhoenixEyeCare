import Link from "next/link";
import type { NavItem } from "@/lib/sanity/types";

export function resolveNavHref(item: NavItem) {
  if (item.url) {
    return item.url;
  }

  if (item.sectionId) {
    return `#${item.sectionId}`;
  }

  return "#";
}

type NavLinkProps = {
  item: NavItem;
  className?: string;
  onClick?: () => void;
  "aria-current"?: "page" | undefined;
};

export function NavLink({ item, className, onClick, ...props }: NavLinkProps) {
  return (
    <Link
      href={resolveNavHref(item)}
      className={className}
      target={item.openInNewTab ? "_blank" : undefined}
      rel={item.openInNewTab ? "noopener noreferrer" : undefined}
      onClick={onClick}
      {...props}
    >
      {item.label}
    </Link>
  );
}
