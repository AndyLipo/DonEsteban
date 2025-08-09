const WorkHeader = ({
    image,
    title,
    alt,
    className = ""
}) => {
    return (
        <div className={`bg-[#3dd6af] rounded-2xl md:rounded-3xl py-12 md:py-16 lg:py-20 px-6 ${className}`}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 md:space-y-6">
                    <h3 className="text-xl md:text-2xl text-gray-900 font-medium">
                        {title.subtitle}
                    </h3>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight">
                        {title.main}
                    </h3>
                </div>
                <img
                    loading="lazy"
                    className="w-full max-w-md rounded-xl md:rounded-2xl lg:rounded-3xl mx-auto object-cover"
                    src={image}
                    alt={alt}
                    width="400"
                    height="300"
                    decoding="async"
                />
            </div>
        </div>
    )
}

export default WorkHeader