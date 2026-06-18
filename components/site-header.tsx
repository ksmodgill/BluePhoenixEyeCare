"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CtaButtonLink } from "@/components/cms/cta-button-link";
import { NavLink } from "@/components/cms/nav-link";
import { resolveBrandImage } from "@/lib/sanity/brand";
import type { HeaderData, SiteSettings } from "@/lib/sanity/types";

type SiteHeaderProps = {
  settings: SiteSettings;
  header: HeaderData;
};

export function SiteHeader({ settings, header }: SiteHeaderProps) {
  const logoSrc = resolveBrandImage(settings, header);
  const isSvgLogo = /\.svg($|[?#])/i.test(logoSrc);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = header.navigation
      .map((item) => {
        const target = item.sectionId ? `#${item.sectionId}` : item.url;
        return target?.startsWith("#") ? document.querySelector(target) : null;
      })
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: [0.12, 0.35, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [header.navigation]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""} ${isOpen ? "site-header--menu-open" : ""}`}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="container site-header__inner">
        <a className="brand brand--image" href="#home" aria-label={`${settings.clinicName} home`}>
          <Image
            src={logoSrc}
            width={360}
            height={99}
            priority
            unoptimized={isSvgLogo}
            sizes="(max-width: 760px) 236px, 300px"
            alt={header.logoOverride?.alt || settings.logo?.alt || `${settings.clinicName} logo`}
            className="brand__logo"
          />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {header.navigation.map((item) => {
            const href = item.sectionId ? `#${item.sectionId}` : item.url || "#";
            return (
              <NavLink
                key={item.label}
                item={item}
                aria-current={activeHref === href ? "page" : undefined}
              />
            );
          })}
        </nav>

        <div className="site-header__actions">
          <CtaButtonLink cta={header.primaryCta} settings={settings} fallbackLabel="Call Now" />
          <CtaButtonLink cta={header.secondaryCta} settings={settings} fallbackLabel="WhatsApp" />
          <button
            className="menu-button"
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((value) => !value)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className={`mobile-nav ${isOpen ? "mobile-nav--open" : ""}`}
        aria-label="Mobile navigation"
      >
        {header.mobileMenuIntro ? (
          <div className="mobile-nav__intro">
            <span>{header.mobileMenuIntro.eyebrow}</span>
            <strong>{header.mobileMenuIntro.heading}</strong>
          </div>
        ) : null}
        {header.navigation.map((item) => (
          <NavLink
            key={item.label}
            item={item}
            onClick={() => setIsOpen(false)}
            aria-current={
              activeHref === (item.sectionId ? `#${item.sectionId}` : item.url) ? "page" : undefined
            }
          />
        ))}
        <div className="mobile-nav__actions">
          <CtaButtonLink cta={header.primaryCta} settings={settings} onClick={() => setIsOpen(false)} />
          <CtaButtonLink
            cta={header.secondaryCta}
            settings={settings}
            onClick={() => setIsOpen(false)}
          />
        </div>
      </nav>
    </header>
  );
}
