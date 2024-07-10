how to use Subhero component

import React from 'react';
import Subhero from './components/Subhero/Subhero';

const App: React.FC = () => {
  return (
    <div>
        // syntax subhero with props
      <Subhero
        title="Welcome to Our Website"
        subtitle="Experience the best"
        imageSrc="https://via.placeholder.com/50"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum."
      />
    </div>
  );
};

export default App;
