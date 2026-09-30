import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import api from '../api/axios';
 
function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ customerName: '', customerEmail: '', address: '' });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
 
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const orderItems = cartItems.map((item) => ({
        product: item._id, name: item.name, price: item.price, qty: item.qty,
      }));
      const res = await api.post('/orders', { ...form, items: orderItems, totalPrice: cartTotal });
      clearCart();
      navigate(`/order-success/${res.data._id}`);
    } catch (err) {
      setError('Could not place order. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };
 
  if (cartItems.length === 0) return <p className='status'>Your cart is empty.</p>;
 
  return (
    <form className='checkout-page' onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <input name='customerName' placeholder='Full name' required onChange={handleChange} />
      <input name='customerEmail' type='email' placeholder='Email' required onChange={handleChange} />
      <textarea name='address' placeholder='Delivery address' required onChange={handleChange} />
      <h3>Total: ₹{cartTotal}</h3>
      {error && <p className='status error'>{error}</p>}
      <button type='submit' disabled={submitting}>
        {submitting ? 'Placing order...' : 'Place Order'}
      </button>
    </form>
  );
}
 
export default CheckoutPage;
