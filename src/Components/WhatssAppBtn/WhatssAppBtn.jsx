import { MessageCircle } from 'lucide-react'; // No hay ícono de WhatsApp exacto, pero este funciona bien como chat

const WhatssAppBtn = () => {
    const phoneNumber = '5491123456789'; // Reemplaza con tu número real
    const message = '¡Hola! Me gustaría hacer una consulta sobre sus servicios.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300"
            aria-label="Enviar mensaje por WhatsApp"
        >
            <MessageCircle className="w-6 h-6" />
        </a>
    );
};

export default WhatssAppBtn;
