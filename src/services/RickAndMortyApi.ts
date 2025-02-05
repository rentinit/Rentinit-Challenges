import { ApiResponse } from '../types/RickAndMorty';

const API_BASE_URL = 'https://rickandmortyapi.com/api';

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

export const searchCharacters = async (
  query: string,
  signal?: AbortSignal
): Promise<ApiResponse> => {
  const response = await fetch(
    `${API_BASE_URL}/character/?name=${encodeURIComponent(query)}`,
    { signal }
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new ApiError(404, 'No characters found');
    }
    throw new ApiError(response.status, 'Failed to fetch characters');
  }

  return response.json();
};