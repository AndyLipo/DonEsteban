import Camion2 from '../../assets/camion2.webp'

const FormImage = ({
    src = Camion2,
    alt = "Servicio de desagote profesional",
    className = ""
}) => {
    return (
        <div
            className={`hidden lg:block relative aspect-[3/2] rounded-2xl overflow-hidden ${className}`}
            style={{ minHeight: "400px" }}
        >
            <img
                src={src}
                alt={alt}
                width="600"
                height="400"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                loading="eager"
                decoding="async"
                fetchPriority="high"
            />
        </div>
    )
}

export default FormImage
