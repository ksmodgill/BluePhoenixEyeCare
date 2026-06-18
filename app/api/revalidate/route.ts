import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { revalidateSecret } from "@/lib/sanity/env";

const CACHE_TAGS = ["homepage", "siteSettings", "header", "footer", "globalUi"] as const;

function revalidateSite() {
  for (const tag of CACHE_TAGS) {
    revalidateTag(tag, "max");
  }

  revalidatePath("/");
}

export async function POST(request: NextRequest) {
  if (!revalidateSecret) {
    return NextResponse.json({ message: "Missing SANITY_REVALIDATE_SECRET" }, { status: 500 });
  }

  const manualSecret = request.nextUrl.searchParams.get("secret");
  if (manualSecret === revalidateSecret) {
    revalidateSite();
    return NextResponse.json({ revalidated: true, source: "manual", now: Date.now() });
  }

  const { isValidSignature, body } = await parseBody(request, revalidateSecret, true);

  if (!isValidSignature) {
    return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
  }

  revalidateSite();

  return NextResponse.json({
    revalidated: true,
    source: "webhook",
    documentType: body?._type,
    documentId: body?._id,
    now: Date.now()
  });
}
