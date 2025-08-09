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

    return (
        <h2 className={`${sizeClasses[size]} font-medium ${className}`}>
            <span className="text-gray-900">{prefix}</span>
            <span className="text-[#2469a0]">{highlight}</span>
            <span className="text-gray-900">{suffix}</span>
        </h2>
    )
}

export default AboutTitle