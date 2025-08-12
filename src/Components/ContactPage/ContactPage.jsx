import React, { useState } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';
import LazyVideo from './LazyVideo';
import SideMenu from './SideMenu';
import MenuButton from './MenuButton';
import HeroSection from './HeroSection';
import SocialLinks from './SocialLinks';
import AboutVideo from '../../assets/aboutVideo.mp4';

export default function ContactPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [videoContainerRef, shouldLoadVideo] = useIntersectionObserver();

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
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
    );
}