import { memo, useState, useEffect } from "react"

const HeroSection = memo(() => {
    const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

    useEffect(() => {
        // Carga el video DESPUÉS del LCP (después de 2 segundos o cuando el usuario scrollea)
        const timer = setTimeout(() => {
            setShouldLoadVideo(true);
        }, 2000);

        const handleScroll = () => {
            setShouldLoadVideo(true);
        };

        window.addEventListener('scroll', handleScroll, { once: true, passive: true });

        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section
            className="flex flex-col-reverse lg:flex-row justify-between items-center bg-white max-w-7xl mx-auto hero-section"
            aria-label="hero-heading"
        >
            <div className="space-y-4 w-full">
                {!shouldLoadVideo ? (
                    // ⚡ IMAGEN ESTÁTICA primero (LCP rápido)
                    <img
                        src="/assets/HeroImageCamion.webp"
                        alt="Camión de desagote Don Esteban"
                        className="w-full h-auto rounded-b-2xl aspect-video"
                        fetchPriority="high"
                        width="1920"
                        height="1080"
                        style={{ backgroundColor: "#f3f4f6" }}
                    />
                ) : (
                    // ⚡ VIDEO carga DESPUÉS
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        poster="/assets/HeroImageCamion.webp"
                        className="w-full h-auto rounded-b-2xl aspect-video"
                        style={{ backgroundColor: "#f3f4f6" }}
                    >
                        <source src="/assets/HeroVideo.webm" type="video/webm" />
                        Tu navegador no soporta video HTML5.
                    </video>
                )}
            </div>
        </section>
    )
})

HeroSection.displayName = 'HeroSection'
export default HeroSection