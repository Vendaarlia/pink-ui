import React from 'react';
import styles from './Card.module.css';
import useCard from './useCard';


type CardProps = {
    title: string;
    textOne: string;
    textTwo: string;
    imageSrc: string;
};

const Card: React.FC<CardProps> = ({ title, textOne, textTwo, imageSrc }) => {
    const { getTitle, getTextOne, getTextTwo } = useCard({ title, textOne, textTwo, imageSrc });

    return (
        <div className={styles.card} >
            <div className={styles.imgContainer} >
                <img className={styles.img} src={imageSrc} alt="card" />
            </div>
            <h3>{getTitle()}</h3>
            <div>
                <p className={styles.textOne}>{getTextOne()}</p>
                <p className={styles.textTwo}>{getTextTwo()}</p>
            </div>
        </div>
    )
}

export default Card;