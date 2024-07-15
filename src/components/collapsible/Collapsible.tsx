import React, { useState } from 'react';
import styles from './Collapsible.module.css';

type CollapsibleProps = {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
};

const Collapsible: React.FC<CollapsibleProps> = ({ title, children, defaultExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.collapsible}>
      <button className={styles.header} onClick={toggleCollapse}>
        {title}
      </button>
      {isExpanded && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default Collapsible;
