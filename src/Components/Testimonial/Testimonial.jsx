import React from "react"
import RatedHome from "./RatedHome"
import TestimonialsContent from "./TestimonialContent"

export default function Testimonials({
    subtitle = "Testimonios reales",
    title = "Lo que opinan nuestros clientes satisfechos",
    description = "Vecinos de Ingeniero Maschwitz, Escobar y Zona Norte confían en Don Esteban por su atención rápida, precios justos y soluciones efectivas en desagotes, destapaciones y plomería.",

    buttonTo = "/about",
    showRating = true
}) {
    return (
        <section className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Columna izquierda */}
                <TestimonialsContent
                    subtitle={subtitle}
                    title={title}
                    description={description}
                    buttonTo={buttonTo}
                />

                {/* Columna derecha */}
                {showRating && (
                    <div className="lg:pl-8">
                        <RatedHome />
                    </div>
                )}
            </div>
        </section>
    )
}