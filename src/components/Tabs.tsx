export type Tab = { id: string; label: string };

export default function Tabs({
  tabs,
  active,
  onChange,
}: {
  tabs: Tab[];
  active: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex border-b mb-2">
      {tabs.map(t => (
        <button
          key={t.id}
          className={`px-3 py-1 -mb-px border-b-2 text-sm ${
            active === t.id
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-neutral-500"
          }`}
          onClick={() => onChange(t.id)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
