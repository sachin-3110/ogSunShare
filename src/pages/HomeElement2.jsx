import React from 'react';
import { CheckIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Component() {
  return (
    <div className="min-h-full bg-[#323232] text-white rounded-xl">

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="flex items-center text-green-400 mb-4">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L1 21h22L12 2zm0 3.516L20.297 19H3.703L12 5.516z"/>
              </svg>
              <span className=" font-semibold">SunShare</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">
             Join The Solar movement-invest, save, impact.            </h1>
            <ul className="space-y-4 pb-5 ">
              {[
                'Buy solar panels in rooftop projects',
                'Earn 10-13% returns from electricity your panels generate',
                'SunShare takes care of the installation and maintenance of your panels'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>
            <Link to='/trading' className="mt-15 bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 duration:500 transition duration-300">

              Start Investing
            </Link>

          </div>
          <div className="md:w-1/2 w-1/2 h-full flex justify-center items-center">
            <img
              src="https://imgs.search.brave.com/vFwa7ABWkj0p1JWwXyHK7980r4vF8n-KI3hcN3F2vvo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/Ni8yNC8yMi8yNC9z/b2xhci1wYW5lbHMt/MTQ3Nzk4N182NDAu/anBn"
              alt="Solar panel installation illustration"
              className="w-full h-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </main>
    </div>
  );
}