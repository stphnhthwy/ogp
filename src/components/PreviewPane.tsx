import { useState, useEffect } from "react";
import { OgConfig } from "../lib/types";
import { PROFILES } from "../lib/platformProfiles";
import Tabs from "./Tabs";
import PlatformPreview from "./PlatformPreview";

export default function PreviewPane({ config }: { config: OgConfig }) {
  const tabs = Object.values(PROFILES).map(p => ({ id: p.key, label: p.label }));
  const [active, setActive] = useState(tabs[0].id);
  const hasImage = config.images.length > 0;
  const [variant, setVariant] = useState<"rich" | "basic">(hasImage ? "rich" : "basic");
  useEffect(() => {
    if (!hasImage) setVariant("basic");
  }, [hasImage]);
  const profile = PROFILES[active as keyof typeof PROFILES];
  return (
    <div>
      <Tabs tabs={tabs} active={active} onChange={setActive} />
      {hasImage && (
        <div className="flex border-b mb-2">
          <button
            className={`px-3 py-1 -mb-px border-b-2 text-sm ${
              variant === "rich"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-neutral-500"
            }`}
            onClick={() => setVariant("rich")}
          >
            Rich
          </button>
          <button
            className={`px-3 py-1 -mb-px border-b-2 text-sm ${
              variant === "basic"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-neutral-500"
            }`}
            onClick={() => setVariant("basic")}
          >
            Basic
          </button>
        </div>
      )}
      <PlatformPreview config={config} profile={profile} variant={variant} />
    </div>
  );
}
