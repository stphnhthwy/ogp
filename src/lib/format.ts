export const truncate = (s: string, max: number, ellipsis = "…") =>
  s.length > max ? s.slice(0, Math.max(0, max - ellipsis.length)) + ellipsis : s;

export const domainOf = (href: string): string => {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
};

export async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("copy failed", err);
  }
}
