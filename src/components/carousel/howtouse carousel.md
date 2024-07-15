// how to use Carousel
import React from 'react';
import Carousel from './Carousel';

const App: React.FC = () => {
  const slides = [
    <div key="1">Slide 1</div>,
    <div key="2">Slide 2</div>,
    <div key="3">Slide 3</div>
  ];

  return (
    <div>
      <h1>Carousel Component Example</h1>
      <Carousel slides={slides} autoPlay={true} interval={2000} controls={true} indicators={true} theme="light" transition="fade" />
    </div>
  );
};

export default App;
