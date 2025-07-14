import { Star } from "lucide-react";

const RatedHome = ({ review }) => {
    if (!review || Object.keys(review).length === 0) return null;

    return (
        <div className="text-center mb-12">
            <div className="mb-6 flex justify-center">
                <img
                    src={review.avatar || "https://i.pravatar.cc/150?u=default"}
                    className="w-32 h-32 rounded-full shadow-lg dark:shadow-black/30 object-cover"
                    alt={review.name}
                />
            </div>
            <h5 className="mb-1 text-xl font-semibold">{review.name}</h5>
            <h6 className="mb-4 text-primary dark:text-primary-400 font-medium">
                {review.service}
            </h6>
            <p className="mb-4 text-neutral-600 dark:text-neutral-300 max-w-md mx-auto text-sm italic relative">
                <span className="text-3xl text-primary mr-2 absolute -top-2 -left-4">“</span>
                {review.comment}
                <span className="text-3xl text-primary ml-2 absolute -bottom-2 -right-4">”</span>
            </p>
            <ul className="mb-0 flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                    <li key={i}>
                        <Star
                            className={`h-5 w-5 ${i < review.rating
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-gray-300"
                                }`}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RatedHome;
