import React, { useEffect, useState } from 'react';
import styles from './AlertWithTimer.module.css';

type AlertWithTimerProps = {
  message: string;
  type?: 'normal' | 'danger';
  duration?: number; // Duration in milliseconds
  onClose?: () => void;
};

const AlertWithTimer: React.FC<AlertWithTimerProps> = ({
  message,
  type = 'normal',
  duration = 3000, // Default to 3 seconds
  onClose,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) {
        onClose();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div className={styles.grouper}>
      <div className={`${styles.alert} ${styles[type]}`}>
        <div>{message}</div>
      </div>
      <div className={styles.timerContainer}>
        <div className={`${styles.timerLine} ${styles[type]}`} style={{ animationDuration: `${duration}ms` }}></div>
      </div>
    </div>
  );
};

export default AlertWithTimer;
