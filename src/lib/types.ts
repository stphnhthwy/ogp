export type OgImage = {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
};

export type OgConfig = {
  title: string;
  description?: string;
  url: string;
  siteName?: string;
  type?: "website" | "article" | "product" | string;
  locale?: string;
  images: OgImage[];
  // Optional Twitter crosswalk
  twitterCard?: "summary" | "summary_large_image";
  twitterSite?: string;     // e.g., @brand
  twitterCreator?: string;  // e.g., @author
};
