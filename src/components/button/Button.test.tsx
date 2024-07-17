import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

test('render button with children', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
})

test('applies correct class for primary type', () => {
    render(<Button type="primary">Primary Button</Button>);
    expect(screen.getByText('Primary Button')).toHaveClass('button primary');
  });

  test('disables button when isDisabled is true', () => {
    render(<Button isDisabled={true}>Disabled Button</Button>);
    expect(screen.getByText('Disabled Button')).toBeDisabled();
  });

  test('shows loading state when isLoading is true', () => {
    render(<Button isLoading={true}>Loading...</Button>);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('triggers onClick function when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });