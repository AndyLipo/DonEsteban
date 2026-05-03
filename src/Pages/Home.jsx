import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/Components/Navbar/Navbar';
import HeroSection from '@/Components/Hero/HeroSection';
import WhatssaAppBtn from '@/Components/WhatssAppBtn/WhatssAppBtn';
import LazySection from '@/Components/LazySection';

// Estos dos se importan directo — Google necesita leer su contenido
import AboutHome from '@/Components/AboutHome/AboutHome';
import TrustSupport from '@/Components/AboutHome/TrustSupport';

const HomeAdvanced = () => {
    const location = useLocation();
    const scrollAttempts = useRef(0);

    useEffect(() => {
        if (location.state?.scrollToForm) {
            scrollAttempts.current = 0;
            const tryScroll = () => {
                const form = document.getElementById('contact-form');
                if (form) {
                    form.scrollIntoView({ behavior: 'smooth' });
                } else if (scrollAttempts.current < 20) {
                    scrollAttempts.current++;
                    setTimeout(tryScroll, 100);
                }
            };
            setTimeout(tryScroll, 300);
        }
    }, [location.state]);

    return (
        <div className="bg-white overflow-x-hidden">
            <Helmet>
                <title>Don Esteban Atmosféricos | Destapaciones y Desagote en Zona Norte GBA</title>
                <meta name="description" content="Servicio urgente de destapaciones de piletas, pozos y cámaras sépticas. Camiones atmosféricos en Escobar, Maschwitz, Tigre y alrededores. Presupuesto sin cargo." />
                <meta property="og:title" content="Don Esteban Atmosféricos | Destapaciones y Desagote" />
                <link rel="canonical" href="https://donestebanatmosfericos.com.ar/" />
            </Helmet>

            <nav>
                <Navbar />
            </nav>

            <main className="space-y-14 md:space-y-32">
                <section>
                    <HeroSection />
                </section>

                {/* Lazy: galería visual, no aporta keywords */}
                <LazySection importFunc={() => import('@/Components/Hero/DreamGallery/DreamGallery')} fallbackHeight="h-94" />

                {/* Lazy: formulario, pesado pero no crítico para SEO */}
                <LazySection
                    importFunc={() => import('@/Components/ContactHome/ContactForm')}
                    id="contact-form"
                    minHeight="900px"
                />

                {/* Directo: Google necesita leer este contenido */}
                <AboutHome />
                <TrustSupport />

                {/* Lazy: categorías visuales */}
                <LazySection importFunc={() => import('@/Components/Categories/OurWork')} />

                {/* Lazy: mapa */}
                <LazySection importFunc={() => import('@/Components/GoogleMap/MapSection')} className="px-0" fallbackHeight="h-80" />
            </main>

            <LazySection importFunc={() => import('@/Components/Footer/Footer')} fallbackHeight="h-40" />
            <WhatssaAppBtn />
        </div>
    );
};

export default HomeAdvanced;