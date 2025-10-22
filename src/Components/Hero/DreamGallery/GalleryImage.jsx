const GalleryMainImage = ({ src, alt }) => {
    return (
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3]">
            <img
                src={src}
                alt={alt}
                width="600"
                height="400"
                decoding="async"
                fetchPriority="high"   // 👈 prioridad máxima
                loading="eager"        // 👈 evita lazy load
                className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
            />
        </div>
    )
}

export default GalleryMainImage
