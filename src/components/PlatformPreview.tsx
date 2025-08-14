import { OgConfig } from "../lib/types";
import { PlatformProfile } from "../lib/platformProfiles";
import { truncate, domainOf } from "../lib/format";

export default function PlatformPreview({
  config,
  profile,
}: {
  config: OgConfig;
  profile: PlatformProfile;
}) {
  const img = config.images[profile.preferImageIndex || 0];
  const imageUrl = img?.url || "/og-placeholder.svg";
  const title = truncate(config.title, profile.maxTitleLen, profile.truncateTitleEllipsis);
  const desc = truncate(
    config.description || "",
    profile.maxDescLen,
    profile.truncateDescEllipsis
  );
  const domain = profile.showDomain ? domainOf(config.url) : "";

  return (
    <div className="rounded-2xl shadow-sm border bg-white dark:bg-neutral-900 overflow-hidden max-w-md">
      <div className="relative pb-[52.3%] bg-neutral-200">
        <img src={imageUrl} alt="preview" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="p-3 space-y-1">
        {domain && <div className="text-xs uppercase tracking-wide text-neutral-500">{domain}</div>}
        <div className="font-semibold text-sm">{title}</div>
        {desc && <div className="text-sm text-neutral-600 dark:text-neutral-300">{desc}</div>}
      </div>
    </div>
  );
}
