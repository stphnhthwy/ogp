import { useState } from "react";
import { OgConfig } from "../lib/types";
import { generateMinimalHtml } from "../lib/generateHtml";
import { copyToClipboard } from "../lib/format";

export default function HtmlSnippetOutput({ config }: { config: OgConfig }) {
  const html = generateMinimalHtml(config);
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await copyToClipboard(html);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  const download = () => {
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "og-sample.html";
    a.click();
    URL.revokeObjectURL(url);
  };
  return (
    <div className="border rounded p-2 text-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">HTML snippet</h3>
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
      <pre className="whitespace-pre-wrap break-all">{html}</pre>
    </div>
  );
}
