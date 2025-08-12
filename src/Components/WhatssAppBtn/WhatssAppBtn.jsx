

import { MessageCircle } from 'lucide-react';

const WhatsAppBtn = () => {
    const phoneNumber = '5491136349494';
    const message = '¡Hola! Me gustaría hacer una consulta sobre sus servicios.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-11 right-6 z-50">
            {/* Contenedor relativo para la animación ping */}
            <div className="relative flex">
                {/* Animación ping - anillo que se expande */}
                <span className="absolute inset-0 inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>

                {/* Botón principal de WhatsApp */}
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex bg-green-500 text-white rounded-full p-4 shadow-lg transition-all duration-300"
                    aria-label="Enviar mensaje por WhatsApp"
                >
                    <MessageCircle className="w-6 h-6" />
                </a>
            </div>
        </div>
    );
};

export default WhatsAppBtn;