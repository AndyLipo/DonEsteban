const GalleryMainImage = ({ src, alt, className = "", width, height, priority = false }) => {
    return (
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3]">
            <picture>
                {src?.sources?.map((source) => (
                    <source key={source.srcset} srcSet={source.srcset} type={source.type} />
                ))}
                <img
                    srcSet={src}
                    alt={alt}
                    width={width}
                    height={height}
                    decoding="async"
                    loading={priority ? "eager" : "lazy"}
                    fetchPriority={priority ? "high" : "auto"}
                    className={`object-cover w-full h-auto ${className}`}
                />
            </picture>
        </div>
    )
}

export default GalleryMainImage
