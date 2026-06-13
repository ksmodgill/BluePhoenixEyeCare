import Link from "next/link";
import { siteConfig } from "@/lib/site";

const mobileActions = [
  { label: "Call", icon: "phone", href: siteConfig.callHref },
  { label: "WhatsApp", icon: "whatsapp", href: siteConfig.whatsappHref }
] as const;

function ActionIcon({ name }: { name: (typeof mobileActions)[number]["icon"] }) {
  if (name === "phone") {
    return (
      <svg className="mobile-actions__icon" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
        <path
          d="M8.4 4.8 10 8.4c.3.7.1 1.5-.5 2l-1.1.9c1.2 2.3 3 4.1 5.3 5.3l.9-1.1c.5-.6 1.3-.8 2-.5l3.6 1.6c.7.3 1.1 1 .9 1.8l-.4 2c-.2.9-1 1.5-1.9 1.5C9.5 21.9 2.1 14.5 2.1 5.2c0-.9.6-1.7 1.5-1.9l2-.4c.8-.2 1.5.2 1.8.9Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }

  return (
    <svg className="mobile-actions__icon" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      <path
        d="M4.5 18.8 5.4 15.7A7.6 7.6 0 1 1 8.4 18l-3.9.8Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M8.8 11.2H15.2M8.8 14H13"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function MobileActions() {
  return (
    <aside className="mobile-actions" aria-label="Quick contact actions">
      <div className="mobile-actions__intro">
        <strong>Need eye care help?</strong>
      </div>
      <div className="mobile-actions__links">
        {mobileActions.map((action) => (
          <Link key={action.label} href={action.href} aria-label={`${action.label} Blue Phoenix`}>
            <span aria-hidden="true"><ActionIcon name={action.icon} /></span>
            {action.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}
