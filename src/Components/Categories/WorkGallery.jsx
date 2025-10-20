// export default WorkGallery
import GalleryCard from "./GalleryCard"
import WorkPng from "./WorkPng"

const WorkGallery = ({
    gallery,
    className = "",
    onCardClick // Nueva prop
}) => {
    return (
        <div className={`flex flex-col lg:flex-row items-start gap-4 lg:gap-6 ${className}`}>
            {/* WorkPng component */}
            <div className="w-full sm:w-[300px] lg:w-[230px] flex-shrink-0">
                <WorkPng />
            </div>

            {/* Gallery cards */}
            <div className="w-full overflow-x-auto lg:overflow-visible pb-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-row gap-2 sm:gap-3 lg:gap-3">
                    {gallery.map((item, index) => (
                        <GalleryCard
                            key={item.id}
                            item={item}
                            index={index}
                            onClick={onCardClick}
                            className="w-full sm:min-w-[150px] lg:min-w-[160px]"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WorkGallery