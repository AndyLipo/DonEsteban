import React from "react"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const CircularButton = ({
    to = "/",
    size = "md",
    bgColor = "bg-black",
    textColor = "text-lime-400",
    className = ""
}) => {
    const sizeClasses = {
        sm: "w-12 h-12",
        md: "w-16 h-16 md:w-20 md:h-20",
        lg: "w-20 h-20 md:w-24 md:h-24"
    }

    const iconSizes = {
        sm: 16,
        md: 24,
        lg: 28
    }

    return (
        <Link
            to={to}
            className={`${sizeClasses[size]} ${bgColor} ${textColor} rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg ${className}`}
        >
            <ArrowRight size={iconSizes[size]} className="md:w-7 md:h-7" />
        </Link>
    )
}

export default CircularButton