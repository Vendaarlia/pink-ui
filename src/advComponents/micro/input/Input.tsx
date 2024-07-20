import React, { InputHTMLAttributes, forwardRef } from 'react';
import styles from './Input.module.css';
import { useInput } from './useInput';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ errorMessage, ...props }, ref) => {
  const { hasError, handleFocus, handleBlur } = useInput();

  return (
    <div className={styles.inputWrapper}>
      <input
        ref={ref}
        className={`${styles.input} ${hasError ? styles.error : ''}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      {hasError && errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
