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
        <div className={`lg:w-1/2 flex flex-col justify-between space-y-8 md:space-y-12 ${className}`}>
            {/* Títulos */}
            <div className="space-y-4 md:space-y-6">
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

            {/* Descripción */}
            <AboutDescription text={description} />

            {/* CTA */}
            <AboutCTA
                text={cta.text}
                route={cta.route}
            />
        </div>
    )
}

export default AboutContent