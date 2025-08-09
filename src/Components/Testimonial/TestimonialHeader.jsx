import React from "react"

const TestimonialsHeader = ({
    subtitle = "Testimonios.",
    title = "Reseñas de nuestros Clientes."
}) => {
    return (
        <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                {subtitle}
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {title}
            </h3>
        </div>
    )
}

export default TestimonialsHeader