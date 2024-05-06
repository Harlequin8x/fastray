import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants/index"


const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        Was unsere
        <span className="text-dark-red"> Kunden </span>
        sagen
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-centeer">
        Schau dir an, was unsere zufriedenen Kunden über ihre Erfahrung mit unserem Shop gemacht haben.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
      ))}
      </div>
    </section>
  )
}

export default CustomerReviews
