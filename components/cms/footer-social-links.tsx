import type { SiteSettings } from "@/lib/sanity/types";

export type SocialPlatform = "facebook" | "instagram" | "youtube" | "linkedin";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  url: string;
};

const SOCIAL_FIELDS: Array<{ platform: SocialPlatform; label: string; key: keyof SiteSettings }> = [
  { platform: "facebook", label: "Facebook", key: "facebook" },
  { platform: "instagram", label: "Instagram", key: "instagram" },
  { platform: "youtube", label: "YouTube", key: "youtube" },
  { platform: "linkedin", label: "LinkedIn", key: "linkedin" }
];

export function getSocialLinks(settings: SiteSettings): SocialLink[] {
  return SOCIAL_FIELDS.flatMap(({ platform, label, key }) => {
    const url = settings[key];
    return typeof url === "string" && url.trim() ? [{ platform, label, url: url.trim() }] : [];
  });
}

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  switch (platform) {
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M13.5 3.5H16.5V7.5H14C13.17 7.5 12.75 7.92 12.75 8.75V11H16.25L15.85 14.5H12.75V20.5H9.25V14.5H6.5V11H9.25V8.25C9.25 5.85 10.85 3.5 13.5 3.5Z"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M7 3.5H17C19.2 3.5 21 5.3 21 7.5V17C21 19.2 19.2 21 17 21H7C4.8 21 3 19.2 3 17V7.5C3 5.3 4.8 3.5 7 3.5ZM12 8.25A3.75 3.75 0 1 0 12 15.75A3.75 3.75 0 1 0 12 8.25ZM17.25 7.25A1 1 0 1 0 17.25 9.25A1 1 0 1 0 17.25 7.25Z"
          />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M21.5 8.25C21.35 7.55 20.8 7 20.1 6.85C18.55 6.5 12 6.5 12 6.5C12 6.5 5.45 6.5 3.9 6.85C3.2 7 2.65 7.55 2.5 8.25C2.15 9.8 2.15 12 2.15 12C2.15 12 2.15 14.2 2.5 15.75C2.65 16.45 3.2 17 3.9 17.15C5.45 17.5 12 17.5 12 17.5C12 17.5 18.55 17.5 20.1 17.15C20.8 17 21.35 16.45 21.5 15.75C21.85 14.2 21.85 12 21.85 12C21.85 12 21.85 9.8 21.5 8.25ZM10 15V9L15.5 12L10 15Z"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M6.5 9.5H9.5V20.5H6.5V9.5ZM8 3.5C9.1 3.5 10 4.4 10 5.5C10 6.6 9.1 7.5 8 7.5C6.9 7.5 6 6.6 6 5.5C6 4.4 6.9 3.5 8 3.5ZM11 9.5H14V11.05C14.55 9.95 15.75 9.25 17.35 9.25C20.55 9.25 21 11.35 21 14.35V20.5H18V14.95C18 13.45 17.65 11.75 15.95 11.75C14.05 11.75 14 13.35 14 15V20.5H11V9.5Z"
          />
        </svg>
      );
  }
}

type FooterSocialLinksProps = {
  settings: SiteSettings;
};

export function FooterSocialLinks({ settings }: FooterSocialLinksProps) {
  const links = getSocialLinks(settings);

  if (!links.length) {
    return null;
  }

  return (
    <nav className="site-footer__social" aria-label="Social media links">
      {links.map((link) => (
        <a
          key={link.platform}
          className="site-footer__social-link"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow ${settings.clinicName} on ${link.label}`}
        >
          <SocialIcon platform={link.platform} />
        </a>
      ))}
    </nav>
  );
}
