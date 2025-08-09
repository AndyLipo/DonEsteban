import GalleryCard from "./GalleryCard"
import WorkPng from "./WorkPng"

const WorkGallery = ({
    gallery,
    className = ""
}) => {
    return (
        <div className={`flex flex-col lg:flex-row items-start gap-6 ${className}`}>
            {/* workPng component */}
            <div className="w-full lg:w-[280px] flex-shrink-0">
                {/* <img src={WorkPn} alt="Work" className="w-full h-auto" /> */}
                <div className="w-full lg:w-[280px] flex-shrink-0">
                    <WorkPng />
                </div>
            </div>

            {/* Gallery cards */}
            <div className="w-full overflow-x-auto lg:overflow-visible pb-4">
                <div className="flex lg:grid lg:grid-cols-4 gap-6 w-max lg:w-full">
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