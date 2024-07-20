import React, { InputHTMLAttributes, forwardRef } from 'react';
import styles from './Checkbox.module.css';
import { useCheckbox } from './useCheckbox';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ label, ...props }, ref) => {
  const { checkboxClassName, labelClassName } = useCheckbox();

  return (
    <div className={styles.checkboxWrapper}>
      <input
        type="checkbox"
        ref={ref}
        className={`${styles.checkbox} ${checkboxClassName}`}
        {...props}
      />
      {label && <label className={`${styles.label} ${labelClassName}`}>{label}</label>}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
