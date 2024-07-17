import React from 'react';
import styles from './Text.module.css';
import { useText } from './useText';

interface textProps {
    initialValue: string;
    className: string;
    size?: 'small' | 'medium' | 'large';
    weight?: 'light' | 'regular' | 'bold';
    color?: 'primary' | 'secondary' | 'muted';
    align?: 'left' | 'center' | 'right';
    as?: 'p' | 'span' | 'div' | 'strong' | 'em';
};

const Text: React.FC<textProps> = ({
    initialValue,
    className,
    size = 'medium',
    weight = 'regular',
    color = 'primary',
    align = 'left',
    as: Component =  'p',
}) => {
    const {
        text,
        textClassName,
        textSize,
        textWeight,
        textColor,
        textAlign,
        updateText,
        updateTextClassName,
        updateSize,
        updateWeight,
        updateColor,
        updateAlign,
    } = useText({ initialValue, className, size, weight, color, align });

    return (
        <Component
            className={`${styles.text} ${styles[textClassName]} ${styles[textSize]} ${styles[textWeight]} ${styles[textColor]} ${styles[textAlign]}`}
            >
                {text}
            </Component>
    );
};

export default Text;