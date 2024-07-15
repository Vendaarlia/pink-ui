// how to use Card

import React from 'react';
import Subhero from './components/Subhero/Subhero';

const App: React.FC = () => {
  return (
    <div>
        // syntax card with props
      <Card
        title="Card"
        textOne="This card test"
        textTwo="This need to render"
        imageSrc="image.png"
        />
    </div>
  );
};

export default App;