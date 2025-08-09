
import { memo, Suspense, lazy } from "react"
import { useHeroSlider } from "./HeroSlider"
import { heroTexts } from "./HeroText"
import HeroContent from "./HeroContent"

// Lazy load componentes no críticos para LCP
const HeroDots = lazy(() => import("./HeroDots"))
const HeroLogo = lazy(() => import("./HeroLogo"))

// Placeholder optimizado para HeroLogo
const HeroLogoPlaceholder = () => (
    <div className="w-full lg:w-auto flex flex-col items-center lg:items-end justify-end gap-6 md:gap-8 mb-8 md:mb-10 lg:mb-0">
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-full bg-gray-100 animate-pulse" />
    </div>
)

// Placeholder para HeroDots  
const HeroDotsPlaceholder = () => (
    <div className="flex items-center gap-2 mt-4 md:mt-6">
        {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="w-2.5 h-2.5 md:w-3 md:h-3 bg-gray-200 rounded-full animate-pulse border border-gray-300" />
        ))}
    </div>
)

const HeroSection = memo(() => {
    const { current, isTransitioning, goToSlide } = useHeroSlider(heroTexts.length)

    return (
        <section
            className="flex flex-col-reverse lg:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 py-12 md:py-20 bg-white mt-14 max-w-7xl mx-auto"
            aria-labelledby="hero-heading"
        >
            <div className="space-y-4">
                {/* CRÍTICO PARA LCP - Renderizado inmediato */}
                <HeroContent
                    texts={heroTexts}
                    current={current}
                    isTransitioning={isTransitioning}
                />

                {/* NO CRÍTICO - Lazy loaded */}
                <Suspense fallback={<HeroDotsPlaceholder />}>
                    <HeroDots
                        texts={heroTexts}
                        current={current}
                        goToSlide={goToSlide}
                    />
                </Suspense>
            </div>

            {/* NO CRÍTICO - Lazy loaded */}
            <Suspense fallback={<HeroLogoPlaceholder />}>
                <HeroLogo />
            </Suspense>
        </section>
    )
})

HeroSection.displayName = 'HeroSection'
export default HeroSection