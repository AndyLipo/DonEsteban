import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import WorkPng from './WorkPng'

export const OurWork = () => {
    const headerImage =
        "https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

    const services = [
        {
            title: "Residential Pool Services",
            img: "https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
            title: "Commercial Pool Services",
            img: "https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
    ];

    const gallery = [
        {
            title: "Building New Pools",
            img: "https://images.pexels.com/photos/261410/pexels-photo-261410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
            title: "Pool Repair",
            img: "https://images.pexels.com/photos/105933/pexels-photo-105933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
            title: "Pool Maintenance",
            img: "https://images.pexels.com/photos/261238/pexels-photo-261238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
            title: "Equipment Install",
            img: "https://images.pexels.com/photos/261045/pexels-photo-261045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
            title: "Custom Pool Design",
            img: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
    ];

    return (
        <section className="w-full px-6 py-20">
            {/* Header */}
            <div className="bg-[#F2FF59] rounded-3xl py-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h4 className="text-2xl text-stone-950 font-medium font-archivo">
                            We specialize in the following.
                        </h4>
                        <h2 className="text-5xl md:text-7xl font-medium text-stone-950 leading-tight font-archivo">
                            Our Professional Pool Services.
                        </h2>
                    </div>
                    <img
                        className="w-full max-w-[520px] rounded-3xl mx-auto object-cover"
                        src={headerImage}
                        alt="Professional Pool"
                    />
                </div>
            </div>

            {/* Services */}
            <div className="grid md:grid-cols-2 gap-12 mt-24">
                {services.map((service, i) => (
                    <div key={i} className="relative overflow-hidden rounded-2xl shadow-lg">
                        <img
                            src={service.img}
                            alt={service.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-8 left-8 bg-white/80 px-4 py-2 rounded">
                            <h3 className="text-3xl text-stone-950 font-medium font-archivo">
                                {service.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Specialization */}
            <div className="mt-24 space-y-6 text-center">
                <h2 className="text-6xl font-medium text-stone-950 font-archivo">
                    Our categories of {" "}
                    <span className="text-neutral-400">Speciali-zation.</span>
                </h2>
                <p className="text-lg text-stone-950 font-archivo max-w-xl mx-auto">
                    Each pool is different. We tailor our services to fit your location’s
                    needs, offering truly unique solutions.
                </p>
                <div className="flex justify-center my-16">
                    <Button
                        variant="outline"
                        className="rounded-full h-auto py-4 px-8 bg-[#f1f1f1] text-[#0f1011] border-[#0f1011] hover:bg-[#e5e5e5] group"
                    >
                        <span className="font-[600] text-xl tracking-[-0.2px] font-[Archivo]">
                            Discover
                        </span>
                        <div className="ml-2 bg-[#f1f1f1] rounded-full p-2 group-hover:translate-x-1 transition-transform">
                            <ArrowRight className="h-4 w-6" />
                        </div>
                    </Button>
                </div>

            </div>

            {/* Gallery */}
            <div className="w-full max-w-[1845px] h-[456px] relative px-10 overflow-hidden">
                {/* Textos superiores */}

                <div className="relative right-10">
                    <WorkPng />
                </div>
                {/* Tarjetas dinámicas desde gallery */}
                <div className="absolute top-0 left-[405px] flex gap-[20px]">
                    {gallery.map((item, index) => (
                        <div key={index} className="relative w-[260px]">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-[344px] rounded-[30px] object-cover"
                            />
                            <div className="absolute top-[362px] w-full h-[94px] bg-white rounded-[30px]" />
                            <div className="absolute top-[402px] left-[34px] text-stone-950 text-[22px] font-bold font-['Archivo']">
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </section>
    );
};
