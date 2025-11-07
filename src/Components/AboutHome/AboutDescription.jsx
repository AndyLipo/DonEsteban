const AboutDescription = ({
    text,
    className = ""
}) => {
    return (
        <div
            className={`space-y-6 mt-0 xl:-mt-20 ${className}`}
            style={{
                // 👇 ALTURA RESERVADA basada en tu diseño
                minHeight: '120px',
                contain: 'layout style'
            }}
        >
            <p
                className="text-base md:text-lg text-gray-600 leading-relaxed"
                style={{
                    // 👇 Cada párrafo tiene altura estable
                    minHeight: '4.5em' // ~3 líneas de texto
                }}
            >
                {text}
            </p>
        </div>
    )
}

export default AboutDescription