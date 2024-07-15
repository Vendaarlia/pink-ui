import { useState, useEffect } from 'react';

export const useCombobox = (initialSuggestions: string[]) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (inputValue.length > 0) {
      const filtered = initialSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  }, [inputValue, initialSuggestions]);

  return { inputValue, setInputValue, filteredSuggestions };
};
