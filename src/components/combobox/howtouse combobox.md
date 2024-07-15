// how to use Combobox
import React from 'react';
import Combobox from './Combobox';

const App: React.FC = () => {
  const handleSelect = (value: string) => {
    alert(`Selected: ${value}`);
  };

  return (
    <div>
      <h1>Combobox Component Example</h1>
      <Combobox
        suggestions={['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape']}
        onSelect={handleSelect}
        placeholder="Search..."
        theme="light"
      />
    </div>
  );
};

export default App;
