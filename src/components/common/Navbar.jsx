import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-300 font-semibold text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">SunShare</Link>
        
        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <ul className={`md:flex md:space-x-4 ${isOpen ? 'block' : 'hidden'} md:block absolute md:relative top-16 md:top-0 left-0 right-0 md:left-auto md:right-auto bg-blue-500 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out`}>
          {[
            { name: 'Home', path: '/' },
            { name: 'Dashboard', path: '/dashboard' },
            { name: 'Solar Plants', path: '/solar-plants' },
            { name: 'Trading', path: '/trading' },
            { name: 'Login', path: '/login' },
            { name: 'Sign Up', path: '/signup' }
          ].map((item) => (
            <li key={item.name} className="my-2 md:my-0">
              <Link 
                to={item.path}
                className="block md:inline-block py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-white hover:text-blue-500 transform hover:-translate-y-1 hover:shadow-lg"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
