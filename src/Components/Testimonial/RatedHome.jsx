import React from "react";
import Subtract from "@/assets/subtract.png"; // fondo SVG en forma especial
import { Quote } from "lucide-react";

export default function RatedHome() {
    return (
        <div className="relative w-[512px] h-[555px]">
            {/* SVG como fondo */}
            <img
                src={Subtract}
                alt="Background Shape"
                className="absolute inset-0 w-full h-full object-cover z-0 rounded-3xl"
            />

            {/* Contenido sobre el SVG */}
            <div className="relative z-10 p-10 flex flex-col justify-between h-full text-black">
                {/* Quote + Testimonio */}
                <div className="space-y-6">
                    <Quote className="w-10 h-10 text-black" />

                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold leading-tight">
                            Nice job. I'm happy!
                        </h3>
                        <p className="text-base leading-relaxed font-normal">
                            Friendly, reliable and thorough weekly service. A big change from
                            my previous pool cleaning company.
                        </p>
                    </div>
                </div>

                {/* Imagen + Autor */}
                <div className="absolute right-32 bottom-2 flex items-end gap-4">
                    {/* Foto recortada y redondeada */}
                    <div className="w-[165px] h-[178px] rounded-2xl overflow-hidden shadow-md">
                        <img
                            src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg"
                            alt="Alishaan Deol"
                            className="w-full h-full object-cover "
                        />
                    </div>

                    {/* Nombre y cargo */}
                    <div className="relative left-10 bottom-9 ">
                        <h4 className="text-3xl font-semibold leading-tight">Alishaan<br />Deol</h4>
                        <p className="text-lg mt-1 text-neutral-700">Product Manager, amazon</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
