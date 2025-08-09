const ServiceCard = ({
    service,
    className = ""
}) => {
    return (
        <div className={`relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg aspect-video group ${className}`}>
            <img
                loading="lazy"
                src={service.img}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                width="400"
                height="225"
                decoding="async"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded transition-all duration-300 group-hover:bg-white/95">
                <h3 className="text-xl md:text-2xl lg:text-3xl text-gray-900 font-medium">
                    {service.title}
                </h3>
            </div>
        </div>
    )
}

export default ServiceCard