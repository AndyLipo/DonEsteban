import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import work from "@/assets/work.png"; // fondo SVG con recorte
import { ArrowRight } from "lucide-react"; // ícono flecha

export default function ServiceCard() {
    return (
        <Card className="w-[395px] h-[456px] relative overflow-hidden rounded-[40px]">
            {/* Fondo con forma SVG */}
            <img
                src={work}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Contenido sobre el SVG */}
            <CardContent className="relative z-10 p-8 flex flex-col h-full justify-between">
                <div className="space-y-4">
                    <h3 className="text-3xl font-semibold text-stone-950 font-archivo leading-tight">
                        All our <br /> Services.
                    </h3>
                    <p className="text-base text-stone-950 font-archivo">
                        Each pool is different. We can customize your service to fit your
                        location’s needs.
                    </p>
                </div>

                {/* Botón negro con flecha */}
                <button className="size-22 bg-black rounded-full flex items-center justify-center self-end relative top-5">
                    <ArrowRight className="text-[#F2FF59] size-8" />
                </button>
            </CardContent>
        </Card>
    );
}
