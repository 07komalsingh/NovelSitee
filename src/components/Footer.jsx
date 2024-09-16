import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo or Brand Name */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Novel Universe</h2>
            <p className="mt-2 text-gray-400">Your gateway to literary adventures</p>
          </div>

          {/* Navigation Links */}
          <div className="mb-6 md:mb-0 flex space-x-6">
            <a href="/" className="hover:text-gray-400 transition duration-300">Home</a>
            <a href="/about" className="hover:text-gray-400 transition duration-300">About</a>
            <a href="/genres" className="hover:text-gray-400 transition duration-300">Genres</a>
            <a href="/contact" className="hover:text-gray-400 transition duration-300">Contact</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        {/* Footer Bottom */}
        <div className="text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Novel Universe. All rights reserved.</p>
          <p className="mt-2">
            Built with <span className="text-pink-600">❤</span> by Your Name
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
