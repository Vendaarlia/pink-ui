import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('renders Navbar with links and logo', () => {
  const leftLinks = [
    { text: 'Guild', href: '/' },
    { text: 'Work', href: '/' },
  ];
  const rightLinks = [
    { text: 'Service', href: '/' },
    { text: 'Contact', href: '/', target: '_blank' },
  ];
  const logoText = 'DCARDGM';

  render(<Navbar leftLinks={leftLinks} rightLinks={rightLinks} logoText={logoText} />);

  // Check for links and logo
  leftLinks.forEach(link => {
    expect(screen.getByText(link.text)).toBeInTheDocument();
  });
  rightLinks.forEach(link => {
    expect(screen.getByText(link.text)).toBeInTheDocument();
  });
  expect(screen.getByText(logoText)).toBeInTheDocument();
});
