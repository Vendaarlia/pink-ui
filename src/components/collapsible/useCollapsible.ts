import { useState } from 'react';

export const useCollapsible = (defaultExpanded: boolean = false) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  return { isExpanded, toggleCollapse };
};
