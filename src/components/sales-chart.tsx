import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';

interface SalesChartProps {
  data: { year: string; sales: number }[];
  chartType: 'bar' | 'line' | 'pie';
}

const COLORS = ['#0ea5e9', '#38bdf8', '#7dd3fc', '#bae6fd'];

const SalesChart: React.FC<SalesChartProps> = ({ data, chartType }) => {
  // A helper function to format the tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-2 bg-white rounded-md shadow-md text-sm border border-gray-200">
          <p className="font-bold text-gray-900">{`Year: ${label}`}</p>
          <p className="text-gray-700">{`Sales: $${payload[0].value.toLocaleString()}`}</p>
        </div>
      );
    }
    return null;
  };

  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis
              label={{ value: 'Sales ($)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="sales" fill={COLORS[0]} radius={[10, 10, 0, 0]} />
          </BarChart>
        );
      case 'line':
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis
              label={{ value: 'Sales ($)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="sales"
              stroke={COLORS[0]}
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        );
      case 'pie': {
  // Aggregate monthly data into yearly totals
  const yearlyData = data.reduce((acc, curr) => {
    const year = curr.year.split(' ')[1]; // Extract year from "Month YYYY"
    const existingYear = acc.find(item => item.year === year);
    if (existingYear) {
      existingYear.sales += curr.sales;
    } else {
      acc.push({ year, sales: curr.sales });
    }
    return acc;
  }, [] as { year: string; sales: number }[]);

  return (
    <div className="flex justify-center items-center h-full">
      <PieChart width={400} height={400}>
        <Pie
          data={yearlyData}
          dataKey="sales"
          nameKey="year"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label
        >
          {yearlyData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Legend verticalAlign="bottom" height={36} />
        <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
      </PieChart>
    </div>
  );
}

      default:
        return null;
    }
  };

  const chartElement = renderChart();

  return (
    <ResponsiveContainer width="100%" height="100%">
      {chartElement ? chartElement : <div />}
    </ResponsiveContainer>
  );
};

export default SalesChart;