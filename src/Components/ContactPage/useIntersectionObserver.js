import { useState, useEffect, useRef } from 'react';

export const useIntersectionObserver = (options = {}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const targetRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, ...options }
        );

        const current = targetRef.current;
        if (current) observer.observe(current);

        return () => observer.disconnect();
    }, []);

    return [targetRef, isIntersecting];
};