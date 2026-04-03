import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/Components/Navbar/Navbar';
import HeroSection from '@/Components/Hero/HeroSection';
import WhatssaAppBtn from '@/Components/WhatssAppBtn/WhatssAppBtn';
import LazySection from '@/Components/LazySection';

const HomeAdvanced = () => {
    const location = useLocation();
    const scrollAttempts = useRef(0);

    useEffect(() => {
        if (location.state?.scrollToForm) {
            scrollAttempts.current = 0;

            // Espera a que el LazySection cargue el formulario
            const tryScroll = () => {
                const form = document.getElementById('contact-form');
                if (form) {
                    form.scrollIntoView({ behavior: 'smooth' });
                } else if (scrollAttempts.current < 20) {
                    // Reintenta hasta 20 veces (2 segundos)
                    scrollAttempts.current++;
                    setTimeout(tryScroll, 100);
                }
            };

            // Pequeño delay inicial para que React renderice
            setTimeout(tryScroll, 300);
        }
    }, [location.state]);

    return (
        <div className="bg-white overflow-x-hidden">
            <nav>
                <Navbar />
            </nav>

            <main className="space-y-14 md:space-y-32">
                <section>
                    <HeroSection />
                </section>

                <LazySection importFunc={() => import('@/Components/Hero/DreamGallery/DreamGallery')} fallbackHeight="h-94" />
                <LazySection importFunc={() => import('@/Components/ContactHome/ContactForm')} prefetch priority="high"
                    id="contact-form"
                    minHeight="900px"
                />
                <LazySection importFunc={() => import('@/Components/AboutHome/AboutHome')} />
                <LazySection importFunc={() => import('@/Components/AboutHome/TrustSupport')} />
                <LazySection importFunc={() => import('@/Components/Categories/OurWork')} />
                <LazySection importFunc={() => import('@/Components/GoogleMap/MapSection')} className="px-0" fallbackHeight="h-80" />
            </main>

            <LazySection importFunc={() => import('@/Components/Footer/Footer')} fallbackHeight="h-40" />
            <WhatssaAppBtn />
        </div>
    );
};

export default HomeAdvanced;