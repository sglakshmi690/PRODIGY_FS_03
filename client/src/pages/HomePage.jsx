import { useEffect, useState } from 'react';
import api from '../api/axios';
import ProductCard from '../components/ProductCard';
 
function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');
 
  useEffect(() => {
    setLoading(true);
    api.get('/products', { params: { category, sort } })
      .then((res) => setProducts(res.data))
      .catch(() => setError('Could not load products. Is the backend running?'))
      .finally(() => setLoading(false));
  }, [category, sort]);
 
  if (loading) return <p className='status'>Loading products...</p>;
  if (error) return <p className='status error'>{error}</p>;
 
  return (
    <div className='home-page'>
      <div className='filters'>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value=''>All Categories</option>
          <option value='Vegetables'>Vegetables</option>
          <option value='Fruits'>Fruits</option>
          <option value='Dairy'>Dairy</option>
          <option value='Bakery'>Bakery</option>
          <option value='Grains'>Grains</option>
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value=''>Sort By</option>
          <option value='price_asc'>Price: Low to High</option>
          <option value='price_desc'>Price: High to Low</option>
        </select>
      </div>
      <div className='product-grid'>
        {products.length === 0 
          ? <p className='status'>No products found.</p>
          : products.map((p) => <ProductCard key={p._id} product={p} />)}
      </div>
    </div>
  );
}
 
export default HomePage;
