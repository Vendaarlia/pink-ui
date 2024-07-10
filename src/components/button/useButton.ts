

import { useCallback } from 'react';
import styles from './Button.module.css';

type UseButtonProps = {
  type: 'primary' | 'secondary' | 'danger';
  isLoading: boolean;
  isDisabled: boolean;
  onClick?: () => void;
};

const useButton = ({ type, isLoading, isDisabled, onClick }: UseButtonProps) => {
  const handleClick = useCallback(() => {
    if (!isDisabled && !isLoading && onClick) {
      onClick();
    }
  }, [isDisabled, isLoading, onClick]);

  const getClassNames = useCallback(() => {
    let classNames = `${styles.button} ${styles[type]}`;
    if (isLoading) {
      classNames += ` ${styles.loading}`;
    }
    if (isDisabled) {
      classNames += ` ${styles.disabled}`;
    }
    return classNames;
  }, [type, isLoading, isDisabled]);

  return { handleClick, getClassNames };
};

export default useButton;
