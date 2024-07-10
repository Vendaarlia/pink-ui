import { useRef } from 'react';

const useHero = () => {
  const heroRef = useRef<HTMLElement | null>(null);

  // Add any specific logic for the hero component here, e.g., scroll effects or animations

  return {
    heroRef,
  };
};

export default useHero;
