import AboutTitle from "./AboutTitle"
import AboutDescription from "./AboutDescription"
import AboutCTA from "./AboutCTA"

const AboutContent = ({
    welcomeTitle,
    mainTitle,
    description,
    cta,
    className = ""
}) => {
    return (
        <div
            className={`lg:w-1/2 flex flex-col justify-between space-y-8 md:space-y-12 ${className}`}
            style={{
                // 👇 CONTENCIÓN COMPLETA de toda la sección
                contain: 'layout style',
                minHeight: '600px', // 👈 Suma de: títulos(200) + desc(120) + CTA(100) + espacios
                contentVisibility: 'auto'
            }}
        >
            {/* Títulos - Con espacio reservado exacto */}
            <div
                className="space-y-4 md:space-y-6"
                style={{ minHeight: '220px' }} // 👈 Título mediano + grande + espacios
            >
                <AboutTitle
                    prefix={welcomeTitle.prefix}
                    highlight={welcomeTitle.highlight}
                    suffix={welcomeTitle.suffix}
                    size="medium"
                />

                <AboutTitle
                    prefix={mainTitle.prefix}
                    highlight={mainTitle.highlight}
                    suffix={mainTitle.suffix}
                    size="large"
                />
            </div>

            {/* Descripción - Con espacio exacto */}
            <div style={{ minHeight: '150px' }}> {/* 👈 Descripción + espacio negativo */}
                <AboutDescription text={description} />
            </div>

            {/* CTA - Con espacio exacto */}
            <div style={{ minHeight: '100px' }}> {/* 👈 Botón + margin-bottom */}
                <AboutCTA
                    text={cta.text}
                    route={cta.route}
                />
            </div>
        </div>
    )
}

export default AboutContent