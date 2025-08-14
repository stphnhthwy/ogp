export type PlatformKey = "whatsapp" | "rcs" | "imessage";

export type PlatformProfile = {
  key: PlatformKey;
  label: string;
  preferImageIndex?: number;
  maxTitleLen: number;
  maxDescLen: number;
  imageAspectHint?: "landscape" | "square";
  showDomain: boolean;
  truncateTitleEllipsis?: string;
  truncateDescEllipsis?: string;
};

export const PROFILES: Record<PlatformKey, PlatformProfile> = {
  whatsapp: {
    key: "whatsapp",
    label: "WhatsApp",
    maxTitleLen: 90,
    maxDescLen: 140,
    preferImageIndex: 0,
    imageAspectHint: "landscape",
    showDomain: true,
  },
  rcs: {
    key: "rcs",
    label: "RCS",
    maxTitleLen: 70,
    maxDescLen: 120,
    preferImageIndex: 0,
    imageAspectHint: "landscape",
    showDomain: true,
  },
  imessage: {
    key: "imessage",
    label: "iMessage",
    maxTitleLen: 80,
    maxDescLen: 120,
    preferImageIndex: 0,
    imageAspectHint: "landscape",
    showDomain: true,
  },
};
