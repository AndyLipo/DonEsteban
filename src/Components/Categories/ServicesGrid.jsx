import ServiceCard from "./ServiceCard"

const ServicesGrid = ({
    services,
    className = ""
}) => {
    return (
        <div className={`grid md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-16 lg:mt-24 ${className}`}>
            {services.map((service) => (
                <ServiceCard
                    key={service.id}
                    service={service}
                />
            ))}
        </div>
    )
}

export default ServicesGrid