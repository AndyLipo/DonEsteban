// components/GallerySecondaryImage.jsx
import GalleryImage from "./GalleryImage"
import DecorativeSVG from "./DecorativeSVG"
import ActionButton from "./ActionButton"

const GallerySecondaryImage = ({ src, alt, buttonTo, buttonLabel }) => {
    return (
        <div className="relative order-2 md:order-none">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-square">
                <GalleryImage
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                    width="400"
                    height="400"
                />
                <DecorativeSVG />
            </div>
            <ActionButton to={buttonTo} ariaLabel={buttonLabel} />
        </div>
    )
}
export default GallerySecondaryImage
