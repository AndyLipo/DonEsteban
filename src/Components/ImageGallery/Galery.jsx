const CardGalery = ({ card }) => {
    return (
        <div className="rounded-lg overflow-hidden shadow-2xl relative group w-full z-10">
            <div className="absolute inset-0">
                <img
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={card.image}
                    alt={card.alt}
                />
            </div>

            <div className="relative p-8 h-96 flex items-center justify-center">
                <div className="backdrop-blur-lg bg-white/15 rounded-2xl p-8 border border-white/25 shadow-2xl text-center max-w-sm">
                    <h5 className="mb-4 text-2xl font-bold text-white drop-shadow-lg">
                        {card.title}
                    </h5>
                    <p className="text-white/95 drop-shadow-md leading-relaxed">
                        {card.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardGalery;