how to use Hero component

import React from 'react';
import Hero from './components/Hero/Hero';

const App: React.FC = () => {
  return (

      <main>
        <Hero
          title="Welcome to Our Website"
          imageUrl="https://via.placeholder.com/800x400"
          altText="A beautiful scenic view"
        />

      </main>
  );
};

export default App;
