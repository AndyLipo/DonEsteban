const AboutTitle = ({
    prefix,
    highlight,
    suffix,
    size = "large",
    className = ""
}) => {
    const sizeClasses = {
        medium: "text-3xl sm:text-4xl md:text-4xl",
        large: "text-4xl sm:text-5xl md:text-6xl"
    }

    const heightClasses = {
        medium: "min-h-[1.8em] leading-tight", // 👈 Altura para 2 líneas
        large: "min-h-[1.5em] leading-tight"   // 👈 Altura para 1-2 líneas
    }

    return (
        <h2
            className={`${sizeClasses[size]} ${heightClasses[size]} font-medium ${className}`}
            style={{
                // 👇 CONTENCIÓN CRÍTICA para prevenir shifts
                contain: 'layout style',
                contentVisibility: 'auto'
            }}
        >
            <span className="text-gray-900">{prefix}</span>
            <span className="text-[#2469a0]">{highlight}</span>
            <span className="text-gray-900">{suffix}</span>
        </h2>
    )
}

export default AboutTitle