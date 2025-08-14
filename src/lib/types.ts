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
};
