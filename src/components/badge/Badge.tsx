import React from 'react';
import styles from './Badge.module.css';

type BadgeProps = {
  text: string;
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'outline';
  onClick?: () => void;
};

const Badge: React.FC<BadgeProps> = ({ text, type = 'primary', onClick }) => {
  return (
    <span className={`${styles.badge} ${styles[type]}`} onClick={onClick}>
      {text}
    </span>
  );
};

export default Badge;
