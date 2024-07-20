import React from "react";
import RowTable from "./RowTable";
import styles from './TableInteractive.module.css';

export function TableInteractive() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.circle}></div>
                    <h1>Bags & cases</h1>
                </div>
                <p>Lorem ipsum dolor consectetur adipisicing elit.  Messe debitis maxime! Esse est.</p>
            </div>
            <RowTable name="back pack" tags="goldrush" price={20} imgSrc="guild.PNG" />
            <RowTable name="back pack" tags="goldrush" price={20} imgSrc="guild.PNG" />
            <RowTable name="back pack" tags="goldrush" price={20} imgSrc="guild.PNG" />
            <RowTable name="back pack" tags="goldrush" price={20} imgSrc="guild.PNG" />
        </>
    )
}

export default TableInteractive;