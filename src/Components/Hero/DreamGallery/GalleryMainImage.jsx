import GalleryImage from './GalleryImage'
const GalleryMainImage = ({ src, alt }) => {
    return (
        <div className="order-1 md:order-none">
            <GalleryImage
                src={src}
                alt={alt}
                className="rounded-2xl md:rounded-3xl"
                width={600}
                height={400}
                priority={true} // 👈 mejora LCP
            />
        </div>
    )
}
export default GalleryMainImage