import { useState, useCallback } from "react";

interface useTextProps {
    initialValue: string;
    className: string;
    size?: 'small' | 'medium' | 'large';
    weight?: 'light' | 'regular' | 'bold';
    color?: 'primary' | 'secondary' | 'muted';
    align?: 'left' | 'center' | 'right';
};

export const useText = ({
    initialValue,
    className,
    size = 'medium',
    weight = 'regular',
    color = 'primary',
    align = 'left',
}: useTextProps) => {
    const [text, setText] = useState(initialValue);
    const [textClassName, setClassName] = useState(className);
    const [textSize, setTextSize] = useState(size);
    const [textWeight, setTextWeight] = useState(weight);
    const [textColor, setTextColor] = useState(color);
    const [textAlign, setTextAlign] = useState(align);

    const updateText = useCallback((newText: string) => setText(newText), []);
    const updateTextClassName = useCallback((className: string) => setClassName(className), []);
    const updateSize = useCallback((newSize: 'small' | 'medium' | 'large') => setTextSize(newSize), []);
    const updateWeight = useCallback((newWeight: 'light' | 'regular' | 'bold') => setTextWeight(newWeight), []);
    const updateColor = useCallback((newColor: 'primary' | 'secondary' | 'muted') => setTextColor(newColor), []);
    const updateAlign = useCallback((newAlign: 'left' | 'center' | 'right') => setTextAlign(newAlign), []);

    return {
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
    };
};