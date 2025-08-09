import React from 'react';
import { Phone, Mail, Send } from 'lucide-react';

const ContactCard = () => {
    const handleEmailClick = () => {
        const email = 'donestebanatmosfertico@gmail.com';
        const subject = encodeURIComponent('Consulta sobre Desagote');
        const body = encodeURIComponent('Hola, me interesaría obtener más información sobre sus servicios.');
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    };

    const contactInfo = [
        { icon: Phone, text: '+54 9 11 4044 2669' },
        { icon: Mail, text: 'donestebanatmosferico@gmail.com' }
    ];

    return (
        <div className="bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-lg p-8 max-w-md w-full lg:w-auto">
            <h3 className="text-white text-xl font-semibold mb-6">Como Contactarnos</h3>

            <div className="space-y-4 mb-6">
                {contactInfo.map(({ icon: Icon, text }, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                        <Icon size={16} className="mr-3 text-yellow-400" />
                        <span className="text-sm">{text}</span>
                    </div>
                ))}
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Ofrecemos servicios profesionales de desagote atmosférico las 24 horas.
                Contáctanos para soluciones rápidas y confiables en toda la región metropolitana.
            </p>

            <button
                onClick={handleEmailClick}
                className="w-12 h-12 bg-[#2469a0] hover:bg-[#2469a0]/50 rounded-full flex items-center justify-center transition-colors group"
                aria-label="Enviar email"
            >
                <Send size={18} className="text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
        </div>
    );
};

export default ContactCard;