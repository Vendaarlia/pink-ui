// Badge.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Badge from './Badge';

describe('Badge Component', () => {
  test('renders the correct text', () => {
    render(<Badge text="Test Badge" />);
    expect(screen.getByText(/Test Badge/i)).toBeInTheDocument();
  });

  test('applies the correct class for type', () => {
    render(<Badge text="Primary Badge" type="primary" />);
    expect(screen.getByText(/Primary Badge/i)).toHaveClass('primary');
  });

  test('handles onClick event', () => {
    const handleClick = jest.fn();
    render(<Badge text="Clickable Badge" onClick={handleClick} />);
    fireEvent.click(screen.getByText(/Clickable Badge/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
