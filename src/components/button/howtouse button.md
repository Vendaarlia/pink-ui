how to use Button component

import React from 'react';
import Button from './components/Button/Button';

const App: React.FC = () => {
    
    // defind handling click
  const handlePrimaryClick = () => alert('Primary button clicked!');
  const handleSecondaryClick = () => alert('Secondary button clicked!');
  const handleDangerClick = () => alert('Danger button clicked!');

  return (
    <div>
            // syntax pengunaan button with props nya
      <Button type="primary" onClick={handlePrimaryClick}>
        Primary Button
      </Button>
      
      <Button type="secondary" onClick={handleSecondaryClick} isDisabled={true}>
        Disabled Secondary Button
      </Button>
      
      <Button type="danger" onClick={handleDangerClick} isLoading={true}>
        Danger Button (Loading)
      </Button>
    </div>
  );
};

export default App;
