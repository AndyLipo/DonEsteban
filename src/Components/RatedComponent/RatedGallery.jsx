import RatedHome from "./RatedHome";
import reviewData from "./reviewData";

const RatedGallery = () => {
    const duplicatedData = [...reviewData, ...reviewData]; // duplicamos para efecto infinito

    return (
        <section className="relative overflow-hidden py-10">
            <div className="w-full whitespace-nowrap animate-marquee flex gap-20">
                {duplicatedData.map((review, index) => (
                    <div key={index} className="inline-block">
                        <RatedHome review={review} />
                    </div>
                ))}
            </div>
        </section>

    );
};

export default RatedGallery;
