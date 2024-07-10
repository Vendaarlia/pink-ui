import React from 'react';
import useButton from './useButton';

type ButtonProps = {
  type?: 'primary' | 'secondary' | 'danger';
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  isLoading = false,
  isDisabled = false,
  onClick,
  children,
}) => {
  const { handleClick, getClassNames } = useButton({ type, isLoading, isDisabled, onClick });

  return (
    <button
      className={getClassNames()}
      onClick={handleClick}
      disabled={isDisabled || isLoading}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
