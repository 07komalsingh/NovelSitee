import React, { useState } from 'react';
import Gatsby from "../assets/gatsby.jpg";
import George from "../assets/george.jpg";
import Mockingbird from "../assets/mockingbirdd.jpg";
import Moby from "../assets/theroad.jpg";

const FeaturedSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All categories');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Updated novels array with imported images
  const novels = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', imageUrl: Gatsby },
    { id: 2, title: '1984', author: 'George Orwell', imageUrl: George },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', imageUrl: Mockingbird },
    { id: 4, title: 'The Road', author: 'Cormac McCarthy', imageUrl: Moby },
  ];

  return (
    <div className="relative py-16 bg-black overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 opacity-30 animate-gradientMove"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Dropdown Menu */}
        {/* <div className="mb-8 flex justify-center animate-fadeInSlideUp1">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="bg-white border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transform hover:scale-105 transition-transform duration-300"
          >
            <option>All categories</option>
            <option>Thrillers</option>
            <option>Romance</option>
            <option>Science Fiction</option>
            <option>Fantasy</option>
          </select>
        </div> */}

        {/* Section Title */}
        <h2 className="text-4xl font-semibold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 animate-zoomIn">
          Featured Novels
        </h2>

        {/* Novels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {novels.map((novel, index) => (
            <div
              key={novel.id}
              className={`group bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 fadeInSlideUp${index + 1}`}
            >
              <img
                src={novel.imageUrl}
                alt={novel.title}
                className="w-full h-64 object-cover transition-transform transform group-hover:scale-110 duration-500"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{novel.title}</h3>
                <p className="text-gray-700">{novel.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
