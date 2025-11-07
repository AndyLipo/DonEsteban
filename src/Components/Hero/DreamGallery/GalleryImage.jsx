const GalleryImage = ({
    src,
    alt,
    className = "",
    width = "600",
    height = "400",
    priority = false,
    fetchPriority = "auto"
}) => {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={fetchPriority}
            decoding={priority ? "sync" : "async"}
            className={className}
            style={{
                aspectRatio: `${width} / ${height}`,
                objectFit: 'cover',
                maxWidth: '100%',
                height: 'auto'
            }}
        />
    )
}

export default GalleryImage