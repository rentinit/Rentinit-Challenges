import { useState, useEffect } from 'react';
import { Character } from '../types/RickAndMorty';
import { searchCharacters, ApiError } from '../services/RickAndMortyApi';

interface SearchState {
  results: Character[];
  isLoading: boolean;
  error: string | null;
}

export const useSearch = (query: string) => {
  const [state, setState] = useState<SearchState>({
    results: [],
    isLoading: false,
    error: null,
  });

  const debouncedQuery = query;

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setState(prev => ({ ...prev, results: [], error: null }));
      return;
    }

    setState(prev => ({ ...prev, isLoading: true, error: null }));

    searchCharacters(debouncedQuery)
      .then(data => {
        setState(prev => ({
          ...prev,
          results: data.results,
          isLoading: false,
        }));
      })
      .catch(error => {
        const message = error instanceof ApiError 
          ? error.message 
          : 'An unexpected error occurred';
          
        setState(prev => ({
          ...prev,
          error: message,
          isLoading: false,
        }));
      });
  }, [debouncedQuery]);

  return state;
};