import React, { useState, useRef } from 'react';
import styles from './Combobox.module.css';

type ComboboxProps = {
  suggestions: string[];
  onSelect: (value: string) => void;
  placeholder?: string;
  theme?: 'light' | 'dark';
};

const Combobox: React.FC<ComboboxProps> = ({ suggestions, onSelect, placeholder = '', theme = 'light' }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 0) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setIsSuggestionsVisible(true);
    } else {
      setFilteredSuggestions([]);
      setIsSuggestionsVisible(false);
    }
  };

  const handleSelectSuggestion = (value: string) => {
    setInputValue(value);
    setIsSuggestionsVisible(false);
    onSelect(value);
  };

  const handleBlur = () => {
    setTimeout(() => setIsSuggestionsVisible(false), 100);
  };

  return (
    <div className={`${styles.combobox} ${styles[theme]}`}>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={styles.input}
      />
      {isSuggestionsVisible && (
        <ul className={styles.suggestions}>
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSelectSuggestion(suggestion)}
              className={styles.suggestion}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Combobox;
