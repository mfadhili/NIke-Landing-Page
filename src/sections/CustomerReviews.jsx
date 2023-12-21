import {reviews} from "../constants/index.js";
import {ReviewCard} from "../components/ReviewCard.jsx";

export const CustomerReviews = () => {
    return (
        <section className="max-container">
            <h3 className="text-4xl font-palanquin font-bold text-center">
                What Our <span className="text-coral-red">Customers</span> Say?
            </h3>
            <p className="info-text text-center mt-4 m-auto max-w-lg ">
                Hear genuine stories from our satisfied customers about their exceptional experiences with us
            </p>
            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                {reviews.map((review) => (
                    <ReviewCard key={review.customerName} {...review}/>
                ))}
            </div>
        </section>
    )
}