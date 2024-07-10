how to use Navbar component

import React from 'react';
import Navbar from './Navbar';

const App = () => {
  const leftLinks = [
    { text: 'Guild', href: '/', className: 'custom-class-left' },
    { text: 'Work', href: '/', className: 'custom-class-left' },
  ];
  const rightLinks = [
    { text: 'Service', href: '/', className: 'custom-class-right' },
    { text: 'Contact', href: '/', target: '_blank', className: 'custom-class-right' },
  ];
  const logoText = 'DCARDGM';

  return (
    <div>
      <Navbar leftLinks={leftLinks} rightLinks={rightLinks} logoText={logoText} />
    </div>
  );
};

export default App;

