import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Accordion from './Accordion';

const items = [
  { question: 'What is your name?', answer: 'My name is John Doe.' },
  { question: 'What is your job?', answer: 'I am a software developer.' },
];

test('renders Accordion component with questions and answers', () => {
  render(<Accordion items={items} />);

  // Check if questions are rendered
  items.forEach(item => {
    expect(screen.getByText(item.question)).toBeInTheDocument();
  });

  // Initially, answers should not be visible
  items.forEach(item => {
    expect(screen.queryByText(item.answer)).not.toBeVisible();
  });
});

test('toggles answer visibility on question click', () => {
  render(<Accordion items={items} />);

  // Click the first question
  fireEvent.click(screen.getByText(items[0].question));
  expect(screen.getByText(items[0].answer)).toBeVisible();

  // Click the second question
  fireEvent.click(screen.getByText(items[1].question));
  expect(screen.getByText(items[1].answer)).toBeVisible();

  // The first answer should now be hidden
  expect(screen.queryByText(items[0].answer)).not.toBeVisible();
});
