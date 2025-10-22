
import { memo } from "react"
import HeroVideo from '../../assets/HeroVideo.webm'




const HeroSection = memo(() => {

    return (
        <section
            className="flex flex-col-reverse lg:flex-row justify-between items-center bg-white  max-w-7xl mx-auto"
            aria-labelledby="hero-heading"
        >
            <div className="space-y-4 ">
                <video
                    src={HeroVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/assets/hero-poster.webp"
                    className="w-full h-auto rounded-b-2xl aspect-[16/9]"
                    fetchPriority="high"
                />

            </div>
        </section>
    )
})

HeroSection.displayName = 'HeroSection'
export default HeroSection