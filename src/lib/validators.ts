import { OgImage, OgConfig } from "./types";

export type ValidationResult = {
  warnings: string[];
  errors: string[];
};

export function validateConfig(config: OgConfig): ValidationResult {
  const warnings: string[] = [];
  const errors: string[] = [];

  if (!config.title?.trim()) errors.push("Title is required.");
  if (!config.url?.trim()) errors.push("URL is required.");
  try {
    new URL(config.url);
  } catch {
    errors.push("URL is not a valid absolute URL.");
  }

  if (!config.images?.length) warnings.push("No og:image set. Many platforms show weaker previews.");
  if (config.images?.length > 4) warnings.push("Multiple images set. Most platforms use only the first.");

  return { warnings, errors };
}

// Lightweight HEAD check client-side (best-effort). Server should do real checks.
export async function probeImageHeads(images: OgImage[]): Promise<string[]> {
  const warnings: string[] = [];
  await Promise.all(images.map(async img => {
    try {
      const res = await fetch(img.url, { method: "HEAD", mode: "no-cors" as RequestMode });
      // In no-cors mode, cannot read headers reliably; this is placeholder.
      // A real check should run on the server.
      if (!img.url.startsWith("https://") && !img.url.startsWith("http://")) {
        warnings.push(`Image URL not http/https: ${img.url}`);
      }
    } catch {
      warnings.push(`Failed to reach image: ${img.url}`);
    }
  }));
  return warnings;
}
