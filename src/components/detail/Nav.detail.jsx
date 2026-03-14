import React from 'react';
// import { Moon } from 'lucide-react'; // Optional: using lucide-react for icons

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-6 bg-white dark:bg-gray-800 shadow-md">
      <h1 className="text-xl font-extrabold">Where in the world?</h1>
      <button className="flex items-center gap-2 font-semibold text-sm">
        {/* <Moon size={16} /> */}
        Dark Mode
      </button>
    </nav>
  );
};

export default Navbar;
