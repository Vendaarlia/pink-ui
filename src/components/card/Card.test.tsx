// Card.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe('Card Component', () => {
  const props = {
    title: 'Card Title',
    textOne: 'This is the first text',
    textTwo: 'This is the second text',
    imageSrc: 'https://via.placeholder.com/150',
  };

  test('renders Card component', () => {
    render(<Card {...props} />);
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.textOne)).toBeInTheDocument();
    expect(screen.getByText(props.textTwo)).toBeInTheDocument();
    expect(screen.getByAltText('card')).toBeInTheDocument();
  });

  test('renders image with correct src and alt', () => {
    render(<Card {...props} />);
    const image = screen.getByAltText('card');
    expect(image).toHaveAttribute('src', props.imageSrc);
  });

  test('renders title correctly', () => {
    render(<Card {...props} />);
    expect(screen.getByText(props.title)).toBeInTheDocument();
  });

  test('renders textOne correctly', () => {
    render(<Card {...props} />);
    expect(screen.getByText(props.textOne)).toBeInTheDocument();
  });

  test('renders textTwo correctly', () => {
    render(<Card {...props} />);
    expect(screen.getByText(props.textTwo)).toBeInTheDocument();
  });
});
