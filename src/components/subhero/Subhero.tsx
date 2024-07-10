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
      <h3>
        <span><img src={imageSrc} alt="Subhero Image" /></span><br />
        <span>
            <span>{getTitleContent()}</span><br />
            <span>{getSubtitleContent()}</span>
        </span>
      </h3>
      <div className={styles.txtSub}>
        <p>{getDescriptionContent()}</p>
      </div>
    </div>
  );
};

export default Subhero;
