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
  // 2024
  { year: 'Jan 2024', sales: 12000 },
  { year: 'Feb 2024', sales: 13500 },
  { year: 'Mar 2024', sales: 12800 },
  { year: 'Apr 2024', sales: 14200 },
  { year: 'May 2024', sales: 15000 },
  { year: 'Jun 2024', sales: 15500 },
  { year: 'Jul 2024', sales: 14800 },
  { year: 'Aug 2024', sales: 16000 },
  { year: 'Sep 2024', sales: 14500 },
  { year: 'Oct 2024', sales: 17000 },
  { year: 'Nov 2024', sales: 17500 },
  { year: 'Dec 2024', sales: 18000 },

  // 2023
  { year: 'Jan 2023', sales: 10000 },
  { year: 'Feb 2023', sales: 11500 },
  { year: 'Mar 2023', sales: 10800 },
  { year: 'Apr 2023', sales: 11200 },
  { year: 'May 2023', sales: 12000 },
  { year: 'Jun 2023', sales: 12500 },
  { year: 'Jul 2023', sales: 11800 },
  { year: 'Aug 2023', sales: 13000 },
  { year: 'Sep 2023', sales: 12500 },
  { year: 'Oct 2023', sales: 14000 },
  { year: 'Nov 2023', sales: 14500 },
  { year: 'Dec 2023', sales: 15000 },

  // 2022
  { year: 'Jan 2022', sales: 8000 },
  { year: 'Feb 2022', sales: 9500 },
  { year: 'Mar 2022', sales: 8800 },
  { year: 'Apr 2022', sales: 9200 },
  { year: 'May 2022', sales: 10000 },
  { year: 'Jun 2022', sales: 10500 },
  { year: 'Jul 2022', sales: 9800 },
  { year: 'Aug 2022', sales: 11000 },
  { year: 'Sep 2022', sales: 10200 },
  { year: 'Oct 2022', sales: 11800 },
  { year: 'Nov 2022', sales: 12200 },
  { year: 'Dec 2022', sales: 12500 },
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
