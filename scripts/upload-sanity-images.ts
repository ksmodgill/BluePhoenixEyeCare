import { createReadStream, readFileSync, readdirSync, statSync } from "node:fs";
import { basename, extname, join, relative, resolve } from "node:path";
import { createClient } from "@sanity/client";

function loadEnvFile(filename: string) {
  try {
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
  console.error("Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN in .env.local");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01",
  token,
  useCdn: false
});

const publicDir = resolve(process.cwd(), "public");

const MIME_TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".gif": "image/gif"
};

type UploadedAsset = {
  assetId: string;
  url: string;
};

function walkFiles(dir: string): string[] {
  const entries = readdirSync(dir);
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      files.push(...walkFiles(fullPath));
      continue;
    }

    if (stats.isFile() && MIME_TYPES[extname(entry).toLowerCase()]) {
      files.push(fullPath);
    }
  }

  return files;
}

function toPublicUrl(filePath: string) {
  const rel = relative(publicDir, filePath).replace(/\\/g, "/");
  return `/${rel}`;
}

function makeImageField(assetId: string, alt: string) {
  return {
    _type: "image",
    asset: {
      _type: "reference",
      _ref: assetId
    },
    alt
  };
}

async function uploadAllImages() {
  const files = walkFiles(join(publicDir, "images"));
  const map = new Map<string, UploadedAsset>();

  console.log(`Uploading ${files.length} images to Sanity...`);

  for (const filePath of files) {
    const publicUrl = toPublicUrl(filePath);
    const contentType = MIME_TYPES[extname(filePath).toLowerCase()] || "application/octet-stream";

    const asset = await client.assets.upload("image", createReadStream(filePath), {
      filename: basename(filePath),
      contentType
    });

    map.set(publicUrl, {
      assetId: asset._id,
      url: asset.url
    });

    console.log(`  ✓ ${publicUrl}`);
  }

  return map;
}

function imageFromPath(map: Map<string, UploadedAsset>, path: string | undefined, alt: string) {
  if (!path) return undefined;
  const asset = map.get(path);
  if (!asset) {
    console.warn(`  ⚠ No uploaded asset for ${path}`);
    return undefined;
  }
  return makeImageField(asset.assetId, alt);
}

async function patchDocuments(map: Map<string, UploadedAsset>) {
  const tx = client.transaction();

  tx.patch("siteSettings", {
    set: {
      logo: imageFromPath(map, "/images/Logo.png", "Blue Phoenix Eye Care and Opticals logo"),
      favicon: imageFromPath(map, "/images/Favicon.png", "Blue Phoenix favicon")
    }
  });

  tx.patch("section-hero", {
    set: {
      heroImage: imageFromPath(
        map,
        "/images/hero.png",
        "Free eye test and professional eye checkup at Blue Phoenix Eye Care and Opticals"
      )
    },
    unset: ["heroImagePath"]
  });

  const servicesDoc = await client.getDocument("section-services");
  if (servicesDoc?.services) {
    const services = (servicesDoc.services as Array<Record<string, unknown>>).map((service) => {
      const imagePath = service.imagePath as string | undefined;
      const title = (service.title as string) || "Eye care service";
      const image = imageFromPath(map, imagePath, title);

      const next = { ...service };
      if (image) {
        next.image = image;
      }
      delete next.imagePath;
      return next;
    });

    tx.patch("section-services", { set: { services } });
  }

  const symptomsDoc = await client.getDocument("section-symptoms");
  if (symptomsDoc) {
    tx.patch("section-symptoms", {
      set: {
        sideImage: imageFromPath(
          map,
          symptomsDoc.sideImagePath as string,
          "Woman experiencing reading difficulty and vision strain while using glasses"
        )
      },
      unset: ["sideImagePath"]
    });
  }

  const galleryDoc = await client.getDocument("section-gallery");
  if (galleryDoc?.galleryItems) {
    const galleryItems = (galleryDoc.galleryItems as Array<Record<string, unknown>>).map((item) => {
      const imagePath = item.imagePath as string | undefined;
      const alt = (item.alt as string) || (item.title as string) || "Gallery image";
      const image = imageFromPath(map, imagePath, alt);
      const next = { ...item };

      if (image) {
        next.image = image;
      }
      delete next.imagePath;
      delete next.alt;
      return next;
    });

    tx.patch("section-gallery", { set: { galleryItems } });
  }

  await tx.commit();
  console.log("Patched siteSettings, hero, services, symptoms, and gallery documents.");
}

async function main() {
  const map = await uploadAllImages();
  await patchDocuments(map);
  console.log("\nDone. Restart `npm run dev` to see Sanity CDN images on the site.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
