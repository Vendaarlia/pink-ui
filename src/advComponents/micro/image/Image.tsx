import React, { useState } from "react";
import styles from './Image.module.css';

interface imageProps {
    src: string;
    alt: string;
    styling: string;
    width?: number | string;
    height?: number | string;
    lazyLoad?: boolean;
    fallbackSrc?: string;
    onClick?: () => void;
    onLoad?: () => void;
    onError?: () => void;
};

const Image: React.FC<imageProps> = ({
    src,
    alt,
    styling,
    width,
    height,
    lazyLoad = false,
    fallbackSrc,
    onClick,
    onLoad,
    onError,
}) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    const handleLoad = () => {
        setLoaded(true);
        if (onLoad) onLoad();
    };

    const handleError = () => {
        setError(true);
        if (onError) onError();
    };

    return (
        <div
            className={`${styles.imageWrapper}`}
            style={{width, height}}
            onClick={onClick}
        >
            <img
            src={error && fallbackSrc ? fallbackSrc : src}
            alt={alt}
            className={`${styles.image} ${loaded ? styles.loaded : ''} ${styles.styling}`}
            loading={lazyLoad ? 'lazy' : 'eager'}
            onLoad={handleLoad}
            onError={handleError}
            />
        </div>
    );
};

export default Image;