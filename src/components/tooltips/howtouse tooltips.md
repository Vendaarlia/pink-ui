// how to use tootlitps
import React from 'react';
import Tooltips from './Tooltips';

const App: React.FC = () => {
  return (
    <div>
      <h1>Tooltips Component Example</h1>
      <Tooltips text="This is a tooltip" position="top">
        <button>Hover over me</button>
      </Tooltips>
    </div>
  );
};

export default App;
