import React from 'react';
import styles from './Subhero.module.css';
import useSubhero from './useSubhero';

type SubheroProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
  description: string;
};

const Subhero: React.FC<SubheroProps> = ({ title, subtitle, imageSrc, description }) => {
  const { getTitleContent, getSubtitleContent, getDescriptionContent } = useSubhero({ title, subtitle, description });

  return (
    <div className={styles.subHero}>
      <div>
        <div><img src={imageSrc} alt="Subhero Image" /></div>
        <div>
            <h3>{getTitleContent()}</h3>
            <h3>{getSubtitleContent()}</h3>
        </div>
      </div>
      <div className={styles.txtSub}>
        <p>{getDescriptionContent()}</p>
      </div>
    </div>
  );
};

export default Subhero;
