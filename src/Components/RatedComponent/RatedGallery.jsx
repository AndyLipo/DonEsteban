import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const RatedGallery = () => {
    return (
        <div className="w-full max-w-[1704px] px-6 py-24 mx-auto bg-[#f9f9f9] rounded-3xl relative font-['Archivo']">
            {/* Cabecera */}
            <div className="mb-12 space-y-6">
                <h3 className="text-[38px] font-medium text-stone-950 leading-[50px]">
                    Testimonials.
                </h3>
                <h2 className="text-[80px] md:text-[130px] leading-[1.05] font-medium text-stone-950 max-w-4xl">
                    Our Clients Feedback.
                </h2>
                <p className="text-lg text-neutral-700 leading-7 max-w-md mt-6">
                    We specialize in providing top-notch pool service and maintenance to ensure your pool remains a safe, clean, and inviting space for relaxation and recreation.
                </p>
            </div>

            {/* Círculo decorativo */}
            <Link
                to="/about"
                className="absolute bottom-15 left-70 z-10 bg-black text-lime-400 w-16 h-16 rounded-full flex items-center justify-center transition-transform hover:scale-105 shadow-lg"
            >
                <ArrowRight size={28} />
            </Link>

            {/* Testimonio principal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                <div className="flex justify-end">
                    <img
                        src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg"
                        alt="Alishaan Deol"
                        className="w-[262px] h-[254px] rounded-[40px] object-cover"
                    />
                </div>

                <div className="flex flex-col justify-center space-y-6">
                    <h4 className="text-6xl font-semibold text-neutral-700 leading-[74px]">
                        Nice job. I'm happy!
                    </h4>
                    <p className="text-[38px] text-neutral-700 leading-[50px] font-medium">
                        Friendly, reliable and thorough weekly service. A big change from my previous pool cleaning company.
                    </p>
                    <div>
                        <h5 className="text-[40px] md:text-[50px] font-medium text-stone-950">
                            Alishaan Deol
                        </h5>
                        <p className="text-xl text-stone-950 leading-loose">
                            Product Manager, Amazon
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RatedGallery;
