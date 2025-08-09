import React from "react";

export default function TrustSupport() {
    return (
        <section className="w-full bg-gray-100 py-12 md:py-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-6">
                {/* Item 1 */}
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
                    <div className="mb-4">
                        <span className="text-4xl md:text-5xl font-bold text-gray-800">25</span>
                        <p className="text-lg md:text-xl text-gray-800 font-medium mt-2">
                            años de experiencia.
                        </p>
                    </div>
                    <p className="text-gray-700 text-sm md:text-base">
                        Por más de 25 años ofreciendo solo nuestros mejores servicios y productos
                    </p>
                </div>

                {/* Item 2 */}
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
                    <div className="mb-4">
                        <p className="text-lg md:text-xl text-gray-800 font-medium">
                            Calidad llevada por nosotros.
                        </p>
                    </div>
                    <p className="text-gray-700 text-sm md:text-base">
                        Tu satisfacción es nuestra prioridad. Si no estás completamente satisfecho, trabajaremos para solucionarlo.
                    </p>
                </div>

                {/* Item 3 */}
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
                    <div className="mb-4">
                        <p className="text-lg md:text-xl text-gray-800 font-medium">
                            Soporte 24/7 para clientes.
                        </p>
                    </div>
                    <p className="text-gray-700 text-sm md:text-base">
                        Ofrecemos servicios flexibles que se adaptan a tus preferencias y necesidades específicas.
                    </p>
                </div>
            </div>
        </section>
    );
};
