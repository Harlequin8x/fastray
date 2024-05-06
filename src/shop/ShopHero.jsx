import SearchComponent from './SearchComponent'
import ShopCard from '../components/ShopCard'
import { products2 } from '../constants/index'

const ShopHero = () => {
  return (
    <section
      id="shop"
      className="w-full xl:flex-row flex-col justify-center min-h-screen gap-10 max-container bg-hero bg-cover"
    >
      

      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Unser
          <span className="text-dark-red"> Angebot</span>
        </h2>
      </div>

      <div className="font-bold p-8">
        <SearchComponent style={{ width: '300px' }}/>
      </div>

      <div className="max-h-68 mb-40 bg-right-bottom padding">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-20">
          {products2.map((product2) => (
            <ShopCard
              key={product2.name}
              {...product2}                   
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShopHero
