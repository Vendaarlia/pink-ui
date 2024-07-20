import { useState } from 'react';

export const useInput = () => {
  const [hasError, setHasError] = useState(false);

  const handleFocus = () => {
    setHasError(false);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setHasError(true);
    }
  };

  return {
    hasError,
    handleFocus,
    handleBlur,
  };
};
