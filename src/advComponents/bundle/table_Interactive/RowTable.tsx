// ListTable.tsx
import React, { useState } from 'react';
import styles from './TableInteractive.module.css';

interface RowTableProps {
  name: string;
  tags: string;
  imgSrc: string;
  price: number;
}

const RowTable: React.FC<RowTableProps> = ({ name, tags, price, imgSrc }) => {
  return (
    <div className={styles.row}>
      <div className={styles.listData}>
        <div className={styles.name}>{name}</div>
        <div className={styles.tags}>{tags}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <img className={styles.imgHident} src={imgSrc} alt="" />
      <div className={styles.iconArrow}><svg fill="#c9d1f5" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1559.238 1559.238c330.46-330.46 330.46-868.016 0-1198.476-330.46-330.46-868.016-330.46-1198.476 0-330.46 330.46-330.46 868.016 0 1198.476 330.46 330.46 868.016 330.46 1198.476 0ZM280.863 280.863c374.484-374.484 983.79-374.484 1358.274 0 374.484 374.484 374.484 983.79 0 1358.274-374.484 374.484-983.79 374.484-1358.274 0-374.484-374.484-374.484-983.79 0-1358.274Zm359.543 599.239-79.898-79.899L960 400.711l399.492 399.492-79.898 79.899-263.106-263.106.08 822.395H903.432l.08-822.395-263.106 263.106Z" fill-rule="evenodd"></path> </g></svg></div>
    </div>
  );
};

export default RowTable;
