import { useState } from "react";
import { OgConfig } from "../lib/types";
import { copyToClipboard } from "../lib/format";

export default function JsonOutput({ config }: { config: OgConfig }) {
  const json = JSON.stringify(config, null, 2);
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await copyToClipboard(json);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  const download = () => {
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "og-config.json";
    a.click();
    URL.revokeObjectURL(url);
  };
  return (
    <div className="border rounded p-2 text-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">JSON export</h3>
        <div className="space-x-2 flex items-center">
          {copied && <span className="text-green-600 text-xs">Copied</span>}
          <button onClick={copy} className="px-2 py-1 bg-blue-600 text-white rounded text-xs">
            Copy
          </button>
          <button onClick={download} className="px-2 py-1 bg-neutral-200 rounded text-xs">
            Download
          </button>
        </div>
      </div>
      <pre className="whitespace-pre-wrap break-all">{json}</pre>
    </div>
  );
}
