import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { revalidateSecret } from "@/lib/sanity/env";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (!revalidateSecret || secret !== revalidateSecret) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const tags = Array.isArray(body.tags) ? body.tags : ["homepage", "siteSettings", "header", "footer", "globalUi"];

  for (const tag of tags) {
    revalidateTag(tag, "max");
  }

  revalidatePath("/");

  return NextResponse.json({ revalidated: true, tags, now: Date.now() });
}
