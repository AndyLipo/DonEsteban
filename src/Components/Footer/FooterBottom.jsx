import React from "react"

const FooterBottom = ({
    links = ["Privacidad", "Descargo"],
    showCopyright = true,
    className = ""
}) => {
    const currentYear = new Date().getFullYear()

    return (
        <div className={`flex flex-col sm:flex-row justify-around items-center gap-1 text-sm text-gray-500  ${className}`}>
            {links.map((link, index) => (
                <p key={index}>{link}</p>
            ))}
            {showCopyright && (
                <p>© {currentYear} — Copyright</p>
            )}
        </div>
    )
}

export default FooterBottom