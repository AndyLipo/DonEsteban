import Pileta from '../../assets/imagen-deagote.webp'
import Mecanica from '../../assets/destapacion-mecanica.webp'
import Pozo from '../../assets/desagote-pozo.webp'
import Sotano from '../../assets/sotano.webp'
import Plomeria from '../../assets/plomeria.webp'
import Asequia from '../../assets/asequia.webp'
import Septica from '../../assets/desagote-septica.webp'

export const workConfig = {
    header: {
        image: Pileta,
        title: {
            subtitle: "Nos especializamos en servicios confiables",
            main: "Desagote profesional en Zona Norte",
        },
        alt: "Camión de desagote en Ingeniero Maschwitz realizando trabajos de pozo séptico",
    },
    services: [
        {
            id: 1,
            title: "Destapaciones mecanizadas",
            img: Mecanica,
        },
        {
            id: 2,
            title: "Desagote de pozos ciegos",
            img: Pozo,
        },
    ],
    specialization: {
        title: {
            prefix: "Nuestros servicios de ",
            highlight: "especialización en desagote",
        },
        description:
            "Cada tipo de obstrucción o pozo requiere una solución distinta. Nuestro equipo brinda atención personalizada, rápida y segura en Escobar, Maschwitz y toda la Zona Norte.",
    },
    gallery: [
        {
            id: 3,
            title: "Desagote de sótanos inundados",
            img: Sotano,
        },
        {
            id: 4,
            title: "Servicio de plomería 24 hs",
            img: Plomeria,
        },
        {
            id: 5,
            title: "Limpieza de acequias y aguadas",
            img: Asequia,
        },
        {
            id: 6,
            title: "Destapación de cámaras sépticas",
            img: Septica,
        },
    ],
};
