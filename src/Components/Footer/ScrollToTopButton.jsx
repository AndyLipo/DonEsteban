import React from "react"
import { ArrowUpRight } from "lucide-react"

const ScrollToTopButton = ({
    className = ""
}) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className={`flex justify-center ${className}`}>
            <button
                onClick={scrollToTop}
                className="md:-mt-40 md:ml-190 w-14 h-14 bg-black rounded-full flex items-center justify-center rotate-[-34.7deg] hover:rotate-10 transition-transform text-lime-400 cursor-pointer"
            >
                <ArrowUpRight className="w-5 h-5 rotate-[34.8deg] text-[#8be27e]" />
            </button>
        </div>
    )
}

export default ScrollToTopButton