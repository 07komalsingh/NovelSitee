import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaBookOpen } from 'react-icons/fa'; // Import book icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FaBookOpen className="text-3xl" />
          <Link to="/" className="text-3xl font-bold ml-2">
            NovelSite
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:bg-gray-700 px-4 py-2 rounded">Home</Link>
          <Link to="/featured" className="hover:bg-gray-700 px-4 py-2 rounded">Featured</Link>
          <div className="relative">
            <button className="hover:bg-gray-700 px-4 py-2 rounded">
              Genres
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-gray-700 rounded shadow-lg hidden md:block">
              {/* <Link to="/genre/fiction" className="block px-4 py-2 hover:bg-gray-600">Fiction</Link>
              <Link to="/genre/science-fiction" className="block px-4 py-2 hover:bg-gray-600">Science Fiction</Link>
              <Link to="/genre/fantasy" className="block px-4 py-2 hover:bg-gray-600">Fantasy</Link>
              <Link to="/genre/mystery" className="block px-4 py-2 hover:bg-gray-600">Mystery</Link>
              <Link to="/genre/romance" className="block px-4 py-2 hover:bg-gray-600">Romance</Link>
              <Link to="/genre/historical" className="block px-4 py-2 hover:bg-gray-600">Historical</Link>
              <Link to="/genre/thriller" className="block px-4 py-2 hover:bg-gray-600">Thriller</Link>
              <Link to="/genre/non-fiction" className="block px-4 py-2 hover:bg-gray-600">Non-Fiction</Link> */}
            </div>
          </div>
          <Link to="/newsletter" className="hover:bg-gray-700 px-4 py-2 rounded">Newsletter</Link>
          <Link to="/about" className="hover:bg-gray-700 px-4 py-2 rounded">About</Link>
          <Link to="/contact" className="hover:bg-gray-700 px-4 py-2 rounded">Contact</Link>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-700`}>
        <Link to="/" className="block px-4 py-3 text-white hover:bg-gray-600">Home</Link>
        <Link to="/featured" className="block px-4 py-3 text-white hover:bg-gray-600">Featured</Link>
        <Link to="/genres" className="block px-4 py-3 text-white hover:bg-gray-600">Genres</Link>
        <Link to="/newsletter" className="block px-4 py-3 text-white hover:bg-gray-600">Newsletter</Link>
        <Link to="/about" className="block px-4 py-3 text-white hover:bg-gray-600">About</Link>
        <Link to="/contact" className="block px-4 py-3 text-white hover:bg-gray-600">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
