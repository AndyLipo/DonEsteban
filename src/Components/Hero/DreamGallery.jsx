import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const DreamGallery = () => {
    return (
        <section className="px-4 md:px-20 py-20 bg-white text-black">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Izquierda - Imagen grande */}
                <div>
                    <img
                        src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                        alt="Placeholder izquierda"
                        className="rounded-3xl w-full h-auto object-cover mt-24"
                    />
                    {/* <p className="text-xs text-gray-600 mt-2">Udagada Resort, Maldives.</p> */}
                </div>

                {/* Derecha - Imagen + botón y textos */}
                <div className="flex flex-col justify-between h-full gap-6">
                    <div className="relative">
                        {/* Imagen con overflow-hidden para que el SVG la "corte" */}
                        <div className="relative rounded-3xl overflow-hidden">
                            <img
                                src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                                alt="Placeholder derecha"
                                className="w-full h-auto object-cover"
                            />

                            {/* SVG decorativo - ahora más grande y posicionado correctamente */}
                            <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                className="absolute inset-0 z-10 size-90 ml-44"
                            >
                                <path
                                    d="  M 250,0
                                        L 400,0
                                        L 400,150
                                        Q 400,170 380,170
                                        L 330,170
                                        Q 310,170 310,190
                                        L 310,280
                                        Q 310,300 290,300
                                        L 20,300
                                        Q 0,300 0,280
                                        L 0,80
                                        Q 0,60 20,60
                                        L 70,60
                                        Q 90,60 90,40
                                        L 90,20
                                        Q 90,0 110,0
                                        L 250,0
                                        Z"
                                    fill="white"
                                />
                            </svg>
                        </div>

                        {/* Botón con z-20 para estar encima del SVG */}
                        <Link
                            to="/about"
                            className="absolute bottom-9 right-20 z-10 bg-black text-lime-400 w-16 h-16 rounded-full flex items-center justify-center transition-transform hover:scale-105 shadow-lg"
                        >
                            <ArrowRight size={28} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Texto inferior */}
            <div className="text-right -mt-30 mr-20 z-40 relative">
                <h2 className="text-4xl md:text-5xl font-light leading-tight z-40">
                    <span className="text-black font-semibold z-40">dream</span>{" "}
                    <span className="text-gray-500">come</span>
                    <br />
                    <span className="text-gray-500">true.</span>
                </h2>
            </div>
        </section>
    );
};

export default DreamGallery;