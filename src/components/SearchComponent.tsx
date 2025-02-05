import React, { ChangeEvent } from 'react';
import { SearchResults } from './SearchResults';
import { useSearch } from '../hooks/UseSearch';

export const SearchComponent: React.FC = () => {
  const [query, setQuery] = React.useState('');
  const { results, isLoading, error } = useSearch(query);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

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
        
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Search characters..."
              className="w-full p-4 pl-6 pr-12 text-lg border-2 border-gray-300 rounded-full 
                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                       transition-all duration-200 outline-none
                       placeholder-gray-400"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
          </div>
        )}

        {error && (
          <div className="max-w-xl mx-auto">
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-center">
              <p className="text-red-600">{error}</p>
            </div>
          </div>
        )}

        <div className="mt-8">
          {!isLoading && !error && results.length > 0 && (
            <SearchResults results={results} />
          )}

          {!isLoading && !error && query && results.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No characters found</p>
              <p className="text-gray-400 mt-2">Try a different search term</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;