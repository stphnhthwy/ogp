import { OgConfig } from "./types";

export async function scrapeUrl(url: string): Promise<OgConfig | null> {
  const res = await fetch(`/api/scrape?url=${encodeURIComponent(url)}`);
  if (!res.ok) return null;
  return (await res.json()) as OgConfig;
}
