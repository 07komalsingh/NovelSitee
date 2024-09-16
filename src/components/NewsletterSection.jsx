// src/components/NewsletterSection.jsx

import React, { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with:', email);
    setEmail(''); // Reset the form
  };

  return (
    <div className="py-16 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-zoomIn">
          Join Our Newsletter
        </h2>
        <p className="text-center text-lg mb-8 animate-fadeInSlideUp">
          Stay updated with the latest novels and special offers.
        </p>
        
        {/* Form Container */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-6 py-3 rounded-full w-full sm:max-w-md outline-none text-black placeholder-gray-600 animate-slideInLeft"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 animate-bounceIn"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSection;
