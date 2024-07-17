// Tooltips.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tooltips from './Tooltips';

describe('Tooltips Component', () => {
  test('renders children correctly', () => {
    render(
      <Tooltips text="Tooltip text">
        <button>Hover me</button>
      </Tooltips>
    );

    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  test('shows tooltip on hover', () => {
    render(
      <Tooltips text="Tooltip text">
        <button>Hover me</button>
      </Tooltips>
    );

    fireEvent.mouseEnter(screen.getByText('Hover me'));
    expect(screen.getByText('Tooltip text')).toBeInTheDocument();
  });

  test('hides tooltip on mouse leave', () => {
    render(
      <Tooltips text="Tooltip text">
        <button>Hover me</button>
      </Tooltips>
    );

    const button = screen.getByText('Hover me');
    fireEvent.mouseEnter(button);
    fireEvent.mouseLeave(button);
    expect(screen.queryByText('Tooltip text')).not.toBeInTheDocument();
  });

  test('positions tooltip correctly', () => {
    const { rerender } = render(
      <Tooltips text="Tooltip text" position="top">
        <button>Hover me</button>
      </Tooltips>
    );

    fireEvent.mouseEnter(screen.getByText('Hover me'));
    expect(screen.getByText('Tooltip text')).toHaveClass('top');

    rerender(
      <Tooltips text="Tooltip text" position="right">
        <button>Hover me</button>
      </Tooltips>
    );
    fireEvent.mouseEnter(screen.getByText('Hover me'));
    expect(screen.getByText('Tooltip text')).toHaveClass('right');

    rerender(
      <Tooltips text="Tooltip text" position="bottom">
        <button>Hover me</button>
      </Tooltips>
    );
    fireEvent.mouseEnter(screen.getByText('Hover me'));
    expect(screen.getByText('Tooltip text')).toHaveClass('bottom');

    rerender(
      <Tooltips text="Tooltip text" position="left">
        <button>Hover me</button>
      </Tooltips>
    );
    fireEvent.mouseEnter(screen.getByText('Hover me'));
    expect(screen.getByText('Tooltip text')).toHaveClass('left');
  });
});
