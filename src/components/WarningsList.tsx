import { ValidationResult } from "../lib/validators";

export default function WarningsList({
  validation,
}: {
  validation: ValidationResult;
}) {
  if (!validation.errors.length && !validation.warnings.length) return null;
  return (
    <div className="p-2 border rounded bg-yellow-50 text-sm space-y-1">
      {validation.errors.map((e, i) => (
        <div key={"e" + i} className="text-red-700">
          {e}
        </div>
      ))}
      {validation.warnings.map((w, i) => (
        <div key={"w" + i} className="text-yellow-700">
          {w}
        </div>
      ))}
    </div>
  );
}
