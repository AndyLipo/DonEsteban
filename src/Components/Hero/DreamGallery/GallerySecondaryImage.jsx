import { useState, useEffect } from "react";
import DecorativeSVG from "./DecorativeSVG";
import ActionButton from "./ActionButton";

const GallerySecondaryImage = ({
    src = "/assets/camion-costado.webp",
    alt = "Servicio de desagote profesional - Don Esteban",
    buttonTo,
    buttonLabel
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    // Precargar imagen críticamente
    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setImageLoaded(true);
        img.onerror = () => {
            console.error(`Error cargando imagen: ${src}`);
            setImageLoaded(true); // Mostrar igualmente
        };
    }, [src]);

    return (
        <div className="relative order-2 md:order-none">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-square bg-gray-100">
                <img
                    src={src}
                    alt={alt}
                    width="400"
                    height="600"
                    loading="eager"
                    fetchPriority="high"
                    decoding="sync"
                    className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{
                        aspectRatio: "1/1",
                        objectFit: "cover",
                        maxWidth: "100%",
                        height: "auto"
                    }}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => {
                        console.error(`Error en img tag: ${src}`);
                        setImageLoaded(true);
                    }}
                />
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                        <span className="text-gray-400">Cargando imagen...</span>
                    </div>
                )}
                <DecorativeSVG />
            </div>
            <ActionButton to={buttonTo} ariaLabel={buttonLabel} />
        </div>
    );
};

export default GallerySecondaryImage;