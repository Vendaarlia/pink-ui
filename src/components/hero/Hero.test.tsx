import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from './Hero';

test('renders Hero component with title and image', () => {
  const title = "Welcome to Our Website";
  const imageUrl = "https://via.placeholder.com/800x400";

  render(<Hero title={title} imageUrl={imageUrl} />);

  // Check if the title is rendered correctly
  expect(screen.getByText(title)).toBeInTheDocument();

  // Check if the image is rendered with the correct source
  const image = screen.getByAltText("Hero") as HTMLImageElement;
  expect(image).toBeInTheDocument();
  expect(image.src).toContain(imageUrl);
});
