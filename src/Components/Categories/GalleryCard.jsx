const GalleryCard = ({
    item,
    className = ""
}) => {
    return (
        <div className={`flex-shrink-0 w-[260px] lg:w-full ${className}`}>
            <div className="relative group">
                <div className="aspect-[3/4] relative overflow-hidden rounded-xl md:rounded-2xl">
                    <img
                        loading="lazy"
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        width="260"
                        height="347"
                        decoding="async"
                    />
                </div>
                <div className="mt-4 p-4 bg-white rounded-b-xl md:rounded-b-2xl shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                        {item.title}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default GalleryCard
