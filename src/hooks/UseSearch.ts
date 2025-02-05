import { useState, useEffect } from 'react';
import { Character } from '../types/RickAndMorty';
import { searchCharacters, ApiError } from '../services/RickAndMortyApi';
import { useDebounce } from './UseDebounce';

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

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setState(prev => ({ ...prev, results: [], error: null }));
      return;
    }

    const abortController = new AbortController();
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    searchCharacters(debouncedQuery, abortController.signal)
      .then(data => {
        setState(prev => ({
          ...prev,
          results: data.results,
          isLoading: false,
        }));
      })
      .catch(error => {
        if (error.name === 'AbortError') return;
        
        const message = error instanceof ApiError 
          ? error.message 
          : 'An unexpected error occurred';
          
        setState(prev => ({
          ...prev,
          error: message,
          isLoading: false,
        }));
      });

    return () => {
      abortController.abort();
    };
  }, [debouncedQuery]);

  return state;
};