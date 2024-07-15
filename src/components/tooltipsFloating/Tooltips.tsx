import React, { useState, useRef, useEffect } from 'react';
import styles from './Tooltips.module.css';
import { useTooltips } from './useTooltips';

type TooltipsProps = {
  text: string;
  children: React.ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
};

const Tooltips: React.FC<TooltipsProps> = ({ text, children, position = 'top' }) => {
  const { visible, showTooltip, hideTooltip } = useTooltips();
  const [tooltipPosition, setTooltipPosition] = useState(position);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible && tooltipRef.current && wrapperRef.current) {
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const wrapperRect = wrapperRef.current.getBoundingClientRect();

      if (position === 'top' && tooltipRect.top < 0) {
        setTooltipPosition('bottom');
      } else if (position === 'bottom' && tooltipRect.bottom > window.innerHeight) {
        setTooltipPosition('top');
      } else if (position === 'left' && tooltipRect.left < 0) {
        setTooltipPosition('right');
      } else if (position === 'right' && tooltipRect.right > window.innerWidth) {
        setTooltipPosition('left');
      } else {
        setTooltipPosition(position);
      }
    }
  }, [visible, position]);

  return (
    <div
      className={styles.tooltipWrapper}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      ref={wrapperRef}
    >
      {children}
      {visible && (
        <div className={`${styles.tooltip} ${styles[tooltipPosition]}`} ref={tooltipRef}>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltips;
