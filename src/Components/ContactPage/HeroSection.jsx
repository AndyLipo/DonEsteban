import React from 'react';
import ContactCard from './ContactCard';

const HeroSection = () => (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-12 lg:py-24">
        <div className="flex-1 max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-8">
                Te <span className="text-[#3dd6af]">solucionamos</span> los<br />
                problemas.
            </h1>
        </div>
        <ContactCard />
    </div>
);

export default HeroSection;