import { useState } from 'react';

const useAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const isActive = (index: number) => {
    return activeIndex === index;
  };

  return { isActive, handleToggle };
};

export default useAccordion;
