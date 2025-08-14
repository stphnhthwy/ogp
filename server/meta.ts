import fetch from "node-fetch";
import * as cheerio from "cheerio";
import { OgConfig } from "../src/lib/types";

export async function scrapeMetaToConfig(url: string): Promise<OgConfig> {
  const resp = await fetch(url, { redirect: "follow" });
  if (!resp.ok) throw new Error(`Fetch failed: ${resp.status}`);
  const html = await resp.text();
  const $ = cheerio.load(html);

  const get = (prop: string) =>
    $(`meta[property="${prop}"]`).attr("content") ||
    $(`meta[name="${prop}"]`).attr("content") || "";

  const images = $(`meta[property="og:image"]`)
    .map((_i, el) => ({ url: $(el).attr("content") || "" }))
    .get()
    .filter(x => x.url);

  const config: OgConfig = {
    title: get("og:title") || $("title").text().trim() || "Untitled",
    description: get("og:description") || $('meta[name="description"]').attr("content"),
    url: get("og:url") || url,
    siteName: get("og:site_name") || new URL(url).hostname.replace(/^www\./, ""),
    type: get("og:type") || "website",
    locale: get("og:locale") || "en_US",
    images: images.length ? images : [],
    twitterCard: (get("twitter:card") as any) || undefined,
    twitterSite: get("twitter:site") || undefined,
    twitterCreator: get("twitter:creator") || undefined,
  };

  // Attach width/height/alt if present
  const withDetails = config.images.map(img => {
    const w = $(`meta[property="og:image:width"]`).attr("content");
    const h = $(`meta[property="og:image:height"]`).attr("content");
    const alt = $(`meta[property="og:image:alt"]`).attr("content");
    return {
      ...img,
      width: w ? Number(w) : undefined,
      height: h ? Number(h) : undefined,
      alt: alt || undefined,
    };
    });
  return { ...config, images: withDetails };
}
