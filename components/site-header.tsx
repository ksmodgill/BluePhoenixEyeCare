"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { navItems, siteConfig } from "@/lib/site";

export function SiteHeader() {
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
    const sections = navItems
      .map((item) => document.querySelector(item.href))
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
  }, []);

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
        <Link className="brand brand--image" href="#home" aria-label={`${siteConfig.name} home`}>
          <Image
            src="/images/Logo.png"
            width={260}
            height={71}
            priority
            sizes="(max-width: 760px) 190px, 260px"
            alt="Blue Phoenix Eye Care and Opticals logo"
            className="brand__logo"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} aria-current={activeHref === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <ButtonLink href={siteConfig.callHref}>Call Now</ButtonLink>
          <ButtonLink href={siteConfig.whatsappHref} variant="secondary">WhatsApp</ButtonLink>
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
        <div className="mobile-nav__intro">
          <span>Blue Phoenix Eye Care</span>
          <strong>How can we help your vision today?</strong>
        </div>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={activeHref === item.href ? "page" : undefined}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <div className="mobile-nav__actions">
          <ButtonLink href={siteConfig.callHref} onClick={() => setIsOpen(false)}>
            Call Now
          </ButtonLink>
          <ButtonLink href={siteConfig.whatsappHref} variant="secondary" onClick={() => setIsOpen(false)}>
            WhatsApp
          </ButtonLink>
        </div>
      </nav>
    </header>
  );
}
