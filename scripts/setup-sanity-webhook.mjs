import { readFileSync } from "node:fs";
import { resolve } from "node:path";

function loadEnvFile(filename) {
  try {
    const content = readFileSync(resolve(process.cwd(), filename), "utf8");
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
    // optional
  }
}

loadEnvFile(".env.local");

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const token = process.env.SANITY_API_WRITE_TOKEN;
const secret = process.env.SANITY_REVALIDATE_SECRET;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bluephoenixeyecare.sintyz.com";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

if (!projectId || !token || !secret) {
  console.error("Set NEXT_PUBLIC_SANITY_PROJECT_ID, SANITY_API_WRITE_TOKEN, and SANITY_REVALIDATE_SECRET.");
  process.exit(1);
}

const webhookUrl = `${siteUrl.replace(/\/$/, "")}/api/revalidate`;
const hooksApiVersion = "v2025-02-19";
const apiBase = `https://${projectId}.api.sanity.io/${hooksApiVersion}/hooks/projects/${projectId}`;

const existing = await fetch(apiBase, {
  headers: { Authorization: `Bearer ${token}` }
}).then((res) => res.json());

const match = Array.isArray(existing)
  ? existing.find((hook) => hook.url === webhookUrl || hook.name === "Vercel ISR Revalidate")
  : null;

const payload = {
  type: "document",
  name: "Vercel ISR Revalidate",
  url: webhookUrl,
  dataset,
  rule: {
    on: ["create", "update", "delete"],
    filter: "defined(_type)"
  },
  secret,
  httpMethod: "POST",
  apiVersion: hooksApiVersion,
  includeDrafts: false
};

if (match?.id) {
  const response = await fetch(`${apiBase}/${match.id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const body = await response.json();
  if (!response.ok) {
    console.error("Failed to update webhook:", body);
    process.exit(1);
  }

  console.log(`Updated webhook ${match.id} -> ${webhookUrl}`);
} else {
  const response = await fetch(apiBase, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const body = await response.json();
  if (!response.ok) {
    if (body?.message === "Hostname not allowed") {
      console.error(
        "Sanity blocked this webhook URL. Create it manually in Sanity Manage:\n" +
          `  https://www.sanity.io/manage/project/${projectId}/api/webhooks\n` +
          `  URL: ${webhookUrl}\n` +
          `  Secret: (same as SANITY_REVALIDATE_SECRET)\n` +
          "  Trigger: Create, Update, Delete\n" +
          "  Filter: defined(_type)\n" +
          "  HTTP method: POST"
      );
    } else {
      console.error("Failed to create webhook:", body);
    }
    process.exit(1);
  }

  console.log(`Created webhook -> ${webhookUrl}`);
}

console.log("Publish in Studio to trigger instant live revalidation.");
