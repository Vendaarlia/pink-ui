// how to use badge
import React from 'react';
import Badge from './Badge';
import { useBadge } from './useBadge';

const App: React.FC = () => {
  const { count, increment, decrement } = useBadge();

  return (
    <div>
      <h1>Badge Component Example</h1>
      <Badge text={`Count: ${count}`} type="primary" />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;
