// AlertWithTimer.test.tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import AlertWithTimer from './AlertWithTimer';

describe('AlertWithTimer Component', () => {
  test('renders alert with message and type', () => {
    render(<AlertWithTimer message="Test Alert" type="danger" duration={3000} />);

    expect(screen.getByText('Test Alert')).toBeInTheDocument();
    expect(screen.getByText('Test Alert').parentElement).toHaveClass('danger');
  });

  test('disappears after duration', async () => {
    render(<AlertWithTimer message="Test Alert" duration={3000} />);

    expect(screen.getByText('Test Alert')).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.queryByText('Test Alert')).not.toBeInTheDocument();
    }, { timeout: 3100 });
  });

  test('calls onClose after duration', async () => {
    const onClose = jest.fn();
    render(<AlertWithTimer message="Test Alert" duration={3000} onClose={onClose} />);

    expect(screen.getByText('Test Alert')).toBeInTheDocument();
    
    await waitFor(() => {
      expect(onClose).toHaveBeenCalled();
    }, { timeout: 3100 });
  });

  test('renders timer line with correct animation duration', () => {
    render(<AlertWithTimer message="Test Alert" duration={3000} />);
    
    const timerLine = screen.getByText('Test Alert').parentElement!.nextSibling!.firstChild as HTMLElement;
    expect(timerLine).toHaveStyle(`animation-duration: 3000ms`);
  });

  test('does not render if visible is false', () => {
    jest.useFakeTimers();
    render(<AlertWithTimer message="Test Alert" duration={3000} />);
    
    jest.advanceTimersByTime(3000);
    expect(screen.queryByText('Test Alert')).not.toBeInTheDocument();
    
    jest.useRealTimers();
  });
});
