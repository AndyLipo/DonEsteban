const GalleryMainImage = ({
    src = "/assets/camion-trabajo.webp",
    alt = "Camión especializado en desagotes y limpieza - Don Esteban"
}) => {
    return (
        <div className="order-1 md:order-none">
            <img
                src={src}
                alt={alt}
                width="600"
                height="400"
                loading="eager" // 👈 NO lazy para LCP
                fetchPriority="high" // 👈 Máxima prioridad
                decoding="sync" // 👈 Decodificación sincrónica
                className="rounded-2xl md:rounded-3xl w-full h-auto object-cover"
                style={{
                    aspectRatio: "3/2",
                    objectFit: "cover",
                    maxWidth: "100%",
                    height: "auto"
                }}
            />
        </div>
    )
}

export default GalleryMainImage