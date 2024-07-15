// useTooltips.ts
import { useState, useCallback } from 'react';

export const useTooltips = () => {
  const [visible, setVisible] = useState(false);

  const showTooltip = useCallback(() => setVisible(true), []);
  const hideTooltip = useCallback(() => setVisible(false), []);

  return { visible, showTooltip, hideTooltip };
};
