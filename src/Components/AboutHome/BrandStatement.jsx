const BrandStatement = ({
    text,
    className = ""
}) => {
    return (
        <div className={`mt-12 md:mt-16 lg:w-3/4 ${className}`}>
            <h2 className="text-xl md:text-2xl font-light text-gray-900 leading-relaxed">
                {text}
            </h2>
        </div>
    )
}

export default BrandStatement
