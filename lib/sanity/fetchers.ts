import { isSanityConfigured } from "./env";
import { defaultSiteData } from "./defaults";
import {
  footerQuery,
  globalUiQuery,
  headerQuery,
  homepageQuery,
  siteSettingsQuery
} from "./queries";
import { getClient, sanityFetch } from "./client";
import type { FooterData, GlobalUiData, HeaderData, HomepageData, SiteData, SiteSettings } from "./types";

function mergeWithDefaults<T extends object>(value: T | null | undefined, fallback: T): T {
  if (!value) {
    return fallback;
  }

  return { ...fallback, ...value };
}

export async function getSiteSettings(preview = false): Promise<SiteSettings> {
  if (!isSanityConfigured) {
    return defaultSiteData.settings;
  }

  const data = await sanityFetch<SiteSettings>({
    query: siteSettingsQuery,
    tags: ["siteSettings"],
    preview
  });

  return mergeWithDefaults(data, defaultSiteData.settings);
}

export async function getHeader(preview = false): Promise<HeaderData> {
  if (!isSanityConfigured) {
    return defaultSiteData.header;
  }

  const data = await sanityFetch<HeaderData>({
    query: headerQuery,
    tags: ["header"],
    preview
  });

  return mergeWithDefaults(data, defaultSiteData.header);
}

export async function getFooter(preview = false): Promise<FooterData> {
  if (!isSanityConfigured) {
    return defaultSiteData.footer;
  }

  const data = await sanityFetch<FooterData>({
    query: footerQuery,
    tags: ["footer"],
    preview
  });

  return mergeWithDefaults(data, defaultSiteData.footer);
}

export async function getGlobalUi(preview = false): Promise<GlobalUiData> {
  if (!isSanityConfigured) {
    return defaultSiteData.globalUi;
  }

  const data = await sanityFetch<GlobalUiData>({
    query: globalUiQuery,
    tags: ["globalUi"],
    preview
  });

  return mergeWithDefaults(data, defaultSiteData.globalUi);
}

export async function getHomepage(preview = false): Promise<HomepageData> {
  if (!isSanityConfigured) {
    return defaultSiteData.homepage;
  }

  const data = await sanityFetch<HomepageData>({
    query: homepageQuery,
    tags: ["homepage"],
    preview
  });

  if (!data?.sections?.length) {
    return defaultSiteData.homepage;
  }

  return {
    ...defaultSiteData.homepage,
    ...data,
    sections: data.sections.filter(Boolean)
  };
}

export async function getSiteData(): Promise<typeof defaultSiteData> {
  if (!isSanityConfigured) {
    return defaultSiteData;
  }

  const { draftMode } = await import("next/headers");
  const preview = (await draftMode()).isEnabled;

  const [settings, header, footer, globalUi, homepage] = await Promise.all([
    getSiteSettings(preview),
    getHeader(preview),
    getFooter(preview),
    getGlobalUi(preview),
    getHomepage(preview)
  ]);

  return { settings, header, footer, globalUi, homepage };
}
