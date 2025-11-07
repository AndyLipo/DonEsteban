
import { memo } from "react"




const HeroSection = memo(() => {

    return (
        <section
            className="flex flex-col-reverse lg:flex-row justify-between items-center bg-white  max-w-7xl mx-auto"
            aria-labelledby="hero-heading"
        >
            <div className="space-y-4 ">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/assets/HeroImageCamion.jpg"  // <- imagen previa visible de inmediato
                    className="w-full h-auto rounded-b-2xl aspect-[16/9]"
                    fetchPriority="high"
                    style={{ backgroundColor: "#f3f4f6" }} // fallback rápido mientras carga
                >
                    <source src="/assets/HeroVideo.webm" type="video/webm" />
                    Tu navegador no soporta video HTML5.
                </video>

            </div>
        </section>
    )
})

HeroSection.displayName = 'HeroSection'
export default HeroSection