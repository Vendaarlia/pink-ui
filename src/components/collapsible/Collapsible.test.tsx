import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Collapsible from './Collapsible';

describe('Collapsible Component', () => {
  test('renders title correctly', () => {
    render(<Collapsible title="Test Title">Content</Collapsible>);
    expect(screen.getByText(/Test Title/i)).toBeInTheDocument();
  });

  test('expands and collapses content', () => {
    render(<Collapsible title="Test Title">Content</Collapsible>);
    const button = screen.getByText(/Test Title/i);
    fireEvent.click(button);
    expect(screen.getByText(/Content/i)).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.queryByText(/Content/i)).not.toBeInTheDocument();
  });

  test('renders content when defaultExpanded is true', () => {
    render(
      <Collapsible title="Test Title" defaultExpanded={true}>
        Content
      </Collapsible>
    );
    expect(screen.getByText(/Content/i)).toBeInTheDocument();
  });
});
