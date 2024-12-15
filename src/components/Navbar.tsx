import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">QuickRent</h1>
        <ul className="hidden md:flex gap-6">
          <li><a href="#features" className="hover:text-blue-500">Features</a></li>
          <li><a href="#gadgets" className="hover:text-blue-500">Gadgets</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
        <button className="flex items-center bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
          <FaUserCircle className="mr-2" />
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
