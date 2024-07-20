import React from 'react';
import styles from './Hero.module.css';
import useHero from './useHero';


interface HeroProps {
  title: string;
  imageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ title, imageUrl }) => {
  const { heroRef } = useHero();

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt="Hero" className={styles.image} />
      </div>
      <div className="subtitle">
        <p>Ready to Raid the Online Dungeon with Guild Master</p>
      </div>
    </section>
  );
};

export default Hero;
