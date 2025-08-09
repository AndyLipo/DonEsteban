import { aboutConfig } from "./AboutConfig"
import AboutImage from "./AboutImage"
import AboutContent from "./AboutContent"
import BrandStatement from "./BrandStatement"

const AboutHome = () => {
    const { image, content, cta } = aboutConfig

    return (
        <section
            className="container mx-auto px-4 sm:px-6 py-12 md:py-20 lg:py-24"
            aria-labelledby="about-heading"
        >
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
                <AboutImage
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                />

                <AboutContent
                    welcomeTitle={content.welcomeTitle}
                    mainTitle={content.mainTitle}
                    description={content.description}
                    cta={cta}
                />
            </div>

            <BrandStatement text={content.brandStatement} />
        </section>
    )
}

export default AboutHome