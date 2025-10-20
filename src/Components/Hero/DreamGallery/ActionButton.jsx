import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const ActionButton = ({ to = "/about", ariaLabel = "Conocer más sobre nosotros" }) => {
    return (
        <Link
            to={to}
            className="absolute -bottom-22 right-5 md:bottom-25 md:right-20 z-20 bg-black text-lime-400 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 shadow-lg"
            aria-label={ariaLabel}
        >
            <ArrowRight
                size={24}
                className="md:w-7 md:h-7 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
            />
        </Link>
    )
}

export default ActionButton
