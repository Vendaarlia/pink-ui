// Accordion.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Accordion from './Accordion';

const items = [
  { question: 'Question 1', answer: 'Answer 1' },
  { question: 'Question 2', answer: 'Answer 2' },
];

describe('Accordion Component', () => {
  test('renders the correct number of items', () => {
    render(<Accordion items={items} />);
    const questions = screen.getAllByRole('button');
    expect(questions).toHaveLength(items.length);
  });

  test('shows and hides the answer when clicked', () => {
    render(<Accordion items={items} />);
    const firstQuestion = screen.getByText('Question 1');

    // Initially the answer should be hidden
    expect(screen.getByText('Answer 1').parentElement).toHaveStyle('max-height: 0');

    // Click to show the answer
    fireEvent.click(firstQuestion);
    expect(screen.getByText('Answer 1').parentElement).toHaveStyle('max-height: 100px');

    // Click again to hide the answer
    fireEvent.click(firstQuestion);
    expect(screen.getByText('Answer 1').parentElement).toHaveStyle('max-height: 0');
  });

  test('only one answer is shown at a time', () => {
    render(<Accordion items={items} />);
    const firstQuestion = screen.getByText('Question 1');
    const secondQuestion = screen.getByText('Question 2');

    // Click to show the first answer
    fireEvent.click(firstQuestion);
    expect(screen.getByText('Answer 1').parentElement).toHaveStyle('max-height: 100px');
    expect(screen.getByText('Answer 2').parentElement).toHaveStyle('max-height: 0');

    // Click to show the second answer
    fireEvent.click(secondQuestion);
    expect(screen.getByText('Answer 1').parentElement).toHaveStyle('max-height: 0');
    expect(screen.getByText('Answer 2').parentElement).toHaveStyle('max-height: 100px');
  });

  test('adds active class to the opened question', () => {
    render(<Accordion items={items} />);
    const firstQuestion = screen.getByText('Question 1');

    // Initially, the question should not have an active class
    expect(firstQuestion).not.toHaveClass('active');

    // Click to show the answer and add active class
    fireEvent.click(firstQuestion);
    expect(firstQuestion).toHaveClass('active');
  });
});
