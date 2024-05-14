import { star } from '../assets/icons/index'

const ShopCard = ({ imgURL, name, price, star2 }) => {
  return (
    <div className="relative flex flex-col items-center w-full max-sm:w-full bg-card rounded-xl max-h-72 bg-cover mb-24 border-2 border-dark-red">
      <img
        src={imgURL}
        alt={name}
        className="w-[350px] h-[280px] object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-40 text-white">
        <div className="flex items-center justify-center h-full">
          <img
            src={star}
            alt="rating"
            width={24}
            height={24}
            className="mr-2"
          />
          <p className="font-montserrat text-xl leading-normal text-slate-gray font-semibold">{`(${star2})`}</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
          <p className="mt-2 font-semibold font-montserrat text-dark-red text-2xl leading-normal">{price}</p>
        </div>
      </div>
    </div>
  )
}

export default ShopCard
