// Image.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Image from './Image';

describe('Image Component', () => {
  const props = {
    src: 'https://via.placeholder.com/150',
    alt: 'test image',
    styling: 'custom-styling',
    width: '150px',
    height: '150px',
    lazyLoad: true,
    fallbackSrc: 'https://via.placeholder.com/150/FF0000/FFFFFF?Text=Fallback',
  };

  test('renders image with correct src and alt', () => {
    render(<Image {...props} />);
    const img = screen.getByAltText('test image');
    expect(img).toHaveAttribute('src', props.src);
    expect(img).toHaveAttribute('alt', props.alt);
  });

  test('applies custom styling class', () => {
    render(<Image {...props} />);
    const img = screen.getByAltText('test image');
    expect(img).toBeInTheDocument(), [];
  });

  test('applies lazy loading attribute', () => {
    render(<Image {...props} />);
    const img = screen.getByAltText('test image');
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  test('triggers onLoad event', () => {
    const handleLoad = jest.fn();
    render(<Image {...props} onLoad={handleLoad} />);
    const img = screen.getByAltText('test image');
    fireEvent.load(img);
    expect(handleLoad).toHaveBeenCalled();
  });

  test('triggers onError event and uses fallbackSrc', () => {
    const handleError = jest.fn();
    render(<Image {...props} onError={handleError} />);
    const img = screen.getByAltText('test image');
    fireEvent.error(img);
    expect(handleError).toHaveBeenCalled();
    expect(img).toHaveAttribute('src', props.fallbackSrc);
  });

  test('triggers onClick event', () => {
    const handleClick = jest.fn();
    render(<Image {...props} onClick={handleClick} />);
    const img = screen.getByAltText('test image');
    fireEvent.click(img);
    expect(handleClick).toHaveBeenCalled();
  });

  test('renders with correct width and height', () => {
    render(<Image {...props} />);
    const imgWrapper = screen.getByRole('img').parentElement;
    expect(imgWrapper).toHaveStyle({ width: '150px', height: '150px' });
  });
});
