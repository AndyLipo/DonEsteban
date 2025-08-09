import { workConfig } from "./WorkConfig"
import WorkHeader from "./WorkHeader"
import ServicesGrid from "./ServicesGrid"
import SpecializationHeader from "./SpecializationHeader"
import WorkGallery from "./WorkGallery"
const OurWork = () => {
    const { header, services, specialization, gallery } = workConfig

    return (
        <section
            className="w-full px-4 sm:px-6 py-12 md:py-20 max-w-7xl mx-auto"
            aria-labelledby="work-heading"
        >
            <WorkHeader
                image={header.image}
                title={header.title}
                alt={header.alt}
            />
            <ServicesGrid services={services} />

            <SpecializationHeader
                title={specialization.title}
                description={specialization.description}
            />

            <WorkGallery gallery={gallery} />
        </section>
    )
}

export default OurWork