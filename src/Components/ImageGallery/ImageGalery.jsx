import { cardData } from './CardData';
import CardGalery from "./Galery";

const ImageGalery = () => {
    return (
        <>
            <div className="grid grid-cols-3 grid-rows-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
                {cardData.map((card) => (
                    <CardGalery key={card.id} card={card} />
                ))}
            </div>
        </>
    )
}

export default ImageGalery