import React from "react"

const TestimonialsDescription = ({
    text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio dolore commodi cum.",
    className = ""
}) => {
    return (
        <p className={`text-base md:text-lg text-gray-500 max-w-md ${className}`}>
            {text}
        </p>
    )
}

export default TestimonialsDescription
