import { Suspense, lazy, useState, useEffect } from 'react';
import { useIntersectionObserver } from './IntersectionObserver';

const LazySection = ({
    importFunc,
    fallbackHeight = "h-64",
    className = "px-4 sm:px-6",
    children,
    prefetch = false, // <- Nuevo prop opcional
    ...props
}) => {
    const [ref, hasIntersected] = useIntersectionObserver();
    const [hasLoaded, setHasLoaded] = useState(false);
    const [LazyComponent, setLazyComponent] = useState(null);

    // Prefetch en background apenas monta si prefetch = true
    useEffect(() => {
        if (prefetch) {
            importFunc().then((mod) => {
                // Guardamos en cache
                setLazyComponent(() => () => mod.default);
                setHasLoaded(true);
            });
        }
    }, [prefetch, importFunc]);

    // Lazy load cuando entra al viewport por primera vez
    useEffect(() => {
        if (hasIntersected && !hasLoaded) {
            const Component = lazy(importFunc);
            setLazyComponent(() => Component);
            setHasLoaded(true);
        }
    }, [hasIntersected, hasLoaded, importFunc]);

    return (
        <section ref={ref} className={className} {...props}>
            {LazyComponent ? (
                <Suspense
                    fallback={
                        <div className={`${fallbackHeight} animate-pulse bg-gray-100 rounded-lg`}>
                            <div className="flex items-center justify-center h-full">
                                <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                            </div>
                        </div>
                    }
                >
                    <LazyComponent />
                </Suspense>
            ) : (
                <div className={`${fallbackHeight} bg-transparent`} />
            )}
            {children}
        </section>
    );
};

export default LazySection;
