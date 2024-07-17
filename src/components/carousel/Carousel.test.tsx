// carousel.test.tsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Carousel from './Carousel';

const slides = [
  <div>Slide 1</div>,
  <div>Slide 2</div>,
  <div>Slide 3</div>,
];

describe('Carousel Component', () => {
  test('renders the correct number of slides', () => {
    render(<Carousel slides={slides} />);
    const slideElements = screen.getAllByText(/Slide/i);
    expect(slideElements).toHaveLength(slides.length);
  });

  test('changes to the next slide on next button click', () => {
    render(<Carousel slides={slides} />);
    fireEvent.click(screen.getByText(/Next/i));
    expect(screen.getByText(/Slide 2/i).parentElement).toHaveClass('active');
  });

  test('changes to the previous slide on prev button click', () => {
    render(<Carousel slides={slides} />);
    fireEvent.click(screen.getByText(/Prev/i));
    expect(screen.getByText(/Slide 3/i).parentElement).toHaveClass('active');
  });

  test('shows the correct indicator as active', () => {
    render(<Carousel slides={slides} />);
    fireEvent.click(screen.getByText(/Next/i));
    const indicators = screen.getAllByRole('button', { name: '' }); // Assuming indicators have no accessible name
    expect(indicators[1]).toHaveClass('active');
  });

  test('auto plays slides at the given interval', async () => {
    jest.useFakeTimers();
    render(<Carousel slides={slides} autoPlay={true} interval={1000} />);
    expect(screen.getByText(/Slide 1/i).parentElement).toHaveClass('active');
    jest.advanceTimersByTime(1000);
    await waitFor(() => expect(screen.getByText(/Slide 2/i).parentElement).toHaveClass('active'));
    jest.advanceTimersByTime(1000);
    await waitFor(() => expect(screen.getByText(/Slide 3/i).parentElement).toHaveClass('active'));
    jest.advanceTimersByTime(1000);
    await waitFor(() => expect(screen.getByText(/Slide 1/i).parentElement).toHaveClass('active'));
    jest.useRealTimers();
  });
});
