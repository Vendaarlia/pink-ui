// how to use text
import React from 'react';
import Text from './Text';

const App: React.FC = () => {
  return (
    <div>
      <h1>Text Component Example</h1>
      <Text size="large" weight="bold" color="primary" align="center">
        Large Bold Primary Centered Text
      </Text>
      <Text size="small" weight="light" color="secondary" align="left">
        Small Light Secondary Left-aligned Text
      </Text>
    </div>
  );
};

export default App;
