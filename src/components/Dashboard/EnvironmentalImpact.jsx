import React from 'react';

const EnvironmentalImpact = () => {
  // This data would typically come from an API or state management system
  const impactData = {
    co2Reduced: 25000,
    treesPlanted: 1500,
    energyProduced: 75000,
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="space-y-4">
        <div>
          <p className="text-gray-600">CO2 Emissions Reduced</p>
          <p className="text-xl font-bold">{impactData.co2Reduced.toLocaleString()} kg</p>
        </div>
        <div>
          <p className="text-gray-600">Equivalent Trees Planted</p>
          <p className="text-xl font-bold">{impactData.treesPlanted.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-gray-600">Clean Energy Produced</p>
          <p className="text-xl font-bold">{impactData.energyProduced.toLocaleString()} kWh</p>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalImpact;
