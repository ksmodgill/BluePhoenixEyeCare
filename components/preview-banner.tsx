import { draftMode } from "next/headers";
import Link from "next/link";

export async function PreviewBanner() {
  const isDraft = (await draftMode()).isEnabled;

  if (!isDraft) {
    return null;
  }

  return (
    <div className="preview-banner">
      <span>Preview mode — showing draft Sanity content</span>
      <Link href="/api/draft/disable">Exit preview</Link>
    </div>
  );
}
