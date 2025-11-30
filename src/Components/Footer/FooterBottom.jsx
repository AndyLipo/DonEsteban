import React from "react"

const FooterBottom = ({
    links = ["Privacidad", "Descargo"],
    showCopyright = true,
    className = ""
}) => {
    const currentYear = new Date().getFullYear()

    return (
        <div className={`
            flex flex-row 
            justify-center sm:justify-between 
            items-center 
            gap-6 sm:gap-1 md:gap-10
            text-sm text-gray-500   
            border-t border-gray-200
            ${className}
        `}>
            {/* Links de Privacidad y Descargo - siempre en fila */}
            {links.map((link, index) => (
                <button
                    key={index}
                    className="hover:text-gray-700 transition-colors duration-200 cursor-pointer whitespace-nowrap"
                    aria-label={`Ver política de ${link.toLowerCase()}`}

                >
                    {link}
                </button>
            ))}

            {/* Copyright - siempre en la misma fila */}
            {showCopyright && (
                <p className="whitespace-nowrap">
                    © {currentYear} — Copyright
                </p>
            )}
        </div>
    )
}

export default FooterBottom