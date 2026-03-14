import React from 'react';
import { FaMoon } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-white shadow-sm border-b border-gray-100">
      <h1 className="text-xl font-extrabold text-gray-900">Where in the world?</h1>
      <button className="flex items-center gap-2 font-semibold text-sm text-gray-800">
        <FaMoon size={16} />
        Dark Mode
      </button>
    </nav>
  );
};

export default Navbar;
