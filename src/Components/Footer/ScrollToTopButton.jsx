import React from "react"
import { ArrowUpRight } from "lucide-react"

const ScrollToTopButton = ({ className = "" }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className={`flex justify-center sm:justify-end ${className}`}>
            <button
                onClick={scrollToTop}
                className="
                    /* Tamaño responsive */
                    w-12 h-12 
                    sm:w-14 sm:h-14 
                    lg:w-16 lg:h-16
                    
                    /* Posicionamiento responsive */
                    -mt-20
                    sm:-mt-24 sm:mr-4
                    md:-mt-32 md:mr-8
                    lg:-mt-30 lg:mr-12
                    xl:mr-26
                    
                    /* Estilos base */
                    bg-black 
                    rounded-full 
                    flex items-center justify-center 
                    
                    /* Rotación y animaciones */
                    rotate-[-34.7deg] 
                    hover:rotate-0
                    hover:scale-110
                    active:scale-95
                    
                    /* Transiciones suaves */
                    transition-all duration-300 ease-in-out
                    
                    /* Estados interactivos */
                    cursor-pointer
                    hover:bg-gray-800
                    hover:shadow-xl
                    
                    /* Accesibilidad */
                    focus:outline-none 
                    focus:ring-4 
                    focus:ring-lime-400/20
                    focus:ring-offset-2
                    focus:ring-offset-white
                "
                aria-label="Volver al inicio"
            >
                <ArrowUpRight
                    className="
                        /* Tamaño responsive del icono */
                        w-4 h-4 
                        sm:w-5 sm:h-5 
                        lg:w-6 lg:h-6
                        
                        /* Rotación para compensar la del botón */
                        rotate-[34.8deg] 
                        
                        /* Color */
                        text-[#8be27e]
                        
                        /* Transición suave */
                        transition-transform duration-300
                    "
                />
            </button>
        </div>
    )
}

export default ScrollToTopButton