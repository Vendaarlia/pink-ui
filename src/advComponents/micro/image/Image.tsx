import React, { useState } from "react";
import styles from './Image.module.css';

interface imageProps {
    src: string;
    alt: string;
    className: string;
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
    className, //can't use classname the syntax if work : className={`${styles.image} ${loaded ? styles.loaded : ''} ${className}`}
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
            className={`${styles.image} ${loaded ? styles.loaded : ''}`}
            loading={lazyLoad ? 'lazy' : 'eager'}
            onLoad={handleLoad}
            onError={handleError}
            />
        </div>
    );
};

export default Image;