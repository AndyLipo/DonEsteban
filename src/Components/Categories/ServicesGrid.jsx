import { useEffect, useState } from "react";
import { ServiceCard } from "./ServiceCard";

const ServicesGrid = ({ services, className = "" }) => {
    const [carouselOpen, setCarouselOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openCarousel = (index) => {
        setCurrentIndex(index);
        setCarouselOpen(true);
    };

    const closeCarousel = () => {
        setCarouselOpen(false);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? services.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === services.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Cerrar con la tecla Escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") closeCarousel();
        };

        if (carouselOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden"; // Prevenir scroll
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [carouselOpen]);

    return (
        <>
            <div className={`grid md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-16 lg:mt-24 ${className}`}>
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                        index={index}
                        onClick={openCarousel}
                    />
                ))}
            </div>

            {/* Overlay del carrusel */}
            {carouselOpen && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={closeCarousel}
                >
                    <div
                        className="relative max-w-5xl max-h-full w-full h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Botón cerrar */}
                        <button
                            className="absolute top-4 right-4 text-white text-3xl z-10 cursor-pointer rounded-full p-2 transition-colors"
                            onClick={closeCarousel}
                            aria-label="Cerrar carrusel"
                        >
                            &times;
                        </button>

                        {/* Flecha izquierda */}
                        <button
                            className="absolute left-4 text-white text-3xl z-10 cursor-pointer rounded-full p-2 transition-colors md:left-8"
                            onClick={goToPrevious}
                            aria-label="Imagen anterior"
                        >
                            &#8249;
                        </button>

                        {/* Imagen */}
                        <div className="relative w-full h-full flex items-center justify-center">
                            <img
                                src={services[currentIndex].img}
                                alt={services[currentIndex].title}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>

                        {/* Flecha derecha */}
                        <button
                            className="absolute right-4 text-white text-3xl z-10 cursor-pointer rounded-full p-2  transition-colors md:right-8"
                            onClick={goToNext}
                            aria-label="Siguiente imagen"
                        >
                            &#8250;
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ServicesGrid;