import { useState } from "react";
import { OgConfig } from "../lib/types";
import { generateHead } from "../lib/generateHead";
import { copyToClipboard } from "../lib/format";

export default function HeadTagOutput({ config }: { config: OgConfig }) {
  const head = generateHead(config);
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await copyToClipboard(head);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="border rounded p-2 text-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">&lt;head&gt; tags</h3>
        <div className="space-x-2 flex items-center">
          {copied && <span className="text-green-600 text-xs">Copied</span>}
          <button onClick={copy} className="px-2 py-1 bg-blue-600 text-white rounded text-xs">
            Copy
          </button>
        </div>
      </div>
      <pre className="whitespace-pre-wrap break-all">{head}</pre>
    </div>
  );
}
