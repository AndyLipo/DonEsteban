"use client"

import { Button } from "@/components/ui/button"
import { EllipsisVertical } from "lucide-react"
import { useState, useEffect } from "react"
import clsx from "clsx"

const texts = [
    {
        title: "You think,",
        subtitle: "we build your dream pool.",
        description: "Expert swimming pool maintenance.",
    },
    {
        title: "We clean,",
        subtitle: "you relax and enjoy.",
        description: "Reliable desagote for pool & construction.",
    },
    {
        title: "Fast service,",
        subtitle: "for your everyday need.",
        description: "Camiones al instante. Respuesta inmediata.",
    },
]

const HeroSection = () => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % texts.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="flex flex-col-reverse lg:flex-row justify-between  items-center px-6 lg:px-32 py-20 bg-white dark:bg-slate-900 mt-14">
            {/* Left */}
            <div className="flex-1 space-y-4 text-left">
                <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300">
                    Build your dream pool.
                </h4>

                <div className="transition-all duration-500">
                    <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white">
                        {texts[current].title}
                        <span className="text-gray-500"> {texts[current].subtitle}</span>
                    </h1>
                    <p className="mt-4 text-sm font-medium text-gray-700 dark:text-gray-400">
                        {texts[current].description}
                    </p>
                </div>

                {/* Dots */}
                <div className="flex items-center gap-2 mt-6">
                    {texts.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={clsx(
                                "w-3 h-3 rounded-full border border-gray-400",
                                current === index
                                    ? "bg-gray-700 dark:bg-gray-300"
                                    : "bg-transparent hover:bg-gray-400"
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Right */}
            <div className="flex-1 flex flex-col items-end justify-end gap-8 mb-10 lg:mb-0">
                <div className="w-40 h-40 border-2 border-black dark:border-white rounded-full flex items-center justify-center text-center font-bold text-sm">
                    {/* Puedes reemplazar esto con una imagen si tenés un logo tipo sello */}
                    <span className="text-black dark:text-white">
                        ADF<br />SERVICE<br />LOGO
                    </span>
                </div>


                <button
                    type="submit"
                    className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-zinc-100 hover:text-gray-400 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                >
                    Explore
                    <svg
                        className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                        viewBox="0 0 16 19"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                            className="fill-gray-800 group-hover:fill-gray-800"
                        ></path>
                    </svg>
                </button>

            </div>
        </section>
    )
}

export default HeroSection
