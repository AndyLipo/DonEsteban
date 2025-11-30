
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function WorkPng() {
    return (
        <Card className="w-full h-[300px] sm:h-[350px] lg:h-[300px] relative overflow-hidden rounded-3xl lg:rounded-[40px]">
            {/* SVG para Desktop - Desktop version */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
                viewBox="0 0 524 750"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
            >
                <path
                    d="M 120 50 
                       C 50 50 50 100 50 150
                       L 50 620
                       C 50 660 70 690 110 690
                       L 280 690
                       C 310 690 330 670 330 640
                       L 330 550
                       C 330 520 350 500 380 500
                       L 460 500
                       C 490 500 510 475 510 445
                       L 510 120
                       C 510 70 480 50 440 50
                       L 120 50
                       Z"
                    fill="#BFDBFE"
                    stroke="none"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                />
            </svg>

            {/* SVG para Mobile/Tablet - Optimizado para responsive */}
            <svg fill="#BFDBFE" width="800px" height="800px" viewBox="0 0 15 15" version="1.1" id="square" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-[300px] h-full pointer-events-none lg:hidden">
                <path d="M13,14H2c-0.5523,0-1-0.4477-1-1V2c0-0.5523,0.4477-1,1-1h11c0.5523,0,1,0.4477,1,1v11C14,13.5523,13.5523,14,13,14z" />
            </svg>

            {/* Contenido sobre el SVG */}
            <CardContent className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                <div className="flex-1 space-y-2 flex-grow ml-0 ">
                    <h3 className="text-lg sm:text-xl lg:text-xl font-semibold text-gray-900 leading-tight -mt-2 sm:-mt-10 lg:-mt-10">
                        Servicios de desagote y <br className="sm:block" />destapaciones en Zona Norte
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-sm text-gray-900">
                        Cada trabajo es único. Especializados en <br className="sm:block" /> obstrucciones, desagotar pozos y <br className="hidden lg:block" />
                        brindar <br className="lg:block" />plomería <br className="hidden lg:block" />
                        urgente en <br className="hidden sm:block" />Zona Norte.
                    </p>
                </div>

                {/* Botón negro con flecha */}
                <div className="flex justify-end">
                    <button
                        aria-label="mostrar carrousel"
                        className="w-12 h-12 sm:w-16 sm:h-16 lg:w-16 lg:h-16 bg-black rounded-full flex items-center justify-center hover:scale-105 transition-transform absolute top-50 right-26 sm:-bottom-4 sm:right-10 lg:-bottom-5 lg:right-2">
                        <ArrowRight className="text-[#F2FF59] w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                    </button>
                </div>
            </CardContent>
        </Card>
    );
}