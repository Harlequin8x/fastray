import { useEffect, useState } from 'react';
import { products2 } from '../constants/index';
import SearchComponent from './SearchComponent';
import ShopCard from '../components/ShopCard';

const ShopHero = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Alles'); // Default to show all categories

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = products2.filter((product) =>
    (product.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedCategory === 'Alles' || product.category === selectedCategory)
  );

  const categories = ['Alles', 'GPU', 'CPU', 'Mainboard']; // Define your categories here

  return (
    // bg-hero bg-cover
    <section id="shop" className="w-full xl:flex-row flex-col justify-center min-h-screen gap-10">
      <div className="flex flex-col justify-start gap-5 items-center">
        <h2 className="text-4xl font-palanquin font-bold">
          Finde deine
          <span className="text-dark-red"> Hardware!</span>
        </h2>
      </div>

      <div className="font-bold p-8 ml-9">
        <SearchComponent onSearch={handleSearch}/>
        
        <select value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="max-h-68 mb-40 bg-right-bottom padding">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-20">
          {filteredProducts.map((product2) => (
            <ShopCard
              key={product2.name}
              {...product2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopHero;