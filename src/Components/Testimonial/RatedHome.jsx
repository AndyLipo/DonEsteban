import React from "react";
import Subtract from "@/assets/subtract.png"; // fondo SVG en forma especial
import svgTestimonial from "@/assets/svg-testimonial.png"; //imagen para móvil
import { Quote } from "lucide-react";

export default function RatedHome() {
    return (
        <div className="relative w-full max-w-[512px] h-auto min-h-[400px] sm:h-[555px] mx-auto">
            {/* SVG para móvil (320-425px) */}
            <img
                loading="lazy"
                src={svgTestimonial}
                alt="Background Shape"
                className="absolute inset-0 w-full h-full object-cover z-0 rounded-xl sm:rounded-3xl block sm:hidden"
            />

            {/* SVG para tablet y desktop (768px+) */}
            <img
                loading="lazy"
                src={Subtract}
                alt="Background Shape"
                className="absolute inset-0 w-full h-full object-cover z-0 rounded-xl sm:rounded-3xl hidden sm:block"
            />

            {/* Contenido sobre el SVG */}
            <div className="relative z-10 p-6 sm:p-8 md:p-10 flex flex-col justify-between h-full text-black">
                {/* Quote + Testimonio */}
                <div className="space-y-4 sm:space-y-6">
                    <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-black" />

                    <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                            ¡Excelente servicio de desagote en Maschwitz!
                        </h3>
                        <p className="text-sm sm:text-base leading-relaxed font-normal">
                            Muy profesionales y atentos desde el primer contacto. Llegaron rápido con el camión, resolvieron el problema del pozo séptico sin complicaciones. Sin duda volvería a llamarlos.
                        </p>
                    </div>
                </div>

                {/* Imagen + Autor */}
                <div className="relative mt-8 sm:mt-0">
                    {/* Layout para móvil (320px): Columna centrada */}
                    <div className="flex flex-col items-center gap-4 sm:hidden">
                        {/* Foto */}
                        <div className="relative w-[120px] h-[130px] rounded-lg overflow-hidden shadow-md">
                            <img
                                loading="lazy"
                                src="https://plus.unsplash.com/premium_photo-1675674458649-0c667500f3cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000"
                                alt="Juan Fernandez"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Nombre y cargo */}
                        <div className="text-center">
                            <h4 className="text-2xl font-semibold leading-tight">
                                Andrés <br />González
                            </h4>
                            <p className="text-sm mt-1 text-neutral-700">
                                Vecnino de,<br /> Ing. Maschwitz
                            </p>
                        </div>
                    </div>

                    {/* Layout para tablet y desktop: Posicionado en la parte blanca del SVG */}
                    <div className="hidden sm:flex sm:absolute sm:bottom-6 md:-bottom-8 right-6 sm:right-6 md:right-30 lg:right-15 xl:right-30 2xl:right-30 items-center gap-4">
                        {/* Foto en la sección blanca */}
                        <div className="relative w-[120px] h-[150px] md:w-[180px] md:h-[170px] lg:w-[120px] lg:h-[175px] 
                                      xl:w-[150px] xl:h-[170px] rounded-lg md:rounded-xl overflow-hidden shadow-md">
                            <img
                                loading="lazy"
                                src="https://plus.unsplash.com/premium_photo-1675674458649-0c667500f3cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000"
                                alt="Juan Fernandez"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Nombre y cargo a la derecha */}
                        <div className="text-left md:ml-10">
                            <h4 className="text-2xl md:text-3xl font-semibold leading-tight">
                                Juan<br />Fernandez
                            </h4>
                            <p className="text-base md:text-lg mt-1 text-neutral-700">
                                Administrador de,<br /> Haras Santa Maria
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}