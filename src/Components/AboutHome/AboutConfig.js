import ImgAb from '../../assets/img-about.webp'
export const aboutConfig = {
    image: {
        src: ImgAb,
        alt: "Trabajador de Don Esteban Atmosféricos",
        width: 600,
        height: 400
    },
    content: {
        welcomeTitle: {
            prefix: "Bienvenidos a ",
            highlight: "Don Esteban ",
            suffix: "Atmosféricos."
        },
        mainTitle: {
            prefix: "La solución ",
            highlight: "rápida y confiable",
            suffix: " para tus necesidades de desagote."
        },
        description: "Somos una empresa familiar en crecimiento, ubicada en Ingeniero Maschwitz, Escobar, con más de una década brindando servicios de desagote, destapaciones y plomería. Contamos con camiones atmosféricos adaptados para , cámara sépticas, sótanos y piletas. Atendemos urgencias, contamo con servicio nocturno programado. Garantizamos un servicio seguro, puntual y responsable, cuidando siempre el medioambiente.",
        brandStatement: "Comprometidos con nuestros clientes y con el entorno, combinamos experiencia, tecnología y un trato cercano para resolver cualquier necesidad de forma eficaz."
    },
    cta: {
        text: "Contacto",
        route: "/contacto"
    }
}