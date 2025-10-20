import Navbar from '@/Components/Navbar/Navbar'
import HeroSection from '@/Components/Hero/HeroSection'
import WhatssaAppBtn from '@/Components/WhatssAppBtn/WhatssAppBtn'
import LazySection from '@/Components/LazySection'

const HomeAdvanced = () => {
    return (
        <div className='bg-white overflow-x-hidden'>
            <nav>
                <Navbar />
            </nav>

            <main className="space-y-14 md:space-y-32">
                <section className="">
                    <HeroSection />
                </section>

                <LazySection
                    importFunc={() => import('@/Components/Hero/DreamGallery/DreamGallery')}
                    fallbackHeight="h-64"
                />

                <LazySection
                    importFunc={() => import('@/Components/ContactHome/ContactForm')}
                    fallbackHeight="h-96"
                    id="contact-form"
                />

                <LazySection
                    importFunc={() => import('@/Components/AboutHome/AboutHome')}
                />

                <LazySection
                    importFunc={() => import('@/Components/AboutHome/TrustSupport')}
                />

                <LazySection
                    importFunc={() => import('@/Components/Categories/OurWork')}
                />

                <LazySection
                    importFunc={() => import('@/Components/Testimonial/Testimonial')}
                />

                <LazySection
                    importFunc={() => import('@/Components/GoogleMap/MapSection')}
                    className="px-0"
                    fallbackHeight="h-80"
                />
            </main>

            <LazySection
                importFunc={() => import('@/Components/Footer/Footer')}
                className=""
                fallbackHeight="h-40"
            />

            <WhatssaAppBtn />
        </div>
    )
}

export default HomeAdvanced;
