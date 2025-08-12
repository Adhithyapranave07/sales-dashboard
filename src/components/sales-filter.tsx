// src/components/SalesFilter.tsx
import React from "react";

type Props = {
  salesThreshold: number | "";
  setSalesThreshold: (v: number | "") => void;
  onReset?: () => void;
};

export default function SalesFilter({
  salesThreshold,
  setSalesThreshold,
  onReset,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-3">
      <label htmlFor="sales-threshold" className="text-sm font-medium">
        Sales Threshold
      </label>
      <input
        id="sales-threshold"
        inputMode="numeric"
        aria-label="Sales threshold"
        placeholder="e.g. 100000"
        value={salesThreshold === "" ? "" : String(salesThreshold)}
        onChange={(e) => {
          const raw = e.target.value.trim();
          if (raw === "") {
            setSalesThreshold("");
            return;
          }
          const cleaned = raw.replace(/[,\s]/g, "");
          const n = Number(cleaned);
          if (Number.isFinite(n) && !Number.isNaN(n)) setSalesThreshold(n);
          else setSalesThreshold("");
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setSalesThreshold("");
            onReset?.();
          }
        }}
        className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-sky-500"
      />
      <button
        className="px-3 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
        onClick={() => {
          setSalesThreshold("");
          onReset?.();
        }}
      >
        Reset
      </button>
    </div>
  );
}
