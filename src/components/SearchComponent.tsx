import React from "react";

export const SearchComponent: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Rick and Morty Character Search
          </h2>
          <p className="text-lg text-gray-600">
            Search for your favorite characters from the show
          </p>
        </div>

        {/* Search Characters Input */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search characters..."
              className="w-full p-4 pl-6 pr-12 text-lg border-2 border-gray-300 rounded-full 
                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                       transition-all duration-200 outline-none
                       placeholder-gray-400"
            />
          </div>
        </div>

        {/* Spinning Loader */}
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>

        {/* Error Message */}
        <div className="max-w-xl mx-auto">
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-center">
            <p className="text-red-600">Error Message</p>
          </div>
        </div>

        {/* Characters Grid */}
        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-200 hover:scale-105 hover:shadow-xl">
              <div className="w-full">
                <img className="w-full h-32 object-cover" />
              </div>
              <div className="p-3">
                <h3 className="text-base font-bold text-gray-800 mb-1 truncate">
                  Character Name
                </h3>
                <div className="space-y-1">
                  <div className="flex items-center">
                    <span
                      className={`inline-block w-2 h-2 rounded-full mr-2 `}
                    ></span>
                    <p className="text-sm text-gray-600">
                      Character Status - Character Species
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
