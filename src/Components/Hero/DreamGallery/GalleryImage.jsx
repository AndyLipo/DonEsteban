const GalleryImage = ({ src, alt, className, ...props }) => {
    return (
        <img
            loading="lazy"
            src={src}
            alt={alt}
            className={`w-full h-auto object-cover ${className}`}
            decoding="async"
            {...props}
        />
    )
}

export default GalleryImage