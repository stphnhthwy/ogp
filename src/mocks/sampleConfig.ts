import { OgConfig } from "../lib/types";

export const sampleConfig: OgConfig = {
  title: "Galactic Coffee: A Better Brew",
  description: "Single‑origin beans, gentle roast, and free shipping over €25.",
  url: "https://example.com/coffee",
  siteName: "Example Coffee",
  type: "website",
  locale: "en_US",
  images: [
    { url: "/og-placeholder.svg", width: 1200, height: 630, alt: "Cup of coffee on a table" }
  ],
  twitterCard: "summary_large_image",
  twitterSite: "@example",
  twitterCreator: "@barista",
};
