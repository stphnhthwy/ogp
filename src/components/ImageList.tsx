import { OgImage } from "../lib/types";

export default function ImageList({
  images,
  onChange,
}: {
  images: OgImage[];
  onChange: (imgs: OgImage[]) => void;
}) {
  const update = (idx: number, img: OgImage) => {
    const next = [...images];
    next[idx] = img;
    onChange(next);
  };
  const remove = (idx: number) => {
    const next = images.filter((_, i) => i !== idx);
    onChange(next);
  };
  const move = (idx: number, dir: -1 | 1) => {
    const next = [...images];
    const target = idx + dir;
    if (target < 0 || target >= next.length) return;
    [next[idx], next[target]] = [next[target], next[idx]];
    onChange(next);
  };
  const add = () => onChange([...images, { url: "" }]);

  return (
    <div className="space-y-2">
      {images.map((img, i) => (
        <div key={i} className="flex items-center space-x-2">
          <input
            className="flex-1 border rounded px-2 py-1 text-sm"
            placeholder="Image URL"
            value={img.url}
            onChange={e => update(i, { ...img, url: e.target.value })}
          />
          <button className="px-2" onClick={() => move(i, -1)}>
            ↑
          </button>
          <button className="px-2" onClick={() => move(i, 1)}>
            ↓
          </button>
          <button className="px-2 text-red-600" onClick={() => remove(i)}>
            ✕
          </button>
        </div>
      ))}
      <button
        className="text-sm px-2 py-1 rounded bg-green-600 text-white"
        onClick={add}
      >
        Add image
      </button>
    </div>
  );
}
