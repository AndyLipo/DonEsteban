// ModalSuccess.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import { X, CheckCircle } from 'lucide-react';

const ModalSuccess = ({
    isOpen,
    onClose,
    title = "¡Consulta enviada!",
    message = "Gracias por su consulta, nos pondremos en contacto a la brevedad.",
    redirectTo = "/",
    autoRedirectTime = 4000,
    buttonText = "Ir al inicio",
    onSuccess // 👈 Nueva prop para callback
}) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen && autoRedirectTime > 0) {
            const timer = setTimeout(() => {
                handleGoHome();
            }, autoRedirectTime);

            return () => clearTimeout(timer);
        }
    }, [isOpen, navigate, redirectTo, autoRedirectTime, onClose]);

    const handleGoHome = () => {
        onClose();
        if (onSuccess) onSuccess(); // 👈 Ejecuta callback si existe
        window.scrollTo({ top: 0, behavior: 'smooth' }); // 👈 Scroll al principio
        navigate(redirectTo);
    };

    return (
        <Dialog.Root open={isOpen} onOpenChange={onClose}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/60 z-40 animate-in fade-in-0" />
                <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%] duration-300">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 mx-4">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <CheckCircle className="h-6 w-6 text-green-600" />
                                </div>
                                <Dialog.Title className="text-xl font-semibold text-gray-900">
                                    {title}
                                </Dialog.Title>
                            </div>
                            <Dialog.Close asChild>
                                <button
                                    className="rounded-full p-2 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
                                    onClick={onClose}
                                >
                                    <X className="h-5 w-5 text-gray-500" />
                                    <span className="sr-only">Cerrar</span>
                                </button>
                            </Dialog.Close>
                        </div>

                        {/* Mensaje */}
                        <Dialog.Description className="text-gray-600 text-center mb-8 leading-relaxed">
                            {message}
                        </Dialog.Description>

                        {/* Botón */}
                        <div className="flex justify-center mb-4">
                            <Dialog.Close asChild>
                                <button
                                    className="bg-[#2469a0] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1e5a8a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2469a0] focus:ring-offset-2"
                                    onClick={handleGoHome}
                                >
                                    {buttonText}
                                </button>
                            </Dialog.Close>
                        </div>

                        {/* Contador de redirección */}
                        {autoRedirectTime > 0 && (
                            <div className="text-xs text-gray-400 text-center">
                                Redirigiendo automáticamente en {autoRedirectTime / 1000} segundos...
                            </div>
                        )}
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default ModalSuccess;