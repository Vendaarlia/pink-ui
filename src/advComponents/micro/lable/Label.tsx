import React, { LabelHTMLAttributes, forwardRef } from 'react';
import styles from './Label.module.css';
import { useLabel } from './useLabel';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
  htmlFor?: string;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(({ text, htmlFor, ...props }, ref) => {
  const { labelClassName } = useLabel();

  return (
    <label
      ref={ref}
      htmlFor={htmlFor}
      className={`${styles.label} ${labelClassName}`}
      {...props}
    >
      {text}
    </label>
  );
});

Label.displayName = 'Label';

export default Label;
