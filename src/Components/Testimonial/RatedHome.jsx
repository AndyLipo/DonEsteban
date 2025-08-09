import React from "react";
import Subtract from "@/assets/subtract.png"; // fondo SVG en forma especial
import { Quote } from "lucide-react";

export default function RatedHome() {
    return (
        <div className="relative w-full max-w-[512px] h-auto min-h-[400px] sm:h-[555px] mx-auto">
            {/* SVG como fondo */}
            <img
                loading="lazy"
                src={Subtract}
                alt="Background Shape"
                className="absolute inset-0 w-full h-full object-cover z-0 rounded-xl sm:rounded-3xl"
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
                <div className="relative mt-8 sm:mt-0 sm:absolute sm:right-6 md:right-10 lg:right-20 bottom-4 sm:bottom-6 flex flex-col sm:flex-row items-end gap-4 sm:gap-2">
                    {/* Foto recortada y redondeada */}
                    <div className="relative w-[120px] h-[130px] sm:w-[140px] sm:h-[150px] md:w-[165px] md:h-[175px] md:top-5 rounded-lg sm:rounded-xl overflow-hidden shadow-md order-2 sm:order-1 mx-auto sm:mx-0">
                        <img
                            loading="lazy"
                            src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg"
                            alt="Juan Fernandez"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Nombre y cargo */}
                    <div className="text-center sm:text-left relative sm:left-5 sm:bottom-2 md:left-8 md:bottom-4 order-1 sm:order-2">
                        <h4 className="text-2xl sm:text-3xl font-semibold leading-tight">
                            Juan<br />Fernandez
                        </h4>
                        <p className="text-sm sm:text-base md:text-lg mt-1 text-neutral-700">
                            Administrador de,<br className="sm:hidden" /> Haras Santa Maria
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
