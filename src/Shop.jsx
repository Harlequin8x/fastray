import { ShopHero, ShopFooter } from './shop'
import Nav from './components/Nav'

const Shop = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <ShopHero />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <ShopFooter />
    </section>
  </main>
)

export default Shop
