import { Card, CardContent } from "@/components/ui/card";
import work from "@/assets/work.png";
import workSvg from "@/assets/svg-work.png";
import { ArrowRight } from "lucide-react";

export default function WorkPng() {
    return (
        <Card className="w-full h-[300px] sm:h-[350px] lg:h-[300px] relative overflow-hidden rounded-3xl lg:rounded-[40px]">
            {/* Imagen PNG para móvil y desktop */}
            <img
                loading="lazy"
                src={work}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none block sm:hidden lg:block"
            />

            {/* SVG para tablet (768px) */}
            <img
                loading="lazy"
                src={workSvg}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none hidden sm:block lg:hidden"
            />

            {/* Contenido sobre el SVG */}
            <CardContent className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                <div className="flex-1 space-y-2 flex-grow">
                    <h3 className="text-lg sm:text-xl lg:text-xl font-semibold text-gray-900 leading-tight -mt-2 sm:-mt-10 lg:-mt-10">
                        Servicios de desagote y destapaciones en Zona Norte
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-sm text-gray-900">
                        Cada trabajo es único. Especializados en obstrucciones, <br className="hidden lg:block" />
                        <span className="lg:hidden">especializados en obstrucciones, </span>
                        desagotar pozos y <br className="hidden lg:block" />
                        <span className="lg:hidden">desagotar pozos y </span>
                        brindar plomería <br className="hidden lg:block" />
                        <span className="lg:hidden">brindar plomería </span>
                        urgente en <br className="hidden lg:block" />
                        <span className="lg:hidden">urgente en </span>
                        Zona Norte.
                    </p>
                </div>

                {/* Botón negro con flecha - Posicionado abajo a la derecha */}
                <div className="flex justify-end">
                    <button className="w-12 h-12 sm:w-16 sm:h-16 lg:w-16 lg:h-16 bg-black rounded-full flex items-center justify-center hover:scale-105 transition-transform absolute -bottom-3 right-3 sm:-bottom-4 sm:right-4 lg:-bottom-2 lg:right-2">
                        <ArrowRight className="text-[#F2FF59] w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                    </button>
                </div>
            </CardContent>
        </Card>
    );
}