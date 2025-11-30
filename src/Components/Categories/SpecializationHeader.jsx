const SpecializationHeader = ({
    title,
    description,
    className = ""
}) => {
    return (
        <div className={`mt-12 md:mt-16 lg:mt-24 space-y-4 text-center ${className}`}>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900">
                {title.prefix}
                <span className="text-[#246416]">{title.highlight}</span>
            </h3>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                {description}
            </p>
        </div>
    )
}

export default SpecializationHeader
