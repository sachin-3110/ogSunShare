import React from 'react';
import { Link } from 'react-router-dom';

const ContactUsButton = () => {
  return (
    <Link
      to="/contact"
      className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
    >
      Contact Us
    </Link>
  );
};

export default ContactUsButton;
