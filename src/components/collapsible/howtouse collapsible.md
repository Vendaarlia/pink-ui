// how to use Collapsible
import React from 'react';
import Collapsible from './Collapsible';

const App: React.FC = () => {
  return (
    <div>
      <h1>Collapsible Component Example</h1>
      <Collapsible title="Click to expand/collapse">
        <p>This is the content of the collapsible panel.</p>
      </Collapsible>
    </div>
  );
};

export default App;
