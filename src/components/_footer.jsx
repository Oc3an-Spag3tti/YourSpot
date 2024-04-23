import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 text-center text-white">
      <p>&copy; {new Date().getFullYear()} Your Spot</p>
    </footer>
  );
};

export default Footer;
