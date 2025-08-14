import { OgConfig } from "./types";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

export function generateHead(config: OgConfig): string {
  const out: string[] = [];
  out.push(`<meta property="og:title" content="${esc(config.title)}">`);
  if (config.description)
    out.push(`<meta property="og:description" content="${esc(config.description)}">`);
  out.push(`<meta property="og:url" content="${esc(config.url)}">`);
  out.push(
    `<meta property="og:type" content="${esc(config.type || "website")}">`
  );
  if (config.siteName)
    out.push(`<meta property="og:site_name" content="${esc(config.siteName)}">`);
  if (config.locale)
    out.push(`<meta property="og:locale" content="${esc(config.locale)}">`);

  for (const img of config.images) {
    out.push(`<meta property="og:image" content="${esc(img.url)}">`);
    if (img.width) out.push(`<meta property="og:image:width" content="${img.width}">`);
    if (img.height) out.push(`<meta property="og:image:height" content="${img.height}">`);
    if (img.alt) out.push(`<meta property="og:image:alt" content="${esc(img.alt)}">`);
  }

  if (config.twitterCard) out.push(`<meta name="twitter:card" content="${config.twitterCard}">`);
  if (config.twitterSite) out.push(`<meta name="twitter:site" content="${esc(config.twitterSite)}">`);
  if (config.twitterCreator) out.push(`<meta name="twitter:creator" content="${esc(config.twitterCreator)}">`);

  return out.join("\n");
}
