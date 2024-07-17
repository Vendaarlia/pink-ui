import React from 'react';
import styles from './Accordion.module.css';
import useAccordion from './useAccordion';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const { isActive, handleToggle } = useAccordion();

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <button
            className={`${styles.question} ${isActive(index) ? styles.active : ''}`}
            onClick={() => handleToggle(index)}
          >
            {item.question} <span>↘︎</span>
          </button>
          <div
            className={`${styles.answer} ${isActive(index) ? styles.show : ''}`}
            style={{ maxHeight: isActive(index) ? '100px' : '0' }}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
