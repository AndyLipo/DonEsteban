
import { memo } from "react"

const HeroContent = memo(({ texts, current, isTransitioning }) => {
    const currentText = texts[current]

    // Early return si no hay texto
    if (!currentText) return null

    return (
        <div className="w-full lg:max-w-2xl space-y-4 text-left">
            <p className="text-base md:text-lg font-medium text-gray-600">
                Don Esteban desagote.
            </p>

            <div className="min-h-[120px] md:min-h-[140px]">
                <h1
                    id="hero-heading"
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-black leading-tight"
                    style={{
                        // Optimizaciones CSS para LCP
                        fontDisplay: 'swap',
                        contain: 'layout style',
                        willChange: isTransitioning ? 'opacity' : 'auto',
                        opacity: isTransitioning ? 0.5 : 1,
                        transition: 'opacity 300ms ease-out'
                    }}
                >
                    {currentText.title}
                    <span className="text-[#2469a0]"> {currentText.subtitle}</span>
                </h1>

                <p
                    className="mt-3 md:mt-4 text-sm md:text-base font-medium text-gray-700 leading-relaxed"
                    style={{
                        opacity: isTransitioning ? 0.5 : 1,
                        transition: 'opacity 300ms ease-out'
                    }}
                >
                    {currentText.description}
                </p>
            </div>

            {/* Screen reader optimizado */}
            <div className="sr-only" aria-live="polite" aria-atomic="false">
                Contenido {current + 1} de {texts.length}
            </div>
        </div>
    )
})

HeroContent.displayName = 'HeroContent'
export default HeroContent