import { useState } from "react";
import { OgConfig } from "../lib/types";
import { PROFILES } from "../lib/platformProfiles";
import Tabs from "./Tabs";
import PlatformPreview from "./PlatformPreview";

export default function PreviewPane({ config }: { config: OgConfig }) {
  const tabs = Object.values(PROFILES).map(p => ({ id: p.key, label: p.label }));
  const [active, setActive] = useState(tabs[0].id);
  const profile = PROFILES[active as keyof typeof PROFILES];
  return (
    <div>
      <Tabs tabs={tabs} active={active} onChange={setActive} />
      <PlatformPreview config={config} profile={profile} />
    </div>
  );
}
