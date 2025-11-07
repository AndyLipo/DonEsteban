import { Suspense, lazy, useState, useEffect } from 'react';
import { useIntersectionObserver } from './IntersectionObserver';

const LazySection = ({
    importFunc,
    fallbackHeight = "h-64",
    className = "",
    children,
    prefetch = false,
    id,
    ...props
}) => {
    const [ref, hasIntersected] = useIntersectionObserver();
    const [hasLoaded, setHasLoaded] = useState(false);
    const [LazyComponent, setLazyComponent] = useState(null);

    // Alturas específicas por sección (para evitar CLS)
    const getMinHeight = () => {
        switch (id) {
            case 'contact-form':
                return 'min-content';
            case 'gallery':
                return '600px';
            case 'map':
                return '450px';
            default:
                return undefined;
        }
    };

    const minHeight = getMinHeight();

    // Prefetch en background apenas monta
    useEffect(() => {
        if (prefetch) {
            importFunc().then((mod) => {
                // ✅ CORREGIDO: no envolvemos en una función
                setLazyComponent(() => mod.default);
                setHasLoaded(true);
            });
        }
    }, [prefetch, importFunc]);

    // Lazy load cuando entra al viewport
    useEffect(() => {
        if (hasIntersected && !hasLoaded) {
            const Component = lazy(importFunc);
            setLazyComponent(() => Component);
            setHasLoaded(true);
        }
    }, [hasIntersected, hasLoaded, importFunc]);

    return (
        <section
            ref={ref}
            className={className}
            id={id}
            style={{
                minHeight,
                height: minHeight, // evita que cambie la altura al cargarse
                overflow: "hidden",
                display: "block",
            }}
            {...props}
        >
            {LazyComponent ? (
                <Suspense
                    fallback={
                        <div
                            className={`${fallbackHeight} animate-pulse bg-gray-100 rounded-lg`}
                            style={{
                                minHeight,
                                height: minHeight,
                            }}
                        >
                            <div className="flex items-center justify-center h-full">
                                <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                            </div>
                        </div>
                    }
                >
                    <LazyComponent />
                </Suspense>
            ) : (
                <div
                    className={`${fallbackHeight} bg-transparent`}
                    style={{
                        minHeight,
                        height: minHeight,
                    }}
                />
            )}
            {children}
        </section>
    );
};

export default LazySection;
