const GalleryCard = ({
    item,
    className = ""
}) => {
    return (
        <div className={`${className}`}>
            <div className="relative group h-full">
                <div className="h-[300px] sm:h-[350px] lg:h-[300px] flex flex-col">
                    <div className="flex-1 relative overflow-hidden rounded-xl md:rounded-2xl">
                        <img
                            loading="lazy"
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            decoding="async"
                        />
                    </div>
                    <div className="mt-3 p-3 bg-white rounded-b-xl md:rounded-b-2xl shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 leading-tight">
                            {item.title}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryCard