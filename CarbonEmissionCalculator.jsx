import { div } from 'framer-motion/client';
import React, { useState } from 'react';

const CarbonEmissionCalculator = () => {
  const [formData, setFormData] = useState({
    electricity: '',
    gas: '',
    car: '',
    flights: '',
  });
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const calculateEmissions = (e) => {
    e.preventDefault();
    
    const { electricity, gas, car, flights } = formData;

    const electricityFactor = 0.4;
    const gasFactor = 5.3;
    const carFactor = 0.4;
    const flightFactor = 1000;

    const annualEmissions = (parseFloat(electricity) * 12 * electricityFactor) +
                            (parseFloat(gas) * 12 * gasFactor) +
                            (parseFloat(car) * 52 * carFactor) +
                            (parseFloat(flights) * flightFactor);

    setResult(`${annualEmissions.toFixed(2)} kg CO2`);
  };

  return (
    <div className="flex justify-center items-center mt-8">
      <div className="bg-white flex shadow-md rounded-lg w-full max-w-2xl">
        <form onSubmit={calculateEmissions} className="w-full p-6 space-y-4">
          <h2 className="text-2xl font-semibold mb-4 text-center text-black border-[2px] border-black">Carbon Emission Calculator</h2>
          <div>
            <label htmlFor="electricity" className="block text-gray-700 text-sm font-bold mb-2">
              Monthly Electricity Usage (kWh):
            </label>
            <input
              type="number"
              id="electricity"
              name="electricity"
              value={formData.electricity}
              onChange={handleInputChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="gas" className="block text-gray-700 text-sm font-bold mb-2">
              Monthly Natural Gas Usage (therms):
            </label>
            <input
              type="number"
              id="gas"
              name="gas"
              value={formData.gas}
              onChange={handleInputChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="car" className="block text-gray-700 text-sm font-bold mb-2">
              Weekly Car Mileage:
            </label>
            <input
              type="number"
              id="car"
              name="car"
              value={formData.car}
              onChange={handleInputChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="flights" className="block text-gray-700 text-sm font-bold mb-2">
              Number of Round-Trip Flights per Year:
            </label>
            <input
              type="number"
              id="flights"
              name="flights"
              value={formData.flights}
              onChange={handleInputChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Calculate
            </button>
            {result && (
              <div className="text-lg font-semibold text-black">
                Annual Emissions: <span className="text-green-600">{result}</span>
              </div>
            )}
          </div>
        </form>
       
      </div>
    </div>
  );
};

export default CarbonEmissionCalculator;
