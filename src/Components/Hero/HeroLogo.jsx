import { memo } from "react"

import Present from "../../assets/img-present.webp"

const HeroLogo = memo(() => {
    return (
        <div className="w-full lg:w-auto flex flex-col items-center lg:items-end justify-end gap-6 md:gap-8 mb-8 md:mb-10 lg:mb-0">
            <div className="w-52 h-52 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center rounded-4xl">
                <picture>
                    {/* WebP con fallback - optimizado para LCP */}
                    <source
                        srcSet={Present}
                        media="(max-width: 639px)"
                        type="image/webp"
                    />
                    <source
                        srcSet={Present}
                        media="(min-width: 640px)"
                        type="image/webp"
                    />
                    <img
                        loading="lazy"
                        src={Present}
                        alt="Logo Don Esteban Desagote - Empresa de desagotes y construcción"
                        className="object-contain rounded-4xl md:rounded-4xl "
                        width="384"
                        height="384"
                        decoding="async"
                        // Optimizaciones adicionales para LCP
                        fetchPriority="low"
                        style={{
                            contentVisibility: 'auto',
                            containIntrinsicSize: '384px 384px'
                        }}
                    />
                </picture>
            </div>
        </div>
    )
})

HeroLogo.displayName = 'HeroLogo'
export default HeroLogo
