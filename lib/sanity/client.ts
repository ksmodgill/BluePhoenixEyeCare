import { createClient, type QueryParams } from "next-sanity";
import { apiVersion, dataset, isSanityConfigured, projectId, token } from "./env";

export const sanityClient = createClient({
  projectId: projectId || "placeholder",
  dataset,
  apiVersion,
  useCdn: false,
  token,
  perspective: "published",
  stega: {
    enabled: false,
    studioUrl: "/studio"
  }
});

export const previewClient = createClient({
  projectId: projectId || "placeholder",
  dataset,
  apiVersion,
  useCdn: false,
  token,
  perspective: "previewDrafts",
  stega: {
    enabled: true,
    studioUrl: "/studio"
  }
});

export function getClient(preview = false) {
  if (!isSanityConfigured) {
    return null;
  }

  if (preview && token) {
    return previewClient;
  }

  return sanityClient;
}

export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
  preview = false
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
  preview?: boolean;
}): Promise<T | null> {
  const client = getClient(preview);

  if (!client) {
    return null;
  }

  return client.fetch<T>(query, params, {
    cache: "no-store",
    next: { tags }
  });
}
