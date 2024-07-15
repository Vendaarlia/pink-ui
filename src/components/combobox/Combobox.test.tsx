import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Combobox from './Combobox';

describe('Combobox Component', () => {
  const suggestions = ['Apple', 'Banana', 'Cherry'];

  test('renders the input field', () => {
    render(<Combobox suggestions={suggestions} onSelect={() => {}} />);
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });

  test('shows suggestions when typing', () => {
    render(<Combobox suggestions={suggestions} onSelect={() => {}} />);
    fireEvent.change(screen.getByPlaceholderText(/search/i), { target: { value: 'a' } });
    expect(screen.getByText(/Apple/i)).toBeInTheDocument();
    expect(screen.getByText(/Banana/i)).toBeInTheDocument();
  });

  test('selects a suggestion on click', () => {
    const handleSelect = jest.fn();
    render(<Combobox suggestions={suggestions} onSelect={handleSelect} />);
    fireEvent.change(screen.getByPlaceholderText(/search/i), { target: { value: 'a' } });
    fireEvent.click(screen.getByText(/Apple/i));
    expect(handleSelect).toHaveBeenCalledWith('Apple');
  });
});
