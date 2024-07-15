// Tooltips.tsx
import React from 'react';
import styles from './Tooltips.module.css';
import { useTooltips } from './useTooltips';

type TooltipsProps = {
  text: string;
  children: React.ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
};

const Tooltips: React.FC<TooltipsProps> = ({ text, children, position = 'top' }) => {
  const { visible, showTooltip, hideTooltip } = useTooltips();

  return (
    <div className={styles.tooltipWrapper} onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      {visible && <div className={`${styles.tooltip} ${styles[position]}`}>{text}</div>}
    </div>
  );
};

export default Tooltips;
