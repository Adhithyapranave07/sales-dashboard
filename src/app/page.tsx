"use client";

import React, { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import ErrorBoundary from "../components/ErrorBoundary";
import sampleData from "../data/salesData";
import ChartSwitcher from "../components/ChartSwitcher";
import LoadingSpinner from "../components/LoadingSpinner";

const SalesChart = dynamic(() => import("../components/SalesChart"), {
  ssr: false,
  loading: () => <LoadingSpinner label="Loading chart..." />,
});

export default function Page() {
  const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");
  const [selectedMonth, setSelectedMonth] = useState<string>("");

  const months = ["All months", ...sampleData.map((d) => d.month)];

  const chartData = useMemo(() => {
    if (!selectedMonth || selectedMonth === "All months") {
      return sampleData.map((d) => ({
        month: d.month,
        value: d.sales2024,
      }));
    } else {
      const match = sampleData.find((d) => d.month === selectedMonth);
      if (!match) return [];
      return [
        { month: "2022", value: match.sales2022 },
        { month: "2023", value: match.sales2023 },
        { month: "2024", value: match.sales2024 },
      ];
    }
  }, [selectedMonth]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-100">
        {/* Header */}
        <header className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-lg">
          <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
            <h1 className="text-3xl font-bold tracking-wide">
              📊 Sales Dashboard
            </h1>
          </div>
        </header>

        {/* Main content */}
        <main className="max-w-6xl mx-auto px-6 py-10">
          {/* Controls */}
          <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <label
                htmlFor="month-select"
                className="text-lg font-medium text-gray-700"
              >
                Select Month:
              </label>
              <select
                id="month-select"
                value={selectedMonth || "All months"}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition"
              >
                {months.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            <ChartSwitcher chartType={chartType} setChartType={setChartType} />
          </div>

          {/* Chart Section */}
          {chartData.length > 0 ? (
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition">
              <SalesChart
                data={chartData}
                chartType={chartType}
                ariaLabel={
                  selectedMonth && selectedMonth !== "All months"
                    ? `Sales comparison for ${selectedMonth}`
                    : `Sales data for 2024`
                }
              />
            </div>
          ) : (
            <LoadingSpinner label="Loading chart..." />
          )}
        </main>

        {/* Footer */}
        <footer className="bg-sky-600 text-white text-center py-4 mt-12">
          © {new Date().getFullYear()} Sales Dashboard
        </footer>
      </div>
    </ErrorBoundary>
  );
}
