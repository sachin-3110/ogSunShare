import React from 'react';

const InvestmentSummary = () => {
  // This data would typically come from an API or state management system
  const investmentData = {
    totalInvested: 50000,
    currentValue: 55000,
    roi: 10,
    numberOfPlants: 3,
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="space-y-4">
        <div>
          <p className="text-gray-600">Total Invested</p>
          <p className="text-xl font-bold">${investmentData.totalInvested}</p>
        </div>
        <div>
          <p className="text-gray-600">Current Value</p>
          <p className="text-xl font-bold">${investmentData.currentValue.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-gray-600">Return on Investment</p>
          <p className="text-xl font-bold">{investmentData.roi}%</p>
        </div>
        <div>
          <p className="text-gray-600">Number of Solar Plants</p>
          <p className="text-xl font-bold">{investmentData.numberOfPlants}</p>
        </div>
      </div>
    </div>
  );
};

export default InvestmentSummary;
