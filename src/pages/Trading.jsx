import React, { useState, useEffect } from 'react';
import CarbonEmissionCalculator from '../../CarbonEmissionCalculator';

const Trading = () => {
  const [shares, setShares] = useState([
    { id: 1, name: 'SunValley Solar Farm', price: 10.5, available: 1000 },
    { id: 2, name: 'Coastal Wind Project', price: 8.75, available: 1500 },
    { id: 3, name: 'Desert Sun Initiative', price: 12.25, available: 800 },
    { id: 4, name: 'Mountain Peak Solar', price: 9.5, available: 1200 },
  ]);

  const [order, setOrder] = useState({
    shareId: '',
    quantity: 0,
    type: 'buy',
  });

  const [transactions, setTransactions] = useState(() => {
    // Load transactions from localStorage
    const savedTransactions = localStorage.getItem('transactions');
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  const handleOrderChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    const share = shares.find(s => s.id === parseInt(order.shareId));
    if (share) {
      const newTransaction = {
        id: Date.now(),
        shareName: share.name,
        quantity: parseInt(order.quantity),
        price: share.price,
        type: order.type,
        total: share.price * order.quantity,
        date: new Date().toLocaleString(),
      };
      const updatedTransactions = [newTransaction, ...transactions];
      setTransactions(updatedTransactions);
      // Save transactions to localStorage
      localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
      // Reset order form
      setOrder({ shareId: '', quantity: 0, type: 'buy' });
    }
  };

  return (
    <div className="container mx-auto px-4 text-black">
      <h1 className="text-3xl font-bold mb-6">Solar Shares Trading</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Available Shares</h2>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Available</th>
                </tr>
              </thead>
              <tbody>
                {shares.map(share => (
                  <tr key={share.id}>
                    <td className="border px-4 py-2">{share.name}</td>
                    <td className="border px-4 py-2">${share.price.toFixed(2)}</td>
                    <td className="border px-4 py-2">{share.available}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Place Order</h2>
          <form onSubmit={handleSubmitOrder} className="bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shareId">
                Select Share
              </label>
              <select
                id="shareId"
                name="shareId"
                value={order.shareId}
                onChange={handleOrderChange}
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                required
              >
                <option value="">Select a share</option>
                {shares.map(share => (
                  <option key={share.id} value={share.id}>{share.name}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={order.quantity}
                onChange={handleOrderChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                required
                min="1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
                Order Type
              </label>
              <select
                id="type"
                name="type"
                value={order.type}
                onChange={handleOrderChange}
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                required
              >
                <option value="buy">Buy</option>
                <option value="sell">Sell</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Transaction History</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
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
  );
};

export default Trading;
