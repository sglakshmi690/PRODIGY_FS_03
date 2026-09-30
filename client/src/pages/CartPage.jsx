import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
 
function CartPage() {
  const { cartItems, updateQty, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();
 
  if (cartItems.length === 0) {
    return (
      <div className='cart-page empty'>
        <p>Your cart is empty.</p>
        <Link to='/'>Continue shopping</Link>
      </div>
    );
  }
 
  return (
    <div className='cart-page'>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div className='cart-row' key={item._id}>
          <img src={item.imageUrl} alt={item.name} />
          <div className='cart-row-info'>
            <p>{item.name}</p>
            <p>₹{item.price} x {item.qty} = ₹{item.price * item.qty}</p>
          </div>
          <input
            type='number'
            min='1'
            value={item.qty}
            onChange={(e) => updateQty(item._id, Number(e.target.value))}
          />
          <button onClick={() => removeFromCart(item._id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ₹{cartTotal}</h3>
      <button className='checkout-btn' onClick={() => navigate('/checkout')}>
        Proceed to Checkout
      </button>
    </div>
  );
}
 
export default CartPage;
