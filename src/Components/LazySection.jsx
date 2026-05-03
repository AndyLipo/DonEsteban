import { Suspense, lazy } from 'react';

// El mapa de componentes se crea UNA SOLA VEZ afuera
const componentCache = new Map();

const getLazy = (importFunc) => {
    if (!componentCache.has(importFunc)) {
        componentCache.set(importFunc, lazy(importFunc));
    }
    return componentCache.get(importFunc);
};

const LazySection = ({ importFunc, id = '' }) => {
    const Component = getLazy(importFunc); // estable entre renders

    const Placeholder = () => (
        <div
            id={id}
            style={{
                minHeight: '900px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ffffff',
                contain: 'layout style paint'
            }}
            aria-busy="true"
            aria-live="polite"
        >
            <div className="animate-pulse space-y-4 w-full max-w-7xl px-4">
                <div className="h-40 bg-gray-200 rounded-lg"></div>
                <div className="h-[600px] bg-gray-100 rounded-3xl"></div>
            </div>
        </div>
    );

    return (
        <Suspense fallback={<Placeholder />}>
            <Component />
        </Suspense>
    );
};

export default LazySection;