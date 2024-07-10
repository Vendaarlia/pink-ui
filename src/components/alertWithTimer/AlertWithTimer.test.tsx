// AlertTime.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import AlertWithTimer from './AlertWithTimer';

jest.useFakeTimers();

describe('AlertTime Component', () => {
  test('renders the correct message and type', () => {
    render(<AlertWithTimer message="This is a timed alert" type="normal" />);
    expect(screen.getByText(/This is a timed alert/i)).toBeInTheDocument();
  });

  test('applies the correct class for danger alert', () => {
    render(<AlertWithTimer message="Danger alert" type="danger" />);
    expect(screen.getByText(/Danger alert/i)).toHaveClass('danger');
  });

  test('disappears after the specified duration', () => {
    render(<AlertWithTimer message="Timed alert" duration={3000} />);
    expect(screen.getByText(/Timed alert/i)).toBeInTheDocument();
    
    jest.advanceTimersByTime(3000);
    expect(screen.queryByText(/Timed alert/i)).toBeNull();
  });

  test('calls onClose handler after the duration', () => {
    const onCloseMock = jest.fn();
    render(<AlertWithTimer message="Closable alert" duration={3000} onClose={onCloseMock} />);
    
    jest.advanceTimersByTime(3000);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
