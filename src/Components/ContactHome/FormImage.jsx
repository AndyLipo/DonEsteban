// import Camion2 from '../../assets/camion2.webp'

// const FormImage = ({
//     src = Camion2,
//     alt = "Servicio de desagote profesional",
//     className = ""
// }) => {
//     return (
//         <div className={`hidden lg:block relative min-h-[400px] rounded-2xl md:rounded-2xl ${className}`}>
//             <img
//                 loading="lazy"
//                 src={src}
//                 alt={alt}
//                 className="absolute inset-0 w-full h-full object-cover rounded-2xl -ml-3"
//                 width="600"
//                 height="400"
//                 decoding="async"
//             />
//         </div>
//     )
// }

// export default FormImage

import Camion2 from '../../assets/camion2.webp'

const FormImage = ({
    src = Camion2,
    alt = "Servicio de desagote profesional",
    className = ""
}) => {
    return (
        <div
            className={`hidden lg:block relative rounded-2xl md:rounded-2xl overflow-hidden aspect-[3/2] ${className}`}
        >
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover rounded-2xl"
                width="600"
                height="400"
                decoding="async"
                fetchPriority="low"
                loading="lazy"
            />
        </div>
    )
}

export default FormImage
