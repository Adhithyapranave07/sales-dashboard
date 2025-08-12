// src/components/SalesChart.tsx
import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

type Datum = {
  month: string;
  value: number; // generic value used for current selected year
  raw?: Record<string, number>; // optional raw per-year values
};

type Props = {
  data: Datum[];
  chartType: "bar" | "line" | "pie";
  color?: string;
  ariaLabel?: string;
};

const COLORS = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"];

export default function SalesChart({ data, chartType, ariaLabel = "Sales chart" }: Props) {
  if (!data || data.length === 0) return null;

  if (chartType === "bar") {
    return (
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data} aria-label={ariaLabel}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" name="Sales" fill={COLORS[0]}>
            {data.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }

  if (chartType === "line") {
    return (
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data} aria-label={ariaLabel}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke={COLORS[0]} dot />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  if (chartType === "pie") {
    // Pie expects a small dataset; transform months into value pairs
    const pieData = data.map((d) => ({ name: d.month, value: d.value }));
    return (
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  return null;
}
