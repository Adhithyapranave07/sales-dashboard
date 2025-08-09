import React from 'react';

interface SalesFilterProps {
  salesThreshold: number | '';
  setSalesThreshold: (value: number | '') => void;
}

const SalesFilter: React.FC<SalesFilterProps> = ({
  salesThreshold,
  setSalesThreshold,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-2">
      <label htmlFor="sales-threshold" className="text-gray-700 font-medium">
        Sales Threshold:
      </label>
      <input
        id="sales-threshold"
        type="number"
        value={salesThreshold}
        onChange={(e) => {
          const value = e.target.value;
          setSalesThreshold(value === '' ? '' : Number(value));
        }}
        placeholder="e.g., 100000"
        className="
          p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2
          focus:ring-primary-500 focus:border-transparent transition-colors duration-200
        "
      />
    </div>
  );
};

export default SalesFilter;
