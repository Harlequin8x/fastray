import { ShopHero, ShopFooter } from './shopSection'
import Nav from './components/Nav'

const Shop = () => (
  <main className="relative">
    <Nav />
    <section className="padding">
      <ShopHero />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <ShopFooter />
    </section>
  </main>
)

export default Shop
