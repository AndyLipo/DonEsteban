import Pileta from '../../assets/imagen-deagote.webp'
import Mecanica from '../../assets/destapacion-mecanica.webp'
import Pozo from '../../assets/desagote-pozo.webp'
import Sotano from '../../assets/sotano.webp'
import Plomeria from '../../assets/plomeria.webp'
import Asequia from '../../assets/asequia.webp'
import Septica from '../../assets/desagote-septica.webp'
import Camion from '../../assets/GaleriaCamion.webp'
import Camion2 from '../../assets/GaleriaCamion2.webp'
import Camion3 from '../../assets/GaleriaCamion3.webp'
import Camion4 from '../../assets/GaleriaCamion4.webp'
import Nocturno from '../../assets/GaleriaNocturno.webp'
import Cliente from '../../assets/GaleriaCliente.webp'
import Tanque from '../../assets/GaleriaTanque.webp'
import Tanque2 from '../../assets/GaleriaTanque2.webp'
import GV1 from '../../assets/GalleryVideo.mp4'
import GV2 from '../../assets/GalleryVideo2.mp4'
import GV3 from '../../assets/GalleryVideo3.mp4'
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
    carouselOnly: [
        {
            id: 7,
            title: "Tu nueva imagen 1",
            type: 'video',
            img: Camion, // Reemplaza con la imagen que quieras

        },
        {
            id: 8,
            title: "Tu nueva imagen 2",
            type: 'video',
            img: Camion,// Reemplaza con la imagen que quieras
        },
        {
            id: 8,
            title: "Tu nueva imagen 2",
            type: 'video',
            img: Camion2,// Reemplaza con la imagen que quieras
        },
        {
            id: 8,
            title: "Tu nueva imagen 2",
            type: 'video',
            img: Camion3,// Reemplaza con la imagen que quieras
        },
        {
            id: 8,
            title: "Tu nueva imagen 2",
            type: 'video',
            img: Camion4,// Reemplaza con la imagen que quieras
        },
        {
            id: 8,
            title: "Tu nueva imagen 2",
            type: 'video',
            img: Nocturno,// Reemplaza con la imagen que quieras
        },
        {
            id: 8,
            title: "Tu nueva imagen 2",
            type: 'video',
            img: Cliente,// Reemplaza con la imagen que quieras
        },
        {
            id: 8,
            title: "Tu nueva imagen 2",
            type: 'video',
            img: Tanque,// Reemplaza con la imagen que quieras
        },
        {
            id: 8,
            title: "Tu nueva imagen 2",
            type: 'video',
            img: Tanque2,// Reemplaza con la imagen que quieras
        },
        {
            id: 8,
            title: "Tu nueva imagen 2",
            type: 'video',
            img: GV1,// Reemplaza con la imagen que quieras
        },
        {
            id: 8,
            title: "Tu nueva imagen 2",
            type: 'video',
            img: GV2,// Reemplaza con la imagen que quieras
        },
        {
            id: 8,
            title: "Tu nueva imagen 2",
            type: 'video',
            img: GV3,// Reemplaza con la imagen que quieras
        },
    ],
};
