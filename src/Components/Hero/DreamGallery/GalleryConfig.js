// Rutas directas sin imports
const Camion = '/assets/camion-costado.webp'
const CamionTrb = '/assets/camion-trabajo.webp'

export const galleryConfig = {
    mainImage: {
        src: CamionTrb, // 👈 Esta es la imagen LCP principal
        alt: "Camión especializado en desagotes y limpieza - Don Esteban",
        width: "600",
        height: "400",
        priority: true, // 👈 Para que cargue primero
        fetchPriority: "high"
    },
    secondaryImage: {
        src: Camion,
        alt: "Servicio de desagote profesional - Don Esteban",
        width: "600",
        height: "800",
        priority: false,
        fetchPriority: "auto"
    },
    actionButton: {
        to: "/about",
        label: "Conocer más sobre nuestros servicios"
    },
    title: {
        main: "Sobre",
        highlighted: "nosotros"
    }
}