import GalleryCard from "./GalleryCard"
import WorkPng from "./WorkPng"

const WorkGallery = ({
    gallery,
    className = ""
}) => {
    return (
        <div className={`flex flex-col lg:flex-row items-start gap-4 ${className}`}>
            {/* WorkPng component */}
            <div className="w-full lg:w-[230px] flex-shrink-0">
                <WorkPng />
            </div>

            {/* Gallery cards */}
            <div className="w-full overflow-x-auto lg:overflow-visible pb-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-3 lg:gap-3">
                    {gallery.map((item) => (
                        <GalleryCard
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WorkGallery