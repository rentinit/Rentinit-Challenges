import { Character } from '../types/RickAndMorty';

interface SearchResultsProps {
  results: Character[];
}

export const SearchResults: React.FC<SearchResultsProps> = ({ results }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {results.map(character => (
        <div 
          key={character.id} 
          className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
        >
          <div className="w-full">
            <img 
              src={character.image} 
              alt={character.name}
              className="w-full h-32 object-cover"
            />
          </div>
          <div className="p-3">
            <h3 className="text-base font-bold text-gray-800 mb-1 truncate">{character.name}</h3>
            <div className="space-y-1">
              <div className="flex items-center">
                <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                  character.status === 'Alive' ? 'bg-green-500' : 
                  character.status === 'Dead' ? 'bg-red-500' : 'bg-gray-500'
                }`}></span>
                <p className="text-sm text-gray-600">
                  {character.status} - {character.species}
                </p>
              </div>
              {character.type && (
                <p className="text-xs text-gray-500 truncate">Type: {character.type}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );