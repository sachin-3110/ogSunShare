import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-black">
      <h1 className="text-4xl font-bold mb-6">About SolarInvest</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-4">
            At SolarInvest, we're committed to accelerating the global transition to clean energy by making solar investments accessible to everyone. Our platform connects investors with carefully vetted solar projects, enabling you to earn returns while contributing to a sustainable future.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p>
            Our team consists of experts in renewable energy, finance, and technology, all dedicated to providing you with the best solar investment experience possible.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Key Statistics</h2>
          <ul className="space-y-2">
            <li><strong>Founded:</strong> 2018</li>
            <li><strong>Total Investments:</strong> $100M+</li>
            <li><strong>Number of Projects:</strong> 50+</li>
            <li><strong>Investors:</strong> 10,000+</li>
            <li><strong>CO2 Emissions Avoided:</strong> 500,000 tons</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 bg-blue-100 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Our Process</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Rigorous project selection and due diligence</li>
          <li>Transparent risk assessment and reporting</li>
          <li>Efficient fund allocation and project management</li>
          <li>Regular updates and performance tracking</li>
          <li>Timely distribution of returns to investors</li>
        </ol>
      </div>
    </div>
  );
};

export default About;
