// src/components/HeroSection.jsx

import React from 'react';
import Novel from '../assets/novel.jpg';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-purple-700 via-pink-500 to-red-500 text-white h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur Effect */}
      <img
        src={Novel}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-40 filter blur-sm animate-zoomIn"
        // Blurriness is being controlled with the 'filter blur-lg' class.
        // You can increase or decrease the blur using 'blur-sm', 'blur-md', or 'blur-xl'.
      />

      {/* Animated Content */}
      <div className="relative z-10 text-center space-y-8 px-4">
        {/* First Line with Custom Text Color */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide opacity-0 fadeInSlideUp1 text-yellow-200">
          Dive Into a Universe of Stories
        </h1>

        {/* Second Line with Custom Text Color */}
        <p className="text-lg md:text-2xl opacity-0 fadeInSlideUp2 text-cyan-200">
          Embark on adventures, unravel mysteries, and explore worlds beyond imagination.
        </p>

        {/* Call to Action with Enhanced Animation */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-6">
          <a
            href="#featured"
            className="opacity-0 fadeInSlideUp3 px-8 py-4 bg-indigo-600 rounded-full text-white font-semibold hover:bg-indigo-700 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Discover Stories
          </a>
          <a
            href="#newsletter"
            className="opacity-0 fadeInSlideUp3 px-8 py-4 bg-yellow-500 rounded-full text-white font-semibold hover:bg-yellow-600 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Join the Adventure
          </a>
        </div>

        {/* Optional animated small text */}
        <p className="mt-8 text-sm md:text-lg text-gray-200 opacity-0 fadeInSlideUp4">
          Start your journey today.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
