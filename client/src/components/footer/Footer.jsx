import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-800 via-green-600 to-green-500 text-white py-8 px-6 md:px-12 text-center">
      <div className="flex flex-col items-center justify-center mb-6">
        <p className="text-xl font-semibold mb-2">
          Made with <span className="text-red-500">♥</span> by Lakshay Dhall
        </p>
        <p className="text-sm md:text-base font-medium text-green-100">
          Growing the future, one step at a time!
        </p>
      </div>

      <div className="flex justify-center gap-6 mb-6">
        {/* Social Media Icons */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-green-300 transition duration-200"
        >
          <FaFacebook />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-green-300 transition duration-200"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-green-300 transition duration-200"
        >
          <FaTwitter />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-green-300 transition duration-200"
        >
          <FaLinkedin />
        </a>
      </div>

      <div className="text-sm text-green-200">
        <p>&copy; 2024 CropConnect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
