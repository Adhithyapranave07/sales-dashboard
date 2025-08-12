// src/components/ChartSwitcher.tsx
import React from "react";

type Props = {
  chartType: "bar" | "line" | "pie";
  setChartType: (t: "bar" | "line" | "pie") => void;
};

const ChartSwitcher: React.FC<Props> = ({ chartType, setChartType }) => {
  const types: Array<"bar" | "line" | "pie"> = ["bar", "line", "pie"];

  return (
    <div role="tablist" aria-label="Chart type" className="flex gap-2">
      {types.map((t) => {
        const active = chartType === t;
        return (
          <button
            key={t}
            role="tab"
            aria-selected={active}
            aria-label={`Show ${t} chart`}
            onClick={() => setChartType(t)}
            className={`px-3 py-1 rounded-md focus:outline-none focus:ring-2 ${
              active
                ? "bg-sky-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        );
      })}
    </div>
  );
};

export default ChartSwitcher;
