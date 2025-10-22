import Camion from '../../../assets/camion-costado.webp?w=600;900;1200&format=webp;avif&as=srcset'
import CamionTrb from '../../../assets/camion-trabajo.webp?w=600;900;1200&format=webp;avif&as=srcset'

export const galleryConfig = {
    mainImage: {
        src: Camion,
        alt: "Servicio de desagote profesional - Don Esteban"
    },
    secondaryImage: {
        src: CamionTrb,
        alt: "Camión especializado en desagotes y limpieza"
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