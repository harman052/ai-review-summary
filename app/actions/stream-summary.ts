"use server";

import { streamReviewSummary } from "@/lib/ai-summary";
import { getProduct } from "@/lib/sample-data";

export async function getStreamingSummary(slug: string) {
  const product = getProduct(slug);
  const result = await streamReviewSummary(product);
  return result.toTextStreamResponse();
}
