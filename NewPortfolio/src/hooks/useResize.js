import { useState, useEffect } from 'react';

export default function useResize() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const changeSize = () => {
        if (window.innerWidth === width && window.innerHeight === height)
            return;
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('resize', changeSize);
        return () => window.removeEventListener('resize', changeSize);
    }, []);

    return { width, height };
}
