import { useState, useEffect } from "react";
import { workConfig } from "./WorkConfig"
import WorkHeader from "./WorkHeader"
import ServicesGrid from "./ServicesGrid"
import SpecializationHeader from "./SpecializationHeader"
import WorkGallery from "./WorkGallery"

const OurWork = () => {
    const { header, services, specialization, gallery, carouselOnly } = workConfig
    const [carouselOpen, setCarouselOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Combinar TODAS las imágenes: services + gallery + carouselOnly
    const allImages = [...services, ...gallery, ...(carouselOnly || [])];

    const openCarousel = (index, source) => {
        if (source === 'services') {
            setCurrentIndex(index);
        } else if (source === 'gallery') {
            setCurrentIndex(services.length + index);
        }
        setCarouselOpen(true);
    };

    const closeCarousel = () => {
        setCarouselOpen(false);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === allImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Cerrar con la tecla Escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") closeCarousel();
        };

        if (carouselOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [carouselOpen]);

    return (
        <section
            className="w-full px-4 sm:px-6 py-12 md:py-20 max-w-7xl mx-auto"
            aria-labelledby="work-heading"
        >
            <WorkHeader
                image={header.image}
                title={header.title}
                alt={header.alt}
            />

            <ServicesGrid
                services={services}
                onCardClick={(index) => openCarousel(index, 'services')}
            />

            <SpecializationHeader
                title={specialization.title}
                description={specialization.description}
            />

            <WorkGallery
                gallery={gallery}
                onCardClick={(index) => openCarousel(index, 'gallery')}
            />

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
                            className="absolute top-4 right-4 text-white text-4xl z-10 cursor-pointer rounded-full p-2 transition-colors"
                            onClick={closeCarousel}
                            aria-label="Cerrar carrusel"
                        >
                            &times;
                        </button>

                        {/* Flecha izquierda */}
                        <button
                            className="absolute left-4 text-white text-5xl z-10 rounded-full p-2 transition-colors md:left-8 cursor-pointer"
                            onClick={goToPrevious}
                            aria-label="Imagen anterior"
                        >
                            &#8249;
                        </button>

                        {/* Imagen - Ahora incluye galería + carouselOnly */}
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* <img
                                src={allImages[currentIndex].img}
                                alt={allImages[currentIndex].title}
                                className="max-w-full max-h-full object-contain"
                            /> */}
                            {allImages[currentIndex].type === 'video' ? (
                                <video
                                    src={allImages[currentIndex].img}
                                    className="max-w-full max-h-full object-contain"

                                    autoPlay
                                    loop
                                >
                                    Tu navegador no soporta el elemento de video.
                                </video>
                            ) : (
                                <img
                                    src={allImages[currentIndex].img}
                                    alt={allImages[currentIndex].title}
                                    className="max-w-full max-h-full object-contain"
                                />
                            )}
                        </div>

                        {/* Flecha derecha */}
                        <button
                            className="absolute right-4 text-white text-5xl z-10 rounded-full p-2 transition-colors md:right-8 cursor-pointer"
                            onClick={goToNext}
                            aria-label="Siguiente imagen"
                        >
                            &#8250;
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default OurWork