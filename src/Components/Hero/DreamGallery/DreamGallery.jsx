import { galleryConfig } from "./GalleryConfig";
import GalleryMainImage from "./GalleryMainImage";
import GallerySecondaryImage from "./GallerySecondaryImage";
import GalleryTitle from "./GalleryTitle";

const DreamGallery = () => {
    const { mainImage, secondaryImage, actionButton, title } = galleryConfig;

    return (
        <section
            className="px-4 sm:px-6 lg:px-8 py-12 md:py-20 bg-white text-black max-w-7xl mx-auto"
            aria-label="gallery-title"
        >
            <div className="flex items-center justify-center pb-40">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-medium leading-tight">
                    <span className="text-gray-700">Don</span>
                    <span className="text-[#2469a0]"> Esteban Atmosféricos</span>
                </h1>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                <GalleryMainImage src={mainImage.src} alt={mainImage.alt} />
                <GallerySecondaryImage
                    src={secondaryImage.src}
                    alt={secondaryImage.alt}
                    buttonTo={actionButton.to}
                    buttonLabel={actionButton.label}
                />
            </div>
            <GalleryTitle title={title.main} highlightedText={title.highlighted} />
        </section>
    );
};

export default DreamGallery;
