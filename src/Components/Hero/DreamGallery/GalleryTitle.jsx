export const GalleryTitle = ({
    title = "Sobre",
    highlightedText = "nosotros",
    className = ""
}) => {
    return (
        <div className={`text-right mt-8 md:-mt-12 lg:-mt-34 relative z-30 lg:mr-40 ${className}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light md:-mt-22">
                <span className="font-semibold">{title} </span>
                <span className="text-[#2469a0]">{highlightedText}</span>
            </h2>
        </div>
    )
}

export default GalleryTitle

