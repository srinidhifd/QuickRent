import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="container mx-auto text-center">
        <p>© 2024 QuickRent. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <FaFacebook className="hover:text-white" />
          <FaTwitter className="hover:text-white" />
          <FaInstagram className="hover:text-white" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
