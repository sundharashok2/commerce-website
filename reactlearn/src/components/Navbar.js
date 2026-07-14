// components/Navbar.js
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>GiftHive</Link>

      <div className={styles.navLinks}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/products" className={styles.navLink}>Products</Link>
        <Link to="/create-product" className={styles.addProductBtn}>+ Add Product</Link>
      </div>
    </nav>
  );
}

export default Navbar;