import React, { useEffect, useState } from 'react';
import InvestmentSummary from './InvestmentSummary';
import EnvironmentalImpact from './EnvironmentalImpact';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const generateSyntheticData = (numPoints) => {
  const data = [];
  let price = 100; // Starting price
  for (let i = 0; i < numPoints; i++) {
    // Simulate gradual increase with random fluctuations
    const fluctuation = (Math.random() - 0.5) * 10; // Random fluctuation between -5 and +5
    price += 1 + fluctuation; // Gradual increase
    data.push({ date: `Day ${i + 1}`, price: price.toFixed(2) });
  }
  return data;
};

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [syntheticData, setSyntheticData] = useState([]);

  useEffect(() => {
    // Load transactions from localStorage
    const savedTransactions = localStorage.getItem('transactions');
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }

    // Generate synthetic data for solar share prices
    const data = generateSyntheticData(30); // Generate data for 30 days
    setSyntheticData(data);
  }, []);

  // Prepare data for the graph
  const getDataForGraph = () => {
    const labels = syntheticData.map(data => data.date);
    const prices = syntheticData.map(data => data.price);

    return {
      labels,
      datasets: [
        {
          label: 'Solar Share Price Over Time',
          data: prices,
          fill: false,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
        },
      ],
    };
  };

  const data = getDataForGraph(); // Get data for the graph

  return (
    <div className="bg-gray-100 min-h-screen text-black">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-black rounded-lg shadow-md p-6 group relative overflow-hidden">
              <h2 className="font-semibold mb-4 text-white text-2xl transition-transform duration-300 group-hover:translate-y-2">Investment Summary</h2>
              <InvestmentSummary />
              <div className="bg-white mt-4 rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4 text-black transition-transform duration-300 group-hover:translate-y-2">Investment Graph</h2>
                <Line data={data} /> {/* Add the graph here */}
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-transform duration-300 group-hover:-translate-y-2">View More</button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-black rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl text-white font-semibold mb-4">Environmental Impact</h2>
              <EnvironmentalImpact />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4 text-black">Recent Transactions</h2>
              <div className="overflow-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2">Date</th>
                      <th className="px-4 py-2">Share</th>
                      <th className="px-4 py-2">Type</th>
                      <th className="px-4 py-2">Quantity</th>
                      <th className="px-4 py-2">Price</th>
                      <th className="px-4 py-2">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map(transaction => (
                      <tr key={transaction.id}>
                        <td className="border px-4 py-2">{transaction.date}</td>
                        <td className="border px-4 py-2">{transaction.shareName}</td>
                        <td className="border px-4 py-2">{transaction.type}</td>
                        <td className="border px-4 py-2">{transaction.quantity}</td>
                        <td className="border px-4 py-2">${transaction.price.toFixed(2)}</td>
                        <td className="border px-4 py-2">${transaction.total.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
