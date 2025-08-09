// // components/HeroDots.jsx
// import clsx from "clsx"

// const HeroDots = ({ texts, current, goToSlide }) => {
//     return (

//         <div
//             className="flex items-center gap-2 mt-4 md:mt-6"
//             role="tablist"
//             aria-label="Navegación de contenido del hero"
//         >
//             {texts.map((text, index) => (
//                 <button
//                     key={text.id}
//                     onClick={() => goToSlide(index)}
//                     className={clsx(
//                         "w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border border-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2469a0] focus:ring-offset-2",
//                         current === index
//                             ? "bg-gray-700 border-gray-700 scale-110"
//                             : "bg-transparent hover:bg-gray-400 hover:border-gray-500"
//                     )}
//                     aria-label={`Ir a slide ${index + 1}: ${text.title}`}
//                     aria-selected={current === index}
//                     role="tab"
//                     tabIndex={current === index ? 0 : -1}
//                 />
//             ))}
//         </div>
//     )
// }
// export default HeroDots

import { memo } from "react"
import clsx from "clsx"

const HeroDots = memo(({ texts, current, goToSlide }) => {
    return (
        <div
            className="flex items-center gap-2 mt-4 md:mt-6"
            role="tablist"
            aria-label="Navegación de contenido del hero"
        >
            {texts.map((text, index) => (
                <button
                    key={text.id}
                    onClick={() => goToSlide(index)}
                    className={clsx(
                        "w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border border-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2469a0] focus:ring-offset-2",
                        current === index
                            ? "bg-gray-700 border-gray-700 scale-110"
                            : "bg-transparent hover:bg-gray-400 hover:border-gray-500"
                    )}
                    aria-label={`Ir a slide ${index + 1}: ${text.title}`}
                    aria-selected={current === index}
                    role="tab"
                    tabIndex={current === index ? 0 : -1}
                />
            ))}
        </div>
    )
})

HeroDots.displayName = 'HeroDots'
export default HeroDots