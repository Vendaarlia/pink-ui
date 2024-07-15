import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from './Carousel';

describe('Carousel Component', () => {
  const slides = [<div key="1">Slide 1</div>, <div key="2">Slide 2</div>, <div key="3">Slide 3</div>];

  test('renders the correct number of slides', () => {
    render(<Carousel slides={slides} />);
    expect(screen.getByText(/Slide 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Slide 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Slide 3/i)).toBeInTheDocument();
  });

  test('changes to the next slide on next button click', () => {
    render(<Carousel slides={slides} />);
    fireEvent.click(screen.getByText(/Next/i));
    expect(screen.getByText(/Slide 2/i)).toHaveClass('active');
  });

  test('changes to the previous slide on prev button click', () => {
    render(<Carousel slides={slides} />);
    fireEvent.click(screen.getByText(/Prev/i));
    expect(screen.getByText(/Slide 3/i)).toHaveClass('active');
  });

  test('shows the correct indicator as active', () => {
    render(<Carousel slides={slides} />);
    expect(screen.getAllByRole('button')[0]).toHaveClass('active');
  });
});
