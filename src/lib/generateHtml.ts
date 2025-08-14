import { generateHead } from "./generateHead";
import { OgConfig } from "./types";

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export function generateMinimalHtml(config: OgConfig): string {
  const head = generateHead(config);
  const title = escapeHtml(config.title);
  const desc = config.description ? escapeHtml(config.description) : "";
  const url = escapeHtml(config.url);
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${title}</title>
${head}
</head>
<body>
  <main style="font-family: system-ui, sans-serif; padding: 24px;">
    <h1>${title}</h1>
    <p>${desc}</p>
    <p><a href="${url}">${url}</a></p>
  </main>
</body>
</html>`;
}
