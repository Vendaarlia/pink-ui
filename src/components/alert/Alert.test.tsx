import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Alert from './Alert';

describe('Alert Component', () => {
  test('renders the correct message and type', () => {
    render(<Alert message="This is a test alert" type="normal" />);
    expect(screen.getByText(/This is a test alert/i)).toBeInTheDocument();
  });

  test('applies the correct class for danger alert', () => {
    render(<Alert message="Danger alert" type="danger" />);
    expect(screen.getByText(/Danger alert/i)).toHaveClass('danger');
  });

  test('calls onClose handler when close button is clicked', () => {
    const onCloseMock = jest.fn();
    render(<Alert message="Closable alert" onClose={onCloseMock} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
