import { render, screen } from '@testing-library/react';
import Subhero from './Subhero';

test('renders Subhero component with provided props', () => {
  render(
    <Subhero
      title="Hero Title"
      subtitle="Hero Subtitle"
      imageSrc="image.png"
      description="This is the subhero description."
    />
  );

  expect(screen.getByText('Hero Title')).toBeInTheDocument();
  expect(screen.getByText('Hero Subtitle')).toBeInTheDocument();
  expect(screen.getByText('This is the subhero description.')).toBeInTheDocument();
  expect(screen.getByAltText('Subhero Image')).toHaveAttribute('src', 'image.png');
});
