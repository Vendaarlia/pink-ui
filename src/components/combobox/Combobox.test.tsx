// Combobox.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Combobox from './Combobox';

describe('Combobox Component', () => {
  const suggestions = ['apple', 'banana', 'grape', 'orange', 'pineapple'];
  const onSelect = jest.fn();

  test('renders input element', () => {
    render(<Combobox suggestions={suggestions} onSelect={onSelect} />);
    const input = screen.getByPlaceholderText('');
    expect(input).toBeInTheDocument();
  });

  test('shows suggestions on input change', () => {
    render(<Combobox suggestions={suggestions} onSelect={onSelect} />);
    const input = screen.getByPlaceholderText('');
    fireEvent.change(input, { target: { value: 'ap' } });
    expect(screen.getByText('apple')).toBeInTheDocument();
    expect(screen.queryByText('banana')).not.toBeInTheDocument();
  });

  test('selects suggestion on click', () => {
    render(<Combobox suggestions={suggestions} onSelect={onSelect} />);
    const input = screen.getByPlaceholderText('');
    fireEvent.change(input, { target: { value: 'ap' } });
    fireEvent.click(screen.getByText('apple'));
    expect(onSelect).toHaveBeenCalledWith('apple');
    expect(input).toHaveValue('apple');
  });

  test('hides suggestions on blur', () => {
    render(<Combobox suggestions={suggestions} onSelect={onSelect} />);
    const input = screen.getByPlaceholderText('');
    fireEvent.change(input, { target: { value: 'ap' } });
    fireEvent.blur(input);
    setTimeout(() => {
      expect(screen.queryByText('apple')).not.toBeInTheDocument();
    }, 100);
  });

  test('applies light theme by default', () => {
    render(<Combobox suggestions={suggestions} onSelect={onSelect} />);
    const input = screen.getByPlaceholderText('light');
    expect(input).toHaveClass('light');
  });

  test('applies dark theme when specified', () => {
    render(<Combobox suggestions={suggestions} onSelect={onSelect} theme="dark" />);
    const input = screen.getByPlaceholderText('dark');
    expect(input).toHaveClass('dark');
  });
});
