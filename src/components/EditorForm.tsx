import { OgConfig } from "../lib/types";
import ImageList from "./ImageList";

export default function EditorForm({
  config,
  onChange,
}: {
  config: OgConfig;
  onChange: (cfg: OgConfig) => void;
}) {
  const upd = (field: keyof OgConfig, value: any) =>
    onChange({ ...config, [field]: value });

  return (
    <div className="space-y-2">
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          className="w-full border rounded px-2 py-1"
          value={config.title}
          onChange={e => upd("title", e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          className="w-full border rounded px-2 py-1"
          value={config.description || ""}
          onChange={e => upd("description", e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">URL</label>
        <input
          className="w-full border rounded px-2 py-1"
          value={config.url}
          onChange={e => upd("url", e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-sm font-medium">Site Name</label>
          <input
            className="w-full border rounded px-2 py-1"
            value={config.siteName || ""}
            onChange={e => upd("siteName", e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Type</label>
          <input
            className="w-full border rounded px-2 py-1"
            value={config.type || ""}
            onChange={e => upd("type", e.target.value)}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">Locale</label>
        <input
          className="w-full border rounded px-2 py-1"
          value={config.locale || ""}
          onChange={e => upd("locale", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div>
          <label className="block text-sm font-medium">Twitter Card</label>
          <input
            className="w-full border rounded px-2 py-1"
            value={config.twitterCard || ""}
            onChange={e => upd("twitterCard", e.target.value as any)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Twitter Site</label>
          <input
            className="w-full border rounded px-2 py-1"
            value={config.twitterSite || ""}
            onChange={e => upd("twitterSite", e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Twitter Creator</label>
          <input
            className="w-full border rounded px-2 py-1"
            value={config.twitterCreator || ""}
            onChange={e => upd("twitterCreator", e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Images</label>
        <ImageList
          images={config.images}
          onChange={imgs => upd("images", imgs)}
        />
      </div>
    </div>
  );
}
