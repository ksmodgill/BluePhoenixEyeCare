import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { createClient } from "@sanity/client";

function loadEnvFile(filename) {
  const envPath = resolve(process.cwd(), filename);
  const content = readFileSync(envPath, "utf8");

  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const separator = trimmed.indexOf("=");
    if (separator === -1) continue;
    const key = trimmed.slice(0, separator).trim();
    const value = trimmed.slice(separator + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvFile(".env.local");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01",
  token: process.env.SANITY_API_READ_TOKEN,
  useCdn: false
});

const result = await client.fetch(`{
  "settings": *[_type == "siteSettings"][0]{clinicName, primaryPhone, city, "addressCount": count(addressLines)},
  "homepage": *[_type == "homepage"][0]{
    title,
    "sectionCount": count(sections),
    "sectionTypes": sections[].section->_type
  },
  "testimonials": count(*[_type == "testimonial"]),
  "sections": *[_type match "*Section" && _id match "section-*"]{_type, internalTitle} | order(_type asc)
}`);

console.log(JSON.stringify(result, null, 2));
