import { useState } from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import CategoryPill from '../components/CategoryPill';
import styles from './Home.module.css';

const categories = ['All', 'Frames', 'Keychains', 'Ornaments', 'Toys'];

function Home() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter(p => p.category === activeCategory);

  return (
    <div>
      <div className={styles.pillRow}>
        {categories.map(cat => (
          <CategoryPill
            key={cat}
            label={cat}
            isActive={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
          />
        ))}
      </div>

      <div className={styles.grid}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;