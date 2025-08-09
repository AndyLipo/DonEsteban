import { Card, CardContent } from "@/components/ui/card";
import work from "@/assets/work.png";
import { ArrowRight } from "lucide-react";

export default function WorkPng() {
    return (
        <Card className="w-full h-full min-h-[350px] relative overflow-hidden rounded-3xl lg:rounded-[40px]">
            {/* Fondo con forma SVG */}
            <img
                loading="lazy"
                src={work}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Contenido sobre el SVG */}
            <CardContent className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                <div className="space-y-1 sm:space-y-2 flex-grow">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-tight -mt-5">
                        Servicios de desagote y destapaciones en Zona Norte
                    </h3>
                    <p className="text-sm sm:text-base text-gray-900">
                        Cada trabajo es único. Especializados en obstrucciones, <br />desagotar pozos y <br />brindar plomería <br />urgente en <br />Zona Norte.
                    </p>
                </div>

                {/* Botón negro con flecha - Posicionado abajo a la derecha */}
                <div className="flex justify-end mt-4">
                    <button className="w-16 h-16 sm:w-20 sm:h-20 bg-black rounded-full flex items-center justify-center hover:scale-105 transition-transform absolute -bottom-24 right-3 sm:-bottom-1 sm:right-1">
                        <ArrowRight className="text-[#F2FF59] w-6 h-6 sm:w-8 sm:h-8" />
                    </button>
                </div>
            </CardContent>
        </Card>
    );
}