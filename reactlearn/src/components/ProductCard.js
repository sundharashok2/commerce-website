import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className={styles.card}>
      <div
        className={styles.image}
        style={{ backgroundColor: product.color || '#f5e9e9' }}
      >
        {product.image && (
          <img src={product.image} alt={product.name} className={styles.img} />
        )}
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{product.name}</p>
        <p className={styles.price}>₹{product.price.toLocaleString('en-IN')}</p>
      </div>
    </Link>
  );
}

export default ProductCard;