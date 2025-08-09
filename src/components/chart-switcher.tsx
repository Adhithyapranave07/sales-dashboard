import React from 'react';

interface ChartSwitcherProps {
  chartType: 'bar' | 'line' | 'pie';
  setChartType: (type: 'bar' | 'line' | 'pie') => void;
}

const ChartSwitcher: React.FC<ChartSwitcherProps> = ({
  chartType,
  setChartType,
}) => {
  // Array of chart types to map over
  const chartTypes = ['bar', 'line', 'pie'];

  return (
    <div className="flex space-x-2 p-2 rounded-xl bg-gray-200">
      {chartTypes.map((type) => (
        <button
          key={type}
          onClick={() => setChartType(type as 'bar' | 'line' | 'pie')}
          className={`
            px-4 py-2 rounded-lg capitalize font-medium transition-colors duration-200
            ${chartType === type ?
              'bg-primary-500 text-white shadow-md' :
              'bg-gray-100 text-gray-700 hover:bg-gray-300'
            }
          `}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default ChartSwitcher;
