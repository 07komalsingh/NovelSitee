import React from 'react';


const GenresSection = () => {
  const genres = [
    'Fiction', 'Science Fiction', 'Fantasy', 'Mystery', 'Romance', 'Historical', 'Thriller', 'Non-Fiction',
  ];

  return (
    <div className="py-16 bg-gray-900">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-fadeInSlideUp">
        Explore Genres
      </h2>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {genres.map((genre) => (
            <div
              key={genre}
              className="relative group bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 animate-fadeInSlideUp"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-lg z-0"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <span className="text-lg font-semibold">{genre}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenresSection;
