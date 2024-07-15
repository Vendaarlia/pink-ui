import { useState, useEffect } from 'react';

export const useCarousel = (length: number, autoPlay: boolean = false, interval: number = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + length) % length);
  };

  return { currentIndex, goToSlide, nextSlide, prevSlide };
};
