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
                    
                    w-12 h-12 
                    sm:w-14 sm:h-14 
                    lg:w-16 lg:h-16
                    
                    
                    -mt-30
                    sm:-mt-24 sm:mr-4
                    md:-mt-32 md:mr-8
                    lg:-mt-30 lg:mr-12
                    xl:mr-26
                    
                    
                    bg-black 
                    rounded-full 
                    flex items-center justify-center 
                    
                    
                    rotate-[-34.7deg] 
                    hover:rotate-0
                    hover:scale-110
                    active:scale-95
                    
                    
                    transition-all duration-300 ease-in-out
                    
                    
                    cursor-pointer
                    hover:bg-gray-800
                    hover:shadow-xl
                    
                    
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
                        
                        w-4 h-4 
                        sm:w-5 sm:h-5 
                        lg:w-6 lg:h-6
                        
                        
                        rotate-[34.8deg] 
                        
                        /* Color */
                        text-[#8be27e]
                        
                       
                        transition-transform duration-300
                    "
                />
            </button>
        </div>
    )
}

export default ScrollToTopButton