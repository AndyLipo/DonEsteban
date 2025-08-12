const AboutDescription = ({
    text,
    className = ""
}) => {
    return (
        <div className={`space-y-6 mt-0 xl:-mt-20 ${className}`}>
            <p className="text-base md:text-lg text-gray-600">
                {text}
            </p>
        </div>
    )
}

export default AboutDescription