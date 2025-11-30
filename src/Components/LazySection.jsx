import { Suspense, lazy } from 'react';

/**
 * Componente para cargar secciones lazy con placeholder
 * Evita CLS reservando espacio antes de cargar
 */
const LazySection = ({ importFunc, id = '' }) => {
    const Component = lazy(importFunc);

    // Placeholder mientras carga (reserva espacio para evitar CLS)
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
            {/* Skeleton loader */}
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