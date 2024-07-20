import { useState, useEffect } from 'react';

export const useCheckbox = () => {
  const [checkboxClassName, setCheckboxClassName] = useState('');
  const [labelClassName, setLabelClassName] = useState('');

  useEffect(() => {
    // You can add logic here to dynamically set the class names
    setCheckboxClassName('defaultCheckbox');
    setLabelClassName('defaultLabel');
  }, []);

  return {
    checkboxClassName,
    labelClassName,
  };
};
