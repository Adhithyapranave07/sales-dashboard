'use client';

import { useState, useMemo } from 'react';
import SalesChart from '@/src/components/sales-chart';
import ChartSwitcher from '@/src/components/chart-switcher';
import SalesFilter from '@/src/components/sales-filter';
 
// Define the data structure
interface SalesData {
  year: string;
  sales: number;
}

// Mock sales data for 2022, 2023, and 2024
// In a real application, you would fetch this from an API.
const mockSalesData: SalesData[] = [
  { year: '2024', sales: 150000 },
  { year: '2023', sales: 120000 },
  { year: '2022', sales: 95000 },
];

const DashboardPage: React.FC = () => {
  // State to manage the chart type and sales threshold for filtering
  const [chartType, setChartType] = useState<'bar' | 'line' | 'pie'>('bar');
  const [salesThreshold, setSalesThreshold] = useState<number | ''>('');

  // Use a memoized function to filter the data. This prevents re-computation on every render
  const filteredData = useMemo(() => {
    if (salesThreshold === '' || isNaN(Number(salesThreshold))) {
      return mockSalesData;
    }
    return mockSalesData.filter(
      (item) => item.sales >= Number(salesThreshold)
    );
  }, [salesThreshold]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto p-6 bg-white rounded-xl shadow-lg">
        {/* Dashboard Header */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Sales Dashboard
        </h1>

        {/* Filters and Chart Switcher Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          {/* Sales Filter Component */}
          <SalesFilter
            salesThreshold={salesThreshold}
            setSalesThreshold={setSalesThreshold}
          />
          {/* Chart Switcher Component */}
          <ChartSwitcher
            chartType={chartType}
            setChartType={setChartType}
          />
        </div>

        {/* Main Chart Section */}
        <div className="w-full h-96">
          {filteredData.length > 0 ? (
            <SalesChart data={filteredData} chartType={chartType} />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500 text-lg">
              No data available for the selected threshold.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
