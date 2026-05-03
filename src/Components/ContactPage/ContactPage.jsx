import React, { useState } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';
import LazyVideo from './LazyVideo';
import SideMenu from './SideMenu';
import MenuButton from './MenuButton';
import HeroSection from './HeroSection';
import SocialLinks from './SocialLinks';
import AboutVideo from '../../assets/aboutVideo.mp4';
import { Helmet } from 'react-helmet-async';

export default function ContactPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [videoContainerRef, shouldLoadVideo] = useIntersectionObserver();

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <Helmet>
                <title>Contacto | Don Esteban Atmosféricos - Destapaciones y Desagote</title>
                <meta name="description" content="Contactanos para destapaciones urgentes, desagote de pozos y cámaras sépticas en Escobar, Maschwitz, Tigre y zona norte de Buenos Aires. Atención 24hs." />
                <link rel="canonical" href="https://donestebanatmosfericos.com.ar/contacto" />
            </Helmet>

            <div ref={videoContainerRef} className="min-h-screen relative overflow-hidden">
                {/* Background Video */}
                <LazyVideo
                    shouldLoad={shouldLoadVideo}
                    videoSrc={AboutVideo}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Side Menu */}
                <SideMenu isOpen={isMenuOpen} onClose={closeMenu} />

                {/* Main Content */}
                <div className={`relative z-10 min-h-screen transition-all duration-300 ${isMenuOpen ? 'ml-80' : 'ml-0'
                    }`}>
                    {/* Header */}
                    <header className="p-6">
                        <MenuButton onClick={toggleMenu} isOpen={isMenuOpen} />
                    </header>

                    {/* Hero Section */}
                    <HeroSection />

                    {/* Social Media Links */}
                    <SocialLinks isContactPage={true} />
                </div>
            </div>
        </>
    );
}