import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Tooltips from './Tooltips';

describe('Tooltips Component', () => {
  test('renders child content', () => {
    render(
      <Tooltips text="Tooltip Text">
        <button>Hover me</button>
      </Tooltips>
    );
    expect(screen.getByText(/Hover me/i)).toBeInTheDocument();
  });

  test('shows tooltip on hover', () => {
    render(
      <Tooltips text="Tooltip Text">
        <button>Hover me</button>
      </Tooltips>
    );
    fireEvent.mouseEnter(screen.getByText(/Hover me/i));
    expect(screen.getByText(/Tooltip Text/i)).toBeInTheDocument();
  });

  test('hides tooltip on mouse leave', () => {
    render(
      <Tooltips text="Tooltip Text">
        <button>Hover me</button>
      </Tooltips>
    );
    const button = screen.getByText(/Hover me/i);
    fireEvent.mouseEnter(button);
    fireEvent.mouseLeave(button);
    expect(screen.queryByText(/Tooltip Text/i)).not.toBeInTheDocument();
  });
});
