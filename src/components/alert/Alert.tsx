import React from 'react';
import styles from './Alert.module.css';

type AlertProps = {
  message: string;
  type?: 'normal' | 'danger';
  onClose?: () => void;
};

const Alert: React.FC<AlertProps> = ({ message, type = 'normal', onClose }) => {
  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      <span>{message}</span>
      {onClose && (
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;
