// src/components/SearchComponent.tsx

import React, { useState, useEffect, ChangeEvent } from "react";

interface SearchResult {
  id: number;
  title: string;
}

const SearchComponent: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // A placeholder function to simulate an API call.
  const fetchResults = async (searchTerm: string) => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulate network latency.
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // For demonstration, return dummy data.
      const dummyData: SearchResult[] = [
        { id: 1, title: `Result for "${searchTerm}" #1` },
        { id: 2, title: `Result for "${searchTerm}" #2` },
        { id: 3, title: `Result for "${searchTerm}" #3` },
      ];
      setResults(dummyData);
    } catch (err) {
      console.error(err);
      setError("Error fetching results.");
    } finally {
      setIsLoading(false);
    }
  };

  // TODO: Implement debouncing and API call triggering based on the query change.
  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    // Candidate should implement debouncing logic here.
    fetchResults(query);
  }, [query]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <h2>Live Search</h2>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Type to search..."
      />
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
