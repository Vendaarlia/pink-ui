import React, {useState} from "react";
import styles from "./varian.module.css"

interface ImageDungeonProps {
    src: string;
    gifSrc: string;
    className: string;
    lazyLoading?: boolean;
    fallbackSrc: string;
    onClick?: () => void;
    onLoad?: () => void;
    onError?: () => void;
};

const ImageDungeon: React.FC<ImageDungeonProps> = ({
    src,
    gifSrc,
    className,
    lazyLoading = true,
    fallbackSrc,
    onClick,
    onLoad,
    onError,
}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleLoad = () => {
        setLoading(true);
        if (onLoad) onLoad();
    };

    const handleError = () => {
        setError(true);
        if (onError) onError();
    };

    return (
        <div
            style={{ backgroundImage: `url(${gifSrc})` }}
            className={`${styles.imgDungeon} ${className}`}
            onClick={onClick}
        >
            <img
                className={`${styles.gifDungeon}`}
                src={error && fallbackSrc ? fallbackSrc : src}
                loading={lazyLoading ? 'lazy' : 'eager'}
                onLoad={handleLoad}
                onError={handleError}
            />
        </div>
    );
};

export default ImageDungeon;