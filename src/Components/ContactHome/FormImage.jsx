const FormImage = ({
    src = "/assets/camion2.webp",
    alt = "Servicio de desagote profesional - Don Esteban",
    className = ""
}) => {
    return (
        <div
            className={`hidden lg:block relative ${className}`}
            style={{
                // 👇 Aspect ratio sin altura fija
                aspectRatio: "3/4"
            }}
        >
            <img
                src={src}
                alt={alt}
                width="600"
                height="800"
                className="w-full h-full object-cover rounded-2xl"
                loading="eager"
                style={{
                    aspectRatio: "3/4",
                    objectFit: "cover"
                }}
            />
        </div>
    )
}

export default FormImage