import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';

type CarouselProps = {
  slides: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  controls?: boolean;
  indicators?: boolean;
  theme?: 'light' | 'dark';
  transition?: 'fade' | 'slide' | 'zoom' | 'flip';
};

const Carousel: React.FC<CarouselProps> = ({
  slides,
  autoPlay = false,
  interval = 3000,
  controls = true,
  indicators = true,
  theme = 'light',
  transition = 'fade'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className={`${styles.carousel} ${styles[theme]}`}>
      <div className={`${styles.slides} ${styles[transition]}`}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
          >
            {slide}
          </div>
        ))}
      </div>
      {controls && (
        <>
          <button className={styles.prev} onClick={prevSlide}>Prev</button>
          <button className={styles.next} onClick={nextSlide}>Next</button>
        </>
      )}
      {indicators && (
        <div className={styles.indicators}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
