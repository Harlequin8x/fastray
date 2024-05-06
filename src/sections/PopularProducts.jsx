import PopularProductCard from '../components/PopularProductCard'
import { products } from '../constants/index'


const PopularProducts = () => {
  return (
    <section
      id="products"
      className="max-container max-sm:mt-12"
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Unsere
          <span className="text-dark-red"> beliebten</span> Produkte
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Entdecke die Power der Zukunft mit unsereren neuesten Grafikkarten! Tauche ein in eine Welt voller Detailtreue und
          Geschwindigkeit.
        </p>
      </div>
      
      <div className="max-h-72 mb-40 bg-right-bottom">        
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (
        <PopularProductCard key={product.name} {...product} />
      ))}
        </div>
        </div>
    </section>
  )
}

export default PopularProducts
