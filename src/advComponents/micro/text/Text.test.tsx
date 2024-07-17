// text.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from './Text';

describe('Text Component', () => {
  test('renders with default props', () => {
    render(<Text initialValue="Test text" className="custom-class" />);
    const textElement = screen.getByText('Test text');

    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toBe('P');
    expect(textElement).toHaveClass('text');
    expect(textElement).toHaveClass('custom-class');
    expect(textElement).toHaveClass('medium');
    expect(textElement).toHaveClass('regular');
    expect(textElement).toHaveClass('primary');
    expect(textElement).toHaveClass('left');
  });

  test('renders with different sizes', () => {
    const { rerender } = render(<Text initialValue="Small text" className="custom-class" size="small" />);
    let textElement = screen.getByText('Small text');

    expect(textElement).toHaveClass('small');

    rerender(<Text initialValue="Large text" className="custom-class" size="large" />);
    textElement = screen.getByText('Large text');

    expect(textElement).toHaveClass('large');
  });

  test('renders with different weights', () => {
    const { rerender } = render(<Text initialValue="Light text" className="custom-class" weight="light" />);
    let textElement = screen.getByText('Light text');

    expect(textElement).toHaveClass('light');

    rerender(<Text initialValue="Bold text" className="custom-class" weight="bold" />);
    textElement = screen.getByText('Bold text');

    expect(textElement).toHaveClass('bold');
  });

  test('renders with different colors', () => {
    const { rerender } = render(<Text initialValue="Secondary text" className="custom-class" color="secondary" />);
    let textElement = screen.getByText('Secondary text');

    expect(textElement).toHaveClass('secondary');

    rerender(<Text initialValue="Muted text" className="custom-class" color="muted" />);
    textElement = screen.getByText('Muted text');

    expect(textElement).toHaveClass('muted');
  });

  test('renders with different alignments', () => {
    const { rerender } = render(<Text initialValue="Center text" className="custom-class" align="center" />);
    let textElement = screen.getByText('Center text');

    expect(textElement).toHaveClass('center');

    rerender(<Text initialValue="Right text" className="custom-class" align="right" />);
    textElement = screen.getByText('Right text');

    expect(textElement).toHaveClass('right');
  });

  test('renders with different HTML elements', () => {
    const { rerender } = render(<Text initialValue="Span text" className="custom-class" as="span" />);
    let textElement = screen.getByText('Span text');

    expect(textElement.tagName).toBe('SPAN');

    rerender(<Text initialValue="Strong text" className="custom-class" as="strong" />);
    textElement = screen.getByText('Strong text');

    expect(textElement.tagName).toBe('STRONG');
  });
});
