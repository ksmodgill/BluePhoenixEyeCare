/**
 * Seeds Sanity singleton shells. Run after creating a Sanity project.
 *
 * Usage:
 *   npm run seed:sanity
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { createClient } from "@sanity/client";

function loadEnvFile(filename) {
  try {
    const envPath = resolve(process.cwd(), filename);
    const content = readFileSync(envPath, "utf8");

    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) {
        continue;
      }

      const separator = trimmed.indexOf("=");
      if (separator === -1) {
        continue;
      }

      const key = trimmed.slice(0, separator).trim();
      const value = trimmed.slice(separator + 1).trim();

      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  } catch {
    // Optional env file.
  }
}

loadEnvFile(".env.local");
loadEnvFile(".env");

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error("Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN before seeding.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01",
  token,
  useCdn: false
});

async function seed() {
  const tx = client.transaction();

  tx.createIfNotExists({
    _id: "siteSettings",
    _type: "siteSettings",
    singletonKey: "siteSettings",
    clinicName: "Blue Phoenix Eye Care & Opticals",
    siteUrl: "https://bluephoenixeyecare.com",
    primaryPhone: "9445887612",
    whatsappNumber: "9445887612",
    city: "Kulasekharam",
    state: "Tamil Nadu",
    addressLines: [
      "Blessing Complex,",
      "8-130/7,",
      "Nagacode Junction,",
      "Opposite Sugumar Hospital,",
      "Kulasekharam,",
      "Tamil Nadu - 629161"
    ]
  });

  tx.createIfNotExists({
    _id: "header",
    _type: "header",
    singletonKey: "header",
    navigation: [
      { _key: "home", label: "Home", sectionId: "home" },
      { _key: "about", label: "About", sectionId: "about" },
      { _key: "services", label: "Services", sectionId: "services" },
      { _key: "reviews", label: "Reviews", sectionId: "reviews" },
      { _key: "contact", label: "Contact", sectionId: "contact" }
    ]
  });

  tx.createIfNotExists({
    _id: "footer",
    _type: "footer",
    singletonKey: "footer",
    description: "Professional eye care in Kulasekharam.",
    copyrightText: "© 2026 Blue Phoenix Eye Care & Opticals. All rights reserved."
  });

  tx.createIfNotExists({
    _id: "globalUi",
    _type: "globalUi",
    singletonKey: "globalUi",
    stickyBarHeading: "Need eye care help?"
  });

  tx.createIfNotExists({
    _id: "homepage",
    _type: "homepage",
    singletonKey: "homepage",
    title: "Homepage",
    sections: []
  });

  await tx.commit();
  console.log("Sanity singleton shells created. Open /studio to add sections.");
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
