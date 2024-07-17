// how to use image
import React from 'react';
import Image from './Image';

const App: React.FC = () => {
  return (
    <div>
      <h1>Image Component Example</h1>
      <Image
        src="https://via.placeholder.com/300"
        alt="Sample Image"
        width={300}
        height={300}
        rounded
        shadow
      />
      <Image
        src="invalid.jpg"
        alt="Sample Image with Fallback"
        width={300}
        height={300}
        fallbackSrc="https://via.placeholder.com/300"
      />
    </div>
  );
};

export default App;
