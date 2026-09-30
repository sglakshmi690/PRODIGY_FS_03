import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/axios';
import { useCart } from '../context/CartContext';
 
function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');
  const { addToCart } = useCart();
 
  useEffect(() => {
    api.get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch(() => setError('Product not found.'));
  }, [id]);
 
  if (error) return <p className='status error'>{error}</p>;
  if (!product) return <p className='status'>Loading...</p>;
 
  return (
    <div className='product-detail'>
      <img src={product.imageUrl} alt={product.name} />
      <div>
        <h2>{product.name}</h2>
        <p className='price'>₹{product.price}</p>
        <p>{product.description}</p>
        <p className='stock'>{product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</p>
        <button disabled={product.stock === 0} onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
 
export default ProductDetailPage;
