import React from "react"
import TestimonialHeader from "./TestimonialHeader"
import TestimonialDescription from "./TestimonialDescription"
import CircularButton from "./CircularButton"

const TestimonialsContent = ({
    subtitle,
    title,
    description,
    buttonTo = "/about",
    className = ""
}) => {
    return (
        <div className={`space-y-6 md:space-y-8 ${className}`}>
            <TestimonialHeader subtitle={subtitle} title={title} />
            <TestimonialDescription text={description} />
            <CircularButton to={buttonTo} />
        </div>
    )
}

export default TestimonialsContent