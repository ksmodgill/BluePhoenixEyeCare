import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { createClient } from "@sanity/client";

function loadEnvFile(filename) {
  const content = readFileSync(resolve(process.cwd(), filename), "utf8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const i = trimmed.indexOf("=");
    if (i === -1) continue;
    if (!process.env[trimmed.slice(0, i).trim()]) {
      process.env[trimmed.slice(0, i).trim()] = trimmed.slice(i + 1).trim();
    }
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
  "logo": *[_type == "siteSettings"][0].logo.asset->url,
  "favicon": *[_type == "siteSettings"][0].favicon.asset->url,
  "hero": *[_type == "heroSection" && _id == "section-hero"][0].heroImage.asset->url,
  "serviceImages": count(*[_type == "servicesSection"][0].services[defined(image.asset)]),
  "galleryImages": count(*[_type == "gallerySection"][0].galleryItems[defined(image.asset)]),
  "symptomImage": *[_type == "symptomsSection"][0].sideImage.asset->url
}`);

console.log(JSON.stringify(result, null, 2));
