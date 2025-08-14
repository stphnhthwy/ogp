import { useState } from "react";
import { sampleConfig } from "./mocks/sampleConfig";
import { OgConfig } from "./lib/types";
import { validateConfig } from "./lib/validators";
import { scrapeUrl } from "./lib/scrape-client";
import EditorForm from "./components/EditorForm";
import PreviewPane from "./components/PreviewPane";
import WarningsList from "./components/WarningsList";
import HeadTagOutput from "./components/HeadTagOutput";
import HtmlSnippetOutput from "./components/HtmlSnippetOutput";
import JsonOutput from "./components/JsonOutput";

export default function App() {
  const [config, setConfig] = useState<OgConfig>(sampleConfig);
  const validation = validateConfig(config);

  const handlePrefill = async () => {
    const url = window.prompt("URL to scrape?");
    if (!url) return;
    const scraped = await scrapeUrl(url);
    if (scraped) setConfig(scraped);
    else alert("Scrape failed");
  };

  return (
    <div className="min-h-screen p-4 space-y-4">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">OG Lab</h1>
        <button
          onClick={handlePrefill}
          className="px-3 py-1 rounded bg-blue-600 text-white text-sm"
        >
          Prefill from URL
        </button>
      </header>

      <WarningsList validation={validation} />

      <div className="grid md:grid-cols-2 gap-4">
        <EditorForm config={config} onChange={setConfig} />
        <PreviewPane config={config} />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <HeadTagOutput config={config} />
        <HtmlSnippetOutput config={config} />
        <JsonOutput config={config} />
      </div>
    </div>
  );
}
