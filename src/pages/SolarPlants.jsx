import React, { useState } from 'react';
import CarbonEmissionCalculator from '../../CarbonEmissionCalculator.jsx';
import { Link } from 'react-router-dom';

const SolarPlants = () => {
  const [plants, setPlants] = useState([
    {
      id: 1,
      name: "Karnataka Solar Park",
      description: "One of the largest solar parks in India, located in Karnataka, harnessing solar energy to power thousands of homes.",
      capacity: "2050 MW",
      location: "Karnataka, India",
      carbonEmission: "1500 tons/year",
      image: "https://imgs.search.brave.com/-KD_p9rO3Uuui6Ejl8oMtr5kgkd9m7u6ggegFPwg27M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubGl2ZW1pbnQu/Y29tL3JmL0ltYWdl/LTYyMXg0MTQvTGl2/ZU1pbnQvUGVyaW9k/Mi8yMDE3LzAzLzA2/L1Bob3Rvcy9Qcm9j/ZXNzZWQvc29sYXJu/ZXcxLWszOEgtLTYy/MXg0MTRATGl2ZU1p/bnQuanBn",
    },
    {
      id: 2,
      name: "Bhadla Solar Park",
      description: "Located in Rajasthan, this solar park is known for its vast area and high solar energy generation capacity.",
      capacity: "2245 MW",
      location: "Rajasthan, India",
      carbonEmission: "1800 tons/year",
      image: "https://imgs.search.brave.com/NnuOpB6BqhJn1wufX2fLa0kOSY4jhDyacv0M1B_plps/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY2hl/Zi5iYmNpLmNvLnVr/L25ld3MvNDgwL2Nw/c3Byb2RwYi9FMjE3/L3Byb2R1Y3Rpb24v/XzEyNjc5Nzg3NV8y/NDkyZTIxYS04Y2M2/LTRhNTgtOWQwZC0z/NjBhM2U5NDk5ZmIu/anBnLndlYnA",
    },
    {
      id: 3,
      name: "Pavagada Solar Park",
      description: "A massive solar park in Karnataka, utilizing the region's sunny climate for efficient energy production.",
      capacity: "2050 MW",
      location: "Karnataka, India",
      carbonEmission: "1500 tons/year",
      image: "https://imgs.search.brave.com/a3ytU-T3JZfoyR8beOzYzz-5ikUyBmsfHgHeFPDsI6o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zcGVj/dHJ1bS5pZWVlLm9y/Zy9tZWRpYS1saWJy/YXJ5L3Bob3RvLW9m/LWEtY29uc3RydWN0/aW9uLXZlaGljbGUt/ZHJpdmluZy1pbi1h/LXNvbGFyLXBhbmVs/LWZhcm0uanBnP2lk/PTI1NTkwNzA4Jndp/ZHRoPTEyMDAmaGVp/Z2h0PTkwMA",
    },
    {
      id: 4,
      name: "Kutch Solar Park",
      description: "Located in Gujarat, this solar park is one of the largest in India, contributing significantly to renewable energy.",
      capacity: "500 MW",
      location: "Gujarat, India",
      carbonEmission: "400 tons/year",
      image: "https://imgs.search.brave.com/HNgBYSXoW0XMNimOMs5VPWX6UglfAmkSqrNOPXQ_BuM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aGVm/ZWRlcmFsLmNvbS9m/aWxlLzIwMjIvMDMv/R3VqYXJhdC1zb2xh/ci1wYXJrLmpwZw",
    },
  ]);

  const handleBuy = (plantId) => {
    console.log(`Buying shares in plant ${plantId}`);
    // Implement buy logic here
  };

  const handleSell = (plantId) => {
    console.log(`Selling shares in plant ${plantId}`);
    // Implement sell logic here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">On Going Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {plants.map((plant) => (
          <div key={plant.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 flex justify-center items-center px-5">
                <img className="h-48 rounded-md w-full object-cover md:w-48" src={plant.image} alt={plant.name} />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{plant.capacity}</div>
                <h2 className="block mt-1 text-lg leading-tight font-medium text-black">{plant.name}</h2>
                <p className="mt-2 text-gray-500">{plant.description}</p>
                <p className="mt-2 text-sm text-gray-600">{plant.location}</p>
                <div className="mt-4 bg-gray-100 p-4 rounded">
                  <p className="text-sm text-gray-700">Carbon Emission: <span className="font-bold">{plant.carbonEmission}</span></p>
                  <p className="text-sm text-gray-700">Investing in this plant helps reduce carbon emissions and supports renewable energy initiatives.</p>
                </div>
                <div className="mt-4 flex space-x-3">
                  <Link to='/trading'
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Buy Shares
                  </Link>
                  <Link to='trading'
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Sell Shares
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <CarbonEmissionCalculator />

    </div>
  );
};

export default SolarPlants;
