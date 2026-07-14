// pages/ProductDetail.js
import { Link } from 'react-router-dom';

function ProductDetail() {
  return (
    <div>
      {/* size selector, qty stepper etc. */}
      <button>Add to cart</button>
      <Link to="/checkout">Go to checkout</Link>
    </div>
  );
}
export default ProductDetail;